import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';

  return (
    <div className={`max-w-3xl mb-10 md:mb-14 ${alignClass} ${className}`} data-component="section-heading">
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary-light text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
