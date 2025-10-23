// basic interactivity for the site

// Navbar toggle
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navbarNav.classList.toggle("active");
});

// Close nav when clicking outside (mobile)
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Close nav when clicking a nav link
document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});

// Search & Cart (demo)
document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  const q = prompt("Cari produk (demo): ketik kata kunci");
  if (q) alert(`Mencari: "${q}" — fitur demo (belum terhubung ke backend).`);
});

document.getElementById("shopping-cart").addEventListener("click", (e) => {
  e.preventDefault();
  alert(
    "Keranjang kosong — fitur demo. Tambahkan fungsi backend untuk belanja."
  );
});

// Add to cart buttons (demo)
document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".card");
    const title = card.querySelector("h3").innerText;
    alert(`"${title}" ditambahkan ke keranjang (demo).`);
  });
});

// Contact form validation (demo)
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = contactForm.querySelector("#name").value.trim();
  const email = contactForm.querySelector("#email").value.trim();
  const message = contactForm.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    alert("Mohon lengkapi semua field sebelum mengirim.");
    return;
  }

  // demo: tampilkan ringkasan
  alert(`Terima kasih, ${name}! Pesan Anda telah dikirim (demo).`);
  contactForm.reset();
});

// set footer year
document.getElementById("year").textContent = new Date().getFullYear();
