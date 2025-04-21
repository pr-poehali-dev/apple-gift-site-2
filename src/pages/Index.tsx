import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-background z-0"></div>
        <div className="container relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
            Donate Cards
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-muted-foreground">
            Получите особые привилегии на сервере и откройте для себя новые возможности. От обычного игрока до основателя.
          </p>
          <Link to="/products">
            <Button size="lg" className="rounded-full px-8">
              Выбрать привилегию
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-medium text-center mb-16">Преимущества донат-карт</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Особые возможности</h3>
              <p className="text-muted-foreground">Получите доступ к эксклюзивным командам и функциям недоступным обычным игрокам.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Защита и поддержка</h3>
              <p className="text-muted-foreground">Приоритетная поддержка от администрации и защита ваших построек и ресурсов.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Статус и признание</h3>
              <p className="text-muted-foreground">Выделяйтесь среди других игроков особым префиксом и цветом ника в чате.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-3xl font-medium mb-6">Готовы поддержать сервер?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Выберите уровень привилегий, который подходит именно вам. Моментальная активация после оплаты.
          </p>
          <Link to="/products">
            <Button size="lg" className="rounded-full px-8">
              Выбрать привилегию
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
