<template>
    <section id="other-projects">
        <div class="row">
            <div class="container">
                <div class="section-header center">
                    <div class="section-sub-title">Other projects</div>
                    <div class="section-desc-txt">
                        "Discover the Pinnacle of Property Excellence with Real Estate Xplorer. Spanning
                        across Nigeria's most dynamic regions — Lagos, Abuja, Ogun, and Oyo — our projects
                        are more than just properties; they are visions brought to life, designed to surpass
                        expectations and elevate lifestyles.
                    </div>
                </div>

                <div class="other-projects-wrapper">
                    <nuxt-link to="/projects/lagos" class="other-project-block hover-scale">
                        <img src="~/assets/images/property-item-thumbnail.jpg" alt="property-thumbnail" class="other-project-img">
                        <div class="other-project-title">
                            Lagos <br> Properties
                        </div>
                    </nuxt-link>

                    <nuxt-link to="/projects/abuja" class="other-project-block hover-scale">
                        <img src="~/assets/images/property-item-thumbnail.jpg" alt="property-thumbnail" class="other-project-img">
                        <div class="other-project-title">
                            Abuja <br> Properties
                        </div>
                    </nuxt-link>

                    <nuxt-link to="/projects/ogun" class="other-project-block hover-scale">
                        <img src="~/assets/images/property-item-thumbnail.jpg" alt="property-thumbnail" class="other-project-img">
                        <div class="other-project-title">
                            Ogun <br> Properties
                        </div>
                    </nuxt-link>

                    <nuxt-link to="/projects/oyo" class="other-project-block hover-scale">
                        <img src="~/assets/images/property-item-thumbnail.jpg" alt="property-thumbnail" class="other-project-img">
                        <div class="other-project-title">
                            Oyo <br> Properties
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>