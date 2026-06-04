"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { MapPin, Search, LandPlot, Utensils, ShoppingBag, History, Route, Navigation, Plus, Minus, Navigation2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MapPage = () => {
  return (
    <>
      <Navbar />
      
      <main className="relative w-full h-[calc(100vh-80px)] overflow-hidden flex flex-col md:flex-row">
        {/* Interactive Map Background */}
        <div className="absolute inset-0 z-0 bg-surface-dim">
          <Image 
            className="object-cover opacity-40 mix-blend-luminosity" 
            alt="stylized dark satellite imagery of the sahara desert" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC20VNG6urrJWfmGnZBjQlIG-XZ4HTdMa8JuZw04r5osF8dej4JouOTCvkwox7T0v0fFxH9nyMj_9RdoEy5u0wZudaZ2p9-m7FsoZx1M_bn6CXvxZY0Co9S3PbQugR_E6gCANUghTvno1fvgVZWXyERZj-rwOricFsumtA80u-JDwX1JSOcvp2f94Lcl9PMX8US8KSzsbiu4IWVKyzmA_neElZkiMVWrFRy6IUTDIxLgpnDGsq6iiVbLh9uc0t5pRwN_EmWGCKbows"
            fill
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#111416_95%)] pointer-events-none"></div>
          
          {/* Map Markers (Pins) */}
          <div className="absolute top-[35%] left-[45%] group cursor-pointer">
            <div className="relative">
              <MapPin className="text-primary w-10 h-10 drop-shadow-[0_0_10px_rgba(252,197,113,0.8)] animate-bounce" />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface-container-high px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-outline-variant/30">
                Tassili n'Ajjer
              </div>
            </div>
          </div>
          <div className="absolute top-[60%] left-[55%] group cursor-pointer">
            <MapPin className="text-tertiary w-10 h-10 drop-shadow-[0_0_10px_rgba(61,228,231,0.6)]" fill="currentColor" />
          </div>
          <div className="absolute top-[48%] left-[40%] group cursor-pointer">
            <MapPin className="text-primary w-8 h-8 opacity-70" />
          </div>
        </div>

        {/* Sidebar (Floating Info Panel) */}
        <aside className="relative z-20 w-full md:w-[400px] h-full flex flex-col p-6 pointer-events-none">
          <div className="pointer-events-auto glass border border-outline-variant/15 rounded-2xl flex flex-col h-full shadow-2xl overflow-hidden">
            {/* Search & Filters */}
            <div className="p-6 space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input 
                  className="w-full bg-surface-container-highest border-none rounded-xl py-3 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-tertiary transition-all" 
                  placeholder="Rechercher un lieu..." 
                  type="text"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors">
                  <LandPlot className="w-4 h-4" />
                  Sites Historiques
                </button>
                <button className="flex items-center gap-2 bg-surface-container-highest text-on-surface-variant px-4 py-2 rounded-full text-sm font-medium hover:bg-tertiary/10 hover:text-tertiary transition-colors">
                  <Utensils className="w-4 h-4" />
                  Restaurants
                </button>
                <button className="flex items-center gap-2 bg-surface-container-highest text-on-surface-variant px-4 py-2 rounded-full text-sm font-medium hover:bg-tertiary/10 hover:text-tertiary transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                  Artisans
                </button>
              </div>
            </div>

            {/* Selected Site Detail */}
            <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-hide">
              <div className="space-y-6">
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-outline-variant/15 relative">
                  <Image 
                    className="object-cover" 
                    alt="Formations rocheuses au Tassili" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9d-y7dRQU8ea2nl9TWBwfeljqVMT6zZwjA3Ksaej5F2gebDJ5SM1mqH6hSOOVdapNhaA86lPfMXqEZCYSqkaMe00aec4yc_Utt4yR5R9lAPk6SSjAn7Lxu81sr69RXja2vZE2MlHp_UwY2kpvILS6cz96GcFgo0PLIm9OOoRgTjWIQlmSfKqz3IGv4mnmjyYUbLKcfpVy8G3IN2HDN71XoNx12I9RwCZgcYRXYtYzhJC4KXb0dSRRwXCy5MRFkJQVE_Dq0MvhoTQ"
                    fill
                  />
                </div>
                <div>
                  <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2 block font-label">Patrimoine Mondial</span>
                  <h2 className="text-3xl font-headline font-bold text-on-surface leading-tight mb-2">Tassili n'Ajjer</h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Un vaste plateau situé dans le sud-est de l'Algérie, abritant l'un des plus importants ensembles d'art rupestre préhistorique au monde.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                    <History className="text-primary mb-2 w-6 h-6" />
                    <div className="text-[10px] text-outline uppercase font-bold tracking-tighter">Époque</div>
                    <div className="text-sm font-bold">Néolithique</div>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                    <Route className="text-tertiary mb-2 w-6 h-6" />
                    <div className="text-[10px] text-outline uppercase font-bold tracking-tighter">Proximité</div>
                    <div className="text-sm font-bold">12.4 km</div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Navigation className="w-5 h-5" />
                  Lancer l'itinéraire
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Map Controls (Bottom/Right) */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-4">
          <div className="flex flex-col glass rounded-full border border-outline-variant/15 p-1">
            <button className="p-3 text-on-surface hover:text-tertiary transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <div className="h-[1px] w-4 mx-auto bg-outline-variant/30"></div>
            <button className="p-3 text-on-surface hover:text-tertiary transition-colors">
              <Minus className="w-5 h-5" />
            </button>
          </div>
          <button className="bg-surface-container-high text-tertiary p-4 rounded-full shadow-xl border border-tertiary/20 hover:bg-tertiary hover:text-on-tertiary transition-all">
            <Navigation2 className="w-6 h-6" />
          </button>
        </div>

        {/* Positioning Overlay (Sites à proximité) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-[62%] md:-translate-x-0 z-20 w-[90%] md:w-auto">
          <div className="glass border border-outline-variant/15 rounded-2xl p-4 flex items-center gap-6 overflow-x-auto scrollbar-hide max-w-2xl">
            <div className="flex-shrink-0 flex items-center gap-3 pr-6 border-r border-outline-variant/20">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                <Navigation2 className="w-5 h-5 transform -rotate-45" />
              </div>
              <div>
                <div className="text-[10px] text-outline font-bold uppercase">Sites à proximité</div>
                <div className="text-sm font-bold whitespace-nowrap">3 découvertes proches</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-3 bg-surface-container-highest/50 p-2 pr-4 rounded-xl cursor-pointer hover:bg-surface-container-highest transition-colors">
                <div 
                  className="w-12 h-12 rounded-lg bg-cover bg-center" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdrAEtC2Ounn9WCj_KMhRNX5JKyWgCwhyqb8rfur2SvrZbT1w7ZnhOSLPtkbg9xymlMvNp-T221txpL6T1bykBfBzlYVPWjItgPsNnf473bv5D5d1brDumVJiVgU75AUNx7oSHK1Ytng7UPsrHVgXWMVxZJlya0MJPzYsvjLDiQCivRUfRhUZwQYg1u7x-MZMqVQagqVIDERdfNS-sQn2uik6L242oWDUClrGYocmPitamrfaL9ocM5oBEHChAfgdJW8NOg9eVhRE')` }}
                ></div>
                <div className="whitespace-nowrap">
                  <div className="text-xs font-bold">Musée de l'Artisanat</div>
                  <div className="text-[10px] text-tertiary">0.8 km</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-highest/50 p-2 pr-4 rounded-xl cursor-pointer hover:bg-surface-container-highest transition-colors">
                <div 
                  className="w-12 h-12 rounded-lg bg-cover bg-center" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmWLk7cKMP6qxKsCC5TsKGvsNshx198XFrIfCN5oLwmX7aQDoLLsGcpblVNH4hmtG9WW0913xJH-DTn9FixW8jv53mV3hyVsAgjIeh9G02h9tj3oFtNUeYyc_SOWNFmLOAkcpW3qayEl-NesDzI-mArj9EHMQ5PbnnvrmMHC5HhrpOL1i6DiZYFlgHMPv_TkGH8a7YKcopmT_tLTqgz9Kez3HbENKEzg3mn-GXsJCF1EALH4zwVzxyhdj8CQ9QBHVIDFVVtdeSwZg')` }}
                ></div>
                <div className="whitespace-nowrap">
                  <div className="text-xs font-bold">Café des Oasis</div>
                  <div className="text-[10px] text-tertiary">1.2 km</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* The Map page does not include the Footer in the same way, but let's keep it visually clean or omit it since it takes 100vh */}
    </>
  );
};

export default MapPage;
