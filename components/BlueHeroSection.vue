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

<style>
/**** Top-Section Styles ****/
section#blue-top-section {
    background: #003AD0;
    color: white;
    height: 550px;
    padding: 20px;
    color: white;
    position: relative;
}
section#blue-top-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/big-contour-bg.png");
    background-size: 100%;
    background-position: right 25%;
    background-repeat: no-repeat;
}

.blue-top-section-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    position: relative;
    top: calc(50% + 30px);
    transform: translateY(-50%);
}
.blue-top-section-wrapper .top-section-title {
    margin: 0;
    max-width: 565px;
}
img.blue-top-section-img {
    width: 20%;
    max-width: 280px;
}


@media(max-width: 992px) {}

@media(max-width: 600px) {}
/**** end of Top-Section Styles ****/
</style>