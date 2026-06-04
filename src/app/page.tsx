"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { History, Cuboid, Map, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
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
        <section className="relative min-h-[921px] flex items-center overflow-hidden px-8 md:px-20">
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, ease: 'easeOut' as any }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                alt="Ruines antiques du Tassili n'Ajjer fusionnées avec des interfaces holographiques" 
                className="object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQt6Ad_CsNiwBBt04kiUoQlCi7I9-blmMo0QeasSw4HwR2uYt7rsrxc53U7t9EApNhbl_3IAZwc-7iP-Mzp_FB8QXLwAOxHdfoPAcyj2qrhIkrvQRAQS7Ut5g9xS5-VevGN636w1XYfuF3hY5W2DgV2_DxY4tvMz_i-8bRWcUCXY0GsFz7rQy0QSoH1Dyqc6CvC0l6K8zBRTrVXsvSzgIvsX5ZlhIEahfMraTkIyHZzd28Zwg14jI69SPA1MdSziQ9BTPHRLtg5oM"
                fill
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-4xl"
          >
            <motion.span variants={fadeUpVariants} className="font-label text-tertiary tracking-[0.3em] uppercase text-sm mb-4 block text-shadow-sm shadow-tertiary/30">Chronos Algeria</motion.span>
            <motion.h1 variants={fadeUpVariants} className="font-headline text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-8 italic">
              The Future of <br/>
              <span className="text-primary">the Past.</span>
            </motion.h1>
            <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-6 mt-12">
              <Link href="/experience" className="inline-block text-center bg-gradient-to-br from-primary to-primary-container text-on-primary font-label px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                Découvrir l’expérience
              </Link>
              <Link href="/offers" className="inline-block text-center border border-outline-variant/30 bg-surface-container-low/50 backdrop-blur-md text-on-surface font-label px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-colors">
                Télécharger l’application
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Presentation Section (The Time Machine) */}
        <section className="py-32 px-8 md:px-20 bg-surface-container-lowest overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"
          >
            <motion.div variants={fadeUpVariants} className="relative order-2 md:order-1">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-surface-dim relative group">
                <Image 
                  alt="Une main tenant un smartphone affichant une vue RA de l'antique Djemila" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEXgmeNDVL3jPT4mdxGVHuJ9N-kiH1thzZeu_2o_4Fl4eHClFdlGb-nnf5yZBsDWFcTzpRZdrmj0gYuCaAWZtWkWE1e3gVss43QjBZBIFW36RofqDt3xF1Fn0PKqrM6I8zkntH9CrKmSghsXVWOwRJ16wrHQQG33X4vtrPfGTSq1jBVqgReh6yAM0HPmgll215zi2KzI2k2Q1viDT5t1M8auEm8hk_E-Acacjbq2ihiEYar63jzvRrMnkVqgdGqTvNwGOe7zxGbc"
                  fill
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-surface-variant/40 backdrop-blur-xl rounded-xl p-6 border border-outline-variant/15 hidden md:flex flex-col justify-center glass">
                <History className="text-tertiary w-10 h-10 mb-4" />
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Explorez des millénaires d'histoire à travers une interface conçue pour l'immersion totale.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariants} className="order-1 md:order-2">
              <h2 className="font-headline text-5xl font-bold mb-8 leading-tight">
                Transformez votre téléphone en <span className="italic text-primary">machine à remonter le temps.</span>
              </h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
                Chronos Algeria fusionne la précision archéologique et l'innovation numérique pour ressusciter les cités disparues du Sahara et des côtes méditerranéennes. Ne vous contentez plus de regarder l'histoire ; vivez-la.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-4xl font-headline font-bold text-primary mb-2">50+</span>
                  <span className="font-label text-xs uppercase tracking-widest text-slate-500">Sites Répertoriés</span>
                </div>
                <div>
                  <span className="block text-4xl font-headline font-bold text-tertiary mb-2">4K</span>
                  <span className="font-label text-xs uppercase tracking-widest text-slate-500">Rendus Holographiques</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Highlights Section (Bento Grid) */}
        <section className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="font-headline text-4xl font-bold mb-4">Une immersion sans précédent</h2>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">Chaque fonctionnalité est un portail vers une époque révolue, magnifiée par la puissance du phygital.</p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]"
          >
            {/* Expérience AR */}
            <motion.div variants={fadeUpVariants} className="md:col-span-8 bg-surface-container-low rounded-xl p-8 relative overflow-hidden flex flex-col justify-end group cursor-pointer hover:bg-surface-container-high transition-colors">
              <div className="absolute top-0 right-0 p-8">
                <Cuboid className="w-12 h-12 text-tertiary/20 group-hover:text-tertiary transition-colors duration-500" />
              </div>
              <h3 className="font-headline text-3xl font-bold mb-2">Expérience AR</h3>
              <p className="font-body text-on-surface-variant max-w-md">Superposez le passé au présent en temps réel lors de vos visites sur site.</p>
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
            
            {/* Reconstruction 3D */}
            <motion.div variants={fadeUpVariants} className="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between border border-outline-variant/5 group cursor-pointer hover:border-primary/30 transition-colors">
              <Cuboid className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-headline text-2xl font-bold mb-2">Reconstruction 3D</h3>
                <p className="font-body text-sm text-on-surface-variant">Modèles haute fidélité basés sur des recherches universitaires.</p>
              </div>
            </motion.div>
            
            {/* Carte Interactive */}
            <motion.div variants={fadeUpVariants} className="md:col-span-5 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between border border-outline-variant/5 group cursor-pointer hover:border-tertiary/30 transition-colors">
              <Map className="w-10 h-10 text-tertiary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-headline text-2xl font-bold mb-2">Carte interactive</h3>
                <p className="font-body text-sm text-on-surface-variant">Naviguez à travers l'Algérie antique via une cartographie temporelle.</p>
              </div>
            </motion.div>
            
            {/* Gamification */}
            <motion.div variants={fadeUpVariants} className="md:col-span-7 bg-surface-container-low rounded-xl p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer hover:bg-surface-container-high transition-colors">
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Gamepad2 className="w-[120px] h-[120px]" />
              </div>
              <h3 className="font-headline text-3xl font-bold mb-2">Gamification</h3>
              <p className="font-body text-on-surface-variant max-w-xs">Collectionnez des artefacts numériques et débloquez des secrets historiques.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Partners Section */}
        <section className="py-20 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <p className="font-label text-center text-xs uppercase tracking-[0.4em] text-slate-500 mb-12">Nos Partenaires Institutionnels</p>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-32 bg-on-surface/10 rounded flex items-center justify-center font-label text-[10px] text-center px-4">Ministère de la Culture</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-32 bg-on-surface/10 rounded flex items-center justify-center font-label text-[10px] text-center px-4">OGEBC</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-32 bg-on-surface/10 rounded flex items-center justify-center font-label text-[10px] text-center px-4">Patrimoine UNESCO</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-32 bg-on-surface/10 rounded flex items-center justify-center font-label text-[10px] text-center px-4">Office du Tourisme Algérien</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
