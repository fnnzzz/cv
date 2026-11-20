// Generates src/llms-full.txt (the whole CV as Markdown for LLMs) from src/app/cv-data.json. Run: npm run llms
const fs = require('fs');
const d = JSON.parse(fs.readFileSync('src/app/cv-data.json', 'utf8'));
const years = String(new Date().getFullYear() - 2015);
const md = (s) => String(s || '')
  .replace(/\{\{OVERALL_EXPERIENCE_YEARS\}\}/g, years)
  .replace(/<img[^>]*>/g, '')
  .replace(/<a [^>]*href='([^']+)'[^>]*>(.*?)<\/a>/g, '[$2]($1)')
  .replace(/<b>(.*?)<\/b>/g, '**$1**')
  .replace(/<[^>]+>/g, '')
  .replace(/\s+/g, ' ').trim();
const out = [];
out.push(`# ${d.header.fullname}`, '', `${md(d.header.title)}`, '', `${md(d.header.location)}`, '');
out.push(...(d.header.links || []).map((l) => `- ${l.name}: ${l.href.replace(/^mailto:/, '')}`), '');
out.push(`## ${d.summary.title}`, '', ...d.summary.paragraphs.flatMap((p) => [md(p), '']));
for (const sec of d.sections) {
  out.push(`## ${sec.title}`, '');
  for (const e of sec.entries) {
    const when = [e.start, e.end || (e.start && sec.title !== 'Earlier' ? 'now' : '')].filter(Boolean).join(' - ');
    out.push(`### ${md(e.name)}${when ? ` (${when})` : ''}`, '');
    if (e.descr) out.push(md(e.descr), '');
    for (const b of e.bullets || []) out.push(`- ${md(b)}`);
    if (e.bullets && e.bullets.length) out.push('');
    if (e.stack) out.push(`Stack: ${md(e.stack)}`, '');
  }
}
out.push(`## ${d.skills.title}`, '', ...d.skills.rows.map((r) => `- ${r.name}: ${md(r.items)}`), '');
out.push(`## ${d.education.title}`, '', ...d.education.lines.map((l) => `- ${md(l)}`), '');
fs.writeFileSync('src/llms-full.txt', out.join('\n'));
console.log('wrote src/llms-full.txt', out.join('\n').length, 'chars');
