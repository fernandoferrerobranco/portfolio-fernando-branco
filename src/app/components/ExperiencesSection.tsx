import { useState } from 'react';
import {
  Network,
  MailOpen,
  Globe,
  Route,
  Gamepad,
  UsersRound,
  Star,
  Zap,
  CheckCheck,
  Users,
  Shield,
  ChartLine,
  Settings,
  Leaf,
  Award,
  Briefcase,
  UserCog,
  PenLine,
  RotateCcw,
  Search,
  MapPin,
  Bot,
  Palette,
  Eye,
  Truck,
  TrendingUp,
  ShoppingBag,
  Smile,
  CreditCard,
  Lightbulb,
  Package,
  Layers,
  UserCheck,
  User,
  Tv,
  Megaphone,
  BarChart3,
  Heart,
  CalendarCheck,
  AlertTriangle,
  Table,
  Earth,
  Rocket,
  Handshake,
} from 'lucide-react';
import { AccordionItem } from './AccordionItem';
import { Language, translations } from '../data/translations';
import { experiencesData } from '../data/experiences';

interface ExperiencesSectionProps {
  language: Language;
}

export function ExperiencesSection({ language }: ExperiencesSectionProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const t = translations[language];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="experiencia" className="py-24 bg-slate-950/50 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-16 text-center italic underline underline-offset-8 decoration-cyan-500/20">
          {t.sections.detailedExp}
        </h2>

        <div className="space-y-4">
          {/* FICTORPAY */}
          <AccordionItem
            dateColor={experiencesData[0].dateColor}
            dateRange={experiencesData[0].dateRange}
            company={experiencesData[0].company}
            companyType={experiencesData[0].companyType}
            companyColor={experiencesData[0].companyColor}
            role={t.experiences.fictorpay.role}
            iconColor={experiencesData[0].iconColor}
            scope={t.experiences.fictorpay.scope}
            isOpen={openAccordion === 'fictorpay'}
            onToggle={() => toggleAccordion('fictorpay')}
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-[9px] mb-6 uppercase tracking-[0.25em]">
                Conquistas
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {t.experiences.fictorpay.achievements?.map((achievement, index) => {
                  const icons = [Network, MailOpen, Globe, Route, Gamepad, UsersRound, Star];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <Icon className="conquista-icon" size={16} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                          {achievement.title}
                        </p>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItem>

          {/* SHOPEE */}
          <AccordionItem
            dateColor={experiencesData[1].dateColor}
            dateRange={experiencesData[1].dateRange}
            company={experiencesData[1].company}
            companyType={experiencesData[1].companyType}
            companyColor={experiencesData[1].companyColor}
            role={t.experiences.shopee.role}
            iconColor={experiencesData[1].iconColor}
            scope={t.experiences.shopee.scope}
            isOpen={openAccordion === 'shopee'}
            onToggle={() => toggleAccordion('shopee')}
          >
            <div>
              {/* Timeline de Promoções */}
              <div className="mb-8 bg-slate-900/50 p-6 rounded-sm border border-orange-500/10">
                <h4 className="text-xs font-black text-orange-500 uppercase italic mb-6 tracking-widest text-center">
                  {t.experiences.shopee.timelineTitle}
                </h4>
                <div className="relative px-4">
                  {/* Linha horizontal */}
                  <div className="absolute left-0 right-0 top-3 h-[2px] bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500/50"></div>
                  
                  {/* Timeline Items */}
                  <div className="grid grid-cols-4 gap-4">
                    {t.experiences.shopee.timeline?.map((step, index) => (
                      <div key={index} className="relative pt-8 text-center">
                        {/* Dot */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-slate-900 shadow-lg shadow-orange-500/30 z-10"></div>
                        
                        {/* Content */}
                        <div className="mt-2">
                          <p className="text-[10px] font-black text-white uppercase tracking-wide mb-1 leading-tight">
                            {step.position}
                          </p>
                          <p className="text-[9px] text-orange-400 font-bold uppercase tracking-wider">
                            {step.level}
                          </p>
                          {step.region && (
                            <p className="text-[9px] text-slate-400 italic mt-1">
                              {step.region}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conquistas */}
              <div className="inline-block px-3 py-1 rounded-sm bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-[9px] mb-6 uppercase tracking-[0.25em]">
                Conquistas
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {t.experiences.shopee.achievements?.map((achievement, index) => {
                  const icons = [Zap, CheckCheck, Settings, Users, Earth, ChartLine, Rocket];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <Icon className="conquista-icon text-orange-400" size={16} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                          {achievement.title}
                        </p>
                        <p className="text-[11px] text-slate-400">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItem>

          {/* COMGÁS */}
          <AccordionItem
            dateColor={experiencesData[2].dateColor}
            dateRange={experiencesData[2].dateRange}
            company={experiencesData[2].company}
            companyType={experiencesData[2].companyType}
            companyColor={experiencesData[2].companyColor}
            role={t.experiences.comgas.role}
            iconColor={experiencesData[2].iconColor}
            scope={t.experiences.comgas.scope}
            isOpen={openAccordion === 'comgas'}
            onToggle={() => toggleAccordion('comgas')}
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-sm bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-[9px] mb-6 uppercase tracking-[0.25em]">
                Conquistas
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {t.experiences.comgas.achievements?.map((achievement, index) => {
                  const icons = [UserCog, Shield, ChartLine, Settings, Leaf, UserCheck];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <Icon className="conquista-icon text-blue-400" size={16} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                          {achievement.title}
                        </p>
                        <p className="text-[11px] text-slate-400">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItem>

          {/* BE ARTS */}
          <AccordionItem
            dateColor={experiencesData[3].dateColor}
            dateRange={experiencesData[3].dateRange}
            company={experiencesData[3].company}
            companyType={experiencesData[3].companyType}
            companyColor={experiencesData[3].companyColor}
            role={t.experiences.bearts.role}
            iconColor={experiencesData[3].iconColor}
            scope={t.experiences.bearts.scope}
            isOpen={openAccordion === 'bearts'}
            onToggle={() => toggleAccordion('bearts')}
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-sm bg-slate-500/10 border border-slate-500/20 text-slate-400 font-bold text-[9px] mb-6 uppercase tracking-[0.25em]">
                Conquistas
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {t.experiences.bearts.achievements?.map((achievement, index) => {
                  const icons = [Briefcase, UserCog, PenLine, RotateCcw, Search];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <Icon className="conquista-icon text-slate-400" size={16} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                          {achievement.title}
                        </p>
                        <p className="text-[11px] text-slate-400">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItem>

          {/* BAER-MATE */}
          <AccordionItem
            dateColor={experiencesData[4].dateColor}
            dateRange={experiencesData[4].dateRange}
            company={experiencesData[4].company}
            companyType={experiencesData[4].companyType}
            companyColor={experiencesData[4].companyColor}
            role={t.experiences.baermate.role}
            iconColor={experiencesData[4].iconColor}
            scope={t.experiences.baermate.scope}
            isOpen={openAccordion === 'baermate'}
            onToggle={() => toggleAccordion('baermate')}
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-sm bg-lime-500/10 border border-lime-500/20 text-lime-400 font-bold text-[9px] mb-6 uppercase tracking-[0.25em]">
                Conquistas
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {t.experiences.baermate.achievements?.map((achievement, index) => {
                  const icons = [MapPin, Bot, Palette, Award, Eye];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <Icon className="conquista-icon text-lime-400" size={16} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                          {achievement.title}
                        </p>
                        <p className="text-[11px] text-slate-400">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItem>

          {/* PUFF BR */}
          <AccordionItem
            dateColor={experiencesData[5].dateColor}
            dateRange={experiencesData[5].dateRange}
            company={experiencesData[5].company}
            companyType={experiencesData[5].companyType}
            companyColor={experiencesData[5].companyColor}
            role={t.experiences.puffbr.role}
            iconColor={experiencesData[5].iconColor}
            scope={t.experiences.puffbr.scope}
            isOpen={openAccordion === 'puffbr'}
            onToggle={() => toggleAccordion('puffbr')}
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-sm bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-[9px] mb-6 uppercase tracking-[0.25em]">
                Conquistas
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {t.experiences.puffbr.achievements?.map((achievement, index) => {
                  const icons = [Truck, TrendingUp, ShoppingBag, Smile, CreditCard];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <Icon className="conquista-icon text-indigo-400" size={16} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                          {achievement.title}
                        </p>
                        <p className="text-[11px] text-slate-400">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItem>

          {/* GET2GETHER */}
          <AccordionItem
            dateColor={experiencesData[6].dateColor}
            dateRange={experiencesData[6].dateRange}
            company={experiencesData[6].company}
            companyType={experiencesData[6].companyType}
            companyColor={experiencesData[6].companyColor}
            role={t.experiences.get2gether.role}
            iconColor={experiencesData[6].iconColor}
            scope={t.experiences.get2gether.scope}
            isOpen={openAccordion === 'get2gether'}
            onToggle={() => toggleAccordion('get2gether')}
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-[9px] mb-6 uppercase tracking-[0.25em]">
                Conquistas
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {t.experiences.get2gether.achievements?.map((achievement, index) => {
                  const icons = [Lightbulb, Award, Handshake, Package, Layers, UserCheck];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <Icon className="conquista-icon text-cyan-400" size={16} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                          {achievement.title}
                        </p>
                        <p className="text-[11px] text-slate-400">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItem>

          {/* FUTURE GROUP */}
          <AccordionItem
            dateColor={experiencesData[7].dateColor}
            dateRange={experiencesData[7].dateRange}
            company={experiencesData[7].company}
            companyType={experiencesData[7].companyType}
            companyColor={experiencesData[7].companyColor}
            role={t.experiences.futuregroup.role}
            iconColor={experiencesData[7].iconColor}
            scope={t.experiences.futuregroup.scope}
            isOpen={openAccordion === 'futuregroup'}
            onToggle={() => toggleAccordion('futuregroup')}
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-sm bg-slate-500/10 border border-slate-500/20 text-slate-400 font-bold text-[9px] mb-6 uppercase tracking-[0.25em]">
                Conquistas
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {t.experiences.futuregroup.achievements?.map((achievement, index) => {
                  const icons = [Handshake, Tv, User, Megaphone, BarChart3];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <Icon className="conquista-icon text-slate-400" size={16} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                          {achievement.title}
                        </p>
                        <p className="text-[11px] text-slate-400">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItem>

          {/* TV GLOBO */}
          <AccordionItem
            dateColor={experiencesData[8].dateColor}
            dateRange={experiencesData[8].dateRange}
            company={experiencesData[8].company}
            companyType={experiencesData[8].companyType}
            companyColor={experiencesData[8].companyColor}
            role={t.experiences.tvglobo.role}
            iconColor={experiencesData[8].iconColor}
            scope={t.experiences.tvglobo.scope}
            isOpen={openAccordion === 'tvglobo'}
            onToggle={() => toggleAccordion('tvglobo')}
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-sm bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[9px] mb-6 uppercase tracking-[0.25em]">
                Conquistas
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {t.experiences.tvglobo.achievements?.map((achievement, index) => {
                  const icons = [Megaphone, Heart, CalendarCheck, AlertTriangle, Table];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <Icon className="conquista-icon text-red-400" size={16} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                          {achievement.title}
                        </p>
                        <p className="text-[11px] text-slate-400">{achievement.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}