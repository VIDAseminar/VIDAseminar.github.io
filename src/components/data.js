// src/data.js

export const nextTalk = {
  date: "Wed, Nov 6, 2024",
  time: "11:00 - 12:00",
  location: "Room 1114, 370 Jay St",
  speaker1: "Teal Witter",
  topic1: "Provably Accurate Estimators for Shapley Values",
  speaker2: "Niv Cohen",
  topic2: "Discovering and Erasing Undesired Concepts",
};

export const talkDetails = {
  title1: "Topic1: Provably Accurate Estimators for Shapley Values",
  researcher1: "Teal Witter, Fifth year PhD candidate, Advised by Chris Musco and Lisa Hellerstein",
  image1: "./images/Teal.JPG",
  abstract1:
    "Originally developed in game theory, Shapley values are now widely used in explainable machine learning to attribute model predictions to individual input features. However, calculating Shapley values exactly can be computationally demanding, requiring an exponential number of model evaluations in the number of features. To make this process more efficient, approximation algorithms are commonly used. One of the most popular is the Kernel SHAP algorithm, known for being model-agnostic and highly effective in practice. However, Kernel SHAP lacks strong, non-asymptotic guarantees on computational complexity. To address this, we introduce Leverage SHAP, a streamlined version of Kernel SHAP that provides provably accurate Shapley value estimates with nearly linear model evaluations. Our method leverages a connection between Shapley value estimation and agnostic active learning, utilizing leverage score sampling—a powerful technique in regression. Alongside its theoretical guarantees, Leverage SHAP consistently surpasses the performance of even the optimized Kernel SHAP implementation in the widely-used SHAP library [Lundberg & Lee, 2017].",
  
  title2: "Topic2: Discovering and Erasing Undesired Concepts",
  researcher2: "Jane Doe, Postdoc, Advised by Chinmay Hegde",
  image2: "./images/Niv.png",
  abstract2:
    "The rapid growth of generative models allows an ever-increasing variety of capabilities. Yet, these models may also produce undesired content such as unsafe images, private information, or copyrighted material. In this talk, I will discuss practical methods to prevent undesired generations. First, I will show how the challenge of avoiding undesired generations manifested itself in a simple Capture-the-Flag LLM setting, where even our top defense strategy was breached. Next, I will demonstrate a similar vulnerability in state-of-the-art concept erasure methods for Text-to-Image models. Finally, I will demonstrate how Task Vectors can help mitigate these vulnerabilities.",
};

export const upcomingTalks = [
  {
    date: "Nov 20, 2024",
    time: "11:00 - 11:30",
    location: "Room 1178, 370 Jay St",
    speaker: "Alexandeer Ratzan",
    topic: ""
  },
  {
    date: "Nov 20, 2024",
    time: "11:30 - 12:00",
    location: "Room 1178, 370 Jay St",
    speaker: "Guande Wu",
    topic: "",
  }
];

export const historyTalksData = [
  // {
  //   title: "Talk 1",
  //   task: "Discussing AI advancements",
  //   location: "Room A",
  //   photos: ["path/to/photo1.jpg", "path/to/photo2.jpg", "path/to/photo3.jpg"],
  // },
  // {
  //   title: "Talk 2",
  //   task: "Exploring Quantum Computing",
  //   location: "Room B",
  //   photos: ["path/to/photo4.jpg", "path/to/photo5.jpg", "path/to/photo6.jpg"],
  // },
];
