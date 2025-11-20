"use client";

import { RiCheckLine, RiCloseLine } from "react-icons/ri";

interface ComparisonRow {
  capability: string;
  multipleTools: string | "missing";
  helium: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    capability: "Autonomous Task Execution",
    multipleTools: "missing",
    helium: true,
  },
  {
    capability: "Web Scraping & Automation",
    multipleTools: "Requires Selenium, Puppeteer",
    helium: true,
  },
  {
    capability: "Data Processing & Analytics",
    multipleTools: "Requires Tableau, Power BI",
    helium: true,
  },
  {
    capability: "Content Creation (Text, Images, Video)",
    multipleTools: "Requires ChatGPT, Midjourney, Runway",
    helium: true,
  },
  {
    capability: "Software Development",
    multipleTools: "Requires Copilot, Cursor, Replit",
    helium: true,
  },
  {
    capability: "Workflow Orchestration",
    multipleTools: "Requires Zapier, Make, n8n",
    helium: true,
  },
  {
    capability: "API Integration",
    multipleTools: "Custom development required",
    helium: true,
  },
  {
    capability: "Real-Time Collaboration",
    multipleTools: "missing",
    helium: true,
  },
  {
    capability: "Unified Data Layer",
    multipleTools: "missing",
    helium: true,
  },
  {
    capability: "Enterprise Security & Compliance",
    multipleTools: "Varies by tool",
    helium: true,
  },
];

export default function FeatureComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th
              className="bg-gray-800 px-6 py-4 text-left text-sm font-semibold text-white rounded-tl-lg"
              className="font-sora"
            >
              Capability
            </th>
            <th
              className="bg-gray-800 px-6 py-4 text-left text-sm font-semibold text-white"
              className="font-sora"
            >
              Multiple Tools
            </th>
            <th
              className="bg-orange-500 px-6 py-4 text-left text-sm font-semibold text-white rounded-tr-lg"
              className="font-sora"
            >
              Helium
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => {
            const isLastRow = index === comparisonData.length - 1;
            return (
              <tr key={index}>
                <td
                  className={`bg-gray-100 px-6 py-4 text-sm font-medium text-black ${
                    isLastRow ? "rounded-bl-lg border-b-0" : "border-b border-gray-200"
                  }`}
                >
                  {row.capability}
                </td>
                <td
                  className={`bg-white px-6 py-4 text-sm text-black ${
                    isLastRow ? "border-b-0" : "border-b border-gray-200"
                  }`}
                >
                  {row.multipleTools === "missing" ? (
                    <span className="flex items-center text-red-600">
                      <RiCloseLine className="h-5 w-5" />
                    </span>
                  ) : (
                    <span>{row.multipleTools}</span>
                  )}
                </td>
                <td
                  className={`bg-white px-6 py-4 text-sm text-black ${
                    isLastRow ? "rounded-br-lg border-b-0" : "border-b border-gray-200"
                  }`}
                >
                  {row.helium ? (
                    <span className="flex items-center text-green-600">
                      <RiCheckLine className="h-5 w-5" />
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <RiCloseLine className="h-5 w-5" />
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

