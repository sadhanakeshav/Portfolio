import {
    mobile,
    backend,
    creator,
    web,
    
    mysql,
    excel,
    bi,
    python,
   
    sat,
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
      title: "Data Processor",
      icon: web,
    },
    {
      title: "Data  Analysis",
      icon: mobile,
    },
    {
      title: "Dashboard Developer",
      icon: backend,
    },
    {
      title: "Insight Translator",
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
      name: "Python",
      icon: python,
    },
    
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Satyukt Analytics Pvt Ltd",
      icon: sat,
      iconBg: "#383E56",
      date: "September 2021 - November 2021",
      points: [
        "Created a model to estimate crop age, linking crop production to market demands.",
        "Conducted site visits to onboard farmers into the Sat2Farm program, mapping farm details and identifying cultivated crops.",
        "Collected satellite imagery and computed the Normalized Difference Vegetation Index (NDVI) mean to assess crop health and growth.",
        
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "Satsure Analytics India Pvt Ltd",
      icon: satsure,
      iconBg: "#383E56",
      date: "April 2024 - Present",
      points: [
        "Developing and refining skeletonization algorithms to simplify and enhance the core structural representation of objects in satellite images for better feature extraction.",
        "Improving algorithm performance by addressing challenges related to noise, resolution, and lighting, while ensuring the accuracy of geographical data.",
        "Streamlining the integration of skeletonized data with GIS platforms such as QGIS, to enhance analysis and visualization capabilities for end-users.",
        
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
  