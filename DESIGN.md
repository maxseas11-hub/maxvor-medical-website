---
version: alpha
name: Medical Navy Supply Grid
description: A clean, evidence-led B2B sourcing system for global medical consumables wholesale, factory-direct supply, compliance proof, and RFQ conversion.
colors:
  primary: "#0A2540"
  primary-deep: "#0F2038"
  secondary: "#0D9488"
  accent: "#0EA5E9"
  surface: "#FFFFFF"
  canvas: "#F8FAFC"
  canvas-alt: "#F1F5F9"
  on-surface: "#0F2038"
  on-primary: "#FFFFFF"
  muted: "#475569"
  border: "#CBD5E1"
  border-soft: "#E2E8F0"
  success: "#10B981"
  success-ink: "#065F46"
  warning: "#B45309"
  danger: "#B91C1C"
  focus: "#0284C7"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.025em
  h2:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  h3:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  body-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.01em
  label-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.02em
  label-caps:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.08em
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em
rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 16px
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 80px
  section-compact: 56px
  mobile-section: 40px
  container-gutter: 24px
  mobile-gutter: 16px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 48px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 48px
  button-utility:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 48px
  button-focus:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 48px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  taxonomy-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  chip:
    backgroundColor: "{colors.canvas-alt}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 8px
    height: 40px
  verified-badge:
    backgroundColor: "{colors.success}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 8px
    height: 32px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 48px
  trust-strip:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 16px
---

# Medical Navy Supply Grid

## Overview

Medical Navy Supply Grid is a calm, precise visual system for an English-language global B2B sourcing hub covering Class I and Class II medical consumables and disposable hospital supplies. It should feel sterile without feeling cold: deep medical navy establishes accountability, white and cool slate create inspection-room clarity, teal and cyan identify pathways, and emerald is reserved for verified compliance. The audience is procurement-led, time-poor, and evidence-sensitive; every visual decision should help a buyer identify a category, validate a supplier, compare wholesale details, or start an RFQ.

The visual direction is **structured clinical sourcing**: a modular taxonomy inspired by Divoom's category architecture, combined with Bowelamp's generous spacing, clear hierarchy, and mobile ergonomics. The composition is not a generic marketing card wall. It uses a strong first viewport, a distinct category matrix, a product-specification grid, proof-led facility content, and a practical multi-item inquiry builder. Use real product or facility imagery when assets are supplied; do not substitute decorative gradients, emoji, or CSS-drawn photo placeholders.

The first viewport is deliberately decisive. A compact header sits above a split hero: the left side carries the single dominant value proposition, "Factory-direct medical consumables, ready for global procurement." Supporting copy names wholesale sourcing, export readiness, and compliance evidence. Two actions follow: **Explore catalog** as the primary action and **Request RFQ** as the secondary action. The right side is a quiet dark-navy export dashboard containing three supplied metrics—50,000+ sqm facility, 80+ export markets, and 99.5% on-time delivery—plus a restrained FDA / CE / ISO 13485 trust strip. The hero should be top-biased, not vertically centered, so the procurement path is immediately visible.

Use a maximum of three visible type weights in any viewport: 400 for reading, 600 for emphasis and headings, and 500 where a compact metadata label needs a middle step. Headings use the declared display family and negative tracking; all-caps labels use positive tracking. Keep body copy near 50–75 characters per line and prefer specific language such as "MOQ," "packaging configuration," "sterile barrier," "private label," and "certificate preview" over generic claims.

## Colors

The palette is a clinical light canvas with a navy evidence layer. Neutrals should occupy most of the page so the accent signals real actions rather than decoration.

- **Primary medical navy (#0A2540):** Main CTA fill, key headings, logo, navigation emphasis, and the strongest text on light surfaces. This is the default action color because it supports white text with reliable contrast.
- **Primary deep navy (#0F2038):** Hero evidence panel, trust strip, footer, and dark sections. Use white or near-white text only on this surface.
- **Secondary medical teal (#0D9488):** Utility action such as WhatsApp or sales-channel contact, active category indicator, and a small number of operational highlights. Keep it separate from the primary CTA so action roles remain legible.
- **Accent cyan (#0EA5E9):** Thin taxonomy rules, selected tabs, focus affordances, and small visual markers. Do not use cyan for normal-size body text on white, and do not place white normal text on a cyan fill unless the resulting contrast is verified; use the darker navy action instead.
- **Surface white (#FFFFFF):** Product cards, form panels, certificate previews, and content surfaces.
- **Canvas (#F8FAFC) and canvas-alt (#F1F5F9):** Page background, alternating bands, chip fills, and quiet specification zones.
- **On-surface navy (#0F2038):** Default text. **Muted slate (#475569):** Secondary copy and metadata; it is dark enough for normal text on white and slate backgrounds.
- **Border (#CBD5E1) and border-soft (#E2E8F0):** Structural lines, input boundaries, card edges, and separators. Use one-pixel rules sparingly.
- **Success emerald (#10B981) with success-ink (#065F46):** Verified compliance only: certificate status, audited facility proof, and confirmed sample or RFQ states. Pair the color with text or an icon; never rely on color alone.
- **Warning (#B45309) and danger (#B91C1C):** Validation and error states only, always paired with clear text.

All normal text must meet at least a 4.5:1 contrast ratio against its immediate background. Large text and UI components must meet at least 3:1. Focus indicators use the focus cyan (#0284C7) with a visible ring and must not be removed. Do not introduce purple, default indigo, ornamental multi-stop gradients, or un-tokened colors.

## Typography

Typography is technical and assured rather than corporate-heavy. Inter with a system fallback keeps tabular specs and long procurement labels stable across regions and devices.

- **Display and H1:** Use `display` or `h1` for the hero value proposition. Limit the hero headline to two or three lines at desktop and four at phone. One dominant entry point wins the first viewport; metrics and trust marks support it rather than competing with it.
- **H2:** Use `h2` for section openings: category matrix, featured wholesale consumables, OEM/ODM, compliance proof, sourcing advantages, and inquiry builder. Give each section a clear breathing gap before supporting content.
- **H3:** Use `h3` for category names, product names, facility proof modules, and form group labels. Do not turn every metadata label into a heading.
- **Body:** Use `body-lg` for the hero lead and section introductions, `body-md` for product and form content, and `body-sm` for packaging details, MOQ tags, and certificate metadata. Keep paragraphs left aligned and within a readable measure.
- **Labels:** Use `label-md` for buttons, navigation, tabs, and form labels. Use `label-caps` for short eyebrow labels such as `WHOLESALE CATALOG`, `EXPORT READY`, and `VERIFIED COMPLIANCE`; uppercase labels require the declared 0.08em tracking.
- **Mono:** Use `mono` only for RFQ line-item quantities, batch or reference IDs, MOQ values, and compact export metrics where tabular alignment helps. It is not a general body font.
- **Hierarchy:** Activate at least two vectors at once: scale plus spacing for major headings, weight plus tracking for labels, and alignment plus containment for proof panels. Avoid a flat ladder of nearly identical sizes and weights.

## Layout

Use a fluid 12-column desktop grid with a 1200px maximum content width and 24px gutters. At 1024px and above, the header may expose full navigation and mega-menu columns; the hero uses a 7/5 split, with the value proposition on the wider left and the export proof panel on the right. Keep the hero compact enough that the category entry point begins within the first scroll.

At 640–1023px, move to an 8-column grid with 20px gutters. Collapse the mega menu into a structured drawer, keep the two hero actions together, and let the proof panel move below the copy without losing the metrics. At widths below 640px, use a 4-column grid with 16px gutters and a 40px section rhythm. The hero becomes a single column, the two CTAs remain full-height touch targets, and the metric row becomes a horizontally readable three-item strip rather than tiny columns.

Use the following page rhythm and composition:

1. **Header:** One-line wordmark and key navigation on desktop, with a mega menu for the catalog, certification quick links, a Request Quote action, and a WhatsApp sales-channel button. On mobile, keep only the wordmark, menu trigger, and one quote action in the top bar; put certification links inside the drawer.
2. **Hero and trust strip:** Use the split first viewport described in Overview. Keep the trust strip as a dark contained band with short FDA, CE, and ISO 13485 labels and certificate-preview triggers rather than unsupported decorative logos.
3. **Eight-category taxonomy matrix:** Use one prominent matrix with eight visual category cards, not a flat wall of identical tiles. Each card has a category title, one-line scope, a small set of horizontally scrollable or wrapping subcategory pills, and a direct quick-inquiry trigger. At desktop, vary card spans subtly within the grid to create an authored rhythm; at mobile, use two columns with compact but readable cards.
4. **Featured wholesale consumables:** Use a tabbed showcase for PPE, wound care, injection, gloves, and the remaining supplied categories. The active tab is visually clear without making every tab cyan. Product cards prioritize product name, material or sterile status, packaging configuration, and MOQ tags. Show the RFQ add action at a consistent edge so multiple items can be accumulated without opening a new page.
5. **OEM/ODM and private label:** Use a wide, calmer split layout with a manufacturing capability narrative beside a short capability checklist or process rail. This is the distinctive visual break from the matrix: fewer cards, more open space, clear progression from specification to sample to production.
6. **Cleanroom, QA lab, and regulatory proof:** Use an evidence gallery or proof rail with supplied facility imagery and certificate preview triggers. Pair each image or preview with a caption and verification status. Avoid inventing certificate numbers, dates, or agencies.
7. **Sourcing advantages:** Present the supplied metrics—50,000+ sqm facility, 80+ export markets, 99.5% on-time delivery—in a connected horizontal sequence on desktop and stacked metric rows on mobile. Numbers should be large enough to scan; qualifiers explain what each number means.
8. **Multi-item RFQ and sample request:** Treat the inquiry builder as the conversion destination, not a generic contact form. Use a visible line-item list, quantity and MOQ fields, packaging or customization notes, sample request choice, destination, and contact details. Group fields with clear labels and show inline validation without shifting the form unexpectedly.
9. **Footer:** Use a dense but navigable B2B footer with catalog download, catalog and certification links, compliance disclaimer, regional or global sales channels, and the same primary contact path. The footer should close with a clear RFQ action and legal text in muted slate.

Horizontal scroll is intentional for mobile category pills and showcase tabs: show a partial next item as an affordance, preserve touch targets, and avoid a scrollbar that obscures labels. Use sticky bottom actions on phone—**Request quote** and **Chat on WhatsApp**—with enough bottom page padding that they never cover form controls or footer content. All interactive targets are at least 44x44 CSS pixels, including icon-only menu, close, tab, quick-inquiry, and preview controls.

Use proximity aggressively: 8–12px between a label and its value, 16–24px within a card, and 40–64px between unrelated groups. Break the page rhythm deliberately: the taxonomy is dense and scannable, OEM/ODM is spacious, and the RFQ panel is contained and operational. Do not give every section the same card treatment.

## Elevation & Depth

Depth comes from tonal layers, hairline borders, and one restrained raised level rather than shadows everywhere. The default content state is flat: white surfaces on `canvas`, separated by `border-soft`. Product cards and taxonomy cards use a one-pixel border and no shadow. The hero proof panel gains depth from `primary-deep` against the light canvas, not from a glow.

Use a short, purposeful raised shadow only for the mega menu, certificate preview dialog, sticky mobile action bar, and active RFQ drawer: a 0 4px 16px shadow using the primary color at low opacity. Use a clear focus ring outside the component so keyboard navigation never depends on elevation. Hover may lift a taxonomy or product card by 1–2px and strengthen its border, but the content must remain stable and the interaction must be understandable without motion.

Keep transitions around 150–220ms with a standard ease. Respect reduced-motion preferences by removing lift, count-up, and drawer movement while preserving state changes through color, border, and text. Loading states for product tabs and RFQ submission should use an intentional skeleton or labelled status, never an unexplained spinner.

## Shapes

The shape language is engineered softness: 6px for buttons and inputs, 10px for content cards, 16px for large proof panels, and a full pill only for category filters, status badges, and compact tags. Do not mix sharp rectangular cards with pill-shaped buttons in the same component family. Cards should feel like modular trays in a clinical supply room, not floating app tiles.

Use consistent 1px borders with comfortable internal padding. A taxonomy card may use a narrow cyan top rule or a small cyan marker, but never a colored left border paired with a rounded card. Product imagery should be cropped cleanly and supported by a neutral surface; do not apply decorative masks that reduce recognition of packaging or sterile-barrier details. Certificate previews use a restrained rectangular frame with an explicit `Preview certificate` label.

## Components

- **Header and mega menu:** The wordmark is navy and compact. Navigation uses `label-md`; the active item gets a bottom rule or text weight shift, not a flood of accent color. The mega menu opens from the catalog item as a two- or three-column panel grouped by procurement task: categories, certification, and sourcing help. It has a clear close target, keyboard escape behavior, and a visible focus state.
- **Buttons:** The primary button uses `button-primary` with navy fill and white text; it is reserved for the dominant next step, especially Explore catalog or the final Request RFQ action. The secondary button uses `button-secondary` with a navy label and border. `button-utility` is reserved for WhatsApp or a sales-channel action. All buttons are minimum 44px tall, preferably 48px, and use short action labels. Hover darkens or strengthens the border; pressed state moves content by no more than 2px.
- **Trust strip and badges:** The trust strip uses `trust-strip` with short text labels and restrained separators. Verified status uses `verified-badge` only when the supplied content supports it. Add a text qualifier such as `Certificate preview` or `Verified document` so status is never conveyed by emerald alone.
- **Taxonomy cards and chips:** `taxonomy-card` contains one clear category title, a short scope line, up to five immediately useful subcategory pills, and one quick-inquiry action. Use `chip` for filters and subcategories; selected chips may use navy text with a thin cyan rule rather than a saturated fill. On mobile, chips remain at least 40px high and can scroll horizontally.
- **Product showcase:** The active tab is a single selected state with a navy label and cyan underline. Product cards use `card`; keep product image, name, packaging specs, MOQ, and RFQ action in a repeatable order. The add-to-RFQ control must expose its selected state with text or a count, not color alone. Avoid excessive badges: one compliance tag and one MOQ tag are usually enough.
- **Metrics:** Metric numbers use `display` or `h2` depending on context, with `mono` for compact qualifiers where alignment is useful. Keep the supplied values exact: `50,000+ sqm`, `80+ export markets`, and `99.5% on-time delivery`. Do not fabricate additional performance claims.
- **OEM/ODM process rail:** Use a connected 3- or 4-step rail such as `Specification`, `Sample`, `Production`, `Export`, only where those steps are part of the supplied capability story. The current step or emphasized capability uses typography and a small cyan marker; do not rely on animation.
- **Certificate preview:** Use a bordered preview trigger with document title, issuing standard, and verification status when supplied. The dialog uses a white surface, raised depth, 16px padding minimum, a 44px close target, a descriptive title, and a clear return path.
- **Inputs and RFQ builder:** Use `input` for text inputs, selects, quantities, and textareas. Labels are always visible; placeholders are examples, not labels. Group the multi-item line list, delivery destination, customization notes, sample request, and contact information into logical regions. Inline errors use danger plus exact correction guidance. A successful submission confirms what was captured and what happens next without inventing a response time.
- **Tabs and drawers:** Tabs are keyboard reachable, show selected state with text and an underline, and retain product context when switching. The RFQ drawer or modal keeps the current item count visible, supports removal and quantity edits, and can be closed without losing entered data. On mobile, bottom actions remain fixed but never obscure the drawer's final submit control.
- **Footer:** Use a multi-column desktop layout that collapses to accordion groups on mobile. Catalog download, certification, sourcing, and sales-channel links share the same label treatment. Keep compliance disclaimer text readable; do not reduce it below `body-sm`.
- **Links, focus, and states:** Links are navy or teal depending on context and gain an underline on hover. Every link, button, input, tab, menu item, and dialog control has a visible `:focus-visible` ring based on the focus token. Include hover, pressed, selected, disabled, loading, validation-error, empty, and success states for RFQ and product interactions. Never communicate state by color alone.

## Do's and Don'ts

- Do make the first viewport answer three procurement questions immediately: what is supplied, can it be trusted, and how do I request it?
- Do keep the primary action navy and the utility contact action teal; use cyan as a measured pathway marker, not as a blanket brand fill.
- Do use the supplied metrics and compliance names exactly, and label any certificate or factory detail that is a preview rather than a complete document.
- Do let the eight-category matrix be visually memorable through span, image crop, and taxonomy structure while keeping every card equally understandable.
- Do keep mobile cards in two columns, make category pills horizontally scrollable, and provide sticky quote/chat actions with 44x44 CSS-pixel minimum targets.
- Do preserve keyboard access, visible focus, reduced-motion behavior, semantic labels, and 4.5:1 normal-text contrast.
- Do use real supplied product, facility, lab, or certificate imagery. If no asset exists, omit the image slot or use a clearly labelled content state; never use external placeholder-image services or a decorative CSS rectangle pretending to be a photograph.
- Do vary section density: dense taxonomy, structured product comparison, spacious OEM/ODM proof, then an operational RFQ builder.
- Don't use purple gradients, blue-to-cyan trust gradients, glassmorphism, neon glows, emoji feature icons, or generic SaaS illustrations.
- Don't turn every requirement into a rounded card, a three-column feature grid, or a floating shadow tile.
- Don't invent certificate IDs, regulatory approvals, export claims, lead times, customer logos, or performance metrics beyond the supplied project context.
- Don't use cyan or teal as normal-size body text on white unless contrast is verified; never use light text on a bright cyan fill by default.
- Don't hide form labels inside placeholders, remove focus outlines, use color alone for verified/error states, or make icon-only controls smaller than 44x44 CSS pixels.
- Don't overuse all-caps labels, bold every metric, or allow more than one dominant entry point within a visual region.
- Don't let sticky mobile actions cover content, trap focus behind a drawer, or reset a buyer's RFQ line items when tabs or preview dialogs change state.
