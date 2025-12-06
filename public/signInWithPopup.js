// Import Firebase modular SDK (v9+)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Load Firebase config from API endpoint
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
    throw error;
  }
}

// Initialize Firebase
let app;
let auth;
let initialized = false;

async function initializeFirebase() {
  if (initialized) return;
  
  const firebaseConfig = await loadFirebaseConfig();
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  initialized = true;
}

// Initialize immediately
await initializeFirebase();

// This code runs inside of an iframe in the extension's offscreen document.
// This gives you a reference to the parent frame, i.e. the offscreen document.
// You will need this to assign the targetOrigin for postMessage.
const PARENT_FRAME = document.location.ancestorOrigins?.[0] || window.location.origin;

// This demo uses the Google auth provider, but any supported provider works.
// Make sure that you enable any provider you want to use in the Firebase Console.
// https://console.firebase.google.com/project/_/authentication/providers
const PROVIDER = new GoogleAuthProvider();

function sendResponse(result) {
  // Send JSON stringified result to parent frame (offscreen.js)
  // The parent frame will forward this to the extension's service worker
  globalThis.parent.self.postMessage(JSON.stringify(result), PARENT_FRAME);
}

// Listen for messages from offscreen.js
globalThis.addEventListener('message', async function(event) {
  const { data } = event;
  
  // Verify origin for security (only accept messages from Chrome extension or same origin)
  const allowedOrigins = [
    'chrome-extension://',
    window.location.origin,
  ];
  
  const isValidOrigin = allowedOrigins.some(allowed => 
    event.origin?.startsWith(allowed)
  );
  
  if (!isValidOrigin) {
    console.warn('Rejected message from unauthorized origin:', event.origin);
    return;
  }

  if (data.initAuth) {
    // Ensure Firebase is initialized
    await initializeFirebase();
    
    // Opens the Google sign-in page in a popup, inside of an iframe in the
    // extension's offscreen document.
    // To centralize logic, all responses are forwarded to the parent frame,
    // which goes on to forward them to the extension's service worker.
    signInWithPopup(auth, PROVIDER)
      .then(sendResponse)
      .catch(sendResponse);
  }
});

// Notify parent that script is loaded
if (window.parent && window.parent !== window) {
  window.parent.postMessage({
    type: 'FIREBASE_SCRIPT_LOADED'
  }, PARENT_FRAME);
}
