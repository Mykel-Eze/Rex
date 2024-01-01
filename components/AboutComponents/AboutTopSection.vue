<template>
  <section id="top-section">
    <div class="row full-height">
        <div class="container full-height">
            <h1 class="top-section-title center">{{ title }}</h1>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'AboutTopSection',
    props: {
      title: {
        type: String,
        default: "Section Title"
      },
    }
}
</script>

<style>
/**** Top-Section Styles ****/
section#top-section {
    background-color: var(--pry-color);
    height: 400px;
    padding: 20px;
    color: white;
    position: relative;
}
section#top-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/contour-bg-3.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
h1.top-section-title {
    font-size: 64px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

@media(max-width: 992px) {}

@media(max-width: 600px) {}
/**** end of Top-Section Styles ****/
</style>