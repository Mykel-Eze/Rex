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
    overflow: hidden;
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

.other-project-page .blue-top-section-wrapper .top-section-title {
    max-width: 400px;
    text-align: left;
    margin-top: 40px;
}
.other-project-page.opp-1 img.blue-top-section-img,
.other-project-page.opp-2 img.blue-top-section-img {
    width: 100%;
    max-width: none;
    position: relative;
    top: 40px;
}
.other-project-page .blue-top-section-wrapper {
    align-items: flex-start;
}
#abuja-project-page img.blue-top-section-img {
    width: 60%;
    top: 40px;
    right: -15%;
}
.other-project-page.opp-2 img.blue-top-section-img {
    width: 50%;
    max-width: 375px;
    top: 0;
}
.other-project-page.opp-2 .blue-top-section-wrapper .top-section-title {
    margin-top: 10px;
}


@media(max-width: 992px) {
    .other-project-page .blue-top-section-wrapper {
        gap: 30px;
    }
    #abuja-project-page img.blue-top-section-img {
        right: 0;
    }
    #lagos-project-page img.blue-top-section-img {
        left: -120px;
    }
}

@media(max-width: 600px) {
     .other-project-page .blue-top-section-wrapper {
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
    }
    .other-project-page.opp-2 img.blue-top-section-img {
        margin: auto;
    }
    .other-project-page .blue-top-section-wrapper .top-section-title {
        text-align: center;
    }
    #abuja-project-page img.blue-top-section-img {
        width: 100%;
        top: 20px;
    }
    .other-project-page.opp-1 img.blue-top-section-img {
        top: 0;
    }
    #lagos-project-page img.blue-top-section-img {
        left: 0;
    }
}
/**** end of Top-Section Styles ****/
</style>