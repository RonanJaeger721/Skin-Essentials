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

const offers = [
  "Save 15% on glow bundles this week",
  "Harare pickup on Nelson Mandela Avenue",
  "WhatsApp +263 77 704 1074 for skin matching",
];

const categories = [
  { label: "Cleansers", icon: "C", filter: "pore" },
  { label: "Toners", icon: "T", filter: "hydrate" },
  { label: "Serums", icon: "S", filter: "brighten" },
  { label: "Creams", icon: "Cr", filter: "repair" },
  { label: "Masks", icon: "M", filter: "glow" },
  { label: "Bundles", icon: "B", filter: "all" },
];

const goals = [
  { label: "Glass glow", icon: "G", filter: "glow", note: "Dewy, polished, luminous." },
  { label: "Pore reset", icon: "P", filter: "pore", note: "Texture, oil, refinement." },
  { label: "Barrier calm", icon: "B", filter: "repair", note: "Soft, soothed, supported." },
  { label: "Deep hydration", icon: "H", filter: "hydrate", note: "Bounce and comfort." },
  { label: "Even tone", icon: "E", filter: "brighten", note: "Dark spots and radiance." },
];

const bestIds = [
  "good-morning-gel-cleanser",
  "heartleaf-77-toner",
  "cosrx-mucin-power-essence",
  "ordinary-niacinamide",
  "zero-pore-combo",
  "anua-peach-combo",
  "medicube-triple-collagen",
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
const goalGrid = document.querySelector("#goalGrid");
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
  return `US$${value.toFixed(0)}`;
}

function productCard(product, compact = false) {
  return `
    <article class="product-card reveal">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="badge">${product.badge}</span>
      </div>
      <div class="product-body">
        <span class="product-brand">${product.brand}</span>
        <strong class="product-name">${product.name}</strong>
        <span class="stars">5.0 rating <small>(${compact ? "9" : "12"})</small></span>
        <p class="desc">${product.desc}</p>
        <div class="product-meta">
          <span class="price">${money(product.price)}</span>
          <div class="card-actions">
            <button class="small-action" type="button" data-view="${product.id}" aria-label="Quick view ${product.name}">i</button>
            <button class="add-button" type="button" data-add="${product.id}" aria-label="Add ${product.name} to cart">+</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCategories() {
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

function renderGoals() {
  goalGrid.innerHTML = goals
    .map(
      (goal) => `
        <button class="goal-card" type="button" data-goal="${goal.filter}">
          <span class="goal-icon">${goal.icon}</span>
          <strong>${goal.label}</strong>
          <span>${goal.note}</span>
        </button>
      `
    )
    .join("");

  goalGrid.querySelectorAll("[data-goal]").forEach((button) => {
    button.addEventListener("click", () => {
      goalGrid.querySelectorAll(".goal-card").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      setFilter(button.dataset.goal);
      document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderBest() {
  const bestProducts = bestIds.map((id) => products.find((item) => item.id === id)).filter(Boolean);
  bestTrack.innerHTML = bestProducts.map((product) => productCard(product, true)).join("");
  attachProductEvents(bestTrack);
  observeReveals();
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesFilter = activeFilter === "all" || product.categories.includes(activeFilter);
    const matchesSearch = [product.name, product.brand, product.badge, product.desc]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return matchesFilter && matchesSearch;
  });

  if (!visibleProducts.length) {
    grid.innerHTML = `<p class="cart-empty">No products match that search yet. Try COSRX, Anua, toner, serum, or glow.</p>`;
    return;
  }

  grid.innerHTML = visibleProducts.map((product) => productCard(product)).join("");
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
  categoryGrid.querySelectorAll(".category-card").forEach((item) => {
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
    return sum + product.price * quantity;
  }, 0);

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = money(total);

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
              <span>${money(product.price)} each</span>
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
          return `- ${quantity} x ${product.name} (${money(product.price)})`;
        })
        .join("%0A")}%0AEstimated total: ${money(total)}`
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
  quickContent.innerHTML = `
    <div class="quick-content">
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <span class="eyebrow">${product.brand}</span>
        <h2>${product.name}</h2>
        <p>${product.desc} Available from Skin Essentials on Nelson Mandela Avenue, Harare.</p>
        <p class="price">${money(product.price)}</p>
        <button class="button primary" type="button" data-quick-add="${product.id}">Add to cart</button>
      </div>
    </div>
  `;
  quickContent.querySelector("[data-quick-add]").addEventListener("click", () => addToCart(id));
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

window.addEventListener("scroll", revealVisibleCards, { passive: true });
window.addEventListener("load", () => {
  revealVisibleCards();
  window.setTimeout(revealVisibleCards, 300);
});

window.setInterval(() => setOffer(offerIndex + 1), 5200);

renderCategories();
renderGoals();
renderBest();
renderProducts();
updateCart();
startHeroTimer();
