const quizzesData = [
  {
    id: 1,
    title: "Introduction to Organic Chemistry",
    topic: "Structure and Bonding",
    description: "Test your knowledge of hybridization, bonding, and molecular geometry.",
    questions: [
      {
        question: "What is the hybridization of carbon in methane (CH₄)?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correct: "sp3",
      },
      {
        question: "Which type of bond involves sharing of electrons?",
        options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
        correct: "Covalent",
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
        options: ["NH3", "BF3", "OH−", "H2O"],
        correct: "BF3",
      },
      {
        question: "What is the conjugate base of H₂SO₄?",
        options: ["HSO₄−", "SO₄²−", "H₃O+", "OH−"],
        correct: "HSO₄−",
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
        correct: "Bimolecular, single-step",
      },
    ],
  },
];

export default quizzesData;
