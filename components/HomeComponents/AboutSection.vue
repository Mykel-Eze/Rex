<template>
  <section id="about">
    <div class="row">
        <div class="container">
            <div class="about-content-wrapper">
                <div class="about-txt-side">
                    <div class="section-title mb-4">
                        <span class="section-title-bar"></span>
                        About us
                    </div>
                    <div class="flex flex-col gap-[30px]">
                        <div class="section-sub-title">
                            Real Estate as a basic need requires careful selection and management in a
                            constantly changing environment.
                        </div>
                        <div class="section-desc-txt">
                            Real Estate Xplorer is a dynamic Real Estate Service and Development Company
                            established in 2020. We are registered with the Corporate Affairs Commission of
                            Nigeria (CAC) as Real Estate Explorer Nigeria Limited. Our aim is to satisfy client's
                            emerging real estate needs nationally and across the globe.
                        </div>
                        <div class="section-btn-wrapper">
                            <nuxt-link to="/about" class="link-btn hover-scale">Learn more</nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="about-img-side">
                    <img src="~/assets/images/about-img.png" alt="globe and houses" class="about-img">
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "AboutSection"
}
</script>

<style>

</style>