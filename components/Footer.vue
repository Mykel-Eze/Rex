<template>
    <footer id="footer">
        <div class="row">
            <div class="container">
                <div class="footer-grid-wrapper">
                    <div class="footer-block">
                        <div class="footer-block-title">Office Address</div>
                        <ul class="footer-block-list">
                            <li>
                                Lekki, Lagos, <br /> Nigeria
                            </li>
                        </ul>
                    </div>
                    <div class="footer-block">
                        <div class="footer-block-title">For Enquiry</div>
                        <ul class="footer-block-list">
                            <li>
                                If it's easier, email us?
                            </li>
                            <li>
                                <a href="mailto:hello@realestatexplorer.ng" class="footer-link flex-div">
                                    <img src="~/assets/images/mail-icon.svg" alt="mail-icon" class="footer-link-icon" />
                                    <span>hello@realestatexplorer.ng</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+2349042222281" class="footer-link flex-div">
                                    <img src="~/assets/images/phone-icon.svg" alt="phone-icon" class="footer-link-icon" />
                                    <span>+234 904 2222 281​</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-block">
                        <div class="footer-block-title">Sign up for the newsletter</div>
                        <form action="#" class="footer-newsletter-form">
                            <div class="input-field flex-div">
                                <input type="email" id="newsletter-inp" />
                                <button id="subscribe-btn">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="footer-copyright-social flex-div justify-content-btw">
                    <div class="footer-copyright">
                        © 2023 Real Estate Xplorer. All Right Reserved
                    </div>
                    <div class="flex-div footer-social">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color">
                            <img src="~/assets/images/twitter.svg" alt="twitter" class="social-link-icon" />
                            <span>Twitter</span>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color">
                            <img src="~/assets/images/instagram.svg" alt="instagram" class="social-link-icon" />
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color">
                            <img src="~/assets/images/linkedin.svg" alt="linkedin" class="social-link-icon" />
                            <span>Linkedin</span>
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
}
</script>

<style scoped src="~/assets/css/footer.css"></style>