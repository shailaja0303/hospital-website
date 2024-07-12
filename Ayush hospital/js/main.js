//  function for conmtact us
$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
  
        // Simple form validation
        var valid = true;
        $('#contactForm input, #contactForm textarea').each(function() {
            if ($(this).val() === '') {
                valid = false;
                $(this).css('border', '1px solid red');
            } else {
                $(this).css('border', '1px solid #ccc');
            }
        });
  
        if (valid) {
            // For demonstration purposes, just show a success message
            $('#response').html('<p>Thank you for contacting us. We will get back to you soon.</p>');
            $('#contactForm')[0].reset();
        } else {
            $('#response').html('<p>Please fill out all required fields.</p>');
        }
    });
  });
   
 
 
 // function for faq section
// Initialize Bootstrap collapse functionality
$(document).ready(function(){
    $('#accordion .collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.btn-link').removeClass('collapsed');
    });
  
    $('#accordion .collapse').on('hidden.bs.collapse', function () {
        $(this).parent().find('.btn-link').addClass('collapsed');
    });
  });
  

//   function for testimonial slider

    let currentIndex = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    setInterval(nextSlide, 5000); // Change slide every 5 seconds



    // function for slick slider
    $(document).ready(function(){
        $('.slick-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:true,
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });


    // function for show more button
    
   
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('load-more-button').addEventListener('click', function() {
            document.getElementById('more-services').classList.remove('hidden');
            this.style.display = 'none';
        });
    });
  
//    function for header toggel  
// Get the hamburger button and the navigation list
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

// Add an event listener to the hamburger button
hamburger.addEventListener('click', () => {
  // Toggle the 'how' class on the navigation list
  navList.classList.toggle('show');
});