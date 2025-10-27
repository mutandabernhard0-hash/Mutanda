class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1a1a1a;
          color: #f8f5ee;
          padding: 4rem 2rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }
        
        .footer-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: #d4af37;
        }
        
        .footer-section p, .footer-section a {
          font-family: 'Lato', sans-serif;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .footer-section a {
          color: #f8f5ee;
          text-decoration: none;
          transition: color 0.3s;
          display: block;
        }
        
        .footer-section a:hover {
          color: #d4af37;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          transition: background-color 0.3s;
        }
        
        .social-links a:hover {
          background-color: #d4af37;
        }
        
        .copyright {
          text-align: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="footer-container">
        <div class="footer-section">
          <h3>Bernhard Mutanda</h3>
          <p>Entrepreneur, économiste et visionnaire engagé dans la transformation socio-économique de l'Afrique.</p>
        </div>
        
        <div class="footer-section">
          <h3>Navigation</h3>
          <a href="/">Accueil</a>
          <a href="biographie.html">Biographie</a>
          <a href="projets.html">Projets</a>
          <a href="citations.html">Citations</a>
        </div>
        
        <div class="footer-section">
          <h3>Contact</h3>
          <a href="mailto:mutandabernhard0@gmail.com">mutandabernhard0@gmail.com</a>
          <a href="tel:+243854480263">+243 854 480 263</a>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Newsletter</h3>
          <p>Abonnez-vous pour recevoir les dernières actualités.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Votre email" required>
            <button type="submit">S'abonner</button>
          </form>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; ${new Date().getFullYear()} Bernhard Mutanda. Tous droits réservés.</p>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);