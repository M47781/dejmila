"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PlayCircle, ArrowRight, History, Cuboid, Palette, SunMoon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ExperiencePage = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Storytelling Section */}
        <section className="relative h-[921px] w-full flex items-center px-8 md:px-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, ease: 'easeOut' as any }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                className="object-cover" 
                alt="Cinematic wide shot of the Arc of Caracalla ruins" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLfRSdIlJ-VFSP5W8Bm234Zjttcj1NFjhqAQh4k-OvRL5aOhKHhXPNaJBqs84d5drMOcR6McNreZazek5PSJqFCiXy78bzYZ8X6CNjBdUtS_ewarRAaYt_hu3q_5zLuaNzbu25jxTA9aIUC-63nxRb2na43uNnsXcq7REvVUdW8KfjdbBt8GFRUM1g1qm0zbjjawhDlqhAwBHVZQzp8UAg4n7YCo-AKLfgOjL1kJXkDTPDrzM3c0I9LEfghwtLVy7dwaeJYt7295g"
                fill
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-3xl"
          >
            <motion.span variants={fadeUpVariants} className="font-label text-tertiary tracking-[0.3em] uppercase text-sm mb-4 block">Archive Numérique 042</motion.span>
            <motion.h1 variants={fadeUpVariants} className="font-headline text-6xl md:text-8xl leading-tight mb-6 italic">
              L'Éveil de <span className="text-primary not-italic font-bold">Timgad</span>
            </motion.h1>
            <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-8">
              Voyagez à travers les siècles. Là où le calcaire de l'Atlas rencontre la précision du LiDAR, nous reconstruisons l'héritage perdu de la Numidie romaine.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="flex gap-4">
              <button className="bg-tertiary/10 border border-tertiary/30 text-tertiary px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-tertiary/20 transition-all">
                <PlayCircle className="w-6 h-6" />
                Lancer l'Immersion
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Before/After Time Slider Section */}
        <section className="py-24 px-8 md:px-20 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
            >
              <motion.div variants={fadeUpVariants} className="max-w-2xl">
                <h2 className="font-headline text-5xl mb-4 italic">Fragments du Temps</h2>
                <p className="text-on-surface-variant font-body">Manipulez le curseur pour observer la métamorphose de l'Arc de Caracalla, du déclin présent à sa splendeur de l'an 211.</p>
              </motion.div>
              <motion.div variants={fadeUpVariants} className="glass p-4 rounded-2xl flex items-center gap-6">
                <span className="font-label text-xs text-slate-500">2024 ap. J.-C.</span>
                <input className="w-48 md:w-64 accent-primary" max="100" min="0" type="range" defaultValue="50"/>
                <span className="font-label text-xs text-primary">211 ap. J.-C.</span>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group border border-outline-variant/15"
            >
              <div className="absolute inset-0">
                <Image 
                  className="object-cover" 
                  alt="Hyper-realistic 3D digital reconstruction of the Roman Arc of Caracalla" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhOFwvCyPkTDSZB3DXmW5bVuytF9UyQ7c7f1CXqh1nUrHuZFoXH0DRyDk3lN-fqCeFy_1dH4O1BcCRBkDRUos5adRWcHx3sfy67X0Oo7c2o4ANjVF-tod4Hfgl0lkreyGiLBIXb_q8ezRWQTHUoVybn43Cmamlcg_0NAupkLHAFDoCEBWMdwA9Srl60fSI8wZCy88LitPSESE6FDBDGS2U8Flf_7ls-f-ttMMnOvoZnFSq6JBShOkn3zWwoxI7SGrKHRdEVbTy2jA"
                  fill
                />
              </div>
              {/* Reveal Overlay Simulation */}
              <div className="absolute inset-0 pointer-events-none border-r-4 border-tertiary/50 w-1/2 overflow-hidden">
                <div className="relative w-[200%] h-full">
                  <Image 
                    className="object-cover" 
                    alt="Close-up of weathered sandstone ruins of a Roman arch" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZmqo03ae-xpH0k1gYO0Db-bAJdj_Z5EwEDcXCNhMwXV8wbQcONzDIm_hxzG11m1UmrN34GqTRKJ8Dp70evnD7FBUaDGir35utwCD9KvaJ3C2r_DbJeT8XnI_k1ihTK0d1Tl0EVq66a1rTHgGNIu4w-X7wqFYbL8ZoJTFzhjGuuu_N5Bh24DI2EMOoewiLZtdCQPvYH38UAXWbgpcjqh5yeFe-9AghDaU2gmeYqhFwIqBctSkSE7mokFasDvIMfWytuUKoEvLvp9s"
                    fill
                  />
                </div>
              </div>
              <div className="absolute bottom-8 right-8 glass p-6 rounded-2xl border border-outline-variant/20 max-w-xs">
                <h4 className="font-headline text-2xl text-primary italic mb-2">Arc de Caracalla</h4>
                <p className="text-sm text-on-surface-variant">Un symbole de pouvoir impérial, restauré pixel par pixel à partir de scans photogrammétriques.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Simulation Bento Grid */}
        <section className="py-24 px-8 md:px-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            {/* Large Interactive Card */}
            <motion.div variants={fadeUpVariants} className="md:col-span-8 bg-surface-container rounded-3xl p-8 relative overflow-hidden group border border-outline-variant/15 min-h-[400px]">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                    <span className="font-label text-tertiary text-xs uppercase tracking-widest">Simulateur de Rendu RA</span>
                  </div>
                  <h3 className="font-headline text-4xl mb-6">Contrôle de l'Entité</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-surface-container-highest px-6 py-4 rounded-2xl border border-outline-variant/10 flex items-center gap-3 hover:border-tertiary transition-all">
                    <Cuboid className="text-tertiary w-5 h-5" />
                    <span className="font-label text-sm">Maillage</span>
                  </button>
                  <button className="bg-surface-container-highest px-6 py-4 rounded-2xl border border-outline-variant/10 flex items-center gap-3 hover:border-tertiary transition-all">
                    <Palette className="text-primary w-5 h-5" />
                    <span className="font-label text-sm">Textures 8K</span>
                  </button>
                  <button className="bg-surface-container-highest px-6 py-4 rounded-2xl border border-outline-variant/10 flex items-center gap-3 hover:border-tertiary transition-all">
                    <SunMoon className="text-slate-400 w-5 h-5" />
                    <span className="font-label text-sm">Occlusion</span>
                  </button>
                </div>
              </div>
              <Image 
                className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" 
                alt="Technical blueprint wireframe of ancient roman columns" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5oUQ_xQgfiF-9r49v79A4kivoCJdyfG1yth-a5-4x9TomA0lOO1wSIhyv-50oBv1IcvJQB6uO2GnIsTcjxtEPWd_FGk6ebNQH_xGne6WtuI-3fGyRro0ZolUQ0UyO5242b8OC_khCNcNuTzLScUavqShIQVkWVb1NA-rq7AId608Z21LXECakL74qiYQCcZQRMJWa78kdlcNPA8WIpXxUlevzpsRxcmgl3xMN7d8LIkmQiTfh1bPbUdK-_Aa3uFSKjDTND0yC4Hs"
                fill
              />
            </motion.div>
            
            {/* Vertical Detail Card */}
            <motion.div variants={fadeUpVariants} className="md:col-span-4 bg-primary-container rounded-3xl p-8 text-on-primary-container flex flex-col justify-between relative overflow-hidden min-h-[400px]">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-30 rotate-12">
                <Image 
                  className="object-cover" 
                  alt="Macro photo of a Roman marble statue head" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCynqAkLydAszKMduBrNlJWx_UnFzfhAaI-tFavmLmY9jKmtJd3fNAnnHnXmKoGFMpGtjatcx7I01y66d0-k7SH39gJ258xF492EvIC7oyCDcYVd9n8R_HpHVCMDj2Y_RRpAs01-MjyCaYNfwJuonDciOYOejV4xhMkXzov4WxaVPv4pgxqOSR96XvLzzj37LEYi4w3xGwEe4FB0m7h7Wrb3AwHTkdCL3EzE1pOVnwXqFefyycLvR87IXrEoaiWDWvsYf36_0Xe7M8"
                  fill
                />
              </div>
              <div className="relative z-10">
                <h4 className="font-headline text-3xl mb-4 italic">Analyse Sémantique</h4>
                <p className="font-body text-sm leading-relaxed mb-6">Notre IA identifie chaque fragment pour recréer l'histoire narrative du site.</p>
              </div>
              <a className="font-label font-bold flex items-center gap-2 group relative z-10 cursor-pointer" href="#">
                Explorer les métadonnées 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
            
            {/* Small Data Card */}
            <motion.div variants={fadeUpVariants} className="md:col-span-4 bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10">
              <div className="text-tertiary mb-6">
                <History className="w-10 h-10" />
              </div>
              <h5 className="font-headline text-xl mb-2">Chronologie Interactive</h5>
              <p className="text-on-surface-variant text-sm">Parcourez 2000 ans d'histoire algérienne via une interface holographique intuitive.</p>
            </motion.div>
            
            {/* Horizontal Tech Card */}
            <motion.div variants={fadeUpVariants} className="md:col-span-8 bg-[#191c1e] rounded-3xl p-8 border border-outline-variant/5 flex items-center gap-8">
              <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center shrink-0">
                <span className="font-headline text-3xl italic">98%</span>
              </div>
              <div>
                <h5 className="font-headline text-2xl mb-1 italic">Précision Topographique</h5>
                <p className="text-on-surface-variant text-sm">Données collectées via drone LiDAR à une résolution sub-centimétrique pour une fidélité historique absolue.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Storytelling Section: Deep History */}
        <section className="py-32 px-8 md:px-20 bg-surface">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20"
          >
            <motion.div variants={fadeUpVariants} className="w-full md:w-1/2">
              <div className="relative">
                <div className="relative aspect-square w-full rounded-3xl shadow-2xl z-10 overflow-hidden border border-outline-variant/15">
                  <Image 
                    className="object-cover" 
                    alt="A person using a glowing holographic tablet" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIh4r_mtfv7R5sSN8vFmBPIXdrsQv737VdrvlaAizITamZdFNLHUHl6_ovPqQkkLEXHRGGxVsD5KclyXhthtz1vi7e71vU8p3SpcT12eMsXVl8rLM_Hbky8sRjndXtLSiAC2MN1SS5TLAtfbHCwB5unfgPC_Ai6OEVJWXJs8LYoNGsgB-KfJyYsSvnUcpYLu4gf5TBZB4PrlezT8Qi_eELauPTBPDOmmIem16ivZJnYho1zlCXCUJUEH2YrRVWQljyE3sv9VdRybc"
                    fill
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-tertiary/40 rounded-br-3xl"></div>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariants} className="w-full md:w-1/2">
              <h2 className="font-headline text-5xl md:text-6xl mb-8 leading-tight italic">
                Raconter le <span className="text-primary not-italic">Silence des Pierres</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                <p>Timgad, la "Pompéi de l'Afrique", n'est pas qu'un champ de ruines. Chaque colonne de calcaire bleu raconte une histoire de résilience et de commerce impérial.</p>
                <p>Grâce à notre technologie <span className="text-tertiary">Chronos</span>, nous ne nous contentons pas de montrer ce qui était là. Nous redonnons vie aux sons du cardo maximus, à l'agitation du forum et à la sérénité des thermes.</p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-grow bg-outline-variant/30"></div>
                <span className="font-serif italic text-primary text-xl">Signé par l'Archéologue Digital</span>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ExperiencePage;
