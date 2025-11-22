"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiTimeLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Automated Renewal Reminders & Processing"
      backHref="/use-cases/customer-service"
      backLabel="Back to Customer Service"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Manual renewal processing costs $45 per policy, with 18% lapse rate due to missed reminders",
          "Renewal cycle taking 30-45 days, cash flow gaps, customer attrition, and lost revenue ($12M+ annually)",
          "Renewal challenges include manual reminder generation, inconsistent timing, and generic messaging",
          "Complex renewal process and limited payment options contribute to customer dissatisfaction"
        ]
      }}
      toolsUsed={[
        {
          category: "Email & Communication",
          tools: ["Superhuman", "Front", "Intercom"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Renewal Reminders",
          popularTools: "Superhuman, Front, Intercom",
          helium: true
        },
        {
          capability: "One-Click Renewal",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Personalized Renewal Offers",
          popularTools: "Generic messaging",
          helium: true
        },
        {
          capability: "Dynamic Pricing",
          popularTools: "Fixed pricing",
          helium: true
        },
        {
          capability: "Lapse Prevention",
          popularTools: "Reactive approach",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates renewal management. The system enables automated reminder campaigns with 90-day, 60-day, 30-day, 15-day reminders, multi-channel delivery, personalized messaging, and preferred channel selection. It provides personalized renewal offers with usage-based pricing, loyalty discounts, bundle opportunities, and coverage recommendations. The system enables one-click renewal with simplified process, saved payment methods, instant confirmation, and digital policy delivery. It includes dynamic pricing with risk-based adjustments, market competitive rates, retention pricing, and win-back offers. The system includes lapse prevention with at-risk identification, proactive outreach, flexible payment options, and grace period management."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Reduction in lapse rate"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$12M",
          label: "Annual revenue retention"
        },
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in renewal processing cost"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "90%",
          label: "Customer satisfaction with renewal process"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Renewal Identification",
            description: "Identifies policies approaching renewal"
          },
          {
            title: "Personalized Offer Creation",
            description: "Generates customized renewal offer"
          },
          {
            title: "Reminder Campaign",
            description: "Sends multi-touch reminders"
          },
          {
            title: "One-Click Renewal",
            description: "Enables easy renewal process"
          },
          {
            title: "Payment Processing",
            description: "Processes renewal payment"
          },
          {
            title: "Policy Update",
            description: "Renews policy automatically"
          },
          {
            title: "Confirmation",
            description: "Sends renewal confirmation"
          },
          {
            title: "Satisfaction Survey",
            description: "Collects feedback"
          }
        ]
      }}
    />
  );
}

