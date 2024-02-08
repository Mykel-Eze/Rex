<template>
    <div id="ogun-project-page" class="other-project-page opp-2">
        <!---=== Top Section ===--->
        <BlueHeroSection title="Ogun Properties" img="/other-images/ogun-art.png" />
        <!---=== end of Top Section ===--->

        <!---=== Property-Description Section ===--->
        <PropertyDescSection title="Discover the Heart of Tradition and Modernity in Ogun" img="/other-images/property-img.png">
            Our Ogun properties are perfect for those who appreciate the balance of a rich cultural heritage with modern
            living. These homes offer a unique lifestyle, surrounded by natural beauty and local charm.
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
    name: "OgunProjectPage",
    layout: "default"
}
</script>

<style src="@/assets/css/projects.css"></style>
