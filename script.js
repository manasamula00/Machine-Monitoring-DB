
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB20OKf5dTwLL8ojh3w-bBC3GmkRTm-UTg",
    authDomain: "machinemonitor-fd101.firebaseapp.com",
    databaseURL: "https://machinemonitor-fd101-default-rtdb.firebaseio.com",
    projectId: "machinemonitor-fd101",
    storageBucket: "machinemonitor-fd101.firebasestorage.app",
    messagingSenderId: "681417446765",
    appId: "1:681417446765:web:49234ba7c69cca5db2b664",
    measurementId: "G-GLG2EH2FLV"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference to Firebase database (ensure the path is correct)
const dataRef = database.ref("Machine"); // Update path if necessary

// Fetch real-time data
dataRef.on("value", (snapshot) => {
    const data = snapshot.val();
    console.log(data); // Log the data to check what's returned from Firebase
    if (data) {
        document.getElementById("temperature").innerText = data.TEMP || "--";
        document.getElementById("Current").innerText = data.Current || "--";
        document.getElementById("Vibration").innerText = data.Vibration || "--";
        document.getElementById("Alert").innerText = "Normal!";
    } else {
        document.getElementById("status").innerText = "Critical";
    }
});
