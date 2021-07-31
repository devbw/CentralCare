<template>
  <div class="card">
    <div>
      <h2>Comment ça fonctionne ?</h2>
      <div class="block__home__button__choice">
        <button class="home__button__choice home__button__choice-padding" @click="getCustomer()">
          <i class="fas fa-users"></i>
          <span>Je suis <br/> Intervenant <br/> Bénéficiaire</span>
        </button>
        <button class="home__button__choice" @click="getEnterprise()">
          <i class="fas fa-building"></i>
          <span>Je suis une<br/> Structure <br/> Professionnelle</span>
        </button>
      </div>
      <div class="center" v-if="customer">
        <div class="number">1</div>
        <p>Je m’inscris sur la plateforme</p>
        <div class="number">2</div>
        <p>Je poste une annonce ou je réponds à une annonce </p>
        <div class="number">3</div>
        <p>Je trouve mon intervenant mon bénéficiaire ou ma structure professionnelle </p>
      </div>
      <div class="center" v-if="enterprise">
        <div class="number">1</div>
        <p>Je m’inscris sur la plateforme</p>
        <div class="number">2</div>
        <p>Je m'abonne dans l'onglet mon compte (l'abonnement est obligatoire pour toute structure professionnelle)</p>
        <div class="number">3</div>
        <p>Je contacte mon intervenant/bénéficiaire</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondCard',
  data() {
    return {
      customer: true,
      enterprise: false,
    }
  },
  methods: {
    getCustomer(){
      this.customer = true;
      this.enterprise = false;
    },
    getEnterprise(){
      this.customer = false;
      this.enterprise = true;
    }
  }
}
</script>


<style scoped>
.home__button__choice-padding{
  padding: 1.5rem 2.3rem;
}
</style>
