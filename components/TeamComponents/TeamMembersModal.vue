<template>
    <!--=== Mr Eyitayo Shiyanbola (CEO/MD) ===-->
  <div id="team-member-1" class="modal team-modal">
    <img src="~/assets/images/close.svg" alt="close" class="modal-close">
    <div class="modal-content">
        <div class="member-modal-wrapper">
            <div class="member-img-side">
                <img src="~/assets/images/team-member-1.jpg" alt="team-img" class="member-img">
            </div>

            <div class="member-txt-side">
                <div class="container">
                    <div class="member-role">CEO/MD:</div>
                    <div class="member-name">Mr Eyitayo Shiyanbola.</div>
                    <div class="member-desc">
                        Over 15 years’ experience in Real Estate practice/business in Nigeria.
                    </div>
                    <a href="http://linkedin.com" class="member-linkedin-wrapper flex-div gap-2" target="_blank" rel="noopener noreferrer">
                        <img src="~/assets/images/linkedin-black.svg" alt="linkedin" class="linkedin-icon">
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div id="team-member-2" class="modal team-modal">
    <img src="~/assets/images/close.svg" alt="close" class="modal-close">
    <div class="modal-content">
        <div class="member-modal-wrapper">
            <div class="member-img-side">
                <img src="~/assets/images/big-team-img-2.jpg" alt="team-img" class="member-img">
            </div>

            <div class="member-txt-side">
                <div class="container">
                    <div class="member-role">Executive Director:</div>
                    <div class="member-name">Mrs Tobi Shiyanbola.</div>
                    <div class="member-desc">
                        Tobi has some experience in media, research, and customer service. She's a client advocate at
                        heart, and is constantly exploring ways to improve client experience and satisfaction
                    </div>
                    <a href="http://linkedin.com" class="member-linkedin-wrapper flex-div gap-2" target="_blank" rel="noopener noreferrer">
                        <img src="~/assets/images/linkedin-black.svg" alt="linkedin" class="linkedin-icon">
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div id="team-member-3" class="modal team-modal">
    <img src="~/assets/images/close.svg" alt="close" class="modal-close">
    <div class="modal-content">
        <div class="member-modal-wrapper">
            <div class="member-img-side">
                <img src="~/assets/images/team-member-3.jpg" alt="team-img" class="member-img">
            </div>

            <div class="member-txt-side">
                <div class="container">
                    <div class="member-role">Operations Manager:</div>
                    <div class="member-name">Mrs Adeola Omogbehinmi.</div>
                    <div class="member-desc">
                        Over 10 years of experience in real estate practice and operations in Nigeria.
                    </div>
                    <a href="http://linkedin.com" class="member-linkedin-wrapper flex-div gap-2" target="_blank" rel="noopener noreferrer">
                        <img src="~/assets/images/linkedin-black.svg" alt="linkedin" class="linkedin-icon">
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div id="team-member-4" class="modal team-modal">
    <img src="~/assets/images/close.svg" alt="close" class="modal-close">
    <div class="modal-content">
        <div class="member-modal-wrapper">
            <div class="member-img-side">
                <img src="~/assets/images/team-member-4.jpg" alt="team-img" class="member-img">
            </div>

            <div class="member-txt-side">
                <div class="container">
                    <div class="member-role">Brand and Communications Manager:</div>
                    <div class="member-name">Mr. Tobiloba Shiyanbola.</div>
                    <div class="member-desc">
                        With a track record of exceptional brand management skills, he has advanced my career through 
                        various opportunities, showcasing a penchant for excellence, innovation, and strategic planning.
                    </div>
                    <a href="http://linkedin.com" class="member-linkedin-wrapper flex-div gap-2" target="_blank" rel="noopener noreferrer">
                        <img src="~/assets/images/linkedin-black.svg" alt="linkedin" class="linkedin-icon">
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "TeamMember2Modal",
    mounted() {
        const elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    }
}
</script>

<style>

</style>