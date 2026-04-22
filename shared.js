// Shared header/footer injection for all pages
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = document.body.dataset.page || '';

  // Jessie's real booking URL (from boontherapeutics.com)
  const BOOKING_URL = 'https://app.squareup.com/appointments/book/l060xsy0pnuheb/LB46ZXPDP4SKW/start';

  const header = `
    <div class="top-bar">Consultations available Tuesday–Saturday · Text (909) 675-1520</div>
    <header class="header">
      <nav class="nav">
        <div class="nav-links">
          <a href="index.html" ${currentPage === 'home' ? 'class="active"' : ''}>Home</a>
          <a href="services.html" ${currentPage === 'services' || currentPage === 'service' ? 'class="active"' : ''}>Services</a>
          <a href="pricing.html" ${currentPage === 'pricing' ? 'class="active"' : ''}>Pricing</a>
          <a href="gallery.html" ${currentPage === 'gallery' ? 'class="active"' : ''}>Before & After</a>
        </div>
        <a href="index.html" class="logo">Boon<span class="sub">Therapeutics · Claremont</span></a>
        <div class="nav-right">
          <div class="nav-links">
            <a href="about.html" ${currentPage === 'about' ? 'class="active"' : ''}>About Jessie</a>
            <a href="trainings.html" ${currentPage === 'trainings' ? 'class="active"' : ''}>Trainings</a>
          </div>
          <a href="${BOOKING_URL}" target="_blank" rel="noopener" class="cta-small">Book Consultation</a>
          <button class="mobile-menu-btn" aria-label="Open menu" aria-expanded="false">Menu</button>
        </div>
      </nav>
    </header>

    <!-- Mobile drawer -->
    <div class="mobile-drawer" aria-hidden="true">
      <div class="mobile-drawer-scrim"></div>
      <div class="mobile-drawer-inner">
        <div class="mobile-drawer-head">
          <div class="logo">Boon<span class="sub">Therapeutics · Claremont</span></div>
          <button class="mobile-close-btn" aria-label="Close menu">Close</button>
        </div>
        <nav class="mobile-drawer-links">
          <a href="index.html" ${currentPage === 'home' ? 'class="active"' : ''}>Home</a>
          <a href="about.html" ${currentPage === 'about' ? 'class="active"' : ''}>About Jessie</a>
          <a href="services.html" ${currentPage === 'services' || currentPage === 'service' ? 'class="active"' : ''}>Services</a>
          <a href="pricing.html" ${currentPage === 'pricing' ? 'class="active"' : ''}>Pricing</a>
          <a href="gallery.html" ${currentPage === 'gallery' ? 'class="active"' : ''}>Before & After</a>
          <a href="trainings.html" ${currentPage === 'trainings' ? 'class="active"' : ''}>Trainings</a>
          <a href="contact.html" ${currentPage === 'contact' ? 'class="active"' : ''}>Contact</a>
        </nav>
        <div class="mobile-drawer-foot">
          <a href="${BOOKING_URL}" target="_blank" rel="noopener" class="cta cta-primary">Book Consultation</a>
          <p class="mobile-drawer-contact">
            Text <a href="sms:9096751520">(909) 675-1520</a><br>
            <a href="mailto:info@boontherapeutics.com">info@boontherapeutics.com</a>
          </p>
        </div>
      </div>
    </div>
  `;

  const footer = `
    <footer>
      <div class="foot-grid">
        <div class="foot-brand">
          <div class="logo-wrap">Boon<span class="sub">Therapeutics · Claremont</span></div>
          <p>Aesthetic medicine, built around you — not trends. A nurse-owned practice in Claremont Village.</p>
        </div>
        <div class="foot-col">
          <h5>Visit</h5>
          <p>231 N Indian Hill Blvd<br>Suite A<br>Claremont, CA 91711</p>
          <a href="contact.html">Get directions →</a>
        </div>
        <div class="foot-col">
          <h5>Hours</h5>
          <p>Tues–Fri · 10–6<br>Saturday · By appointment<br>Sun–Mon · Closed</p>
          <a href="tel:9096751520">(909) 675-1520</a>
        </div>
        <div class="foot-col">
          <h5>Explore</h5>
          <a href="services.html">All services</a>
          <a href="pricing.html">Pricing</a>
          <a href="about.html">About Jessie</a>
          <a href="gallery.html">Gallery</a>
          <a href="trainings.html">Trainings</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 Boon Therapeutics · All rights reserved</span>
        <div class="foot-social">
          <a href="https://www.instagram.com/boon.therapeutics/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.tiktok.com/@boon.therapeutics" target="_blank" rel="noopener">TikTok</a>
          <a href="https://www.facebook.com/profile.php?id=61566542038340" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
    </footer>
  `;

  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.innerHTML = header;
  if (footerMount) footerMount.innerHTML = footer;

  // Mobile drawer wiring
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const scrim = document.querySelector('.mobile-drawer-scrim');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-links a, .mobile-drawer-foot a');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (scrim) scrim.addEventListener('click', closeDrawer);
  // Close drawer when tapping any link inside it
  drawerLinks.forEach(a => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  // Wire up all in-page "Book" / "Schedule" buttons that still point to "#"
  // In-page "#book" anchors are left alone so they still scroll to sections
  document.querySelectorAll('a.cta.cta-primary, a.cta.cta-dark, a.cta.cta-outline').forEach(a => {
    const href = a.getAttribute('href');
    const text = (a.textContent || '').toLowerCase();
    const looksLikeBooking = text.includes('book') || text.includes('schedule');
    if (href === '#' && looksLikeBooking) {
      a.setAttribute('href', BOOKING_URL);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    }
  });
});
