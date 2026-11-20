const { BLOG_ARTICLES } = require('./src/data/articles.js');
console.log('Existing English Articles count:', BLOG_ARTICLES.length);
console.log('Existing IDs:', BLOG_ARTICLES.map(a => a.id));
