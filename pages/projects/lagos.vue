<template>
    <div id="lagos-project-page" class="other-project-page opp-1">
        <!---=== Top Section ===--->
        <BlueHeroSection title="Lagos Properties" img="/other-images/lagos-art.png" />
        <!---=== end of Top Section ===--->

        <!---=== Property-Description Section ===--->
        <PropertyDescSection title="Experience Urban Sophistication in Lagos" img="/other-images/property-img.png">
            Our properties in Lagos offer luxury living in Nigeria's vibrant commercial hub. From high-rise apartments
            with stunning city views to serene gated communities, each property is a haven of comfort and style.
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
    name: "LagosProjectPage",
    layout: "default"
}
</script>

<style src="@/assets/css/projects.css"></style>