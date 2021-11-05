window.addEventListener('load', () => {
    const imgContainerEl = document.querySelector('.site-testimonials-img-container');
    const personTestimonialsEl = document.querySelector('.person-testimonials');
    const personNameEl = document.querySelector('.person-name');

    const people = {
        1: {
            personName: "susan sims",
            personPosition: "interaction designer at xyz",
            personTestimonials: "Illo, odit? Delectus voluptate iste natus ipsam quaerat sequi fugiat atque quis. Optio quisquam ipsam nam earum aut tenetur cupiditate harum labore!"
        },
        2: {
            personName: "cleveland brown",
            personPosition: "developer at pwa",
            personTestimonials: "Asperiores at recusandae laborum unde maxime voluptas repudiandae dignissimos sapiente nam ea! Amet animi optio assumenda autem deleniti soluta, harum nisi cumque."
        },
        3: {
            personName: "peter griffin",
            personPosition: "data analist at scypto",
            personTestimonials: "Non, iure voluptatibus. Dicta accusamus recusandae aliquid? Pariatur inventore est quas consequuntur magni id aliquid, asperiores voluptatum. Nam nobis sapiente sed mollitia?"
        },
        4: {
            personName: "chris jenkins",
            personPosition: "research and development at breakpoint",
            personTestimonials: "Eius nihil nobis atque beatae ex, reiciendis possimus, maiores sequi harum soluta, ut dolorum dolores debitis impedit rerum molestiae? Voluptatum, cupiditate labore!"
        },
        5: {
            personName: "jackie rose",
            personPosition: "dev menthor at acrima",
            personTestimonials: "Iste praesentium totam sed, quia tempora eos velit explicabo tenetur magni temporibus recusandae soluta blanditiis ipsam quam deleniti, labore molestiae vero veritatis."
        },
    }

    document.querySelector('.carousel-dots').addEventListener('click', (e) => {
        const dotClassName = e.target.className;
        const dotNumber = Number(dotClassName.slice(12));

        if (isNaN(dotNumber)) { return; }
            
            imgContainerEl.innerHTML = `<img src="./imgs/carousel-${dotNumber}.jpg" alt="">`;
            personTestimonialsEl.innerHTML = `\"${people[dotNumber].personTestimonials}\"`;
            personNameEl.innerHTML = `${people[dotNumber].personName}. ${people[dotNumber].personPosition}`;
    });
});