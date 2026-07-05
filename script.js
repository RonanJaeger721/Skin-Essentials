const products = [
  {
    id: "medicube-must-haves",
    name: "Medicube Must Haves",
    brand: "Medicube",
    price: 170,
    tag: "Luxury kit",
    categories: ["glow", "repair"],
    image: "assets/medicube-must-haves.jpg",
  },
  {
    id: "good-morning-gel-cleanser",
    name: "Good Morning Gel Cleanser",
    brand: "COSRX",
    price: 25,
    tag: "Cleanse",
    categories: ["pore", "hydrate"],
    image: "assets/good-morning-gel-cleanser.jpg",
  },
  {
    id: "cosrx-mucin-power-essence",
    name: "COSRX Mucin Power Essence",
    brand: "COSRX",
    price: 25,
    tag: "Hydrate",
    categories: ["hydrate", "repair"],
    image: "assets/cosrx-mucin-power-essence.jpg",
  },
  {
    id: "cosrx-intensive-cream",
    name: "COSRX Intensive Cream",
    brand: "COSRX",
    price: 25,
    tag: "Barrier",
    categories: ["repair", "hydrate"],
    image: "assets/cosrx-intensive-cream.jpg",
  },
  {
    id: "anua-pore-cleansing-foam",
    name: "Anua Pore Deep Cleansing Foam",
    brand: "Anua",
    price: 30,
    tag: "Pore care",
    categories: ["pore"],
    image: "assets/anua-pore-cleansing-foam.jpg",
  },
  {
    id: "heartleaf-77-toner",
    name: "Heartleaf 77 Soothing Toner",
    brand: "Anua",
    price: 30,
    tag: "Soothing",
    categories: ["hydrate", "repair"],
    image: "assets/heartleaf-77-toner.jpg",
  },
  {
    id: "dr-althea-trio",
    name: "Dr Althea Trio",
    brand: "Dr. Althea",
    price: 85,
    tag: "Routine",
    categories: ["repair", "glow"],
    image: "assets/dr-althea-trio.jpg",
  },
  {
    id: "ordinary-niacinamide",
    name: "The Ordinary Niacinamide Serum",
    brand: "The Ordinary",
    price: 15,
    tag: "Brighten",
    categories: ["brighten", "pore"],
    image: "assets/ordinary-niacinamide.jpg",
  },
  {
    id: "ordinary-glycolic-acid",
    name: "The Ordinary Glycolic Acid",
    brand: "The Ordinary",
    price: 25,
    tag: "Tone",
    categories: ["brighten", "glow"],
    image: "assets/ordinary-glycolic-acid.jpg",
  },
  {
    id: "seoul-niacinamide-capsule",
    name: "Niacinamide Capsule Cream",
    brand: "Seoul",
    price: 28,
    tag: "Glow",
    categories: ["brighten", "glow"],
    image: "assets/seoul-niacinamide-capsule.jpg",
  },
  {
    id: "vitamin-c-brightening-cream",
    name: "Vitamin C Brightening Cream",
    brand: "Garnier",
    price: 13,
    tag: "Vitamin C",
    categories: ["brighten"],
    image: "assets/vitamin-c-brightening-cream.jpg",
  },
  {
    id: "pdrn-cica-toner",
    name: "PDRN Cica Soothing Toner",
    brand: "Medicube",
    price: 30,
    tag: "Calm",
    categories: ["repair", "hydrate"],
    image: "assets/pdrn-cica-toner.jpg",
  },
  {
    id: "axis-y-dark-spot-serum",
    name: "Axis-Y Dark Spot Glow Serum",
    brand: "Axis-Y",
    price: 25,
    tag: "Dark spots",
    categories: ["brighten", "glow"],
    image: "assets/axis-y-dark-spot-serum.jpg",
  },
  {
    id: "cerave-day-moisturizer",
    name: "CeraVe Day Moisturizer",
    brand: "CeraVe",
    price: 25,
    tag: "Daily",
    categories: ["hydrate", "repair"],
    image: "assets/cerave-day-moisturizer.jpg",
  },
  {
    id: "light-cleansing-oil",
    name: "Light Cleansing Oil",
    brand: "K-Beauty",
    price: 27,
    tag: "Oil cleanse",
    categories: ["pore", "glow"],
    image: "assets/light-cleansing-oil.jpg",
  },
  {
    id: "txa-niacinamide-serum",
    name: "TXA Niacinamide Serum",
    brand: "Medicube",
    price: 30,
    tag: "Even tone",
    categories: ["brighten", "glow"],
    image: "assets/txa-niacinamide-serum.jpg",
  },
  {
    id: "medicube-triple-collagen",
    name: "Medicube Triple Collagen Cream",
    brand: "Medicube",
    price: 30,
    tag: "Collagen",
    categories: ["glow", "repair"],
    image: "assets/medicube-triple-collagen.jpg",
  },
  {
    id: "pdrn-pink-night-mask",
    name: "PDRN Pink Caffeine Night Mask",
    brand: "Medicube",
    price: 30,
    tag: "Night mask",
    categories: ["repair", "glow"],
    image: "assets/pdrn-pink-night-mask.jpg",
  },
  {
    id: "collagen-glow-mask",
    name: "Collagen Glow Wrapping Mask",
    brand: "Medicube",
    price: 30,
    tag: "Mask",
    categories: ["glow", "repair"],
    image: "assets/collagen-glow-mask.jpg",
  },
  {
    id: "zero-pore-combo",
    name: "Zero Pore Combo",
    brand: "Medicube",
    price: 115,
    tag: "Pore kit",
    categories: ["pore"],
    image: "assets/zero-pore-combo.jpg",
  },
  {
    id: "zero-pore-sun-cream",
    name: "Zero Pore Sun Cream",
    brand: "Medicube",
    price: 28,
    tag: "SPF",
    categories: ["pore", "brighten"],
    image: "assets/zero-pore-sun-cream.jpg",
  },
  {
    id: "snail-mucin-rice",
    name: "Snail Mucin 97 + Rice",
    brand: "Mixsoon",
    price: 25,
    tag: "Essence",
    categories: ["hydrate", "glow"],
    image: "assets/snail-mucin-rice.jpg",
  },
  {
    id: "deep-vita-c-pads",
    name: "Deep Vita C Pads",
    brand: "Medicube",
    price: 30,
    tag: "Pads",
    categories: ["brighten"],
    image: "assets/deep-vita-c-pads.jpg",
  },
  {
    id: "medicube-txa-capsule",
    name: "Medicube TXA Capsule Cream",
    brand: "Medicube",
    price: 30,
    tag: "Premium",
    categories: ["brighten", "repair"],
    image: "assets/medicube-txa-capsule.jpg",
  },
  {
    id: "anua-peach-combo",
    name: "Anua Peach 77 Combo",
    brand: "Anua",
    price: 120,
    tag: "Bundle",
    categories: ["glow", "brighten"],
    image: "assets/anua-peach-combo.jpg",
  },
  {
    id: "anua-full-kit",
    name: "Anua Full Kit",
    brand: "Anua",
    price: 150,
    tag: "Full kit",
    categories: ["hydrate", "repair", "glow"],
    image: "assets/anua-full-kit.jpg",
  },
];

const routines = {
  glass: ["light-cleansing-oil", "snail-mucin-rice", "medicube-triple-collagen"],
  pore: ["anua-pore-cleansing-foam", "zero-pore-combo", "zero-pore-sun-cream"],
  barrier: ["heartleaf-77-toner", "cosrx-mucin-power-essence", "cosrx-intensive-cream"],
};

let activeFilter = "all";
let cart = {};
let revealObserver;

const grid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#productSearch");
const filterButtons = document.querySelectorAll(".filter");
const cartDrawer = document.querySelector(".cart-drawer");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector(".cart-count");
const toast = document.querySelector(".toast");
const whatsAppOrder = document.querySelector(".cart-whatsapp");
const routineCard = document.querySelector("#routineCard");
const goalButtons = document.querySelectorAll(".goal");

function money(value) {
  return `US$${value.toFixed(0)}`;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesFilter = activeFilter === "all" || product.categories.includes(activeFilter);
    const matchesSearch = [product.name, product.brand, product.tag]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return matchesFilter && matchesSearch;
  });

  if (!visibleProducts.length) {
    grid.innerHTML = `<p class="cart-empty">No products match that search yet. Try a brand name like COSRX, Anua, or Medicube.</p>`;
    return;
  }

  grid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card reveal">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="product-tag">${product.tag}</span>
          </div>
          <div class="product-body">
            <span class="product-brand">${product.brand}</span>
            <strong class="product-name">${product.name}</strong>
            <div class="product-meta">
              <span class="price">${money(product.price)}</span>
              <button class="add-button" type="button" data-add="${product.id}" aria-label="Add ${product.name} to cart">+</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  grid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });
  observeReveals();
  window.requestAnimationFrame(revealVisibleCards);
  window.setTimeout(revealVisibleCards, 300);
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
      if (cart[id] <= 0) {
        delete cart[id];
      }
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

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
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

function renderRoutine(goal = "glass") {
  const steps = ["Cleanse", "Treat", "Seal"];
  routineCard.innerHTML = routines[goal]
    .map((id, index) => {
      const product = products.find((item) => item.id === id);
      return `
        <article class="routine-step">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div>
            <span>${steps[index]}</span>
            <strong>${product.name}</strong>
          </div>
        </article>
      `;
    })
    .join("");
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
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderProducts();
  });
});

goalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    goalButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderRoutine(button.dataset.goal);
  });
});

searchInput.addEventListener("input", renderProducts);

document.querySelector(".cart-button").addEventListener("click", openCart);
document.querySelector(".close-cart").addEventListener("click", closeCart);
document.querySelector(".search-toggle").addEventListener("click", () => {
  document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => searchInput.focus(), 500);
});

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) {
    closeCart();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
  }
});

window.addEventListener("scroll", revealVisibleCards, { passive: true });
window.addEventListener("load", () => {
  revealVisibleCards();
  window.setTimeout(revealVisibleCards, 300);
});

document.querySelector(".marquee div").innerHTML += document.querySelector(".marquee div").innerHTML;

renderProducts();
renderRoutine();
updateCart();
