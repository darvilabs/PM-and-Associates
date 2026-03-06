
import { Service, Industry, TeamMember, Values } from './types';

export const SERVICES: Service[] = [
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting, Bookkeeping and Account Outsourcing',
    description: 'We provide systematic accounting services to maintain accurate financial records.',
    scope: ['Transfer Pricing Certificate', 'NFRS/IFRS Implementation and Compliance', 'Due Diligence Review', 'Agreed Upon Procedures', 'Accounting Advisory Services', 'Project/Expenditure Certificates', 'Capital and Investment Certifications', 'Fixed Assets Coding and Verfications','Financial Projections']
  },
  {
    id: 'tax-advisory',
    title: 'Tax Advisory',
    description: 'Our tax advisory services help businesses manage direct and indirect tax obligations efficiently while ensuring full regulatory compliance.',
    scope: ['Tax planning and compliance', 'Return filing and compliance', 'Advisory on tax regulations', 'Representation before authorities', 'International Tax Planning', 'Indirect Tax Consulting']
  },
  {
    id: 'audit-assurance',
    title: 'Audit and Assurance',
    description: 'We deliver independent audit and assurance services that enhance transparency, reliability, and stakeholder confidence.',
    scope: ['Statutory audit', 'Internal audit', 'Donor Audit', 'Fund Audit', 'Tax Audit', 'Compliant Audit', 'Information System Audit','Management Audit', 'Revenue Audit', 'Cost Audit', 'Operation Audit', 'Social Audit']
  },
  {
    id: 'business-advisory',
    title: 'Business Support and Advisory',
    description: 'We assist organizations in improving operational efficiency and making informed strategic decisions.',
    scope: ['Business restructuring', 'Performance analysis', 'Financial advisory', 'Process improvement', 'Strategic planning', 'Efficiency audits', 'Business registration', 'HR management and payroll processing', 'Corporate legal compliance and reporting']
  },
  {
    id: 'nfrs-ifrs',
    title: 'NFRS/IFRS Implementation',
    description: 'We assist organizations in transitioning to and complying with NFRS and IFRS standards.',
    scope: ['Gap analysis and impact assessment',
        'Conversion of financial statements to NFRS/IFRS',
        'Preparation of NFRS/IFRS-compliant financial reports',
        'Accounting policy development and documentation',
        'Training and capacity building for finance teams',
        'Ongoing compliance and advisory support']
  },
  {
    id: 'other-advisory-services',
    title: 'Other Advisory Services',
    description: 'We provide strategic and financial advisory services to help organizations strengthen governance and manage risks.',
    scope: [
        'Management Consulting',
        'Financial Planning',
        'Risk Advisory and Consulting',
        'Fraud Risk Assessment (Forensic Accounting)',
        'Merger and Acquisition Advisory'
    ]
},
{
    id: 'trainings-seminars',
    title: 'Trainings and Seminars on NFRS and Taxation',
    description: 'We conduct professional trainings and seminars to enhance understanding of NFRS and taxation laws.',
    scope: [
        'NFRS Implementation Workshops',
        'IFRS Awareness and Compliance Training',
        'Taxation Law Updates and Practical Sessions',
        'Corporate In-house Training Programs',
        'Seminars for Finance and Accounts Professionals',
        'Regulatory and Compliance Awareness Programs'
    ]
}


];

export interface IndustryExtended extends Industry {
  detailedDescription: string;
  focusAreas: string[];
}

export const INDUSTRIES: IndustryExtended[] = [
  {
    id: 'banking-finance',
    title: 'Banking, Finance and Insurance',
    description: 'We support financial institutions with regulatory compliance, audits, risk management, and financial reporting services.',
    detailedDescription: 'The banking and finance sector operates under strict regulatory frameworks. Our team provides specialized expertise in navigating these complexities while ensuring robust financial health and compliance.',
    focusAreas: ['Regulatory Compliance', 'Statutory Audit', 'Internal Audit', 'Revenue Audit', 'Mergers and Acquisitions', 'Fixed Asset Codefication and Verification', 'Due Dligence of Borrowers', 'Tax and Financial Consultancy Services', 'Risk Management Frameworks', 'Statutory Financial Reporting', 'NFRS/IFRS Implementation', 'Credit Risk Assessment']
  },
  {
    id: 'trading-retail',
    title: 'Trading and Retail',
    description: 'We assist trading and retail businesses with inventory accounting, tax compliance, and financial performance analysis.',
    detailedDescription: 'In the fast-moving retail and trading world, inventory control and tax optimization are key. We provide the tools and insights needed to manage margins and stay compliant.',
    focusAreas: ['Inventory Management Systems', 'VAT & Indirect Tax Planning', 'Retail Performance Analytics', 'Supply Chain Financial Review', 'Point of Sale (POS) Audit', 'Margin Analysis']
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Our services help manufacturing firms manage cost accounting, statutory compliance, and operational efficiency.',
    detailedDescription: 'Manufacturing enterprises face unique challenges in cost allocation and production efficiency. We help optimize the bottom line through detailed cost accounting and strategic advisory.',
    focusAreas: ['Cost Accounting and Management', 'Factory & Labor Compliance', 'Fixed Asset Management', 'WIP Valuation', 'Statutory Audits', 'Efficiency Improvement Advisory']
  },
  {
    id: 'software-companies',
    title: 'Software Companies',
    description: 'We provide financial and compliance support to software companies operating in fast-evolving regulatory and tax environments.',
    detailedDescription: 'The software industry is defined by rapid innovation, subscription models, and global operations. We offer financial structures that support SaaS growth, R&D incentives, and intellectual property valuation.',
    focusAreas: ['SaaS Revenue Recognition', 'R&D Tax Credits', 'International Tax & Transfer Pricing', 'Stock Option & ESOP Accounting', 'IP Valuation & Amortization', 'Compliance for Software Exports']
  },
  {
    id: 'communication',
    title: 'Information, Communication and Technology',
    description: 'We support communication and service-based companies with financial reporting, audit, and advisory services.',
    detailedDescription: 'Telecommunications and digital communication firms handle massive transaction volumes. We provide the assurance and systems needed to maintain financial integrity in a high-speed environment.',
    focusAreas: ['Revenue Assurance Audits', 'Regulatory Reporting for Telecom', 'License Fee Compliance', 'Service Tax/VAT for Communications', 'Asset Lifecycle Management', 'Operational Audits']
  },
  {
    id: 'ngo-ingo',
    title: 'NGO/INGOs and Project',
    description: 'We provide specialized audit, compliance, and advisory services to NGOs, INGOs, and development projects to ensure transparency, accountability, and regulatory compliance.',
    detailedDescription:  'Non-governmental and donor-funded organizations operate under strict regulatory and reporting frameworks. We support NGOs and INGOs with financial management, donor compliance, statutory audits, and fund accountability to ensure proper utilization of resources and adherence to applicable laws.',
    focusAreas: ['Statutory Audit',
        'Internal Audit',
        'Donor Audits',
        'Procurement Audits',
        'Implementation and Compliance of NAS for NPOs',
        'Tax Reporting, Compliance and Planning',
        'Compliance with Value Added Tax Act, Income Tax Act, and Social Welfare Act',
        'Advisory for Donor Reporting and Fund Management']
  },
  {
    id: 'service-sector',
    title: 'Service Sector',
    description: 'We provide audit, tax, and advisory services to diverse service-oriented industries.',
    detailedDescription: 'Service-based organizations require strong financial management and compliance systems to maintain operational efficiency and regulatory adherence. We support service sector entities with tailored accounting, audit, and tax solutions.',
    focusAreas: [
        'Health Care',
        'Education',
        'Travel, Tourism and Hotel (Hospitality Sector)',
        'Transportation Business'
    ]
},
{
    id: 'capital-market',
    title: 'Capital Market, Private Equity',
    description: 'We provide specialized audit and advisory services to capital market participants, private equity firms, and venture capital funds.',
    detailedDescription: 'Entities operating in capital markets and investment management environments are subject to strict regulatory oversight and complex financial reporting requirements. We support these organizations with transparent reporting, regulatory compliance, fund audits, and strategic advisory services.',
    focusAreas: [
        'Regulatory Compliance and Reporting',
        'Fund Audit and Assurance',
        'Investment Valuation Support',
        'Due Diligence Services',
        'Financial Reporting under NFRS/IFRS',
        'Tax Compliance and Advisory'
    ]
}, 
{
    id: 'construction',
    title: 'Construction and Hydropower',
    description: 'We provide specialized audit, financial advisory, and compliance services tailored to construction companies and hydropower projects, ensuring strong financial control, risk management, and regulatory compliance.',
    detailedDescription:  'Construction and hydropower projects involve large capital investments, complex contracts, and strict regulatory requirements. We assist developers, contractors, and project owners with project audits, cost verification, contract compliance, financial reporting, tax planning, and risk assessment. Our services ensure proper fund utilization, transparency in project execution, and adherence to government regulations and industry standards throughout the project lifecycle.',
    focusAreas: ['Statutory Audit',
        'Internal Audit',
        'Tax Audit',
        'Financial Feasibility Study of Hydropower and Construction Projects',
        'Due Diligence of Hydropower and Construction Projects',
        'Tax Reporting, Compliance and Planning',
        'Compliance with Value Added Tax Act, Income Tax Act, and Social Welfare Act',
        'Financial Consulting and Consulting for the Financial Aggangement of Hydropower and Construction Project']
  },
{
    id: 'fintech-startup',
    title: 'Fintech and Startup',
    description: 'We support fintech companies and startups with financial structuring, compliance, and strategic advisory services to help them scale sustainably.',
    detailedDescription: 'Fintech companies and emerging startups operate in dynamic and highly regulated environments. We assist these businesses with regulatory compliance, financial reporting, investor readiness, and scalable financial systems to support sustainable growth.',
    focusAreas: [
        'Regulatory Compliance and Licensing Support',
        'Startup Financial Structuring',
        'Investor Due Diligence Support',
        'Financial Projections and Business Planning',
        'NFRS/IFRS Reporting Compliance',
        'Tax Planning and Advisory for Startups'
    ]
    
}  
];

export const CORE_VALUES: Values[] = [
  { title: 'Integrity and Honesty', description: 'Upholding the highest ethical standards in all our dealings.' },
  { title: 'Knowledge and Professionalism', description: 'Continuously expanding our expertise and maintaining a professional demeanor.' },
  { title: 'Confidentiality', description: 'Ensuring the privacy and security of our clients information.' },
  { title: 'Healthy Work Environment', description: 'Promoting a positive and supportive workplace culture.' },
  { title: 'Teamwork', description: 'Collaborating effectively to achieve common goals.' },
  { title: 'Enthusiasm', description: 'Approaching our work with passion and dedication.' },
  { title: 'Empathy', description: 'Understanding and addressing the needs and concerns of our cklients.' }
];
