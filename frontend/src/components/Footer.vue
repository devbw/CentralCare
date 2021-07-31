<template>
  <div>
    <div class="footer__container" :class="[opened ? none : '']">
      <div class="footer__actions">
        <span>CentralCare</span>
      </div>
      <div class="footer__actions">
        <span @click="openMenu()">Menu</span>
      </div>
    </div>
    <div :class="[opened ? isOpen : isClose]">
      <div class="quit">
        <i class="fas fa-times" @click="closeMenu()"></i>
      </div>
      <div class="footer__menu__icons__block">
        <div class="footer__menu__icons">
          <router-link tag="div" :to="`/offers`" class="block__icon">
            <i class="fas fa-home"></i>
            <span>Annonces</span>
          </router-link>
          <router-link tag="div" :to="`/postoffer`" class="block__icon">
            <i class="fas fa-plus"></i>
            <span>Poster</span>
          </router-link>
          <div class="block__icon">
            <i class="fas fa-newspaper"></i>
            Ressources
          </div>
        </div>
        <div class="footer__menu__icons">
          <router-link tag="div" :to="`/account`" class="block__icon">
            <i class="fas fa-user"></i>
            <span>Compte</span>
          </router-link>
          <div class="block__icon">
            <i class="fas fa-address-book"></i>
            Annuaire
          </div>
          <div class="block__icon">
            <i class="fas fa-question"></i>
            FAQ
          </div>
        </div>
        <div class="footer__menu__icons">
          <div class="block__icon">
            <i class="fas fa-users-cog"></i>
            Assistance
          </div>
          <div class="block__icon">
            <i class="fas fa-comment-dots"></i>
            Messagerie
          </div>
          <div class="block__icon" @click="disconnect()">
            <i class="fas fa-door-open"></i>
            Déconnexion
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return{
      opened: false,
      closed: true,
      isOpen: 'footer__menu',
      isClose: 'menu-off',
      none: 'displayNone',
    }
  },
  methods: {
    openMenu() {
      this.opened = true;
      this.closed = false;
    },
    closeMenu() {
      this.opened = false;
      this.closed = true;
    },
    disconnect() {
      localStorage.removeItem('token');
      this.$router.push("/login");
    }
  },
}
</script>

<style scoped>
span{
  color: #000;
}
.footer__container {
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: .8rem 0;
  border-radius: 10px 10px 0 0;
  transition: .5s;
}
.footer__actions{
  padding: 0 .5rem;
  cursor: pointer;
}
.footer__actions:hover{
  color: var(--first-color-darker);
}
.footer__menu{
  background-color: #FFF;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: .8rem 0;
  border-radius: 10px 10px 0 0;
  transition: .5s;
}
.menu-off{
  width: 100%;
  position: fixed;
  bottom: -100%;
  left: 0;
  padding: .8rem 0;
  border-radius: 10px 10px 0 0;
  transition: 3s;
}
.quit{
  width: 100%;
  text-align: right;
}
.fa-times{
  padding: 0 .7rem 0 0;
  cursor: pointer;
}
.footer__menu__icons__block{
  display: flex;
  justify-content: space-around;
}
.footer__menu__icons{
  display: flex;
  flex-direction: column;
}
.block__icon{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .7rem .8rem;
  cursor: pointer;
  text-decoration: none;
}
.fas{
  color: var(--first-color);
  margin-bottom: .4rem;
}
.displayNone{
  display: none;
  transition: .5s;
}
</style>