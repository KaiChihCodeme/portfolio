import emoji from "react-easy-emoji";
import { SkillsSectionType } from "./types/sections";

export const skillsSection: SkillsSectionType = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [
      {
        title: "Software Development",
        lottieAnimationFile: "/lottie/Animation-skills.json", // Path of Lottie Animation JSON File
        skills: [
          emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
          emoji("⚡ Building responsive static websites using Next.js"),
          emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        ],
        softwareSkills: [
          {
            skillName: "Python",
            iconifyTag: "logos:python",
          },
          {
            skillName: "Go",
            iconifyTag: "logos:gopher",
          },
          {
            skillName: "JavaScript",
            iconifyTag: "logos:javascript",
          },
          {
            skillName: "Reactjs",
            iconifyTag: "vscode-icons:file-type-reactjs",
          },
          {
            skillName: "Nextjs",
            iconifyTag: "vscode-icons:file-type-light-next",
          },
          {
            skillName: "AWS",
            iconifyTag: "logos:aws",
          },
          {
            skillName: "Heroku",
            iconifyTag: "logos:heroku-icon",
          },
          {
            skillName: "Github",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "Docker",
            iconifyTag: "logos:docker-icon",
          },
        ],
      },
    ],
  };