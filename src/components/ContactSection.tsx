import React, { useState } from 'react';
import { Mail, Copy, Check, Printer, ArrowUp, Code2, Sparkles, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-[#0B192C] text-white pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#008485]/20 text-[#8FD1B3] border border-[#008485]/40">
              <span className="w-2 h-2 rounded-full bg-[#8FD1B3]" />
              AI & Computer Vision Portfolio
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name} <span className="text-sm font-normal text-slate-400 font-mono">({PERSONAL_INFO.nameEn})</span>
            </h3>

            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              {PERSONAL_INFO.slogan}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                id="contact-copy-email-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all group shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#8FD1B3]" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                )}
              </button>

              {/* Print Button */}
              <button
                onClick={() => window.print()}
                id="contact-print-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#008485] hover:bg-[#008485]/90 text-white text-xs font-semibold shadow-md shadow-[#008485]/20 transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>A4 PDF 포트폴리오 인쇄</span>
              </button>
            </div>
          </div>

          {/* Quick Summary Card */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8FD1B3] uppercase tracking-wider font-mono">
                <Code2 className="w-4 h-4 text-[#008485]" />
                Technical Summary
              </div>
              <div className="text-lg font-bold text-white">
                {PERSONAL_INFO.role}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed space-y-1">
                <p>• 컴퓨터 비전 딥러닝 모델링 (PyTorch, 2D/3D U-Net 세그멘테이션)</p>
                <p>• 안정적인 백엔드 아키텍처 & 대용량 데이터 전처리</p>
                <p>• 국가공인 데이터 분석 및 SQL 자격 (ADsP, SQLD)</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Stack: PyTorch • nnU-Net • Spring Boot</span>
              <span className="text-[#8FD1B3]">AI & Data Modeling</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-[#8FD1B3] transition-colors flex items-center gap-1">
              <span>맨 위로 이동</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
