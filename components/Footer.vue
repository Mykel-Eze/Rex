<template>
    <footer id="footer">
        <div class="row">
            <div class="container">
                <div class="footer-grid-wrapper">
                    <div class="footer-block">
                        <div class="footer-block-title">Office Address</div>
                        <ul class="footer-block-list">
                            <li>
                                21, Oluwaleyimu Street, <br /> Ikeja, <br /> Lagos.
                            </li>
                        </ul>
                    </div>
                    <div class="footer-block">
                        <div class="footer-block-title">For Enquiry</div>
                        <ul class="footer-block-list">
                            <li>
                                <a href="mailto:hello@realestatexplorer.ng" class="footer-link flex-div">
                                    <img src="~/assets/images/mail-icon.svg" alt="mail-icon" class="footer-link-icon" />
                                    <span>hello@realestatexplorer.ng</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+2349062036663" class="footer-link flex-div">
                                    <img src="~/assets/images/phone-icon.svg" alt="phone-icon" class="footer-link-icon" />
                                    <span>+234 906 203 6663</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+2349078541189" class="footer-link flex-div">
                                    <img src="~/assets/images/phone-icon.svg" alt="phone-icon" class="footer-link-icon" />
                                    <span>+234 907 854 1189</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-block">
                        <div class="footer-block-title">Sign up for our newsletter</div>
                        <form action="#" class="footer-newsletter-form">
                            <div class="input-field flex-div">
                                <input type="email" id="newsletter-inp" placeholder="Enter your email" />
                                <button id="subscribe-btn"><b>Subscribe</b></button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="footer-copyright-social flex-div justify-content-btw">
                    <div class="footer-copyright">
                        © {{ currentYear }} Realestate Xplorer Nig Ltd. All Rights Reserved
                    </div>
                    <div class="flex-div footer-social">
                        <a href="https://x.com/rexplorerng?s=21&t=U6Q3XsGHmZvXO25RO74YZQ" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color">
                            <img src="~/assets/images/x.svg" alt="twitter-x" class="social-link-icon" />
                            <span>X</span>
                        </a>
                        <a href="https://www.instagram.com/rexplorerng" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color">
                            <img src="~/assets/images/instagram.svg" alt="instagram" class="social-link-icon" />
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.linkedin.com/company/rexplorerng/" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color">
                            <img src="~/assets/images/linkedin.svg" alt="linkedin" class="social-link-icon" />
                            <span>Linkedin</span>
                        </a>
                        <a href="https://www.facebook.com/rexplorerng?mibextid=DlZzXU" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color">
                            <img src="~/assets/images/facebook.svg" alt="facebook" class="social-link-icon" />
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
}
</script>

<style scoped src="~/assets/css/footer.css"></style>