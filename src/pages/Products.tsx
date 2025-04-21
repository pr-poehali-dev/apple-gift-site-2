import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const donateTiers = [
  {
    id: 1,
    title: "Админ 1 уровня",
    price: 100,
    description: "Базовый набор команд и привилегий для комфортной игры",
    features: [
      "Цветной ник в чате",
      "Команда /tp",
      "Защита территории до 50x50",
      "Доступ к /kit admin1"
    ],
    imageUrl: "https://cdn.poehali.dev/files/f79289a4-8d82-4949-9723-164e382b9ae7.jpg"
  },
  {
    id: 2,
    title: "Админ 2 уровня",
    price: 200,
    description: "Расширенный набор возможностей для активных игроков",
    features: [
      "Все возможности Админа 1 уровня",
      "Команда /fly в обычном мире",
      "Защита территории до 100x100",
      "Доступ к /kit admin2"
    ]
  },
  {
    id: 3,
    title: "Админ 3 уровня",
    price: 500,
    description: "Продвинутые возможности и дополнительные команды",
    features: [
      "Все возможности Админа 2 уровня",
      "Команда /invsee",
      "Защита территории до 150x150",
      "Возможность отключения PvP"
    ]
  },
  {
    id: 4,
    title: "Админ 4 уровня",
    price: 700,
    description: "Значительные привилегии для заядлых игроков",
    features: [
      "Все возможности Админа 3 уровня",
      "Команда /gamemode",
      "Защита территории до 200x200",
      "Возможность открывать заблокированные сундуки"
    ]
  },
  {
    id: 5,
    title: "Админ 5 уровня",
    price: 600,
    description: "Высокий уровень возможностей для приоритетных игроков",
    features: [
      "Все возможности Админа 4 уровня",
      "Команда /time и /weather",
      "Защита территории до 250x250",
      "Специальный префикс в чате"
    ]
  },
  {
    id: 6,
    title: "Админ 6 уровня",
    price: 900,
    description: "Эксклюзивные возможности для избранных",
    features: [
      "Все возможности Админа 5 уровня",
      "Команда /vanish",
      "Защита территории до 300x300",
      "Доступ в VIP-зону сервера"
    ]
  },
  {
    id: 7,
    title: "Админ 7 уровня",
    price: 1100,
    description: "Высокий уровень контроля и модерации",
    features: [
      "Все возможности Админа 6 уровня",
      "Команда /kick",
      "Защита территории до 350x350",
      "Особый цвет сообщений в чате"
    ]
  },
  {
    id: 8,
    title: "Админ 8 уровня",
    price: 1100,
    description: "Премиум возможности с продвинутым контролем",
    features: [
      "Все возможности Админа 7 уровня",
      "Возможность мутить игроков",
      "Защита территории до 400x400",
      "Цветные сообщения в чате"
    ]
  },
  {
    id: 9,
    title: "Админ 9 уровня",
    price: 1300,
    description: "Высший уровень контроля и статуса",
    features: [
      "Все возможности Админа 8 уровня",
      "Команда /ban на время",
      "Защита территории до 500x500",
      "Доступ к WorldEdit"
    ]
  },
  {
    id: 10,
    title: "Админ 10 уровня",
    price: 1523,
    description: "Почти полный контроль над игровым процессом",
    features: [
      "Все возможности Админа 9 уровня",
      "Управление экономикой",
      "Неограниченная защита территории",
      "Возможность создания варпов"
    ]
  },
  {
    id: 11,
    title: "Админ 11 уровня",
    price: 1900,
    description: "Предмаксимальный уровень полномочий",
    features: [
      "Все возможности Админа 10 уровня",
      "Выдача временных привилегий",
      "Редактирование списка команд",
      "Управление игровыми событиями"
    ]
  },
  {
    id: 12,
    title: "Админ 12 уровня",
    price: 2121,
    description: "Максимальные возможности, доступные донатерам",
    features: [
      "Все возможности Админа 11 уровня",
      "Полный доступ к консоли сервера",
      "Создание и настройка ивентов",
      "Уникальный анимированный префикс"
    ]
  },
  {
    id: 13,
    title: "Владелец сервера",
    price: 6892,
    description: "Особый статус с расширенными полномочиями",
    features: [
      "Все возможности Админа 12 уровня",
      "Управление штатом администраторов",
      "Возможность изменения правил сервера",
      "Эксклюзивный префикс 'Владелец'"
    ]
  },
  {
    id: 14,
    title: "Основатель",
    price: 2702,
    description: "Наивысший статус с максимальными полномочиями",
    features: [
      "Все возможности Владельца сервера",
      "Право окончательного решения в спорах",
      "Уникальные команды недоступные другим",
      "Личный служебный мир"
    ]
  }
];

// Группировка по ценовым диапазонам
const priceTiers = {
  tier1: donateTiers.filter(tier => tier.price <= 500),
  tier2: donateTiers.filter(tier => tier.price > 500 && tier.price <= 1500),
  tier3: donateTiers.filter(tier => tier.price > 1500)
};

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-medium mb-4">Привилегии сервера</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий уровень привилегий и получите доступ к эксклюзивным возможностям
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="tier1" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="tier1">До 500 ₽</TabsTrigger>
              <TabsTrigger value="tier2">500-1500 ₽</TabsTrigger>
              <TabsTrigger value="tier3">От 1500 ₽</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tier1" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {priceTiers.tier1.map((tier) => (
                  <DonateCard key={tier.id} tier={tier} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tier2" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {priceTiers.tier2.map((tier) => (
                  <DonateCard key={tier.id} tier={tier} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tier3" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {priceTiers.tier3.map((tier) => (
                  <DonateCard key={tier.id} tier={tier} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Information */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-2xl font-medium mb-6 text-center">Информация о привилегиях</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-3">Преимущества</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Привилегии действуют бессрочно</li>
                <li>• Мгновенная активация после оплаты</li>
                <li>• Доступ к эксклюзивному контенту</li>
                <li>• Приоритетное место в очереди</li>
                <li>• Особый статус в сообществе</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Как активировать?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Выберите нужную привилегию</li>
                <li>• Оплатите удобным способом</li>
                <li>• Получите код активации</li>
                <li>• Введите код на сервере командой /activate</li>
                <li>• Готово! Привилегии активированы</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface DonateCardProps {
  tier: {
    id: number;
    title: string;
    price: number;
    description: string;
    features: string[];
    imageUrl?: string;
  }
}

const DonateCard = ({ tier }: DonateCardProps) => {
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

export default Products;
