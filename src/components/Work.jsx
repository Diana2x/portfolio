import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    company: "Wilmar Europe Trading B.V.",
    title: "Business Systems Analyst",
    duration: "Nov 2022 - Present",
    details:
      "As a Business Systems Analyst at Wilmar Europe Trading B.V. since November 2022, I collaborate with external developers to implement APIs and integrate SAP with SQL data. I optimize business processes by analyzing, designing, and implementing solutions. My role includes managing invoicing, providing user training on SAP applications, and conducting integration testing and troubleshooting. I work with stakeholders to understand their needs and translate them into actionable plans, maintaining documentation and preparing reports. Additionally, I manage multiple projects to ensure timely and budget-compliant completion while staying updated on industry trends to foster continuous improvement.",
  },
  {
    year: 2023,
    company: "CONOVATEC",
    title: "Volunteer Web Developer for Non-Profit Organization",
    duration: "Oct 2023 - Present",
    details:
      "I designed and implemented significant improvements in the user experience and accessibility of the informational website aimed at young people in the state of Peru, using advanced technologies such as React.js, Next.js and Chakra UI. Additionally, I worked closely with the team on an internal ERP project, contributing my technical skills and actively participating in the development of new features.",
  },
  {
    year: 2019,
    company: "Wilmar Europe Trading B.V.",
    title: "Customer Service and Logistics Executive",
    duration: "May 2019 - Nov 2022",
    details:
      "As a Customer Service and Logistics Executive at Wilmar Europe Trading B.V., I managed customer orders, coordinated logistics, and maintained supplier and customer relationships. I collaborated with the sales team to ensure timely deliveries and resolve complaints, handling the order-to-cash process, invoicing, and customer queries. I achieved efficiency improvements in logistics and supply chain operations, contributing to the company’s success. Fluent in English and Spanish, I facilitated client and colleague relationships, focusing on customer satisfaction and industry understanding. I managed stressful situations, handled trade documentation, and optimized operations with SAP. I met deadlines, prioritized tasks, and provided exceptional customer service, promoting team improvement. As a SAP Key User, I led productivity initiatives and supported finance with month-end closing activities.",
  },
  {
    year: 2018,
    company: "GEODIS",
    title: "Logistics Assistant",
    duration: "June 2018 - May 2019",
    details:
      "As a logistics Assistant I was in charge of tracking shipments, transportation modes, shipping costs, arrival times, and other critical factors in the shipping process. Process reports addressing inventory levels and needs regularly. Generate and maintain records of orders, invoices, packing lists, returns, and other essential shipping and receiving documentation.",
  },
  {
    year: 2012,
    company: "Teleperformance",
    title: "Technical Customer Support Representative",
    duration: "Sep 2012 - Sep 2014",
    details:
      "Working together with Comcast to provide technical customer service for the internet provider. Ensuring connectivity, server ports, router and switches.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 pb-8">
        Work Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          company={item.company}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
