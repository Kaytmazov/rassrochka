import { CalcForm } from './CalcForm';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/lib/constants';

export function CalcSection() {
  return (
    <section
      id="calc-section"
      className="relative bg-blue-600 bg-[url('/calc-background.jpg')] bg-contain bg-center bg-no-repeat py-12 text-white sm:py-36"
    >
      <div className="container md:px-8">
        <div className="mb-8 max-w-2xl sm:mx-auto sm:mb-14 md:mb-20 md:text-center xl:max-w-none">
          <h2 className="mb-6 text-center text-2xl font-extrabold sm:mb-8 sm:text-4xl md:mb-12 md:text-5xl xl:text-6xl">
            Калькулятор рассрочки
          </h2>
          <p className="mx-auto max-w-5xl text-blue-100 sm:text-center sm:font-medium md:text-xl xl:text-2xl">
            Главная особенность исламской рассрочки - запрет на выдачу денежных средств под проценты. Вместо этого
            компания приобретает нужное вам имущество и перепродает его со своей наценкой.
          </p>
        </div>

        <CalcForm />

        <div className="mt-8 text-center sm:mt-20">
          <Button variant="destructive" size="xl" asChild>
            <a href={`tel:${PHONE_NUMBER}`}>Оформить рассрочку</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
