// Countdown to Tue 23 June 2026 00:00 CEST (UTC+2)
const TARGET = new Date('2026-06-23T00:00:00+02:00');

function updateCd() {
  const diff = TARGET - Date.now();
  const pad  = n => String(Math.max(0, n)).padStart(2, '0');
  if (diff <= 0) {
    ['days','hours','mins','secs'].forEach(id =>
      (document.getElementById('cd-' + id).textContent = '00')
    );
    return;
  }
  document.getElementById('cd-days').textContent  = pad(Math.floor(diff / 86400000));
  document.getElementById('cd-hours').textContent = pad(Math.floor((diff % 86400000) / 3600000));
  document.getElementById('cd-mins').textContent  = pad(Math.floor((diff % 3600000) / 60000));
  document.getElementById('cd-secs').textContent  = pad(Math.floor((diff % 60000) / 1000));
}
updateCd();
setInterval(updateCd, 1000);

// Starfield
const guestEl = document.getElementById('guest-section');
for (let i = 0; i < 80; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const sz = Math.random() * 2.5 + .5;
  s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;opacity:${Math.random()*.5+.1};animation:twinkle ${2+Math.random()*4}s ${Math.random()*-6}s ease-in-out infinite;`;
  guestEl.appendChild(s);
}

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
