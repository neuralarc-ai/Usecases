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
        description: "Delivery operations face suboptimal routes costing $5M+ annually in fuel and time, 15% late deliveries, limited real-time visibility, poor customer communication, and high operational costs. Delivery challenges include manual route planning, traffic and weather impacts, driver inefficiency, limited optimization, and poor tracking."
      }}
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

