<template>
  <div class="block__container">
    <div class="card__container">
      <div class="card fade-in">
        <div class="card__title">
          <i class="fas fa-user"></i>
          <h2>Mon Profil</h2>
        </div>
        <div class="card__infos">
          <p>Retrouvez ici toutes vos informations de profil !</p>
        </div>
        <div class="card__infos">
          <div class="infos">
            <h4>Nom :</h4>
            <span>{{ userInfo.lastname }}</span>
          </div>
          <div class="infos">
            <h4>Prénom :</h4>
            <span>{{ userInfo.firstname }}</span>
          </div>
          <div class="infos">
            <h4>Mail :</h4>
            <span>{{ userInfo.email }}</span>
          </div>
          <div class="infos">
            <h4>Téléphone :</h4>
            <span>{{ userInfo.phone }}</span>
          </div>
          <div class="infos">
            <h4>Profession :</h4>
            <span>{{ userInfo.job }}</span>
          </div>
          <div class="infos">
            <h4>Ville :</h4>
            <span>{{ userInfo.city }}</span>
          </div>
        </div>
        <div class="card__button">
          <p>Modifier mes informations</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import http from '@/services/http'
import decodeToken from '@/services/decode'

export default {
  name: 'accountInfos',
  data() {
    return {
      decoded: '',
      userInfo: [],
    }
  },
  created() {
    this.decode();
  },
  methods: {
    decode() {
        let userToken = localStorage.getItem('token');
        this.decoded = decodeToken(userToken);
        this.getOneUser();
    },
    getOneUser() {
        http().get(`/user/${this.decoded.userId}`)
        .then((response) => {
            this.userInfo = response.data[0];
        })
        .catch(error => console.log(error));
    },
  },
}
</script>

<style scoped>
.card__container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card{
  margin-right: 1rem;
  margin-left: 1rem;
  width: 99%;
  max-width: 300px;
  background-color: #FFF;
  margin-bottom: 0;
}
h2{
  margin: 0;
  font-size: 1.5rem;
}
h3{
  color: var(--first-color-darker);
  margin: .6rem 0;
}
h4{
  margin: 0;
  font-size: .8rem;
}
h5{
  margin-top: 0;
}
p{
  margin: 0;
}
.card__infos{
  margin-top: 1rem;
}
.card__title{
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.card__button__block{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card__button{
  background: var(--first-color);
  border-radius: 10px;
  padding: .7rem 1rem;
  margin: .5rem 0;
  color: #FFF;
  transition: .5s;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}
.card__button:hover{
  background: var(--first-color-darker);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.fas{
  font-size: 1.8rem;
  margin-right: .5rem;
  margin-bottom: .5rem;
  color: var(--first-color);
  text-align: left;
}
.infos{
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}
.infos > span {
  color: var(--first-color-darker);
  font-weight: 600;
  margin-left: .8rem;
  font-size: .9rem;
}
</style>