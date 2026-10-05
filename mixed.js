// Task 1: Create the Profile
let userProfile = [
  "Jordan",
  28,
  true,
  { city: "St. Louis" },
  ["Gaming", "Hiking"]
];

// Task 2: Access and Log Profile Details
console.log(userProfile[0]);
console.log(userProfile[4][1]);

// Task 3: Modify the Profile
userProfile[1] = 29;
userProfile[4][2] = "Reading";

// Task 4: Display the Updated Profile
console.log(userProfile);
