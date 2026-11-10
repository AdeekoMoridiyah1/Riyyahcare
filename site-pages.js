const doctorSearchForm = document.querySelector("#doctor-search");

if (doctorSearchForm) {
    const keywordInput = document.querySelector("#doctor-keyword");
    const specialtySelect = document.querySelector("#doctor-specialty");
    const doctorCards = [...document.querySelectorAll("#doctor-grid .doctor-card")];
    const emptyState = document.querySelector("#doctor-empty");
    const resultsMessage = document.querySelector("#doctor-results");

    const filterDoctors = () => {
        const keyword = keywordInput.value.trim().toLowerCase();
        const specialty = specialtySelect.value.toLowerCase();
        let visibleCount = 0;

        doctorCards.forEach((card) => {
            const matchesKeyword = card.dataset.name.includes(keyword)
                || card.dataset.specialty.toLowerCase().includes(keyword);
            const matchesSpecialty = !specialty || card.dataset.specialty.toLowerCase() === specialty;
            const isVisible = matchesKeyword && matchesSpecialty;

            card.hidden = !isVisible;
            visibleCount += Number(isVisible);
        });

        emptyState.hidden = visibleCount !== 0;
        resultsMessage.textContent = `${visibleCount} ${visibleCount === 1 ? "doctor" : "doctors"} found`;
    };

    doctorSearchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        filterDoctors();
    });
    keywordInput.addEventListener("input", filterDoctors);
    specialtySelect.addEventListener("change", filterDoctors);
    filterDoctors();
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        document.querySelector("#contact-status").textContent =
            "This demo form is not connected, so your message was not sent.";
    });
}
