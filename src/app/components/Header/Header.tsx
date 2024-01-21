import Link from 'next/link';
import { AtSignIcon, PhoneIcon } from 'lucide-react';
import { PHONE_NUMBER, EMAIL } from '@/lib/constants';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 font-medium text-white">
      <div className="container flex items-center justify-between py-2 md:px-8">
        <Link className="text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl" href="/">
          Рассрочка
        </Link>
        <div className="flex gap-8">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-sm hover:text-cyan-100 sm:text-base">
            <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            {PHONE_NUMBER}
          </a>
          <a href={`mailto:${EMAIL}`} className="hidden items-center gap-2 hover:text-cyan-100 sm:flex">
            <AtSignIcon className="h-5 w-5" />
            {EMAIL}
          </a>
        </div>
      </div>
    </header>
  );
}
