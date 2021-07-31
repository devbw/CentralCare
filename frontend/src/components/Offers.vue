<template>
  <div class="block__container">
    <div class="card__container">
      <div class="card fade-in" v-for="(post, id) in posts" :key="id">
        <div>
          <h5> {{ convertDate(post.created) }} </h5>
          <h3>{{ post.username }}</h3>
          <h4> Je recherche : {{ post.search }}</h4>
          <h4> À : {{ post.city }}</h4>
          <h4>Mon métier : {{ post.job }}</h4>
          <p> {{ slice(post.post_content, 55) }}... </p>
        </div>
        <div class="card__button__block">
          <router-link tag="div" :to="`/single/${post.id}`" class="card__button">
            <i class="fas fa-plus"></i>
            <span>Voir plus</span>
          </router-link>
          <div class="card__button">
            <i class="fab fa-telegram-plane"></i>
            <span>Répondre</span>
          </div>

        </div>
      </div>
    </div>
    <!--<div class="reload card__button" @click="updatePost()">
      Voir plus
    </div>-->
  </div>
</template>


<script>
import http from '@/services/http'
import moment from 'moment';

export default {
  name: 'Offers',
  data() {
    return {
      posts: [],
    }
  },
  created() {
    this.updatePost();
  },
  methods: {
    updatePost() {
      http().get('/post/', {
        params: {
          offset: this.posts.length,
        },
      })
      .then(response => {
        this.posts = this.posts.concat(response.data);
      })
      .catch(error => console.log(error))
    },
    convertDate(date) {
      return moment(date).startOf('day').fromNow();
    },
    slice(chain, length) {
      if(chain.length > length) {
        return chain.slice(0, length);
      } else {
        return chain;
      }
    }
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
  max-width: 300px;
  background-color: #FFF;
}
h3{
  color: var(--first-color-darker);
  margin: .6rem 0;
}
h4{
  margin: .6rem 0;
  font-size: .8rem;
}
h5{
  margin-top: 0;
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
}
.card__button:hover{
  background: var(--first-color-darker);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.reload{
  max-width: 300px;
  text-align: center;
  margin: 1rem 0;
}
.fab, .fas{
  font-size: 1.3rem;
  margin-right: .5rem;
}
.block__container{
  padding-bottom: 5rem;
}
</style>