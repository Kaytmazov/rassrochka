import { Button } from '@/components/ui/button';
import { IntroBannerTitle } from './IntroBannerTitle';
import { PHONE_NUMBER } from '@/lib/constants';

export function IntroBanner() {
  return (
    <section className="py-12 sm:py-28">
      <div className="container md:px-8">
        <IntroBannerTitle />
        <p className="mx-auto mb-8 max-w-2xl tracking-tight text-slate-700 sm:mb-12 sm:text-center sm:text-xl sm:font-medium">
          Главная особенность исламской рассрочки - запрет на выдачу денежных средств под проценты. Вместо этого
          компания приобретает нужное вам имущество и перепродает его со своей наценкой.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="destructive" size="lg" asChild>
            <a href="#calc-section">Калькулятор</a>
          </Button>
          <Button size="lg" asChild>
            <a href={`tel:${PHONE_NUMBER}`}>Оформить рассрочку</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
