const products = [
  {
    id: "medicube-must-haves",
    name: "Medicube Must Haves",
    brand: "Medicube",
    price: 170,
    badge: "Kit",
    categories: ["glow", "repair"],
    image: "assets/medicube-must-haves.jpg",
    desc: "A complete collagen-forward glow set for a polished routine.",
  },
  {
    id: "good-morning-gel-cleanser",
    name: "Good Morning Gel Cleanser",
    brand: "COSRX",
    price: 25,
    badge: "Cleanse",
    categories: ["pore", "hydrate"],
    image: "assets/clear-cosrx-cleanser.jpg",
    desc: "Low-pH daily cleanse for fresh, calm skin without a tight finish.",
  },
  {
    id: "cosrx-mucin-power-essence",
    name: "COSRX Mucin Power Essence",
    brand: "COSRX",
    price: 25,
    badge: "Hydrate",
    categories: ["hydrate", "repair"],
    image: "assets/clear-cosrx-snail.jpg",
    desc: "A glossy essence step for bounce, barrier comfort, and glow.",
  },
  {
    id: "cosrx-intensive-cream",
    name: "COSRX Intensive Cream",
    brand: "COSRX",
    price: 25,
    badge: "Barrier",
    categories: ["repair", "hydrate"],
    image: "assets/cosrx-intensive-cream.jpg",
    desc: "Comforting cream for dry, stressed, or over-treated skin.",
  },
  {
    id: "anua-pore-cleansing-foam",
    name: "Anua Pore Deep Cleansing Foam",
    brand: "Anua",
    price: 30,
    badge: "Pore",
    categories: ["pore"],
    image: "assets/anua-pore-cleansing-foam.jpg",
    desc: "A soft foam cleanse for congested skin and a refined finish.",
  },
  {
    id: "heartleaf-77-toner",
    name: "Heartleaf 77 Soothing Toner",
    brand: "Anua",
    price: 30,
    badge: "Soothe",
    categories: ["hydrate", "repair"],
    image: "assets/clear-anua-heartleaf.jpg",
    desc: "A calm, watery toner for sensitive skin and easy layering.",
  },
  {
    id: "dr-althea-trio",
    name: "Dr Althea Trio",
    brand: "Dr. Althea",
    price: 85,
    badge: "Routine",
    categories: ["repair", "glow"],
    image: "assets/dr-althea-trio.jpg",
    desc: "A soft recovery trio for nourished, even-looking skin.",
  },
  {
    id: "ordinary-niacinamide",
    name: "The Ordinary Niacinamide Serum",
    brand: "The Ordinary",
    price: 15,
    badge: "Brighten",
    categories: ["brighten", "pore"],
    image: "assets/clear-ordinary-niacinamide.jpg",
    desc: "A classic oil-control and blemish-support serum.",
  },
  {
    id: "ordinary-glycolic-acid",
    name: "The Ordinary Glycolic Acid",
    brand: "The Ordinary",
    price: 25,
    badge: "Tone",
    categories: ["brighten", "glow"],
    image: "assets/ordinary-glycolic-acid.jpg",
    desc: "Glow-supporting exfoliating toner for smoother-looking skin.",
  },
  {
    id: "seoul-niacinamide-capsule",
    name: "Niacinamide Capsule Cream",
    brand: "Seoul",
    price: 28,
    badge: "Glow",
    categories: ["brighten", "glow"],
    image: "assets/seoul-niacinamide-capsule.jpg",
    desc: "A creamy seal for fresh radiance and a glass-skin finish.",
  },
  {
    id: "vitamin-c-brightening-cream",
    name: "Vitamin C Brightening Cream",
    brand: "Garnier",
    price: 13,
    badge: "Vitamin C",
    categories: ["brighten"],
    image: "assets/vitamin-c-brightening-cream.jpg",
    desc: "Budget-friendly brightening cream for daily glow.",
  },
  {
    id: "pdrn-cica-toner",
    name: "PDRN Cica Soothing Toner",
    brand: "Medicube",
    price: 30,
    badge: "Calm",
    categories: ["repair", "hydrate"],
    image: "assets/pdrn-cica-toner.jpg",
    desc: "A calming toner step for a reset routine.",
  },
  {
    id: "axis-y-dark-spot-serum",
    name: "Axis-Y Dark Spot Glow Serum",
    brand: "Axis-Y",
    price: 25,
    badge: "Dark spots",
    categories: ["brighten", "glow"],
    image: "assets/axis-y-dark-spot-serum.jpg",
    desc: "A glow serum for uneven tone and post-blemish marks.",
  },
  {
    id: "cerave-day-moisturizer",
    name: "CeraVe Day Moisturizer",
    brand: "CeraVe",
    price: 25,
    badge: "Daily",
    categories: ["hydrate", "repair"],
    image: "assets/cerave-day-moisturizer.jpg",
    desc: "An easy everyday moisturizer for comfort and support.",
  },
  {
    id: "light-cleansing-oil",
    name: "Light Cleansing Oil",
    brand: "K-Beauty",
    price: 27,
    badge: "Oil",
    categories: ["pore", "glow"],
    image: "assets/light-cleansing-oil.jpg",
    desc: "First-cleanse oil for SPF, makeup, and pore buildup.",
  },
  {
    id: "txa-niacinamide-serum",
    name: "TXA Niacinamide Serum",
    brand: "Medicube",
    price: 30,
    badge: "Even tone",
    categories: ["brighten", "glow"],
    image: "assets/txa-niacinamide-serum.jpg",
    desc: "A premium tone-evening serum for bright, expensive-looking skin.",
  },
  {
    id: "medicube-triple-collagen",
    name: "Medicube Triple Collagen Cream",
    brand: "Medicube",
    price: 30,
    badge: "Collagen",
    categories: ["glow", "repair"],
    image: "assets/medicube-triple-collagen.jpg",
    desc: "Plush collagen cream for bounce, glow, and a soft finish.",
  },
  {
    id: "pdrn-pink-night-mask",
    name: "PDRN Pink Caffeine Night Mask",
    brand: "Medicube",
    price: 30,
    badge: "Night",
    categories: ["repair", "glow"],
    image: "assets/pdrn-pink-night-mask.jpg",
    desc: "A dreamy night mask for morning-after softness.",
  },
  {
    id: "collagen-glow-mask",
    name: "Collagen Glow Wrapping Mask",
    brand: "Medicube",
    price: 30,
    badge: "Mask",
    categories: ["glow", "repair"],
    image: "assets/collagen-glow-mask.jpg",
    desc: "A glossy mask moment for instant vanity-table drama.",
  },
  {
    id: "zero-pore-combo",
    name: "Zero Pore Combo",
    brand: "Medicube",
    price: 115,
    badge: "Pore kit",
    categories: ["pore"],
    image: "assets/clear-zero-pore.jpg",
    desc: "A pore-refining set for texture, oil, and polish.",
  },
  {
    id: "zero-pore-sun-cream",
    name: "Zero Pore Sun Cream",
    brand: "Medicube",
    price: 28,
    badge: "SPF",
    categories: ["pore", "brighten"],
    image: "assets/zero-pore-sun-cream.jpg",
    desc: "Daily SPF support for a clean, refined finish.",
  },
  {
    id: "snail-mucin-rice",
    name: "Snail Mucin 97 + Rice",
    brand: "Mixsoon",
    price: 25,
    badge: "Essence",
    categories: ["hydrate", "glow"],
    image: "assets/snail-mucin-rice.jpg",
    desc: "Hydration and glow for skin that needs cushion.",
  },
  {
    id: "deep-vita-c-pads",
    name: "Deep Vita C Pads",
    brand: "Medicube",
    price: 30,
    badge: "Pads",
    categories: ["brighten"],
    image: "assets/deep-vita-c-pads.jpg",
    desc: "Swipe-on brightening pads for a quick glow reset.",
  },
  {
    id: "medicube-txa-capsule",
    name: "Medicube TXA Capsule Cream",
    brand: "Medicube",
    price: 30,
    badge: "Premium",
    categories: ["brighten", "repair"],
    image: "assets/medicube-txa-capsule.jpg",
    desc: "Capsule cream for brightening support and smooth comfort.",
  },
  {
    id: "anua-peach-combo",
    name: "Anua Peach 77 Combo",
    brand: "Anua",
    price: 120,
    badge: "Bundle",
    categories: ["glow", "brighten"],
    image: "assets/clear-anua-peach.jpg",
    desc: "A juicy peach-toned routine for radiant-looking skin.",
  },
  {
    id: "anua-full-kit",
    name: "Anua Full Kit",
    brand: "Anua",
    price: 150,
    badge: "Full kit",
    categories: ["hydrate", "repair", "glow"],
    image: "assets/anua-full-kit.jpg",
    desc: "A full shelf reset for calm, hydrated, glowy skin.",
  },
];

products.unshift(...(window.clientProducts || []));

// Give the shelf filters their literal product-type meaning while preserving
// the concern-based categories already used throughout the catalogue.
products.forEach((product) => {
  const label = `${product.name} ${product.badge}`.toLowerCase();
  if (/cleanser|cleansing|wash|cleansing oil/.test(label)) product.categories.push("cleansers");
  if (/toner|toning/.test(label)) product.categories.push("toners");
  if (/serum|essence|ampoule|exosome shot/.test(label)) product.categories.push("serums");
  if (/cream|moisturi[sz]er|lotion/.test(label)) product.categories.push("creams");
  product.categories = [...new Set(product.categories)];
});

const CATALOGUE_KEY = "skin-essentials-catalogue-v1";
const ADMIN_PASSWORD_HASH = "69c72c7470249f124e40f02de652d7205ff2765cd7a8ca7dde6760f028c03273";
const catalogueState = JSON.parse(localStorage.getItem(CATALOGUE_KEY) || '{"custom":[],"overrides":{},"deleted":[]}');
products.splice(0, products.length, ...products.filter((item) => !catalogueState.deleted.includes(item.id)).map((item) => ({ ...item, ...(catalogueState.overrides[item.id] || {}) })));
products.unshift(...catalogueState.custom);

const offers = [
  "New client stock drop is live",
  "Harare pickup on Nelson Mandela Avenue",
  "WhatsApp +263 77 704 1074 for skin matching",
];

const categories = [
  { label: "New drop", icon: "N", filter: "new" },
  { label: "Medicube", icon: "Me", filter: "medicube" },
  { label: "Cleansers", icon: "C", filter: "cleansers" },
  { label: "Toners", icon: "T", filter: "toners" },
  { label: "Serums", icon: "S", filter: "serums" },
  { label: "Creams", icon: "Cr", filter: "creams" },
  { label: "Body care", icon: "B", filter: "body" },
  { label: "Fragrance", icon: "F", filter: "fragrance" },
];

const bestIds = [
  "client-medicube-pdrn-pink-collagen-capsule-cream",
  "client-medicube-kojic-acid-turmeric-edit",
  "client-medicube-zero-pore-pad-edit",
  "client-axis-y-dark-spot-correcting-edit",
  "client-cerave-cleanser-edit",
  "client-victorias-secret-mist-assortment",
  "client-cosrx-snail-radiance-duo",
];

let activeFilter = "all";
let heroIndex = 0;
let offerIndex = 0;
let cart = {};
let revealObserver;
let heroTimer;
const heroDisplayMs = 6400;

const grid = document.querySelector("#productGrid");
const bestTrack = document.querySelector("#bestTrack");
const searchInput = document.querySelector("#globalSearch");
const filterButtons = document.querySelectorAll(".filter");
const categoryGrid = document.querySelector("#categoryGrid");
const cartDrawer = document.querySelector(".cart-drawer");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector(".cart-count");
const toast = document.querySelector(".toast");
const whatsAppOrder = document.querySelector(".cart-whatsapp");
const quickView = document.querySelector(".quick-view");
const quickContent = document.querySelector("#quickContent");
const heroSlider = document.querySelector(".hero-slider");
const heroTimerFill = document.querySelector("#heroTimerFill");

function money(value) {
  return typeof value === "number" ? `US$${value.toFixed(0)}` : "Ask";
}

function productImages(product) {
  return product.gallery?.length ? product.gallery : [product.image];
}

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function productCard(product) {
  const images = productImages(product);
  const hasGallery = images.length > 1;
  const productUrl = `https://www.skinessentials.co.zw/#product-${product.id}`;
  const productName = escapeAttribute(product.name);
  const productBrand = escapeAttribute(product.brand);
  const productDesc = escapeAttribute(product.desc);
  const imageAlt = `${productBrand} ${productName} at Skin Essentials Harare`;
  const pricedOffer =
    typeof product.price === "number"
      ? `
        <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <meta itemprop="priceCurrency" content="USD" />
          <meta itemprop="price" content="${product.price}" />
          <meta itemprop="availability" content="https://schema.org/InStock" />
          <link itemprop="url" href="${productUrl}" />
        </div>
      `
      : "";
  return `
    <article class="product-card reveal" id="product-${product.id}" itemscope itemtype="https://schema.org/Product">
      <link itemprop="url" href="${productUrl}" />
      <meta itemprop="description" content="${productDesc}" />
      <div class="product-media">
        <img src="${images[0]}" alt="${imageAlt}" loading="lazy" itemprop="image" />
        <span class="badge">${product.tier || product.badge}</span>
        ${hasGallery ? `<span class="gallery-pill">${images.length} images</span>` : ""}
      </div>
      <div class="product-body">
        <span class="product-brand" itemprop="brand" itemscope itemtype="https://schema.org/Brand"><span itemprop="name">${productBrand}</span></span>
        <strong class="product-name" itemprop="name">${productName}</strong>
        <p class="desc">${productDesc}</p>
        <div class="product-meta">
          <span class="price">${money(product.price)}</span>
          ${pricedOffer}
          <div class="card-actions">
            <button class="small-action" type="button" data-view="${product.id}" aria-label="Quick view ${productName}">i</button>
            <button class="add-button" type="button" data-add="${product.id}" aria-label="Add ${productName} to cart">+</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCategories() {
  if (!categoryGrid) return;

  categoryGrid.innerHTML = categories
    .map(
      (category) => `
        <button class="category-card" type="button" data-category="${category.filter}">
          <span class="category-icon">${category.icon}</span>
          <strong>${category.label}</strong>
        </button>
      `
    )
    .join("");

  categoryGrid.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.category);
      document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderBest() {
  const bestProducts = bestIds.map((id) => products.find((item) => item.id === id)).filter(Boolean);
  bestTrack.innerHTML = bestProducts.map((product) => productCard(product)).join("");
  attachProductEvents(bestTrack);
  observeReveals();
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesFilter = activeFilter === "all" || product.categories.includes(activeFilter);
    const matchesSearch = [product.name, product.brand, product.badge, product.desc, product.source]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return matchesFilter && matchesSearch;
  });

  if (!visibleProducts.length) {
    grid.innerHTML = `<p class="cart-empty">No products match that search yet. Try COSRX, Anua, toner, serum, or glow.</p>`;
    return;
  }

  if (activeFilter === "packages") {
    const tierOrder = ["Essential", "Signature", "Luxury", "Other"];
    grid.innerHTML = tierOrder.map((tier) => {
      const tierProducts = visibleProducts.filter((product) => (product.tier || "Other") === tier);
      return tierProducts.length ? `<div class="tier-divider"><span>${tier} tier</span><strong>${tierProducts.length} ${tierProducts.length === 1 ? "package" : "packages"}</strong></div>${tierProducts.map((product) => productCard(product)).join("")}` : "";
    }).join("");
  } else {
    grid.innerHTML = visibleProducts.map((product) => productCard(product)).join("");
  }
  attachProductEvents(grid);
  observeReveals();
  window.requestAnimationFrame(revealVisibleCards);
  window.setTimeout(revealVisibleCards, 300);
}

function attachProductEvents(container) {
  container.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });
  container.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => openQuickView(button.dataset.view));
  });
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === filter);
  });
  categoryGrid?.querySelectorAll(".category-card").forEach((item) => {
    item.classList.toggle("active", item.dataset.category === filter);
  });
  renderProducts();
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
  const product = products.find((item) => item.id === id);
  showToast(`${product.name} added to your edit`);
}

function updateCart() {
  const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);
  const totalQuantity = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const total = entries.reduce((sum, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return sum + (typeof product.price === "number" ? product.price * quantity : 0);
  }, 0);
  const hasQuoteItems = entries.some(([id]) => {
    const product = products.find((item) => item.id === id);
    return typeof product.price !== "number";
  });

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = hasQuoteItems ? (total > 0 ? `From ${money(total)}` : "Quote") : money(total);

  if (!entries.length) {
    cartItems.innerHTML = `<p class="cart-empty">Your cart is ready for a curated Skin Essentials edit. Add products and send the order straight to WhatsApp.</p>`;
  } else {
    cartItems.innerHTML = entries
      .map(([id, quantity]) => {
        const product = products.find((item) => item.id === id);
        return `
          <div class="cart-line">
            <img src="${product.image}" alt="" />
            <div>
              <strong>${product.name}</strong>
              <span>${typeof product.price === "number" ? `${money(product.price)} each` : "Ask for price"}</span>
            </div>
            <div class="qty" aria-label="Quantity controls for ${product.name}">
              <button type="button" data-decrease="${product.id}" aria-label="Decrease ${product.name}">-</button>
              <strong>${quantity}</strong>
              <button type="button" data-increase="${product.id}" aria-label="Increase ${product.name}">+</button>
            </div>
          </div>
        `;
      })
      .join("");
  }

  cartItems.querySelectorAll("[data-increase]").forEach((button) => {
    button.addEventListener("click", () => {
      cart[button.dataset.increase] += 1;
      updateCart();
    });
  });

  cartItems.querySelectorAll("[data-decrease]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.decrease;
      cart[id] -= 1;
      if (cart[id] <= 0) delete cart[id];
      updateCart();
    });
  });

  const message = entries.length
    ? `Hello Skin Essentials, I would like to order:%0A${entries
        .map(([id, quantity]) => {
          const product = products.find((item) => item.id === id);
          return `- ${quantity} x ${product.name} (${typeof product.price === "number" ? money(product.price) : "price check"})`;
        })
        .join("%0A")}%0A${hasQuoteItems ? "Please confirm availability and prices." : `Estimated total: ${money(total)}`}`
    : "Hello Skin Essentials, I would like help choosing a skincare routine.";
  whatsAppOrder.href = `https://wa.me/263777041074?text=${message}`;
}

function openCart() {
  document.body.classList.add("cart-open");
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openQuickView(id) {
  const product = products.find((item) => item.id === id);
  const images = productImages(product);
  quickContent.innerHTML = `
    <div class="quick-content">
      <div class="quick-gallery">
        <img id="quickMainImage" src="${images[0]}" alt="${product.name}" />
        ${
          images.length > 1
            ? `<div class="quick-thumbs" aria-label="Product gallery">
                ${images
                  .map(
                    (image, index) => `
                      <button class="${index === 0 ? "active" : ""}" type="button" data-gallery-image="${image}" aria-label="Show image ${index + 1} for ${product.name}">
                        <img src="${image}" alt="" />
                      </button>
                    `
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>
      <div>
        <span class="eyebrow">${product.brand}</span>
        <h2>${product.name}</h2>
        <p>${product.desc} ${product.source ? `${product.source}.` : ""} Available from Skin Essentials on Nelson Mandela Avenue, Harare.</p>
        <p class="price">${money(product.price)}</p>
        <button class="button primary" type="button" data-quick-add="${product.id}">Add to cart</button>
      </div>
    </div>
  `;
  quickContent.querySelector("[data-quick-add]").addEventListener("click", () => addToCart(id));
  quickContent.querySelectorAll("[data-gallery-image]").forEach((button) => {
    button.addEventListener("click", () => {
      quickContent.querySelector("#quickMainImage").src = button.dataset.galleryImage;
      quickContent.querySelectorAll(".quick-thumbs button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });
  document.body.classList.add("quick-open");
  quickView.classList.add("open");
  quickView.setAttribute("aria-hidden", "false");
}

function closeQuickView() {
  document.body.classList.remove("quick-open");
  quickView.classList.remove("open");
  quickView.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setHero(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slide-dot");
  heroIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === heroIndex));
  dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === heroIndex));
}

function startHeroTimer() {
  window.clearTimeout(heroTimer);
  heroTimerFill.style.transitionDuration = "0ms";
  heroTimerFill.style.width = "0%";

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      heroTimerFill.style.transitionDuration = `${heroDisplayMs}ms`;
      heroTimerFill.style.width = "100%";
    });
  });

  heroTimer = window.setTimeout(() => {
    setHero(heroIndex + 1);
    startHeroTimer();
  }, heroDisplayMs);
}

function moveHero(direction) {
  window.clearTimeout(heroTimer);
  heroTimerFill.style.transitionDuration = "160ms";
  heroTimerFill.style.width = "0%";
  window.setTimeout(() => {
    setHero(heroIndex + direction);
    startHeroTimer();
  }, 320);
}

function setOffer(index) {
  offerIndex = (index + offers.length) % offers.length;
  document.querySelector("#offerText").textContent = offers[offerIndex];
}

function revealVisibleCards() {
  document.querySelectorAll(".reveal").forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      element.classList.add("visible");
    }
  });
}

function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "120px 0px" }
    );
  }

  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => revealObserver.observe(element));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

document.querySelectorAll("[data-seo-filter]").forEach((link) => {
  link.addEventListener("click", () => {
    setFilter(link.dataset.seoFilter);
  });
});

searchInput.addEventListener("input", renderProducts);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".cart-button").addEventListener("click", openCart);
document.querySelector(".close-cart").addEventListener("click", closeCart);
document.querySelector(".close-quick").addEventListener("click", closeQuickView);
document.querySelector("[data-hero-prev]").addEventListener("click", () => moveHero(-1));
document.querySelector("[data-hero-next]").addEventListener("click", () => moveHero(1));
document.querySelector("[data-slide-prev]").addEventListener("click", () => setOffer(offerIndex - 1));
document.querySelector("[data-slide-next]").addEventListener("click", () => setOffer(offerIndex + 1));
document.querySelector("[data-rail-left]").addEventListener("click", () => {
  bestTrack.scrollBy({ left: -340, behavior: "smooth" });
});
document.querySelector("[data-rail-right]").addEventListener("click", () => {
  bestTrack.scrollBy({ left: 340, behavior: "smooth" });
});

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();
});

quickView.addEventListener("click", (event) => {
  if (event.target === quickView) closeQuickView();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closeQuickView();
  }
});

const adminGate = document.querySelector(".admin-gate");
const adminStudio = document.querySelector(".admin-studio");
const adminTrigger = document.querySelector("[data-admin-trigger]");
const adminLoginForm = document.querySelector("#adminLoginForm");
const productForm = document.querySelector("#productForm");
const adminProductList = document.querySelector("#adminProductList");
const adminImageInput = document.querySelector("#adminImage");
let logoTapCount = 0;
let logoTapTimer;
let pendingImage = "";

function persistCatalogue() { localStorage.setItem(CATALOGUE_KEY, JSON.stringify(catalogueState)); }
function openAdminGate() { adminGate.classList.add("open"); adminGate.setAttribute("aria-hidden", "false"); document.body.classList.add("admin-open"); setTimeout(() => document.querySelector("#adminPassword").focus(), 120); }
function closeAdminGate() { adminGate.classList.remove("open"); adminGate.setAttribute("aria-hidden", "true"); document.body.classList.remove("admin-open"); adminLoginForm.reset(); document.querySelector(".admin-error").textContent = ""; }
function openAdminStudio() { closeAdminGate(); adminStudio.classList.add("open"); adminStudio.setAttribute("aria-hidden", "false"); document.body.classList.add("admin-open"); renderAdminList(); }
function closeAdminStudio() { adminStudio.classList.remove("open"); adminStudio.setAttribute("aria-hidden", "true"); document.body.classList.remove("admin-open"); resetAdminForm(); }
async function sha256(value) { const data = new TextEncoder().encode(value); const digest = await crypto.subtle.digest("SHA-256", data); return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join(""); }

adminTrigger.addEventListener("click", (event) => {
  logoTapCount += 1;
  clearTimeout(logoTapTimer);
  logoTapTimer = setTimeout(() => { logoTapCount = 0; }, 900);
  if (logoTapCount === 3) { event.preventDefault(); logoTapCount = 0; openAdminGate(); }
});
document.querySelector(".admin-close").addEventListener("click", closeAdminGate);
document.querySelector(".admin-logout").addEventListener("click", closeAdminStudio);
adminGate.addEventListener("click", (event) => { if (event.target === adminGate) closeAdminGate(); });
adminLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const valid = await sha256(document.querySelector("#adminPassword").value) === ADMIN_PASSWORD_HASH;
  if (!valid) { document.querySelector(".admin-error").textContent = "That password is not correct."; return; }
  openAdminStudio();
});

adminImageInput.addEventListener("change", () => {
  const file = adminImageInput.files[0];
  if (!file) return;
  if (file.size > 1572864) { showToast("Please choose an image under 1.5 MB"); adminImageInput.value = ""; return; }
  const reader = new FileReader();
  reader.onload = () => { pendingImage = reader.result; const preview = document.querySelector("#adminImagePreview"); preview.style.backgroundImage = `url("${pendingImage}")`; preview.hidden = false; document.querySelector("#uploadLabel").textContent = file.name; };
  reader.readAsDataURL(file);
});

function resetAdminForm() { productForm.reset(); document.querySelector("#adminProductId").value = ""; document.querySelector("#formMode").textContent = "New entry"; document.querySelector("#adminImagePreview").hidden = true; document.querySelector("#uploadLabel").textContent = "Choose JPG, PNG, or WebP"; pendingImage = ""; }
document.querySelector("#resetProductForm").addEventListener("click", resetAdminForm);

function categoryValues(category) {
  const map = { skincare: ["new", "glow"], fragrance: ["new", "fragrance"], body: ["new", "body"], packages: ["new", "packages"] };
  return map[category] || ["new"];
}

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const existingId = document.querySelector("#adminProductId").value;
  const original = products.find((item) => item.id === existingId);
  if (!pendingImage && !original?.image) { showToast("Choose a product image first"); return; }
  const category = document.querySelector("#adminCategory").value;
  const priceText = document.querySelector("#adminPrice").value;
  const tier = category === "packages" ? document.querySelector("#adminTier").value : "";
  const item = {
    id: existingId || `admin-${Date.now()}`,
    name: document.querySelector("#adminName").value.trim(), brand: document.querySelector("#adminBrand").value.trim(),
    price: priceText === "" ? null : Number(priceText), badge: tier || (category === "fragrance" ? "Perfume" : category === "body" ? "Body" : category === "packages" ? "Package" : "New"),
    categories: categoryValues(category), category, tier, image: pendingImage || original.image,
    desc: document.querySelector("#adminDescription").value.trim(), source: "Skin Essentials catalogue"
  };
  const productIndex = products.findIndex((entry) => entry.id === item.id);
  if (productIndex >= 0) products.splice(productIndex, 1, item); else products.unshift(item);
  const customIndex = catalogueState.custom.findIndex((entry) => entry.id === item.id);
  if (customIndex >= 0) catalogueState.custom.splice(customIndex, 1, item);
  else if (item.id.startsWith("admin-")) catalogueState.custom.unshift(item);
  else catalogueState.overrides[item.id] = item;
  persistCatalogue(); resetAdminForm(); renderProducts(); renderBest(); renderAdminList(); showToast(existingId ? "Catalogue entry updated" : "New entry published");
});

function editAdminItem(id) {
  const item = products.find((entry) => entry.id === id); if (!item) return;
  document.querySelector("#adminProductId").value = item.id; document.querySelector("#adminName").value = item.name; document.querySelector("#adminBrand").value = item.brand;
  document.querySelector("#adminPrice").value = typeof item.price === "number" ? item.price : ""; document.querySelector("#adminCategory").value = item.category || (item.categories.includes("fragrance") ? "fragrance" : item.categories.includes("body") ? "body" : item.categories.includes("packages") ? "packages" : "skincare");
  document.querySelector("#adminTier").value = item.tier || ""; document.querySelector("#adminDescription").value = item.desc; document.querySelector("#formMode").textContent = "Edit entry"; pendingImage = "";
  const preview = document.querySelector("#adminImagePreview"); preview.style.backgroundImage = `url("${item.image}")`; preview.hidden = false; document.querySelector("#uploadLabel").textContent = "Choose a replacement image"; document.querySelector(".admin-form").scrollIntoView({ behavior: "smooth" });
}

function deleteAdminItem(id) {
  const item = products.find((entry) => entry.id === id); if (!item || !confirm(`Remove ${item.name} from the catalogue?`)) return;
  products.splice(products.findIndex((entry) => entry.id === id), 1);
  catalogueState.custom = catalogueState.custom.filter((entry) => entry.id !== id); delete catalogueState.overrides[id];
  if (!id.startsWith("admin-") && !catalogueState.deleted.includes(id)) catalogueState.deleted.push(id);
  delete cart[id]; persistCatalogue(); resetAdminForm(); renderProducts(); renderBest(); renderAdminList(); updateCart(); showToast("Entry removed");
}

function renderAdminList() {
  const query = document.querySelector("#adminLibrarySearch").value.trim().toLowerCase();
  const visible = products.filter((item) => `${item.name} ${item.brand} ${item.tier || ""}`.toLowerCase().includes(query));
  document.querySelector("#adminItemCount").textContent = `${products.length} ${products.length === 1 ? "entry" : "entries"}`;
  adminProductList.innerHTML = visible.length ? visible.map((item) => `<article class="admin-product-row"><img src="${item.image}" alt=""><div class="admin-product-copy"><strong>${escapeAttribute(item.name)}</strong><span>${escapeAttribute(item.brand)} · ${money(item.price)}</span>${item.tier ? `<span class="tier-pill">${escapeAttribute(item.tier)}</span>` : ""}</div><div class="admin-row-actions"><button type="button" data-admin-edit="${item.id}">Edit</button><button class="delete" type="button" data-admin-delete="${item.id}">Delete</button></div></article>`).join("") : '<p class="admin-empty">No catalogue entries match that search.</p>';
  adminProductList.querySelectorAll("[data-admin-edit]").forEach((button) => button.addEventListener("click", () => editAdminItem(button.dataset.adminEdit)));
  adminProductList.querySelectorAll("[data-admin-delete]").forEach((button) => button.addEventListener("click", () => deleteAdminItem(button.dataset.adminDelete)));
}
document.querySelector("#adminLibrarySearch").addEventListener("input", renderAdminList);

window.addEventListener("scroll", revealVisibleCards, { passive: true });
window.addEventListener("load", () => {
  revealVisibleCards();
  window.setTimeout(revealVisibleCards, 300);
});

window.setInterval(() => setOffer(offerIndex + 1), 5200);

renderCategories();
renderBest();
renderProducts();
updateCart();
startHeroTimer();
