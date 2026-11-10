const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);

                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target.toLocaleString() + "+";
                }
            };

            updateCounter();

            observer.unobserve(counter);
        }

    });

});

counters.forEach(counter => {
    observer.observe(counter);
});