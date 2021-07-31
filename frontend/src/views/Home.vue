<template>
  <div class="block__container">
    <div class="block__container__info">
      <h1>CentralCare</h1>
      <h2>Votre plateforme d’annonces d’aide à la personne !</h2>
    </div>
    <FirstCard />
    <SecondCard class="margin__card"/>
    <ThirdCard class="margin__card"/>
    <FourthCard class="margin__card"/>
    <FifthCard class="margin__card"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstCard from '@/components/homepage/FirstCard.vue'
import SecondCard from '@/components/homepage/SecondCard.vue'
import ThirdCard from '@/components/homepage/ThirdCard.vue'
import FourthCard from '@/components/homepage/FourthCard.vue'
import FifthCard from '@/components/homepage/FifthCard.vue'

export default {
  name: 'Home',
  components: {
    FirstCard,
    SecondCard,
    ThirdCard,
    FourthCard,
    FifthCard
  }
}
</script>

<style scoped>
 p{
   color: var(--first-color-darker);
   margin-top: .2rem;
 }
</style>
