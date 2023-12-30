<template>
    <div id="nav-wrapper">
        <!---=== Add .nav-2 to give it a white-background mode ===--->
        <nav class="main-nav">
            <div class="container full-height">
                <div class="nav-wrapper">
                    <nuxt-link to="/" class="brand-logo" @click="scrollToTop()">
                        <img src="~/assets/images/rex-logo-white.svg" alt="REX" class="logo white-img">
                        <img src="~/assets/images/rex-logo-blue.svg" alt="REX" class="logo colored-img">
                    </nuxt-link>

                    <ul id="nav-mobile-2" class="dn-mobile ul-nav">
                        <li>
                            <a href="#" data-target="slide-out" class="sidenav-trigger sec-color right">
                                <img src="~/assets/images/menu.svg" alt="menu" class="white-img">
                                <img src="~/assets/images/menu-blue.svg" alt="menu" class="colored-img">
                            </a>
                        </li>
                    </ul>

                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <nuxt-link to="/" @click="scrollToTop()">
                                <span>Home</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <a href="#!" class="dropdown-trigger flex-div" data-target="about-us-dropdown" @click="scrollToTop()">
                                <span>About Us</span>
                                <!-- <img src="~/assets/images/arrow-down.svg" alt="arrow-down" class="arrow-down"> -->
                                <ArrowDownIcon />
                            </a>

                             <!-- Dropdown Structure -->
                            <ul id='about-us-dropdown' class='dropdown-content'>
                                <li>
                                    <nuxt-link to="#">About Us</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="#">FAQ</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="#">Our Team</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="#">Blog</nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <nuxt-link to="/#" @click="scrollToTop()">
                                <span>Our Projects</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/#" @click="scrollToTop()">
                                <span>Contact Us</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <a href="#" class="rex-tv-btn flex-div btn" @click="scrollToTop()">
                                <img src="~/assets/images/youtube-icon.svg" alt="youtube-icon">
                                <span>REXtv</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="rr-btn btn" @click="scrollToTop()">
                                Realtors' Registration
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul id="slide-out" class="sidenav">
            <div class="sidenav-logo">
                <nuxt-link to="/" class="sidenav-close" @click="scrollToTop()">
                    <img src="~/assets/images/rex-logo-blue.svg" alt="REX" class="logo">
                </nuxt-link>
            </div>
            <ul class="sidenav-flex">
                <li>
                    <nuxt-link to="/" class="sidenav-close" @click="scrollToTop()">
                        <span>Home</span>
                    </nuxt-link>
                </li>
                <li>
                    <a href="#!" class="dropdown-trigger flex-div" data-target="about-us-dropdown-2" @click="scrollToTop()">
                        <span>About Us</span>
                        <img src="~/assets/images/arrow-down.svg" alt="arrow-down" class="arrow-down">
                    </a>

                    <!-- Dropdown Structure -->
                    <ul id='about-us-dropdown-2' class='dropdown-content'>
                        <li>
                            <nuxt-link to="#" class="sidenav-close">About Us</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#" class="sidenav-close">FAQ</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#" class="sidenav-close">Our Team</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#" class="sidenav-close">Blog</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <nuxt-link to="/#" class="sidenav-close" @click="scrollToTop()">
                        <span>Our Projects</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/#" class="sidenav-close" @click="scrollToTop()">
                        <span>Contact Us</span>
                    </nuxt-link>
                </li>
                <li>
                    <a href="#" class="rex-tv-btn flex-div btn sidenav-close" @click="scrollToTop()">
                        <img src="~/assets/images/youtube-icon.svg" alt="youtube-icon">
                        <span>REXtv</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="rr-btn btn sidenav-close" @click="scrollToTop()">
                        Realtors' Registration
                    </a>
                </li>
            </ul>
            <div class="sidenav-footer">
                <div class="footer-social-wrapper">
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="~/assets/images/twitter.svg" alt="twitter" class="social-icons">
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="~/assets/images/instagram.svg" alt="instagram" class="social-icons">
                    </a>
                    <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="~/assets/images/linkedin.svg" alt="linkedin" class="social-icons">
                    </a>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
import M from 'materialize-css';

export default {
    name: 'NavbarComp',
    mounted() {
        const elemsSidenav = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elemsSidenav)

        const elemsScrollspy = document.querySelectorAll('.scrollspy')
        M.ScrollSpy.init(elemsScrollspy)

        const elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown, {
            // coverTrigger: false,
            hover: true,
        });
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style scoped src="~/assets/css/navbar.css"></style>

<style>
    nav.main-nav.scrolled-nav ul>li>a svg path, 
    nav.main-nav.nav-2 ul>li>a svg path {
        stroke: #1A242D;
    }
    nav.main-nav.scrolled-nav ul>li>a:hover svg path {
        stroke: var(--pry-color);
    }
</style>
