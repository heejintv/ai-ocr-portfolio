import React from 'react';
import { Layers, Terminal, Database, Award, Sparkles, Check, CheckCircle2, ShieldCheck, Cpu, Code2, UserCheck, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, STRENGTH_CATEGORIES, QUALIFICATIONS } from '../data/portfolioData';

export default function ProfileStrengthsSection() {
  return (
    <section id="strengths" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#008485]/10 text-[#008485] mb-2 uppercase tracking-wide">
              Technical Profile & Core Strengths
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] tracking-tight">
              보유 기술 스택 및 역량 (Tech Stack & Skills)
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#008485]" />
              AI 비전 모델링 & 백엔드 파이프라인
            </span>
          </div>
        </div>

        {/* Top Profile & Slogan Summary Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#008485]/10 to-transparent rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Candidate Identity */}
            <div className="lg:col-span-4 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0B192C] to-[#008485] text-white flex items-center justify-center font-extrabold text-xl shadow-md shadow-[#008485]/20 shrink-0">
                정
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-extrabold text-[#1E293B]">
                    {PERSONAL_INFO.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {PERSONAL_INFO.nameEn}
                  </span>
                </div>
                <div className="text-xs font-bold text-[#008485] mt-0.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.role}</span>
                </div>
              </div>
            </div>

            {/* Slogan & Core Highlights */}
            <div className="lg:col-span-8 lg:border-l lg:border-slate-200 lg:pl-6 space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Core Engineering Slogan
                </div>
                <p className="text-sm font-bold text-[#0B192C] leading-snug">
                  "{PERSONAL_INFO.slogan}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-slate-100 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#008485] shrink-0" />
                  <span className="font-medium">비전 세그멘테이션 금상 (Dice 0.8926)</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-slate-100 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#008485] shrink-0" />
                  <span className="font-medium">Spring Boot 계층형 아키텍처</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-slate-100 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#008485] shrink-0" />
                  <span className="font-medium">국가공인 ADsP & SQLD 자격 보유</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Tech Stack Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {STRENGTH_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#008485]/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-[#008485]/10 border border-slate-200 group-hover:border-[#008485]/30 flex items-center justify-center transition-colors">
                    {idx === 0 && <Layers className="w-5 h-5 text-[#008485]" />}
                    {idx === 1 && <Terminal className="w-5 h-5 text-[#008485]" />}
                    {idx === 2 && <Database className="w-5 h-5 text-[#008485]" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    Category 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1E293B] mb-0.5">
                  {cat.title}
                </h3>
                <div className="text-xs font-medium text-[#008485] mb-2">
                  {cat.englishTitle}
                </div>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Chips List */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200/70 flex items-center justify-between group-hover:bg-slate-50/80 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#008485]" />
                        <span className="text-xs font-bold text-[#1E293B] font-mono">
                          {skill.name}
                        </span>
                      </div>
                      {skill.note && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>프로젝트 검증 완료</span>
                <span className="font-semibold text-[#008485] flex items-center gap-1">
                  <Check className="w-3 h-3" /> Ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certified Qualifications Banner */}
        <div className="bg-gradient-to-r from-[#0B192C] via-[#0F172A] to-[#1E293B] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#008485]/20 border border-[#008485]/40 flex items-center justify-center text-[#8FD1B3]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  공인 데이터 전문 자격 (Official Certifications)
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30">
                    국가공인
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  한국데이터산업진흥원(K-Data) 공인 데이터 분석 및 SQL 모델링 검증 자격
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUALIFICATIONS.map((q) => (
              <div
                key={q.name}
                className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-[#008485] text-white font-mono">
                        {q.name}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {q.fullName}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {q.issuer}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {q.highlight}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-[#8FD1B3]">
                  <span>데이터 정합성 및 정밀도 검증</span>
                  <span className="font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 자격 취득 완료
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
