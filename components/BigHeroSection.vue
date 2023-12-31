<template>
  <section id="hero-section" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <div class="row relative full-height">
      <div class="container full-height">
        <h1 class="top-section-title center">{{ title }}</h1>

        <div class="scroll-txt-wrapper flex-div">
          <span class="scroll-line"></span>
          <span>Scroll</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BigTopSection",
  props: {
    title: {
      type: String,
      default: "Section Title"
    },
    backgroundImage: {
      type: String,
      default: "/images/hero-bg.jpg"
    }
  }
}
</script>

<style></style>
