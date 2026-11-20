const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public', 'assets', 'images', 'endoscopy_raw');
const destDir = path.join(__dirname, 'public', 'assets', 'images', 'endoscopy');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Function to find file in srcDir recursively
function findFiles(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath, fileList);
    } else {
      fileList.push({ name: item, fullPath });
    }
  }
  return fileList;
}

const allFiles = findFiles(srcDir);
console.log(`Found ${allFiles.length} files in endoscopy_raw:`);
allFiles.forEach(f => console.log(` - ${f.name} (${f.fullPath})`));

// Copy all files with clean standardized names
const nameMapping = {
  'Digital Visual Puncture Mini Nephroscope.png': 'visual-puncture-mini-nephroscope.png',
  'Digital Miniature Nephroscope(8.512Fr).png': 'digital-miniature-nephroscope.png',
  'New-type Nephroscope.png': 'mini-pcnl-nephroscope.png',
  'Miniature Nephroscope.png': 'miniature-nephroscope-standard.png',
  'Miniature Nephroscope Auxiliary Products.png': 'miniature-nephroscope-auxiliary.png',
  'Rigid Digital Nephroscope.png': 'rigid-digital-nephroscope.png',
  'Rigid Fiber Uretero-renoscope.png': 'rigid-fiber-ureteroscope.png',
  'Single-use Digital Flexible Ureteroscope.png': 'single-use-flexible-ureteroscope.png',
  'Digital Flexible Uretero-renoscope.png': 'reusable-flexible-ureteroscope.png',
  'Digital Flexible Uretero-renoscope Optional Accessory.png': 'flexible-ureteroscope-accessory.png',
  'Sheath-free Rigid Digital Cystoscope with Channel.png': 'sheath-free-rigid-cystoscope.png',
  'Sheath-free Rigid Digital Cystoscope with Channel Matching Surgical Instrument and Accessories.png': 'sheath-free-cystoscope-accessories.png',
  'Single-use Digital Flexible Cystoscope.png': 'single-use-flexible-cystoscope.png',
  'Digital Flexible Cystoscope.png': 'reusable-flexible-cystoscope.png',
  'Ultra-thin Digital Laserscope(9809.106).png': 'ultra-thin-digital-laserscope.png',
  'Ultra-mini Digital Morcescope (with 22Fr outer sheath).png': 'ultra-mini-digital-morcescope.png',
  'Rigid Digital Hysteroscope (Fetoscope).png': 'rigid-digital-fetoscope.png',
  'Digital Hysteroscope(Fetoscope) Supporting Surgical Instruments.png': 'fetoscope-surgical-instruments.png',
  '6Fr Guide Needle.png': 'fetoscope-guide-needle-6fr.png',
  '6.6Fr Guide Needle.png': 'fetoscope-guide-needle-6-6fr.png',
  'HD LED Medical Cold Light Source.png': 'hd-led-cold-light-source.png',
  '4K UHD Medical Endoscopic Camera System.png': '4k-uhd-camera-system.png',
  'Endoscope Irrigator    WK-CX100.png': 'endoscope-irrigator-suction-pump.png',
  'Endoscope Irrigator.png': 'endoscope-irrigator-main.png',
  'Endoscope Irrigator 2.png': 'endoscope-irrigator-perfusion-pump.png',
  'Collecting Bottle.png': 'irrigator-collecting-bottle.png',
  'Infusion Tube.png': 'irrigator-infusion-tube.png',
  'Suction Tube.png': 'irrigator-suction-tube.png',
  'Digital Vontoscope  Digital Visual Sheathing and Negative Pressure Lithotriptoscope System.png': 'digital-visual-sheathing-lithotripsy-tower.png',
  'Digital Visual Sheathing Endoscope 锟斤拷9802.8681锟斤拷.png': 'digital-visual-sheathing-endoscope.png',
  'Digital Negative Pressure lithotripscope 锟斤拷9801.8681锟斤拷.png': 'digital-negative-pressure-lithotripscope.png',
  'Negative Pressure Collector.png': 'negative-pressure-collector.png',
  'Reusable irrigation&suction sheath(9809. 8062).png': 'reusable-irrigation-suction-sheath.png',
  'Intergated Digital Hysteroscope Intergated Digital Hysteroscope(MINI).png': 'integrated-digital-hysteroscope.png',
  'Digital Hysteroscope(Cold Knife).png': 'digital-cold-knife-hysteroscope.png',
  'Digital Hysteroscope Surgery System.png': 'digital-hysteroscope-surgery-system.png',
  'Single-use flexible universal bendable negative pressure calculus-removing sheath.png': 'flexible-bendable-negative-pressure-sheath.png',
  'Single-use Ureteral Guide Sheath Flexible Universal Bendable Negative Pressure Calculus-Removing Sheath.png': 'ureteral-guide-sheath-full-set.png',
  'Zebra Guide Wire.png': 'zebra-guide-wire.png',
  'Matching Surgical Instrument and Accessories.png': 'endoscopic-forceps-matching-instruments.png',
  '1 Matching Surgical Instrument and Accessories.png': 'custom-nephroscope-instruments.png',
  'Knotter.png': 'iud-knotter-instrument.png',
  'Three-way flusher.png': 'three-way-flusher.png',
  'biopsy forceps 9Fr锟斤拷350mm Foreign body forceps 9Fr锟斤拷350m Scissors 9Fr锟斤拷350mm.png': 'iud-endoscopic-instruments-set.png',
  '9802.561 9802.562 Tooth grasping forceps Flat.png': 'tooth-grasping-forceps-flat.png'
};

allFiles.forEach(f => {
  // Check exact or partial match
  let matchedTarget = null;
  for (const [key, val] of Object.entries(nameMapping)) {
    if (f.name.includes(key.substring(0, 15)) || f.name === key) {
      matchedTarget = val;
      break;
    }
  }

  // Fallback slugification
  const cleanName = matchedTarget || f.name.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-+|-+$/g, '');
  const destPath = path.join(destDir, cleanName);
  fs.copyFileSync(f.fullPath, destPath);
  console.log(`Copied: ${f.name} -> ${cleanName}`);
});

console.log('All endoscopy images successfully copied and standardized.');
