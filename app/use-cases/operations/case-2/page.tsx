"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Intelligent Customer Onboarding & KYC"
      backHref="/use-cases/operations"
      backLabel="Back to Operations"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Customer onboarding and KYC processes take 5-7 days, involving manual document collection, identity verification, background checks, sanctions screening, risk assessment, account setup, and product enrollment",
          "Manual processes lead to 30% customer abandonment during onboarding and compliance risks from incomplete KYC",
          "Regulatory fines ($500K-$2M per violation), poor customer experience, and high operational costs ($150+ per customer)",
          "Delayed revenue recognition and significant operational inefficiency"
        ]
      }}
      toolsUsed={[
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "RPA & Process Automation",
          tools: ["UiPath", "Automation Anywhere", "Blue Prism"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Document Collection",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "AI-Powered Identity Verification",
          popularTools: "UiPath, Automation Anywhere, Blue Prism",
          helium: true
        },
        {
          capability: "Automated Screening",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Automation",
          popularTools: "Manual processes",
          helium: true
        },
        {
          capability: "Real-Time KYC Compliance",
          popularTools: "Batch processing",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates customer onboarding end-to-end. The system enables digital document collection through mobile app capture, document upload portal, email submission, and API integration with verification services, uses AI-powered verification (identity document validation, facial recognition matching, address verification, document authenticity checks), automates screening against sanctions lists (OFAC, UN, EU), PEP databases, adverse media, criminal records, and credit checks, performs risk assessment with customer risk scoring and product suitability, automatically provisions accounts (account creation, product enrollment, card issuance, online banking setup), and creates compliance documentation with KYC file creation, audit trail, regulatory reporting, and periodic review scheduling."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in onboarding time"
        },
        {
          icon: RiBarChartLine,
          value: "70%",
          label: "Reduction in customer abandonment"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "KYC compliance"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$4.5M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Application Initiation",
            description: "Customer starts application online or in-branch"
          },
          {
            title: "Document Collection",
            description: "Captures ID, proof of address, financial info"
          },
          {
            title: "AI Verification",
            description: "Validates documents and identity"
          },
          {
            title: "Automated Screening",
            description: "Checks sanctions, PEP, adverse media"
          },
          {
            title: "Risk Assessment",
            description: "Calculates customer risk score"
          },
          {
            title: "Account Provisioning",
            description: "Creates accounts and enrolls in products"
          },
          {
            title: "Compliance Documentation",
            description: "Generates KYC file"
          },
          {
            title: "Customer Notification",
            description: "Confirms account opening"
          }
        ]
      }}
    />
  );
}

