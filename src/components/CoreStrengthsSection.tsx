import React from 'react';
import { Layers, ShieldCheck, Check, Sparkles, Terminal, Database, Award } from 'lucide-react';
import { STRENGTH_CATEGORIES, QUALIFICATIONS } from '../data/portfolioData';

export default function CoreStrengthsSection() {
  return (
    <section id="strengths" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#008485]/10 text-[#008485] mb-2 uppercase tracking-wide">
            Technical Proficiency
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] tracking-tight mb-3">
            보유 역량 및 기술 스택 (Core Strengths)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            실제 모델링 및 파이프라인 구축에 직접 활용하고 검증한 핵심 기술셋과 공인 자격 사항입니다.
          </p>
        </div>

        {/* 3 Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

                <h3 className="text-lg font-bold text-[#1E293B] mb-1">
                  {cat.title}
                </h3>
                <div className="text-xs font-medium text-[#008485] mb-2">
                  {cat.englishTitle}
                </div>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Chips List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between group-hover:bg-slate-50/80 transition-colors"
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>실무 프로젝트 검증 완료</span>
                <span className="font-semibold text-[#008485] flex items-center gap-1">
                  <Check className="w-3 h-3" /> Ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certified Qualifications Banner */}
        <div className="bg-gradient-to-r from-[#0B192C] via-[#0F172A] to-[#1E293B] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#008485]/20 border border-[#008485]/40 flex items-center justify-center text-[#8FD1B3]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  공인 데이터 전문 자격 (Official Certifications)
                </h3>
                <p className="text-xs text-slate-400">
                  데이터 모델링 및 통계 분석 역량을 공인받은 국가공인 자격증
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Sparkles className="w-3 h-3" />
              한국데이터산업진흥원 (K-Data)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUALIFICATIONS.map((q) => (
              <div
                key={q.name}
                className="bg-slate-900/80 rounded-xl p-4 border border-slate-800/90 flex flex-col justify-between"
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
                    <span className="text-[11px] text-slate-400 font-medium">
                      {q.issuer}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {q.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
