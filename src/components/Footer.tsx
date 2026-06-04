import Link from 'next/link';
import { Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background w-full p-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <div className="font-serif text-xl text-primary">Le Patrimoine Phygital</div>
          <p className="text-slate-500 max-w-xs font-body text-sm leading-relaxed">
            Quand le Grès d'Algérie rencontre le Futur Holographique. Une passerelle entre l'histoire millénaire et la technologie de demain.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-label font-bold text-xs uppercase tracking-widest text-primary">Découvrir</span>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/app">Application</Link>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/experience">Expérience</Link>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/map">Carte</Link>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/offers">Offres</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label font-bold text-xs uppercase tracking-widest text-primary">Chronos</span>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/about">À Propos</Link>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/impact">Impact</Link>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/partners">Partenaires</Link>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label font-bold text-xs uppercase tracking-widest text-primary">Juridique</span>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/privacy">Confidentialité</Link>
            <Link className="text-slate-500 hover:text-primary font-label text-sm transition-colors" href="/terms">Conditions</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label font-bold text-xs uppercase tracking-widest text-primary">Réseaux</span>
            <div className="flex gap-4">
              <Globe className="w-5 h-5 text-slate-500 hover:text-tertiary cursor-pointer transition-colors" />
              <Share2 className="w-5 h-5 text-slate-500 hover:text-tertiary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/10">
        <p className="font-body text-sm text-slate-500 text-center">© 2024 Le Patrimoine Phygital. Quand le Grès d'Algérie rencontre le Futur Holographique.</p>
      </div>
    </footer>
  );
};

export default Footer;
