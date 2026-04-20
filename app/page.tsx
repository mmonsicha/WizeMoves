'use client';

// Triggering re-compilation
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  MessageCircle, 
  LightbulbOff, 
  Users, 
  Star, 
  Camera, 
  Video, 
  ChevronRight,
  MessageSquareOff,
  TrendingDown,
  Info,
  Presentation,
  LayoutDashboard,
  MonitorPlay,
  Cpu,
  Quote,
  ArrowRight,
  Check
} from 'lucide-react';

const Counter = ({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Tooltip = ({ text, children }: { text: string, children: React.ReactNode }) => {
  return (
    <div className="group relative flex items-center gap-1.5">
      {children}
      <Info className="w-4 h-4 text-slate-500 group-hover:text-slate-300 cursor-help transition-colors shrink-0" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 bg-slate-800 text-xs text-slate-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-center shadow-xl border border-white/10 pointer-events-none">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
      </div>
    </div>
  );
};

const SectionTexture = ({ variant = 'mixed' }: { variant?: 'purple' | 'gold' | 'mixed' }) => {
  const palette = {
    purple: {
      primary: 'rgba(109, 40, 217, 0.24)',
      secondary: 'rgba(109, 40, 217, 0.14)',
      accent: 'rgba(245, 158, 11, 0.14)',
      line: 'rgba(255, 255, 255, 0.55)',
      ring: 'rgba(255, 255, 255, 0.36)',
    },
    gold: {
      primary: 'rgba(245, 158, 11, 0.26)',
      secondary: 'rgba(245, 158, 11, 0.14)',
      accent: 'rgba(109, 40, 217, 0.14)',
      line: 'rgba(255, 255, 255, 0.58)',
      ring: 'rgba(255, 255, 255, 0.34)',
    },
    mixed: {
      primary: 'rgba(109, 40, 217, 0.2)',
      secondary: 'rgba(245, 158, 11, 0.18)',
      accent: 'rgba(109, 40, 217, 0.14)',
      line: 'rgba(255, 255, 255, 0.56)',
      ring: 'rgba(255, 255, 255, 0.34)',
    },
  }[variant];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle at 14% 20%, ${palette.primary}, transparent 48%),
            radial-gradient(circle at 86% 76%, ${palette.secondary}, transparent 45%),
            radial-gradient(circle at 75% 26%, ${palette.accent}, transparent 40%)
          `,
        }}
      />
      <div
        className="absolute -left-20 top-8 h-64 w-64 rounded-full blur-2xl"
        style={{ backgroundColor: palette.primary }}
      />
      <div
        className="absolute -right-24 bottom-6 h-72 w-72 rounded-full blur-2xl"
        style={{ backgroundColor: palette.secondary }}
      />
      <div
        className="absolute left-6 top-8 h-48 w-48 rounded-full border"
        style={{ borderColor: palette.ring }}
      />
      <div
        className="absolute left-20 top-20 h-28 w-28 rounded-full border"
        style={{ borderColor: palette.ring }}
      />
      <div
        className="absolute right-8 bottom-10 h-56 w-56 rounded-full border"
        style={{ borderColor: palette.ring }}
      />
      <div
        className="absolute right-20 bottom-20 h-32 w-32 rounded-full border"
        style={{ borderColor: palette.ring }}
      />
      <div
        className="absolute left-8 top-16 h-24 w-40 opacity-35"
        style={{
          backgroundImage: `radial-gradient(${palette.line} 1.1px, transparent 1.5px)`,
          backgroundSize: '12px 12px',
        }}
      />
      <div
        className="absolute right-8 bottom-16 h-20 w-32 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(125deg, ${palette.line} 0 1px, transparent 1px 11px)`,
        }}
      />
      <div className="absolute left-0 top-1/2 h-24 w-20 -translate-y-1/2 bg-gradient-to-r from-white/20 to-transparent" />
      <div className="absolute right-0 top-1/2 h-24 w-20 -translate-y-1/2 bg-gradient-to-l from-white/20 to-transparent" />
    </div>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { label: 'จุดเด่น', id: 'why-wizemoves' },
    { label: 'แพ็กเกจ', id: 'packages' },
    { label: 'บริการเสริม', id: 'extra-services' },
    { label: 'รีวิวลูกค้า', id: 'testimonials' },
    { label: 'คำถามที่พบบ่อย', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#6D28D9]/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[#F59E0B]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#F59E0B]/5 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-100 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="text-2xl font-bold bg-gradient-to-r from-[#6D28D9] to-[#F59E0B] bg-clip-text text-transparent hover:opacity-85 transition-opacity"
          >
            WizeMoves
          </button>
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-slate-600 hover:text-[#6D28D9] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={scrollToForm}
              className={`px-6 py-2.5 rounded-full transition-all font-bold text-sm ${
                isScrolled 
                  ? 'bg-gradient-to-r from-[#6D28D9] to-[#F59E0B] hover:opacity-90 text-white shadow-md' 
                  : 'bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 border border-slate-900/10'
              }`}
            >
              ติดต่อเรา
            </button>
          </div>
          <button 
            onClick={scrollToForm}
            className={`md:hidden px-5 py-2 rounded-full transition-all font-bold text-sm ${
              isScrolled 
                ? 'bg-gradient-to-r from-[#6D28D9] to-[#F59E0B] text-white shadow-md' 
                : 'bg-slate-900/5 text-slate-900 border border-slate-900/10'
            }`}
          >
            ติดต่อ
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-40 pb-20 px-6 scroll-mt-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://media.discordapp.net/attachments/1158259534633128037/1495663697232793670/Gemini_Generated_Image_3pgtpg3pgtpg3pgt.png?ex=69e710dd&is=69e5bf5d&hm=04c984fcdb9e8923c14838e862432b4fbe38728a75ee92bf96e7e3c851218c9d&=&format=webp&quality=lossless&width=2616&height=1110"
            alt="Team strategy planning"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9]/45 via-white/70 to-[#F59E0B]/35" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
              <span className="text-sm font-medium text-slate-600">by Sellsuki - Digital Business Enabler</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-slate-900">
              ปลดล็อกยอดขายด้วยคอนเทนต์ที่ <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#6D28D9] to-[#F59E0B] bg-clip-text text-transparent">
                &apos;ขายได้จริง&apos;
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              ไม่ใช่แค่ทำคอนเทนต์ แต่เราคือพาร์ทเนอร์ที่ช่วยให้ธุรกิจคุณเติบโตอย่างยั่งยืน ดูแลโดยทีมงานมืออาชีพจาก WizeMoves Content
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <button 
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6D28D9] to-[#F59E0B] rounded-full text-lg font-bold text-white hover:scale-105 transition-all shadow-lg hover:shadow-[#6D28D9]/20"
            >
              รับแผนธุรกิจฟรี
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto border-t border-slate-100 pt-12">
            <FadeIn delay={0.4}>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                <Counter from={0} to={8000} suffix="+" />
              </div>
              <div className="text-slate-500">ธุรกิจที่ไว้วางใจ</div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                <Counter from={0} to={4} suffix=" ปี" />
              </div>
              <div className="text-slate-500">LINE Certified Coach</div>
            </FadeIn>
            <FadeIn delay={0.6} className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center md:justify-start gap-2 h-10">
                ISO 29110
              </div>
              <div className="text-slate-500">มาตรฐานระดับสากล</div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section id="why-wizemoves" className="py-16 md:py-24 px-6 relative z-10 bg-purple-50/50 scroll-mt-28">
        <SectionTexture variant="purple" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">ทำไมแบรนด์ชั้นนำถึงเลือก WizeMoves?</h2>
                <p className="text-xl text-slate-600 mb-8">ค้นพบเคล็ดลับการสร้างคอนเทนต์ที่เปลี่ยนผู้ติดตามให้กลายเป็นลูกค้า ด้วยกลยุทธ์ที่ผ่านการพิสูจน์แล้วจากธุรกิจกว่า 8,000 ราย</p>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/50">
                  <Image 
                    src="https://www.sellsuki.co.th/_nuxt/img/image-2-c.bd86f15.png" 
                    alt="WizeMoves Showcase" 
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white bg-white">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/J9k-tsyumJk?rel=0&modestbranding=1"
                  title="WizeMoves Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section id="pain-points" className="py-24 px-6 relative bg-amber-50/50 scroll-mt-28">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <FadeIn>
              <div className="relative aspect-square max-w-lg mx-auto lg:mx-0 rounded-[3rem] overflow-hidden rotate-3 bg-white/50">
                <Image 
                  src="https://www.sellsuki.co.th/_nuxt/img/image-2-c.1c660fe.png" 
                  alt="Business Challenges" 
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">คุณกำลังเจอปัญหาเหล่านี้อยู่หรือเปล่า?</h2>
                <p className="text-xl text-slate-600 mb-8">อย่าปล่อยให้โอกาสหลุดลอยไป เพราะในโลกออนไลน์ คู่แข่งไม่เคยรอคุณ การมีคอนเทนต์ที่ไม่ดึงดูดคือการเสียโอกาสสร้างรายได้มหาศาล</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Users, title: "เพจเงียบเหงา", desc: "คนติดตามเยอะ แต่ไม่มีคนกดไลก์", color: "text-[#6D28D9]", bg: "bg-[#6D28D9]/10" },
                    { icon: LightbulbOff, title: "คิดคอนเทนต์ไม่ออก", desc: "หมดมุก ไม่รู้จะโพสต์อะไร", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10" },
                    { icon: MessageSquareOff, title: "ตอบแชทไม่ทัน", desc: "ลูกค้าทักมาแต่ตอบช้า", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10" },
                    { icon: TrendingDown, title: "ยอดขายไม่เดิน", desc: "ยิงแอดแพง แต่ยอดไม่คุ้ม", color: "text-red-600", bg: "bg-red-50" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Services Pricing */}
      <section id="packages" className="py-24 px-6 bg-slate-50 scroll-mt-28 relative overflow-hidden">
        <SectionTexture variant="mixed" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">แพ็กเกจที่ตอบโจทย์ทุกขนาดธุรกิจ</h2>
              <p className="text-xl text-slate-600">เลือกแผนที่ใช่ เพื่อก้าวต่อไปที่มั่นคง</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Tier 1 */}
            <FadeIn delay={0.1}>
              <div className="h-full p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Mini Content</h3>
                <p className="text-slate-500 mb-6">เหมาะสำหรับเริ่มต้น</p>
                <div className="text-4xl font-bold text-slate-900 mb-8">35,000<span className="text-lg text-slate-400 font-normal">.-/เดือน</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#6D28D9] shrink-0" />
                    <Tooltip text="ประกอบด้วยภาพนิ่ง อัลบั้ม หรือคอนเทนต์สั้นๆ">
                      <span className="text-slate-600">15 คอนเทนต์ต่อเดือน</span>
                    </Tooltip>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#6D28D9] shrink-0" />
                    <Tooltip text="วิเคราะห์เพจและวางทิศทางคอนเทนต์รายเดือน">
                      <span className="text-slate-600">วางแผนกลยุทธ์เบื้องต้น</span>
                    </Tooltip>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#6D28D9] shrink-0" />
                    <Tooltip text="สรุปยอด Reach, Engagement และข้อเสนอแนะเพื่อปรับปรุง">
                      <span className="text-slate-600">รายงานผลรายเดือน</span>
                    </Tooltip>
                  </li>
                </ul>
                <button onClick={scrollToForm} className="w-full py-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 transition-colors font-bold border border-slate-200">
                  เลือกแพ็กเกจนี้
                </button>
              </div>
            </FadeIn>

            {/* Tier 2 - Recommended */}
            <FadeIn delay={0.2}>
              <div className="relative h-full p-8 rounded-[2rem] bg-white border-2 border-[#6D28D9]/30 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#6D28D9] to-[#F59E0B] rounded-full text-sm font-bold text-white flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" /> แนะนำ
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Content Management</h3>
                <p className="text-[#6D28D9] font-medium mb-6">คุ้มค่าที่สุด จัดเต็มทุกรูปแบบ</p>
                <div className="text-4xl font-bold text-slate-900 mb-8">45,000<span className="text-lg text-slate-400 font-normal">.-/เดือน</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    <Tooltip text="วิดีโอสั้นสำหรับ Reels/TikTok พร้อมตัดต่อ">
                      <span className="text-slate-600">15 คอนเทนต์ (รวมวิดีโอ 5 คลิป)</span>
                    </Tooltip>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    <Tooltip text="ถ่ายทำในกรุงเทพฯ และปริมณฑล (ไม่รวมค่าเดินทางต่างจังหวัด)">
                      <span className="text-slate-600">ออกกองนอกสถานที่ 1-2 ครั้ง</span>
                    </Tooltip>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    <Tooltip text="บริหารจัดการงบโฆษณา Facebook/IG Ads อย่างมีประสิทธิภาพ">
                      <span className="text-slate-600">ดูแลโฆษณาเบื้องต้น</span>
                    </Tooltip>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    <Tooltip text="เพื่อการวัดผลและปรับปรุงกลยุทธ์อย่างต่อเนื่อง">
                      <span className="text-slate-600">สัญญา 6 เดือน</span>
                    </Tooltip>
                  </li>
                </ul>
                <button onClick={scrollToForm} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#F59E0B] text-white hover:opacity-90 transition-all font-bold shadow-lg">
                  เลือกแพ็กเกจนี้
                </button>
              </div>
            </FadeIn>

            {/* Tier 3 */}
            <FadeIn delay={0.3}>
              <div className="h-full p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Creative Content</h3>
                <p className="text-slate-500 mb-6">เน้นกระแส Real-time</p>
                <div className="text-4xl font-bold text-slate-900 mb-8">60,000<span className="text-lg text-slate-400 font-normal">.-/เดือน</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    <Tooltip text="ลงคอนเทนต์ทุกวัน ครอบคลุมทุกแพลตฟอร์ม">
                      <span className="text-slate-600">30+ คอนเทนต์ต่อเดือน</span>
                    </Tooltip>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    <Tooltip text="สร้างคอนเทนต์ตามเทรนด์ไวรัลภายใน 24 ชม.">
                      <span className="text-slate-600">เกาะกระแส Real-time ทันเหตุการณ์</span>
                    </Tooltip>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    <Tooltip text="ออกแบบพิเศษสำหรับเทศกาลและวันหยุด">
                      <span className="text-slate-600">คอนเทนต์วันสำคัญต่างๆ</span>
                    </Tooltip>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    <Tooltip text="มี Account Executive ดูแลโปรเจกต์และให้คำปรึกษาตลอดเวลาทำการ">
                      <span className="text-slate-600">ทีมงาน Support ส่วนตัว</span>
                    </Tooltip>
                  </li>
                </ul>
                <button onClick={scrollToForm} className="w-full py-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 transition-colors font-bold border border-slate-200">
                  เลือกแพ็กเกจนี้
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section id="extra-services" className="py-24 px-6 relative bg-purple-50/50 scroll-mt-28">
        <SectionTexture variant="purple" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <FadeIn>
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">บริการเสริมเพื่อความสมบูรณ์แบบ</h2>
                <p className="text-xl text-slate-600 mb-10">เราไม่ได้มีแค่คอนเทนต์ แต่เรามีทีมงานคุณภาพที่พร้อมซัพพอร์ตธุรกิจคุณในทุกมิติ ทั้งงานโปรดักชั่นระดับมืออาชีพ และทีมแอดมินปิดการขาย</p>
                
                <div className="space-y-4">
                  <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Admin Services</h4>
                      <p className="text-slate-500 text-sm">ดูแลแชท ปิดการขาย ตลอด 24 ชม.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <Camera className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Production Team</h4>
                      <p className="text-slate-500 text-sm">ถ่ายภาพและวิดีโอคุณภาพสูง</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden -rotate-2 bg-white/50">
                <Image 
                  src="https://www.sellsuki.co.th/_nuxt/img/image-2-c.bd86f15.png" 
                  alt="Production Services" 
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Quality Guaranteed</div>
                  <div className="text-lg font-bold text-[#6D28D9]">Professional Team</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.3}>
              <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <MessageCircle className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Admin Services</h3>
                <div className="space-y-6 flex-grow">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-xl text-slate-900 mb-1">20,000.- / เดือน</div>
                    <div className="text-slate-500 text-sm">จันทร์ - เสาร์ (9:00 - 18:00 น.)</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-xl text-slate-900 mb-1">40,000.- / เดือน</div>
                    <div className="text-slate-500 text-sm">จันทร์ - อาทิตย์ (9:00 - 24:00 น.)</div>
                    <div className="text-sm text-[#F59E0B] mt-2 flex items-center gap-1 font-bold">
                      <Star className="w-4 h-4 fill-current" /> บริการปิดการขายมืออาชีพ
                    </div>
                  </div>
                </div>
                <button onClick={scrollToForm} className="mt-8 text-sm font-bold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                  สนใจบริการ <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                  <Camera className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Production</h3>
                <div className="space-y-6 flex-grow">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                    <Camera className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-xl text-slate-900 mb-1">Photo Still: 10,000.-</div>
                      <div className="text-slate-500 text-sm">ถ่ายภาพนิ่ง 30-50 ภาพ</div>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                    <Video className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-xl text-slate-900 mb-1">Video Production: 20,000.-</div>
                      <div className="text-slate-500 text-sm">ถ่ายทำและตัดต่อ 2-3 คลิป</div>
                    </div>
                  </div>
                </div>
                <button onClick={scrollToForm} className="mt-8 text-sm font-bold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                  สนใจบริการ <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-white overflow-hidden scroll-mt-28 relative">
        <SectionTexture variant="mixed" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">เสียงจากลูกค้าตัวจริง</h2>
              <p className="text-xl text-slate-600">ความสำเร็จของลูกค้า คือความภูมิใจของเรา</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "คุณเมย์", 
                role: "เจ้าของแบรนด์เครื่องสำอาง", 
                text: "ตั้งแต่ใช้บริการ WizeMoves ยอดขายเพิ่มขึ้น 3 เท่าภายใน 2 เดือน คอนเทนต์โดนใจกลุ่มเป้าหมายมากค่ะ",
                img: "https://www.sellsuki.co.th/_nuxt/img/image-2-c.bd86f15.png"
              },
              { 
                name: "คุณเอก", 
                role: "CEO ธุรกิจอาหารเสริม", 
                text: "ทีมงานมืออาชีพมากครับ วางแผนกลยุทธ์ได้แม่นยำ ช่วยลดค่าแอดไปได้เยอะเลย แต่ยอดขายกลับเพิ่มขึ้น",
                img: "https://www.sellsuki.co.th/_nuxt/img/image-2-c.1c660fe.png"
              },
              { 
                name: "คุณจอย", 
                role: "Founder ร้านเสื้อผ้าออนไลน์", 
                text: "แอดมินตอบไวและปิดการขายเก่งมากค่ะ ช่วยให้จอยมีเวลาไปโฟกัสเรื่องการหาของใหม่ๆ มาขายได้เยอะเลย",
                img: "https://www.sellsuki.co.th/_nuxt/img/image-2-c.bd86f15.png"
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 relative h-full flex flex-col">
                  <Quote className="w-10 h-10 text-[#6D28D9]/10 absolute top-6 right-8" />
                  <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">&ldquo;{item.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white">
                      <Image 
                        src={item.img} 
                        alt={item.name} 
                        fill 
                        className="object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-500">{item.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Lead Form */}
      <section id="contact-form" className="py-24 px-6 bg-amber-50/50 scroll-mt-28 relative overflow-hidden">
        <SectionTexture variant="gold" />
        <div className="max-w-3xl mx-auto relative z-10">
          <FadeIn>
            <div className="p-8 md:p-12 rounded-[2rem] bg-white border border-slate-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6D28D9] to-[#F59E0B]" />
              
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">พร้อมที่จะเติบโตไปกับเราหรือยัง?</h2>
                <p className="text-slate-600">กรอกข้อมูลด้านล่างเพื่อให้ทีมงานติดต่อกลับพร้อมแผนธุรกิจฟรี</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">เป้าหมายของคุณคืออะไร?</label>
                  <div className="relative group">
                    <select defaultValue="" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all appearance-none">
                      <option value="" disabled>เลือกเป้าหมายหลักของคุณ</option>
                      <option value="sales">เพิ่มยอดขาย</option>
                      <option value="brand">สร้างแบรนด์ให้เป็นที่รู้จัก</option>
                      <option value="admin">หาแอดมินช่วยตอบและปิดการขาย</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">ชื่อแบรนด์ของคุณ</label>
                  <input type="text" placeholder="ระบุชื่อแบรนด์หรือบริษัท" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">เบอร์โทรศัพท์ติดต่อ</label>
                  <input type="tel" placeholder="08X-XXX-XXXX" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">LINE ID สำหรับรับแผนธุรกิจฟรี</label>
                  <input type="text" placeholder="@yourlineid" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all" />
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#F59E0B] text-white font-bold text-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300 mt-8 shadow-lg shadow-[#6D28D9]/20">
                  🚀 เริ่มต้นเส้นทางความสำเร็จกับเรา
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-slate-50 scroll-mt-28 relative overflow-hidden">
        <SectionTexture variant="mixed" />
        <div className="max-w-3xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">คำถามที่พบบ่อย</h2>
              <p className="text-xl text-slate-600">เราพร้อมตอบทุกข้อสงสัยของคุณ</p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {[
              { q: "ต้องทำสัญญานานแค่ไหน?", a: "แพ็กเกจ Content Management มีสัญญาขั้นต่ำ 6 เดือน เพื่อการวางแผนและวัดผลที่มีประสิทธิภาพ ส่วนแพ็กเกจอื่นๆ สามารถคุยรายละเอียดเป็นรายเดือนได้ครับ" },
              { q: "มีทีมงานมาถ่ายทำที่ร้านไหม?", a: "มีครับ สำหรับแพ็กเกจ Content Management และ Creative Content เรามีบริการออกกองถ่ายทำนอกสถานที่ในเขตกรุงเทพฯ และปริมณฑล" },
              { q: "ถ้ายังไม่มีเพจเลย เริ่มต้นยังไงดี?", a: "ทีมงาน WizeMoves ยินดีให้คำปรึกษาตั้งแต่การตั้งชื่อเพจ วางทิศทางแบรนด์ ไปจนถึงการสร้างคอนเทนต์แรกครับ" },
              { q: "แอดมินตอบแชทช่วงเวลาไหนบ้าง?", a: "เรามี 2 กะหลักครับ คือ จันทร์-เสาร์ (9:00-18:00 น.) และแบบ Full Service จันทร์-อาทิตย์ (9:00-24:00 น.) ครับ" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <details className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm cursor-pointer transition-all hover:shadow-md">
                  <summary className="flex items-center justify-between font-bold text-slate-900 list-none">
                    {item.q}
                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="mt-4 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                    {item.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} WizeMoves Content by Sellsuki. All rights reserved.
          </div>
          <div className="text-slate-400 text-xs mt-2 md:mt-0">
            Version 1.0.0 (Latest)
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <span className="text-sm">ติดต่อสอบถาม:</span>
            <a href="tel:020263250" className="text-lg font-bold text-slate-900 hover:text-[#6D28D9] transition-colors">02-026-3250</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
