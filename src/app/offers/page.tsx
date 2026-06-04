"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { 
  Globe as TravelExplore, CheckCircle, Lock, Verified, 
  ArrowRight as ArrowForward, ChevronDown as ExpandMore, Check, X,
  School, Pen as EditNote, Map, Camera, Ticket, Building2, BarChart, Badge
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const OffersPage = () => {
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
        <section className="relative min-h-[819px] flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, ease: 'easeOut' as any }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                className="object-cover" 
                alt="Prise de vue cinématographique large des dunes du Sahara" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWmkFnD4mxxzq4LySHP81pmQd4lJVPWYieGgYXm80WArezZu78aWkaBkeIyVOhB9rcq_EpY1gKO83qXC4u6PmWBmqe95IQHWtOYnGLMgXcNMGQs2f8WV3cO7o6n8IA3dMFTqYg7UYroSExoi7vjkhj2svjDYrM-dCxhCaBRquakgwVBR6OlkSUZIK1x550UhpR-DjbKD3LaorDlk-z-wpk0jeT-wfYdEpo23VkpmfAnlWe4Ur8btFOlTAO3dDKsOW68yMVgX6UcO8"
                fill
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111416]"></div>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center max-w-4xl mx-auto mt-20"
          >
            <motion.span variants={fadeUpVariants} className="inline-block px-4 py-1 rounded-full border border-tertiary/30 text-tertiary font-label text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
              Patrimoine Phygital 2.0
            </motion.span>
            <motion.h1 variants={fadeUpVariants} className="font-headline text-5xl md:text-8xl text-white mb-8 leading-none tracking-tight">
              Choisissez votre <br/> <span className="italic text-primary">Expérience</span>
            </motion.h1>
            <motion.p variants={fadeUpVariants} className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              De la simple consultation d'archives à l'immersion holographique totale, personnalisez votre voyage à travers les siècles.
            </motion.p>
          </motion.div>
        </section>

        {/* Freemium Comparison Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Free Side */}
            <motion.div variants={fadeUpVariants} className="p-10 rounded-3xl bg-surface-container-low border border-outline-variant/10 relative group">
              <div className="flex items-center gap-3 mb-6">
                <TravelExplore className="text-secondary w-10 h-10" />
                <h3 className="text-3xl font-headline text-on-surface">Gratuit</h3>
              </div>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-tertiary mt-1 w-6 h-6 flex-shrink-0" />
                  <span className="text-on-surface-variant font-light">Informations historiques de base sur 50 sites majeurs.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-tertiary mt-1 w-6 h-6 flex-shrink-0" />
                  <span className="text-on-surface-variant font-light">Carte interactive 2D avec géolocalisation.</span>
                </li>
                <li className="flex items-start gap-4 text-on-surface/30">
                  <Lock className="mt-1 w-6 h-6 flex-shrink-0" />
                  <span className="font-light italic">Reconstructions 3D haute fidélité.</span>
                </li>
              </ul>
              <div className="relative h-48 rounded-2xl overflow-hidden w-full opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image 
                  className="object-cover" 
                  alt="Carte numérique bleue de l'Afrique du Nord" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWNeRiS-B2ZQMLk9qnCt7ORlbWAiX-L0lHuGKWBLp0f9y3B6y82nthu_rjHuhOja_Hs18Pcz5N6J4ZZi1seDHWBIdixAwoHPHSMWGJdmCuci4QYO0XYlQuGcbPRehTiiEl3_MijpG2rypRLRuaKblERrSQYvhgNofn55nP-nxsecNJBhEZT8vwCdDlYUkxgvbXdIvDxVuf3FpAmyJgnNREXWLs3FITYpzJ80kyu6QD2yajzf-h0qO9YGm9VGO44RfZuAxwCGPTHpE"
                  fill
                />
              </div>
            </motion.div>

            {/* Premium Side */}
            <motion.div variants={fadeUpVariants} className="p-10 rounded-3xl bg-surface-container-highest border border-primary/20 relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Verified className="text-primary w-10 h-10 fill-primary text-surface-container-highest" />
                <h3 className="text-3xl font-headline text-white">Premium</h3>
              </div>
              <ul className="space-y-6 mb-10 relative z-10">
                <li className="flex items-start gap-4">
                  <Verified className="text-primary mt-1 w-6 h-6 flex-shrink-0 fill-primary text-surface-container-highest" />
                  <span className="text-on-surface font-medium">Accès complet aux archives 3D & AR (Réalité Augmentée).</span>
                </li>
                <li className="flex items-start gap-4">
                  <Verified className="text-primary mt-1 w-6 h-6 flex-shrink-0 fill-primary text-surface-container-highest" />
                  <span className="text-on-surface font-medium">Guides audio IA immersifs en 5 langues.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Verified className="text-primary mt-1 w-6 h-6 flex-shrink-0 fill-primary text-surface-container-highest" />
                  <span className="text-on-surface font-medium">Scans AR illimités en 8K.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Verified className="text-primary mt-1 w-6 h-6 flex-shrink-0 fill-primary text-surface-container-highest" />
                  <span className="text-on-surface font-medium">Mode hors-ligne pour les sites sahariens reculés.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Verified className="text-primary mt-1 w-6 h-6 flex-shrink-0 fill-primary text-surface-container-highest" />
                  <span className="text-on-surface font-medium">Analyses historiques exclusives générées par l'IA.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Verified className="text-primary mt-1 w-6 h-6 flex-shrink-0 fill-primary text-surface-container-highest" />
                  <span className="text-on-surface font-medium">Accès anticipé aux nouvelles découvertes archéologiques.</span>
                </li>
              </ul>
              <div className="relative rounded-2xl overflow-hidden h-48 w-full z-10">
                <Image 
                  className="object-cover" 
                  alt="Un écran de smartphone montrant une reconstruction 3D" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB33pk0FjsUEkElB373i0LbD8SaOutveVmOasUZCTE_CRgvs26sUCFpIbyqwL70UJ-hfrgUQ4PyiV4Gd0qZ-3mKQTEjCXqSj9jVch0GuJWsi3P6FAbIGn19kNogeE3zajWq7cps8Xv3yeyl4JxpHHtPKN3QyQNtt7Q7U4e1Ld0bfRM7tnr8KG1n_H8ze6v_LqHoI_q8DYxr4Yg6AyKCWPPkQKN36kRmczzRtcaYmQ0hEiFe9ZTKvgV9xZEt3s6TE1JAZ02BbqQDgVQ"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-primary font-label text-xs tracking-widest uppercase">Visualisation AR Temps Réel</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Detailed Comparison Table Section */}
        <section className="py-24 px-6 bg-[#0c0f11]">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-headline text-4xl md:text-5xl text-white mb-6 italic tracking-tight">Analyse Comparative</h2>
              <p className="text-on-surface-variant font-light">Explorez les nuances technologiques de nos services.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="overflow-hidden rounded-3xl border border-outline-variant/10 bg-[#1d2022]/80 backdrop-blur-md shadow-2xl"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-outline-variant/20">
                      <th className="py-8 px-8 text-on-surface-variant font-label text-xs uppercase tracking-[0.2em]">Fonctionnalités</th>
                      <th className="py-8 px-8 text-secondary font-headline text-2xl">Gratuit</th>
                      <th className="py-8 px-8 text-primary font-headline text-2xl bg-primary/5">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
                      <td className="py-6 px-8 font-label text-on-surface-variant">Accès aux archives</td>
                      <td className="py-6 px-8 text-on-surface/60">Base (Données historiques)</td>
                      <td className="py-6 px-8 text-primary font-medium bg-primary/5">3D & AR (Immersion Totale)</td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
                      <td className="py-6 px-8 font-label text-on-surface-variant">Carte interactive</td>
                      <td className="py-6 px-8 text-on-surface/60">2D Standard</td>
                      <td className="py-6 px-8 text-primary font-medium bg-primary/5">3D avec points d'intérêt</td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
                      <td className="py-6 px-8 font-label text-on-surface-variant">Guides audio</td>
                      <td className="py-6 px-8 text-on-surface/60">Standard (Synthèse vocale)</td>
                      <td className="py-6 px-8 text-primary font-medium bg-primary/5">IA Immersifs Multilingues</td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
                      <td className="py-6 px-8 font-label text-on-surface-variant">Mode Hors-ligne</td>
                      <td className="py-6 px-8 text-on-surface/40">
                        <X className="w-5 h-5" />
                      </td>
                      <td className="py-6 px-8 text-primary font-medium bg-primary/5 flex items-center gap-2">
                        <Check className="w-5 h-5" /> Oui
                      </td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
                      <td className="py-6 px-8 font-label text-on-surface-variant">Résolution des Scans</td>
                      <td className="py-6 px-8 text-on-surface/60">Standard</td>
                      <td className="py-6 px-8 text-primary font-medium bg-primary/5">8K Ultra Haute-Définition</td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
                      <td className="py-6 px-8 font-label text-on-surface-variant">Accès anticipé</td>
                      <td className="py-6 px-8 text-on-surface/40">
                        <X className="w-5 h-5" />
                      </td>
                      <td className="py-6 px-8 text-primary font-medium bg-primary/5 flex items-center gap-2">
                        <Check className="w-5 h-5" /> Découvertes exclusives
                      </td>
                    </tr>
                    <tr className="group hover:bg-white/5 transition-colors">
                      <td className="py-6 px-8 font-label text-on-surface-variant">Support technique</td>
                      <td className="py-6 px-8 text-on-surface/60">Standard (Email)</td>
                      <td className="py-6 px-8 text-primary font-medium bg-primary/5 font-bold italic">Prioritaire 24/7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center font-headline text-4xl md:text-5xl text-white mb-20 tracking-tight italic"
            >
              Tarification sur mesure
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Étudiant Card */}
              <motion.div variants={fadeUpVariants} className="flex flex-col p-8 rounded-3xl bg-surface-container-high border border-tertiary/10 hover:border-tertiary/40 transition-all duration-300">
                <div className="mb-8">
                  <span className="text-tertiary font-label text-xs tracking-[0.2em] uppercase">Pack Académique</span>
                  <h4 className="text-2xl font-headline text-white mt-2">Étudiant</h4>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-headline text-white">300 DA</span>
                  <span className="text-on-surface-variant font-label text-sm ml-2">/ mois</span>
                </div>
                <div className="space-y-4 mb-12 flex-grow">
                  <div className="flex gap-3 items-center text-on-surface-variant text-sm">
                    <School className="text-tertiary w-5 h-5" />
                    <span>Accès bibliothèques numériques</span>
                  </div>
                  <div className="flex gap-3 items-center text-on-surface-variant text-sm">
                    <EditNote className="text-tertiary w-5 h-5" />
                    <span>Outils d'annotation pour thèses</span>
                  </div>
                </div>
                <Link href="/contact" className="w-full text-center block py-4 rounded-full border border-tertiary text-tertiary hover:bg-tertiary/10 transition-colors duration-300 font-label tracking-wider uppercase text-sm">
                  Commencer maintenant
                </Link>
              </motion.div>

              {/* Touriste Card (Gold Accent) */}
              <motion.div variants={fadeUpVariants} className="flex flex-col p-8 rounded-3xl bg-surface-container-highest border border-primary/30 relative md:scale-105 z-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-primary text-on-primary text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1 rounded-full">
                  Populaire
                </div>
                <div className="mb-8">
                  <span className="text-primary font-label text-xs tracking-[0.2em] uppercase">Expérience Totale</span>
                  <h4 className="text-2xl font-headline text-white mt-2">Touriste</h4>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-headline text-white">500 DA</span>
                  <span className="text-on-surface-variant font-label text-sm ml-2">/ mois</span>
                </div>
                <div className="space-y-4 mb-12 flex-grow">
                  <div className="flex gap-3 items-center text-on-surface text-sm">
                    <Map className="text-primary w-5 h-5" />
                    <span>Tous les parcours audio AR</span>
                  </div>
                  <div className="flex gap-3 items-center text-on-surface text-sm">
                    <Camera className="text-primary w-5 h-5" />
                    <span>Vues exclusives par drone 360°</span>
                  </div>
                  <div className="flex gap-3 items-center text-on-surface text-sm">
                    <Ticket className="text-primary w-5 h-5" />
                    <span>Réductions billets musées</span>
                  </div>
                </div>
                <Link href="/contact" className="w-full text-center block py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label tracking-wider uppercase text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 duration-200">
                  Commencer maintenant
                </Link>
              </motion.div>

              {/* Agence Card (Dark Gold) */}
              <motion.div variants={fadeUpVariants} className="flex flex-col p-8 rounded-3xl bg-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300">
                <div className="mb-8">
                  <span className="text-[#D4AF37] font-label text-xs tracking-[0.2em] uppercase">Solutions B2B</span>
                  <h4 className="text-2xl font-headline text-white mt-2">Agence</h4>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-headline text-white">2000 DA</span>
                  <span className="text-on-surface-variant font-label text-sm ml-2">/ mois</span>
                </div>
                <div className="space-y-4 mb-12 flex-grow">
                  <div className="flex gap-3 items-center text-on-surface-variant text-sm">
                    <Building2 className="text-[#D4AF37] w-5 h-5" />
                    <span>Licences pour 10 guides</span>
                  </div>
                  <div className="flex gap-3 items-center text-on-surface-variant text-sm">
                    <BarChart className="text-[#D4AF37] w-5 h-5" />
                    <span>Tableau de bord de flux touristique</span>
                  </div>
                  <div className="flex gap-3 items-center text-on-surface-variant text-sm">
                    <Badge className="text-[#D4AF37] w-5 h-5" />
                    <span>Contenu en marque blanche</span>
                  </div>
                </div>
                <Link href="/contact" className="w-full text-center block py-4 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300 font-label tracking-wider uppercase text-sm">
                  Commencer maintenant
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter / Pre-Footer */}
        <section className="py-24 px-6 border-t border-outline-variant/10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center border border-white/5"
          >
            <h3 className="font-headline text-3xl text-white mb-4">Besoin d'un devis personnalisé ?</h3>
            <p className="text-on-surface-variant mb-8 font-light max-w-xl mx-auto">Pour les institutions publiques et les grands groupes hôteliers, nous proposons des intégrations sur mesure.</p>
            <a className="inline-flex items-center gap-2 text-tertiary font-label tracking-widest uppercase text-sm hover:gap-4 transition-all" href="#">
              Contacter notre équipe Patrimoine
              <ArrowForward className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-[#0c0f11]">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-headline text-4xl text-white italic mb-4">Questions Fréquentes</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {[
                {
                  q: "Comment puis-je accéder aux modèles 3D ?",
                  a: "Une fois abonné au plan Premium, les modèles se chargent automatiquement lorsque vous pointez votre caméra vers un site compatible via l'application."
                },
                {
                  q: "L'application fonctionne-t-elle sans connexion internet ?",
                  a: "Oui, le mode Premium permet de télécharger les données des sites à l'avance pour une utilisation en plein désert ou dans des zones sans couverture réseau."
                },
                {
                  q: "Quels sont les modes de paiement acceptés ?",
                  a: "Nous acceptons la carte CIB, la carte Dahabia ainsi que le paiement par virement bancaire pour les agences et les institutions."
                },
                {
                  q: "Puis-je annuler mon abonnement à tout moment ?",
                  a: "Absolument. Votre accès restera actif jusqu'à la fin de la période de facturation en cours. Il n'y a aucun engagement de durée."
                },
                {
                  q: "Comment garantissez-vous l'exactitude historique des modèles 3D ?",
                  a: "Nous travaillons directement avec le Ministère de la Culture et utilisons la photogrammétrie de haute précision combinée aux archives archéologiques officielles."
                },
                {
                  q: "Puis-je utiliser l'application sur n'importe quel smartphone ?",
                  a: "La plupart des smartphones modernes dotés de capacités AR (iOS avec ARKit et Android avec ARCore) sont compatibles avec nos services immersifs."
                },
                {
                  q: "Les modèles 3D sont-ils disponibles pour un usage commercial ?",
                  a: "Les licences commerciales sont disponibles exclusivement dans le plan 'Agence'. Veuillez nous contacter pour des besoins spécifiques en production de contenu."
                },
                {
                  q: "Existe-t-il des réductions pour les établissements d'enseignement ?",
                  a: "Oui, nous proposons des tarifs de groupe préférentiels pour les écoles, les universités et les centres de recherche via notre département académique."
                }
              ].map((faq, i) => (
                <motion.details 
                  key={i} 
                  variants={fadeUpVariants} 
                  className="group bg-surface-container-low rounded-2xl border border-outline-variant/10 transition-all duration-300"
                >
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-label text-on-surface group-open:text-primary transition-colors">{faq.q}</span>
                    <ExpandMore className="text-primary w-6 h-6 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-6 text-on-surface-variant font-light text-sm leading-relaxed border-t border-outline-variant/5 pt-4">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OffersPage;
