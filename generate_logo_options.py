# -*- coding: utf-8 -*-
import os

logo_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\logo"
os.makedirs(logo_dir, exist_ok=True)

# Option 1: Modern Precision Pulse & Shield (精准医疗脉冲与极简盾牌)
svg_opt1 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <defs>
    <linearGradient id="gradNavy1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A2540"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="gradTeal1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
  </defs>
  <!-- Icon: Modern Shield with Intersecting M & Pulse Wave -->
  <g transform="translate(10, 10)">
    <rect width="60" height="60" rx="16" fill="url(#gradNavy1)"/>
    <path d="M 30,12 L 48,18 C 48,34 40,46 30,50 C 20,46 12,34 12,18 Z" 
          fill="none" stroke="url(#gradTeal1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 21,34 L 26,24 L 30,32 L 34,24 L 39,34" 
          fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="30" cy="40" r="2.5" fill="url(#gradTeal1)"/>
  </g>
  <!-- Wordmark -->
  <text x="82" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="900" letter-spacing="2" fill="#0A2540">
    MAXVOR
  </text>
</svg>'''

# Option 2: Clinical Hexagon & Cross Matrix (医疗蜂巢晶体与十字核心)
svg_opt2 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <defs>
    <linearGradient id="gradTeal2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0D9488"/>
    </linearGradient>
  </defs>
  <!-- Icon: Precision Hexagonal Cross -->
  <g transform="translate(10, 10)">
    <rect width="60" height="60" rx="16" fill="#F0FDFA" stroke="#CCFBF1" stroke-width="1.5"/>
    <!-- Outer Hexagon -->
    <polygon points="30,12 48,22 48,42 30,52 12,42 12,22" 
             fill="none" stroke="#0D9488" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- Embedded Clinical Plus / M Vertex -->
    <path d="M 30,20 L 30,44 M 18,32 L 42,32" 
          stroke="#0A2540" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="30" cy="32" r="4" fill="#0D9488"/>
  </g>
  <!-- Wordmark -->
  <text x="82" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="900" letter-spacing="2" fill="#0A2540">
    MAXVOR
  </text>
</svg>'''

# Option 3: Dynamic Interlocking M-V Chevrons (双V互锁与极简医疗翅膀)
svg_opt3 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <defs>
    <linearGradient id="gradNavy3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A2540"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <linearGradient id="gradCyan3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <!-- Icon: Interlocking M/V Precision Vector -->
  <g transform="translate(10, 10)">
    <rect width="60" height="60" rx="16" fill="url(#gradNavy3)"/>
    <!-- Left Chevron (M branch) -->
    <path d="M 18,42 L 28,18 L 33,30" 
          fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Right Chevron (V & M branch) -->
    <path d="M 27,30 L 32,18 L 42,42" 
          fill="none" stroke="url(#gradCyan3)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Central Diagnostic Focus Point -->
    <circle cx="30" cy="40" r="2.5" fill="#FFFFFF"/>
  </g>
  <!-- Wordmark -->
  <text x="82" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="900" letter-spacing="2" fill="#0A2540">
    MAXVOR
  </text>
</svg>'''

# Option 4: Pure Minimalist Monogram 'M' with Heartbeat/Waveform (纯粹极简字母M与声波科技)
svg_opt4 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <defs>
    <linearGradient id="gradTeal4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>
  <!-- Icon: Geometric Monogram M -->
  <g transform="translate(10, 10)">
    <rect width="60" height="60" rx="16" fill="#0A2540"/>
    <!-- Geometric Folded M -->
    <path d="M 18,42 L 18,20 L 30,34 L 42,20 L 42,42" 
          fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Active Ultrasound Beam Pulse Dot -->
    <circle cx="30" cy="44" r="3" fill="url(#gradTeal4)"/>
  </g>
  <!-- Wordmark -->
  <text x="82" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="900" letter-spacing="2" fill="#0A2540">
    MAXVOR
  </text>
</svg>'''

# Option 5: Circular Global Care & Diagnostic Aperture (全球医疗之环与透镜光圈)
svg_opt5 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <defs>
    <linearGradient id="gradCircle5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <!-- Icon: Precision Aperture Ring with M Core -->
  <g transform="translate(10, 10)">
    <circle cx="30" cy="30" r="26" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
    <!-- Dynamic Medical Gradient Arc -->
    <path d="M 30,6 A 24 24 0 1 1 8,36" 
          fill="none" stroke="url(#gradCircle5)" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Central Precision M -->
    <path d="M 20,36 L 25,24 L 30,31 L 35,24 L 40,36" 
          fill="none" stroke="#0A2540" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <!-- Wordmark -->
  <text x="82" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="900" letter-spacing="2" fill="#0A2540">
    MAXVOR
  </text>
</svg>'''

# Write SVG files
options = [
    ("maxvor-logo-option-1.svg", svg_opt1),
    ("maxvor-logo-option-2.svg", svg_opt2),
    ("maxvor-logo-option-3.svg", svg_opt3),
    ("maxvor-logo-option-4.svg", svg_opt4),
    ("maxvor-logo-option-5.svg", svg_opt5),
]

for filename, content in options:
    filepath = os.path.join(logo_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Written: {filepath}")

# Update standard logo files with pure clean typography (no subtitle)
with open(os.path.join(logo_dir, "maxvor-logo-light.svg"), "w", encoding="utf-8") as f:
    f.write(svg_opt1)

# Generate HTML Showcase
html_content = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>MAXVOR 品牌 LOGO 重构设计方案 (5套专业设计提案)</title>
  <style>
    body {{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #F8FAFC;
      color: #1E293B;
      margin: 0;
      padding: 40px 20px;
    }}
    .container {{
      max-width: 1100px;
      margin: 0 auto;
    }}
    h1 {{
      font-size: 28px;
      font-weight: 800;
      color: #0A2540;
      text-align: center;
      margin-bottom: 8px;
    }}
    p.subtitle {{
      text-align: center;
      color: #64748B;
      font-size: 15px;
      margin-bottom: 40px;
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
      gap: 28px;
    }}
    .card {{
      background: #FFFFFF;
      border-radius: 20px;
      border: 1px solid #E2E8F0;
      overflow: hidden;
      box-shadow: 0 4px 14px rgba(0,0,0,0.03);
      transition: all 0.25s ease;
    }}
    .card:hover {{
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.08);
      border-color: #0D9488;
    }}
    .preview-box {{
      padding: 36px 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #F1F5F9;
      background: #FFFFFF;
    }}
    .preview-dark {{
      background: #0A2540;
    }}
    .info {{
      padding: 24px;
    }}
    .badge {{
      display: inline-block;
      padding: 4px 10px;
      background: #F0FDFA;
      color: #0D9488;
      border: 1px solid #CCFBF1;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 10px;
    }}
    .title {{
      font-size: 18px;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 8px;
    }}
    .desc {{
      font-size: 13px;
      color: #64748B;
      line-height: 1.6;
      margin: 0;
    }}
    .tags {{
      margin-top: 14px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }}
    .tag {{
      background: #F1F5F9;
      color: #475569;
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: 600;
    }}
  </style>
</head>
<body>
  <div class="container">
    <h1>MAXVOR 品牌新版 LOGO 设计方案 (5套设计提案)</h1>
    <p class="subtitle">针对医疗器械与出海供应链品牌定位，彻底删除副标题多余字符，强化纯粹科技感与国际化质感</p>
    
    <div class="grid">
      <!-- Option 1 -->
      <div class="card">
        <div class="preview-box">
          {svg_opt1}
        </div>
        <div class="info">
          <span class="badge">方案 1 (推荐经典)</span>
          <div class="title">极简盾牌与超声脉冲波 (Precision Pulse & Shield)</div>
          <p class="desc">将医疗安全防护盾、声波波形与字母“M”高度几何化融合。深海蓝主色凸显医疗权威，薄荷翡翠绿带来生命科技感。纯粹字标与图标比例黄金协调。</p>
          <div class="tags">
            <span class="tag">#医疗安全</span>
            <span class="tag">#超声诊断波形</span>
            <span class="tag">#权威出海</span>
          </div>
        </div>
      </div>

      <!-- Option 2 -->
      <div class="card">
        <div class="preview-box">
          {svg_opt2}
        </div>
        <div class="info">
          <span class="badge">方案 2 (微创与晶体)</span>
          <div class="title">医疗蜂巢晶体与十字核心 (Hexagonal Medical Matrix)</div>
          <p class="desc">六边形蜂巢晶体代表精密仪器与严苛制造标准，内嵌精准医疗十字光标与能量核心。整体风格极简通透，具有顶尖实验室级别的严谨与科技感。</p>
          <div class="tags">
            <span class="tag">#蜂巢晶体</span>
            <span class="tag">#精密医疗十字</span>
            <span class="tag">#临床级质感</span>
          </div>
        </div>
      </div>

      <!-- Option 3 -->
      <div class="card">
        <div class="preview-box">
          {svg_opt3}
        </div>
        <div class="info">
          <span class="badge">方案 3 (动态与连接)</span>
          <div class="title">双V互锁与极简医疗之翼 (Interlocking M-V Chevrons)</div>
          <p class="desc">由两组精准折角几何线条构成（寓意 MAXVOR 中字母 M 与 V 的拓扑结合），形如飞翔双翼与能量互锁，象征全球供应链的高效连结与敏捷服务。</p>
          <div class="tags">
            <span class="tag">#M-V几何拓扑</span>
            <span class="tag">#全球敏捷互联</span>
            <span class="tag">#科技双翼</span>
          </div>
        </div>
      </div>

      <!-- Option 4 -->
      <div class="card">
        <div class="preview-box">
          {svg_opt4}
        </div>
        <div class="info">
          <span class="badge">方案 4 (纯粹大牌风)</span>
          <div class="title">极简建筑感字母 M 与声束焦点 (Monogram M Pulse)</div>
          <p class="desc">效仿 Mindray、Philips、Siemens 等国际一线医疗器械巨头的极简设计语言，以高辨识度的折线字母 M 为主体，底部配以超声能量汇聚圆点，庄重大气。</p>
          <div class="tags">
            <span class="tag">#国际巨头感</span>
            <span class="tag">#超级符号M</span>
            <span class="tag">#极简纯粹</span>
          </div>
        </div>
      </div>

      <!-- Option 5 -->
      <div class="card">
        <div class="preview-box">
          {svg_opt5}
        </div>
        <div class="info">
          <span class="badge">方案 5 (全球化视野)</span>
          <div class="title">全球医疗星环与透镜光圈 (Global Care Aperture)</div>
          <p class="desc">渐变医疗绿/天青蓝双色星环环绕中心精准 M 核心，寓意全球化覆盖、无死角精准成像与全面关怀。视觉轻盈柔和，现代感十足。</p>
          <div class="tags">
            <span class="tag">#全球星环</span>
            <span class="tag">#光学成像透镜</span>
            <span class="tag">#柔和科技</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>'''

showcase_path = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\logo-showcase.html"
with open(showcase_path, "w", encoding="utf-8") as f:
    f.write(html_content)
print(f"Showcase written: {showcase_path}")
