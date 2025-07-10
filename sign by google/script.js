    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";
    import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyD6zraP3KBgkAut4s81rM01KeSROBp2Z2U",
        authDomain: "apma-music.firebaseapp.com",
        projectId: "apma-music",
        storageBucket: "apma-music.appspot.com",
        messagingSenderId: "32855672499",
        appId: "1:32855672499:web:b5d053f3f1840b000e12c6",
        measurementId: "G-DS0PMWB0D9"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const googleBtn = document.getElementById("sign-in-btn");

    googleBtn.addEventListener("click", function() {
        googleBtn.disabled = true; // Disable button to prevent multiple clicks
        signInWithPopup(auth, provider)
            .then((result) => {
                alert("Signed in as: " + result.user.displayName);
            })
            .catch((error) => {
                alert("Sign in failed: " + error.message);
            })
            .finally(() => {
                googleBtn.disabled = false; // Re-enable button
            });
    });