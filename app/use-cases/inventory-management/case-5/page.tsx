"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Multi-Channel Inventory Synchronization"
      backHref="/use-cases/inventory-management"
      backLabel="Back to Inventory Management"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Inventory sync across 5 channels (stores, website, mobile app, marketplaces, wholesale) takes 4 hours causing 25% oversells",
          "Customer dissatisfaction and cancellations due to selling items out of stock",
          "15% inventory accuracy issues and lost sales from showing out-of-stock",
          "Sync challenges include batch updates (4-hour lag), system inconsistencies, manual reconciliation, and limited visibility"
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
          capability: "Real-Time Synchronization",
          popularTools: "Batch updates (4-hour lag)",
          helium: true
        },
        {
          capability: "Multi-Channel Management",
          popularTools: "Manual reconciliation",
          helium: true
        },
        {
          capability: "Availability Calculation",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Automated Reconciliation",
          popularTools: "Manual processes",
          helium: true
        },
        {
          capability: "End-to-End Automation",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium synchronizes inventory in real-time with real-time synchronization providing instant updates across all channels, transaction-level accuracy, conflict resolution, and consistency guarantee. The system includes allocation management with channel-specific allocation, priority rules, reserve inventory, and backorder handling. It provides predictive availability with pre-order forecasting, arrival date estimation, allocation planning, and customer communication. The system enables unified visibility with single inventory view, channel-specific views, location-level detail, and real-time updates, plus automated reconciliation with continuous reconciliation, variance detection, correction automation, and audit trail."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Sync vs 4-hour delay"
        },
        {
          icon: RiBarChartLine,
          value: "95%",
          label: "Reduction in oversells"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "99%",
          label: "Inventory accuracy"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3.2M",
          label: "Annual revenue protection"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Transaction Capture",
            description: "Records sale, return, or adjustment"
          },
          {
            title: "Real-Time Update",
            description: "Updates inventory instantly"
          },
          {
            title: "Channel Synchronization",
            description: "Pushes to all channels"
          },
          {
            title: "Allocation Management",
            description: "Manages channel-specific inventory"
          },
          {
            title: "Availability Calculation",
            description: "Determines product availability"
          },
          {
            title: "Reservation Handling",
            description: "Manages cart reservations"
          },
          {
            title: "Reconciliation",
            description: "Validates consistency"
          },
          {
            title: "Reporting",
            description: "Provides inventory analytics"
          }
        ]
      }}
    />
  );
}

