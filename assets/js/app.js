/* ════════════════════════════════════════════
   APP.JS  ·  Alpine.js Data + GSAP Animations

   POLA YANG DIGUNAKAN:
   - window.portalData()  → fungsi global yang
     dipanggil langsung oleh x-data="portalData()"
   - Tidak bergantung pada alpine:init event timing
   ════════════════════════════════════════════ */

// ─── Alpine Data (sebagai fungsi global di window) ──────────────────────
// x-data="portalData()" di HTML akan memanggil fungsi ini.
// Pattern ini 100% aman: tidak ada dependency pada event timing.
window.portalData = function () {
  return {
    company: null,

    // ── Brand switcher ──
    switchTo(c) {
      document.body.classList.add('theme-transitioning');
      this.company = c;
      document.body.className = 'theme-transitioning ' + c;
      setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
        // Animasikan cards setelah Alpine me-render elemen
        setTimeout(() => {
          gsap.from('.menu-card', { opacity: 0, duration: 0.4, stagger: 0.07, ease: 'power3.out' });
          gsap.from('.quick-link', { opacity: 0, duration: 0.3, delay: 0.4, stagger: 0.05, ease: 'power3.out' });
        }, 50);
      }, 300);
    },

    backToHome() {
      document.body.classList.add('theme-transitioning');
      this.company = null;
      document.body.className = 'theme-transitioning neutral';
      setTimeout(() => document.body.classList.remove('theme-transitioning'), 500);
    },

    // ── Company data ──
    // Untuk menambah perusahaan baru: duplikasi satu block, ganti key & isi
    companies: {
      prasetia: {
        name: 'PRASETIA',
        sub: 'GROUP',
        tagline: 'Inovasi\nDigital\n<em>Tanpa Batas</em>',
        desc: 'Platform terpusat untuk seluruh layanan dan ekosistem digital Prasetia Technology Group.',
        menus: [
          { icon: '🎯', title: 'KPI Individu Prasetia', desc: 'Form Approval KPI Individu Prasetia.', url: 'https://applink.larksuite.com/T96mc1GwTz4i', label: 'Go to Lark', target: '_blank' },
          { icon: '📊', title: 'KPI Departemen Prasetia', desc: 'Form Approval KPI Departemen Prasetia.', url: '#', label: 'Go to Lark' },
          { icon: '🎯', title: 'KPI Individu Prasetia Qube Wellness', desc: 'Form Approval KPI Individu Prasetia Qube Wellness.', url: 'https://applink.larksuite.com/T96mcQROVGDd', label: 'Go to Lark', target: '_blank' }
        ],
        quickLinks: [
          { label: 'Bot CPP', url: '#' },
          { label: 'Documentation', url: '#' }
        ],
      },

      verdanco: {
        name: 'VERDANCO',
        sub: 'GROUP',
        tagline: 'Sumber Daya\nAlam\n<em>Dikelola Cerdas</em>',
        desc: 'Portal operasional terpadu untuk mendukung kegiatan pertambangan dan pengelolaan aset Verdanco Group.',
        menus: [
          { icon: '🎯', title: 'KPI Individu Verdanco Engineering', desc: 'Form Approval KPI Individu Verdanco Engineering.', url: 'https://applink.larksuite.com/T96mdLaAJB62', label: 'Go to Lark', target: '_blank' },
          { icon: '🎯', title: 'KPI Departemen Verdanco Engineering', desc: 'Form Approval KPI Departemen Verdanco Engineering.', url: 'https://applink.larksuite.com/T96mdJRdOQji', label: 'Go to Lark', target: '_blank' },
          { icon: '🚛', title: 'Dashboard Monitoring Asset', desc: 'Memantau kondisi, lokasi, status, dan penggunaan aset secara real-time.', url: 'https://verdanco.sg.larksuite.com/base/IMjubXLqva4B6SsT9m2u5t9Usbe?table=tblOR72hLENhftXH&view=vewnUZoTs4', label: 'Go To Lark', target: '_blank' }
        ],
        quickLinks: [
          { label: 'Bot CPP', url: '#' },
          { label: 'Documentation', url: '#' }
        ],
      },
    },
  };
};


// ─── GSAP Entrance Animations ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('nav', { y: -30, opacity: 0, duration: 0.6, ease: 'power3.out' });
  gsap.from('.select-header', { y: -20, opacity: 0, duration: 0.6, delay: 0.1, ease: 'power3.out' });
  gsap.from('.select-card', { y: 40, opacity: 0, duration: 0.6, delay: 0.25, stagger: 0.15, ease: 'power3.out' });
});
