import { useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import logoIcon from '../imports/Ico_-_concept.png';

export default function App() {
  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = logoIcon;
    document.getElementsByTagName('head')[0].appendChild(link);

    // Set page title
    document.title = 'Novelo Labs';
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 bg-[#FAF8F5] bg-opacity-95 backdrop-blur-sm border-b border-[rgba(46,41,37,0.08)] z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 md:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={logoIcon}
                alt="Novelo Labs"
                className="w-8 h-8"
              />
              <span
                className="text-[16px] tracking-wide"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                NOVELO LABS
              </span>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="#about"
                className="text-[15px] opacity-75 hover:opacity-100 transition-opacity"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                About
              </a>
              <a
                href="#product"
                className="text-[15px] opacity-75 hover:opacity-100 transition-opacity"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Product
              </a>
              <a
                href="#company"
                className="text-[15px] opacity-75 hover:opacity-100 transition-opacity"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Company
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:px-12 md:py-32 max-w-5xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EDD5C8] opacity-40 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8FA68E] opacity-30 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 border-2 border-[#C9847A] opacity-20 rounded-[40px] -rotate-12 z-0"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-[#9C8F88] opacity-15 rounded-full z-0"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1
            className="text-[32px] md:text-[52px] mb-6 tracking-[0.01em] leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.25 }}
          >
            Novelo Labs
          </h1>
          <p
            className="text-[18px] md:text-[20px] mb-10 opacity-85"
            style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}
          >
            We build digital products that simplify learning
          </p>
          <a
            href="#product"
            className="inline-block bg-[#C9847A] text-[#FAF8F5] px-10 py-4 rounded-[16px] min-h-[48px] shadow-[0_4px_16px_rgba(201,132,122,0.25)] hover:bg-[#B47569] hover:shadow-[0_6px_24px_rgba(201,132,122,0.35)] transition-all"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px' }}
          >
            View Our Product
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 py-20 md:px-12 md:py-24 max-w-4xl mx-auto">
        {/* Background elements */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#C9847A] opacity-15 rounded-full blur-2xl z-0 animate-pulse" style={{ animationDuration: '9s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#8FA68E] opacity-15 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '11s' }}></div>

        <div className="relative z-10 text-center">
          <h2
            className="text-[24px] md:text-[32px] mb-8 tracking-[0.01em]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.3 }}
          >
            About
          </h2>
          <div className="space-y-5 max-w-2xl mx-auto">
            <p
              className="text-[17px] opacity-90"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
            >
              Novelo Labs is a product studio focused on creating mobile applications that help users acquire practical language skills and communicate with confidence.
            </p>
            <p
              className="text-[17px] opacity-90"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
            >
              We design and operate scalable digital products for global audiences, combining product thinking, performance-driven development, and rapid iteration.
            </p>
            <p
              className="text-[17px] opacity-90"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
            >
              Our mission is to build efficient, user-centered digital products with strong retention and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="relative bg-white px-6 py-20 md:px-12 md:py-28">
        {/* Background patterns */}
        <div className="absolute top-10 left-5 w-80 h-80 bg-[#F2EDE8] opacity-50 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EDD5C8] opacity-35 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '15s' }}></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-[24px] md:text-[32px] mb-4 tracking-[0.01em]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.3 }}
            >
              Product
            </h2>
          </div>

          {/* Vela Product Card */}
          <div className="bg-[#FAF8F5] border-l-4 border-[#C9847A] rounded-[16px] p-8 md:p-12 shadow-[0_4px_20px_rgba(46,41,37,0.08)]">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
              <h3
                className="text-[26px] md:text-[32px] tracking-[0.01em]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.3 }}
              >
                Vela
              </h3>
              <span
                className="text-[13px] text-[#2E2925] px-4 py-2 bg-[#8FA68E] bg-opacity-10 rounded-full"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                ✅ Subscription
              </span>
            </div>

            <p
              className="text-[18px] mb-8 opacity-85"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500, lineHeight: 1.6 }}
            >
              Subscription-based language learning product
            </p>

            <div className="mb-8">
              <h4
                className="text-[18px] mb-4 tracking-[0.01em]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.3 }}
              >
                Product
              </h4>
              <div className="space-y-4">
                <p
                  className="text-[16px] opacity-90"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
                >
                  Vela is a mobile-first English learning product designed to help adult users learn essential words and phrases for real-world communication.
                </p>
                <p
                  className="text-[16px] opacity-90"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
                >
                  The product focuses on short daily learning sessions, practical vocabulary, and structured exercises that help users build confidence in everyday situations.
                </p>
                <p
                  className="text-[15px] opacity-75"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}
                >
                  Payments are processed via trusted global platforms, including the App Store and web-based payment providers.
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div>
                <span
                  className="text-[14px] text-[#9C8F88]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Platform: <span className="text-[#2E2925] font-medium">Mobile (iOS), Web</span>
                </span>
              </div>
              <div>
                <span
                  className="text-[14px] text-[#9C8F88]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Business Model: <span className="text-[#2E2925] font-medium">Weekly and annual subscriptions</span>
                </span>
              </div>
              <div>
                <span
                  className="text-[14px] text-[#9C8F88]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Target Markets: <span className="text-[#2E2925] font-medium">US, UK, Canada, EU</span>
                </span>
              </div>
            </div>

            {/* Mockup placeholder */}
            <div className="bg-[#F2EDE8] rounded-[12px] p-8 md:p-12 mb-8 flex items-center justify-center">
              <img
                src="/src/imports/iPhone_17.png"
                alt="Vela app screenshot"
                className="max-w-full h-auto max-h-[600px] object-contain"
              />
            </div>

            <div className="pt-6 border-t border-[rgba(46,41,37,0.1)]">
              <span
                className="text-[14px] text-[#9C8F88]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Status: <span className="text-[#2E2925] font-medium">Product rollout in progress</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section id="company" className="relative px-6 py-20 md:px-12 md:py-24 max-w-4xl mx-auto">
        {/* Background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#8FA68E] opacity-15 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#C9847A] opacity-15 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '12s' }}></div>

        <div className="relative z-10 text-center">
          <h2
            className="text-[24px] md:text-[32px] mb-12 tracking-[0.01em]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.3 }}
          >
            Company Details
          </h2>

          <div className="bg-[#F2EDE8] rounded-[16px] p-8 md:p-12 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <p
                  className="text-[14px] text-[#9C8F88] mb-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Legal Entity
                </p>
                <p
                  className="text-[17px] opacity-90"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500, lineHeight: 1.6 }}
                >
                  Novelo Labs Limited
                </p>
              </div>

              <div>
                <p
                  className="text-[14px] text-[#9C8F88] mb-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Registered in
                </p>
                <p
                  className="text-[17px] opacity-90"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500, lineHeight: 1.6 }}
                >
                  Hong Kong SAR
                </p>
              </div>

              <div className="pt-6 border-t border-[rgba(46,41,37,0.1)]">
                <p
                  className="text-[14px] text-[#9C8F88] mb-3"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  For business and support inquiries:
                </p>
                <a
                  href="mailto:hello@novelolabs.com"
                  className="inline-block bg-[#C9847A] text-[#FAF8F5] px-8 py-3 rounded-[12px] shadow-[0_2px_12px_rgba(201,132,122,0.2)] hover:bg-[#B47569] transition-all"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px' }}
                >
                  hello@novelolabs.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E2925] px-6 py-12 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img
                src={logoIcon}
                alt="Novelo Labs"
                className="w-8 h-8"
              />
              <span
                className="text-[16px] text-[#FAF8F5] tracking-wide"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                NOVELO LABS
              </span>
              <a
                href="https://www.linkedin.com/company/novelo-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-7 h-7 bg-opacity-10 rounded-[6px] hover:bg-opacity-20 transition-all bg-[#faf8f552]"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-[#FAF8F5]" />
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://novelolabs.gitbook.io/novelolabs-docs/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#9C8F88] hover:text-[#FAF8F5] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Privacy Policy
              </a>
              <a
                href="https://novelolabs.gitbook.io/novelolabs-docs/legal/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#9C8F88] hover:text-[#FAF8F5] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="border-t border-[rgba(250,248,245,0.15)] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p
                className="text-[13px] text-[#9C8F88] mb-1"
                style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}
              >
                Novelo Labs Limited
              </p>
              <p
                className="text-[13px] text-[#9C8F88] mb-1"
                style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}
              >
                Hong Kong SAR
              </p>
              <p
                className="text-[12px] text-[#9C8F88] opacity-75"
                style={{ fontFamily: 'var(--font-body)', lineHeight: 1.5 }}
              >
                Unit 18, 5/F., East Ocean Centre, 98 Granville Road, Tsim Sha Tsui, Hong Kong
              </p>
            </div>
            <p
              className="text-[13px] text-[#9C8F88]"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}
            >
              © 2026 Novelo Labs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}