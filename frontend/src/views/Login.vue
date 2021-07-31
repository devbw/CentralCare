<template>
  <div class="main__container">
    <h1>CentralCare</h1>
    <h2>Connexion</h2>
    <div>
      <div class="main__container__input">
        <input v-model="email" class="input" type='email' name="email" id="email" placeholder="E-mail" required>
      </div>

      <div class="main__container__input">
        <input v-model="password" class="input" type='password' name="password" id="password" placeholder="Mot de passe" required>
      </div>

      <div>
        <button @click="send()" type="button" class="button__form">
          <i class="fas fa-check"></i>
          Connexion
        </button>
      </div>
      <div>
        <span>Pas de compte ? <br>
            Inscrivez-vous en cliquant ici
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    send() {
      axios.post('http://localhost:3000/api/user/login', {
          email: this.email,
          password: this.password
        })
        .then( (response) => {
          let token = response.data.token;
          localStorage.setItem('token', token);
          this.$router.push("/offers");
        })
        .catch(function (err) {
          console.log(err.response);
        });
    }
  },
}
</script>

<style scoped>
.main__container{
  height: 100vh;
  width: 100%;
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
  width: 70%;
  max-width: 334px;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  background: #FFF;
  color: var(--first-color-darker);
  font-size: 1.1rem;
  margin-bottom: 1rem;
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