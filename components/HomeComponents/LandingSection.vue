<template>
  <section id="landing-section" data-slide="1" class="scrollspy">
    <div class="row full-height rel">
      <div class="container full-height">
        <div class="carousel carousel-slider full-height">

          <div class="carousel-fixed-item max-w-[180px]">
            <div class="slider-number-wrapper">
              <!-- <div class="current-slide-number">01</div> -->
              <div class="slider-numbers flex-div">
                <span id="current-num">01</span>
                <div class="progress">
                  <div class="determinate" style="width: 33.3%;" />
                </div>
                <span>03</span>
              </div>
            </div>
            <div class="slider-navigations flex-div justify-between">
              <img id="prev-slide" src="~/assets/images/left-chevron.svg" alt="previous" @click="prev()">
              <img id="next-slide" src="~/assets/images/right-chevron.svg" alt="next" @click="next()">
            </div>
          </div>

          <div id="home-slide-1" class="carousel-item" href="#one!">
            <div class="home-content-wrapper full-height">
              <div class="home-txt-wrapper">
                <h1 class="home-txt-title">
                  Real Estate <br> Xplorer:
                </h1>
                <div class="home-txt-desc">
                  Pioneering Global Property Excellence
                </div>
                <div class="home-btn-wrapper">
                  <nuxt-link to="/portfolio" class="home-btn btn">
                    Discover Our Portfolio
                  </nuxt-link>
                </div>
              </div>
              <div class="home-img-wrapper">
                <div class="relative">
                  <img src="~/assets/images/contour-1.svg" alt="pattern" class="back-layer-1">
                  <img src="~/assets/images/yellow-circle.svg" alt="yellow-circle" class="back-layer-2">
                  <img src="~/assets/images/hand-holding-city.png" alt="hand-holding-city" class="front-layer">
                </div>
              </div>
            </div>

            <div class="slider-note">
              <!-- <span class="slider-note-bar"></span> -->
              Transforming Real Estate with Expertise, Innovation, and Integrity
            </div>
          </div>

          <div id="home-slide-2" class="carousel-item" href="#two!">
            <div class="home-content-wrapper full-height">
              <div class="home-txt-wrapper">
                <h1 class="home-txt-title">
                  Transforming Real Estate with Expertise, Innovation, and Integrity
                </h1>
                <div class="home-btn-wrapper">
                  <nuxt-link to="/portfolio" class="home-btn btn">
                    Discover Our Portfolio
                  </nuxt-link>
                </div>
              </div>
              <div class="home-img-wrapper">
                <div class="relative">
                  <img src="~/assets/images/contour-1.svg" alt="pattern" class="back-layer-1">
                  <img src="~/assets/images/yellow-circle.svg" alt="yellow-circle" class="back-layer-2">
                  <img src="~/assets/images/3d-globe.png" alt="3d-globe" class="front-layer">
                </div>
              </div>
            </div>

            <div class="slider-note">
              <span class="slider-note-bar"></span>
              Worldwide Property Portfolio - Your Premier Destination for Global Real Estate.
            </div>
          </div>

          <div id="home-slide-3" class="carousel-item" href="#three!">
            <div class="home-content-wrapper full-height">
              <div class="home-txt-wrapper">
                <h1 class="home-txt-title">
                  Setting Global Standards in Real Estate,
                </h1>
                <div class="home-txt-desc">
                  One Client at a Time
                </div>
                <div class="home-btn-wrapper">
                  <nuxt-link to="/portfolio" class="home-btn btn">
                    Discover Our Portfolio
                  </nuxt-link>
                </div>
              </div>
              <div class="home-img-wrapper">
                <div class="relative">
                  <img src="~/assets/images/contour-1.svg" alt="pattern" class="back-layer-1">
                  <img src="~/assets/images/yellow-circle.svg" alt="yellow-circle" class="back-layer-2">
                  <img src="~/assets/images/apartment.png" alt="apartment" class="front-layer">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import M from 'materialize-css';
import $ from 'jquery';

export default {
  name: 'HomeSection',
  data() {
    return {
      currentSlide: 1
    }
  },
  mounted() {
    // const M = require('materialize-css')

    const elemsCarousel1 = document.querySelectorAll('#landing-section .carousel')
    M.Carousel.init(elemsCarousel1, {
      fullWidth: true,
      onCycleTo(data) {
        const currentSlide = $(data).index() + 1
        const currentSlideNum = currentSlide - 1
        // document.querySelector('.current-slide-number').innerHTML = '0' + currentSlideNum
        document.querySelector('#current-num').innerHTML = '0' + currentSlideNum

        // document.querySelector('#landing-section').setAttribute('data-slide', currentSlideNum)
        document.querySelector('#landing-section .progress .determinate').style.width = (currentSlideNum * 33.3) + '%'
      }
    })

    function autoplay() {
      const elemSlide = document.querySelector('#landing-section .carousel')
      M.Carousel.getInstance(elemSlide).next()

      setTimeout(autoplay, 8000)
    }
    setTimeout(autoplay, 8000)
  },
  methods: {
    prev() {
      const elemSlide = document.querySelector('#landing-section .carousel')
      M.Carousel.getInstance(elemSlide).prev()
    },
    next() {
      // const M = require('materialize-css')
      const elemSlide = document.querySelector('#landing-section .carousel')
      M.Carousel.getInstance(elemSlide).next()
    }
  }
}
</script>

<style scoped>
  #landing-section[data-slide="1"] {
    /* background-image: url("~/assets/images/hero-1b.jpg"); */
    background-color: var(--pry-color);
  }

  #landing-section[data-slide="2"] {
    /* background-image: url("~/assets/images/hero-3.jpg"); */
    background-color: var(--sec-color);
  }

  #landing-section[data-slide="3"] {
    /* background-image: url("~/assets/images/hero-2a.jpg"); */
    background-color: orange;
  }

  #landing-section[data-slide="4"] {
    /* background-image: url("~/assets/images/hero-4a.jpg"); */
    background-color: rebeccapurple;
  }
</style>
