import {
    mobile,
    backend,
    creator,
    web,
    
    excel,
    bi,
    tableau,
    python,
   
    sat,
    satsure,
    titanic,
    superstore,
    beauty,
    customer,
  
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
      name: "Excel",
      icon: excel,
    },
    {
      name: "Tableau",
      icon: tableau,
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
      name: "Superstore Sales Analysis",
      description:
        "Analyzed sales data to uncover key trends and optimize strategies. Developed an interactive Tableau dashboard to visualize performance across regions, categories, and customer segments.",
      tags: [
        {
          name: "tableau",
          color: "blue-text-gradient",
        },
        
      ],
      image: superstore,
      source_code_link: "https://github.com/sadhanakeshav/Superstore-Sales-Analysis",
    },
    {
      name: "Supply Chain Dynamics",
      description:
        "Analyzed supply chain data to identify bottlenecks and improve efficiency using Power BI. Developed an interactive dashboard for strategic decision-making in supply chain management.",
      tags: [
        {
          name: "powerbi",
          color: "green-text-gradient",
        },
       
      ],
      image: beauty,
      source_code_link: "https://github.com/sadhanakeshav/Supply_Chain_Analysis",
    },
    {
      name: "Customer Segmentation",
      description:
        "Analyzed customer data to categorize customers based on age, income, and spending behavior using Python. Applied K-means clustering to identify distinct customer segments and visualize key insights for personalized marketing strategies.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
       
      ],
      image: customer,
      source_code_link: "https://github.com/sadhanakeshav/Customer_Segmentation_k-means",
    },
  ];
  
  export { services, technologies, experiences,  projects };
  