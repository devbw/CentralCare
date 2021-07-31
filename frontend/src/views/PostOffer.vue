<template>
  <div class="main__container">
    <h1>CentralCare</h1>
    <h2>Poster</h2>
    <Post />
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Post from '@/components/Post.vue'

export default {
  name: 'PostOffer',
  components: {
    Footer,
    Post,
  },
  data() {
    return {

    }
  },
}
</script>

<style>
.main__container{
  min-height: 100vh;
  max-height: 100%;
}
</style>