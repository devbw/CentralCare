<template>
  <div class="main__container">
    <h1>CentralCare</h1>
    <h2>Mon compte</h2>
    <div class="block__account">
      <Infos/>
      <Security/>
      <Sub/>
      <Active/>
      <Delete/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Infos from '@/components/account/accountInfos.vue'
import Security from '@/components/account/accountSecurity.vue'
import Sub from '@/components/account/accountSub.vue'
import Active from '@/components/account/accountActive.vue'
import Delete from '@/components/account/accountDelete.vue'

export default {
  name: 'Account',
  components: {
    Footer,
    Infos,
    Security,
    Sub,
    Active,
    Delete,
  }
}
</script>

<style scoped>
.main__container{
  min-height: 100vh;
  max-height: 100%;
}
.block__account{
  display: flex;
  flex-direction: column;
}
</style>