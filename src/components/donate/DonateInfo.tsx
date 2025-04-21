
export const DonateInfo = () => {
  return (
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
  );
};
