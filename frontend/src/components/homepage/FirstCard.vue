<template>
  <div class="card">
    <div>
      <h2>Présentation</h2>
      <p>CentralCare met en relation les intervenants et bénéficiaires grâce à un système d’annonces gratuites.</p>
      <div class="block__home__button">
        <div class="home__button">
          <router-link tag="button" to="/select" class="home__button-text">M'INSCRIRE</router-link>
        </div>
        <div class="home__button">
          <router-link tag="button" to="/login" class="home__button-text">CONNEXION</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstCard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
