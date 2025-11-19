import Hero from "@/components/hero";
import Subscription from "@/components/subscription";
import BusinessFunctions from "@/components/business-functions";
import WhyEnterprises from "@/components/why-enterprises";
import UniversalConnectivity from "@/components/universal-connectivity";

export default function Home() {
  return (
    <main>
      <Hero />
      <Subscription />
      <BusinessFunctions />
      <WhyEnterprises />
      <UniversalConnectivity />
    </main>
  );
}
