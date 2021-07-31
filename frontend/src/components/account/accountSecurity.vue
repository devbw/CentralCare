<template>
  <div class="block__container">
    <div class="card__container">
      <div class="card fade-in">
        <div class="card__title">
          <i class="fas fa-shield-alt"></i>
          <h2>Sécurité</h2>
        </div>
        <div class="card__infos">
          <p>Il est recommandé de changer son mot de passe régulièrement afin de garder une sécurité suffisante !</p>
        </div>
        <div class="card__button">
          <p>Modifier mon mot de passe</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'accountSecurity',
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
}
h2{
  margin: 0;
  font-size: 1.5rem;
}
p{
  margin: 0;
}
.card__title{
  display: flex;
  align-items: flex-start;
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
  margin: 1rem 0 .5rem 0;
  color: #FFF;
  transition: .5s;
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>