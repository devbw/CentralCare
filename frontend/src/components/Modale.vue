<template>
  <div class="bloc-modale" v-if="display">
    <div @click="toggleModale" class="overlay" ></div>
    <div class="card modale">
      <h2>Êtes-vous sûr de vouloir supprimer ce post ?</h2>
      <div class="container_modale_button">
        <button type="button" class="modale_button button-red" @click="deletePost()">Supprimer</button>
        <button @click="toggleModale" type="button" class="modale_button">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/services/http'

export default {
  name: 'Modale',
  props: {
    display : {
        type: Boolean,
        required: true,
    },
    toggleModale : {
        type: Function,
        required: true,
    }
  },
  created() {
    this.getPostId();
  },
  methods: {
    deletePost() {
      http().delete(`/post/${this.getPostId()}`)
      .then(() => {
        this.$router.push("/offers");
      })
      .catch(error => console.log(error));
    },
    getPostId() {
        let postId = this.$route.params.id;
        return postId;
    },
  }
}
</script>

<style scoped>
.modale{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 500px;
  position: fixed;
}
.bloc-modale{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_modale_button{
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.modale_button{
  background-color: var(--first-color-darker);
  border:none;
  border-radius: 10px;
  color:white;
  font-size: 1rem;
  margin: .5rem .5rem .5rem 0;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: .5s;
}
.modale_button:hover{
  background-color: var(--first-color);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.button-red{
  background : var(--alert);
}
</style>