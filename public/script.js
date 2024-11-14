function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    if (answerElement.style.display === "block") {
        answerElement.style.display = "none";
    } else {
        answerElement.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll('.scroll, .scrollc');

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('animate');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('animate');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    
    // Close all answers first
    const allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach((ans) => {
        ans.style.display = 'none';
        ans.style.maxHeight = '0';
        ans.previousElementSibling.classList.remove('active');
    });
    
    if (!isVisible) {
        
        answer.style.display = 'block';
        answer.style.maxHeight = answer.scrollHeight + 'px';  // Allow transition
        element.classList.add('active');
    }
}
function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    var icon = element.querySelector('i');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
    } else {
        answer.style.display = "block";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
    }
}

