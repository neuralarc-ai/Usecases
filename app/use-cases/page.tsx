"use client";

import { RiBankLine, RiShieldLine, RiShoppingCartLine, RiTeamLine, RiToolsLine } from "react-icons/ri";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs";
import BankingFinanceSection from "@/components/industry-sections/banking-finance";
import RetailSection from "@/components/industry-sections/retail";
import ConsultingSection from "@/components/industry-sections/consulting";
import ManufacturingSection from "@/components/industry-sections/manufacturing";
import InsuranceSection from "@/components/industry-sections/insurance";

interface IndustryTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
}

const industries: IndustryTab[] = [
  { id: "banking", label: "Banking & Finance", icon: RiBankLine, component: BankingFinanceSection },
  { id: "insurance", label: "Insurance", icon: RiShieldLine, component: InsuranceSection },
  { id: "retail", label: "Retail", icon: RiShoppingCartLine, component: RetailSection },
  { id: "consulting", label: "Consulting", icon: RiTeamLine, component: ConsultingSection },
  { id: "manufacturing", label: "Manufacturing", icon: RiToolsLine, component: ManufacturingSection },
];

export default function UseCasesPage() {
  return (
    <main>
      <section className="relative pt-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Centered Content */}
          <div className="text-center mb-12">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-sora)" }}>
              Helium Across Industries
            </h1>
            <h2 className="mb-6 text-2xl leading-relaxed text-white md:text-3xl lg:text-4xl font-medium" style={{ fontFamily: "var(--font-manrope)" }}>
              Discover how leading organizations use Helium to transform operations, reduce costs, and accelerate growth across every department.
            </h2>
          </div>
        </div>
        
        {/* Horizontal Divider - Full Screen */}
        <hr className="w-full border-gray-500 border-t opacity-50 my-12" />
        
        {/* Left-aligned Header */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-8">
          <h3 className="text-left text-xl font-bold text-white md:text-2xl lg:text-3xl mb-6" style={{ fontFamily: "var(--font-sora)" }}>
            AI Solutions for Your Industry:
          </h3>
          
          {/* Industry Selector Tabs */}
          <div className="flex justify-center">
            <Tabs defaultValue="banking" className="w-full">
              <TabsList 
                className="
                  overflow-hidden inline-flex w-auto rounded-4xl h-14 p-1.5 gap-1.5 border border-white/5
                  bg-[rgba(255,255,255,0.05)] backdrop-blur-[20px]
                "
              >
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <TabsTrigger
                      key={industry.id}
                      value={industry.id}
                      className="
                        relative flex items-center justify-center gap-2.5 rounded-4xl px-5 py-2.5 h-auto
                        text-base font-medium transition-all duration-300 ease-out cursor-pointer whitespace-nowrap
                        text-white/60 hover:bg-white/8 hover:text-white/85
                        data-[state=active]:text-white data-[state=active]:bg-[#27272a]
                      "
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      <span>{industry.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {industries.map((industry) => {
                const IndustryComponent = industry.component;
                return (
                  <TabsContent key={industry.id} value={industry.id}>
                    <IndustryComponent />
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
}

