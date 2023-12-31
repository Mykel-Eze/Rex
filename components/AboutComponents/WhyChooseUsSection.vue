<template>
  <section id="why-choose-us">
    <div class="row relative">
        <div class="container">
            <div class="wcu-wrapper">
                <div class="container">
                    <div class="wcu-title-header">
                        <div class="wcu-title section-title">
                            Why Choose Us?
                        </div>
                        <p class="wcu-desc-txt">
                            We have the competence and experience to satisfy your real estate investment and
                            accommodation needs. What sets us apart?
                        </p>
                    </div>

                    <div class="sect-contents custom-carousel-wrapper col s12 pad0">
                        <div class="col s12 l6 int-img-side text-center-xs" data-aos="fade-down">
                            <img src="~/assets/images/hand-shake.png" alt="slide-img" class="int-img active-int-img" data-slide-id="1">
                            <img src="~/assets/images/our-project-1.jpg" alt="slide-img" class="int-img" data-slide-id="2">
                            <img src="~/assets/images/our-project-2.jpg" alt="slide-img" class="int-img" data-slide-id="3">
                            <img src="~/assets/images/team-expertise-1.png" alt="slide-img" class="int-img" data-slide-id="4">
                            <img src="~/assets/images/team-expertise-2.png" alt="slide-img" class="int-img" data-slide-id="5">
                        </div>

                        <div class="col s12 l6 int-txt-side" data-aos="fade-up">
                            <ul class="int-txt-indicator">
                                <li class="txt-indicator-block active-indicator-block">
                                    <div class="indicator-icon-wrapper">
                                        <img src="~/assets/images/indicator.svg" alt="indicator" class="slider-indicator-icon">
                                    </div>
                                    <div class="indicator-txt-wrapper">
                                        <h4 class="indicator-title">
                                            Global Reach, Local Expertise:
                                        </h4>
                                        <span class="indicator-text">
                                            Our grasp of the global real estate dynamics combined with deep local market knowledge offers
                                            you the best of both worlds.
                                        </span>
                                    </div>
                                </li>

                                <li class="txt-indicator-block">
                                    <div class="indicator-icon-wrapper">
                                        <img src="~/assets/images/indicator.svg" alt="indicator" class="slider-indicator-icon">
                                    </div>
                                    <div class="indicator-txt-wrapper">
                                        <h4 class="indicator-title">
                                            Tailored Solutions:
                                        </h4>
                                        <span class="indicator-text">
                                            We don't just offer properties; we deliver personalized real estate solutions, ensuring
                                            each client finds exactly what they're looking for.
                                        </span>
                                    </div>
                                </li>

                                <li class="txt-indicator-block">
                                    <div class="indicator-icon-wrapper">
                                        <img src="~/assets/images/indicator.svg" alt="indicator" class="slider-indicator-icon">
                                    </div>
                                    <div class="indicator-txt-wrapper">
                                        <h4 class="indicator-title">
                                            Innovative Approach:
                                        </h4>
                                        <span class="indicator-text">
                                            Leveraging the latest technology and market data, we stay ahead of the 
                                            curve, offering our clients innovative and sustainable real estate options.
                                        </span>
                                    </div>
                                </li>

                                <li class="txt-indicator-block">
                                    <div class="indicator-icon-wrapper">
                                        <img src="~/assets/images/indicator.svg" alt="indicator" class="slider-indicator-icon">
                                    </div>
                                    <div class="indicator-txt-wrapper">
                                        <h4 class="indicator-title">
                                            Unwavering Integrity:
                                        </h4>
                                        <span class="indicator-text">
                                            We believe in transparency and honesty, ensuring that our clients make 
                                            informed decisions with confidence and peace of mind.
                                        </span>
                                    </div>
                                </li>

                                <li class="txt-indicator-block">
                                    <div class="indicator-icon-wrapper">
                                        <img src="~/assets/images/indicator.svg" alt="indicator" class="slider-indicator-icon">
                                    </div>
                                    <div class="indicator-txt-wrapper">
                                        <h4 class="indicator-title">
                                            Comprehensive Services:
                                        </h4>
                                        <span class="indicator-text">
                                            From property search and purchase to management and consulting, our
                                            full spectrum of services caters to all your real estate needs under one roof.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "WhyChooseUsSection",
    mounted() {
        // Key-Points Section --- Title Carousel
        let titleIndex = 0
        titleCarousel()

        function titleCarousel() {
            let i
            const x = document.getElementsByClassName('int-img')
            for (i = 0; i < x.length; i++) {
                x[ i ].style.display = 'none'
            }
            titleIndex++
            if (titleIndex > x.length) { titleIndex = 1 }
            x[ titleIndex - 1 ].style.display = 'block'
            setTimeout(titleCarousel, 4000) // Change image every 2 seconds
        }
        // Key-Points Section --- Title Carousel
        let titleIndex2 = 0
        titleCarousel2()

        function titleCarousel2() {
            let i
            const x = document.getElementsByClassName('txt-indicator-block')
            for (i = 0; i < x.length; i++) {
                x[ i ].classList.remove('active-indicator-block')
            }
            titleIndex2++
            if (titleIndex2 > x.length) { titleIndex2 = 1 }
            x[ titleIndex2 - 1 ].classList.add('active-indicator-block')
            setTimeout(titleCarousel2, 4000) // Change image every 2 seconds
        }
    },
}
</script>

<style>

</style>