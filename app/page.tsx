import Hero from "@/components/hero";
import Subscription from "@/components/subscription";
import BusinessFunctions from "@/components/business-functions";
import WhyEnterprises from "@/components/why-enterprises";
import UniversalConnectivity from "@/components/universal-connectivity";
import IndustryLeaders from "@/components/industry-leaders";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Subscription /> */}
      <WhyEnterprises />
      <BusinessFunctions />
      <IndustryLeaders />
      {/* <UniversalConnectivity /> */}
    </main>
  );
}
