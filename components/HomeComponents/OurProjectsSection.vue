<template>
    <section id="our-porjects">
        <div class="row">
            <div class="container">
                <div class="our-projects-wrapper">
                    <div class="our-projects-txt-side">
                        <div class="section-sub-title">Our Projects</div>
                        <div class="sub-title-2">Ìdùnú Òyó Farms & Resort</div>
                        <p class="section-desc-txt">
                            Ìdùnú Òyó Farms & Resort, our premier project, stands as a meticulously
                            planned agritourism venture sprawling across over 500 hectares in
                            Ado-Awaye, Iseyin, Oyo State. 
                        </p>
                        <div class="section-btn-wrapper">
                            <nuxt-link to="/projects" class="link-btn more-projects-btn hover-scale">More projects</nuxt-link>
                        </div>
                    </div>
                    <div class="our-projects-img-side hidden-xs-sm">
                        <img src="~/assets/images/our-project-1.jpg" alt="our-project" class="op-img-1" data-aos="fade-up" data-aos-duration="1500">
                        <img src="~/assets/images/our-project-2.jpg" alt="our-project" class="op-img-2" data-aos="fade-up" data-aos-duration="1000">
                        <img src="~/assets/images/our-project-3.png" alt="our-project" class="op-img-3" data-aos="fade-up" data-aos-duration="500">
                    </div>

                    <div class="our-projects-img-side visible-xs-sm">
                        <img src="~/assets/images/our-project-1.jpg" alt="our-project" class="op-img-1 materialboxed" data-aos="fade-up" data-aos-duration="1500">
                        <img src="~/assets/images/our-project-2.jpg" alt="our-project" class="op-img-2 materialboxed" data-aos="fade-up" data-aos-duration="1000">
                        <img src="~/assets/images/our-project-3.png" alt="our-project" class="op-img-3 materialboxed" data-aos="fade-up" data-aos-duration="500">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import M from 'materialize-css';
import AOS from 'aos';

export default {
    name: "OurProjectsSection",
    mounted() {
        AOS.init();

        const elemsMaterialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elemsMaterialBox);
    }
}
</script>

<style>

</style>