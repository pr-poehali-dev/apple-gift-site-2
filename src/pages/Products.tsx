import { DonateHeader } from "@/components/donate/DonateHeader";
import { DonateInfo } from "@/components/donate/DonateInfo";
import { TieredDonateDisplay } from "@/components/donate/TieredDonateDisplay";
import { getPriceTiers } from "@/data/donateData";

const Products = () => {
  const priceTiers = getPriceTiers();
  
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <DonateHeader />
      
      {/* Tiered Donate Cards */}
      <TieredDonateDisplay priceTiers={priceTiers} />
      
      {/* Information Section */}
      <DonateInfo />
    </div>
  );
};

export default Products;
