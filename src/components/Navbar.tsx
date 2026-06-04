"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    return pathname === path 
      ? "text-primary border-b-2 border-primary pb-1 font-label" 
      : "text-slate-400 font-medium font-label hover:text-tertiary transition-colors duration-300";
  };

  return (
    <nav className="flex justify-between items-center px-8 h-20 w-full z-50 sticky top-0 bg-surface-variant/40 backdrop-blur-md shadow-2xl shadow-background/40">
      <div className="text-2xl font-serif italic text-primary tracking-tight">Le Patrimoine Phygital</div>
      <div className="hidden md:flex items-center gap-8">
        <Link className={getLinkClasses('/')} href="/">Accueil</Link>
        <Link className={getLinkClasses('/app')} href="/app">Application</Link>
        <Link className={getLinkClasses('/experience')} href="/experience">Expérience</Link>
        <Link className={getLinkClasses('/map')} href="/map">Carte</Link>
        <Link className={getLinkClasses('/offers')} href="/offers">Offres</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/offers" className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label px-6 py-2 rounded-full font-bold scale-95 active:duration-150 transition-all hover:brightness-110 text-center">
          Commencer
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
