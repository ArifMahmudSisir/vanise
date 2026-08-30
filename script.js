// ── NAVBAR SCROLL ──────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── REVEAL ON SCROLL ───────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// ── COUNTDOWN TIMER ────────────────────────────────────────────
function startCountdown(hours, mins, secs) {
  let total = hours * 3600 + mins * 60 + secs;
  const hEl = document.getElementById('cd-h');
  const mEl = document.getElementById('cd-m');
  const sEl = document.getElementById('cd-s');

  function tick() {
    if (total <= 0) { total = 0; }
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    hEl.textContent = String(h).padStart(2, '0');
    mEl.textContent = String(m).padStart(2, '0');
    sEl.textContent = String(s).padStart(2, '0');
    total--;
  }
  tick();
  setInterval(tick, 1000);
}
startCountdown(8, 42, 19);

// ── SUBSCRIBE FORM ─────────────────────────────────────────────
function handleSubscribe(e) {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4500);
  document.getElementById('email-input').value = '';
}

// ── ADD TO CART BUTTONS ────────────────────────────────────────
document.querySelectorAll('.btn-add-cart').forEach(btn => {
  btn.addEventListener('click', function () {
    const orig = this.textContent;
    this.textContent = '✓ Added!';
    this.style.background = 'linear-gradient(135deg,#50c090,#308060)';
    this.style.borderColor = 'transparent';
    setTimeout(() => {
      this.textContent = orig;
      this.style.background = '';
      this.style.borderColor = '';
    }, 1800);
  });
});

// ── TESTIMONIAL DOTS (mobile hint) ────────────────────────────
function scrollTesti(index) {
  document.querySelectorAll('.testi-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

// ── HAMBURGER MENU ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '100%';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'rgba(15,10,20,0.97)';
  navLinks.style.padding = '20px 24px';
  navLinks.style.borderBottom = '1px solid var(--border)';
  navLinks.style.gap = '20px';
});

// ── SMOOTH PARALLAX ON HERO BLOBS ─────────────────────────────
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  const blob1 = document.querySelector('.blob1');
  const blob2 = document.querySelector('.blob2');
  if (blob1) blob1.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`;
  if (blob2) blob2.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
});
/* ────────────────────────────────────────────
   PRODUCT DATA (mirrors the cards in products.html)
──────────────────────────────────────────── */
const PRODUCTS = [
  { name: "Seamless Sports Bra", brand: "Velisse Sport", price: 34.99, oldPrice: 49.99, rating: 5, reviews: 128, cat: "sport-bra", colors: ["#2d1a3e", "#c06090", "#1a1a2e", "#d4a0a0"], img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&fit=crop&crop=top", desc: "Buttery-soft seamless knit with medium support, perfect for everything from yoga to HIIT." },
  { name: "High-Waist Sculpt Leggings", brand: "Velisse Active", price: 52.99, oldPrice: null, rating: 5, reviews: 214, cat: "leggings", colors: ["#1a1a2e", "#5a1a45", "#e8d5c0"], img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80&fit=crop&crop=top", desc: "Squat-proof, sculpting compression fabric with a wide waistband that stays put." },
  { name: "Activewear 2-Piece Set", brand: "Velisse Luxe", price: 79.99, oldPrice: 110.00, rating: 4, reviews: 87, cat: "set", colors: ["#c06090", "#3d1a3a", "#e0d0c0", "#2a2a40"], img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80&fit=crop&crop=top", desc: "Matching bra and legging set in a buttery ribbed fabric, designed to move with you." },
  { name: "Wireless T-Shirt Bra", brand: "Velisse Classic", price: 28.99, oldPrice: null, rating: 5, reviews: 302, cat: "bra", colors: ["#f5d5c0", "#1a1a1a", "#ffffff", "#c06090"], img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80&fit=crop&crop=top", desc: "Smooth, seamless cups with no wire dig-in, invisible under fitted tees." },
  { name: "Plunge Bodysuit", brand: "Velisse Luxe", price: 44.99, oldPrice: 59.99, rating: 5, reviews: 96, cat: "body", colors: ["#1a1a1a", "#c8a090", "#5a1a45"], img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80&fit=crop&crop=top", desc: "Sculpting plunge bodysuit with adjustable straps and snap closures." },
  { name: "Lace Push-Up Bra", brand: "Velisse Lace", price: 38.99, oldPrice: null, rating: 5, reviews: 179, cat: "bra", colors: ["#1a1a1a", "#f0b0b0", "#c06090", "#e8d5c0"], img: "https://images.unsplash.com/photo-1590503554950-8f77c48041fb?w=800&q=80&fit=crop&crop=top", desc: "Delicate floral lace with light push-up padding and adjustable straps." },
  { name: "Seamless Comfort Set", brand: "Velisse Active", price: 64.99, oldPrice: 85.00, rating: 5, reviews: 143, cat: "set", colors: ["#e8d0c0", "#1a1a2e", "#c06090"], img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=80&fit=crop&crop=top", desc: "All-day comfort set built from a four-way stretch seamless knit." },
  { name: "High-Waist Shaper Brief", brand: "Velisse Shape", price: 32.99, oldPrice: null, rating: 5, reviews: 221, cat: "body", colors: ["#1a1a1a", "#e8c8a0", "#c06090"], img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80&fit=crop&crop=top", desc: "Smoothing high-waist brief that shapes without rolling down." },
  { name: "Longline Sports Bra", brand: "Velisse Sport", price: 42.99, oldPrice: null, rating: 5, reviews: 167, cat: "sport-bra", colors: ["#1a1a1a", "#c06090", "#2d1a3e"], img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop&crop=top", desc: "Extended-length band for extra coverage and support during high-impact training." },
  { name: "Ribbed Midi Leggings", brand: "Velisse Active", price: 47.99, oldPrice: 59.99, rating: 4, reviews: 94, cat: "leggings", colors: ["#1a1a1a", "#e8d0c0", "#5a1a45"], img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&q=80&fit=crop&crop=top", desc: "Cropped ribbed leggings with a soft matte finish, great for layering." },
  { name: "Strappy Back Sports Bra", brand: "Velisse Sport", price: 37.99, oldPrice: null, rating: 5, reviews: 203, cat: "sport-bra", colors: ["#1a1a1a", "#c06090", "#e8d5c0"], img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80&fit=crop&crop=top", desc: "Statement strappy back detail with removable padding for a custom fit." },
  { name: "Velvet Touch Bralette", brand: "Velisse Lace", price: 29.99, oldPrice: 34.99, rating: 5, reviews: 118, cat: "bra", colors: ["#1a1a1a", "#c06090", "#5a1a45"], img: "https://images.unsplash.com/photo-1608626597747-0d787b75ef61?w=800&q=80&fit=crop&crop=top", desc: "Soft velvet-touch bralette, wire-free with a lightly padded cup." },
  { name: "Premium 3-Piece Bundle", brand: "Velisse Luxe", price: 99.99, oldPrice: 139.99, rating: 5, reviews: 341, cat: "set", colors: ["#2d1a3e", "#c06090", "#e8d0c0"], img: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80&fit=crop&crop=top", desc: "Our bestselling bundle: bra, legging and bodysuit in coordinating tones." },
  { name: "Mesh Panel Leggings", brand: "Velisse Active", price: 55.99, oldPrice: null, rating: 4, reviews: 72, cat: "leggings", colors: ["#1a1a1a", "#2d1a3e"], img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80&fit=crop&crop=top", desc: "Ventilated mesh panels at the calf keep you cool during longer sessions." },
  { name: "Sculpt Bodysuit", brand: "Velisse Shape", price: 58.99, oldPrice: null, rating: 5, reviews: 154, cat: "body", colors: ["#1a1a1a", "#e8c8a0", "#c06090", "#2d1a3e"], img: "https://images.unsplash.com/photo-1614447498149-0acdc20a80fc?w=800&q=80&fit=crop&crop=top", desc: "Firm-hold sculpting bodysuit with a comfortable scoop back." },
  { name: "Everyday Comfort Bra", brand: "Velisse Classic", price: 26.99, oldPrice: null, rating: 5, reviews: 489, cat: "bra", colors: ["#f5d5c0", "#1a1a1a", "#ffffff", "#c06090"], img: "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=800&q=80&fit=crop&crop=top", desc: "Our most-loved everyday bra: breathable, tagless and endlessly comfortable." }
];

const SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

/* ────────────────────────────────────────────
   STATE
──────────────────────────────────────────── */
let state = {
  cats: new Set(["all"]),
  maxPrice: 120,
  rating: "any",
  sort: "featured",
  view: "grid"
};

let quickQty = 1;
let quickSizeIdx = 0;
let quickProduct = null;

/* ────────────────────────────────────────────
   INIT
──────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initRevealAnimations();
  initFilters();
  initPriceRange();
  initSizeButtons();
  initColorFilters();
  initSort();
  initViewToggle();
  initSidebarToggle();
  initWishlist();
  initCartButtons();
  initModalSizeQty();
});

/* ────────────────────────────────────────────
   REVEAL ON SCROLL
──────────────────────────────────────────── */
function initRevealAnimations() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
}

/* ────────────────────────────────────────────
   CATEGORY FILTERS
──────────────────────────────────────────── */
function initFilters() {
  const boxes = document.querySelectorAll('input[name="cat"]');
  boxes.forEach((box) => {
    box.addEventListener("change", () => {
      if (box.value === "all") {
        boxes.forEach((b) => { if (b.value !== "all") b.checked = false; });
        state.cats = new Set(["all"]);
      } else {
        document.getElementById("cat-all").checked = false;
        state.cats.delete("all");
        if (box.checked) state.cats.add(box.value);
        else state.cats.delete(box.value);
        if (state.cats.size === 0) {
          document.getElementById("cat-all").checked = true;
          state.cats.add("all");
        }
      }
      applyFilters();
    });
  });

  document.querySelectorAll('input[name="rating"]').forEach((r) => {
    r.addEventListener("change", () => {
      state.rating = r.value;
      applyFilters();
    });
  });

  const clearBtn = document.getElementById("clearFilters");
  if (clearBtn) clearBtn.addEventListener("click", resetAllFilters);
}

function resetAllFilters() {
  state = { cats: new Set(["all"]), maxPrice: 120, rating: "any", sort: state.sort, view: state.view };

  document.querySelectorAll('input[name="cat"]').forEach((b) => (b.checked = b.value === "all"));
  document.querySelectorAll('input[name="rating"]').forEach((r) => (r.checked = r.value === "any"));

  const priceRange = document.getElementById("priceRange");
  if (priceRange) priceRange.value = 120;
  const priceVal = document.getElementById("priceVal");
  if (priceVal) priceVal.textContent = "Up to $120";

  document.querySelectorAll(".size-btn").forEach((b, i) => b.classList.toggle("active", i === 0));
  document.querySelectorAll(".color-filter-dot").forEach((d, i) => d.classList.toggle("active", i === 0));

  applyFilters();
}

/* ────────────────────────────────────────────
   PRICE RANGE
──────────────────────────────────────────── */
function initPriceRange() {
  const priceRange = document.getElementById("priceRange");
  const priceVal = document.getElementById("priceVal");
  if (!priceRange) return;

  priceRange.addEventListener("input", () => {
    state.maxPrice = Number(priceRange.value);
    priceVal.textContent = state.maxPrice >= 120 ? "Up to $120" : `Up to $${state.maxPrice}`;
    applyFilters();
  });
}

/* ────────────────────────────────────────────
   SIZE / COLOR (visual filter toggles)
──────────────────────────────────────────── */
function initSizeButtons() {
  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });
}

function initColorFilters() {
  document.querySelectorAll(".color-filter-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      dot.classList.toggle("active");
    });
  });
}

/* ────────────────────────────────────────────
   SORT
──────────────────────────────────────────── */
function initSort() {
  const sortSelect = document.getElementById("sortSelect");
  if (!sortSelect) return;
  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    applyFilters();
  });
}

/* ────────────────────────────────────────────
   VIEW TOGGLE (grid / list)
──────────────────────────────────────────── */
function initViewToggle() {
  const gridBtn = document.getElementById("viewGrid");
  const listBtn = document.getElementById("viewList");
  const grid = document.getElementById("productsGrid");
  if (!gridBtn || !listBtn || !grid) return;

  gridBtn.addEventListener("click", () => {
    state.view = "grid";
    grid.classList.remove("list-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    state.view = "list";
    grid.classList.add("list-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });
}

/* ────────────────────────────────────────────
   MOBILE SIDEBAR
──────────────────────────────────────────── */
function initSidebarToggle() {
  const toggle = document.getElementById("filterToggle");
  const sidebar = document.getElementById("sidebar");
  if (!toggle || !sidebar) return;

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      sidebar.classList.remove("open");
    }
  });
}

/* ────────────────────────────────────────────
   APPLY FILTERS + SORT + ACTIVE TAGS
──────────────────────────────────────────── */
function applyFilters() {
  const cards = Array.from(document.querySelectorAll(".p-card"));
  let visibleCount = 0;

  cards.forEach((card) => {
    const cat = card.dataset.cat;
    const price = Number(card.dataset.price);
    const rating = Number(card.dataset.rating);

    const catMatch = state.cats.has("all") || state.cats.has(cat);
    const priceMatch = price <= state.maxPrice;
    const ratingMatch = state.rating === "any" || rating >= Number(state.rating);

    const show = catMatch && priceMatch && ratingMatch;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  sortVisibleCards();
  updateResultCount(visibleCount);
  updateActiveFilterTags();
  toggleNoResults(visibleCount);
}

function sortVisibleCards() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll(".p-card"));

  const sorters = {
    featured: () => 0,
    "price-asc": (a, b) => Number(a.dataset.price) - Number(b.dataset.price),
    "price-desc": (a, b) => Number(b.dataset.price) - Number(a.dataset.price),
    rating: (a, b) => Number(b.dataset.rating) - Number(a.dataset.rating),
    newest: (a, b) => (b.dataset.new === "true") - (a.dataset.new === "true")
  };

  const sorter = sorters[state.sort] || sorters.featured;
  if (state.sort !== "featured") {
    cards.sort(sorter).forEach((card) => grid.appendChild(card));
  }
}

function updateResultCount(count) {
  const el = document.getElementById("resultCount");
  if (el) el.textContent = count;
}

function toggleNoResults(count) {
  const noResults = document.getElementById("noResults");
  const grid = document.getElementById("productsGrid");
  if (!noResults || !grid) return;
  noResults.classList.toggle("hidden", count !== 0);
  grid.style.display = count === 0 ? "none" : "";
}

function updateActiveFilterTags() {
  const wrap = document.getElementById("activeFilters");
  if (!wrap) return;
  wrap.innerHTML = "";

  const labels = {
    "sport-bra": "Sport Bras", leggings: "Leggings", set: "Activewear Sets",
    bra: "Bras", body: "Bodysuits"
  };

  if (!state.cats.has("all")) {
    state.cats.forEach((cat) => {
      wrap.appendChild(makeTag(labels[cat] || cat, () => {
        document.getElementById(`cat-${cat === "sport-bra" ? "sport" : cat === "leggings" ? "leg" : cat}`)?.click();
      }));
    });
  }

  if (state.maxPrice < 120) {
    wrap.appendChild(makeTag(`Up to $${state.maxPrice}`, () => {
      const priceRange = document.getElementById("priceRange");
      priceRange.value = 120;
      priceRange.dispatchEvent(new Event("input"));
    }));
  }

  if (state.rating !== "any") {
    wrap.appendChild(makeTag(`${state.rating}★ & Up`, () => {
      document.querySelector('input[name="rating"][value="any"]').click();
    }));
  }
}

function makeTag(text, onRemove) {
  const tag = document.createElement("div");
  tag.className = "filter-tag";
  tag.innerHTML = `<span>${text}</span><button aria-label="Remove filter">✕</button>`;
  tag.querySelector("button").addEventListener("click", onRemove);
  return tag;
}

/* ────────────────────────────────────────────
   WISHLIST TOGGLE
──────────────────────────────────────────── */
function initWishlist() {
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.classList.toggle("active");
      btn.textContent = btn.classList.contains("active") ? "♥" : "♡";
      btn.style.color = btn.classList.contains("active") ? "#c06090" : "";
    });
  });
}

/* ────────────────────────────────────────────
   ADD TO CART (grid cards)
──────────────────────────────────────────── */
function initCartButtons() {
  document.querySelectorAll(".p-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => showToast());
  });
}

function showToast() {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ────────────────────────────────────────────
   QUICK VIEW MODAL
──────────────────────────────────────────── */
function openQuick(index) {
  quickProduct = PRODUCTS[index];
  if (!quickProduct) return;

  quickQty = 1;
  quickSizeIdx = 0;

  document.getElementById("modalImg").src = quickProduct.img;
  document.getElementById("modalImg").alt = quickProduct.name;
  document.getElementById("modalBrand").textContent = quickProduct.brand;
  document.getElementById("modalName").textContent = quickProduct.name;
  document.getElementById("modalDesc").textContent = quickProduct.desc;
  document.getElementById("modalRating").innerHTML =
    "★".repeat(quickProduct.rating) + "☆".repeat(5 - quickProduct.rating) +
    ` <span>(${quickProduct.reviews})</span>`;

  const priceHtml = quickProduct.oldPrice
    ? `$${quickProduct.price.toFixed(2)} <span style="text-decoration:line-through;color:var(--text-muted);font-size:0.9rem;font-weight:400;margin-left:8px;">$${quickProduct.oldPrice.toFixed(2)}</span>`
    : `$${quickProduct.price.toFixed(2)}`;
  document.getElementById("modalPrice").innerHTML = priceHtml;

  document.getElementById("modalColors").innerHTML = quickProduct.colors
    .map((c, i) => `<span class="p-dot${i === 0 ? " active" : ""}" style="background:${c};width:26px;height:26px;" data-idx="${i}"></span>`)
    .join("");

  document.querySelectorAll("#modalColors .p-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      document.querySelectorAll("#modalColors .p-dot").forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  document.getElementById("modalThumbs").innerHTML = "";

  document.getElementById("qtyVal").textContent = quickQty;
  setActiveSize(quickSizeIdx);

  document.getElementById("modalOverlay").classList.add("show");
  document.getElementById("quickModal").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeQuick() {
  document.getElementById("modalOverlay").classList.remove("show");
  document.getElementById("quickModal").classList.remove("show");
  document.body.style.overflow = "";
}

function changeQty(delta) {
  quickQty = Math.max(1, quickQty + delta);
  document.getElementById("qtyVal").textContent = quickQty;
}

function setActiveSize(idx) {
  document.querySelectorAll(".msz").forEach((btn, i) => {
    btn.classList.toggle("active", i === idx);
  });
}

function initModalSizeQty() {
  document.querySelectorAll(".msz").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      quickSizeIdx = i;
      setActiveSize(i);
    });
  });

  const modalCartBtn = document.getElementById("modalCartBtn");
  if (modalCartBtn) {
    modalCartBtn.addEventListener("click", () => {
      closeQuick();
      showToast();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeQuick();
  });
}

/* Expose functions used inline in HTML */
window.openQuick = openQuick;
window.closeQuick = closeQuick;
window.changeQty = changeQty;
window.resetAllFilters = resetAllFilters;