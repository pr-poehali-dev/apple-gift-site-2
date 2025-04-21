import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const giftCards = [
  {
    id: 1,
    title: "Apple Gift Card",
    price: 1000,
    description: "Идеально для небольших покупок в App Store и iTunes"
  },
  {
    id: 2,
    title: "Apple Gift Card",
    price: 2500,
    description: "Популярный выбор для приложений и подписок"
  },
  {
    id: 3,
    title: "Apple Gift Card",
    price: 5000,
    description: "Максимальная свобода выбора для всех сервисов Apple"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-medium mb-4">Apple Gift Cards</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий номинал карты для пополнения баланса Apple ID
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card key={card.id} className="overflow-hidden border border-border/50 hover:border-border hover:shadow-md transition-all">
                <CardHeader className="pb-0">
                  <div className="h-48 -mx-6 -mt-6 mb-4 bg-accent flex items-center justify-center">
                    <img 
                      src="/placeholder.svg" 
                      alt="Apple Gift Card" 
                      className="h-36 w-auto object-contain" 
                    />
                  </div>
                  <CardTitle className="text-2xl">{card.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {card.price} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Добавить в корзину</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-2xl font-medium mb-6 text-center">Информация о картах</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-3">Что можно купить?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Приложения и игры из App Store</li>
                <li>• Музыку, фильмы и сериалы в iTunes</li>
                <li>• Подписки на Apple Music, Apple TV+</li>
                <li>• Дополнительное облачное хранилище iCloud</li>
                <li>• Книги из Apple Books</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Как активировать?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Получите код на вашу электронную почту</li>
                <li>• Откройте App Store на вашем устройстве</li>
                <li>• Нажмите на свой профиль и выберите «Пополнить баланс»</li>
                <li>• Введите полученный код и нажмите «Погасить»</li>
                <li>• Готово! Баланс пополнен</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
