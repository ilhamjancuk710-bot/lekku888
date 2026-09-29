const toast = document.getElementById("toast");
const menuBtn = document.getElementById("menuBtn");
const demoBtn = document.getElementById("demoBtn");
const refreshBtn = document.getElementById("refreshBtn");
const copyBtn = document.getElementById("copyBtn");
const linkSelect = document.getElementById("linkSelect");
const searchInput = document.getElementById("searchInput");
const menuItems = [...document.querySelectorAll(".menu-item")];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

menuBtn.addEventListener("click", () => {
  showToast("Menu demo dibuka");
});

demoBtn.addEventListener("click", () => {
  showToast("Ini hanya halaman demo");
});

refreshBtn.addEventListener("click", () => {
  showToast("Halaman demo diperbarui");
});

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    showToast(`Kategori: ${item.dataset.name}`);
  });
});

linkSelect.addEventListener("change", () => {
  showToast(`Link dipilih: ${linkSelect.value}`);
});

copyBtn.addEventListener("click", async () => {
  const text = linkSelect.value;

  try {
    await navigator.clipboard.writeText(text);
    showToast("Link berhasil disalin");
  } catch {
    showToast("Salin manual: " + text);
  }
});

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase().trim();

  menuItems.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    item.style.display = name.includes(keyword) ? "flex" : "none";
  });
});
