document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Copyright Year
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Drawer Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // 3. Lead Form Handling (Prevent Default & Show Confirmation)
    const leadForm = document.getElementById("lead-form");
    const formSuccess = document.getElementById("form-success");
    if (leadForm) {
        leadForm.addEventListener("submit", (e) => {
            e.preventDefault();
            leadForm.reset();
            if (formSuccess) {
                leadForm.classList.add("hidden");
                formSuccess.classList.remove("hidden");
            }
        });
    }

    // 4. Optional: Load External Services from data/content.json
    fetch("data/content.json")
        .then(res => res.json())
        .then(data => {
            if (data.companyName) {
                console.log(`Loaded client configuration for ${data.companyName}`);
            }
        })
        .catch(() => console.log("Static HTML content active."));
});
