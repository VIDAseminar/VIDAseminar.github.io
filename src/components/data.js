// src/data.js

export const nextTalk = {
  date: "Wed, Nov 20, 2024",
  time: "11:00 - 12:00",
  location: "Room 1178, 370 Jay St",
  speaker1: "Alexander Ratzan",
  topic1: "Molecular Connectomics from Small to Large Brains",
  speaker2: "Felipe Inagaki de Oliveira",
  topic2: "",
};

export const talkDetails = {
  title1: "Topic1: Molecular Connectomics from Small to Large Brains",
  researcher1: "Alexander Ratzan, Second year PhD student, Advised by Erdem Varol",
  image1: "./images/Alex.jpg",
  abstract1:
    "Biological neural networks, or 'connectomes', evolved under stringent evolutionary constraints to enable brains of all scales to perform complex behaviors. A longstanding goal of systems neuroscience is to uncover the genetic and molecular factors that contribute to the precise wiring of these networks. In this talk, I will present modeling approaches aimed at integrating genomics and neuroimaging to provide insight into the multimodal factors that shape the connectome across species. I will further introduce key challenges of addressing this research question, as well as avenues for maximizing impact across diverse fields from precision medicine to neuromorphic computing.",
  
  title2: "Topic2: ",
  researcher2: "Felipe Inagaki de Oliveira, Second year PhD student, Advised by Claudio Silva",
  image2: "",
  abstract2:
    "",
};

export const upcomingTalks = [
  {
    date: "Dec 4, 2024",
    time: "11:00 - 11:30",
    location: "Room xxxx, 370 Jay St",
    speaker: "TBD",
    topic: ""
  },
  {
    date: "Dec 4, 2024",
    time: "11:30 - 12:00",
    location: "Room xxxx, 370 Jay St",
    speaker: "TBD",
    topic: "",
  }
];

export const historyTalksData = [
  {
      date: "Nov 6, 2024",
      speakers: [
          {
              name: "Teal Witter",
              title: "Provably Accurate Estimators for Shapley Values",
              zoomLink: "https://drive.google.com/file/d/1sbsi3bMhd1Vteu_aHCDVr6Zo6lfH1SXI/view?usp=drive_link",
              slidesLink: "https://drive.google.com/file/d/1Lcknq7lghj9I56zokmK0zKex-U94PGyn/view?usp=drive_link"
          },
          {
              name: "Niv Cohen",
              title: "Discovering and Erasing Undesired Concepts",
              zoomLink: "https://drive.google.com/file/d/1obz3bRHseG45eXnTXLqfZEwJv0oXNz1j/view?usp=drive_link",
              slidesLink: "https://drive.google.com/file/d/1meFaiUg22yKswZtZ6eYWojTUoWGyCefT/view?usp=drive_link"
          }
      ]
  },
  // Additional events...
];
