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

</style>