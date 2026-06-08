'use client';

const socialLinks = [
  { href: 'https://www.facebook.com/Sellsuki/', src: '/footer/Facebook.png', alt: 'Facebook' },
  { href: 'https://www.facebook.com/Sellsuki/', src: '/footer/Instagram.png', alt: 'Instagram' },
  { href: 'https://www.facebook.com/Sellsuki/', src: '/footer/X.png', alt: 'X (Twitter)' },
  { href: 'https://www.facebook.com/Sellsuki/', src: '/footer/LinkedIn.png', alt: 'LinkedIn' },
  { href: 'https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true', src: '/footer/Youtube.png', alt: 'YouTube' },
];

const navColumns = [
  {
    title: 'Wizemoves',
    href: '/solutions/wizemoves',
    links: [
      { label: 'Business Consulting', href: '/solutions/wizemoves/business-consulting' },
      { label: 'Digital Advertising', href: '#' },
      { label: 'Content Marketing', href: '#' },
      { label: 'e-Distributor', href: '/solutions/wizemoves/edis' },
      { label: 'Martech', href: '/solutions/wizemoves/martech' },
      { label: 'Influencer Marketing', href: '#' },
      { label: 'Data Analytics', href: '#' },
    ],
  },
  {
    title: 'LINE Agency',
    href: '/solutions/lineagency',
    links: [
      { label: 'LINE OA', href: '/solutions/lineagency/line-oa' },
      { label: 'LINE OA Corporate', href: '/solutions/lineagency/line-oa-corporate' },
      { label: 'LINE Smart Channel', href: '/solutions/lineagency/line-smart-channel' },
      { label: 'LINE Today', href: '/solutions/lineagency/line-today' },
      { label: 'Sponsored Sticker', href: '/solutions/lineagency/line-sponsored-sticker' },
      { label: 'My Customer | CRM', href: '/solutions/lineagency/line-my-customer' },
    ],
  },
  {
    title: 'Sukispace',
    href: '#',
    links: [
      { label: 'Business Tool', href: '#' },
      { label: 'Akita', href: '#' },
      { label: 'Business Community', href: '#' },
    ],
  },
  {
    title: 'Akita',
    href: '#',
    links: [
      { label: 'Patona', href: '#' },
      { label: 'Oc2plus', href: '#' },
    ],
  },
  {
    title: 'เกี่ยวกับเรา',
    href: '/about-us',
    links: [
      { label: 'ติดต่อเรา', href: '/contact-us' },
      { label: 'ร่วมงานกับเรา', href: '/join-us' },
      { label: 'ผลงานของเรา', href: '/portfolio' },
      { label: 'บทความที่น่าสนใจ', href: '/blog' },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      id="FooterMenu"
      style={{
        backgroundImage: "url('/footer/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ background: 'rgba(9, 15, 39, 0.95)' }}>
        {/* Desktop */}
        <div className="hidden md:block max-w-7xl mx-auto px-6 xl:px-0 py-12">
          <div className="flex gap-8 mt-4">
            {/* Left: Logo + Address + Social */}
            <div className="w-[30%] shrink-0">
              <button onClick={scrollToTop} aria-label="Back to top">
                <img src="/footer/logo.png" alt="WizeMoves logo" className="max-w-[180px]" />
              </button>
              <p className="text-lg font-bold text-white mt-6">Address:</p>
              <p className="text-base text-white mt-2 leading-relaxed">
                Sellsuki Co.,Ltd.<br />
                4Simplex, 3rd Floor, No. 10/39<br />
                Ratchadapisek Road, Chankasem,<br />
                Chatuchak, Bangkok 10900<br />
                Thailand
              </p>
              <p className="text-base font-bold text-white mt-6">Contact:</p>
              <p className="text-base text-white mt-2">090 096 7526</p>
              <div className="flex items-center gap-2 mt-6">
                {socialLinks.map((s) => (
                  <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer">
                    <img src={s.src} alt={s.alt} loading="lazy" className="w-9 h-9 object-contain" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Nav columns */}
            <div className="flex flex-1 gap-4 justify-between">
              {navColumns.map((col) => (
                <div key={col.title} className="min-w-0">
                  <p className="text-base font-bold mb-3">
                    <a href={col.href} className="text-white hover:text-white">{col.title}</a>
                  </p>
                  {col.links.map((link) => (
                    <p key={link.label} className="text-base mb-3">
                      <a href={link.href} className="text-white/80 hover:text-white transition-colors">{link.label}</a>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between mt-16">
            <p className="text-base font-medium text-white">© 2025 sellsuki. All rights reserved.</p>
            <div className="flex items-center gap-6 text-right">
              <a href="/policy" className="text-base text-white underline hover:text-white/80 transition-colors">Privacy Policy</a>
              <a href="/terms-of-use" className="text-base text-white underline hover:text-white/80 transition-colors">Terms of Service</a>
              <span className="text-base text-white underline cursor-pointer hover:text-white/80 transition-colors">Cookies Settings</span>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden max-w-7xl mx-auto px-4 py-10">
          <div className="mt-4">
            {/* Logo + Address */}
            <div className="mb-8">
              <button onClick={scrollToTop} aria-label="Back to top">
                <img src="/footer/logo.png" alt="WizeMoves logo" className="max-w-[160px]" />
              </button>
              <p className="text-base font-bold text-white mt-6">Address:</p>
              <p className="text-base text-white mt-2 leading-relaxed">
                Sellsuki Co.,Ltd.<br />
                4Simplex, 3rd Floor, No. 10/39<br />
                Ratchadapisek Road, Chankasem,<br />
                Chatuchak, Bangkok 10900<br />
                Thailand
              </p>
              <p className="text-base font-bold text-white mt-6">Contact:</p>
              <p className="text-base text-white mt-2">090 096 7526</p>
              <div className="flex items-center gap-2 mt-6">
                {socialLinks.map((s) => (
                  <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer">
                    <img src={s.src} alt={s.alt} loading="lazy" className="w-9 h-9 object-contain" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile nav — 2-column grid */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-base font-bold text-white mb-2">Wizemove</p>
                {navColumns[0].links.map((l) => (
                  <p key={l.label} className="text-base mb-2"><a href={l.href} className="text-white/80 hover:text-white">{l.label}</a></p>
                ))}
                <p className="text-base font-bold text-white mb-2 mt-6">Sukispace</p>
                {navColumns[2].links.map((l) => (
                  <p key={l.label} className="text-base mb-2"><a href={l.href} className="text-white/80 hover:text-white">{l.label}</a></p>
                ))}
                <p className="text-base font-bold text-white mb-2 mt-6">เกี่ยวกับเรา</p>
                {[{ label: 'ติดต่อเรา', href: '/contact-us' }, { label: 'ร่วมงานกับเรา', href: '/join-us' }, { label: 'ผลงานของเรา', href: '/portfolio' }, { label: 'บทความที่น่าสนใจ', href: '/blog' }].map((l) => (
                  <p key={l.label} className="text-base font-bold mb-2"><a href={l.href} className="text-white/80 hover:text-white">{l.label}</a></p>
                ))}
              </div>
              <div>
                <p className="text-base font-bold text-white mb-2">LINE Agency</p>
                {navColumns[1].links.map((l) => (
                  <p key={l.label} className="text-base mb-2"><a href={l.href} className="text-white/80 hover:text-white">{l.label}</a></p>
                ))}
                <p className="text-base font-bold text-white mb-2 mt-6">Akita</p>
                {navColumns[3].links.map((l) => (
                  <p key={l.label} className="text-base font-bold mb-2"><a href={l.href} className="text-white/80 hover:text-white">{l.label}</a></p>
                ))}
              </div>
            </div>

            <hr className="border-white my-6" />

            <p className="text-base font-medium text-white">© 2025 sellsuki. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 mt-4 mb-8">
              <a href="/policy" className="text-base text-white underline">Privacy Policy</a>
              <a href="/terms-of-use" className="text-base text-white underline">Terms of Service</a>
              <span className="text-base text-white underline cursor-pointer">Cookies Settings</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
