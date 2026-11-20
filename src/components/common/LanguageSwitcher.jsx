import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

export default function LanguageSwitcher({ variant = 'default' }) {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
    { code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR' }
  ];

  const currentLanguage = languages.find(l => l.code === lang) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'topbar') {
    return (
      <div className="flex items-center gap-1.5 bg-slate-100 rounded-lg p-0.5 border border-border-soft">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-2 py-0.5 text-[11px] font-bold rounded flex items-center gap-1 transition-all ${
              lang === l.code
                ? 'bg-white text-secondary shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title={`Switch to ${l.label}`}
          >
            <span>{l.flag}</span>
            <span>{l.short}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border-soft hover:border-secondary/40 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-xs"
        aria-label="Select Language"
      >
        <span className="text-sm leading-none">{currentLanguage.flag}</span>
        <span className="font-semibold">{currentLanguage.short}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-36 bg-white rounded-xl shadow-lg border border-border-soft py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Site Language
          </div>
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left text-xs font-semibold flex items-center justify-between transition-colors ${
                lang === l.code
                  ? 'bg-secondary/10 text-secondary'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base leading-none">{l.flag}</span>
                <span>{l.label}</span>
              </div>
              {lang === l.code && <Check className="w-3.5 h-3.5 text-secondary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
