document.addEventListener("DOMContentLoaded", function () {
    const members = document.querySelectorAll(".fade-in");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });
    
    members.forEach(member => {
        observer.observe(member);
    });
});
