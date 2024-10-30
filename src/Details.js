// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import MongoDB from "./assets/techstack/MongoDB.png"
import js from "./assets/techstack/js.png";
import Python from "./assets/techstack/Python.png"
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import node from "./assets/techstack/node.png";
import Express from "./assets/techstack/Express.png";
import tf from "./assets/techstack/tf.png"
import cv from "./assets/techstack/cv.png"
import keras from "./assets/techstack/keras.png"
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpeg";
import projectImage2 from "./assets/projects/project2.jpeg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpeg";
import projectImage5 from "./assets/projects/project5.jpeg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Vineet Channe",
  tagline: "Computer Vision, Deep Learning and Full Stack Development",
  img: profile,
  about: `I am a flexible and skilled learner, with strong listening abilities and a creative approach, as well as a strong work ethic. Driven by a deep desire for learning, my goal is to blend the physical world with spiritual wisdom. I am comfortably proficient at Web development technologies React.js, Node.js, MongoDB, Express.js and am now fascinated by the advancements in Data Analytics, Computer Vision, NLP and Deep Learning, causing me to ponder their limitless possibilities. As a college student, I have been actively delving into and connecting different areas of study, with a particular emphasis on the Computer Vision and Deep Learning. I am confident in my ability to effectively lead and oversee teams, with the belief that I can add significant value to any innovative organization.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/vineet-channe-aa2213229/",
  github: "https://github.com/vineet-channe",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Backend Developer",
    Company: `BlackFoxMetaverse`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Aug 2024 - Dec 2024",
  },
  {
    Position: "Training and Placement Coordinator",
    Company: `Sardar Patel Institute Of Technology`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "Aug 2023 - March 2024",
  },
  {
    Position: "Teaching Assistant",
    Company: `Dr. Sudhir Dhage`,
    Location: "Mumbai",
    Type: "Internship",
    Duration: "Sep 2024 - Present",
  },
  {
    Position: "Teaching Assistant",
    Company: `Prof. Chandrashekar Gajbhiye`,
    Location: "Mumbai",
    Type: "Internship",
    Duration: "Sep 2024 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  // {
  //   Position: "Frontend Development",
  //   Company: "Udemy, YouTube, Google, Medium",
  //   Location: "Online",
  //   Type: "Full Time",
  //   Duration: "Jan 2022 - Present",
  // },
  {
    Position: "B.Tech Computer Engineering",
    Company: `Sardar Patel Institute Of Technology`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "Aug 2022 - 2026",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  Python : Python,
  react: react,
  tailwind: tailwind,
  node: node,
  Express: Express,
  MongoDB : MongoDB,
  tf : tf,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  keras: keras,
  cv: cv
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Brain Tumor Classifier",
    image: projectImage1,
    description: `Deep Learning model , which detects Brain Tumour , also performed with various CNN models such as VGGNet, ResNet, Xception, AlexNet, EfficientNet etc.`,
    techstack: "Python, TensorFlow, Keras, Numpy, Pandas, Matplotlib, OpenCV",
    previewLink: "",
    githubLink: "https://github.com",
  },
  {
    title: "Potato Plant Disease Classification",
    image: projectImage2,
    description: `Used Deep Learning Techniques to build a CNN model using TensorFlow and Keras to classify Potato diseases from image data.`,
    techstack: "Python, TensorFlow, Keras, Numpy, Pandas, Matplotlib, OpenCV",
    previewLink: "",
    githubLink: "https://github.com/vineet-channe/Potato-Disease-Classification",
  },
  {
    title: "YOLO Object Detection",
    image: projectImage3,
    description: `Detected 80 distinct object classes including vehicles, animals, and household items from a custom-defined list.`,
    techstack: "Python, OpenCV, Ultralytics",
    previewLink: "",
    githubLink: "https://github.com/vineet-channe/YOLO_OBJECT_DETECTION",
  },
  {
    title: "Virtual Piano",
    image: projectImage4,
    description: `Virtual Piano is a computer vision based project that allows you to play a piano through hand-gesture.`,
    techstack: "Python, Numpy, PythonAutoGUI, OpenCV",
    previewLink: "",
    githubLink: "https://github.com/vineet-channe/Virtual-Piano",
  },
  {
    title: "Happy Sad Image Classifier",
    image: projectImage5,
    description: `This is a simple deep learning model to detect whether a person is happy or sad.`,
    techstack: "Python, TensorFlow, Keras, Numpy, Pandas, Matplotlib, OpenCV",
    previewLink: "",
    githubLink: "https://github.com/vineet-channe/happy_sad",
  },
  {
    title: "BFM Backend",
    image: projectImage6,
    description: `Created a whole Backend for a upcoming Metaverse Marketplace named BlackFoxMetaverse`,
    techstack: "HTML/CSS, JavaScript, Node.js, React.js, Postman, MongoDB",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "vineetchanneproffesional@gmail.com",
  phone: "",
};
