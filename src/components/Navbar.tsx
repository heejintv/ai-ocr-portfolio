import React, { useState } from 'react';
import { Printer, Menu, X, Check, Cpu, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const navLinks = [
    { label: '핵심 프로젝트 (Projects)', href: '#projects', highlight: true },
    { label: '역량 & 기술스택 (Profile & Skills)', href: '#strengths', highlight: false },
    { label: '소통/협업 (Experience)', href: '#experience', highlight: false },
    { label: 'Contact', href: '#contact', highlight: false },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B192C]/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Target Designation */}
          <a
            href="#hero"
            id="nav-logo-link"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01]"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#008485] to-[#8FD1B3] flex items-center justify-center shadow-md shadow-[#008485]/20">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-white group-hover:text-[#8FD1B3] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  {PERSONAL_INFO.nameEn}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#008485]/20 text-[#8FD1B3] border border-[#008485]/30">
                  AI-OCR 부문 지원
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                하나금융융합기술원 체험형 인턴 포트폴리오
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                  link.highlight
                    ? 'text-[#8FD1B3] bg-[#008485]/20 border border-[#008485]/40 hover:bg-[#008485]/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-[#8FD1B3]" />}
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => window.print()}
              id="nav-print-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors shadow-sm"
              title="A4 규격 인쇄 및 PDF 저장"
            >
              <Printer className="w-3.5 h-3.5 text-[#8FD1B3]" />
              <span>PDF / 인쇄</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="인쇄"
            >
              <Printer className="w-4 h-4 text-[#8FD1B3]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                  link.highlight
                    ? 'text-[#8FD1B3] bg-[#008485]/20 border border-[#008485]/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={handleCopyEmail}
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>이메일 주소 복사됨</span>
                </>
              ) : (
                <span>이메일: {PERSONAL_INFO.email}</span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
