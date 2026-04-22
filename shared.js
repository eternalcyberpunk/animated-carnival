// Shared header/footer injection for all pages
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = document.body.dataset.page || '';

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
          <a href="#book" class="cta-small">Book Consultation</a>
          <button class="mobile-menu-btn">Menu</button>
        </div>
      </nav>
    </header>
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
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  `;

  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.innerHTML = header;
  if (footerMount) footerMount.innerHTML = footer;
});
