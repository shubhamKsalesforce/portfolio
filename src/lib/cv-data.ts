export const profile = {
  name: "Shubham Kundu",
  title: "Technical Architect | Ideahelix",
  location: "Bangalore, India",
  email: "shubhsalesforce@gmail.com",
  phone: "+91-9804954068",
  linkedin: "https://www.linkedin.com/in/shubham-kundu-%E2%98%81-a38b83102/",
  trailblazer: "https://www.salesforce.com/trailblazer/skundu150",
  totalExperience: "9+ years",
  summary:
    "Salesforce Industry Technical Architect with 9 years of extensive experience in designing and developing robust Salesforce solutions across various sectors, including Communications Cloud, Energy and Utilities Cloud, and Media Cloud. Known for crafting innovative and scalable solutions that drive business transformation and efficiency.\n\nWith a strong foundation in Salesforce and Salesforce Industries design and development, there is a proven track record of delivering high-quality, industry-specific solutions that meet complex business requirements. This journey in the Salesforce ecosystem has equipped the ability to lead technical teams, architect end-to-end solutions, and ensure seamless integration and deployment.\n\nPassionate about leveraging Salesforce technologies to solve real-world challenges, committed to continuous learning and staying at the forefront of industry trends.",
} as const;

export const skills: string[] = [
  "Agentforce Revenue Management",
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
  "Media",
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
  logo?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Ideahelix",
    role: "Technical Architect",
    period: "July 2024 – Present",
    duration: "1.10 years",
    client: "Telecommunication B2B | Insurance (Pre-Sales)",
    logo: "/employers/ideahelix.svg",
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
    logo: "/employers/cloobees.webp",
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
    logo: "/employers/deloitte.svg",
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
    logo: "/employers/capgemini.svg",
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
    logo: "/employers/ibm.svg",
    bullets: [
      "Being the Administrator in the organization created Profiles, Users, Permission Sets and implemented Record-Level and Field-Level security and configured their sharing settings.",
      "Worked on Dataraptors, Omniscripts.",
      "Worked on creating SWAGGER file for Integrations.",
    ],
  },
];

export type Client = {
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { name: "Telia", logo: "/clients/telia.png" },
  { name: "T-Mobile", logo: "/clients/t-mobile.svg" },
  { name: "Orange", logo: "/clients/orange.svg" },
  { name: "Three", logo: "/clients/three.png" },
  { name: "Consolidated Communications", logo: "/clients/consolidated-communications.png" },
  { name: "KCOM", logo: "/clients/kcom.png" },
  { name: "TET", logo: "/clients/tet.png" },
  { name: "Smartest Energy", logo: "/clients/smartest-energy.png" },
  { name: "Sony Entertainment Television", logo: "/clients/sony-entertainment.png" },
  { name: "Anthem", logo: "/clients/anthem.png" },
  { name: "Rev", logo: "/clients/rev.jpg" },
];

export type Certification = {
  name: string;
  badge?: string;
};

export const certifications: Certification[] = [
  { name: "Communications Cloud Accredited Professional", badge: "/certs/communications-cloud-accredited.png" },
  { name: "Energy and Utilities Cloud Accredited Professional", badge: "/certs/energy-utilities-cloud-accredited.png" },
  { name: "Salesforce Certified OmniStudio Developer", badge: "/certs/omnistudio-developer.png" },
  { name: "Salesforce Certified OmniStudio Consultant", badge: "/certs/omnistudio-consultant.png" },
  { name: "Salesforce Certified Industries CPQ Developer", badge: "/certs/industries-cpq-developer.png" },
  { name: "Salesforce Certified Revenue Cloud Consultant", badge: "/certs/revenue-cloud-consultant.png" },
  { name: "Vlocity Certified Communications Order Management Developer I", badge: "/certs/vlocity-comms-order-mgmt-developer-i.png" },
  { name: "Vlocity Certified Professional Communications Developer II", badge: "/certs/vlocity-comms-developer-ii.png" },
  { name: "Vlocity Certified Communications & Media CPQ Administrator", badge: "/certs/vlocity-comms-media-cpq-admin.png" },
  { name: "Vlocity Certified Platform Consultant (Digital Interaction Platform)", badge: "/certs/vlocity-platform-consultant-dip.png" },
  { name: "Vlocity Health Quoting Developer I", badge: "/certs/vlocity-health-quoting-developer-i.png" },
  { name: "Vlocity Certified Professional Health Developer II", badge: "/certs/vlocity-health-developer-ii.png" },
  { name: "Vlocity Insurance Quoting Developer I", badge: "/certs/vlocity-insurance-quoting-developer-i.png" },
  { name: "Vlocity Energy and Utilities Developer I", badge: "/certs/vlocity-energy-utilities-developer-i.png" },
  { name: "Salesforce Certified Platform Developer I", badge: "/certs/platform-developer-i.png" },
  { name: "Salesforce Certified Platform Developer II", badge: "/certs/platform-developer-ii.png" },
  { name: "Salesforce Certified Administrator", badge: "/certs/administrator.png" },
  { name: "Salesforce Certified Platform App Builder", badge: "/certs/platform-app-builder.png" },
  { name: "Salesforce Certified Sharing and Visibility Designer", badge: "/certs/sharing-and-visibility-designer.png" },
  { name: "Salesforce Certified Data Architecture and Management Designer", badge: "/certs/data-architecture-and-management-designer.png" },
  { name: "Salesforce Certified Identity and Access Management Designer", badge: "/certs/identity-and-access-management-designer.png" },
  { name: "Salesforce Certified Application Architect", badge: "/certs/application-architect.png" },
  { name: "Salesforce Certified JavaScript Developer 1", badge: "/certs/javascript-developer-i.png" },
];

export type Recognition = { name: string; badge?: string };

export const recognitions: Recognition[] = [
  { name: "Vlocity VIP Masters Program Member", badge: "/certs/vlocity-vip-masters.png" },
  { name: "Vlocity Customer Endorsement — Health", badge: "/certs/vlocity-customer-endorsement-health.png" },
];

export const trailhead = {
  rank: "Ranger",
  badges: 195,
  points: 133425,
  trails: 13,
} as const;

export type Award = {
  organization: string;
  name: string;
  year: string;
  logo?: string;
};

export const awards: Award[] = [
  { organization: "Ideahelix", name: "Helix Radiance Award", year: "2026", logo: "/employers/ideahelix.svg" },
  { organization: "Cloobees", name: "Most Valued Bee", year: "2023", logo: "/employers/cloobees.webp" },
  { organization: "Cloobees", name: "Most Valued Bee", year: "2022", logo: "/employers/cloobees.webp" },
  { organization: "Deloitte", name: "Spot Award for Vlocity COE", year: "2020", logo: "/employers/deloitte.svg" },
  { organization: "Capgemini", name: "Enabling Champion", year: "2019", logo: "/employers/capgemini.svg" },
];
