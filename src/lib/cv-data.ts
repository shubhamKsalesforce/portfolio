export const profile = {
  name: "Shubham Kundu",
  title: "Technical Architect | Ideahelix",
  location: "Bangalore, India",
  email: "shubhsalesforce@gmail.com",
  phone: "+91-9804954068",
  totalExperience: "9+ years",
  summary:
    "Experienced Salesforce professional with a proven track record in architecting solutions within the Salesforce ecosystem, particularly focused on Salesforce Omnistudio. Demonstrated expertise in designing and implementing scalable and innovative solutions to meet business requirements. Proficient in analyzing complex business processes and translating them into efficient technical solutions. Skilled communicator and leader, adept at collaborating with cross-functional teams to drive successful project outcomes.",
} as const;

export const skills: string[] = [
  "Vlocity",
  "CPQ",
  "Order Management",
  "EPC",
  "Digital Commerce",
  "Salesforce",
  "Apex",
  "SOQL",
  "LWC",
  "HTML",
  "JavaScript",
  "CSS",
  "GIT",
  "IDX Workbench",
  "Java",
  "Integration",
];

export const industries: string[] = [
  "Telecommunication",
  "Energy and Utilities",
  "Health",
  "Insurance",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  duration: string;
  client: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Ideahelix",
    role: "Technical Architect",
    period: "July 2024 – Present",
    duration: "1.10 years",
    client: "Telecommunication B2B | Insurance (Pre-Sales)",
    bullets: [
      "Led delivery on two Telecommunications engagements, owning Order Management and CPQ workstreams end-to-end.",
      "Designed and developed complex Callout-to-Billing integrations between Salesforce and downstream billing systems.",
      "Partnered with the Pre-Sales team on new Telco and Insurance opportunities, shaping solution architecture and effort estimates.",
      "Built a Proof of Concept on Revenue Cloud — Agentforce Revenue Management (ARM) — and used Agentforce Builder to author custom AI agents.",
    ],
  },
  {
    company: "Cloobees",
    role: "Technical Lead | Senior Vlocity Developer",
    period: "April 2021 – June 2024",
    duration: "3.2 years",
    client: "Telecommunication B2B | Energy & Utilities",
    bullets: [
      "Design and implement scalable and flexible solutions using Salesforce Omnistudio, ensuring alignment with best practices and industry standards.",
      "Lead a team of developers and engineers in executing project deliverables, providing technical guidance and support throughout the development lifecycle.",
      "Conduct code reviews, performance optimizations, and troubleshooting to ensure the quality and reliability of implemented solutions.",
      "Drive continuous improvement initiatives, identifying opportunities to enhance processes, tools, and methodologies related to Salesforce Omnistudio development.",
    ],
  },
  {
    company: "Deloitte",
    role: "Consultant (Vlocity)",
    period: "June 2020 – April 2021",
    duration: "10 months",
    client: "Health | Media",
    bullets: [
      "Designed optimized rating algorithm using Batch Apex and Integration Procedure.",
      "Designed and developed Rules like Underwriter Rule and Eligibility for Root Products.",
      "Deployed components to higher environments using Autorabit.",
      "RFP for an Indian Media client. (Demo for Client).",
    ],
  },
  {
    company: "Capgemini",
    role: "Associate Consultant (Vlocity)",
    period: "December 2018 – June 2020",
    duration: "1.7 years",
    client: "Telecommunication B2B & B2C",
    bullets: [
      "Responsible for creating technical configurations to external fulfilment systems at design time.",
      "Configuration of Commercial and Technical Product (Picklist, Attributes, Pricing, Rules, Entity Filters).",
      "Responsible for creating Order Management design-time configurations, including modelling of technical products, services and resources, and modelling decomposition and orchestration rules.",
      "Implementing Order Management (Decompositions and Orchestration).",
      "Developed Dataraptor and APEX callouts to Downstream APIs.",
      "Deploying Products and Orchestrations to upper environments from developer sandbox.",
    ],
  },
  {
    company: "IBM",
    role: "Salesforce & Vlocity Developer",
    period: "January 2017 – November 2018",
    duration: "2 years",
    client: "Telecommunication B2C",
    bullets: [
      "Being the Administrator in the organization created Profiles, Users, Permission Sets and implemented Record-Level and Field-Level security and configured their sharing settings.",
      "Worked on Dataraptors, Omniscripts.",
      "Worked on creating SWAGGER file for Integrations.",
    ],
  },
];

export const certifications: string[] = [
  "Communications Cloud Accredited Professional",
  "Energy and Utilities Cloud Accredited Professional",
  "Salesforce Certified OmniStudio Developer",
  "Salesforce Certified OmniStudio Consultant",
  "Salesforce Certified Industries CPQ Developer",
  "Salesforce Certified Revenue Cloud Consultant",
  "Vlocity Certified Communications Order Management Developer I",
  "Vlocity Certified Professional Communications Developer II",
  "Vlocity Health Quoting Developer I",
  "Vlocity Certified Professional Health Developer II",
  "Vlocity Insurance Quoting Developer I",
  "Vlocity Energy and Utilities Developer I",
  "Salesforce Certified Platform Developer I",
  "Salesforce Certified Platform Developer II",
  "Salesforce Certified Administrator",
  "Salesforce Certified Platform App Builder",
  "Salesforce Certified Sharing and Visibility Designer",
  "Salesforce Certified Data Architecture and Management Designer",
  "Salesforce Certified Identity and Access Management Designer",
  "Salesforce Certified Application Architect",
  "Salesforce Certified JavaScript Developer 1",
];

export const awards: string[] = [
  "Capgemini Enabling Champion, 2019",
  "Deloitte Spot Award for Vlocity COE, 2020",
  "Cloobees Most Valued Bee, 2022",
  "Cloobees Most Valued Bee, 2023",
];
