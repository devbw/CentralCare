<template>
<div class="main__container">
    <h1>CentralCare</h1>
    <h2>Annonce</h2>
    <Offer />
    <Footer class="footer"/>
  </div>
</template>

<script>
import Offer from '@/components/Offer.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Single',
    components : {
        Footer,
        Offer,
    },
    methods: {

    }
}
</script>

<style>
.main__container{
  min-height: 100vh;
  max-height: 100%;
}
</style>