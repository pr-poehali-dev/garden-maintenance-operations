import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/placeholder.svg';

const services = [
  { icon: 'Sprout', title: 'Прополка грядок', text: 'Аккуратно убираем сорняки вручную, не повреждая ваши растения и корневую систему.' },
  { icon: 'Scissors', title: 'Обрезка и формовка', text: 'Формируем кусты, деревья и живые изгороди для здорового роста и красивого вида.' },
  { icon: 'Droplets', title: 'Полив и подкормка', text: 'Настраиваем правильный режим полива и вносим органические удобрения по сезону.' },
  { icon: 'Leaf', title: 'Уход за газоном', text: 'Стрижём, аэрируем и восстанавливаем газон — двор всегда будет ухоженным.' },
  { icon: 'Shovel', title: 'Подготовка почвы', text: 'Перекапываем, рыхлим и мульчируем землю перед посадкой для богатого урожая.' },
  { icon: 'TreeDeciduous', title: 'Посадка растений', text: 'Высаживаем рассаду, кустарники и деревья с гарантией приживаемости.' },
];

const prices = [
  { name: 'Разовая прополка', unit: 'за сотку', price: '800 ₽', popular: false },
  { name: 'Сезонный уход', unit: 'в месяц', price: '6 500 ₽', popular: true },
  { name: 'Комплекс «Под ключ»', unit: 'за участок', price: 'от 15 000 ₽', popular: false },
];

const reviews = [
  { name: 'Ольга Маркова', role: 'дача в Подмосковье', text: 'За один день привели в порядок весь огород. Грядки чистые, всё аккуратно. Очень довольна, теперь только к ним!' },
  { name: 'Сергей Иванов', role: 'частный дом', text: 'Заказывал сезонный уход. Приезжают вовремя, работают честно и бережно. Сад наконец-то выглядит как с картинки.' },
  { name: 'Наталья П.', role: 'садовый участок', text: 'Помогли подготовить почву и высадить рассаду. Урожай в этом году рекордный. Спасибо за заботу о земле!' },
];

const Index = () => {
  const [navOpen, setNavOpen] = useState(false);

  const nav = [
    { label: 'Главная', href: '#home' },
    { label: 'Услуги', href: '#services' },
    { label: 'Прайс', href: '#prices' },
    { label: 'Отзывы', href: '#reviews' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground texture-soil">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
              <Icon name="Sprout" size={22} />
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight">Зелёный Двор</span>
          </a>
          <nav className="hidden md:flex items-center gap-9">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <Button className="hidden md:inline-flex rounded-full px-6">Оставить заявку</Button>
          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            <Icon name={navOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 animate-grow-in">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setNavOpen(false)} className="text-base font-medium">{n.label}</a>
            ))}
            <Button className="rounded-full">Оставить заявку</Button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-28">
          <div className="animate-grow-in">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-6">
              <Icon name="Leaf" size={16} /> Уход за садом и огородом
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-semibold mb-6">
              Заботливые руки <br className="hidden sm:block" /> для вашей <em className="text-primary not-italic">земли</em>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-9">
              Прополка, обрезка, полив и сезонный уход. Мы возвращаем садам и огородам ухоженный, живой вид — бережно и с любовью к природе.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 h-13 text-base">
                Заказать уход <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-13 text-base border-primary/30">
                Узнать цены
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <div>
                <div className="font-display text-4xl font-semibold text-primary">12 лет</div>
                <div className="text-sm text-muted-foreground">в садоводстве</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-display text-4xl font-semibold text-primary">800+</div>
                <div className="text-sm text-muted-foreground">ухоженных участков</div>
              </div>
            </div>
          </div>

          <div className="relative animate-grow-in" style={{ animationDelay: '0.15s' }}>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img src={HERO_IMG} alt="Сад и огород" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 flex items-center gap-3 border border-border">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-accent text-accent-foreground">
                <Icon name="ShieldCheck" size={22} />
              </span>
              <div>
                <div className="font-semibold text-sm">Гарантия результата</div>
                <div className="text-xs text-muted-foreground">Бережный уход за каждым ростком</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-medium text-accent">Что мы делаем</span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 mb-4">Полный уход за вашим садом</h2>
            <p className="text-muted-foreground text-lg">От первой прополки до богатого урожая — берём всю заботу о земле на себя.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="hover-lift bg-card rounded-2xl p-8 border border-border">
                <span className="grid place-items-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <Icon name={s.icon} size={26} />
                </span>
                <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-20 lg:py-28 bg-primary text-primary-foreground rounded-[2.5rem] mx-3 lg:mx-6">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-secondary">Прайс</span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 mb-4">Честные цены без сюрпризов</h2>
            <p className="opacity-80 text-lg">Стоимость зависит от площади и состояния участка. Точную цену назовём после осмотра.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 flex flex-col ${p.popular ? 'bg-accent text-accent-foreground scale-[1.04] shadow-2xl' : 'bg-primary-foreground/5 border border-primary-foreground/15'}`}
              >
                {p.popular && (
                  <span className="self-start text-xs font-semibold uppercase tracking-wide bg-accent-foreground/15 px-3 py-1 rounded-full mb-4">
                    Выбирают чаще
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold mb-1">{p.name}</h3>
                <div className="text-sm opacity-70 mb-6">{p.unit}</div>
                <div className="font-display text-4xl font-semibold mb-8">{p.price}</div>
                <Button
                  className={`mt-auto rounded-full ${p.popular ? 'bg-accent-foreground text-accent hover:bg-accent-foreground/90' : 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'}`}
                >
                  Заказать
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-medium text-accent">Отзывы</span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 mb-4">Нам доверяют свою землю</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="hover-lift bg-card rounded-2xl p-8 border border-border flex flex-col">
                <div className="flex gap-1 text-accent mb-5">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={18} className="fill-current" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-7 flex-1">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-primary/10 text-primary font-display text-lg font-semibold">
                    {r.name[0]}
                  </span>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container py-16">
          <div className="rounded-[2rem] bg-primary text-primary-foreground p-10 lg:p-16 text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-4">Пора привести сад в порядок?</h2>
            <p className="opacity-80 text-lg max-w-xl mx-auto mb-8">Оставьте заявку — приедем, осмотрим участок и составим план ухода бесплатно.</p>
            <Button size="lg" className="rounded-full px-8 h-13 text-base bg-accent text-accent-foreground hover:bg-accent/90">
              Оставить заявку <Icon name="ArrowRight" size={18} className="ml-1" />
            </Button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" size={20} className="text-primary" />
              <span className="font-display text-lg font-semibold text-foreground">Зелёный Двор</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><Icon name="Phone" size={16} /> +7 (900) 000-00-00</span>
              <span className="flex items-center gap-2"><Icon name="MapPin" size={16} /> Москва и область</span>
            </div>
            <span>© 2026 Зелёный Двор</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
