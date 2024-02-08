<template>
  <section id="testimonials">
    <div class="row">
        <div class="container">
            <div class="section-title mb-4">
                <!-- <span class="section-title-bar"></span> -->
                Testimonials
            </div>
            <div class="testimonial-desc-grid">
                <div class="testimonial-desc-txt">
                    ICON velas vechain ren ICON waves neo. Enjin waves holo telcoin ipsum ankr. Decentraland
                    quant telcoin ethereum compound helium kadena. Celsius
                </div>
                <div class="testimonial-desc-btn-wrapper">
                    <nuxt-link to="#" class="link-btn testimonial-desc-btn m-auto">FAQ</nuxt-link>
                </div>
            </div>

            <div class="testimonial-blocks-wrapper">
                <div class="testimonial-block" data-aos="fade-up" data-aos-duration="500">
                    <div class="testimonial-block-header flex-div">
                        <ReviewPointIcon />
                        <span>Customer Reviews</span>
                    </div>
                    <p class="testimonial-block-content">
                        Id vulputate porta pharetra suspendisse. Velit praesent pellentesque a sagittis in. Ut dictum pellentesque
                        ac sem vitae.
                    </p>
                    <div class="testimonial-other-details sec-color">
                        <div class="testimonial-name">Christiana Olaotan</div>
                        <div class="testimonial-title">Trusted and Reliable Service</div>
                    </div>
                </div>

                <div class="testimonial-block" data-aos="fade-up" data-aos-duration="1000">
                    <div class="testimonial-block-header flex-div">
                        <ReviewPointIcon />
                        <span>Customer Reviews</span>
                    </div>
                    <p class="testimonial-block-content">
                        Lobortis netus lectus facilisi purus leo magna sollicitudin proin amet. Ac leo duis diam non nibh
                        lacus. Sed orci semper hac faucibus nunc.
                    </p>
                    <div class="testimonial-other-details sec-color">
                        <div class="testimonial-name">Musa Abubaka</div>
                        <div class="testimonial-title">Instant Transaction Settlement</div>
                    </div>
                </div>

                <div class="testimonial-block" data-aos="fade-up" data-aos-duration="1500">
                    <div class="testimonial-block-header flex-div">
                        <ReviewPointIcon />
                        <span>Customer Reviews</span>
                    </div>
                    <p class="testimonial-block-content">
                        Pellentesque morbi dolor tempor in faucibus enim. Sed proin mattis non consectetur. At proin duis
                        ullamcorper tortor posuere vitae ac aliquam proin.
                    </p>
                    <div class="testimonial-other-details sec-color">
                        <div class="testimonial-name">Chinedu Nwaiwu</div>
                        <div class="testimonial-title">Enjoying Lowest Charges</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'TestimonialsSection'
}
</script>

<style>
.testimonial-block:nth-child(even) svg circle {
    fill: white;
}
</style>