<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');


:root {
  --first-color: #22C2BA;
  --second-color: #1DC6DD;
  --first-color-darker: #15736E;
  --linear: linear-gradient(180deg, #22C2BA 0%, #1DC6DD 100%);
  --big-title-color: rgba(255, 255, 255, 0.7);
  --text-light-color: #FFF;
  --text-dark-color: #000;
  --alert: #ff514f;

  --margin-top: 2rem;
  --margin-top-title: 3rem;
  --margin-bottom-small: 1.2rem;
  --margin-bottom-big: 2.5rem;
  --margin-bottom-xl: 4.5rem;
  --padding-block: 1rem 0 2.5rem 0;
  --padding-element: 0 1.5rem 0 1.5rem;
  --padding-card: 1rem 0;
  --padding-top-extra: 2rem;
  --padding-bottom-extra: 2rem;
  --padding-button: 1rem;
  --margin-card: -25px;

  --title: 'Montserrat', sans-serif;
  --text: 'Open Sans', sans-serif;

  --font-weight-title: 300;
  --font-size-standard: 1.2rem;
  --font-size-small: 1rem;
  --font-size-title: 2.2rem;

}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--linear);
  padding: 1rem;
}
h1{
  margin: 0;
  color: var(--big-title-color);
  font-family: var(--title);
  font-size: 2.3rem;
  font-weight: 400;
}
h2{
  color:var(--first-color-darker);
  margin-top: .5rem;
  font-weight: 400;
  font-size: 1.8rem;
}
.center{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0;
}
.block__home__button{
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.home__button{
  min-width: 150px;
  max-width: 200px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  text-align: center;
  padding: .5rem 1rem;
  border-radius: 10px;
  margin: .5rem 1rem 1rem 0;
  background: var(--first-color-darker);
}
.home__button-text{
  text-decoration: none;
  color:#FFF;
}
.block__home__button__choice{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.home__button__choice{
  background-color: var(--first-color-darker);
  border: none;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home__button__choice > span{
  color: #FFF;
  font-size: 1.1rem;
}
.home__button__choice > .fas {
  color: #FFF;
  font-size: 1.8rem;
  margin-bottom: .5rem;
}
.home__button__choice:hover{
  background: var(--first-color);
}
.card{
  background: #FFF;
  max-width: 530px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-top: 2rem;
  transition: .5s;
}
.card:hover{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.block__container{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.block__container__info{
  width: 100%;
  text-align: left;
}
.number{
  font-size: 1.8rem;
  color: var(--first-color-darker);
}
/* ANIMATIONS */

.fade-in {
	-webkit-animation: fade-in 1.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in 1.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
