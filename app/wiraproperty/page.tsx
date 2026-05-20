import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proposal Project WiraProperty',
};

export default function WiraPropertyPage() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        
        .wira-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
        .wira-wrap {
          --blue-primary: #0ea5e9;
          --blue-light: #e0f2fe;
          --blue-accent: #38bdf8;
          --blue-dark: #0284c7;
          --bg-color: #ffffff;
          --surface: #f8fafc;
          --surface2: #f1f5f9;
          --text: #0f172a;
          --muted: #64748b;
          --border: #bae6fd;
          
          background-color: var(--bg-color); 
          font-family: 'DM Sans', sans-serif; 
          color: var(--text);
          line-height: 1.6;
        }

        /* Layout Full Screen & Mobile Friendly */
        .wira-wrap .wrap { 
          padding: 3rem 5%; 
          max-width: 1200px; 
          margin: 0 auto;
          width: 100%;
        }

        /* Hero Section */
        .wira-wrap .hero { 
          background: linear-gradient(135deg, var(--blue-primary) 0%, var(--blue-accent) 100%); 
          border-radius: 20px; 
          padding: 4rem 3rem; 
          margin-bottom: 2rem; 
          position: relative; 
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(14, 165, 233, 0.15);
        }
        .wira-wrap .hero::before { content: ''; position: absolute; top: -60px; right: -60px; width: 300px; height: 300px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); }
        .wira-wrap .hero::after { content: ''; position: absolute; bottom: -40px; right: 100px; width: 150px; height: 150px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.15); }
        .wira-wrap .hero-tag { display: inline-block; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); color: #ffffff; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 30px; margin-bottom: 1.5rem; backdrop-filter: blur(4px); }
        .wira-wrap .hero h1 { font-size: 46px; font-weight: 600; color: #ffffff; line-height: 1.15; margin-bottom: 1rem; }
        .wira-wrap .hero h1 em { color: var(--blue-light); font-style: normal; font-weight: 400; }
        .wira-wrap .hero-sub { font-size: 16px; color: rgba(255,255,255,0.9); font-weight: 300; max-width: 600px; margin-bottom: 2.5rem; }
        .wira-wrap .hero-meta { display: flex; gap: 3rem; flex-wrap: wrap; }
        .wira-wrap .hero-meta div { font-size: 13px; color: rgba(255,255,255,0.7); letter-spacing: 0.05em; text-transform: uppercase; }
        .wira-wrap .hero-meta span { display: block; font-size: 18px; font-weight: 600; color: #ffffff; letter-spacing: 0; margin-top: 4px; }

        /* KPI Section */
        .wira-wrap .kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 2.5rem; }
        .wira-wrap .kpi { background: #ffffff; border: 1px solid var(--border); box-shadow: 0 4px 6px rgba(0,0,0,0.02); border-radius: 16px; padding: 1.5rem 1rem; text-align: center; transition: transform 0.2s ease; }
        .wira-wrap .kpi:hover { transform: translateY(-3px); }
        .wira-wrap .kpi-num { font-size: 36px; font-weight: 600; color: var(--blue-primary); line-height: 1; }
        .wira-wrap .kpi-label { font-size: 12px; font-weight: 500; color: var(--muted); margin-top: 8px; text-transform: uppercase; letter-spacing: 0.05em; }

        /* Generic Section Styles */
        .wira-wrap .section { margin-bottom: 2.5rem; }
        .wira-wrap .sec-header { display: flex; align-items: center; gap: 12px; margin-bottom: 1.5rem; }
        .wira-wrap .sec-num { font-size: 14px; font-weight: 600; color: var(--blue-primary); letter-spacing: 0.1em; background: var(--blue-light); padding: 4px 8px; border-radius: 6px; }
        .wira-wrap .sec-title { font-size: 24px; font-weight: 600; color: var(--text); }
        .wira-wrap .sec-line { flex: 1; height: 1px; background: var(--border); }

        /* Card Grid */
        .wira-wrap .card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .wira-wrap .card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; }
        .wira-wrap .card.accent { border-color: var(--blue-accent); background: linear-gradient(135deg, #ffffff 0%, var(--blue-light) 100%); }
        .wira-wrap .card-icon { width: 42px; height: 42px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; font-size: 22px; }
        .wira-wrap .card-icon.blue { background: var(--blue-primary); color: #fff; }
        .wira-wrap .card-icon.light { background: var(--blue-light); color: var(--blue-dark); }
        .wira-wrap .card h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; color: var(--text); }
        .wira-wrap .card p { font-size: 14px; color: var(--muted); line-height: 1.6; }

        /* Features */
        .wira-wrap .feature-list { display: flex; flex-direction: column; gap: 12px; }
        .wira-wrap .feat { display: flex; align-items: flex-start; gap: 16px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.25rem; }
        .wira-wrap .feat-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--blue-primary); margin-top: 6px; flex-shrink: 0; box-shadow: 0 0 0 3px var(--blue-light); }
        .wira-wrap .feat-content h4 { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
        .wira-wrap .feat-content p { font-size: 14px; color: var(--muted); line-height: 1.6; }

        /* Badges */
        .wira-wrap .badge-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 1.5rem; }
        .wira-wrap .badge { font-size: 12px; padding: 6px 14px; border-radius: 20px; font-weight: 500; border: 1px solid var(--border); background: var(--bg-color); color: var(--blue-dark); }
        .wira-wrap .badge.filled { background: var(--blue-light); border-color: transparent; }

        /* Timeline */
        .wira-wrap .timeline { display: flex; flex-direction: column; gap: 0; }
        .wira-wrap .tl-item { display: flex; gap: 20px; padding-bottom: 1.5rem; position: relative; }
        .wira-wrap .tl-item:last-child { padding-bottom: 0; }
        .wira-wrap .tl-left { display: flex; flex-direction: column; align-items: center; width: 24px; flex-shrink: 0; }
        .wira-wrap .tl-circle { width: 12px; height: 12px; border-radius: 50%; background: var(--blue-primary); flex-shrink: 0; margin-top: 4px; }
        .wira-wrap .tl-line { width: 2px; flex: 1; background: var(--blue-light); margin-top: 4px; }
        .wira-wrap .tl-item:last-child .tl-line { display: none; }
        .wira-wrap .tl-content { flex: 1; padding-bottom: 0.5rem; }
        .wira-wrap .tl-phase { font-size: 12px; color: var(--blue-primary); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 4px; }
        .wira-wrap .tl-title { font-size: 16px; font-weight: 600; margin-bottom: 6px; }
        .wira-wrap .tl-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }

        /* Value Block */
        .wira-wrap .value-block { background: var(--blue-dark); border-radius: 16px; padding: 2rem 2.5rem; margin-bottom: 2.5rem; position: relative; overflow: hidden; color: #fff; text-align: center; }
        .wira-wrap .value-block::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px); }
        .wira-wrap .value-block h2 { font-size: 22px; font-weight: 600; margin-bottom: 0.75rem; position: relative; z-index: 1; }
        .wira-wrap .value-block p { font-size: 15px; color: rgba(255,255,255,0.85); line-height: 1.7; position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }

        /* Security Grid */
        .wira-wrap .security-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .wira-wrap .sec-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.25rem; display: flex; align-items: flex-start; gap: 14px; }
        .wira-wrap .sec-card i { font-size: 24px; color: var(--blue-primary); }
        .wira-wrap .sec-card h4 { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
        .wira-wrap .sec-card p { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* Table */
        .wira-wrap .roles-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .wira-wrap .roles-table th { text-align: left; padding: 12px 16px; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--blue-dark); font-weight: 600; background: var(--blue-light); }
        .wira-wrap .roles-table td { padding: 14px 16px; border-bottom: 1px solid var(--border); vertical-align: top; font-size: 14px; }
        .wira-wrap .roles-table tr:last-child td { border-bottom: none; }
        .wira-wrap .role-pill { display: inline-block; font-size: 12px; padding: 4px 12px; border-radius: 20px; font-weight: 600; }
        .wira-wrap .role-super { background: var(--blue-dark); color: #fff; }
        .wira-wrap .role-admin { background: var(--blue-primary); color: #fff; }
        .wira-wrap .role-staff { background: var(--blue-light); color: var(--blue-dark); }

        /* Call to Action */
        .wira-wrap .cta { background: linear-gradient(to right, var(--surface), var(--blue-light)); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; text-align: center; margin-top: 2rem; }
        .wira-wrap .cta p { font-size: 15px; color: var(--muted); margin-bottom: 0.5rem; }
        .wira-wrap .cta-strong { font-size: 24px; font-weight: 600; color: var(--text); margin-bottom: 1.5rem; }
        .wira-wrap .cta-badge { display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: var(--blue-primary); color: #fff; font-size: 15px; padding: 12px 28px; border-radius: 8px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 10px rgba(14, 165, 233, 0.3); transition: all 0.2s ease; text-decoration: none; }
        .wira-wrap .cta-badge:hover { background: var(--blue-dark); transform: translateY(-2px); box-shadow: 0 6px 15px rgba(14, 165, 233, 0.4); }

        /* --- RESPONSIVE MEDIA QUERIES (RAMAH MOBILE) --- */
        @media (max-width: 900px) {
          .wira-wrap .hero h1 { font-size: 38px; }
          .wira-wrap .kpi-row { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .wira-wrap .wrap { padding: 1.5rem; }
          .wira-wrap .hero { padding: 2.5rem 1.5rem; border-radius: 16px; }
          .wira-wrap .hero h1 { font-size: 32px; }
          .wira-wrap .hero-meta { flex-direction: column; gap: 1rem; }
          
          .wira-wrap .kpi-row { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .wira-wrap .kpi { padding: 1rem; }
          .wira-wrap .kpi-num { font-size: 28px; }
          
          .wira-wrap .card-grid, .wira-wrap .security-grid { grid-template-columns: 1fr; }
          .wira-wrap .sec-title { font-size: 20px; }
          
          .wira-wrap .roles-table th, .wira-wrap .roles-table td { padding: 10px; font-size: 13px; }
          .wira-wrap .roles-table { display: block; overflow-x: auto; white-space: nowrap; }
          
          .wira-wrap .value-block { padding: 1.5rem; border-radius: 12px; }
          .wira-wrap .value-block h2 { font-size: 18px; }
        }
      `}} />

      <div className="wira-wrap">
        <div className="wrap">
          <h2 className="sr-only" style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)'}}>
            Proposal Project WiraProperty — Platform Digital Properti & Hospitality
          </h2>

          <div className="hero">
            <div className="hero-tag">Scoope Of Work</div>
            <h1>Platform Digital<br/><em>WiraProperty</em></h1>
            <p className="hero-sub">Sistem manajemen properti dan booking enterprise — dibangun dari nol, diaudit tuntas, dan siap menghasilkan revenue.</p>
            <div className="hero-meta">
              <div><span>May 2026</span>Tanggal Serah Terima</div>
              <div><span>End-to-End</span>Status Sistem</div>
              <div><span>Laravel 12 + React 19</span>Teknologi Inti</div>
            </div>
          </div>

          <div className="kpi-row">
            <div className="kpi"><div className="kpi-num">17</div><div className="kpi-label">Model Database</div></div>
            <div className="kpi"><div className="kpi-num">3</div><div className="kpi-label">Level Akses</div></div>
            <div className="kpi"><div className="kpi-num">4x</div><div className="kpi-label">Keamanan Berlapis</div></div>
            <div className="kpi"><div className="kpi-num">100%</div><div className="kpi-label">Production Ready</div></div>
          </div>

          <div className="section">
            <div className="sec-header">
              <span className="sec-num">01</span>
              <span className="sec-title">Mengapa WiraProperty Berbeda</span>
              <div className="sec-line"></div>
            </div>
            <div className="card-grid">
              <div className="card accent">
                <div className="card-icon blue"><i className="ti ti-chart-bar" aria-hidden="true"></i></div>
                <h3>Hotel Intelligence, Bukan Sekadar Catatan</h3>
                <p>Dashboard menampilkan Occupancy Rate, RevPAR, ARR, dan analisis OTA secara real-time — bukan laporan manual.</p>
              </div>
              <div className="card">
                <div className="card-icon light"><i className="ti ti-lock" aria-hidden="true"></i></div>
                <h3>Anti Race-Condition di Level Database</h3>
                <p>Teknologi <code>lockForUpdate()</code> memastikan zero double-booking bahkan saat traffic lonjakan tinggi.</p>
              </div>
              <div className="card">
                <div className="card-icon light"><i className="ti ti-layout-dashboard" aria-hidden="true"></i></div>
                <h3>CMS Tanpa Sentuh Kode</h3>
                <p>Admin mengubah konten, foto, SEO, dan halaman web secara mandiri — tidak perlu developer setiap saat.</p>
              </div>
              <div className="card">
                <div className="card-icon light"><i className="ti ti-users" aria-hidden="true"></i></div>
                <h3>Guest CRM Built-In</h3>
                <p>Rekam profil tamu, lifetime value, riwayat inap, dan blacklist — semua dalam satu sistem terpadu.</p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="sec-header">
              <span className="sec-num">02</span>
              <span className="sec-title">Fitur Unggulan yang Sudah Berjalan</span>
              <div className="sec-line"></div>
            </div>
            <div className="badge-row">
              <span className="badge filled">Smart Room Search Engine</span>
              <span className="badge">Hotel KPI Dashboard</span>
              <span className="badge filled">Guest CRM + Blacklist</span>
              <span className="badge">Housekeeping Scheduler</span>
              
              <span className="badge">2FA Authentication</span>
              <span className="badge filled">OTA Commission Tracker</span>
              <span className="badge">Availability Block</span>
              <span className="badge filled">5 Gallery Layout CMS</span>
              <span className="badge">Rule-Based Insights</span>
            </div>
            <div className="feature-list">
              <div className="feat">
                <div className="feat-dot"></div>
                <div className="feat-content">
                  <h4>Revenue Intelligence — Cancellation Trend & Channel Distribution</h4>
                  <p>Sistem otomatis mendeteksi ketergantungan OTA yang berlebihan, penurunan revenue, dan keterisian kamar rendah — lalu memberikan saran berbasis aturan (rule-based insights) kepada manajemen.</p>
                </div>
              </div>
              <div className="feat">
                <div className="feat-dot"></div>
                <div className="feat-content">
                  <h4>Checkout yang Anti-Gagal — Database Lock pada Waktu Kritis</h4>
                  <p>Di momen dua tamu memesan kamar yang sama di detik bersamaan, sistem memilih satu pemenang secara otomatis — tidak ada konflik data, tidak ada komplain tamu.</p>
                </div>
              </div>
              <div className="feat">
                <div className="feat-dot"></div>
                <div className="feat-content">
                  <h4>Pencarian Ketersediaan Cerdas — Validasi Overlapping Real-Time</h4>
                  <p>Tamu mencari berdasarkan check-in, check-out, dan jumlah tamu. Algoritma backend memfilter unit tersedia secara akurat tanpa celah pemesanan ganda.</p>
                </div>
              </div>
              <div className="feat">
                <div className="feat-dot"></div>
                <div className="feat-content">
                  <h4>Portofolio Properti Multi-Tipe — Villa, Rumah, Ruko, Tanah</h4>
                  <p>Satu platform mengelola seluruh portofolio aset: villa Bali, villa Lombok, rumah, ruko, dan tanah — dengan halaman profil dinamis yang dikelola dari CMS.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="value-block">
            <h2>Nilai yang Anda Dapatkan Hari Ini</h2>
            <p>Sistem ini bukan prototype. Bukan mock-up. Seluruh aset sudah dipindahkan ke server lokal, setiap fungsi sudah diuji end-to-end, dan antarmuka merespons dengan animasi transisi halaman yang mulus. Anda menerima platform yang siap menghadapi tamu nyata dari momen pertama go-live.</p>
          </div>

          <div className="section">
            <div className="sec-header">
              <span className="sec-num">03</span>
              <span className="sec-title">Fondasi Teknologi Kelas Enterprise</span>
              <div className="sec-line"></div>
            </div>
            <div className="card-grid">
              <div className="card">
                <h3><i className="ti ti-server" aria-hidden="true" style={{color:'var(--blue-primary)', marginRight:'8px', fontSize:'18px'}}></i>Backend</h3>
                <p>Laravel 12 (PHP 8.2+) — framework paling matang di ekosistem PHP, dengan keamanan bawaan dan skalabilitas tinggi.</p>
              </div>
              <div className="card">
                <h3><i className="ti ti-brand-react" aria-hidden="true" style={{color:'var(--blue-primary)', marginRight:'8px', fontSize:'18px'}}></i>Frontend</h3>
                <p>React 19 + Inertia.js 2.0 — SPA modern tanpa overhead API terpisah. Render cepat, navigasi instan, animasi Framer Motion.</p>
              </div>
              <div className="card">
                <h3><i className="ti ti-database" aria-hidden="true" style={{color:'var(--blue-primary)', marginRight:'8px', fontSize:'18px'}}></i>Database</h3>
                <p>17 model relasional terstruktur lengkap dengan Migration dan Seeder — siap untuk migrasi data production.</p>
              </div>
              <div className="card">
                <h3><i className="ti ti-brand-vite" aria-hidden="true" style={{color:'var(--blue-primary)', marginRight:'8px', fontSize:'18px'}}></i>Build System</h3>
                <p>Vite 7.0 + Tailwind CSS 4.0 + Radix UI — stack terkini yang menjamin performa, aksesibilitas, dan kemudahan pengembangan lanjutan.</p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="sec-header">
              <span className="sec-num">04</span>
              <span className="sec-title">Keamanan Berlapis — Bukan Sekadar Password</span>
              <div className="sec-line"></div>
            </div>
            <div className="security-grid">
              <div className="sec-card">
                <i className="ti ti-device-mobile" aria-hidden="true"></i>
                <div>
                  <h4>Two-Factor Authentication (2FA)</h4>
                  <p>Authenticator app + recovery codes. Akun admin terlindungi bahkan jika password bocor.</p>
                </div>
              </div>
              <div className="sec-card">
                <i className="ti ti-lock-bolt" aria-hidden="true"></i>
                <div>
                  <h4>Transaction Lock</h4>
                  <p><code>lockForUpdate()</code> pada setiap reservasi — tidak ada konflik data di saat high traffic.</p>
                </div>
              </div>
              <div className="sec-card">
                <i className="ti ti-shield-check" aria-hidden="true"></i>
                <div>
                  <h4>Throttle & Anti-Spam</h4>
                  <p>Rute booking dan inquiry dibatasi 5 request/menit — memblokir bot dan serangan automated.</p>
                </div>
              </div>
              <div className="sec-card">
                <i className="ti ti-arrows-exchange" aria-hidden="true"></i>
                <div>
                  <h4>CSRF Protection + Eloquent</h4>
                  <p>Proteksi bawaan Laravel terhadap serangan cross-site dan SQL injection secara default.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="sec-header">
              <span className="sec-num">05</span>
              <span className="sec-title">Struktur Hak Akses Tiga Lapis</span>
              <div className="sec-line"></div>
            </div>
            <table className="roles-table">
              <thead>
                <tr><th>Role</th><th>Kapabilitas</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="role-pill role-super">Super Admin</span></td>
                  <td>Akses penuh semua modul — operasional, CMS, dashboard, dan manajemen tim admin.</td>
                </tr>
                <tr>
                  <td><span className="role-pill role-admin">Admin</span></td>
                  <td>Kontrol operasional lengkap dan CMS konten — tanpa kewenangan mengubah konfigurasi sistem kritis.</td>
                </tr>
                <tr>
                  <td><span className="role-pill role-staff">Staff</span></td>
                  <td>Akses modul teknis harian: housekeeping, daftar tamu, dan status booking. Tidak bisa mengubah konfigurasi.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section">
            <div className="sec-header">
              <span className="sec-num">06</span>
              <span className="sec-title">Roadmap Serah Terima & Go-Live</span>
              <div className="sec-line"></div>
            </div>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-left"><div className="tl-circle"></div><div className="tl-line"></div></div>
                <div className="tl-content">
                  <div className="tl-phase">Fase 1 — Selesai</div>
                  <div className="tl-title">Audit & Hardening Sistem</div>
                  <div className="tl-desc">Seluruh fitur diverifikasi end-to-end. Aset dipindahkan ke server lokal. Tidak ada dependency eksternal yang rentan.</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left"><div className="tl-circle"></div><div className="tl-line"></div></div>
                <div className="tl-content">
                  <div className="tl-phase">Fase 2 — Handover</div>
                  <div className="tl-title">Serah Terima & Konfigurasi Production</div>
                  <div className="tl-desc">Setup server production, migrasi database, konfigurasi domain dan SSL, serta onboarding tim admin klien.</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left"><div className="tl-circle"></div><div className="tl-line"></div></div>
                <div className="tl-content">
                  <div className="tl-phase">Fase 3 — Go Live</div>
                  <div className="tl-title">Operasional Penuh + Monitoring Awal</div>
                  <div className="tl-desc">Platform aktif menerima tamu. Pendampingan teknis 30 hari pertama untuk memastikan operasi berjalan sempurna.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta">
            <p>Platform sudah siap. Langkah berikutnya ada di tangan Anda.</p>
            <div className="cta-strong">Jadwalkan Demo Live WiraProperty</div>
            <a className="cta-badge" href="https://wa.me/6285739493437" target="_blank" rel="noopener noreferrer">
              <i className="ti ti-calendar" aria-hidden="true"></i> Diskusi Serah Terima ↗
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
