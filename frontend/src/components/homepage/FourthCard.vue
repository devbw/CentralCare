<template>
  <div class="card">
    <div>
      <h2>Pour qui est elle destinée ?</h2>
      <p>Chez CentralCare nous pensons que trouver un travail devrait être gratuit tout comme trouver un intervenant</p>
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
  name: 'FourthCard',
}
</script>


<style scoped>

</style>
