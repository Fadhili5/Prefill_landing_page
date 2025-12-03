// Load Firebase config from API endpoint (more secure)
async function loadFirebaseConfig() {
  // Try to get from parent window (set by offscreen.js)
  if (window.parent && window.parent.firebaseConfig) {
    return window.parent.firebaseConfig;
  }
  
  // Load from API endpoint instead of hardcoding
  try {
    const response = await fetch('/api/firebase-config');
    if (!response.ok) {
      throw new Error('Failed to load Firebase config');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading Firebase config:', error);
    // Fallback to environment-based config if API fails
    // This will only work if NEXT_PUBLIC_ vars are available
    return {
      apiKey: window.FIREBASE_API_KEY || '',
      authDomain: window.FIREBASE_AUTH_DOMAIN || '',
      projectId: window.FIREBASE_PROJECT_ID || '',
      storageBucket: window.FIREBASE_STORAGE_BUCKET || '',
      messagingSenderId: window.FIREBASE_MESSAGING_SENDER_ID || '',
      appId: window.FIREBASE_APP_ID || '',
      measurementId: window.FIREBASE_MEASUREMENT_ID || '',
    };
  }
}

// Initialize Firebase (async)
let firebaseInitialized = false;

async function initializeFirebase() {
  if (firebaseInitialized) return;
  
  const firebaseConfig = await loadFirebaseConfig();
  firebase.initializeApp(firebaseConfig);
  firebaseInitialized = true;
}

// Initialize immediately
initializeFirebase();

// Get auth instance (will be available after initialization)
function getAuth() {
  if (!firebaseInitialized) {
    throw new Error('Firebase not initialized yet');
  }
  return firebase.auth();
}

// Handle sign in with popup
// This function will be called by the Chrome extension's offscreen.js
window.signInWithPopup = async function(provider) {
  // Ensure Firebase is initialized
  await initializeFirebase();
  const auth = getAuth();
  return auth.signInWithPopup(provider)
    .then((result) => {
      // Send result back to parent window (offscreen.js)
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({
          type: 'FIREBASE_AUTH_SUCCESS',
          result: result
        }, '*');
      }
      return result;
    })
    .catch((error) => {
      // Send error back to parent window
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({
          type: 'FIREBASE_AUTH_ERROR',
          error: error.message
        }, '*');
      }
      throw error;
    });
};

// Listen for messages from offscreen.js
window.addEventListener('message', (event) => {
  // Verify origin for security (only accept messages from Chrome extension or same origin)
  const allowedOrigins = [
    'chrome-extension://',
    window.location.origin,
  ];
  
  const isValidOrigin = allowedOrigins.some(allowed => 
    event.origin.startsWith(allowed)
  );
  
  if (!isValidOrigin) {
    console.warn('Rejected message from unauthorized origin:', event.origin);
    return;
  }
  
  if (event.data.type === 'FIREBASE_SIGNIN_REQUEST') {
    const { provider } = event.data;
    // Ensure Firebase is initialized before signing in
    initializeFirebase().then(() => {
      return window.signInWithPopup(provider);
    })
      .then(() => {
        // Success already handled in signInWithPopup
      })
      .catch((error) => {
        console.error('Sign in error:', error);
      });
  }
});

// Notify parent that script is loaded
if (window.parent && window.parent !== window) {
  window.parent.postMessage({
    type: 'FIREBASE_SCRIPT_LOADED'
  }, '*');
}

