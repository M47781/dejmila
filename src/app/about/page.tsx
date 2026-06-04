"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Landmark, School, Cpu } from 'lucide-react';

const AboutPage = () => {
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
        {/* Hero Section: Mood Board Style */}
        <header className="relative min-h-[819px] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, ease: 'easeOut' as any }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                className="object-cover" 
                alt="Cinematic mood board overlaying ancient Algerian Roman ruins" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVpOw6gLPC4b1GW0tnuxjOaBEOuBN_DAXvBMhGx6VIojflWuFzf5nLMA5GKuZEbRW3cEviuSvJ7xCH2f-0mfFnA1eRpiyWHM1rCjevDJAh-x1zx0bWD59Px6VODe2LjZindKijk-S59uYkwPH7S_1CkBHdRJLyO8B8Thffp1EG1hQM4J8ToNmF6mfBBZIbXaqGaAvICInER3jYwFwbOORpf7VlywGSB8dQghKyEMljvXhdEKyf9qk2mKtVoO_8QXic8utd2H7OzbI"
                fill
                priority
              />
            </motion.div>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-6 relative z-20"
          >
            <div className="max-w-4xl">
              <motion.span variants={fadeUpVariants} className="font-label text-tertiary tracking-[0.3em] uppercase text-sm mb-4 block">
                Notre Essence
              </motion.span>
              <motion.h1 variants={fadeUpVariants} className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                Chronos <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">Algeria</span>
              </motion.h1>
              <motion.p variants={fadeUpVariants} className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
                Là où le grès millénaire du Tassili rencontre le souffle éthéré du futur holographique. Nous excavons l'histoire pour la projeter dans l'éternité numérique.
              </motion.p>
            </div>
          </motion.div>
        </header>

        {/* Notre Histoire: Timeline Section */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <h2 className="font-headline text-5xl font-bold mb-4">Notre Histoire</h2>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
              {/* Vertical line for desktop timeline */}
              <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-outline-variant/30 transform -translate-x-1/2"></div>
              
              {/* Timeline Item 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-0 md:text-right md:pr-16"
              >
                <div className="absolute right-[-11px] top-2 hidden md:block w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(252,197,113,0.5)] z-10"></div>
                <div className="absolute left-0 top-2 md:hidden w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(252,197,113,0.5)] z-10"></div>
                {/* Mobile line */}
                <div className="md:hidden absolute left-[9px] top-10 bottom-[-4rem] w-[2px] bg-outline-variant/30"></div>
                
                <span className="font-label text-tertiary text-lg font-bold">2021 — Genèse</span>
                <h3 className="font-headline text-3xl my-4 text-primary">L'Étincelle du Sahara</h3>
                <p className="text-on-surface-variant text-lg">Une expédition archéologique dans le Hoggar révèle l'urgence de préserver numériquement des gravures rupestres menacées par l'érosion. L'idée de Chronos est née.</p>
              </motion.div>
              <div className="hidden md:block"></div>

              <div className="hidden md:block"></div>
              {/* Timeline Item 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-[-11px] top-2 hidden md:block w-5 h-5 rounded-full bg-tertiary shadow-[0_0_15px_rgba(61,228,231,0.5)] z-10"></div>
                <div className="absolute left-0 top-2 md:hidden w-5 h-5 rounded-full bg-tertiary shadow-[0_0_15px_rgba(61,228,231,0.5)] z-10"></div>
                {/* Mobile line */}
                <div className="md:hidden absolute left-[9px] top-10 bottom-[-4rem] w-[2px] bg-outline-variant/30"></div>
                
                <span className="font-label text-tertiary text-lg font-bold">2022 — Développement</span>
                <h3 className="font-headline text-3xl my-4 text-primary">Fusion Technologique</h3>
                <p className="text-on-surface-variant text-lg">Collaboration entre historiens algériens et ingénieurs en vision par ordinateur pour créer le premier moteur de rendu "Phygital" capable de simuler la texture du grès en AR.</p>
              </motion.div>

              {/* Timeline Item 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-0 md:text-right md:pr-16"
              >
                <div className="absolute right-[-11px] top-2 hidden md:block w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(252,197,113,0.5)] z-10"></div>
                <div className="absolute left-0 top-2 md:hidden w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(252,197,113,0.5)] z-10"></div>
                
                <span className="font-label text-tertiary text-lg font-bold">2024 — Réalisation</span>
                <h3 className="font-headline text-3xl my-4 text-primary">Le Monument Digital</h3>
                <p className="text-on-surface-variant text-lg">Lancement de la plateforme "Le Patrimoine Phygital", offrant une immersion totale dans les sites classés de l'UNESCO, accessible au monde entier.</p>
              </motion.div>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </section>

        {/* Vision & Valeurs: Glass Cards Bento Grid */}
        <section className="py-32 bg-surface-container-low">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-5xl font-bold mb-16 max-w-xl"
            >
              Une vision ancrée dans le temps, un regard vers demain.
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Pillar 1 */}
              <motion.div variants={fadeUpVariants} className="glass p-10 rounded-xl border border-outline-variant/15 flex flex-col gap-6 group hover:translate-y-[-8px] transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <Landmark className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-3xl font-bold">Patrimoine</h3>
                <p className="text-on-surface-variant leading-relaxed">Nous ne nous contentons pas de scanner ; nous archivons l'âme des lieux. Chaque grain de sable numérique respecte l'intégrité historique et culturelle de l'Algérie.</p>
              </motion.div>
              {/* Pillar 2 */}
              <motion.div variants={fadeUpVariants} className="glass p-10 rounded-xl border border-outline-variant/15 flex flex-col gap-6 group hover:translate-y-[-8px] transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <School className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-3xl font-bold">Éducation</h3>
                <p className="text-on-surface-variant leading-relaxed">Rendre l'invisible visible pour les nouvelles générations. Notre outil devient un manuel d'histoire vivant, interactif et universellement accessible.</p>
              </motion.div>
              {/* Pillar 3 */}
              <motion.div variants={fadeUpVariants} className="glass p-10 rounded-xl border border-outline-variant/15 flex flex-col gap-6 group hover:translate-y-[-8px] transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary-fixed-dim">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-3xl font-bold">Technologie</h3>
                <p className="text-on-surface-variant leading-relaxed">L'IA et la photogrammétrie de pointe au service de l'émotion. Nous repoussons les limites du possible pour créer une immersion sensorielle totale.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* L'Équipe: Modern Grid */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <motion.div variants={fadeUpVariants} className="max-w-2xl">
                  <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">Les Archéologues du Futur</span>
                  <h2 className="font-headline text-5xl font-bold">Rencontrez les esprits derrière le projet</h2>
                </motion.div>
                <motion.p variants={fadeUpVariants} className="text-on-surface-variant font-body max-w-sm">Une équipe pluridisciplinaire unie par la passion de l'Algérie et l'excellence technologique.</motion.p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  {
                    name: "Amine Mansouri",
                    role: "Fondateur & CEO",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Lf-MxwBdlySivfokiG0u0pkPtHFix5RaRhWnzUrwfr0YiS9t8KLn66MJqdhmoh02y3HDnp-K-mmo4CeZ_HtiAxvaTujFcTO1njVmVLhXSS00DufLUv7cBEqHSky-rtPyHi48uIq9H2Vpqy2AD-7POTkWSVfIHjpwQJQJE8nNV9CpmYGLPMIrcWqoDGY8Ojus9d9dtueXtCx7D2LQhYiy2Iyy2ld_5HM7crf7NZkrQ8_vCayKTib1urDftSTj0z7ae7nPmvtmGZU",
                    color: "bg-primary/20",
                    hoverColor: "group-hover:bg-primary/40"
                  },
                  {
                    name: "Lina Kassimi",
                    role: "Lead Design UX/UI",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyuEjZv8pVJ4kpddCfNnUMtkfqklccQi1kKjfvRfAa8a570BSW6Qo2vitx-nskYc6hkn4XzRLXxc5uBxyKBrjWaZcvOxd2F-8Nf0UL9pTbowoE_07qTz1MT_tt4Hux21qG_LYugyETE2BiGEpkWpTf-wbZBn1Qs8gL2o02AAgfZCIFGxN7HQerteOhGnPNuTzk05obwrg3qKHQShb5FXReLehotxBV9bjf2EJ8GyfpDLJz1fNmaauxXbyXC-BB2xfRkhIHd5f7pX8",
                    color: "bg-tertiary/20",
                    hoverColor: "group-hover:bg-tertiary/40"
                  },
                  {
                    name: "Yanis Belkaid",
                    role: "Lead Développeur",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT4YWaLyu2DsIYwHmiUdJ-nvlmusg8af2ViWQPxbbjgT3Giso5QYQBwHgmiPP-jqiioxgM0BjTqCCNFEwozX1NiaWJDlOMUNW0rrrVlsPIJDArkBprq0ObuVZu6a_BPvJ09KUdEknqrf4Swcz5joLfYJFAGMktzs8_rdWTGqOfrdRBtCjPht6UFRyhkilSj00hSuK13IitPGqdQd7tLMYswrOrnfOztXrbbADLyYY3wgUgHjPP-q7s8m8Bc5F0EgTL-5-Nnt0Q55k",
                    color: "bg-primary/20",
                    hoverColor: "group-hover:bg-primary/40"
                  },
                  {
                    name: "Sofia Haddad",
                    role: "Marketing & Stratégie",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0npc3-DFMMokSeMiuu34qvU9iuksJrzdeCYutWNCIno8YS7z-xgQRaRcTH6jtplHzWTPqS3if2rj256tUmWte5ofbqNekIIk9rEcQjyrkhoRxbCBCi7_4KnGcYDWA0eGwZYnmFlbLMvYUDr8uf3fpcdwJVJOQQQHn1UiVR9JyJa6hqlTwKGYFn9-otFqsawnKvG1mOImlN87Dquab0T2nWi_imn7sGTbd6XE_B0efckQYh2dxrZfcu2GiIvTThceP4BviYcI-6Xo",
                    color: "bg-tertiary/20",
                    hoverColor: "group-hover:bg-tertiary/40"
                  }
                ].map((member, i) => (
                  <motion.div key={i} variants={fadeUpVariants} className="text-center group">
                    <div className="relative mb-6 inline-block w-48 h-48">
                      <div className={`absolute inset-0 ${member.color} rounded-full blur-2xl ${member.hoverColor} transition-colors z-0`}></div>
                      <Image 
                        className="rounded-full object-cover relative z-10 border-2 border-outline-variant/30 grayscale hover:grayscale-0 transition-all duration-500" 
                        alt={`Portrait of ${member.name}`} 
                        src={member.img}
                        fill
                      />
                    </div>
                    <h4 className="font-headline text-2xl font-bold">{member.name}</h4>
                    <p className="font-label text-tertiary text-sm uppercase tracking-tighter">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              className="object-cover opacity-30" 
              alt="Abstract macro shot of Algerian desert sand dunes at night" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlEr2c2L5le1FMnmnu0Dp__Uy9Hztgne0mYnlLzMUl6QZvuM9vrELJt17GSvl6x2F7w7QVuTrq_YAD_92WDOjuAmbz7pRus5REJ_gkDDq02CsCZhS5uxjsZzEq6XbLk3PZKebIgWAvC7X206wGVo_UgNdeCFS95PE2J8YOz37A9rt4CD7YkU4Fd59J0zJtiuLgsuunXYOfkKAtIKh-IOc9ekE0IlCOpC9JkUxYM6oKvTnjYaGI86CcamG5y_JaLUqkJ8kOPsgGpxY"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="font-headline text-6xl font-bold mb-8 leading-tight">
                Prêt à réécrire <br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container italic">l'expérience de l'histoire ?</span>
              </h2>
              <p className="font-body text-xl text-on-surface-variant mb-12 max-w-xl">Devenez un gardien du patrimoine numérique ou collaborez sur nos prochaines expéditions.</p>
              <div className="flex flex-wrap gap-6">
                <a className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-4 rounded-full font-label font-bold text-lg hover:shadow-[0_0_30px_rgba(252,197,113,0.3)] transition-all" href="#">
                  Rejoignez l'aventure
                </a>
                <a className="border border-tertiary/40 text-tertiary px-10 py-4 rounded-full font-label font-bold text-lg hover:bg-tertiary/10 transition-all backdrop-blur-sm" href="#">
                  Contactez-nous
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
