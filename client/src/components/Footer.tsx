import React from 'react';
import {
  MapPin,
  Mail,
  Globe,
  ExternalLink,
  Linkedin,
  Facebook,
  Youtube
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#102D48] text-slate-300 pt-16 pb-12 border-t border-[#163B5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Column 1: TRACE Sri Lanka logo & description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-md border border-white/20">
                <img
                  src="/trace-logo.png"
                  alt="TRACE Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-white">TRACE Sri Lanka</span>
                <span className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase">
                  Community Platform
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              TRACE (Technologically Re-Awakening Culture of Excellence) drives Sri Lanka’s technological innovation, enterprise acceleration, and academic research alignment at Technopark Mulgampola and national tech corridors.
            </p>

            <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Collaborative National Innovation Hub</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Scrolls to sections) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('corporate')}
                  className="hover:text-white transition flex items-center gap-1.5 text-left focus:outline-none"
                >
                  <span className="text-blue-400 text-[10px]">›</span> Corporate Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('startups')}
                  className="hover:text-white transition flex items-center gap-1.5 text-left focus:outline-none"
                >
                  <span className="text-sky-400 text-[10px]">›</span> Startups
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('local')}
                  className="hover:text-white transition flex items-center gap-1.5 text-left focus:outline-none"
                >
                  <span className="text-indigo-400 text-[10px]">›</span> Local Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('international')}
                  className="hover:text-white transition flex items-center gap-1.5 text-left focus:outline-none"
                >
                  <span className="text-cyan-400 text-[10px]">›</span> International Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('government')}
                  className="hover:text-white transition flex items-center gap-1.5 text-left focus:outline-none"
                >
                  <span className="text-amber-400 text-[10px]">›</span> Government Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('university')}
                  className="hover:text-white transition flex items-center gap-1.5 text-left focus:outline-none"
                >
                  <span className="text-violet-400 text-[10px]">›</span> University Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Official TRACE website, Contact information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]"></span>
              Contact &amp; Location
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  TRACE Expert City,Maradana,Colombo 10.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@trace.lk" className="hover:text-white transition">
                  connect@trace.lk
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="https://trace.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  <span>Official TRACE Website</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Social media links and icons */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]"></span>
              Connect With TRACE
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Follow TRACE Sri Lanka across social platforms for community showcases, hackathons, and technology research updates.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/trace_srilanka/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-white/80 hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
                title="TRACE Sri Lanka on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://web.facebook.com/TRACE.SL.info"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TRACE Sri Lanka Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TRACE Sri Lanka YouTube"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 TRACE Sri Lanka. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
