import {
  FaFileSignature,
  FaBuilding,
  FaIndustry,
  FaUsersCog,
  FaFileInvoiceDollar,
  FaSearch,
  FaShieldAlt,
  FaBalanceScale,
  FaChartLine
} from "react-icons/fa";

const servicesData = [
  {
    id: "labour-registrations",
    icon: FaFileSignature,
    title: "Labour Law Registrations",
    subtitle: "",
    description:
      "We assist businesses in obtaining statutory registrations and licenses.",
    points: [
      "Factory registrations",
      "Shops & Establishment",
      "Contract Labour Act",
      "Professional Tax",
      "LWF",
      "Trade License",
      "Fire License",
      "CTE & CTO",
      "Sanitary Certificate"
    ]
  },

  {
    id: "establishment-compliance",
    icon: FaBuilding,
    title: "Establishment Compliance Services",
    description:
      "Managing statutory compliance for commercial establishments.",
    points: [
      "Shops Registration",
      "PT & LWF Compliance",
      "Registers Maintenance",
      "Filing Support",
      "Inspection Assistance"
    ]
  },

  {
    id: "factory-compliance",
    icon: FaIndustry,
    title: "Factory Compliance Services",
    description: "Factory law and compliance management.",
    points: [
      "Factory License",
      "Registers",
      "Documentation",
      "Inspection",
      "Advisory"
    ]
  },

  {
    id: "payroll-workforce",
    icon: FaUsersCog,
    title: "Payroll & Workforce Compliance",
    subtitle: "Payroll Management Support",
    description: "Payroll and workforce compliance.",
    points: [
      "Payroll Structuring",
      "Deductions",
      "Salary Processing",
      "Reports"
    ]
  },

  {
    id: "post-payroll",
    icon: FaFileInvoiceDollar,
    title: "Post Payroll Compliance Services",
    subtitle: "EPF | ESI | LWF | PT",
    description: "Post payroll statutory compliance.",
    points: [
      "EPF",
      "ESI",
      "Professional Tax",
      "LWF",
      "Communication"
    ]
  },

  {
    id: "hr-audit",
    icon: FaSearch,
    title: "HR Due Diligence Audit",
    description: "HR compliance audit.",
    points: [
      "Risk Assessment",
      "Documentation",
      "Labour Law",
      "Governance"
    ]
  },

  {
    id: "ehs-audit",
    icon: FaShieldAlt,
    title: "Risk, Safety & Sustainability",
    subtitle: "EHS Audit",
    description: "Environmental & safety audits.",
    points: [
      "Safety Audit",
      "Environmental Check",
      "Risk Analysis",
      "Advisory"
    ]
  },

  {
    id: "legal-advisory",
    icon: FaBalanceScale,
    title: "Legal Advisory & Strategic Support",
    description: "Legal compliance support.",
    points: [
      "Law Updates",
      "Advisory",
      "Consultation",
      "Interpretation"
    ]
  },

  {
    id: "management-consulting",
    icon: FaChartLine,
    title: "Management Consultancy Services",
    description: "Strategic consulting.",
    points: [
      "Strategy",
      "HR Policy",
      "Risk",
      "Governance"
    ]
  }
];

export default servicesData;