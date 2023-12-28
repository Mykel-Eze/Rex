<template>
    <div id="app-wrapper">
        <Navbar />
            <main id="main-contents-wrapper">
                <slot />
            </main>
        <Footer />
    </div>
</template>

<script>
    import $ from 'jquery';
    
    export default {
        name: 'DefaultLayout',
        mounted() {
            $(window).scroll(function () {
                $('nav.main-nav').toggleClass('scrolled-nav', $(this).scrollTop() > 50)
            })
        }
    }
</script>

<style>

</style>