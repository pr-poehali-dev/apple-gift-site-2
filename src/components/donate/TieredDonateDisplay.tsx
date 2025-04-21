import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DonateTier, PriceTiers } from "@/types/donate";
import { DonateCard } from "./DonateCard";

interface TieredDonateDisplayProps {
  priceTiers: PriceTiers;
}

export const TieredDonateDisplay = ({ priceTiers }: TieredDonateDisplayProps) => {
  return (
    <section className="py-20">
      <div className="container">
        <Tabs defaultValue="tier1" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="tier1">До 500 ₽</TabsTrigger>
            <TabsTrigger value="tier2">500-1500 ₽</TabsTrigger>
            <TabsTrigger value="tier3">От 1500 ₽</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tier1" className="mt-8">
            <DonateGrid tiers={priceTiers.tier1} />
          </TabsContent>
          
          <TabsContent value="tier2" className="mt-8">
            <DonateGrid tiers={priceTiers.tier2} />
          </TabsContent>
          
          <TabsContent value="tier3" className="mt-8">
            <DonateGrid tiers={priceTiers.tier3} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface DonateGridProps {
  tiers: DonateTier[];
}

const DonateGrid = ({ tiers }: DonateGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <DonateCard key={tier.id} tier={tier} />
      ))}
    </div>
  );
};
