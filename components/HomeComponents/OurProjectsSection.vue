<template>
    <section id="our-porjects">
        <div class="row">
            <div class="container">
                <div class="our-projects-wrapper">
                    <div class="our-projects-txt-side">
                        <div class="section-sub-title">Our Projects</div>
                        <div class="sub-title-2">Ìdùnú Òyó Farms and Resort</div>
                        <p class="section-desc-txt">
                            Idunu Oyo Farms and Resort, our premier project, stands as a meticulously
                            planned agritourism venture sprawling across over 500 hectares in
                            Ado-Awaye, Iseyin, Oyo State. 
                        </p>
                        <div class="section-btn-wrapper">
                            <nuxt-link to="/projects" class="link-btn more-projects-btn hover-scale">More projects</nuxt-link>
                        </div>
                    </div>
                    <div class="our-projects-img-side">
                        <img src="~/assets/images/our-project-1.jpg" alt="our-project" class="op-img-1">
                        <img src="~/assets/images/our-project-2.jpg" alt="our-project" class="op-img-2">
                        <img src="~/assets/images/our-project-3.png" alt="our-project" class="op-img-3">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "OurProjectsSection"
}
</script>

<style>

</style>