var config = {
  apiKey: "AIzaSyD4_oup1lBWqLJNG6ZBWG8oIO_3crXzWh8",
  authDomain: "sap-hackathon-4ec6b.firebaseapp.com",
  databaseURL: "https://sap-hackathon-4ec6b.firebaseio.com",
  projectId: "sap-hackathon-4ec6b",
  storageBucket: "sap-hackathon-4ec6b.appspot.com",
  messagingSenderId: "623006013346",
  appId: "1:623006013346:web:d83e05d45b1888876e44fb",
  measurementId: "G-M5JCE5CLSR"
};

firebase.initializeApp(config);

var imageLink = null;
var listingImageRef = null;
var imageRef = null;
var loggedIn = false;
var userID = null;

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
//Firebase default configuration
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.

            $('#user_login').modal('hide');
            loadnavbar();

            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '#',
    signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
    // Terms of service url.
    tosUrl: 'terms.html',
    // Privacy policy url.
    privacyPolicyUrl: 'terms.html'

};

// Load the login container
ui.start('#firebaseui-auth-container', uiConfig); // load our login

function logout() {
  firebase.auth().signOut().then(function () {
      localStorage.setItem('uid', "");
      // Sign-out successful.
  }).catch(function (error) {
      // An error happened.
  });
  location.href = "index.html"

}

// Load the login container
ui.start('#firebaseui-auth-container', uiConfig); // load our login


// This function sets the profile image to the user's
// User's Profile Image can be accessed on every page
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        //User is logged in
        userID = firebase.auth().currentUser.uid;
        localStorage.setItem('uid', userID);
        //Initialize the image reference then call getProfileImage()
        imageRef = firebase.database().ref('ProfileImages/' + userID);
        getProfileImage();
        listingImageRef = firebase.database().ref('ListingImages/' + userID);

    } else {
        // loggedIn = true;
    }
});