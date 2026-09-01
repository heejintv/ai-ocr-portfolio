import React, { useState } from 'react';
import {
  Award,
  TrendingUp,
  Cpu,
  Server,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Zap,
  Workflow,
  FileSpreadsheet,
  Check,
  Binary,
  GitBranch,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-vision' | 'backend-pipeline'>('all');
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
    'project-vision-segmentation-0': true,
    'project-vision-segmentation-1': true,
    'project-vision-segmentation-2': true,
    'project-snapbook-backend-0': true,
    'project-snapbook-backend-1': true,
    'project-snapbook-backend-2': true,
    'project-snapbook-backend-3': true,
    'project-snapbook-backend-4': true,
  });

  const toggleExpand = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderFormattedText = (text: string) => {
    const tagMatch = text.match(/^(\[[^\]]+\])\s*(.*)$/);
    let prefixTag: React.ReactNode = null;
    let mainText = text;

    if (tagMatch) {
      prefixTag = (
        <strong className="font-bold text-slate-900 mr-1.5 inline-block">
          {tagMatch[1]}
        </strong>
      );
      mainText = tagMatch[2];
    }

    const parts = mainText.split(/(\*\*.*?\*\*)/g);
    return (
      <>
        {prefixTag}
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={i} className="font-bold text-slate-900 bg-amber-50/70 px-1 py-0.5 rounded border border-amber-200/50">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        })}
      </>
    );
  };

  const expandAll = (projectId: string, count: number) => {
    const nextState = { ...expandedItems };
    for (let i = 0; i < count; i++) {
      nextState[`${projectId}-${i}`] = true;
    }
    setExpandedItems(nextState);
  };

  const collapseAll = (projectId: string, count: number) => {
    const nextState = { ...expandedItems };
    for (let i = 0; i < count; i++) {
      nextState[`${projectId}-${i}`] = false;
    }
    setExpandedItems(nextState);
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative">
      {/* Decorative top anchor indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Highlighting that this is the CORE Centerpiece */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-[#008485] text-white mb-2.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight">
              핵심 프로젝트 (Vision & Backend)
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-[#008485] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              전체 프로젝트 ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('ai-vision')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                activeFilter === 'ai-vision'
                  ? 'bg-[#008485] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>AI / Vision</span>
            </button>
            <button
              onClick={() => setActiveFilter('backend-pipeline')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                activeFilter === 'backend-pipeline'
                  ? 'bg-[#008485] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>Backend & Data</span>
            </button>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {PROJECTS.map((project: Project, index: number) => {
            const isVision = project.id === 'project-vision-segmentation';
            const isVisibleOnScreen = activeFilter === 'all' || project.category === activeFilter;

            return (
              <article
                key={project.id}
                id={project.id}
                className={`project-card page-break-avoid rounded-2xl bg-white border-2 border-slate-200/90 shadow-xl transition-all overflow-hidden ${
                  isVisibleOnScreen ? 'block' : 'hidden print:block'
                }`}
              >
                {/* Card Top Banner / Dark Tech Header */}
                <div className="bg-gradient-to-r from-[#0B192C] via-[#0F172A] to-slate-900 text-white p-6 sm:p-8 border-b border-slate-800 relative print-dark-card">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-[#008485] text-white font-mono shadow-xs">
                        Project 0{index + 1}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Highlights Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#8FD1B3]/15 text-[#8FD1B3] border border-[#8FD1B3]/30"
                        >
                          {b.includes('금상') && <Award className="w-3.5 h-3.5 text-amber-300" />}
                          {b.includes('Dice') && <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />}
                          <span>{b}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mb-4">
                    {project.subtitle}
                  </p>

                  {/* Target Domain Strip */}
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#8FD1B3] uppercase tracking-wider text-[11px]">
                        Target Domain
                      </span>
                      <span className="text-slate-300 font-medium">
                        {project.targetDomain}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-slate-400 mr-1">
                      Tech Stack:
                    </span>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-900/90 text-slate-200 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Body with 3 Distinct Structured Stages */}
                <div className="p-6 sm:p-8 space-y-8 bg-[#F8FAFC]/40">
                  
                  {/* Visual Metric / Architecture Pipeline Diagram */}
                  {isVision && project.metric && (
                    <div className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-sm">
                      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Before/After Numeric Box */}
                        <div className="w-full lg:w-5/12 bg-slate-900 rounded-xl p-5 text-white border border-slate-800 print-dark-card">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-[#8FD1B3] uppercase tracking-wider flex items-center gap-1.5">
                              <TrendingUp className="w-4 h-4 text-emerald-400" />
                              {project.metric.label}
                            </span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              +39.2% UP
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-around py-3 bg-slate-950/70 rounded-lg border border-slate-800">
                            <div className="text-center">
                              <div className="text-[11px] text-slate-400 mb-0.5">초기 베이스라인</div>
                              <div className="text-xl font-mono font-bold text-slate-400 line-through">
                                {project.metric.before}
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-[#8FD1B3]" />
                            <div className="text-center">
                              <div className="text-[11px] text-emerald-300 font-bold mb-0.5">최종 모델 (금상)</div>
                              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400 print:text-white">
                                {project.metric.after}
                              </div>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-2.5 text-center">
                            {project.metric.description}
                          </p>
                        </div>

                        {/* Visual Hybrid Ensemble Pipeline */}
                        <div className="w-full lg:w-7/12 space-y-3">
                          <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                            <Workflow className="w-4 h-4 text-[#008485]" />
                            <span>2D/3D 하이브리드 앙상블 파이프라인 구조</span>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                              <div className="font-bold text-[#0B192C] flex items-center gap-1 mb-1">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                3D nnU-Net (fullres)
                              </div>
                              <p className="text-[11px] text-slate-500">
                                3D 전체 볼륨 구조 파악 및 z축 연속성 공간 일관성 확보
                              </p>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                              <div className="font-bold text-[#0B192C] flex items-center gap-1 mb-1">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                2D U-Net (axial)
                              </div>
                              <p className="text-[11px] text-slate-500">
                                Axial Slice 단위 미세 패턴 및 국소 경계선 정밀 보완
                              </p>
                            </div>

                            <div className="p-3 rounded-xl bg-[#008485]/10 border border-[#008485]/30 flex flex-col justify-between">
                              <div className="font-bold text-[#008485] flex items-center gap-1 mb-1">
                                <Sparkles className="w-3.5 h-3.5 text-[#008485]" />
                                평균 융합 앙상블
                              </div>
                              <p className="text-[11px] text-emerald-900 font-semibold">
                                예측 확률 맵(Probability Map) 융합 (Dice 0.8926)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Backend Data Flow Diagram for SnapBook */}
                  {!isVision && (
                    <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
                      <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-3">
                        <Workflow className="w-4 h-4 text-[#008485]" />
                        <span>SnapBook 백엔드 데이터 무결성 & 제어 흐름</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="font-bold text-slate-800 mb-1">1. 분산 채널 유입</div>
                          <p className="text-[11px] text-slate-500">네이버/카카오/인스타 문의를 단일 매장 채팅방으로 일원화</p>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="font-bold text-slate-800 mb-1">2. 계층형 아키텍처</div>
                          <p className="text-[11px] text-slate-500">Controller → Service → 구현 계층(Reader/Writer) → Repository 구조로 비즈니스 로직 격리</p>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="font-bold text-slate-800 mb-1">3. 동시성·정합성 검증</div>
                          <p className="text-[11px] text-slate-500">동일 시간대 중복 예약 차단 및 매장별 동적 폼 유효성 검사</p>
                        </div>
                        <div className="p-3 rounded-xl bg-[#008485]/10 border border-[#008485]/30">
                          <div className="font-bold text-[#008485] mb-1">4. 채팅방 매개 필터링</div>
                          <p className="text-[11px] text-emerald-900 font-semibold">점주 권한 안전한 상태 전이 및 매핑 데이터 맞춤 조회</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STAGE 1: Problem Definition */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-[#1E293B]">
                        1. {project.problemDefinition.title}
                      </h4>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                      {project.problemDefinition.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                          <span>{renderFormattedText(point)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* STAGE 2: Core Architecture & Implementation with Accordion Details */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#008485]/10 border border-[#008485]/30 flex items-center justify-center text-[#008485]">
                          <Zap className="w-4 h-4" />
                        </div>
                        <h4 className="text-base font-bold text-[#1E293B]">
                          2. {project.coreArchitecture.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 text-xs no-print">
                        <button
                          onClick={() => expandAll(project.id, project.coreArchitecture.items.length)}
                          className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium transition-colors"
                        >
                          전체 펼치기
                        </button>
                        <button
                          onClick={() => collapseAll(project.id, project.coreArchitecture.items.length)}
                          className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium transition-colors"
                        >
                          전체 접기
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {project.coreArchitecture.items.map((item, itemIdx) => {
                        const itemKey = `${project.id}-${itemIdx}`;
                        const isExpanded = expandedItems[itemKey] ?? true;

                        return (
                          <div
                            key={itemIdx}
                            className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all"
                          >
                            <button
                              onClick={() => toggleExpand(itemKey)}
                              className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-slate-50/80 transition-colors"
                            >
                              <div className="space-y-1">
                                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-[#008485] font-mono">
                                  {item.tag}
                                </span>
                                <h5 className="text-sm font-bold text-[#1E293B] leading-snug">
                                  {item.heading}
                                </h5>
                              </div>
                              <div className="p-1 rounded-md text-slate-400 hover:text-slate-600 accordion-toggle-icon">
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </div>
                            </button>

                            <div className={`px-4 pb-4 pt-1 text-xs text-[#334155] border-t border-slate-100 space-y-3 bg-slate-50/40 project-accordion-body ${isExpanded ? 'block' : 'hidden print:block'}`}>
                              <p className="leading-relaxed text-slate-700">
                                {renderFormattedText(item.description)}
                              </p>
                              <div className="space-y-1.5 pt-1">
                                {item.details.map((detail, dIdx) => (
                                  <div key={dIdx} className="flex items-start gap-2 text-slate-600">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008485] shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{renderFormattedText(detail)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* STAGE 3: Hana Financial AI-OCR Contribution (Direct Value Add) */}
                  <div className="bg-gradient-to-br from-[#0B192C] via-[#0F172A] to-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-md print-dark-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-[#008485]/20 border border-[#008485]/40 flex items-center justify-center text-[#8FD1B3]">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          3. {project.hanaContribution.title}
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#008485] text-white">
                            Target Match
                          </span>
                        </h4>
                        <p className="text-xs text-[#8FD1B3] font-medium">
                          {project.hanaContribution.summary}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-200 mt-4 pt-4 border-t border-slate-800">
                      {project.hanaContribution.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <Check className="w-4 h-4 text-[#8FD1B3] shrink-0 mt-0.5" />
                          <span className="text-slate-100 font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
