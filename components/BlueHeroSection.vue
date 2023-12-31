<template>
    <section id="blue-top-section">
        <div class="row relative full-height">
            <div class="container full-height">
                <div class="blue-top-section-wrapper">
                    <h1 class="top-section-title center">{{ title }}</h1>
                    <img :src="img" alt="top-section-image" class="blue-top-section-img">
                </div>
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
        img: {
            type: String,
            default: ""
        }
    }
}
</script>

<style></style>