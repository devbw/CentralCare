<template>
  <div class="main__container">
    <h1>CentralCare</h1>
    <h2>Inscription</h2>
    <div class="main__container__choice">
      <p>Je suis</p>
      <div>
        <router-link tag="button" to="/signup" class="main__container__choice__button padding">
          <i class="fas fa-users"></i>
          Intervenant <br> Bénéficiaire
        </router-link>
      </div>
      <p>Ou</p>
      <div>
        <router-link tag="button" to="/" class="main__container__choice__button">
          <i class="fas fa-building"></i>
          Structure <br> Professionnelle
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
}
</script>

<style scoped>
p{
  font-size: 1.7rem;
  color: #FFF;
}
.main__container{
  height: 100vh;
}
.main__container__choice{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.main__container__choice__button{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #FFF;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: .5s;
  text-decoration: none;
  color: var(--first-color-darker);
  font-size: 1.2rem;
}
.main__container__choice__button:hover{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.fas{
  font-size: 2rem;
  margin-bottom: 1rem;
}
.padding{
  padding: 1.5rem 2.4rem;
}
</style>