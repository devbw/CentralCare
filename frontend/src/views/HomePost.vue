<template>
  <div class="main__container">
    <h1>CentralCare</h1>
    <h2>Annonces</h2>
    <Offers />
    <Footer/>
  </div>
</template>

<script>
import Offers from '@/components/Offers.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomePost',
  components: {
    Offers,
    Footer,
  }
}
</script>

<style scoped>
.main__container{
  min-height: 100vh;
  max-height: 100%;
}
</style>