import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Instructions = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-medium mb-4">Инструкция по активации</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подробное руководство по активации привилегий на сервере
          </p>
        </div>
      </section>

      {/* Instructions Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Шаг 1: Выбор и оплата</h2>
              <p className="text-lg text-muted-foreground">
                Выберите желаемый уровень привилегий в разделе "Привилегии" и произведите оплату 
                удобным для вас способом. Мы поддерживаем различные платежные системы: банковские карты, 
                электронные кошельки и мобильные платежи.
              </p>
              <div className="rounded-lg border overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Выбор привилегии" 
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Шаг 2: Получение кода активации</h2>
              <p className="text-lg text-muted-foreground">
                После успешной оплаты вы получите уникальный код активации. Он будет отправлен на указанную 
                электронную почту и также отобразится на странице после оплаты. Сохраните этот код, 
                он понадобится для активации привилегий.
              </p>
              <div className="rounded-lg border overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Код активации" 
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Шаг 3: Активация на сервере</h2>
              <p className="text-lg text-muted-foreground">
                Войдите на сервер и введите команду активации с полученным кодом. Команда имеет 
                следующий формат: <span className="font-mono bg-secondary px-2 py-1 rounded">/activate [ваш_код]</span>.
                Замените [ваш_код] на полученный код активации.
              </p>
              <div className="rounded-lg border overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Активация на сервере" 
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Шаг 4: Подтверждение активации</h2>
              <p className="text-lg text-muted-foreground">
                После успешной активации вы получите системное сообщение о том, что привилегии успешно 
                активированы. Все доступные команды и возможности станут доступны немедленно. Вы 
                также увидите изменение своего префикса в чате и табе игроков.
              </p>
              <div className="rounded-lg border overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Подтверждение активации" 
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-3xl font-medium mb-8">Часто задаваемые вопросы</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Как долго действуют привилегии?</AccordionTrigger>
                <AccordionContent>
                  Все привилегии, приобретенные на нашем сервере, действуют бессрочно. После активации вы будете иметь доступ ко всем возможностям вашего ранга на всё время существования сервера.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Можно ли обновить привилегию до более высокого уровня?</AccordionTrigger>
                <AccordionContent>
                  Да, вы можете повысить свою привилегию, доплатив разницу между текущим и желаемым уровнем. Для этого обратитесь к администрации сервера с помощью команды /helpop или через нашу группу в социальных сетях.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Что делать, если я потерял код активации?</AccordionTrigger>
                <AccordionContent>
                  Если вы потеряли код активации, но сохранили квитанцию об оплате или помните другие детали транзакции, обратитесь в нашу службу поддержки. Мы поможем восстановить ваш код при наличии подтверждения оплаты.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Может ли админ быть забанен или потерять привилегии?</AccordionTrigger>
                <AccordionContent>
                  Да, в случае грубого нарушения правил сервера даже администратор может быть лишен своих привилегий или даже забанен. Привилегии не дают права нарушать основные правила сервера и этики общения.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Можно ли передать привилегии другому игроку?</AccordionTrigger>
                <AccordionContent>
                  Нет, привилегии привязаны к конкретному аккаунту и не могут быть переданы другому игроку. Это сделано для предотвращения злоупотреблений и продажи привилегий на сторонних площадках.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-medium mb-4">Готовы приобрести привилегии?</h2>
            <Link to="/products">
              <Button size="lg" className="rounded-full px-8">
                Выбрать привилегию
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructions;
