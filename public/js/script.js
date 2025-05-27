document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projectCards = document.querySelectorAll('.project-card');
    const form = document.getElementById('contact-form')
    const text = document.getElementById('text')

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    window.onscroll = function() {
        const backToTopButton = document.querySelector('.back-to-top');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };



    form.addEventListener('submit', async(e)=>{
        e.preventDefault()

        const name = document.getElementById('name').value.trim()
        const email = document.getElementById('email').value.trim()
        const subject = document.getElementById('subject').value.trim()
        const message = document.getElementById('message').value.trim()
    

        if (!name || !email || !subject || !message) {

            console.log('All details are required !!!')
            return
        }

        
        const response = await fetch('/contact/form', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, subject, message})
        })
        
        if (response.ok){
            const result = await response.text()
            text.textContent = result;
            text.style.color = 'green'
            form.reset()
        }else{
            text.textContent = 'unfortunately something happened'
            text.style.color = 'red'
        }
        setTimeout(()=>{
            text.textContent=''
        }, 3000)
    })
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
