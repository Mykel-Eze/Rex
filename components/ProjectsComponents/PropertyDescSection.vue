<template>
    <section id="property-description">
        <div class="row">
            <div class="container">
                <div class="property-desc-wrapper">
                    <div class="property-desc-txt-side">
                        <div class="property-desc-title">
                            {{ title }}
                        </div>
                        <div class="property-desc-txt">
                            <slot></slot>
                        </div>
                    </div>
                    <div class="property-desc-img-side">
                        <img :src="img" alt="property-desc-img" class="property-desc-img">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PropertyDescriptionSection",
    props: {
        title: {
            type: String,
            default: ""
        },
        desc: {
            type: String,
            default: ""
        },
        img: {
            type: String,
            default: "/other-images/property-img.png"
        }
    }
}
</script>

<style>

</style>