// Inject shared components dynamically
document.addEventListener("DOMContentLoaded", () => {
    const insertComponent = async (selector, file) => {
        const container = document.querySelector(selector);
        if (container) {
            const res = await fetch(file);
            const html = await res.text();
            container.innerHTML = html;
        }
    };
    insertComponent("header", "components/navbar.html");
    insertComponent("footer", "components/footer.html");
});
