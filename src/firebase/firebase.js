import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIRBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_Added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").push({
//   description: "d1",
//   note: "n1",
//   amount: "a1",
//   createdAt: "c1",
// });

// database.ref("expenses").push({
//   description: "d1",
//   note: "n1",
//   amount: "a1",
//   createdAt: "c1",
// });

// database.ref("expenses").push({
//   description: "d1",
//   note: "n1",
//   amount: "a1",
//   createdAt: "c1",
// });

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("Error fetching data", error);
//   });

// database
//   .ref()
//   .set({
//     name: "Amir Hossein Jobeiri",
//     age: 25,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google",
//     },
//     location: {
//       city: "Karaj",
//       country: "Iran",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved.");
//   })
//   .catch((error) => {
//     console.log("This failed", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data was removed.");
//   })
//   .catch((error) => {
//     console.log("Did not remove data", error);
//   });
