const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const assert = require('assert');

console.log('================================================================');
console.log('🧪 Testing Safe PowerShell Deployment Script in Mock Server Env');
console.log('================================================================\n');

const mockServerDir = path.join(__dirname, 'mock_server_maxvor');
const mockAppDataDir = path.join(mockServerDir, 'App_Data');
const mockUploadsDir = path.join(mockServerDir, 'assets', 'uploads');

// 1. Prepare Mock Server Environment with existing user modified data
if (fs.existsSync(mockServerDir)) {
  fs.rmSync(mockServerDir, { recursive: true, force: true });
}

fs.mkdirSync(mockAppDataDir, { recursive: true });
fs.mkdirSync(mockUploadsDir, { recursive: true });

const customUserJson = {
  version: 'v10',
  lastUpdated: '2026-11-24T08:00:00Z',
  customNote: 'CRITICAL USER MODIFIED CONTENT MUST NEVER BE OVERWRITTEN',
  productsEn: [
    {
      id: 'kinesiology-muscle-tape-waterproof-elastic',
      name: 'USER MANUALLY MODIFIED TITLE IN ADMIN',
      image: '/assets/uploads/custom_photo_1.png',
      gallery: ['/assets/uploads/custom_photo_1.png', '/assets/uploads/custom_photo_2.png'],
      moq: '25 Cartons',
      isActive: true
    }
  ]
};

const userJsonPath = path.join(mockAppDataDir, 'site_data.json');
fs.writeFileSync(userJsonPath, JSON.stringify(customUserJson, null, 2), 'utf8');

const userCustomPhotoPath = path.join(mockUploadsDir, 'custom_photo_1.png');
fs.writeFileSync(userCustomPhotoPath, 'MOCK_BINARY_IMAGE_DATA_USER_UPLOAD', 'utf8');

console.log('[Mock Environment Initialized]:');
console.log(`  - Target Dir: ${mockServerDir}`);
console.log(`  - Existing App_Data/site_data.json written with custom user data.`);
console.log(`  - Existing assets/uploads/custom_photo_1.png written.\n`);

// 2. Run deploy_maxvor_safe.ps1 against mockServerDir
const zipPath = path.join(__dirname, '..', 'maxvor-medical-website-dist.zip');
assert.ok(fs.existsSync(zipPath), 'Deployment zip package must exist');

const psScript = path.join(__dirname, 'deploy_maxvor_safe.ps1');

console.log('👉 Executing deploy_maxvor_safe.ps1 with target parameter...');
try {
  const output = execSync(
    `powershell -NoProfile -ExecutionPolicy Bypass -File "${psScript}" -TargetDir "${mockServerDir}" -ZipFile "${zipPath}"`,
    { encoding: 'utf8' }
  );
  console.log(output);
} catch (err) {
  console.error('Execution error:', err);
  process.exit(1);
}

// 3. Verify assertions
console.log('👉 Verifying Deployment Results & File Integrity...');

// A. index.html & assets must be deployed
const deployedIndex = path.join(mockServerDir, 'index.html');
assert.ok(fs.existsSync(deployedIndex), 'index.html must be deployed to mock server');
console.log('  ✅ [PASS] Latest index.html successfully deployed.');

// B. App_Data/site_data.json must be 100% UNTOUCHED
const afterJson = JSON.parse(fs.readFileSync(userJsonPath, 'utf8'));
assert.strictEqual(
  afterJson.customNote, 
  'CRITICAL USER MODIFIED CONTENT MUST NEVER BE OVERWRITTEN',
  'FAIL: App_Data/site_data.json was overwritten!'
);
assert.strictEqual(
  afterJson.productsEn[0].name,
  'USER MANUALLY MODIFIED TITLE IN ADMIN',
  'FAIL: User modified product data was wiped!'
);
console.log('  ✅ [PASS] App_Data/site_data.json is 100% PRESERVED.');

// C. Snapshot backup must exist
const snapshotsDir = path.join(mockAppDataDir, 'snapshots');
assert.ok(fs.existsSync(snapshotsDir), 'Snapshots directory must be created');
const snapshots = fs.readdirSync(snapshotsDir);
assert.ok(snapshots.length > 0, 'A timestamped snapshot must be automatically created');
console.log(`  ✅ [PASS] Automatic pre-deployment safety snapshot created: ${snapshots[0]}`);

// D. Uploaded images must be 100% UNTOUCHED
assert.ok(fs.existsSync(userCustomPhotoPath), 'FAIL: User uploaded image was deleted!');
const photoContent = fs.readFileSync(userCustomPhotoPath, 'utf8');
assert.strictEqual(photoContent, 'MOCK_BINARY_IMAGE_DATA_USER_UPLOAD', 'FAIL: User photo content corrupted');
console.log('  ✅ [PASS] assets/uploads/ folder and uploaded photos are 100% PRESERVED.');

// Clean up mock directory
fs.rmSync(mockServerDir, { recursive: true, force: true });
console.log('\n================================================================');
console.log('🎉 DEPLOYMENT SCRIPT VERIFICATION TEST PASSED (100% SUCCESS)');
console.log('================================================================');
