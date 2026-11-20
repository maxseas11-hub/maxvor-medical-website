# -*- coding: utf-8 -*-
import os

logo_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\logo"
os.makedirs(logo_dir, exist_ok=True)

# 1. Primary Full Logo (Horizontal for Light Background)
svg_horizontal_light = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="100%" height="100%">
  <defs>
    <linearGradient id="mvGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A2540"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="mvGradTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
  </defs>

  <!-- Logo Mark (Shield + Ultrasound Wave + M/V Geometric) -->
  <g transform="translate(10, 10)">
    <!-- Base Rounded Shield Background -->
    <rect x="0" y="0" width="60" height="60" rx="16" fill="url(#mvGradPrimary)"/>
    
    <!-- Outer Guard Shield Outline -->
    <path d="M 30,10 L 46,16 C 46,32 38,44 30,50 C 22,44 14,32 14,16 Z" 
          fill="none" stroke="url(#mvGradTeal)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Central Ultrasound Pulse & Letter M/V -->
    <path d="M 21,34 L 26,24 L 30,32 L 34,24 L 39,34" 
          fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          
    <!-- Pulse Energy Dot (Ultrasound Beam Focus) -->
    <circle cx="30" cy="40" r="2.5" fill="url(#mvGradTeal)"/>
  </g>

  <!-- Typography: MAXVOR -->
  <text x="84" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="900" letter-spacing="1.5" fill="#0A2540">
    MAXVOR
  </text>

  <!-- Subtitle: MEDICAL TECHNOLOGY -->
  <text x="85" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.5" font-weight="700" letter-spacing="2.2" fill="#64748B">
    MEDICAL SYSTEMS &amp; SOURCING
  </text>
</svg>'''

# 2. Dark Background Logo (for Dark Headers/Footers)
svg_horizontal_dark = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="100%" height="100%">
  <defs>
    <linearGradient id="mvGradTealDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6"/>
      <stop offset="100%" stop-color="#2DD4BF"/>
    </linearGradient>
  </defs>

  <!-- Logo Mark -->
  <g transform="translate(10, 10)">
    <rect x="0" y="0" width="60" height="60" rx="16" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    
    <!-- Shield Outline -->
    <path d="M 30,10 L 46,16 C 46,32 38,44 30,50 C 22,44 14,32 14,16 Z" 
          fill="none" stroke="url(#mvGradTealDark)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Central Ultrasound Pulse & Letter M/V -->
    <path d="M 21,34 L 26,24 L 30,32 L 34,24 L 39,34" 
          fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          
    <circle cx="30" cy="40" r="2.5" fill="url(#mvGradTealDark)"/>
  </g>

  <!-- Typography -->
  <text x="84" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" letter-spacing="1.5" fill="#FFFFFF">
    MAXVOR
  </text>

  <!-- Subtitle -->
  <text x="85" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.5" font-weight="700" letter-spacing="2.2" fill="#94A3B8">
    MEDICAL SYSTEMS &amp; SOURCING
  </text>
</svg>'''

# 3. Square App Icon / Favicon Mark
svg_icon = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%">
  <defs>
    <linearGradient id="mvFavGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A2540"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="mvFavTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
  </defs>

  <rect width="128" height="128" rx="28" fill="url(#mvFavGrad)"/>
  <path d="M 64,22 L 98,34 C 98,72 80,98 64,110 C 48,98 30,72 30,34 Z" 
        fill="none" stroke="url(#mvFavTeal)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  
  <path d="M 44,72 L 55,50 L 64,66 L 73,50 L 84,72" 
        fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        
  <circle cx="64" cy="86" r="5" fill="url(#mvFavTeal)"/>
</svg>'''

with open(os.path.join(logo_dir, "maxvor-logo-light.svg"), "w", encoding="utf-8") as f:
    f.write(svg_horizontal_light)

with open(os.path.join(logo_dir, "maxvor-logo-dark.svg"), "w", encoding="utf-8") as f:
    f.write(svg_horizontal_dark)

with open(os.path.join(logo_dir, "maxvor-logo-icon.svg"), "w", encoding="utf-8") as f:
    f.write(svg_icon)

# Also copy favicon to public root
with open(os.path.join(r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public", "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(svg_icon)

print("SVG Logos generated successfully!")
