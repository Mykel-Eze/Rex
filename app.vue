<template>
  <NuxtLayout>
    <NuxtPage />

    <WhatsAppFAB 
      whatsapp-number="2349062036663"
      message="Hi! I'd like to learn more about your services."
      tooltip="Chat with us!"
    />
  </NuxtLayout>
</template>

<script>
import AOS from 'aos';

export default {
  mounted() {
    AOS.init();
  }
}
</script>
