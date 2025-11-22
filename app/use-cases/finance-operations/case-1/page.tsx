"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine, RiBarChartLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Intelligent Invoice Processing & Automation"
      backHref="/use-cases/finance-operations"
      backLabel="Back to Finance Operations"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Finance teams manually process 5,000+ invoices monthly from technology vendors, professional services, facilities, operations, marketing, and travel",
          "Manual processing takes 15 minutes per invoice (1,250 hours monthly) with error rates of 8-12% leading to payment delays",
          "Misses early payment discounts worth $200K+ annually and results in duplicate payments ($50K+ annually)",
          "Causes vendor disputes and relationship issues, creates compliance issues with expense policies, and costs $280K+ annually"
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
          capability: "Invoice Data Extraction",
          popularTools: "Manual entry, limited OCR",
          helium: true
        },
        {
          capability: "3-Way Matching Automation",
          popularTools: "Zapier, Make, n8n, UiPath",
          helium: true
        },
        {
          capability: "Duplicate Detection",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Payment Optimization",
          popularTools: "Manual scheduling",
          helium: true
        },
        {
          capability: "End-to-End Automation",
          popularTools: "Zapier, Make, n8n, UiPath, Automation Anywhere",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates end-to-end invoice processing. The system uses AI-powered OCR to extract data from any invoice format with 99.5% accuracy, automatically matches Purchase Orders with Goods Receipts and Invoices (3-way matching), routes exceptions to appropriate approvers, identifies duplicate invoices and fraudulent vendors, optimizes payment timing to capture early payment discounts, sends automated vendor communications, and matches payments to invoices automatically for reconciliation."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "95%",
          label: "Straight-through processing rate"
        },
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in processing time"
        },
        {
          icon: RiBarChartLine,
          value: "99.5%",
          label: "Accuracy in data extraction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$680K",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Invoice Receipt",
            description: "Receives via email, portal, EDI, or scan"
          },
          {
            title: "AI Data Extraction",
            description: "Extracts all invoice data (vendor, amount, date, line items)"
          },
          {
            title: "Validation & Matching",
            description: "Performs 3-way match with PO and receipt"
          },
          {
            title: "Exception Detection",
            description: "Identifies discrepancies and issues"
          },
          {
            title: "Approval Routing",
            description: "Routes to appropriate approver based on amount and type"
          },
          {
            title: "Payment Scheduling",
            description: "Schedules optimal payment date for discounts"
          },
          {
            title: "Vendor Communication",
            description: "Sends automated confirmation"
          },
          {
            title: "Reconciliation",
            description: "Matches payment to invoice in accounting system"
          }
        ]
      }}
    />
  );
}

