"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Landmark, ShieldCheck, Network } from 'lucide-react';

const PartnersPage = () => {
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
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, ease: 'easeOut' as any }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                className="object-cover" 
                alt="Tassili n'Ajjer paysages" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdJvikTiaMITIkjyNc59IjY7EQUYdL5q1M9htbVCaCL8ICftmjPS_eFxoCnnaygK0uO9NgAQ9VatH3E_wJl5-bs6YdHRxQBIXfhVS0ZPezkpxW_uR2TFCaJT5NQmFflBhmVJ6VMyAZkfuhZEYV27pjRDH3V2U24JQapPqQ3aNztKSpawGGodipD2deJ4w-Dq-j0fSpIux8JuCASdQQxl5YbbpyhJig3R_UqGTAUmkzbeYx8tKRo6v1Q85cNlKMCT8zWeimf4oD8Q"
                fill
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-4 max-w-5xl"
          >
            <motion.span variants={fadeUpVariants} className="inline-block px-4 py-1 rounded-full bg-secondary-container/50 text-tertiary text-[10px] tracking-widest uppercase mb-6 backdrop-blur-sm border border-tertiary/20">
              Écosystème de Partenariat
            </motion.span>
            <motion.h1 variants={fadeUpVariants} className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-4">
              Nos Partenaires de la Renaissance
            </motion.h1>
            <motion.p variants={fadeUpVariants} className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed">
              Unissant le patrimoine millénaire et la technologie phygitale pour préserver l'histoire de l'Algérie.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <a className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-bold text-sm tracking-wide shadow-xl hover:scale-105 transition-transform" href="#join">
                Explorer le Réseau
              </a>
              <a className="px-8 py-4 glass border border-outline-variant/30 text-on-surface rounded-full font-bold text-sm tracking-wide hover:bg-surface-variant/40 transition-colors" href="#institutions">
                Gardiens Institutionnels
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Institutions Section */}
        <section className="py-32 px-8 lg:px-20 bg-surface" id="institutions">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
            >
              <motion.div variants={fadeUpVariants}>
                <h2 className="font-headline text-4xl font-bold text-primary mb-2">Gardiens Institutionnels</h2>
                <h3 className="font-serif text-2xl text-tertiary italic">Appui Stratégique & Réglementaire</h3>
              </motion.div>
              <div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
              <motion.span variants={fadeUpVariants} className="text-on-surface-variant/60 uppercase tracking-widest text-xs">Alignement Stratégique</motion.span>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {/* Card 1 */}
              <motion.div variants={fadeUpVariants} className="group relative bg-surface-container-low rounded-xl p-8 transition-all hover:translate-y-[-8px]">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                  <ShieldCheck className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-lg bg-surface-container-highest flex items-center justify-center border border-primary/20">
                      <Landmark className="text-primary w-8 h-8" />
                    </div>
                    <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] rounded-full font-bold tracking-widest">MINISTÈRE</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Ministère de la Culture et des Arts</h4>
                  <p className="text-on-surface-variant leading-relaxed mb-6">Tutelle stratégique assurant la conformité et la protection du patrimoine national. Ils fournissent le cadre légal indispensable à l'expansion numérique et à l'exploitation des sites.</p>
                  <div className="flex items-center gap-2 text-tertiary text-sm font-bold cursor-pointer hover:underline">
                    Consulter le protocole <span className="text-sm">→</span>
                  </div>
                </div>
              </motion.div>
              {/* Card 2 */}
              <motion.div variants={fadeUpVariants} className="group relative bg-surface-container-low rounded-xl p-8 transition-all hover:translate-y-[-8px]">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Landmark className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-lg bg-surface-container-highest flex items-center justify-center border border-primary/20">
                      <Landmark className="text-primary w-8 h-8" />
                    </div>
                    <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] rounded-full font-bold tracking-widest">OFFICE</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">OGEBC</h4>
                  <p className="text-on-surface-variant leading-relaxed mb-6">Partenaire opérationnel pour l'accès aux sites archéologiques et la gestion des flux de visiteurs. L'OGEBC collabore étroitement sur l'intégration de la réalité augmentée in situ.</p>
                  <div className="flex items-center gap-2 text-tertiary text-sm font-bold cursor-pointer hover:underline">
                    Coordination des sites <span className="text-sm">→</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Local Ecosystem Section */}
        <section className="py-32 px-8 lg:px-20 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-2">Écosystème Local</h2>
              <h3 className="font-serif text-2xl text-primary italic">Acteurs de la Valorisation Territoriale</h3>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[600px]"
            >
              {/* Bento Item 1: Hotels */}
              <motion.div variants={fadeUpVariants} className="md:col-span-7 relative rounded-xl overflow-hidden group min-h-[300px]">
                <Image 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Hôtellerie de luxe" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm4WZnsEdCfpsMXSYcmfsaxGPc102VuTJWJnRLDYMoveLEEsxvnQEV0M1gT5dISGG51uPf3--p--Y6uBX7uzV04NJuHL56V4xgOr5WQes3WODipoadb6Sa9M6-Y6tcYTmdA4y6Y0jMzt-ixkYQynQB97zsSRHNl78WXjBr_hi9MWgx9trIl-JkZp6qV9ZKDHZPqInIvh3ZTPaTQ15TC9KfH4UMAvDrNSYaZe39l3inVhvHCT6nzflEpJwEa4G6QuBUsU1bDRCGWd0"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="text-tertiary font-bold tracking-widest text-[10px] uppercase mb-2 block">Excellence Hospitalière</span>
                  <h4 className="text-3xl font-bold text-on-surface mb-4">Hôtels de Prestige</h4>
                  <p className="text-on-surface-variant max-w-md">L'hospitalité saharienne sublimée. Des établissements d'exception au cœur des oasis pour accueillir nos voyageurs du temps dans un confort absolu.</p>
                </div>
              </motion.div>
              {/* Bento Item 2: Gastronomy */}
              <motion.div variants={fadeUpVariants} className="md:col-span-5 relative rounded-xl overflow-hidden group min-h-[300px]">
                <Image 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Gastronomie algérienne" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJmv98yYMGh4-Brlo8_P7robq9SCewNIwVcShTo3l31-kIRB96GR_E4svWiIgkQ-byViKB2BsIsffYfoa8uEazLcBAEkzweJ_0wKg9vBWN7HUAdMn7MOZmJYdYg1_L1qk3opb_mrY7XfjY76cWtDcjbVjrgCqhbMecaalFejtA8_rYGO8Y8_BIRUF2lVVQuDGlLKfFB1SLWmPbSius16UobQdQtw9d9iAEsoy0kegsDQGvg3lf3m35yF7OsQCMYqwBhCA75gUAahA"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="text-tertiary font-bold tracking-widest text-[10px] uppercase mb-2 block">Saveurs Authentiques</span>
                  <h4 className="text-2xl font-bold text-on-surface mb-2">Gastronomie Authentique</h4>
                  <p className="text-on-surface-variant">L'art culinaire ancestral revisité. Une expérience sensorielle qui complète l'immersion historique par les saveurs du terroir.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-32 px-8 lg:px-20 bg-surface" id="join">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto glass rounded-xl border border-outline-variant/20 p-12 relative overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold text-primary mb-2">Devenir Partenaire</h2>
                <h3 className="font-serif text-2xl text-on-surface/80 italic">Rejoignez l'Aventure</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mt-6"></div>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold px-1">Nom</label>
                  <input 
                    className="bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 focus:border-tertiary focus:ring-0 text-on-surface placeholder:text-gray-600 transition-colors" 
                    placeholder="Votre nom complet" 
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold px-1">E-mail</label>
                  <input 
                    className="bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 focus:border-tertiary focus:ring-0 text-on-surface placeholder:text-gray-600 transition-colors" 
                    placeholder="contact@exemple.com" 
                    type="email"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold px-1">Organisation</label>
                  <input 
                    className="bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 focus:border-tertiary focus:ring-0 text-on-surface placeholder:text-gray-600 transition-colors" 
                    placeholder="Nom de votre entreprise ou institution" 
                    type="text"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold px-1">Message</label>
                  <textarea 
                    className="bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 focus:border-tertiary focus:ring-0 text-on-surface placeholder:text-gray-600 transition-colors" 
                    placeholder="Détaillez votre vision du partenariat..." 
                    rows={4}
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center mt-4">
                  <button className="px-12 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl" type="button">
                    Rejoindre le Réseau
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-8 text-center bg-gradient-to-b from-surface to-surface-container-low">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-5xl font-bold text-on-surface mb-8">Rejoignez le réseau Chronos</h2>
            <div className="flex justify-center gap-4 items-center">
              <Network className="text-tertiary w-10 h-10 animate-pulse" />
              <p className="text-tertiary font-serif text-2xl italic">Bâtissons ensemble le futur du passé</p>
              <Network className="text-tertiary w-10 h-10 animate-pulse" />
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PartnersPage;
