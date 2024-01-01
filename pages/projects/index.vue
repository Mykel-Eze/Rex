<template>
    <div id="projects-page">
        <!---=== Top Section ===--->
        <BigHeroSection title="Our Projects" backgroundImage="/other-images/projects-banner.jpg" />
        <!---=== end of Top Section ===--->

        <!---=== Project-Intro Section ===--->
        <ProjectIntro />
        <!---=== end of Project-Intro Section ===--->

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
    name: "ProjectsPage",
    layout: "default",
}
</script>

<style src="@/assets/css/projects.css"></style>