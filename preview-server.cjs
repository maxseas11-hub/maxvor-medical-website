const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5188;
const DIST_DIR = path.join(__dirname, 'dist');
const DATA_FILE = path.join(__dirname, 'public', 'api', 'site-data.json');
const DIST_DATA_FILE = path.join(__dirname, 'dist', 'api', 'site-data.json');
const UPLOAD_DIR = path.join(__dirname, 'public', 'assets', 'uploads');
const DIST_UPLOAD_DIR = path.join(__dirname, 'dist', 'assets', 'uploads');

[path.dirname(DATA_FILE), path.dirname(DIST_DATA_FILE), UPLOAD_DIR, DIST_UPLOAD_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.ashx': 'application/json; charset=UTF-8'
};

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = req.url.split('?')[0];

  // 1. API: /api/site-data.ashx
  if (parsedUrl === '/api/site-data.ashx') {
    if (req.method === 'GET') {
      let data = null;
      if (fs.existsSync(DATA_FILE)) {
        try {
          data = fs.readFileSync(DATA_FILE, 'utf8');
        } catch {}
      } else if (fs.existsSync(DIST_DATA_FILE)) {
        try {
          data = fs.readFileSync(DIST_DATA_FILE, 'utf8');
        } catch {}
      }

      if (data) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(data);
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify({ error: 'No persisted server data yet' }));
      }
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          // validate JSON
          JSON.parse(body);
          fs.writeFileSync(DATA_FILE, body, 'utf8');
          fs.writeFileSync(DIST_DATA_FILE, body, 'utf8');
          console.log(`[API] Saved site data to disk (${(body.length / 1024).toFixed(1)} KB)`);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ success: true, timestamp: new Date().toISOString() }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ error: 'Invalid JSON', message: err.message }));
        }
      });
      return;
    }
  }

  // 2. API: /api/upload.ashx
  if (parsedUrl === '/api/upload.ashx' && req.method === 'POST') {
    const boundaryMatch = req.headers['content-type']?.match(/boundary=(.+)$/);
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const filename = `upload-${Date.now()}-${Math.floor(Math.random() * 1000)}.png`;
      const publicPath = path.join(UPLOAD_DIR, filename);
      const distPath = path.join(DIST_UPLOAD_DIR, filename);

      fs.writeFileSync(publicPath, buffer);
      fs.writeFileSync(distPath, buffer);

      console.log(`[API] Image uploaded: ${filename}`);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
      res.end(JSON.stringify({ success: true, url: `/assets/uploads/${filename}` }));
    });
    return;
  }

  // 3. Static Files & SPA Routing
  let urlPath = decodeURIComponent(parsedUrl);
  if (urlPath === '/') urlPath = '/index.html';

  let filePath = path.join(DIST_DIR, urlPath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA Fallback for client-side routing
      const indexPath = path.join(DIST_DIR, 'index.html');
      fs.readFile(indexPath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.end(content);
        }
      });
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[Preview Server] Running with persistent API backend at http://localhost:${PORT}/ and http://127.0.0.1:${PORT}/`);
});
