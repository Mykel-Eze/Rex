<template>
  <form @submit.prevent="handleSubmit" class="cfs-block" data-aos="fade-up" data-aos-duration="500">
    <!-- Previous form fields remain the same until the submit buttons -->
    <div class="input-field select-field">
      <label for="category">Category</label>
      <select 
        id="category" 
        v-model="formData.category" 
        :class="{ 'error': errors.category }"
        @change="validateField('category')"
        required
      >
        <option value="" disabled>Select Category</option>
        <option value="Prospective Client">Prospective Client</option>
        <option value="Realtor/Sales Consultant">Realtor/Sales Consultant</option>
        <option value="Investor">Investor</option>
        <option value="Other">Others</option>
      </select>
      <img src="~/assets/images/chevron-down.svg" alt="chevron-down" class="chevron-down" />
      <span v-if="errors.category" class="error-message">{{ errors.category }}</span>
    </div>

    <div class="input-field">
      <label for="full_name" :class="{ 'active': formData.full_name }">Full name</label>
      <input 
        id="full_name" 
        type="text" 
        v-model="formData.full_name"
        :class="{ 'error': errors.full_name }"
        @input="validateField('full_name')"
        @blur="validateField('full_name')"
        placeholder="Input your full name in here" 
        required
      >
      <span v-if="errors.full_name" class="error-message">{{ errors.full_name }}</span>
    </div>

    <div class="input-field">
      <label for="email" :class="{ 'active': formData.email }">Email address</label>
      <input 
        id="email" 
        type="email" 
        v-model="formData.email"
        :class="{ 'error': errors.email }"
        @input="validateField('email')"
        @blur="validateField('email')"
        placeholder="Input your email address in here" 
        required
      >
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
    </div>

    <div class="input-field">
      <label for="message" :class="{ 'active': formData.message }">Message</label>
      <textarea 
        id="message" 
        class="materialize-textarea" 
        v-model="formData.message"
        :class="{ 'error': errors.message }"
        @input="validateField('message')"
        @blur="validateField('message')"
        placeholder="Write your message here" 
        required
      />
      <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
    </div>

    <div class="submit-buttons-wrapper">
      <button 
        type="button"
        class="submit-btn whatsapp-btn"
        :disabled="isSubmitting || !isFormValid"
        @click="sendToWhatsApp"
      >
        {{ isSubmitting ? 'Sending...' : 'Send to WhatsApp' }}
      </button>

      <button 
        type="button"
        class="submit-btn email-btn"
        :disabled="isSubmitting || !isFormValid"
        @click="sendToEmail"
      >
        {{ isSubmitting ? 'Sending...' : 'Send to Email' }}
      </button>
    </div>
  </form>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import M from 'materialize-css'

export default {
  name: 'ContactForm',
  props: {
    whatsappNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const formData = reactive({
      category: '',
      full_name: '',
      email: '',
      message: ''
    })

    const errors = reactive({})
    const isSubmitting = ref(false)
    const touched = reactive({
      category: false,
      full_name: false,
      email: false,
      message: false
    })

    const validationRules = {
      category: (value) => {
        if (!value) return 'Please select a category'
        return ''
      },
      full_name: (value) => {
        if (!value.trim()) return 'Please enter your full name'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name should only contain letters and spaces'
        return ''
      },
      email: (value) => {
        if (!value) return 'Please enter your email'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address'
        return ''
      },
      message: (value) => {
        if (!value.trim()) return 'Please enter your message'
        // if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return ''
      }
    }

    const validateField = (fieldName) => {
      touched[fieldName] = true
      const error = validationRules[fieldName](formData[fieldName])
      if (error) {
        errors[fieldName] = error
      } else {
        delete errors[fieldName]
      }
    }

    // Fixed: Properly define isFormValid as a computed property
    const isFormValid = computed(() => {
      // Check if all fields are filled and valid
      return Object.keys(formData).every(field => {
        const value = formData[field]
        const error = validationRules[field](value)
        return value && !error
      })
    })

    const validateForm = () => {
      Object.keys(formData).forEach(field => {
        validateField(field)
      })
      return Object.keys(errors).length === 0
    }

    const formatEmailSubject = () => {
      return encodeURIComponent(`New Contact Form Submission - ${formData.category}`)
    }

    const formatEmailBody = () => {
      return encodeURIComponent(
        `Category: ${formData.category}\n` +
        `Name: ${formData.full_name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      )
    }

    const formatWhatsAppMessage = () => {
      return encodeURIComponent(
        `*New Contact Form Submission*\n\n` +
        `*Category:* ${formData.category}\n` +
        `*Name:* ${formData.full_name}\n` +
        `*Email:* ${formData.email}\n\n` +
        `*Message:*\n${formData.message}`
      )
    }

    const clearForm = () => {
      Object.keys(formData).forEach(key => {
        formData[key] = ''
        touched[key] = false
      })
      Object.keys(errors).forEach(key => delete errors[key])
    }

    const sendToWhatsApp = async () => {
      if (!validateForm()) return

      isSubmitting.value = true

      try {
        const whatsappUrl = `https://wa.me/${props.whatsappNumber}?text=${formatWhatsAppMessage()}`
        window.open(whatsappUrl, '_blank')
        clearForm()
        M.toast({ html: 'Redirecting to WhatsApp...' })
      } catch (error) {
        M.toast({ html: 'Failed to open WhatsApp. Please try again.' })
        console.error('Error opening WhatsApp:', error)
      } finally {
        isSubmitting.value = false
      }
    }

    const sendToEmail = async () => {
      if (!validateForm()) return

      isSubmitting.value = true

      try {
        const mailtoUrl = `mailto:${props.emailAddress}?subject=${formatEmailSubject()}&body=${formatEmailBody()}`
        window.location.href = mailtoUrl
        clearForm()
        M.toast({ html: 'Opening email client...' })
      } catch (error) {
        M.toast({ html: 'Failed to open email client. Please try again.' })
        console.error('Error opening email:', error)
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      formData,
      errors,
      isSubmitting,
      isFormValid, // Fixed: Now properly included in the return object
      validateField,
      sendToWhatsApp,
      sendToEmail
    }
  },
  mounted() {
    const elemsSelect = document.querySelectorAll('select')
    M.FormSelect.init(elemsSelect)
  }
}
</script>

<style scoped>
.cfs-block .input-field input.error, 
.cfs-block .input-field textarea.error,
.cfs-block .input-field select.error {
  border-color: #f44336 !important;
  box-shadow: 0 1px 0 0 #f44336 !important;
}

.error-message {
  font-size: 12px;
  color: #f44336;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.submit-buttons-wrapper {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 2rem;
}

/* .submit-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
} */

.whatsapp-btn:hover {
  background-color: #25D366;
}

.email-btn:hover {
  background-color: #D73925;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .submit-buttons-wrapper {
    flex-direction: column;
  }

  .submit-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>