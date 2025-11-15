const quizzesData = [
  {
    id: 1,
    title: "Introduction to Organic Chemistry",
    topic: "Structure and Bonding",
    description: "Test your knowledge of hybridization, bonding, and molecular geometry.",
    questions: [
      {
        question: "What is the hybridization of carbon in methane (CH4)?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        answer: "sp3",
      },
      {
        question: "Which type of bond involves sharing of electrons?",
        options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
        answer: "Covalent",
      },
    ],
  },
  {
    id: 2,
    title: "Acids and Bases",
    topic: "Acid-Base Theory",
    description: "Identify strong and weak acids and bases, and predict reaction outcomes.",
    questions: [
      {
        question: "Which of the following is a Lewis acid?",
        options: ["NH3", "BF3", "OH-", "H2O"],
        answer: "BF3",
      },
      {
        question: "What is the conjugate base of H2SO4?",
        options: ["HSO4-", "SO4²-", "H3O+", "OH-"],
        answer: "HSO4-",
      },
    ],
  },
  {
    id: 3,
    title: "Reaction Mechanisms",
    topic: "Organic Reactions",
    description: "Explore SN1, SN2, and E1/E2 mechanisms.",
    questions: [
      {
        question: "SN2 reactions proceed via what kind of mechanism?",
        options: [
          "Unimolecular, two-step",
          "Bimolecular, single-step",
          "Radical chain mechanism",
          "Proton transfer mechanism",
        ],
        answer: "Bimolecular, single-step",
      },
    ],
  },
];

export default quizzesData;
