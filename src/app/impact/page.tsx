"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrendingUp, Banknote, UserPlus, Microscope, Cloud, School, Lightbulb, Headset } from 'lucide-react';

const ImpactPage = () => {
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
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center px-8 pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, ease: 'easeOut' as any }}
              className="absolute inset-0 w-full h-full mix-blend-luminosity"
            >
              <Image 
                className="object-cover" 
                alt="cinematic shot of ancient algerian sandstone ruins at dusk" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoGtHZzNY3l_yTr5uwBkTGLrnQHaTrL8Qp1tKhVF3sJzs8bI7qVF6pby8f6tm02-SU1qgSWLvqyjmEXBwJS-WN7pfKLwF8mxohlbx51He6x1Ngj5xhlzwyvbtgpaKKTD6zzP9mO33LBX0dh1ZeVwGhBFnGoHhol5pinVl2O3CW8hqCs73s7NXWb-qQyJuKzUJNAl1koeqa9_Nf8_gFZCT55hIDad1yATmktCS1ai_NrDhe0xPdQCXUtHo8JF5BMgZdz1p60nowhZk"
                fill
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-5xl mx-auto w-full"
          >
            <motion.span variants={fadeUpVariants} className="font-label text-tertiary tracking-widest text-sm mb-4 block uppercase">Impact Global 2024</motion.span>
            <motion.h1 variants={fadeUpVariants} className="font-headline text-6xl md:text-8xl italic text-primary leading-none mb-8 -ml-1">
              L'Empreinte de Chronos
            </motion.h1>
            <motion.p variants={fadeUpVariants} className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
              Au-delà du numérique, nous bâtissons un pont tangible entre le patrimoine millénaire de l'Algérie et l'économie de demain. Une empreinte durable, gravée dans le sable et le silicium.
            </motion.p>
          </motion.div>
        </section>

        {/* Impact Économique: Bento Grid & Data */}
        <section className="px-8 py-24 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <motion.div variants={fadeUpVariants}>
              <h2 className="font-headline text-5xl text-on-surface mb-4">Impact Économique</h2>
              <p className="font-body text-on-surface-variant max-w-xl">La numérisation du patrimoine catalyse une nouvelle ère de croissance pour les écosystèmes locaux.</p>
            </motion.div>
            <motion.div variants={fadeUpVariants} className="flex items-center gap-4">
              <div className="bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/20">
                <span className="font-label text-primary text-sm font-bold">+25% Revenus Locaux</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            {/* Main Chart Card */}
            <motion.div variants={fadeUpVariants} className="md:col-span-8 bg-surface-container-low p-8 rounded-xl relative overflow-hidden group border border-outline-variant/10 min-h-[400px]">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="font-label text-sm text-tertiary mb-12 uppercase tracking-tighter">Croissance Touristique (Visualisation)</h3>
                <div className="flex items-end gap-2 h-64 mb-6">
                  <div className="w-full bg-surface-container-highest rounded-t-lg relative group/bar" style={{ height: '30%' }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity">2021</div>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-t-lg relative group/bar" style={{ height: '45%' }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity">2022</div>
                  </div>
                  <div className="w-full bg-gradient-to-t from-primary-container to-primary rounded-t-lg relative group/bar" style={{ height: '75%' }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label text-xs text-primary font-bold">2023</div>
                  </div>
                  <div className="w-full bg-tertiary rounded-t-lg relative group/bar shadow-[0_0_15px_rgba(61,228,231,0.4)]" style={{ height: '95%' }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label text-xs text-tertiary font-bold">Projection 2024</div>
                  </div>
                </div>
                <p className="font-body text-on-surface-variant">Une augmentation de 45% des visites sur les sites phares grâce à l'accessibilité numérique et la narration immersive.</p>
              </div>
              <div className="absolute bottom-[-20px] right-[-20px] opacity-10 pointer-events-none">
                <TrendingUp className="w-64 h-64" />
              </div>
            </motion.div>
            {/* Small Metric Card */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <motion.div variants={fadeUpVariants} className="bg-surface-container-highest p-8 rounded-xl flex-1 border border-outline-variant/10 flex flex-col justify-center">
                <Banknote className="text-primary w-10 h-10 mb-4" />
                <div className="font-headline text-4xl mb-2 text-on-surface">12.4M DZD</div>
                <p className="font-label text-xs text-slate-500 uppercase tracking-widest">Injectés dans l'artisanat local</p>
              </motion.div>
              <motion.div variants={fadeUpVariants} className="bg-surface-container-low p-8 rounded-xl flex-1 border border-outline-variant/10 flex flex-col justify-center">
                <UserPlus className="text-tertiary w-10 h-10 mb-4" />
                <div className="font-headline text-4xl mb-2 text-on-surface">150+</div>
                <p className="font-label text-xs text-slate-500 uppercase tracking-widest">Nouveaux Guides Certifiés RA</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Statistical Infographics Grid */}
        <section className="bg-surface-container-lowest py-24 px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            <motion.div variants={fadeUpVariants} className="text-center">
              <div className="font-headline text-6xl text-primary mb-2">50+</div>
              <div className="font-label text-xs text-tertiary uppercase tracking-widest">Sites Scannés en 8K</div>
            </motion.div>
            <motion.div variants={fadeUpVariants} className="text-center">
              <div className="font-headline text-6xl text-primary mb-2">10k+</div>
              <div className="font-label text-xs text-tertiary uppercase tracking-widest">Étudiants Sensibilisés</div>
            </motion.div>
            <motion.div variants={fadeUpVariants} className="text-center">
              <div className="font-headline text-6xl text-primary mb-2">25%</div>
              <div className="font-label text-xs text-tertiary uppercase tracking-widest">Hausse Ventes Artisanat</div>
            </motion.div>
            <motion.div variants={fadeUpVariants} className="text-center">
              <div className="font-headline text-6xl text-primary mb-2">2M+</div>
              <div className="font-label text-xs text-tertiary uppercase tracking-widest">Visites Virtuelles</div>
            </motion.div>
          </motion.div>
        </section>

        {/* Conservation: Asymmetric Layout */}
        <section className="px-8 py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative z-10 border border-outline-variant/20">
              <Image 
                className="object-cover" 
                alt="close up of a digital archaeologist using a laser scanner" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6mKWLvBkJYU3Xyvob1g-B2eMYwAplbWgRUNHeI4jIqtor6OjKfa_mFQT1V4m9aJ7Sm0_lELE0jFGlRigGU5_RJgR9S-8bddZWsuD99yx9V7nYuScnsLS-1STrxfoL6mbqUoVwcLhyAjQm2E0lRbZGcQdYUC__snr2ESIWxkysMJZUzBC8FKONVxu7YjWJ7WgpYzbBb1t120as_5wJswIvDQdr6wi605Jq3B1HkSh0kdjPw9TGpezNeo0Yu3fm6XppltycQCO_B_A"
                fill
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-8 -left-8 w-64 h-64 border-l-2 border-t-2 border-primary/20 -z-10 rounded-tl-xl"></div>
            <div className="absolute -bottom-10 -right-10 glass p-6 rounded-xl border border-tertiary/20 z-20">
              <span className="font-label text-tertiary text-xs block mb-2">Statut: Archive 001-ALPHA</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
                <span className="font-body text-on-surface text-sm">Synchronisation Cloud Temps Réel</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline text-5xl text-on-surface mb-8">Conservation Immuable</h2>
            <p className="font-body text-xl text-on-surface-variant mb-10 leading-relaxed">
              Le temps et l'érosion sont les ennemis de l'histoire. Grâce au scan 3D de précision millimétrique, nous créons des jumeaux numériques qui ne vieilliront jamais. Chaque gravure, chaque texture est préservée pour l'éternité dans notre coffre-fort digital.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Microscope className="text-tertiary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-label text-on-surface font-bold">Scanning LiDAR 8K</h4>
                  <p className="font-body text-sm text-slate-500">Capture haute fidélité des reliefs et des pigments originaux.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Cloud className="text-tertiary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-label text-on-surface font-bold">Archivage Décentralisé</h4>
                  <p className="font-body text-sm text-slate-500">Protection des données historiques contre toute perte physique.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Impact Social & Éducation: Cards */}
        <section className="bg-surface-container-low px-8 py-24">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-5xl text-on-surface mb-4"
            >
              Impact Social & Éducation
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-on-surface-variant max-w-2xl mx-auto"
            >
              L'héritage n'est vivant que s'il est partagé. Nous formons la prochaine génération de gardiens du savoir.
            </motion.p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUpVariants} className="bg-background/50 p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-300 border border-outline-variant/10">
              <School className="text-primary w-12 h-12 mb-6" />
              <h3 className="font-headline text-2xl text-on-surface mb-4">Écoles Connectées</h3>
              <p className="font-body text-on-surface-variant">Kits VR déployés dans 200 établissements pour faire voyager les élèves au cœur de la Casbah ou de Timgad sans quitter leur classe.</p>
            </motion.div>
            <motion.div variants={fadeUpVariants} className="bg-background/50 p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-300 border border-outline-variant/10">
              <Lightbulb className="text-primary w-12 h-12 mb-6" />
              <h3 className="font-headline text-2xl text-on-surface mb-4">Savoir-Faire</h3>
              <p className="font-body text-on-surface-variant">Programmes de mentorat entre archéologues seniors et jeunes développeurs de solutions RA locaux.</p>
            </motion.div>
            <motion.div variants={fadeUpVariants} className="bg-background/50 p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-300 border border-outline-variant/10">
              <Headset className="text-primary w-12 h-12 mb-6" />
              <h3 className="font-headline text-2xl text-on-surface mb-4">Guides Locaux</h3>
              <p className="font-body text-on-surface-variant">Formation certifiante aux technologies immersives pour moderniser l'offre touristique territoriale.</p>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ImpactPage;
