"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine, RiBarChartLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated Trade Reconciliation & Settlement"
      backHref="/use-cases/operations"
      backLabel="Back to Operations"
      businessChallenge={{
        title: "Business Challenge",
        description: "Trade reconciliation in banking operations involves matching 10,000+ daily trades across multiple systems, taking 8-12 hours daily. Manual processes lead to settlement failures (0.5-1% of trades), regulatory fines ($50K-$200K per incident), operational losses ($2M+ annually), client dissatisfaction, high operational risk, and extensive manual investigation (4-6 hours per break). Trade reconciliation complexity includes multiple trading platforms, different asset classes (equities, fixed income, derivatives, FX), various counterparties, time zone differences, corporate actions, and settlement instructions."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates end-to-end trade reconciliation. The system integrates multi-source data from trading platforms, custodian banks, clearinghouses, counterparty confirmations, and internal systems, automatically matches trades across systems (trade details, settlement instructions, cash movements, corporate actions), identifies breaks immediately (mismatched quantities, price discrepancies, missing confirmations, settlement failures), uses AI to determine root cause of discrepancies, resolves breaks automatically when possible, routes complex breaks to appropriate teams with context and history, and generates required regulatory reports."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "95%",
          label: "Automation of trade reconciliation"
        },
        {
          icon: RiBarChartLine,
          value: "99.5%",
          label: "Settlement success rate"
        },
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in investigation time"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.5M",
          label: "Annual operational savings"
        }
      ]}
    />
  );
}

