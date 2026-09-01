import React from 'react';
import { Award, Target, Sparkles, Database, FileCheck, ArrowDown, ChevronRight, Layers, BrainCircuit, Code2 } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#0B192C] via-[#0F172A] to-[#1E293B] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden"
    >
      {/* Background Decorative Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#8FD1B3_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#008485]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-[#8FD1B3]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#008485]/20 text-[#8FD1B3] border border-[#008485]/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#8FD1B3] animate-pulse" />
            하나금융융합기술원 AI-OCR 부문 지원
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
            <BrainCircuit className="w-3.5 h-3.5 text-[#008485]" />
            AI / Computer Vision & Pipeline Engineering
          </div>
        </div>

        {/* Main Headline & Slogan */}
        <div className="max-w-4xl space-y-4 mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight sm:leading-snug">
            딥러닝 비전 모델링과 집요한 최적화로 <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#8FD1B3] print:text-[#8FD1B3] print:bg-none print:[-webkit-text-fill-color:initial]">
              금융 비정형 문서의 정밀한 처리
            </span>
            를 실현합니다.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-1 max-w-3xl">
            의료 영상 세그멘테이션 금상 수상(Dice 0.8926)의 비전 모델링 경험과 
            Spring Boot 계층형 아키텍처 기반의 데이터 제어 역량을 결합하여, 
            하나금융융합기술원의 차세대 AI-OCR 및 서식 분할 R&D 파이프라인에 즉시 기여하겠습니다.
          </p>
        </div>

        {/* Quick Action Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="#projects"
            id="hero-view-projects-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#008485] hover:bg-[#008485]/90 text-white shadow-lg shadow-[#008485]/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>핵심 프로젝트 검증 (Vision & Backend)</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#strengths"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors"
          >
            <Layers className="w-4 h-4 text-[#8FD1B3]" />
            <span>보유 역량 & 기술 스택</span>
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-900/60 hover:bg-slate-800/60 text-slate-300 border border-slate-800 transition-colors"
          >
            <span>소통 & 협업 경험</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-900/60 hover:bg-slate-800/60 text-slate-300 border border-slate-800 transition-colors"
          >
            <span>연구원 / 채용담당자 컨택</span>
          </a>
        </div>

        {/* 4 Stat Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className="bg-slate-900/80 hover:bg-slate-850 border border-slate-800/90 hover:border-[#008485]/50 rounded-xl p-5 backdrop-blur-sm transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#8FD1B3] uppercase tracking-wider font-mono">
                  {stat.tag}
                </span>
                {idx === 0 && <Award className="w-4 h-4 text-amber-400" />}
                {idx === 1 && <Sparkles className="w-4 h-4 text-[#8FD1B3]" />}
                {idx === 2 && <FileCheck className="w-4 h-4 text-emerald-400" />}
                {idx === 3 && <Code2 className="w-4 h-4 text-[#8FD1B3]" />}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#8FD1B3] transition-colors mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mb-0.5">
                {stat.label}
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
