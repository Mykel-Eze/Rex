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
                { url: '/other-images/team-expertise-1.png' },
                { url: '/other-images/team-expertise-2.png' },
                { url: '/other-images/team-expertise-3.png' },
                { url: '/other-images/team-expertise-1.png' },
                { url: '/other-images/team-expertise-2.png' },
                { url: '/other-images/team-expertise-3.png' },
            ]
        };
    }
}
</script>

<style>
/* Add your custom styles here */
</style>