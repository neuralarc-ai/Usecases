"use client";

import { useEffect, useState } from "react";
import {
  RiFileEditLine,
  RiFlashlightLine,
  RiFileList3Line,
  RiBarChartBoxLine,
  RiCodeSSlashLine,
  RiDatabase2Line,
} from "react-icons/ri";

interface ReplacementCard {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  traditionalTools: string[];
  advantage: string;
}

const replacementCards: ReplacementCard[] = [
  {
    id: "content-generation",
    title: "Content Generation",
    icon: RiFileEditLine,
    traditionalTools: ["ChatGPT", "Claude", "Jasper AI", "Copy.ai"],
    advantage:
      "Generate content with full context from your data, automatically publish across channels, and maintain brand consistency without switching tools.",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    icon: RiFlashlightLine,
    traditionalTools: ["Zapier", "Make", "n8n", "Workato"],
    advantage:
      "Build complex, multi-step workflows with AI decision-making, handle exceptions intelligently, and scale without hitting API limits.",
  },
  {
    id: "process-automation",
    title: "Process Automation",
    icon: RiFileList3Line,
    traditionalTools: ["UiPath", "Automation Anywhere", "Blue Prism"],
    advantage:
      "Deploy in days instead of months, no specialized RPA developers needed, and handle both web and desktop automation seamlessly.",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: RiBarChartBoxLine,
    traditionalTools: ["Tableau", "Power BI", "Looker", "Qlik"],
    advantage:
      "AI automatically cleans data, generates insights, creates visualizations, and delivers reports without manual dashboard building.",
  },
  {
    id: "code-development",
    title: "Code Development",
    icon: RiCodeSSlashLine,
    traditionalTools: ["GitHub Copilot", "Cursor", "Replit", "Tabnine"],
    advantage:
      "Write, test, and deploy complete applications with AI assistance, automatic testing, and built-in deployment pipelines.",
  },
  {
    id: "data-integration",
    title: "Data Integration",
    icon: RiDatabase2Line,
    traditionalTools: ["Fivetran", "Airbyte", "Stitch", "Segment"],
    advantage:
      "Connect to any data source instantly, transform data on the fly, and maintain real-time sync without complex ETL pipelines.",
  },
];

export default function HeliumReplacementCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {replacementCards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div
            key={card.id}
            className={`group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-100/0 transition-all duration-500 group-hover:from-gray-50/50 group-hover:to-gray-100/30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon and Title Section */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-500 group-hover:scale-110 group-hover:from-gray-200 group-hover:to-gray-300 group-hover:shadow-lg">
                  <IconComponent className="h-7 w-7 text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  {/* Subtle pulse effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gray-300 opacity-0 group-hover:opacity-20 group-hover:animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-gray-900 font-sora"
                  >
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Traditional Tools Section - Fixed height to prevent shifting */}
              <div className="mb-6 min-h-[80px]">
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Traditional Tools
                </p>
                {/* Single row with horizontal scroll if needed */}
                <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {card.traditionalTools.map((tool, toolIndex) => (
                    <span
                      key={tool}
                      className="inline-flex shrink-0 items-center rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-sm group-hover:shadow-sm"
                      style={{
                        animationDelay: `${(index * 100) + (toolIndex * 50)}ms`,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Helium Advantage Section */}
              <div className="relative mt-auto rounded-lg bg-gray-50 p-5 transition-all duration-500 group-hover:bg-gray-100 group-hover:shadow-inner">
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                <p
                  className="relative text-sm font-medium text-gray-800 leading-relaxed"
                >
                  <span className="font-bold text-black">Helium Advantage:</span>{" "}
                  {card.advantage}
                </p>
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

