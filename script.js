// GANTI nomor di bawah dengan nomor WhatsApp bisnis: kode negara 62, tanpa +, spasi, atau tanda baca.
const WHATSAPP_NUMBER = "6281939057999";
const nav = document.getElementById("nav");
const hamb = document.getElementById("hamb");
hamb.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

function openWhatsApp(message) {
  if (!/^62\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    alert("Atur nomor WhatsApp bisnis terlebih dahulu di file script.js.");
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const message = [
    "Halo Mitra Digital, saya ingin konsultasi.",
    "",
    `Nama: ${String(f.get("name")).trim()}`,
    `Layanan: ${String(f.get("service")).trim()}`,
    `Lokasi proyek: ${String(f.get("location") || "-").trim()}`,
    `Detail kebutuhan: ${String(f.get("message")).trim()}`
  ].join("\n");
  openWhatsApp(message);
});
document.getElementById("waFloat").addEventListener("click", e => {
  e.preventDefault();
  openWhatsApp("Halo Mitra Digital, saya ingin bertanya tentang layanan CCTV dan jaringan.");
});
