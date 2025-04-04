document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.querySelector(".results");

    const items = ["Dress", "T-Shirt", "Jean", "Shoes", "Accessories"]; // Ejemplo de datos

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = "";

        if (query) {
            const filteredItems = items.filter(item => item.toLowerCase().includes(query));
            filteredItems.forEach(item => {
                const div = document.createElement("div");
                div.textContent = item;
                div.addEventListener("click", () => {
                    searchInput.value = item;
                    resultsContainer.classList.remove("active");
                });
                resultsContainer.appendChild(div);
            });

            resultsContainer.classList.add("active");
        } else {
            resultsContainer.classList.remove("active");
        }
    });
});
