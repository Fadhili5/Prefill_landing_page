// Load Firebase config
function loadFirebaseConfig() {
  // Try to get from parent window (set by offscreen.js)
  if (window.parent && window.parent.firebaseConfig) {
    return window.parent.firebaseConfig;
  }
  
  // Firebase config (can be public in client-side code)
  return {
    apiKey: "AIzaSyCoEybpCCbofyDjOvG7wTpMi3udGvMEVJM",
    authDomain: "gen-lang-client-0347078188.firebaseapp.com",
    projectId: "gen-lang-client-0347078188",
    storageBucket: "gen-lang-client-0347078188.firebasestorage.app",
    messagingSenderId: "922658590517",
    appId: "1:922658590517:web:d8d7a3de626dfc7b44c67c",
    measurementId: "G-60D3XCW5NG"
  };
}

// Initialize Firebase
const firebaseConfig = loadFirebaseConfig();
firebase.initializeApp(firebaseConfig);

// Get auth instance
const auth = firebase.auth();

// Handle sign in with popup
// This function will be called by the Chrome extension's offscreen.js
window.signInWithPopup = function(provider) {
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
  // Verify origin if needed (recommended for production)
  // if (event.origin !== 'https://yourlandingpage.com') return;
  
  if (event.data.type === 'FIREBASE_SIGNIN_REQUEST') {
    const provider = event.data.provider;
    window.signInWithPopup(provider)
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

