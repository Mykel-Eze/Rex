<template>
  <NuxtLayout>
    <NuxtPage />
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
