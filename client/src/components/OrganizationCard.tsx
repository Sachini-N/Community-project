import React, { useState } from 'react';
import { ExternalLink, Building2 } from 'lucide-react';
import { Organization } from '../types/organization';

interface OrganizationCardProps {
  organization: Organization;
  onClick: (org: Organization) => void;
  isHighlighted?: boolean;
}

export const OrganizationCard: React.FC<OrganizationCardProps> = ({
  organization,
  onClick,
  isHighlighted = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // Optional short category label formatter
  const formatCategory = (cat: string) => {
    switch (cat) {
      case 'corporate':
        return 'Corporate';
      case 'startup':
        return 'Startup';
      case 'local-partner':
        return 'Local Partner';
      case 'international-partner':
        return 'International';
      case 'government-partner':
        return 'Government';
      case 'university-partner':
        return 'University';
      default:
        return cat;
    }
  };

  const handleClick = () => {
    if (organization.website && organization.website.trim() !== '') {
      const url = organization.website.startsWith('http://') || organization.website.startsWith('https://')
        ? organization.website
        : `https://${organization.website}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      onClick(organization);
    }
  };

  return (
    <div
      id={`org-card-${organization.slug}`}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`Visit official website for ${organization.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      className={`group relative bg-white border rounded-xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-200 select-none ${
        isHighlighted
          ? 'border-[#0070F3] ring-4 ring-blue-500/25 shadow-xl scale-[1.02] bg-blue-50/20'
          : 'border-[#E5E7EB] hover:border-blue-400 hover:shadow-card-hover hover:-translate-y-0.5 shadow-card'
      }`}
    >
      <div>
        {/* Logo Container: Standard dimensions, object-fit contain, never cropped */}
        <div className={`w-full h-24 rounded-lg ${organization.slug === 'slasscom' ? 'bg-[#102D48]' : 'bg-[#F8FAFC]'} border border-slate-100 flex items-center justify-center p-2.5 mb-3 group-hover:bg-blue-50/40 transition`}>
          {!imageError && organization.logo ? (
            <img
              src={organization.logo}
              alt={`${organization.name} logo`}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-contain filter transition-transform duration-200 group-hover:scale-105"
            />
          ) : (
            /* Styled Monogram Fallback */
            <div className="flex flex-col items-center justify-center text-center">
              <Building2 className="w-7 h-7 text-slate-400 group-hover:text-blue-500 mb-1 transition" />
              <span className="font-heading font-extrabold text-xs text-[#102D48] tracking-wider uppercase">
                {organization.name.slice(0, 3)}
              </span>
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="mb-1.5 flex items-center justify-between">
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition">
            {formatCategory(organization.category)}
          </span>
          {organization.featured && (
            <span className="w-2 h-2 rounded-full bg-[#0070F3]" title="Featured Partner"></span>
          )}
        </div>

        {/* Organization Name */}
        <h3 className="font-heading font-bold text-sm sm:text-base text-[#102D48] group-hover:text-[#0070F3] transition line-clamp-1">
          {organization.name}
        </h3>

        {/* Short Description */}
        {(organization.shortDescription || organization.description) && (
          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            {organization.shortDescription || organization.description}
          </p>
        )}
      </div>

      {/* Card Footer: Directly indicates visiting official website */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-[11px] text-slate-400 truncate max-w-[120px]">
          {organization.website && organization.website.trim() !== ''
            ? organization.website.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]
            : 'TRACE Sri Lanka'}
        </span>
        {organization.website && organization.website.trim() !== '' ? (
          <span className="text-[#0070F3] font-semibold flex items-center gap-1 text-[11px] group-hover:translate-x-0.5 transition-transform">
            <span>Visit Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        ) : (
          <span className="text-slate-400 font-medium flex items-center gap-1 text-[11px]">
            <span>TRACE Partner</span>
          </span>
        )}
      </div>
    </div>
  );
};

