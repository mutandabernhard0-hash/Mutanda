class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background-color: rgba(248, 245, 238, 0.9);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #d4af37;
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links a {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          color: #1a1a1a;
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }
        
        .nav-links a:hover {
          color: #d4af37;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #d4af37;
          transition: width 0.3s;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #1a1a1a;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background-color: #f8f5ee;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 1.5rem;
            transform: translateY(-150%);
            transition: transform 0.3s ease-in-out;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
          }
          
          .nav-links.active {
            transform: translateY(0);
          }
        }
      </style>
      
      <nav>
        <a href="/" class="logo">Bernhard Mutanda</a>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        
        <ul class="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="biographie.html">Biographie</a></li>
          <li><a href="projets.html">Projets</a></li>
          <li><a href="citations.html">Citations</a></li>
          <li><a href="publications.html">Publications</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    `;
    
    // Mobile menu toggle functionality
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i data-feather="x"></i>' 
        : '<i data-feather="menu"></i>';
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);