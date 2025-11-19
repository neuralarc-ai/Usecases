"use client";

import { useEffect, useState } from "react";
import {
  RiMessage3Line,
  RiUserLine,
  RiSettings3Line,
  RiBarChartLine,
  RiCpuLine,
  RiFileTextLine,
  RiShieldCheckLine,
  RiBriefcaseLine,
} from "react-icons/ri";

interface AICategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tools: string[];
}

const aiCategories: AICategory[] = [
  {
    id: "content",
    title: "Content & Communication",
    icon: RiMessage3Line,
    tools: ["ChatGPT", "Jasper AI", "Copy.ai", "Grammarly", "Notion AI"],
  },
  {
    id: "crm",
    title: "CRM & Customer Service",
    icon: RiUserLine,
    tools: ["Salesforce Einstein", "HubSpot AI", "Drift", "Intercom", "Zendesk AI"],
  },
  {
    id: "automation",
    title: "Process Automation",
    icon: RiSettings3Line,
    tools: ["UiPath", "Automation Anywhere", "Blue Prism", "Zapier", "Power Automate"],
  },
  {
    id: "analytics",
    title: "Analytics & BI",
    icon: RiBarChartLine,
    tools: ["Tableau", "Power BI", "Looker", "Qlik", "Domo"],
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: RiCpuLine,
    tools: ["AWS SageMaker", "Google Vertex AI", "Azure ML", "DataRobot", "H2O.ai"],
  },
  {
    id: "document",
    title: "Document Processing",
    icon: RiFileTextLine,
    tools: ["ABBYY", "Kofax", "Rossum", "DocuSign", "Adobe Sign"],
  },
  {
    id: "compliance",
    title: "Compliance & Security",
    icon: RiShieldCheckLine,
    tools: ["OneTrust", "ServiceNow GRC", "LogicGate", "Compliance.ai", "Drata"],
  },
  {
    id: "hr",
    title: "HR & Talent",
    icon: RiBriefcaseLine,
    tools: ["Workday", "BambooHR", "Lever", "Greenhouse", "Culture Amp"],
  },
];

export default function AIStackGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {aiCategories.map((category, index) => {
        const IconComponent = category.icon;
        return (
          <div
            key={category.id}
            className={`group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${
              isVisible
                ? "animate-fade-in-up opacity-100"
                : "opacity-0"
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-100/0 transition-all duration-500 group-hover:from-gray-50/50 group-hover:to-gray-100/30" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-4 flex items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-500 group-hover:scale-110 group-hover:from-gray-200 group-hover:to-gray-300 group-hover:shadow-lg">
                  <IconComponent className="h-7 w-7 text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
                </div>
              </div>

              {/* Title */}
              <h3
                className="mb-4 text-lg font-semibold text-black transition-colors duration-300 group-hover:text-gray-900"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {category.title}
              </h3>

              {/* Tools as Pills */}
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-sm"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      animationDelay: `${(index * 100) + (toolIndex * 50)}ms`,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gray-100/30 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-150" />
          </div>
        );
      })}
    </div>
  );
}

