/**
 * Acervo e Obras Oficiais de Carlos Pietá (@carlospieta)
 * Base de dados com imagens locais, projetos reais, técnicas e especificações curatoriais
 */
const ARTWORKS_DATA = [
  {
    id: 'doze-apostolos-romaria',
    title: 'Conjunto Monumental dos 12 Apóstolos',
    category: 'monumentos',
    categoryLabel: 'Monumento de Praça',
    year: '2024',
    city: 'Romaria, MG',
    location: 'Esplanada do Santuário Basílica de N. Sra. da Abadia',
    material: 'Resina Estrutural com Fibra de Vidro e Acabamento Marmorizado Nobre',
    dimensions: '2,60m de altura cada (Conjunto de 12 esculturas)',
    weight: '300 kg cada (~3.600 kg total)',
    image: 'images/apostolos-romaria.jpg',
    description: 'Conjunto escultórico monumental composto pelos 12 apóstolos de Cristo, instalado na praça principal para acolhimento de mais de 500 mil peregrinos anuais. Inspirado no barroco italiano e nas célebres estátuas da Arquibasílica de São João de Latrão em Roma. Esculpido com panejamentos expressivos e acabamento marmorizado de altíssima durabilidade contra intempéries.',
    commissioner: 'Santuário Basílica de Nossa Senhora da Abadia & Diocese',
    featured: true,
    aspect: 'large'
  },
  {
    id: 'tres-arcanjos-miguel-gabriel-rafael',
    title: 'Tríade dos Arcanjos (Miguel, Gabriel e Rafael)',
    category: 'monumentos',
    categoryLabel: 'Esculturas Monumentais',
    year: '2022',
    city: 'Monte Carmelo / Romaria, MG',
    location: 'Praça do Rosário & Santuário',
    material: 'Resina Estrutural de Alta Densidade e Pátina Clássica',
    dimensions: '3,00m de envergadura com asas',
    weight: '380 kg cada',
    image: 'images/arcanjos-monumento.jpg',
    description: 'Esculturas monumentais com detalhes anatômicos e asas esculpidas em proporção clássica. A representação de São Miguel com a espada da justiça e os arcanjos guardiões dialoga harmoniosamente com a arquitetura tradicional e a fé popular.',
    commissioner: 'Comissão Cívica e Religiosa Municipal',
    featured: false,
    aspect: 'tall'
  },
  {
    id: 'nossa-senhora-rosario-patrocinio',
    title: 'Monumento de Nossa Senhora do Rosário',
    category: 'monumentos',
    categoryLabel: 'Monumento em Torre / Praça',
    year: '2023',
    city: 'Patrocínio, MG',
    location: 'Torre da Comunidade N. Sra. do Rosário',
    material: 'Resina Estrutural Marmorizada com Proteção UV',
    dimensions: '2,90m de altura',
    weight: '320 kg',
    image: 'images/rosario-patrocinio.jpg',
    description: 'Escultura sacra de grande escala instalada na torre da igreja, visível a centenas de metros no horizonte urbano. Desenvolvida para resistir a fortes rajadas de vento e variações térmicas contínuas.',
    commissioner: 'Paróquia e Comunidade Nossa Senhora do Rosário',
    featured: false,
    aspect: 'normal'
  },
  {
    id: 'vitrais-arte-sacra',
    title: 'Vitrais Clássicos e Painéis em Vidro Artístico',
    category: 'vitrais',
    categoryLabel: 'Vitrais Clássicos',
    year: '2023',
    city: 'Triângulo Mineiro, MG',
    location: 'Templos e Residências Tradicionais',
    material: 'Vidro Nobre Colorido, Chumbo Estrutural e Grisalha Queimada a Fogo (600°C)',
    dimensions: 'Formatos Variados sob Medida',
    weight: 'Conforme projeto arquitetônico',
    image: 'images/vitrais-classicos.jpg',
    description: 'Criação e restauração de vitrais clássicos que banham os ambientes com luz sacra e mística. Composições geométricas e figurativas produzidas segundo a tradição milenar das catedrais europeias.',
    commissioner: 'Curadorias Sacras e Arquitetura Tradicional',
    featured: false,
    aspect: 'wide'
  },
  {
    id: 'mosaicos-eclesiasticos',
    title: 'Painéis e Mosaicos Monumentais',
    category: 'vitrais',
    categoryLabel: 'Mosaicos & Murais',
    year: '2024',
    city: 'Minas Gerais & São Paulo',
    location: 'Ábsides, Capelas e Fachadas Cívicas',
    material: 'Tesselas de Vidro Murano, Mármores e Granitos Nobres',
    dimensions: 'Painéis de 5m a 14m de extensão',
    weight: 'Estrutura integrada à alvenaria',
    image: 'images/mosaicos-sacros.jpg',
    description: 'Painéis em mosaico artístico com acabamento minucioso, unindo cores vivas e durabilidade milenar para fachadas, nichos de monumentos e interiores de templos.',
    commissioner: 'Acervos Institucionais e Comitês Artísticos',
    featured: false,
    aspect: 'wide'
  },
  {
    id: 'bustos-civicos-e-relevos',
    title: 'Bustos Cívicos & Esculturas Decorativas Clássicas',
    category: 'monumentos',
    categoryLabel: 'Bustos Cívicos & Clássicos',
    year: '2022',
    city: 'Minas Gerais & São Paulo',
    location: 'Praças Públicas, Palácios e Jardins',
    material: 'Bronze Fundido / Resina Marmorizada com Pátina Italiana',
    dimensions: 'Escala 1:1 e Heroica (com pedestal)',
    weight: '150 a 500 kg',
    image: 'images/bustos-classicos.jpg',
    description: 'Modelagem realista e expressiva de patronos históricos, fundadores municipais e figuras cívicas. Fidelidade anatômica e nobreza de acabamento para homenagens perpétuas.',
    commissioner: 'Prefeituras Municipais e Câmaras de Vereadores',
    featured: false,
    aspect: 'normal'
  }
];

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  renderBentoGrid('all');
  initFilterButtons();
  initNavbarScroll();
  initMobileMenu();
  initBriefingForm();
  initModalHandlers();
  initFaqAccordion();
  
  // Lucide Icons Render
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Renderização dinâmica da Bento Grid com suporte a filtros
 */
function renderBentoGrid(filterCategory = 'all') {
  const container = document.getElementById('bento-gallery-grid');
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? ARTWORKS_DATA 
    : ARTWORKS_DATA.filter(art => art.category === filterCategory);

  container.innerHTML = '';

  filtered.forEach((art, index) => {
    // Classes de grid responsivo para Bento layout
    let colSpanClass = 'col-span-12 md:col-span-6 lg:col-span-4';
    let heightClass = 'h-[440px]';

    if (art.aspect === 'large' || (index === 0 && filterCategory === 'all')) {
      colSpanClass = 'col-span-12 lg:col-span-8';
      heightClass = 'h-[500px] lg:h-[540px]';
    } else if (art.aspect === 'tall') {
      colSpanClass = 'col-span-12 md:col-span-6 lg:col-span-4';
      heightClass = 'h-[500px] lg:h-[540px]';
    } else if (art.aspect === 'wide') {
      colSpanClass = 'col-span-12 lg:col-span-7';
      heightClass = 'h-[420px]';
    } else {
      colSpanClass = 'col-span-12 md:col-span-6 lg:col-span-5';
      heightClass = 'h-[420px]';
    }

    const card = document.createElement('div');
    card.className = `${colSpanClass} artwork-card group rounded-2xl bg-white border border-stone-200/80 shadow-editorial hover:shadow-editorial-hover transition-editorial flex flex-col justify-between overflow-hidden relative`;
    card.setAttribute('data-id', art.id);

    card.innerHTML = `
      <div class="relative w-full ${heightClass} overflow-hidden bg-stone-100">
        <!-- Imagem com Zoom Editorial -->
        <img 
          src="${art.image}" 
          alt="${art.title}" 
          loading="lazy"
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        <!-- Gradiente de Contraste e Legibilidade -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>

        <!-- Badges Superiores -->
        <div class="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-[#A36A4F]"></span>
            ${art.categoryLabel}
          </span>
          <span class="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-stone-200 text-xs font-medium">
            ${art.year}
          </span>
        </div>

        <!-- Informações Inferiores do Card -->
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end">
          <div class="flex items-center gap-2 text-xs text-stone-300 font-medium mb-1.5">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#A36A4F]"></i>
            <span>${art.location} • ${art.city}</span>
          </div>

          <h3 class="text-xl lg:text-2xl font-serif-display font-medium text-white mb-2 leading-tight group-hover:text-[#E8C5B0] transition-colors">
            ${art.title}
          </h3>

          <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/20 text-xs text-stone-300">
            <span class="truncate max-w-[70%] font-light">
              <strong class="font-medium text-white/90">Material:</strong> ${art.material}
            </span>
            
            <span class="inline-flex items-center gap-1 text-white font-medium group-hover:translate-x-1 transition-transform">
              <span>Detalhes</span>
              <i data-lucide="arrow-up-right" class="w-4 h-4 text-[#A36A4F]"></i>
            </span>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openArtworkModal(art);
    });

    container.appendChild(card);
  });

  // Re-inicializa ícones do Lucide nos novos cards gerados
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Filtros de Categorias
 */
function initFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => {
        b.classList.remove('bg-stone-900', 'text-white', 'shadow-sm');
        b.classList.add('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      });

      const target = e.currentTarget;
      target.classList.remove('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      target.classList.add('bg-stone-900', 'text-white', 'shadow-sm');

      const filterValue = target.getAttribute('data-filter') || 'all';
      renderBentoGrid(filterValue);
    });
  });
}

/**
 * Modal / Lightbox Interativo com Ficha Técnica Completa
 */
function initModalHandlers() {
  const modal = document.getElementById('artwork-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-backdrop');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function openArtworkModal(artwork) {
  const modal = document.getElementById('artwork-modal');
  if (!modal) return;

  // Atualização dos campos no Modal
  document.getElementById('modal-image').src = artwork.image;
  document.getElementById('modal-image').alt = artwork.title;
  document.getElementById('modal-category').innerText = artwork.categoryLabel;
  document.getElementById('modal-year').innerText = artwork.year;
  document.getElementById('modal-title').innerText = artwork.title;
  document.getElementById('modal-location').innerText = `${artwork.location}, ${artwork.city}`;
  document.getElementById('modal-material').innerText = artwork.material;
  document.getElementById('modal-dimensions').innerText = artwork.dimensions;
  document.getElementById('modal-weight').innerText = artwork.weight;
  document.getElementById('modal-commissioner').innerText = artwork.commissioner;
  document.getElementById('modal-description').innerText = artwork.description;

  // Botão de WhatsApp contextualizado com a obra
  const modalCta = document.getElementById('modal-whatsapp-cta');
  if (modalCta) {
    const message = encodeURIComponent(`Olá, Carlos Pietá (@carlospieta). Gostaria de solicitar informações e orçamento para um projeto artístico na linha de "${artwork.title}" (${artwork.city}).`);
    modalCta.href = `https://wa.me/5534999998888?text=${message}`;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Accordion Interativo de FAQ / Dúvidas Frequentes
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Fecha todos os outros
      faqItems.forEach(other => {
        other.classList.remove('active');
      });

      // Alterna o atual
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * Efeito de Navegação e Rolagem da Navbar
 */
function initNavbarScroll() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-md', 'bg-[#F7F6F2]/95', 'border-stone-200/80');
      navbar.classList.remove('border-transparent');
    } else {
      navbar.classList.remove('shadow-md', 'bg-[#F7F6F2]/95', 'border-stone-200/80');
      navbar.classList.add('border-transparent');
    }
  });
}

/**
 * Menu Mobile Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  const toggle = () => {
    drawer.classList.toggle('translate-x-full');
    drawer.classList.toggle('translate-x-0');
  };

  toggleBtn.addEventListener('click', toggle);
  if (closeBtn) closeBtn.addEventListener('click', toggle);

  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
      drawer.classList.remove('translate-x-0');
    });
  });
}

/**
 * Formulário de Briefing Institucional & Envio para WhatsApp
 */
function initBriefingForm() {
  const form = document.getElementById('briefing-form');
  const toast = document.getElementById('toast-notification');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim() || '';
    const org = document.getElementById('form-org')?.value.trim() || 'Particular';
    const projectType = document.getElementById('form-type')?.value || 'Monumento de Praça';
    const city = document.getElementById('form-city')?.value.trim() || 'Não especificada';
    const deadline = document.getElementById('form-deadline')?.value || 'Sem prazo fixado';
    const messageText = document.getElementById('form-message')?.value.trim() || '';

    // Monta texto formatado e profissional para o WhatsApp
    const fullMessage = `🏛️ *SOLICITAÇÃO DE BRIEFING ARTÍSTICO - CARLOS PIETÁ (@carlospieta)*\n\n` +
      `👤 *Responsável:* ${name} (${org})\n` +
      `📍 *Localização pretendida:* ${city}\n` +
      `🎨 *Tipo de Projeto:* ${projectType}\n` +
      `⏳ *Previsão/Prazo:* ${deadline}\n\n` +
      `📝 *Detalhes da Proposta:*\n${messageText}\n\n` +
      `_Enviado via portfólio oficial de Carlos Pietá._`;

    // Disparo para WhatsApp oficial do ateliê
    const waUrl = `https://wa.me/5534999998888?text=${encodeURIComponent(fullMessage)}`;
    
    // Mostra Toast de sucesso
    if (toast) {
      toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      toast.classList.add('opacity-100', 'translate-y-0');

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        toast.classList.remove('opacity-100', 'translate-y-0');
      }, 5000);
    }

    // Abre o WhatsApp em nova aba após feedback
    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 1000);
  });
}
