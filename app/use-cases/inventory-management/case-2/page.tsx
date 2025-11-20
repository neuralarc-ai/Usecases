"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Automated Reordering & Supplier Management"
      backHref="/use-cases/inventory-management"
      backLabel="Back to Inventory Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Manual purchase order creation takes 3 hours per order, with 20% errors causing delays and disputes, supplier performance tracked quarterly (too infrequent), missing 80% of quality issues, suboptimal supplier selection, and high procurement costs. PO challenges include manual data entry, approval delays, pricing errors, quantity mistakes, and delivery issues."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates procurement with automated PO generation triggered by inventory levels, optimal order quantities, best supplier selection, competitive pricing, and delivery scheduling. The system provides intelligent supplier selection with performance scoring, quality metrics, delivery reliability, pricing competitiveness, and capacity availability. It includes real-time performance monitoring with delivery tracking, quality assessment, pricing validation, and issue detection. The system enables automated quality control with receipt verification, quality inspection, defect tracking, and supplier feedback, plus dynamic lead time adjustment with historical analysis, seasonal patterns, supplier performance, and risk factors."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "95%",
          label: "Automation of reordering process"
        },
        {
          icon: RiBarChartLine,
          value: "90%",
          label: "Reduction in order errors"
        },
        {
          icon: RiTimeLine,
          value: "50%",
          label: "Reduction in lead times"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.8M",
          label: "Annual operational savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Inventory Trigger",
            description: "Stock level reaches reorder point"
          },
          {
            title: "Demand Validation",
            description: "Confirms need based on forecast"
          },
          {
            title: "Supplier Selection",
            description: "Chooses optimal supplier"
          },
          {
            title: "PO Generation",
            description: "Creates purchase order automatically"
          },
          {
            title: "Automated Approval",
            description: "Routes for approval based on amount"
          },
          {
            title: "Order Transmission",
            description: "Sends to supplier via EDI or portal"
          },
          {
            title: "Delivery Tracking",
            description: "Monitors shipment status"
          },
          {
            title: "Quality Verification",
            description: "Validates receipt and quality"
          }
        ]
      }}
    />
  );
}

