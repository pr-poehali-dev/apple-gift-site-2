import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DonateTier } from "@/types/donate";

interface DonateCardProps {
  tier: DonateTier;
}

export const DonateCard = ({ tier }: DonateCardProps) => {
  // Функция для определения иконки в зависимости от уровня привилегии
  const getIcon = (title: string) => {
    if (title === "Основатель") return "👑";
    if (title === "Владелец сервера") return "⭐";
    if (title.includes("12")) return "🌟";
    if (title.includes("11")) return "💎";
    if (title.includes("10")) return "🔮";
    if (title.includes("9")) return "🛡️";
    if (title.includes("8")) return "🔱";
    if (title.includes("7")) return "⚔️";
    if (title.includes("6")) return "🏆";
    if (title.includes("5")) return "🎖️";
    if (title.includes("4")) return "🎯";
    if (title.includes("3")) return "🔰";
    if (title.includes("2")) return "🎮";
    return "🎲";
  };

  return (
    <Card className="overflow-hidden border border-border/50 hover:border-border hover:shadow-md transition-all">
      <CardHeader className="pb-0">
        {tier.imageUrl ? (
          <div className="h-48 -mx-6 -mt-6 mb-4 bg-black overflow-hidden">
            <img 
              src={tier.imageUrl} 
              alt={tier.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="h-24 -mx-6 -mt-6 mb-4 bg-accent flex items-center justify-center">
            <div className="text-4xl font-bold">
              {getIcon(tier.title)}
            </div>
          </div>
        )}
        <CardTitle className="text-2xl">{tier.title}</CardTitle>
        <CardDescription className="text-lg font-medium text-primary">
          {tier.price} ₽
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{tier.description}</p>
        <ul className="space-y-2 text-sm">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Приобрести</Button>
      </CardFooter>
    </Card>
  );
};
