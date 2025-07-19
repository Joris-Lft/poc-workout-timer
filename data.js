const exercices = [
  {
    id: 1,
    name: "Corde à sauter",
    duration: 60,
  },
  {
    id: 2,
    name: "Squats",
    duration: 45,
  },
  {
    id: 3,
    name: "Wall Ball",
    duration: 60,
  },
  {
    id: 4,
    name: "Kettlebell Swings",
    duration: 45,
  },
  {
    id: 5,
    name: "Jumping Jack",
    duration: 45,
  },
  {
    id: 6,
    name: "Burpees",
    duration: 30,
  },
  {
    id: 7,
    name: "Pompes",
    duration: 30,
  },

  // Abdos variés
  {
    id: 8,
    name: "Crunchs",
    duration: 30,
  },
  {
    id: 9,
    name: "Gainage (planche)",
    duration: 60,
  },
  {
    id: 10,
    name: "Relevés de jambes",
    duration: 45,
  },
  {
    id: 11,
    name: "Russian Twists",
    duration: 45,
  },
  {
    id: 12,
    name: "Mountain Climbers",
    duration: 45,
  },

  // Dead hang + grip
  {
    id: 13,
    name: "Dead Hang",
    duration: 30,
  },
  {
    id: 14,
    name: "Dead Hang avec épaules engagées",
    duration: 30,
  },
  {
    id: 15,
    name: "Dead Hang avec élévation de jambes",
    duration: 30,
  },
  {
    id: 16,
    name: "Dead Hang avec mouvements de jambes",
    duration: 30,
  },

  // Mobility & étirements
  {
    id: 17,
    name: "Étirement des épaules",
    duration: 45,
  },
  {
    id: 18,
    name: "Étirement des ischio-jambiers",
    duration: 45,
  },
  {
    id: 19,
    name: "Étirement du dos",
    duration: 45,
  },

  // Renfo & mobilité
  {
    id: 20,
    name: "Lunges (fentes)",
    duration: 45,
  },
  {
    id: 21,
    name: "Planche latérale",
    duration: 45,
  },
  {
    id: 22,
    name: "Superman",
    duration: 45,
  },
  {
    id: 23,
    name: "Dips sur chaise",
    duration: 30,
  },
  {
    id: 24,
    name: "Pull-ups assistés",
    duration: 30,
  },

  // Cardio & explosivité
  {
    id: 25,
    name: "Sprint sur place",
    duration: 30,
  },
  {
    id: 26,
    name: "High Knees",
    duration: 30,
  },
  {
    id: 27,
    name: "Skaters",
    duration: 30,
  },
  {
    id: 28,
    name: "Box Jumps",
    duration: 30,
  },
];

const circuits = [
  {
    id: 1,
    name: "Full Body Express",
    exercises: [5, 2, 7, 6, 4],
  },
  {
    id: 2,
    name: "Cardio Blast",
    exercises: [1, 5, 6, 3, 6],
  },
  {
    id: 3,
    name: "Abdos Hardcore",
    exercises: [8, 9, 10, 11, 12],
  },
  {
    id: 4,
    name: "Home Gym Mix",
    exercises: [2, 7, 4, 10, 5],
  },
  {
    id: 5,
    name: "Grip & Suspensions",
    exercises: [13, 14, 15, 16, 24], // Dead hangs + Pull-ups assistés
  },
  {
    id: 6,
    name: "Mobility Flow",
    exercises: [17, 18, 19, 21, 22],
  },
  {
    id: 7,
    name: "Legs & Plyo",
    exercises: [20, 27, 25, 28, 2], // Lunges, Skaters, Sprint, Box Jumps, Squats
  },
  {
    id: 8,
    name: "Upper Body Strength",
    exercises: [7, 23, 24, 14, 4], // Pompes, Dips, Pull-ups assistés, Dead Hang épaules, KB Swings
  },
  {
    id: 9,
    name: "Quick Core & Cardio",
    exercises: [11, 6, 12, 5, 9], // Russian Twists, Burpees, Mountain Climbers, Jumping Jack, Planche
  },
];
