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

<style>
/**** Big-Hero-Section Styles ****/
section#hero-section {
    position: relative;
    color: white;
    height: 99vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
}
section#hero-section::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
}
section#hero-section h1.top-section-title.center {
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    margin: 0;
}
.scroll-txt-wrapper {
    gap: 10px;
    color: var(--sec-color);
    font-size: 12px;
}
span.scroll-line {
    width: 200px;
    height: 1px;
    background: var(--sec-color);
}
.scroll-txt-wrapper {
    gap: 10px;
    color: var(--sec-color);
    font-size: 12px;
    position: absolute;
    bottom: 130px;
    left: 0px;
    right: 0;
    justify-content: center;
    transform: rotate(-90deg);
    animation: upAndDown 2s infinite alternate;
}

@keyframes upAndDown {
    0% {
        bottom: 130px;
    }
    50% {
        bottom: 150px;
    }
    100% {
        bottom: 130px;
    }
}

@media(max-width: 992px) {}

@media(max-width: 600px) {}
/**** end of Big-Hero-Section Styles ****/
</style>
