"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AtSign, MapPin, Wifi as Sensors, Share2, Camera as Instagram, MessageCircle as Twitter, Play as Youtube } from 'lucide-react';

const ContactPage = () => {
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
      
      <main className="flex-grow pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative px-12 mb-24 overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16"
          >
            <motion.div variants={fadeUpVariants} className="flex-1 z-10">
              <h1 className="font-headline text-6xl md:text-8xl leading-tight tracking-tight mb-8">
                Contactez les <br/>
                <span className="text-primary italic">Archéologues</span> <br/>
                du Futur
              </h1>
              <p className="text-secondary font-light text-xl max-w-xl leading-relaxed">
                Que vous soyez un chercheur de vérité, un technicien du métavers ou un gardien de l'histoire, nos canaux neuraux sont ouverts.
              </p>
            </motion.div>
            <motion.div variants={fadeUpVariants} className="flex-1 relative w-full">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
              <div className="relative w-full aspect-square glass rounded-xl overflow-hidden border border-outline-variant/15">
                <Image 
                  className="object-cover opacity-60" 
                  alt="Abstract 3D holographic wireframe of a North African ancient structure" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOBYpukcoEI46-ae-CbLR-Ec2u4dCzmZ6sNe4ma3nAMKGSpt0iC5QKapTO9ZJOdylgdEQCt5WUMNDZ88o-sVwuHxOSnmhr_IfnZEjoOtkd0z_XMZZZn6C_9TvkSLJ_iBpdBITp3Bo9nxTGcZafgWSV_VqhYSvl1hv-jqTeBgOP6HlrgzS5WBWMEYTkkn45xBx8UYEgEWzVODih7A1muN5Rqwil7WK3Qx2dVSlzcWvd64R5ro1ZonaYnGKKi6cs_uPKjZpSJpKOW9k"
                  fill
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact & Map Bento */}
        <section className="px-12 mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Contact Form Card */}
            <motion.div variants={fadeUpVariants} className="lg:col-span-7 bg-surface-container-low rounded-xl p-10 relative border border-outline-variant/15">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <AtSign className="w-32 h-32" />
              </div>
              <h2 className="font-headline text-3xl text-primary mb-10 italic">Initialiser la Transmission</h2>
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-xs tracking-widest uppercase text-tertiary">Identité / Nom</label>
                    <input 
                      className="bg-transparent border-b-2 border-primary/50 border-t-0 border-x-0 focus:ring-0 focus:border-tertiary transition-colors text-on-surface placeholder:text-on-surface-variant/40 py-4 px-0 w-full" 
                      placeholder="Dr. Elias Kassad" 
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-xs tracking-widest uppercase text-tertiary">Canal / Email</label>
                    <input 
                      className="bg-transparent border-b-2 border-primary/50 border-t-0 border-x-0 focus:ring-0 focus:border-tertiary transition-colors text-on-surface placeholder:text-on-surface-variant/40 py-4 px-0 w-full" 
                      placeholder="elias@chronos.dz" 
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label text-xs tracking-widest uppercase text-tertiary">Données / Message</label>
                  <textarea 
                    className="bg-transparent border-b-2 border-primary/50 border-t-0 border-x-0 focus:ring-0 focus:border-tertiary transition-colors text-on-surface placeholder:text-on-surface-variant/40 py-4 px-0 w-full resize-none" 
                    placeholder="Décrivez votre requête archéologique..." 
                    rows={4}
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button className="group flex items-center gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-bold transition-all hover:gap-6" type="button">
                    ENVOYER LE SIGNAL
                    <Sensors className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Headquarters / Map Card */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Map Container */}
              <motion.div variants={fadeUpVariants} className="flex-1 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/15 relative min-h-[300px]">
                <div className="absolute inset-0 z-0">
                  <Image 
                    className="object-cover grayscale brightness-50 contrast-125" 
                    alt="Dark stylized satellite map of Algiers" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA78J0xBZIhTtDrR-Y1dE4NI8Iqvmo9eWvDSRv6g4QZAAEMlFssAi3MYoIFi9nUyKqc2FpM_04BzRbRd4HZ4JrbejRyOwjvbd4XC0ylQkD3gBTfoT81JA9qkLUOW9jzdxpJF1jjqiD9Y_NFSnGktpFFV2SoWTj_8jOvYU6Qs-mYS11Fdkf0yHGUxNGrsKbg_wC_PbBy31VcI2W2hkFRwk-PXIZxVES2QziuGsnvEhmGZKSHNxr8fONq48olAbTN4TCNhu1QrBB5XjM"
                    fill
                  />
                </div>
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
                {/* Map Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-surface-container-highest/80 backdrop-blur-md p-4 rounded-xl border border-outline-variant/15">
                      <span className="font-label text-[10px] tracking-[0.2em] text-tertiary uppercase block mb-1">Localisation Centrale</span>
                      <h3 className="font-headline text-xl">Quartier des Affaires</h3>
                      <p className="text-on-surface-variant text-sm">Bab Ezzouar, Alger</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse">
                      <MapPin className="text-on-primary w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="font-label text-tertiary text-lg font-bold tracking-tighter bg-background/60 p-4 rounded-lg inline-block border border-tertiary/20">
                      36.7538° N, 3.0588° E
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links Card */}
              <motion.div variants={fadeUpVariants} className="bg-surface-container-high rounded-xl p-8 border border-outline-variant/15">
                <h4 className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-6 text-center">Réseaux de Transmission</h4>
                <div className="flex justify-around items-center">
                  <a className="group" href="#">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center glass border border-outline-variant/15 group-hover:border-primary transition-all group-hover:-translate-y-1">
                      <Instagram className="text-on-surface group-hover:text-primary w-6 h-6" />
                    </div>
                  </a>
                  <a className="group" href="#">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center glass border border-outline-variant/15 group-hover:border-primary transition-all group-hover:-translate-y-1">
                      <Twitter className="text-on-surface group-hover:text-primary w-6 h-6" />
                    </div>
                  </a>
                  <a className="group" href="#">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center glass border border-outline-variant/15 group-hover:border-primary transition-all group-hover:-translate-y-1">
                      <Share2 className="text-on-surface group-hover:text-primary w-6 h-6" />
                    </div>
                  </a>
                  <a className="group" href="#">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center glass border border-outline-variant/15 group-hover:border-primary transition-all group-hover:-translate-y-1">
                      <Youtube className="text-on-surface group-hover:text-primary w-6 h-6" />
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Aesthetic Texture/Decorative Section */}
        <section className="px-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-screen-2xl mx-auto h-[400px] rounded-3xl overflow-hidden relative group"
          >
            <Image 
              className="object-cover opacity-40 scale-105 group-hover:scale-100 transition-transform duration-1000" 
              alt="Dramatic silhouette of Saharan dunes at twilight" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPdWUeUwnoRqE6icu6NWprEBGHHRc6u3QDFzIXjFDNgjsOr07szTk25E-AwKgIMlvSc27NVwHv1vQfHn7yrlZhtURZ6qJSob4r6pdMFkwoD39SRqEA9Ja95HvBeGnwaJjVB0L-yNazXk2WGmLH6ykTeGjHcSb5kcm3oV-74Vh7xt_Jt-eQw6_z_xC-xJ3E2-zsHdnpXS1C0x4U-EQ5aJUdv2mz0MLTSKrVs8eLKtQVFDQqPuOWFlcNKCbRSPCHyCpGP6hrHdaxI"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <div className="w-24 h-[1px] bg-primary mb-8"></div>
              <h2 className="font-headline text-4xl italic text-on-surface">"Le passé n'est pas ce que nous avons laissé derrière nous, mais ce que nous construisons pour l'avenir."</h2>
              <p className="font-label text-tertiary mt-6 tracking-[0.4em] uppercase text-xs">Chronos Algeria Protocol</p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
