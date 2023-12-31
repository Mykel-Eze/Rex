<template>
  <div id="team-member-2" class="modal team-modal">
    <img src="~/assets/images/close.svg" alt="close" class="modal-close">
    <div class="modal-content">
        <div class="member-modal-wrapper">
            <div class="member-img-side">
                <img src="~/assets/images/big-team-img-2.jpg" alt="big-team-img" class="member-img">
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