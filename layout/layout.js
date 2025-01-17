document.addEventListener("DOMContentLoaded", () => {
  const loadHTML = async (selector, file) => {
    const response = await fetch(file);
    if (response.ok) {
      const content = await response.text();
      document.querySelector(selector).innerHTML = content;
    }
  };

  loadHTML("#header", "./layout/header.html");

  loadHTML("#footer", "./layout/footer.html");
});
