"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiHeartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Route Optimization & Delivery Management"
      backHref="/use-cases/supply-chain"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Delivery operations face suboptimal routes costing $5M+ annually in fuel and time",
          "15% late deliveries with limited real-time visibility and poor customer communication",
          "High operational costs from manual route planning and driver inefficiency",
          "Delivery challenges include traffic and weather impacts, limited optimization, and poor tracking"
        ]
      }}
      toolsUsed={[
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
        {
          category: "RPA & Process Automation",
          tools: ["UiPath", "Automation Anywhere", "Blue Prism"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Route Optimization",
          popularTools: "Manual planning",
          helium: true
        },
        {
          capability: "Real-Time Tracking",
          popularTools: "Limited visibility",
          helium: true
        },
        {
          capability: "Driver Management",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        },
        {
          capability: "Customer Communication",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "End-to-End Automation",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes delivery operations with route optimization using AI-powered routing, real-time traffic, weather consideration, delivery windows, and vehicle capacity. The system provides real-time tracking with GPS monitoring, ETA updates, exception alerts, and customer notifications. It includes driver management with performance tracking, coaching recommendations, schedule optimization, and compliance monitoring. The system enables customer communication with delivery notifications, ETA updates, delay alerts, and delivery confirmation, plus performance analytics with on-time delivery rates, cost per delivery, driver productivity, and customer satisfaction."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "30%",
          label: "Reduction in delivery costs"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "85%",
          label: "On-time delivery rate"
        },
        {
          icon: RiHeartLine,
          value: "60%",
          label: "Improvement in customer satisfaction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3.5M",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Order Consolidation",
            description: "Groups orders for delivery"
          },
          {
            title: "Route Optimization",
            description: "Calculates optimal routes"
          },
          {
            title: "Driver Assignment",
            description: "Assigns to appropriate driver"
          },
          {
            title: "Real-Time Tracking",
            description: "Monitors delivery progress"
          },
          {
            title: "ETA Calculation",
            description: "Updates estimated arrival"
          },
          {
            title: "Customer Notification",
            description: "Sends delivery updates"
          },
          {
            title: "Delivery Confirmation",
            description: "Records completion"
          },
          {
            title: "Performance Analysis",
            description: "Tracks metrics"
          }
        ]
      }}
    />
  );
}

