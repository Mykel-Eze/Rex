<template>
    <form id="contact-form" action="#" class="cfs-block" data-aos="fade-up" data-aos-duration="500">
        <div class="input-field select-field">
          <label for="category">Category</label>
          <select id="category" name="category" v-model="category" required>
            <option value="" selected disabled>Select Category</option>
            <option value="Business owners">Business owners</option>
            <option value="Government and public institutions">Government & public institutions</option>
            <option value="Investors and banks">Investors & banks</option>
            <option value="Others">Others</option>
          </select>
          <img src="~/assets/images/chevron-down.svg" alt="chevron-down" class="chevron-down">
        </div>
        <div class="input-field">
          <label for="full_name" class="active">Full name</label>
          <input id="full_name" type="text" name="full_name" v-model="full_name" placeholder="Input your full name in here" required>
        </div>
        <div class="input-field">
          <label for="email" class="active">Email address</label>
          <input id="email" type="email" name="email" v-model="email" placeholder="Input your email address in here" required>
        </div>
        <div class="input-field">
          <label for="message" class="active">Messages</label>
          <textarea id="message" class="materialize-textarea" name="message" placeholder="Write your message here" required />
        </div>

        <div class="submit-btn-wrapper">
          <button class="submit-btn"> Send Messages </button>
        </div>
    </form>
</template>

<script>
import M from 'materialize-css';

export default {
    name: "ContactForm",
    data() {
        return {
            category: '',
            full_name: '',
            email: '',
            message: '',
        }
    },
    mounted() {
        const elemsSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemsSelect);
    }
}
</script>

<style>

</style>