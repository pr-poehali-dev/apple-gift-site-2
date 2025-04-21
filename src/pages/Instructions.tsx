import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-medium mb-4">Инструкция по активации</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подробное руководство по использованию Apple Gift Card
          </p>
        </div>
      </section>

      {/* Instructions Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Шаг 1: Получение кода</h2>
              <p className="text-lg text-muted-foreground">
                После успешной оплаты Apple Gift Card, вы получите код активации на указанную электронную почту. 
                Письмо приходит мгновенно. Если вы не видите письмо, проверьте папку "Спам" или "Промоакции".
              </p>
              <div className="rounded-lg border overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Email with code" 
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Шаг 2: Открытие App Store</h2>
              <p className="text-lg text-muted-foreground">
                На вашем устройстве Apple (iPhone, iPad, Mac) откройте приложение App Store. 
                Нажмите на иконку вашего профиля в правом верхнем углу.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="App Store on iPhone" 
                    className="w-full h-48 object-cover object-center" 
                  />
                </div>
                <div className="rounded-lg border overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Profile icon in App Store" 
                    className="w-full h-48 object-cover object-center" 
                  />
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Шаг 3: Ввод кода активации</h2>
              <p className="text-lg text-muted-foreground">
                В меню профиля нажмите "Пополнить баланс" или "Погасить карту или код". 
                Затем введите полученный код (или отсканируйте его с помощью камеры) и нажмите "Погасить".
              </p>
              <div className="rounded-lg border overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Redeem code screen" 
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Шаг 4: Готово!</h2>
              <p className="text-lg text-muted-foreground">
                После успешной активации, баланс вашего Apple ID будет пополнен на сумму карты. 
                Теперь вы можете использовать эти средства для покупок в App Store, iTunes, Apple Music, 
                оплаты iCloud и других сервисов Apple.
              </p>
              <div className="rounded-lg border overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Balance added confirmation" 
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-3xl font-medium mb-8">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Можно ли объединить несколько карт?</h3>
                <p className="text-muted-foreground">
                  Да, вы можете активировать несколько карт на одном Apple ID. Суммы карт будут складываться.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Срок действия карты</h3>
                <p className="text-muted-foreground">
                  Apple Gift Card не имеют срока действия. После активации средства будут доступны на вашем 
                  аккаунте бессрочно.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Могу ли я подарить карту?</h3>
                <p className="text-muted-foreground">
                  Конечно! После покупки вы можете переслать код активации любому человеку. 
                  Это отличный подарок для владельцев устройств Apple.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-medium mb-4">Готовы приобрести Apple Gift Card?</h2>
            <Link to="/products">
              <Button size="lg" className="rounded-full px-8">
                Выбрать карту
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructions;
