<template>
    <div id="abuja-project-page" class="other-project-page opp-1">
        <!---=== Top Section ===--->
        <BlueHeroSection title="Abuja Properties" img="/other-images/abuja-art.png" />
        <!---=== end of Top Section ===--->

        <!---=== Property-Description Section ===--->
        <PropertyDescSection title="Elegance Meets Tranquility in Abuja" img="/other-images/property-img.png">
            Nestled in Nigeria's capital, our Abuja properties combine sleek, modern design with peaceful
            surroundings. Ideal for families and professionals, these properties promise a harmonious blend
            of luxury and comfort.
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
    name: "AbujaProjectPage",
    layout: "default"
}
</script>

<style src="@/assets/css/projects.css"></style>