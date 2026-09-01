import React from 'react';
import { Users, MessageSquare, CheckCircle2, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#008485]/10 text-[#008485] mb-2 uppercase tracking-wide">
              Collaboration & Communication
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] tracking-tight">
              협업 & 소통 경험 (Experience & Communication)
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-medium text-slate-500">
            기술적 설명력 및 유관부서 협업 역량
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="experience-card page-break-avoid bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#008485] to-[#8FD1B3] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#1E293B] mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-[#008485]">{exp.role}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                        대상: {exp.targetAudience}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2-Column Details: Achievements vs Hana Synergy */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Key Achievements */}
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-[#008485]" />
                    <h4 className="text-sm font-bold text-[#1E293B]">
                      핵심 활동 및 코칭 성과
                    </h4>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                    {exp.keyAchievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#008485] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Hana R&D Collaboration Synergy */}
                <div className="bg-gradient-to-br from-[#008485]/10 via-white to-emerald-50/40 rounded-xl p-5 border border-[#008485]/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-[#008485]" />
                      <h4 className="text-sm font-bold text-[#008485]">
                        {exp.hanaSynergy.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {exp.hanaSynergy.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium">핵심 키워드</span>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#008485]">
                      <span>#기술커뮤니케이션</span>
                      <span>#R&D협업</span>
                      <span>#원인분석공유</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
