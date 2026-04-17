'use client';
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Circle, TrendingUp, Target, Shield, Zap, Award, ArrowRight, Download, Calendar, Video, Star, Quote, Menu, X, Sparkles, FileText, BarChart3, Users, Clock, CreditCard, Check } from 'lucide-react';

export default function KRConsultingOnline() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [surveyTrack, setSurveyTrack] = useState(null); // 'personal' | 'business'
  const [surveyStep, setSurveyStep] = useState(0);
  const [surveyData, setSurveyData] = useState({});
  const [selectedSession, setSelectedSession] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ═══════════════════════════════════════════════════════════
  // 공통 네비게이션
  // ═══════════════════════════════════════════════════════════
  const Nav = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#051c2c] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button
          onClick={() => { setCurrentScreen('landing'); setSurveyStep(0); setSurveyTrack(null); }}
          className="flex items-center gap-3 group"
        >
          <div className="text-white font-serif-en text-[22px] tracking-tight leading-none">KR Consulting</div>
          <div className="h-5 w-px bg-white/30"></div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-[#00a9f4]">Online</div>
        </button>
        <div className="hidden md:flex items-center gap-10 text-[13px] text-white/80">
          <button className="hover:text-white transition-colors tracking-wide">서비스 소개</button>
          <a href="https://godsbizman.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5 tracking-wide">
            이강락 대표
            <ArrowRight size={11} className="opacity-60 -rotate-45" />
          </a>
          <button
            onClick={() => setCurrentScreen('cases')}
            className="hover:text-white transition-colors tracking-wide"
          >
            고객 사례
          </button>
          <button
            onClick={() => setCurrentScreen('insights')}
            className="hover:text-white transition-colors tracking-wide"
          >
            인사이트
          </button>
          <button
            onClick={() => setCurrentScreen('survey-intro')}
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-white border-b border-[#00a9f4] pb-1 hover:text-[#00a9f4] transition-colors"
          >
            무료 자가진단
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );

  // ═══════════════════════════════════════════════════════════
  // 스크린 1: 랜딩 페이지
  // ═══════════════════════════════════════════════════════════
  const LandingScreen = () => (
    <div className="pt-20 bg-white">
      {/* Hero Section — McKinsey editorial */}
      <section className="relative bg-[#051c2c] text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-14 pb-16">
          {/* 상단 카테고리 라인 */}
          <div className="flex items-center gap-3 mb-12 text-[10px] tracking-[0.3em] uppercase text-[#00a9f4]">
            <div className="w-6 h-px bg-[#00a9f4]"></div>
            Featured Insight
            <span className="text-white/30">—</span>
            <span className="text-white/70">Manufacturing Excellence</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-[clamp(2rem,3.8vw,3.4rem)] font-light text-white leading-[1.18] tracking-[-0.035em] mb-8">
                <span className="headline-kr-bold">세계 최고의 경쟁력</span>,<br />
                <span className="headline-kr text-white/75">
                  이제 <span className="text-[#00a9f4] font-medium">온라인에서</span> 만납니다.
                </span>
              </h1>
              <p className="text-[15px] text-white/65 leading-[1.75] mb-10 max-w-lg font-light">
                삼성·LG·현대가 선택한 이강락 대표의 제조업 컨설팅.<br />
                30년 · 3,000건의 실전 방법론을 AI와 함께 만나봅니다.
              </p>
              <div className="flex flex-wrap items-center gap-8 mb-12">
                <button
                  onClick={() => setCurrentScreen('survey-intro')}
                  className="group inline-flex items-center gap-3 text-[14px] font-medium text-white border-b border-[#00a9f4] pb-2 hover:text-[#00a9f4] transition-colors tracking-wide"
                >
                  무료 자가진단 시작하기
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
                <a
                  href="https://www.youtube.com/@leekrtv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-[14px] font-medium text-white/70 hover:text-white transition-colors tracking-wide"
                >
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#ff0000] group-hover:bg-[#ff0000] transition-all">
                    <Video size={14} />
                  </div>
                  <span>
                    이강락TV 바로가기
                    <span className="block text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/60 mt-0.5">YouTube · @leekrtv</span>
                  </span>
                </a>
              </div>

              {/* 신뢰 지표 */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15">
                {[
                  { n: '3,000+', l: '컨설팅 수행 건수' },
                  { n: '70%', l: '원가 절감 최대치' },
                  { n: '24', l: '최장 고객 관계 (년)' }
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-serif-en text-[32px] lg:text-[36px] font-normal text-white tabular-nums leading-none">{s.n}</div>
                    <div className="text-[10px] text-white/50 mt-2.5 tracking-[0.15em] uppercase">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 우측: 대표님 포트레이트 (McKinsey editorial) */}
            <div className="lg:col-span-5">
              <figure className="relative">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#030f1a] group">
                  <img
                    src="/leekangrak.jpg"
                    alt="이강락 KR컨설팅 대표"
                    className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity duration-1000"
                  />
                  {/* 네이비 오버레이 (하단) */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
                  {/* 우상단 포지션 라벨 */}
                  <div className="absolute top-6 right-6 text-right">
                    <div className="text-[9px] tracking-[0.3em] uppercase text-[#00a9f4]">Founder · 1998</div>
                  </div>
                </div>
                <figcaption className="mt-5">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <div className="text-[22px] font-semibold text-white tracking-tight">이강락</div>
                    <div className="font-serif-en italic text-[13px] text-white/50">Lee Kang-Rak</div>
                  </div>
                  <div className="text-[12px] text-white/60 font-light tracking-wide">
                    KR컨설팅 대표 · 산업응용기술사 · 기계기술사
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* 고객사 스트립 — 전체 하단 */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">Trusted By Industry Leaders</div>
              <div className="flex flex-wrap gap-x-10 gap-y-3 text-[14px] font-medium text-white/80 tracking-tight">
                <span>삼성전자</span>
                <span>LG전자</span>
                <span>현대자동차</span>
                <span>LG화학</span>
                <span>현대중공업</span>
                <span className="text-white/40 text-[12px] font-normal">+ 2,995개사</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문제 인식 섹션 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-4">The Problem</div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              대기업만 누려온 '세계 최고 수준의 컨설팅',<br />
              왜 중소기업과 개인 창업자는 받을 수 없었을까요?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200">
            {[
              { icon: '💰', t: '비용의 장벽', d: '대형 컨설팅사는 수억 원, 저가 컨설팅은 방법론 부재' },
              { icon: '🔍', t: '프레임의 부재', d: '어디서부터 진단하고 개선해야 할지 체계가 없음' },
              { icon: '📍', t: '접근의 한계', d: '지방·해외 소재 기업은 대면 컨설팅 받기 어려움' }
            ].map((p, i) => (
              <div key={i} className="bg-white p-10 hover:bg-slate-50 transition-colors">
                <div className="text-4xl mb-5">{p.icon}</div>
                <div className="text-lg font-bold text-slate-900 mb-3">{p.t}</div>
                <div className="text-[14px] text-slate-600 leading-relaxed">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대표 철학 섹션 */}
      <section className="py-28 bg-mck-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 15% 50%, #00a9f4 0%, transparent 50%)'
        }}></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-mck-navy/[0.06]"></div>
                <div className="relative aspect-square bg-white overflow-hidden">
                  <img
                    src="/leekangrak.jpg"
                    alt="이강락 대표"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-mck-navy text-white px-5 py-4">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-mck-cyan mb-1">Founded</div>
                  <div className="font-serif-en text-2xl font-normal tabular-nums">1998</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6 text-[10px] tracking-[0.3em] uppercase text-mck-cyan">
                <div className="w-6 h-px bg-mck-cyan"></div>
                Founder&apos;s Philosophy
              </div>
              <Quote size={44} className="text-mck-cyan mb-6" strokeWidth={1.25} />
              <blockquote className="text-[clamp(1.75rem,3vw,2.5rem)] font-light text-mck-navy leading-[1.35] mb-10 tracking-[-0.025em]">
                &ldquo;고객에게 충성한다.<br/>
                고객이 <span className="font-serif-en italic font-normal text-mck-navy">세계 최고의 경쟁력</span>을 갖도록,<br/>
                고객이 목표로 하는 것을<br/>
                <span className="font-medium">이루도록 돕는다.</span>&rdquo;
              </blockquote>
              <div className="flex items-end justify-between pt-8 border-t border-mck-navy/15 mb-6">
                <div>
                  <div className="text-base font-semibold text-mck-navy">이강락</div>
                  <div className="text-[13px] text-mck-navy/55 mt-0.5">KR컨설팅 대표 · 1998년 창업</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-mck-navy/40 mb-1">Track Record</div>
                  <div className="text-[13px] font-semibold text-mck-navy">3,000건 · 27년</div>
                </div>
              </div>
              <a
                href="https://godsbizman.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-mck-navy hover:text-mck-cyan transition-colors"
              >
                <span className="border-b border-mck-navy group-hover:border-mck-cyan pb-0.5">이강락 대표 공식 홈페이지 방문하기</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 솔루션: 3단계 프로세스 */}
      <section className="py-24 bg-mck-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4 text-[10px] tracking-[0.3em] uppercase text-mck-cyan">
                <div className="w-6 h-px bg-mck-cyan"></div>
                The Solution
              </div>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.2] mb-6 tracking-[-0.03em]">
                <span className="headline-kr-bold">3단계</span>로 설계된<br />
                <span className="text-white/75">온라인 컨설팅 여정</span>
              </h2>
              <p className="text-white/65 leading-[1.75] text-[15px] font-light">
                무료 자가진단부터 이강락 대표 1:1 세션까지.<br />
                부담 없이 시작해 필요한 만큼 깊이 들어갑니다.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {[
                { n: '01', t: '무료 자가진단', d: '15~20분 설문으로 우리 사업의 5대 영역 점수 확인', tag: 'Free', sample: '/samples/free-report.html', sampleLabel: '무료 진단 리포트 샘플 보기' },
                { n: '02', t: 'AI 상세 리포트', d: '30년 방법론 기반 AI가 20페이지 진단 리포트 생성', tag: '49,000원', sample: '/samples/detailed-report.html', sampleLabel: 'AI 상세 리포트 샘플 보기' },
                { n: '03', t: '전문가 1:1 세션', d: '이강락 대표 또는 선임 컨설턴트와 Zoom 심화 상담', tag: '15만원~', sample: null, sampleLabel: null }
              ].map((s, i) => (
                <div key={i} className="group border border-white/15 p-6 hover:border-mck-cyan hover:bg-mck-navy-deep/60 transition-all">
                  <div className="flex items-start gap-5">
                    <div className="font-serif-en text-3xl font-normal text-white/35 group-hover:text-mck-cyan transition-colors tabular-nums shrink-0">{s.n}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="text-lg font-semibold tracking-tight">{s.t}</div>
                        <div className="text-[11px] px-2.5 py-1 bg-amber-400 text-mck-navy font-semibold tracking-wide shrink-0">{s.tag}</div>
                      </div>
                      <div className="text-[14px] text-white/55 leading-relaxed font-light">{s.d}</div>
                      {s.sample && (
                        <a
                          href={s.sample}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium text-mck-cyan border-b border-mck-cyan/40 hover:border-mck-cyan pb-0.5 tracking-wide transition-colors"
                        >
                          <FileText size={13} />
                          {s.sampleLabel}
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 차별점 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-4">Why Us</div>
            <h2 className="text-4xl font-bold text-slate-900">
              다른 AI 컨설팅과는 무엇이 다른가
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, t: '실제 증명된 방법론', d: '삼성·LG·현대 3,000건 수행, 원가 최대 70% 절감의 실전 체크리스트 기반', h: '30년 실적' },
              { icon: Users, t: 'AI + 전문가 하이브리드', d: 'AI가 1차 진단을 담당하고, 최종 판단은 30년 경력 컨설턴트가 직접 마무리', h: '팀 협업' },
              { icon: Shield, t: '장기 관계 DNA', d: '"만남은 있지만 헤어짐은 없다" — 1회성이 아닌 성장 단계마다 함께하는 동반자', h: '24년+' }
            ].map((d, i) => (
              <div key={i} className="group">
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-mck-navy/15">
                  <div className="w-12 h-12 bg-mck-navy flex items-center justify-center text-white">
                    <d.icon size={22} />
                  </div>
                  <div className="text-[11px] tracking-[0.15em] uppercase text-mck-cyan">{d.h}</div>
                </div>
                <div className="text-xl font-bold text-slate-900 mb-3">{d.t}</div>
                <div className="text-[14px] text-slate-600 leading-relaxed">{d.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mck-gray border-t border-mck-navy/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[10px] tracking-[0.3em] uppercase text-mck-cyan mb-4">Start Your Diagnosis</div>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-light text-mck-navy mb-4 leading-[1.2] tracking-[-0.03em]">
            우리 회사의 <span className="headline-kr-bold">경쟁력</span>,<br />
            지금 바로 진단해보세요
          </h2>
          <p className="text-mck-navy/65 mb-10 font-light text-[15px]">무료 자가진단은 15분이면 충분합니다. 카드 정보 입력 없이 시작 가능합니다.</p>
          <button
            onClick={() => setCurrentScreen('survey-intro')}
            className="group inline-flex items-center gap-3 text-[14px] font-medium text-mck-navy border-b border-mck-cyan pb-2 hover:text-mck-cyan transition-colors tracking-wide"
          >
            무료로 자가진단 시작하기
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mck-navy text-white/55 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="font-serif-en text-white text-[18px] mb-3 tracking-tight">KR Consulting <span className="text-mck-cyan text-[11px] tracking-[0.25em] uppercase ml-1">Online</span></div>
              <div className="text-[12px] leading-relaxed font-light">
                국내 제조업 컨설팅 1위 기업 KR컨설팅의 공식 온라인 서비스
              </div>
            </div>
            <div>
              <div className="text-white text-[11px] tracking-[0.2em] uppercase font-medium mb-4">Service</div>
              <ul className="text-[12px] space-y-2 font-light">
                <li>자가진단</li><li>AI 리포트</li><li>전문가 세션</li>
              </ul>
            </div>
            <div>
              <div className="text-white text-[11px] tracking-[0.2em] uppercase font-medium mb-4">Company</div>
              <ul className="text-[12px] space-y-2 font-light">
                <li>KR컨설팅 소개</li>
                <li>
                  <a href="https://godsbizman.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-mck-cyan transition-colors inline-flex items-center gap-1">
                    이강락 대표 홈페이지
                    <ArrowRight size={10} className="-rotate-45" />
                  </a>
                </li>
                <li>고객 사례</li>
              </ul>
            </div>
            <div>
              <div className="text-white text-[11px] tracking-[0.2em] uppercase font-medium mb-4">Contact</div>
              <ul className="text-[12px] space-y-2 font-light">
                <li>서울 마포구 토정로 16</li><li>02-337-0691</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 text-[11px] flex flex-wrap justify-between gap-2 font-light">
            <div>© 2026 KR Consulting. All rights reserved.</div>
            <div className="flex gap-4"><span>이용약관</span><span>개인정보처리방침</span></div>
          </div>
        </div>
      </footer>
    </div>
  );

  // ═══════════════════════════════════════════════════════════
  // 스크린 2: 설문 인트로 (트랙 선택)
  // ═══════════════════════════════════════════════════════════
  const SurveyIntroScreen = () => (
    <div className="pt-16 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <button onClick={() => setCurrentScreen('landing')} className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-flex items-center gap-1">
          <ChevronLeft size={16} /> 홈으로
        </button>
        <div className="text-center mb-12">
          <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-3">Step 1 of 3</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">어떤 관점에서 진단받고 싶으신가요?</h1>
          <p className="text-slate-600">선택하신 트랙에 따라 맞춤 설문이 진행됩니다. (소요 시간: 15~20분)</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => { setSurveyTrack('personal'); setCurrentScreen('survey'); setSurveyStep(0); }}
            className="group relative bg-white border-2 border-slate-200 p-8 text-left hover:border-slate-900 transition-all"
          >
            <div className="absolute top-6 right-6 w-10 h-10 border-2 border-slate-200 group-hover:border-slate-900 group-hover:bg-slate-900 flex items-center justify-center transition-all">
              <ArrowRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-5xl mb-4">🚀</div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-2">Track A</div>
            <div className="text-2xl font-bold text-slate-900 mb-3">개인 · 창업 준비자</div>
            <div className="text-[14px] text-slate-600 leading-relaxed mb-6">
              창업 아이템을 검증받고 싶거나, 초기 사업 구조를 설계 중인 개인 창업 준비자
            </div>
            <div className="space-y-2 text-[13px] text-slate-500">
              <div className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> 아이템 시장성 진단</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> 예상 원가 구조 분석</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> 초기 리스크 Top 3 도출</div>
            </div>
          </button>
          <button
            onClick={() => { setSurveyTrack('business'); setCurrentScreen('survey'); setSurveyStep(0); }}
            className="group relative bg-white border-2 border-slate-200 p-8 text-left hover:border-slate-900 transition-all"
          >
            <div className="absolute top-6 right-6 w-10 h-10 border-2 border-slate-200 group-hover:border-slate-900 group-hover:bg-slate-900 flex items-center justify-center transition-all">
              <ArrowRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-5xl mb-4">🏭</div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-2">Track B</div>
            <div className="text-2xl font-bold text-slate-900 mb-3">중소기업 · 대표자</div>
            <div className="text-[14px] text-slate-600 leading-relaxed mb-6">
              기존 사업의 원가·품질·조직을 체계적으로 점검하고 개선 우선순위를 찾는 대표자
            </div>
            <div className="space-y-2 text-[13px] text-slate-500">
              <div className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> 원가 구조 분석 (재료·인건비·경비)</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> 린 관점 7대 낭비 체크</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-emerald-600" /> 경쟁력 5대 영역 종합 점수</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════
  // 스크린 3: 설문 문항
  // ═══════════════════════════════════════════════════════════
  const personalQuestions = [
    {
      title: '사업 아이템 기본 정보',
      fields: [
        { key: 'name', label: '성함', type: 'text', placeholder: '홍길동' },
        { key: 'item', label: '사업 아이템 한 줄 소개', type: 'text', placeholder: '예: 중소 제조업체용 IoT 품질관리 솔루션' },
        { key: 'industry', label: '업종', type: 'select', options: ['제조업', '유통/도소매', 'F&B', 'IT/서비스', '기타'] },
        { key: 'capital', label: '예상 초기 자본금', type: 'select', options: ['5천만 원 미만', '5천만~1억', '1억~3억', '3억 이상'] },
      ]
    },
    {
      title: '타깃 시장 및 경쟁력',
      fields: [
        { key: 'target', label: '타깃 고객 (구체적으로)', type: 'textarea', placeholder: '예: 직원 20~50명 규모의 자동차 부품 제조 중소기업' },
        { key: 'value', label: '핵심 가치 제안 (경쟁사 대비 우리만의 강점)', type: 'textarea', placeholder: '예: 설치 반나절, 월 10만원 초저가' },
        { key: 'competitors', label: '주요 경쟁사 또는 대체재', type: 'text', placeholder: '예: 대형 MES 솔루션 3사' },
      ]
    },
    {
      title: '원가 예상 및 리스크',
      fields: [
        { key: 'price', label: '예상 판매 단가', type: 'text', placeholder: '예: 월 10만원 구독' },
        { key: 'costRatio', label: '예상 원가율', type: 'select', options: ['30% 미만', '30~50%', '50~70%', '70% 이상', '잘 모름'] },
        { key: 'risks', label: '가장 걱정되는 리스크 3가지', type: 'textarea', placeholder: '1.\n2.\n3.' },
      ]
    },
  ];

  const businessQuestions = [
    {
      title: '기업 개요',
      fields: [
        { key: 'company', label: '회사명', type: 'text', placeholder: 'OO정밀(주)' },
        { key: 'name', label: '대표자 성함', type: 'text', placeholder: '홍길동' },
        { key: 'industry', label: '업종', type: 'select', options: ['자동차 부품', '금형/기계', '전자/반도체', '화학/소재', '식품 가공', '기타 제조'] },
        { key: 'employees', label: '직원 수', type: 'select', options: ['10명 미만', '10~30명', '30~50명', '50~100명', '100명 이상'] },
        { key: 'revenue', label: '최근 연매출', type: 'select', options: ['10억 미만', '10~50억', '50~100억', '100~300억', '300억 이상'] },
      ]
    },
    {
      title: '원가 구조 현황',
      fields: [
        { key: 'materialCost', label: '재료비 비중', type: 'select', options: ['30% 미만', '30~50%', '50~70%', '70% 이상'] },
        { key: 'laborCost', label: '인건비 비중', type: 'select', options: ['15% 미만', '15~25%', '25~40%', '40% 이상'] },
        { key: 'opMargin', label: '영업이익률', type: 'select', options: ['적자', '0~3%', '3~7%', '7~15%', '15% 이상'] },
      ]
    },
    {
      title: '운영 및 개선 영역',
      fields: [
        { key: 'mainProduct', label: '주력 제품 / 매출 비중 Top 3', type: 'textarea', placeholder: '1.\n2.\n3.' },
        { key: 'qualityIssue', label: '최근 1년 주요 품질·납기 이슈', type: 'textarea', placeholder: '예: 특정 공정의 불량률 상승, 특정 고객사 납기 지연' },
        { key: 'priority', label: '가장 시급한 개선 영역', type: 'select', options: ['원가 절감', '품질 향상', '조직 역량 강화', '마케팅/매출 확대', '디지털 전환'] },
      ]
    },
  ];

  const SurveyScreen = () => {
    const questions = surveyTrack === 'personal' ? personalQuestions : businessQuestions;
    const currentQ = questions[surveyStep];
    const progress = ((surveyStep + 1) / questions.length) * 100;
    const isLast = surveyStep === questions.length - 1;

    const handleChange = (key, value) => {
      setSurveyData(prev => ({ ...prev, [key]: value }));
    };

    return (
      <div className="pt-16 min-h-screen bg-white">
        {/* Progress bar */}
        <div className="sticky top-16 bg-white border-b border-slate-200 z-40">
          <div className="max-w-3xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-2 text-[12px]">
              <div className="text-slate-500">
                <span className="font-semibold text-slate-900">{surveyStep + 1}</span> / {questions.length} 단계
              </div>
              <div className="text-slate-500 tracking-wide uppercase text-[10px]">
                {surveyTrack === 'personal' ? 'Track A · 개인' : 'Track B · 기업'}
              </div>
            </div>
            <div className="h-1 bg-slate-100 overflow-hidden">
              <div className="h-full bg-slate-900 transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{currentQ.title}</h1>
          <p className="text-slate-500 mb-10 text-[14px]">아는 만큼 솔직하게 답변해주시면, 진단 정확도가 높아집니다.</p>

          <div className="space-y-8">
            {currentQ.fields.map((field) => (
              <div key={field.key}>
                <label className="block text-[14px] font-medium text-slate-900 mb-2">
                  {field.label}
                </label>
                {field.type === 'text' && (
                  <input
                    type="text"
                    value={surveyData[field.key] || ''}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-slate-900 focus:outline-none transition-colors text-[15px]"
                  />
                )}
                {field.type === 'textarea' && (
                  <textarea
                    value={surveyData[field.key] || ''}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-slate-900 focus:outline-none transition-colors text-[15px] resize-none"
                  />
                )}
                {field.type === 'select' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {field.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleChange(field.key, opt)}
                        className={`px-4 py-3 border text-[14px] text-left transition-all ${
                          surveyData[field.key] === opt
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 text-slate-700 hover:border-slate-400'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200">
            <button
              onClick={() => {
                if (surveyStep === 0) setCurrentScreen('survey-intro');
                else setSurveyStep(surveyStep - 1);
              }}
              className="px-5 py-3 text-slate-600 hover:text-slate-900 text-[14px] inline-flex items-center gap-1"
            >
              <ChevronLeft size={16} /> 이전
            </button>
            <button
              onClick={() => {
                if (isLast) setCurrentScreen('result');
                else setSurveyStep(surveyStep + 1);
              }}
              className="px-7 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2 text-[14px]"
            >
              {isLast ? '진단 결과 보기' : '다음'}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════
  // 스크린 4: 결과 대시보드 (무료)
  // ═══════════════════════════════════════════════════════════
  const ResultScreen = () => {
    const scores = {
      market: 72,
      cost: 58,
      quality: 81,
      org: 64,
      execution: 69
    };
    const totalScore = Math.round(Object.values(scores).reduce((a, b) => a + b) / 5);

    // 레이더차트용 좌표 계산
    const size = 280;
    const center = size / 2;
    const radius = 110;
    const categories = [
      { key: 'market', label: '시장성', score: scores.market },
      { key: 'cost', label: '원가 구조', score: scores.cost },
      { key: 'quality', label: '품질', score: scores.quality },
      { key: 'org', label: '조직 역량', score: scores.org },
      { key: 'execution', label: '실행력', score: scores.execution },
    ];
    const angleStep = (Math.PI * 2) / categories.length;
    const getPoint = (i, r) => {
      const angle = i * angleStep - Math.PI / 2;
      return { x: center + Math.cos(angle) * r, y: center + Math.sin(angle) * r };
    };
    const dataPoints = categories.map((c, i) => getPoint(i, (c.score / 100) * radius));
    const polygonPath = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

    return (
      <div className="pt-16 min-h-screen bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 text-[11px] tracking-[0.15em] uppercase mb-4">
              <CheckCircle2 size={12} /> 자가진단 완료
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              {surveyData.name || '고객'}님의 종합 경쟁력 진단
            </h1>
            <p className="text-slate-500">5개 영역에 걸친 종합 점수입니다. 이강락 대표 방법론을 기반으로 분석되었습니다.</p>
          </div>

          {/* 종합 점수 */}
          <div className="grid lg:grid-cols-5 gap-6 mb-8">
            <div className="lg:col-span-2 bg-slate-900 text-white p-8">
              <div className="text-[11px] tracking-[0.2em] uppercase text-slate-400 mb-3">Overall Score</div>
              <div className="flex items-baseline gap-2 mb-4">
                <div className="text-7xl font-bold tabular-nums">{totalScore}</div>
                <div className="text-2xl text-slate-500">/ 100</div>
              </div>
              <div className="text-[13px] text-slate-300 leading-relaxed mb-6">
                중상 수준의 종합 경쟁력을 보유하고 있습니다. 특히 품질 영역이 강점이며, 원가 구조에서 개선 여지가 발견됩니다.
              </div>
              <div className="pt-6 border-t border-slate-700 text-[11px] text-slate-400 tracking-wide">
                TIER · B+ (상위 35%)
              </div>
            </div>

            {/* 레이더 차트 */}
            <div className="lg:col-span-3 bg-white p-8 border border-slate-200">
              <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-4">5대 영역 분석</div>
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <svg width={size} height={size} className="shrink-0">
                  {[0.25, 0.5, 0.75, 1].map((f, i) => (
                    <polygon
                      key={i}
                      points={categories.map((_, idx) => {
                        const p = getPoint(idx, radius * f);
                        return `${p.x},${p.y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth={1}
                    />
                  ))}
                  {categories.map((_, i) => {
                    const p = getPoint(i, radius);
                    return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} stroke="#e2e8f0" strokeWidth={1} />;
                  })}
                  <polygon points={polygonPath} fill="rgba(15, 23, 42, 0.1)" stroke="#0f172a" strokeWidth={2} />
                  {dataPoints.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r={4} fill="#0f172a" />
                  ))}
                  {categories.map((c, i) => {
                    const p = getPoint(i, radius + 25);
                    return (
                      <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" className="text-[11px] fill-slate-600 font-medium">
                        {c.label}
                      </text>
                    );
                  })}
                </svg>
                <div className="space-y-2 w-full">
                  {categories.map((c) => (
                    <div key={c.key} className="flex items-center gap-3">
                      <div className="text-[12px] text-slate-600 w-20">{c.label}</div>
                      <div className="flex-1 h-2 bg-slate-100 overflow-hidden">
                        <div className="h-full bg-slate-900" style={{ width: `${c.score}%` }}></div>
                      </div>
                      <div className="text-[13px] font-bold text-slate-900 tabular-nums w-10 text-right">{c.score}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top 3 리스크 */}
          <div className="bg-white border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-amber-400"></div>
              <h2 className="text-xl font-bold text-slate-900">AI가 발견한 Top 3 리스크</h2>
            </div>
            <div className="space-y-4">
              {[
                { n: '01', t: '원가 구조 불투명성', d: '재료비 비중이 산업 평균 대비 높게 추정됩니다. 구매 단가 협상과 대체 공급처 발굴이 우선 과제로 보입니다.', tag: '즉시' },
                { n: '02', t: '조직 역량 대비 확장 속도', d: '매출 성장 대비 핵심 인력 확보가 지연된 패턴이 감지됩니다. 기술직 채용 파이프라인 강화가 필요합니다.', tag: '90일 내' },
                { n: '03', t: '품질 관리 시스템화 미흡', d: '품질 이슈가 공정 중심이 아닌 인력 중심으로 관리되고 있을 가능성이 있습니다. 린 관점의 프로세스 표준화를 권장합니다.', tag: '6개월 내' }
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-5 p-5 bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="text-2xl font-bold text-slate-300 tabular-nums shrink-0">{r.n}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div className="font-semibold text-slate-900">{r.t}</div>
                      <div className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-semibold tracking-wider shrink-0">{r.tag}</div>
                    </div>
                    <div className="text-[13px] text-slate-600 leading-relaxed">{r.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA: 상세 리포트 */}
          <div className="relative bg-slate-900 text-white p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{
              background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)'
            }}></div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-slate-900 text-[11px] tracking-[0.15em] uppercase mb-4">
                  <Sparkles size={12} /> AI 상세 리포트
                </div>
                <h2 className="text-3xl font-bold mb-4 leading-tight">
                  20페이지 분량의<br />상세 진단 리포트를 받아보세요
                </h2>
                <ul className="space-y-2 text-[14px] text-slate-300 mb-2">
                  <li className="flex items-center gap-2"><Check size={14} className="text-amber-400" /> 이강락 대표 방법론 기반 심층 분석</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-amber-400" /> 30일·90일·1년 실행 로드맵</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-amber-400" /> Top 5 개선 과제와 예상 효과</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-amber-400" /> PDF 즉시 다운로드 + 이메일 발송</li>
                </ul>
              </div>
              <div className="text-right">
                <div className="text-[13px] text-slate-400 line-through mb-1">49,000원</div>
                <div className="text-5xl font-bold mb-1 text-amber-400">29,000원</div>
                <div className="text-[11px] text-slate-400 tracking-wider mb-6">얼리버드 40% 할인</div>
                <button
                  onClick={() => setCurrentScreen('report')}
                  className="w-full px-6 py-4 bg-amber-400 text-slate-900 font-bold hover:bg-amber-300 transition-colors inline-flex items-center justify-center gap-2"
                >
                  상세 리포트 받기
                  <ArrowRight size={18} />
                </button>
                <div className="text-[11px] text-slate-500 mt-3">생성까지 약 2~5분 소요</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════
  // 스크린 5: AI 리포트 미리보기
  // ═══════════════════════════════════════════════════════════
  const ReportScreen = () => (
    <div className="pt-16 min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setCurrentScreen('result')} className="text-sm text-slate-500 hover:text-slate-900 inline-flex items-center gap-1">
            <ChevronLeft size={16} /> 진단 결과로
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-slate-300 bg-white text-[13px] inline-flex items-center gap-2 hover:bg-slate-50">
              <Download size={14} /> PDF 다운로드
            </button>
            <button
              onClick={() => setCurrentScreen('booking')}
              className="px-4 py-2 bg-slate-900 text-white text-[13px] inline-flex items-center gap-2 hover:bg-slate-800"
            >
              <Video size={14} /> 전문가 세션 예약
            </button>
          </div>
        </div>

        {/* 리포트 PDF 느낌 */}
        <div className="bg-white shadow-xl">
          {/* 리포트 표지 */}
          <div className="bg-slate-900 text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{
              background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)'
            }}></div>
            <div className="relative">
              <div className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">KR Consulting Online · AI Report</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-8">Business Diagnostic Report · v1.0</div>
              <h1 className="text-4xl font-bold mb-3 leading-tight">
                {surveyData.company || surveyData.name || '고객사'}<br />종합 경쟁력 진단 리포트
              </h1>
              <div className="text-slate-400 mb-12 text-[14px]">Prepared exclusively for {surveyData.name || '홍길동'}</div>
              <div className="pt-8 border-t border-slate-700 grid grid-cols-3 gap-8 text-[12px]">
                <div>
                  <div className="text-slate-500 uppercase tracking-wider text-[10px] mb-1">발행일</div>
                  <div>2026년 4월 17일</div>
                </div>
                <div>
                  <div className="text-slate-500 uppercase tracking-wider text-[10px] mb-1">방법론</div>
                  <div>KR Methodology v3.2</div>
                </div>
                <div>
                  <div className="text-slate-500 uppercase tracking-wider text-[10px] mb-1">분량</div>
                  <div>약 20 페이지</div>
                </div>
              </div>
            </div>
          </div>

          {/* 목차 */}
          <div className="p-12 border-b border-slate-200">
            <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-4">Table of Contents</div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
              {[
                '1. Executive Summary',
                '2. 종합 경쟁력 평가',
                '3. 원가 구조 분석',
                '4. 품질·프로세스 진단',
                '5. Top 5 개선 과제',
                '6. 30 / 90 / 365일 실행 로드맵',
                '7. 전문가 세션 추천 주제',
                '8. 참고 자료 및 방법론'
              ].map((t, i) => (
                <div key={i} className="flex items-baseline justify-between gap-3 text-[14px] py-1.5 border-b border-dotted border-slate-200">
                  <span className="text-slate-700">{t}</span>
                  <span className="text-slate-400 tabular-nums">{String((i + 1) * 2 + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Summary 샘플 */}
          <div className="p-12 border-b border-slate-200">
            <div className="grid grid-cols-12 gap-6 items-start mb-8">
              <div className="col-span-1 text-6xl font-bold text-slate-200 tabular-nums">01</div>
              <div className="col-span-11">
                <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-2">Chapter 01</div>
                <h2 className="text-3xl font-bold text-slate-900">Executive Summary</h2>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 border-l-4 border-slate-900 p-6">
                <div className="text-[11px] tracking-[0.15em] uppercase text-slate-500 mb-2">핵심 진단</div>
                <p className="text-[15px] text-slate-800 leading-relaxed">
                  귀사는 <strong>품질 부문에서 업계 상위권</strong>의 역량을 보유하고 있으나,
                  <strong> 원가 구조의 투명성</strong>과 <strong>조직 확장 속도</strong>에서 개선 여지가 있습니다.
                  향후 6개월 내 원가 구조 정밀 진단과 핵심 인력 확보를 병행할 경우,
                  매출 대비 영업이익률을 현재의 1.5배 수준으로 끌어올릴 수 있을 것으로 추정됩니다.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { n: '강점', v: '품질 시스템', c: 'emerald' },
                  { n: '기회', v: '원가 최적화', c: 'amber' },
                  { n: '과제', v: '조직 역량', c: 'rose' }
                ].map((k, i) => (
                  <div key={i} className="border border-slate-200 p-5">
                    <div className={`text-[10px] tracking-[0.2em] uppercase text-${k.c}-600 mb-2`}>{k.n}</div>
                    <div className="text-lg font-bold text-slate-900">{k.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top 5 개선 과제 샘플 */}
          <div className="p-12 border-b border-slate-200">
            <div className="grid grid-cols-12 gap-6 items-start mb-8">
              <div className="col-span-1 text-6xl font-bold text-slate-200 tabular-nums">05</div>
              <div className="col-span-11">
                <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-2">Chapter 05</div>
                <h2 className="text-3xl font-bold text-slate-900">Top 5 개선 과제</h2>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { p: 'P1', t: '재료비 구조 정밀 재분석', imp: '매우 높음', effort: '중간', effect: '-8~12%' },
                { p: 'P2', t: '핵심 공정 표준화 (린 방식)', imp: '높음', effort: '중간', effect: '불량률 -40%' },
                { p: 'P3', t: '기술직 3인 순차 채용', imp: '높음', effort: '높음', effect: '생산능력 +25%' },
                { p: 'P4', t: 'ERP 원가 모듈 리모델링', imp: '중간', effort: '낮음', effect: '가시성 확보' },
                { p: 'P5', t: '주요 공급처 이원화', imp: '중간', effort: '중간', effect: 'BCP 강화' }
              ].map((x, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 items-center p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="col-span-1 text-xs font-bold text-white bg-slate-900 w-10 h-10 flex items-center justify-center">{x.p}</div>
                  <div className="col-span-5 text-[14px] font-medium text-slate-900">{x.t}</div>
                  <div className="col-span-2 text-[12px] text-slate-600">중요도: <span className="font-semibold">{x.imp}</span></div>
                  <div className="col-span-2 text-[12px] text-slate-600">난이도: <span className="font-semibold">{x.effort}</span></div>
                  <div className="col-span-2 text-[12px] text-emerald-700 font-bold text-right">{x.effect}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 다음 단계 유도 */}
          <div className="p-12 bg-gradient-to-br from-stone-50 to-amber-50/40">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="relative shrink-0">
                <div className="absolute -top-2 -left-2 w-full h-full bg-amber-200"></div>
                <img
                  src="/leekangrak.jpg"
                  alt="이강락 대표"
                  className="relative w-28 h-28 md:w-36 md:h-36 object-cover object-top"
                />
              </div>
              <div className="text-center md:text-left flex-1">
                <Quote size={28} className="text-amber-500 mx-auto md:mx-0 mb-3" strokeWidth={1.5} />
                <p className="text-lg text-slate-800 italic mb-3 leading-relaxed">
                  이 리포트는 시작점입니다. 30년 경험을 바탕으로 한 전문가의 직접적인 판단이 더해질 때,
                  귀사만의 맞춤 실행 전략이 완성됩니다.
                </p>
                <div className="text-[13px] text-slate-600 font-semibold mb-6">— 이강락, KR컨설팅 대표</div>
                <button
                  onClick={() => setCurrentScreen('booking')}
                  className="px-7 py-4 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.5)]"
                >
                  <Video size={18} />
                  전문가 1:1 세션 예약하기
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════
  // 스크린 6: 전문가 세션 예약
  // ═══════════════════════════════════════════════════════════
  const sessions = [
    { id: 'basic', name: '베이식 세션', duration: '30분', who: '선임 컨설턴트', price: 150000, features: ['AI 리포트 기반 Q&A', '즉시 실행 가능한 조언 2~3개', 'Zoom 1:1 진행'] },
    { id: 'standard', name: '스탠다드 세션', duration: '60분', who: '선임 컨설턴트', price: 270000, features: ['리포트 심층 해설', '맞춤 개선 우선순위 3가지', '이메일 후속 요약본 제공', 'Zoom 1:1 진행'] },
    { id: 'premium', name: '프리미엄 세션', duration: '60분', who: '이강락 대표', price: 500000, highlight: true, features: ['이강락 대표 직접 진행', '선임 컨설턴트 1명 동석', '실행 로드맵 공동 수립', '30일 내 1회 이메일 질의 응답'] },
    { id: 'deep', name: '심화 패키지', duration: '90분 × 3회', who: '이강락 대표 + 팀', price: 1980000, features: ['이강락 대표 + 컨설턴트 2명', '3주간 집중 밀착 컨설팅', '맞춤 체크리스트 개발', '분기별 후속 점검 1회 무료'] }
  ];

  const BookingScreen = () => (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <button onClick={() => setCurrentScreen('report')} className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-flex items-center gap-1">
          <ChevronLeft size={16} /> 리포트로
        </button>
        <div className="text-center mb-12">
          <div className="text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-3">Expert 1:1 Session</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            30년 노하우, 이제 직접 만나보세요
          </h1>
          <p className="text-slate-600">목적과 예산에 맞는 세션을 선택하세요. 모든 세션은 Zoom으로 진행됩니다.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sessions.map((s) => (
            <button
              key={s.id}
              onClick={() => { setSelectedSession(s); setCurrentScreen('checkout'); }}
              className={`relative text-left p-6 border-2 transition-all hover:-translate-y-1 ${
                s.highlight
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white hover:border-slate-400'
              }`}
            >
              {s.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-amber-400 text-slate-900 text-[10px] tracking-[0.2em] uppercase font-bold">
                  ⭐ 추천
                </div>
              )}
              <div className={`text-[11px] tracking-[0.15em] uppercase mb-2 ${s.highlight ? 'text-amber-400' : 'text-slate-500'}`}>
                {s.duration} · {s.who}
              </div>
              <div className={`text-xl font-bold mb-3 ${s.highlight ? 'text-white' : 'text-slate-900'}`}>
                {s.name}
              </div>
              <div className={`text-2xl font-bold mb-5 tabular-nums ${s.highlight ? 'text-amber-400' : 'text-slate-900'}`}>
                {s.price.toLocaleString()}<span className="text-sm font-normal">원</span>
              </div>
              <ul className="space-y-2 mb-6 text-[13px]">
                {s.features.map((f, i) => (
                  <li key={i} className={`flex items-start gap-2 ${s.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                    <Check size={14} className={`mt-0.5 shrink-0 ${s.highlight ? 'text-amber-400' : 'text-emerald-600'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className={`w-full py-2.5 text-center text-[13px] font-medium ${
                s.highlight
                  ? 'bg-amber-400 text-slate-900'
                  : 'bg-slate-100 text-slate-900'
              }`}>
                이 세션 선택하기
              </div>
            </button>
          ))}
        </div>

        {/* 안내 */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 p-8 bg-slate-50">
          {[
            { icon: Calendar, t: '유연한 일정', d: '결제 후 캘린더에서 원하는 일시 선택' },
            { icon: Video, t: 'Zoom 자동 발송', d: '예약 확정 시 Zoom 링크 즉시 이메일 발송' },
            { icon: Shield, t: '안전한 환불', d: '48시간 전까지 전액 환불 가능' }
          ].map((g, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center shrink-0">
                <g.icon size={16} />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-slate-900 mb-1">{g.t}</div>
                <div className="text-[12px] text-slate-600">{g.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════
  // 스크린 7: 결제 (목업)
  // ═══════════════════════════════════════════════════════════
  const CheckoutScreen = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [processing, setProcessing] = useState(false);
    const [done, setDone] = useState(false);

    const handlePayment = () => {
      setProcessing(true);
      setTimeout(() => {
        setProcessing(false);
        setDone(true);
      }, 2000);
    };

    if (done) {
      return (
        <div className="pt-16 min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center px-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle2 size={40} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">예약이 완료되었습니다</h1>
            <p className="text-slate-600 mb-8">
              {selectedSession?.name} · {selectedSession?.duration}<br />
              Zoom 링크가 이메일로 발송되었습니다.
            </p>
            <div className="bg-white border border-slate-200 p-6 mb-6 text-left space-y-2 text-[13px]">
              <div className="flex justify-between"><span className="text-slate-500">예약 번호</span><span className="font-mono font-semibold">KR-20260417-0042</span></div>
              <div className="flex justify-between"><span className="text-slate-500">세션</span><span className="font-semibold">{selectedSession?.name}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">담당</span><span className="font-semibold">{selectedSession?.who}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">결제 금액</span><span className="font-bold text-slate-900">{selectedSession?.price.toLocaleString()}원</span></div>
            </div>
            <button
              onClick={() => { setCurrentScreen('landing'); setSurveyStep(0); setSurveyData({}); setDone(false); setSelectedSession(null); }}
              className="w-full px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
            >
              홈으로 돌아가기
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-16 min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button onClick={() => setCurrentScreen('booking')} className="text-sm text-slate-500 hover:text-slate-900 mb-6 inline-flex items-center gap-1">
            <ChevronLeft size={16} /> 세션 선택으로
          </button>
          <h1 className="text-3xl font-bold text-slate-900 mb-8">결제</h1>
          <div className="grid lg:grid-cols-5 gap-6">
            {/* 주문 정보 */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white border border-slate-200 p-6">
                <div className="text-[11px] tracking-[0.15em] uppercase text-slate-500 mb-4">고객 정보</div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] text-slate-600 mb-1.5">이름</label>
                    <input type="text" defaultValue={surveyData.name || ''} className="w-full px-4 py-2.5 border border-slate-300 focus:border-slate-900 focus:outline-none text-[14px]" />
                  </div>
                  <div>
                    <label className="block text-[13px] text-slate-600 mb-1.5">이메일 (Zoom 링크 수신)</label>
                    <input type="email" placeholder="email@company.com" className="w-full px-4 py-2.5 border border-slate-300 focus:border-slate-900 focus:outline-none text-[14px]" />
                  </div>
                  <div>
                    <label className="block text-[13px] text-slate-600 mb-1.5">연락처</label>
                    <input type="tel" placeholder="010-0000-0000" className="w-full px-4 py-2.5 border border-slate-300 focus:border-slate-900 focus:outline-none text-[14px]" />
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-6">
                <div className="text-[11px] tracking-[0.15em] uppercase text-slate-500 mb-4">결제 수단</div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { k: 'card', label: '신용카드' },
                    { k: 'kakao', label: '카카오페이' },
                    { k: 'toss', label: '토스' }
                  ].map((m) => (
                    <button
                      key={m.k}
                      onClick={() => setPaymentMethod(m.k)}
                      className={`px-4 py-3 border text-[13px] transition-all ${
                        paymentMethod === m.k
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 주문 요약 */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 p-6 sticky top-24">
                <div className="text-[11px] tracking-[0.15em] uppercase text-slate-500 mb-4">주문 요약</div>
                <div className="pb-4 border-b border-slate-200 mb-4">
                  <div className="font-semibold text-slate-900 mb-1">{selectedSession?.name}</div>
                  <div className="text-[12px] text-slate-500">{selectedSession?.duration} · {selectedSession?.who}</div>
                </div>
                <div className="space-y-2 text-[13px] mb-4">
                  <div className="flex justify-between"><span className="text-slate-600">상품 금액</span><span className="tabular-nums">{selectedSession?.price.toLocaleString()}원</span></div>
                  <div className="flex justify-between text-emerald-700"><span>얼리버드 할인</span><span className="tabular-nums">-0원</span></div>
                </div>
                <div className="pt-4 border-t border-slate-200 flex justify-between items-baseline mb-6">
                  <div className="text-[13px] text-slate-600">최종 결제 금액</div>
                  <div className="text-2xl font-bold text-slate-900 tabular-nums">{selectedSession?.price.toLocaleString()}<span className="text-sm">원</span></div>
                </div>
                <button
                  onClick={handlePayment}
                  disabled={processing}
                  className="w-full py-3.5 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
                >
                  {processing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      결제 처리 중...
                    </>
                  ) : (
                    <>
                      <CreditCard size={16} />
                      {selectedSession?.price.toLocaleString()}원 결제하기
                    </>
                  )}
                </button>
                <div className="text-[11px] text-slate-400 text-center mt-3">
                  ※ 48시간 전까지 전액 환불 가능합니다
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400">
                  <Shield size={12} />
                  토스페이먼츠를 통한 안전 결제
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════
  // 스크린 8: 고객 사례 (페르소나 후기)
  // ═══════════════════════════════════════════════════════════
  const caseStudies = [
    {
      id: 1,
      initial: '김',
      name: '김정훈',
      age: 47,
      segment: '중소기업 대표',
      industry: '자동차 부품 제조 · 매출 80억',
      tagColor: '#00a9f4',
      quote: '이 대표님 말 한마디에, 30년 버틴 원가 구조가 무너졌습니다. 3개월 만에 영업이익률이 3배가 됐습니다.',
      metrics: [
        { label: '원가', value: '-22%' },
        { label: '불량률', value: '-58%' },
        { label: '영업이익률', value: '8% → 24%' }
      ],
      duration: '컨설팅 6개월'
    },
    {
      id: 2,
      initial: '박',
      name: '박서연',
      age: 32,
      segment: '창업 준비자',
      industry: '친환경 간편식 론칭 예정',
      tagColor: '#10b981',
      quote: '창업 3개월 전, 이 대표님의 진단을 받지 않았다면 저는 전 재산을 날렸을 겁니다.',
      metrics: [
        { label: '아이템', value: '전면 피봇' },
        { label: '초기 투자', value: '-60%' },
        { label: '6개월 월매출', value: '1.2억 달성' }
      ],
      duration: 'AI 리포트 + 1회 세션'
    },
    {
      id: 3,
      initial: '이',
      name: '이상현',
      age: 52,
      segment: '대기업 협력사 생산팀장',
      industry: '삼성전자 1차 밴더',
      tagColor: '#f59e0b',
      quote: '대기업에서 20년간 배운 것보다 많은 것을, 이 대표님은 단 3번의 미팅에서 가르쳐주셨습니다.',
      metrics: [
        { label: '공정 표준화', value: '14 공정' },
        { label: '생산성', value: '+35%' },
        { label: '특근비', value: '-70%' }
      ],
      duration: '프리미엄 세션 3회'
    },
    {
      id: 4,
      initial: '정',
      name: '정미경',
      age: 41,
      segment: '1인 사업자',
      industry: '수제 공예 공방 · 확장 단계',
      tagColor: '#8b5cf6',
      quote: '혼자 버티던 공방이, 이 대표님이 주신 한 권의 체크리스트로 시스템이 되었습니다.',
      metrics: [
        { label: '조직 규모', value: '1명 → 7명' },
        { label: '재고 회전율', value: '3배' },
        { label: '직영점', value: '3호점 오픈' }
      ],
      duration: '심화 패키지'
    },
    {
      id: 5,
      initial: '최',
      name: '최영호',
      age: 64,
      segment: '중견기업 CEO · 24년 고객',
      industry: '정밀 기계 제조 · 매출 380억',
      tagColor: '#ef4444',
      quote: '1998년부터 지금까지, 이 대표님은 제 경영의 나침반이었습니다. 단 한 번도 헤어진 적이 없습니다.',
      metrics: [
        { label: '매출 성장', value: '5억 → 380억' },
        { label: '해외 진출', value: '4개국' },
        { label: '2세 경영', value: '성공 승계' }
      ],
      duration: '24년 장기 파트너십',
      highlight: true
    }
  ];

  const CasesScreen = () => (
    <div className="pt-20 bg-white min-h-screen">
      {/* 헤더 섹션 */}
      <section className="bg-[#051c2c] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 pb-20">
          <button onClick={() => setCurrentScreen('landing')} className="text-[12px] text-white/50 hover:text-white mb-10 inline-flex items-center gap-1.5 tracking-wide transition-colors">
            <ChevronLeft size={14} /> 홈으로
          </button>
          <div className="flex items-center gap-3 mb-8 text-[10px] tracking-[0.3em] uppercase text-[#00a9f4]">
            <div className="w-6 h-px bg-[#00a9f4]"></div>
            Client Stories
            <span className="text-white/30">—</span>
            <span className="text-white/70">Real Voices</span>
          </div>
          <h1 className="text-[clamp(2rem,3.8vw,3.2rem)] font-light text-white leading-[1.18] tracking-[-0.035em] mb-6 max-w-4xl">
            <span className="headline-kr-bold">3,000명의 대표가</span><br/>
            <span className="headline-kr text-white/75">이 대표님에게 <span className="text-[#00a9f4] font-medium">경영의 답</span>을 구했습니다.</span>
          </h1>
          <p className="text-[15px] text-white/60 leading-[1.75] max-w-xl font-light">
            대기업 협력사부터 1인 창업자까지, 규모와 업종을 넘어 공통된 한 가지는 &mdash;
            <span className="text-white/85"> 이 대표님을 만난 뒤 경영이 달라졌다</span>는 것.
          </p>
        </div>
      </section>

      {/* 사례 그리드 */}
      <section className="bg-[#f3f4f4] py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-6">
            {caseStudies.map((c, i) => (
              <article
                key={c.id}
                className={`group bg-white p-8 lg:p-10 relative transition-all hover:shadow-xl hover:-translate-y-1 ${c.highlight ? 'lg:col-span-2 bg-[#051c2c] text-white' : ''}`}
              >
                {/* 페르소나 헤더 */}
                <div className="flex items-start justify-between mb-8 pb-8 border-b border-slate-200/50">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 flex items-center justify-center text-white text-xl font-semibold shrink-0"
                      style={{ backgroundColor: c.tagColor }}
                    >
                      {c.initial}
                    </div>
                    <div>
                      <div className={`text-[18px] font-semibold ${c.highlight ? 'text-white' : 'text-[#051c2c]'} tracking-tight`}>
                        {c.name} <span className={`text-[13px] font-normal ${c.highlight ? 'text-white/50' : 'text-slate-400'} ml-1`}>({c.age}세)</span>
                      </div>
                      <div className={`text-[12px] ${c.highlight ? 'text-[#00a9f4]' : 'text-slate-500'} tracking-wide mt-0.5`}>
                        {c.segment} · {c.industry}
                      </div>
                    </div>
                  </div>
                  <div className={`text-[9px] tracking-[0.25em] uppercase ${c.highlight ? 'text-white/40' : 'text-slate-400'} text-right`}>
                    Case<br/>
                    <span className="font-serif-en text-[14px] tracking-normal">
                      {String(c.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* 인용문 */}
                <Quote size={32} className={`${c.highlight ? 'text-[#00a9f4]' : 'text-[#051c2c]/20'} mb-4`} strokeWidth={1.5} />
                <blockquote className={`text-[18px] lg:text-[20px] font-light leading-[1.55] tracking-tight mb-10 ${c.highlight ? 'text-white' : 'text-[#051c2c]'}`}>
                  &ldquo;{c.quote}&rdquo;
                </blockquote>

                {/* 메트릭 */}
                <div className={`grid grid-cols-3 gap-4 pt-6 border-t ${c.highlight ? 'border-white/15' : 'border-slate-200/70'}`}>
                  {c.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className={`text-[10px] tracking-[0.2em] uppercase ${c.highlight ? 'text-white/50' : 'text-slate-400'} mb-2`}>
                        {m.label}
                      </div>
                      <div className={`font-serif-en text-[22px] lg:text-[26px] leading-none tracking-tight ${c.highlight ? 'text-[#00a9f4]' : 'text-[#051c2c]'}`}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 하단 duration */}
                <div className={`mt-8 text-[11px] tracking-[0.15em] uppercase ${c.highlight ? 'text-white/40' : 'text-slate-400'}`}>
                  {c.duration}
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-[13px] text-slate-500 mb-5 tracking-wide">다음 사례의 주인공은 당신일 수 있습니다.</p>
            <button
              onClick={() => setCurrentScreen('survey-intro')}
              className="group inline-flex items-center gap-3 text-[14px] font-medium text-[#051c2c] border-b border-[#051c2c] pb-2 hover:text-[#00a9f4] hover:border-[#00a9f4] transition-colors tracking-wide"
            >
              무료 자가진단으로 시작하기
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  // ═══════════════════════════════════════════════════════════
  // 스크린 9: 인사이트 (기사 리스트)
  // ═══════════════════════════════════════════════════════════
  const insights = [
    {
      category: 'Cost Management',
      title: '원가 70% 절감은 어떻게 가능했는가',
      subtitle: '현장에서 찾아낸 7가지 낭비를 해체한 실증 사례',
      read: '8분',
      date: '2026.04.12'
    },
    {
      category: 'Organization',
      title: '핵심 인재를 떠나지 않게 하는 "따뜻한 시스템"',
      subtitle: '24년 동행 고객사가 공통적으로 가진 한 가지 문화',
      read: '6분',
      date: '2026.04.05'
    },
    {
      category: 'Strategy',
      title: '대기업이 아닌데 대기업 품질을 갖는다는 것',
      subtitle: '표준화를 거부한 조직이 결국 무너지는 이유',
      read: '10분',
      date: '2026.03.28'
    },
    {
      category: 'Leadership',
      title: '창업자의 가장 흔한 착각 3가지',
      subtitle: '3,000건 컨설팅에서 반복적으로 발견된 패턴',
      read: '5분',
      date: '2026.03.20'
    }
  ];

  const InsightsScreen = () => (
    <div className="pt-20 bg-white min-h-screen">
      <section className="bg-[#051c2c] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 pb-20">
          <button onClick={() => setCurrentScreen('landing')} className="text-[12px] text-white/50 hover:text-white mb-10 inline-flex items-center gap-1.5 tracking-wide transition-colors">
            <ChevronLeft size={14} /> 홈으로
          </button>
          <div className="flex items-center gap-3 mb-8 text-[10px] tracking-[0.3em] uppercase text-[#00a9f4]">
            <div className="w-6 h-px bg-[#00a9f4]"></div>
            Insights
            <span className="text-white/30">—</span>
            <span className="text-white/70">Field Notes</span>
          </div>
          <h1 className="text-[clamp(2rem,3.8vw,3.2rem)] font-light text-white leading-[1.18] tracking-[-0.035em] mb-6 max-w-4xl">
            <span className="headline-kr-bold">현장에서만 길러진</span><br/>
            <span className="headline-kr text-white/75"><span className="text-[#00a9f4] font-medium">경영의 언어</span>를 기록합니다.</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="divide-y divide-slate-200">
            {insights.map((it, i) => (
              <article
                key={i}
                className="group py-10 grid grid-cols-12 gap-6 cursor-pointer hover:bg-slate-50 transition-colors -mx-4 px-4"
              >
                <div className="col-span-12 md:col-span-2">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#00a9f4] font-medium mb-2">
                    {it.category}
                  </div>
                  <div className="text-[11px] text-slate-400 font-serif-en">{it.date}</div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="text-[22px] lg:text-[26px] font-semibold text-[#051c2c] leading-tight tracking-tight mb-2 group-hover:text-[#00a9f4] transition-colors">
                    {it.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed font-light">
                    {it.subtitle}
                  </p>
                  <div className="mt-4 text-[11px] tracking-[0.15em] uppercase text-slate-400">
                    Read · {it.read}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-1 flex items-start justify-end">
                  <ArrowRight size={18} className="text-[#051c2c] group-hover:translate-x-1 group-hover:text-[#00a9f4] transition-all" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // ═══════════════════════════════════════════════════════════
  // 화면 라우팅
  // ═══════════════════════════════════════════════════════════
  const screens = {
    landing: <LandingScreen />,
    'survey-intro': <SurveyIntroScreen />,
    survey: <SurveyScreen />,
    result: <ResultScreen />,
    report: <ReportScreen />,
    booking: <BookingScreen />,
    checkout: <CheckoutScreen />,
    cases: <CasesScreen />,
    insights: <InsightsScreen />
  };

  return (
    <div className="font-sans antialiased text-slate-900 bg-white" style={{
      fontFamily: "'Pretendard', 'Noto Sans KR', -apple-system, system-ui, sans-serif"
    }}>
      <Nav />
      {screens[currentScreen]}

      {/* 플로팅 데모 진행 인디케이터 (교수님 시연용) */}
      <div className="fixed bottom-4 right-4 bg-slate-900 text-white text-[11px] px-3 py-2 shadow-xl z-50 hidden md:flex items-center gap-2 tracking-wide">
        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
        DEMO · {currentScreen.toUpperCase()}
      </div>
    </div>
  );
}
