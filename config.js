// Copy/paste info from Firebase. Make sure to keep the word "export".
export const firebaseConfig = {
    apiKey: "AIzaSyAs9nhZuvHgGlPORPR3c_LYHenXjfbnamo",
    authDomain: "schoen-poll.firebaseapp.com",
    projectId: "schoen-poll",
    storageBucket: "schoen-poll.firebasestorage.app",
    messagingSenderId: "160493309944",
    appId: "1:160493309944:web:40201dc27a1749c5a4500d"
};

// Specify the URL to the clicker here, for the QR code.
export const clickerUrl = "https://nicolasboumal.github.io/schoen-poll/";

// Custom color palette for displaying the results (bubbles)
// export const colors = ["#4C72B0", "#55A868", "#8172B2", "#64B5CD", "#CCB974", "#C44E52"];
// export const colors = ["#02468E", "#007355", "#86228F", "#B88700", "#B63A4A", "#00869A"];
export const colors = ["#02468E", "#007355", "#86228F", "#D55E00", "#B79F00", "#4E8CFF"];

// Define buttons with preset options
export const presetButtons = [
    ['Yes', 'No'],
    ['True', 'False'],
    ['Yes', 'No', 'Unsure'],
    ['True', 'False', 'Unsure'],
    ['A', 'B', 'C', 'D']
];
