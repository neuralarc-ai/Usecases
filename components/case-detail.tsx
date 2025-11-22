"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiArrowLeftLine, RiCheckLine, RiAlertLine } from "react-icons/ri";
import ProcessFlowDiagram from "@/components/process-flow-diagram";
import { cn } from "@/lib/utils";

interface Metric {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

interface BusinessChallenge {
  title: string;
  challenges?: string[]; // Array of challenge points for cards
  description?: string; // Legacy format support
}

interface Tool {
  category: string;
  tools: string[];
}

interface ComparisonRow {
  capability: string;
  popularTools: string;
  helium: boolean;
}

interface HeliumSolution {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface CaseDetailProps {
  title: string;
  backHref: string;
  backLabel: string;
  businessChallenge: BusinessChallenge;
  toolsUsed?: Tool[];
  comparisonTable?: ComparisonRow[];
  heliumSolution: HeliumSolution;
  metrics: Metric[];
  imageUrl?: string;
  imageAlt?: string;
  processFlow?: {
    title?: string;
    steps: ProcessStep[];
  };
}

export default function CaseDetail({
  title,
  backHref,
  backLabel,
  businessChallenge,
  toolsUsed,
  comparisonTable,
  heliumSolution,
  metrics,
  imageUrl,
  imageAlt = "Case illustration",
  processFlow
}: CaseDetailProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <section className="relative pt-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Back Button - Fixed when scrolled, inline when at top */}
          <Link 
            href={backHref}
            className={cn(
              "inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all text-sm font-medium mb-6",
              isScrolled
                ? "fixed top-24 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 z-40 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-gray-200/50 hover:shadow-xl mb-0"
                : ""
            )}
          >
            <RiArrowLeftLine className="w-4 h-4" />
            {backLabel}
          </Link>
          
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl lg:text-5xl font-sora">
              {title}
            </h1>
          </div>

          {/* Business Challenge Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 md:text-3xl font-sora">
              {businessChallenge.title}
            </h2>
            {businessChallenge.challenges && businessChallenge.challenges.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {businessChallenge.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center shrink-0">
                        <RiAlertLine className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            ) : businessChallenge.description ? (
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl">
              {businessChallenge.description}
            </p>
            ) : null}
          </div>

          {/* Tools Used Section */}
          {toolsUsed && toolsUsed.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 md:text-3xl font-sora">
                Tools Currently Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {toolsUsed.flatMap((tool) =>
                  tool.tools.map((toolName, toolIndex) => (
                    <span
                      key={`${tool.category}-${toolIndex}`}
                      className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-white text-gray-700 border border-gray-300"
                    >
                      {toolName}
                    </span>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Comparison Table Section */}
          {comparisonTable && comparisonTable.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 md:text-3xl font-sora">
                How Helium Overcomes These Challenges
              </h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="bg-gray-800 px-6 py-4 text-left text-sm font-semibold text-white rounded-tl-lg font-sora">
                        CAPABILITY
                      </th>
                      <th className="bg-gray-800 px-6 py-4 text-left text-sm font-semibold text-white font-sora">
                        POPULAR TOOLS
                      </th>
                      <th className="bg-gray-800 px-6 py-4 text-left text-sm font-semibold text-white rounded-tr-lg font-sora">
                        HELIUM
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => {
                      const isLastRow = index === comparisonTable.length - 1;
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
                            {row.popularTools}
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
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Helium Solution Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl font-sora">
              {heliumSolution.title}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl">
              {heliumSolution.description}
            </p>
          </div>

          {/* Metrics Section */}
          {metrics.length > 0 && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
                    >
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2 font-sora">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Image Section */}
          {imageUrl && (
            <div className="mt-12">
              <div className="relative w-full h-96 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Flow Section */}
      {processFlow && processFlow.steps.length > 0 && (
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
          <ProcessFlowDiagram 
            title={processFlow.title || "Process Flow"}
            steps={processFlow.steps}
          />
        </section>
      )}
    </main>
  );
}

