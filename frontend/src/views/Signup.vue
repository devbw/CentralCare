<template>
  <div class="main__container">
    <h1>CentralCare</h1>
    <h2>Inscription</h2>
    <div>
      <div class="main__container__input">
        <input v-model="firstname" class="input" type='text' name="firstname" id="firstname" placeholder="Prénom" required minlength="2">
      </div>

      <div class="main__container__input">
        <input v-model="lastname" class="input" type='text' name="lastname" id="lastname" placeholder="Nom" required minlength="2">
      </div>

      <div class="main__container__input">
        <input v-model="email" class="input" type='email' name="email" id="email" placeholder="E-mail" required>
      </div>

      <div class="main__container__input">
        <input v-model="password" class="input" type='password' name="password" id="password" placeholder="Mot de passe" required minlength="8">
      </div>

      <div>
        <button @click="send()" class="button__form" type="button">
          <i class="fas fa-plus"></i>
          M'inscrire
        </button>
      </div>
      <div>
        <p>En m’inscrivant j’accepte les CGU et les mentions légales. <br>
              J’accepte que mes données soient utilisées dans le strict cadre d’utilisation de cette plateforme.
        </p>
        <span>Déjà inscrit ? <br>
            Connectez-vous en cliquant ici
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signup',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    send() {
      axios.post('http://localhost:3000/api/user/signup', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        })
        .then( () => {
          this.$router.push("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.main__container{
  height: 100vh;
  width: 100%;
  padding-bottom: 5rem;
}
input{
  border: none;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-bottom: 1rem;
  width: 70%;
  max-width: 300px;
}
input:invalid {
  border: 1px solid red;
}
input:valid{
  border: 1px solid rgb(57, 216, 57);
}
.button__form{
  width: 60%;
  max-width: 334px;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  background: #FFF;
  color: var(--first-color-darker);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.fas{
  margin-right: .5rem;
}
p{
  color: var(--first-color-darker);
}
span{
  color: #FFF;
}
</style>