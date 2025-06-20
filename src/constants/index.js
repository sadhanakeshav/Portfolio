import {
  mobile,
  backend,
  creator,
  web,
  
  excel,
  mysql,
  bi,
  tableau,

 
  ai,
  satsure,
  hospital,
  superstore,
  beauty,
  plane,
  bank,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Explorer",
    icon: web,
  },
  {
    title: "Insight Seeker",
    icon: mobile,
  },
  {
    title: "Dashboard Creator",
    icon: backend,
  },
  {
    title: "Trend Spotter",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Excel",
    icon: excel,
  },
    {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Power BI",
    icon: bi,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
 
  
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Satsure Analytics India Pvt Ltd",
    icon: satsure,
    iconBg: "#383E56",
    date: "April 2024 - September 2024",
    points: [
      "Assisted in preprocessing and cleaning satellite road images for skeletonization using Python, learning concepts and coding techniques through self-study and online resources.",
      "Developed problem-solving and research skills by navigating challenges in satellite image processing and learning new domain knowledge independently.",
      
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Ai Variant",
    icon: ai,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Executed comprehensive data analysis projects involving large datasets for diverse industries, including banking and aviation.",
      "Conducted data cleaning and preprocessing using Excel, transforming raw datasets into structured formats and creating interactive dashboards to uncover key business insights.",
      "Developed visually compelling dashboards in Power BI and Tableau to analyze performance metrics, track trends, and support data-driven decision-making.",
      "Executed complex SQL queries to solve critical KPIs, contributing to process optimization and strategic planning initiatives.",
      
    ],
  },
 
 
];



const projects = [
  {
    name: "Superstore Analytics",
    description:
      "Crafted an interactive dashboard to uncover sales trends, profit insights, and business growth opportunities, driving strategic decision-making.",
    tags: [
      {
        name: "excel",
        color: "green-text-gradient",
      },
     
    ],
    image: superstore,
    source_code_link: "https://github.com/sadhanakeshav/Superstore_Analytics",
  },

   {
    name: "Hospital Readmissions ",
    description:
      "Explored hospital data using MySQL to uncover key patterns in patient care and readmissions, helping improve treatment and reduce costs.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
     
    ],
    image: hospital,
    source_code_link: "https://github.com/sadhanakeshav/Hospital_Readmissions",
  },
  {
    name: "Supply Chain Dynamics",
    description:
      "Analyzed supply chain data to identify bottlenecks and improve efficiency with an interactive Power BI dashboard for strategic decision-making.",
    tags: [
      {
        name: "powerbi",
        color: "orange-text-gradient",
      },
     
    ],
    image: beauty,
    source_code_link: "https://github.com/sadhanakeshav/Supply_Chain_Analysis",
  },

  {
    name: "High Cloud Airlines",
    description:
      "Crafted a Tableau dashboard that transforms airline data into a visual journey, uncovering hidden patterns in travel and route behavior.",
    tags: [
      {
        name: "tableau",
        color: "blue-text-gradient",
      },
     
    ],
    image: plane,
    source_code_link: "https://github.com/sadhanakeshav/Customer_Segmentation_k-means",
  },
 
  {
    name: "Bank Analytics",
    description:
      "Analyzed banking data across the full analytics pipeline — from data cleaning and SQL queries to interactive dashboards — using Excel, MySQL, Power BI, and Tableau.",
    tags: [
      {
        name: "excel, mysql, powerbi, tableau",
        color: "green-text-gradient",
      },
     
    ],
    image: bank,
    source_code_link: "https://github.com/sadhanakeshav/Bank_Analytics",
  },
];

export { services, technologies, experiences,  projects };
