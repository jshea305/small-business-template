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

document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Year Injection
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Fetch and Populate Review Data
    const reviewsGrid = document.getElementById("reviews-grid");

    if (reviewsGrid) {
        fetch("data/content.json")
            .then(response => response.json())
            .then(data => {
                if (data.reviews && data.reviews.length > 0) {
                    reviewsGrid.innerHTML = data.reviews.map(review => `
                        <div class="bg-brand-card border border-brand-surface rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-brand-gold/40 transition-all">
                            <div class="space-y-4">
                                <!-- Star Rating & Source Badge -->
                                <div class="flex items-center justify-between">
                                    <div class="text-brand-gold text-sm flex gap-1">
                                        ${'<i class="fa-solid fa-star"></i>'.repeat(review.rating)}
                                    </div>
                                    <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-surface text-brand-gold border border-brand-gold/20">
                                        ${review.source}
                                    </span>
                                </div>
                                
                                <!-- Review Body -->
                                <p class="text-brand-lightText text-sm leading-relaxed italic">
                                    "${review.text}"
                                </p>
                            </div>

                            <!-- Reviewer Bio & Date -->
                            <div class="mt-6 pt-4 border-t border-brand-surface/60 flex items-center justify-between">
                                <div>
                                    <h4 class="text-white font-bold text-sm uppercase">${review.author}</h4>
                                    <p class="text-brand-muted text-xs">Verified Customer</p>
                                </div>
                                <span class="text-brand-muted text-xs">${review.date}</span>
                            </div>
                        </div>
                    `).join("");
                }
            })
            .catch(err => console.error("Error loading review data:", err));
    }
});
