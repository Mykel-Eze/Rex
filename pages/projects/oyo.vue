<template>
    <div id="oyo-project-page" class="other-project-page opp-2">
        <!---=== Top Section ===--->
        <BlueHeroSection title="Òyó Properties" img="/other-images/oyo-art.png" />
        <!---=== end of Top Section ===--->

        <!---=== Property-Description Section ===--->
        <PropertyDescSection title="Embrace the Future in Òyó" img="/other-images/property-img.png">
            Our properties in Oyo are designed for the forward-thinking individual. Combining futuristic designs
            with top-tier amenities, these homes are not just residences but a statement of a modern, dynamic lifestyle.
        </PropertyDescSection>
        <!---=== end of Property-Description Section ===--->

        <!---=== Gallery Section ===--->
        <GallerySection />
        <!---=== end of Gallery Section ===--->

        <!---=== Other-Projects Section ===--->
        <OtherProjectsSection />
        <!---=== end of Other-Projects Section ===--->
    </div>
</template>

<script>
export default {
    name: "OyoProjectPage",
    layout: "default"
}
</script>

<style src="@/assets/css/projects.css"></style>
<style>
#oyo-project-page .property-desc-title {
    max-width: 350px;
}
</style>
