<template>
  <div id="team-page">
    <!---=== Top Section ===--->
    <BigHeroSection title="Our Team" backgroundImage="/other-images/our-team-banner.jpg" />
    <!---=== end of Top Section ===--->

    <!---=== Team-Members Section ===--->
    <TeamMembersSection />
    <!---=== end of Team-Members Section ===--->

    <!---=== Team-Member Modal ===--->
    <TeamMember2Modal />
    <!---=== end of Team-Member Modal ===--->
  </div>
</template>

<script>
export default {
    name: "TeamPage",
    layout: "default",
}
</script>

<style src="@/assets/css/team.css"></style>