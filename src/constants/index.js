import {
    mobile,
    backend,
    creator,
    web,
    
    mysql,
    excel,
    bi,
    tableau,
    python,
   
    ai,
    satsure,
    employee,
    titanic,
    beauty,
    superstore
    
  
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
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "Excel",
      icon: excel,
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
      date: "November 2024 - May 2025",
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
      name: "Healthcare Employee Attrition Analysis",
      description:
        "The healthcare project involves analyzing employee attrition data to uncover patterns and factors contributing to turnover.",
      tags: [
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
       
      ],
      image: employee,
      source_code_link: "https://github.com/sadhanakeshav/Healthcare_Employee_Attrition_Analysis",
    },
    {
      name: "Titanic Survival Analysis",
      description:
        "Analyzed passenger data from the Titanic disaster to understand survival factors. The dashboard highlights how age, gender, class, and embarkation port influenced survival rates.",
      tags: [
        {
          name: "excel",
          color: "green-text-gradient",
        },
       
      ],
      image: titanic,
      source_code_link: "https://github.com/sadhanakeshav/Titanic_Survival_Analysis",
    },
    {
      name: "Supply Chain Dynamics",
      description:
        "Analyzed supply chain data to identify bottlenecks and improve efficiency using Power BI. Developed an interactive dashboard for strategic decision-making in supply chain management.",
      tags: [
        {
          name: "powerbi",
          color: "blue-text-gradient",
        },
       
      ],
      image: beauty,
      source_code_link: "https://github.com/sadhanakeshav/Supply_Chain_Analysis",
    },
    {
      name: "Superstore Performance Analysis",
      description:
        " This project analyzes Superstore sales and profit data to uncover key trends and insights across categories, time, regions, and customer segments.",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
        
      ],
      image: superstore,
      source_code_link: "https://github.com/sadhanakeshav/Superstore_Analysis",
    },
    
    
  ];
  
  export { services, technologies, experiences,  projects };
  