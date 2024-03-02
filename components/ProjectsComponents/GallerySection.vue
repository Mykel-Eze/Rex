<template>
    <section id="gallery-section">
        <div class="row">
                <div class="section-sub-title center">Gallery</div>
                <div class="gallery-wrapper relative">
                    <Swiper
                        :breakpoints="{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }"
                        :spaceBetween="30"
                        :rewind="true"
                        :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                        :modules="[SwiperAutoplay, SwiperNavigation]"
                        :loop="true"
                        :autoplay="{
                            delay: 8000,
                            disableOnInteraction: true,
                        }"
                        class="mySwiper"
                    >
                        <SwiperSlide v-for="image in images" :key="image.url">
                            <img :src="image.url" alt="Gallery Image">
                        </SwiperSlide>
                    </Swiper>
                    <div class="swiper-button-next">
                        <img src="~/assets/images/next-gallery.svg" alt="next-gallery">
                    </div>
                    <div class="swiper-button-prev">
                        <img src="~/assets/images/prev-gallery.svg" alt="prev-gallery">
                    </div>
                </div>

                <div class="gallery-bottom-wrapper center">
                    <div class="gallery-bottom-txt">
                        Prospective buyers/investors can contact us for further enquiry
                    </div>
                    <div class="gallery-bottom-btn-wrapper">
                        <nuxt-link to="/contact" class="link-btn">Request for information</nuxt-link>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>

export default {
    name: "GallerySection",
    data() {
        return {
            images: [
                { url: '/other-images/gallery/g-3.jpg' },
                { url: '/other-images/gallery/g-4.jpg' },
                { url: '/other-images/gallery/g-5.jpg' },
                { url: '/other-images/gallery/g-6.jpg' },
                { url: '/other-images/gallery/g-7.jpg' },
                { url: '/other-images/gallery/g-8.jpg' },
                { url: '/other-images/gallery/g-9.jpg' },
                { url: '/other-images/gallery/g-10.jpg' },
                { url: '/other-images/gallery/g-11.jpg' },
                { url: '/other-images/gallery/g-12.jpg' },
                { url: '/other-images/gallery/g-13.jpg' },
                { url: '/other-images/gallery/g-14.jpg' },
                { url: '/other-images/gallery/g-15.jpg' },
                { url: '/other-images/gallery/g-16.jpg' },
                { url: '/other-images/gallery/g-17.jpg' },
                { url: '/other-images/gallery/g-18.jpg' },
                { url: '/other-images/gallery/g-19.jpg' },
            ]
        };
    }
}
</script>

<style>
/* Add your custom styles here */
</style>