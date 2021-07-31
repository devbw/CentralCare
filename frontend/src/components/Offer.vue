<template>
  <div class="card__container">
    <div class="card fade-in">
      <div class="card__actions">
        <div>
          <h5> {{ convertDate(post.created) }} </h5>
        </div>
        <div>
          <i class="fas fa-exclamation-circle" @click="reportPost()"></i>
          <i class="fas fa-trash" @click="toggleModale()" v-if="isUserAdmin || (post.user_id === currentId)"></i>
        </div>
        <modale :display="display" :toggleModale="toggleModale"></modale>
      </div>
      <div>
        <h3>{{ post.username }}</h3>
        <h4> Je recherche : {{ post.search }}</h4>
        <h4> À : {{ post.city }}</h4>
        <h4>Mon métier : {{ post.job }}</h4>
        <h4>Tarif : {{ post.price }}€/h</h4>
        <p> {{ post.post_content }} </p>
      </div>
      <div class="card__button__block">
        <div class="card__button">
          <i class="fab fa-telegram-plane"></i>
          <span>Répondre</span>
        </div>
        <router-link tag="div" :to="`/offers`" class="card__button">
          <i class="fas fa-sync"></i>
          <span>Retour</span>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import http from '@/services/http'
import decodeToken from '@/services/decode'
import moment from 'moment';
import Modale from '@/components/Modale.vue'

export default {
  name: 'Offers',
  components: {
    Modale,
  },
  data() {
    return {
      post: [],
      postUser: '',
      decoded :'',
      admin: '',
      isUserAdmin: false,
      isCurrent : false,
      currentId : '',
      display: false,
    }
  },
  created() {
    this.getOnePost();
    this.decode();
  },
  methods: {
    getOnePost() {
      http().get(`/post/${this.getPostId()}`)
      .then( (response) => {
        this.post = response.data;
        this.postUser = this.post.user_id;
      })
      .catch( (error) => console.log(error))
    },
    getPostId() {
      let postId = this.$route.params.id;
      return postId;
    },
    convertDate(date) {
      return moment(date).startOf('day').fromNow();
    },
    deletePost(id) {
      http().delete(`post/${id}`)
      .then( () => {
        this.$router.push("/");
      })
      .catch( (error) => console.log(error));
    },
    reportPost() {
      http().put(`post/${this.getPostId()}`)
      .then(() => {
        this.$router.push("/offers");
      })
      .catch((error) => console.log(error))
    },
    decode() {
        let userToken = localStorage.getItem('token');
        this.decoded = decodeToken(userToken);
        this.getOneUser();
    },
    getOneUser() {
        http().get(`/user/${this.decoded.userId}`)
        .then((response) => {
            this.admin = response.data[0].user_admin;
            this.currentId = response.data[0].id;
            this.isAdmin();
            this.isCurrentUser();
        })
        .catch(error => console.log(error));
    },
    isCurrentUser() {
      if(this.postUser === this.currentId) {
        this.isCurrent = true;
      } else {
        this.isCurrent = false;
      }
    },
    isAdmin() {
        if(this.admin == 1) {
            this.isUserAdmin = true;
        }
        if(this.admin == 0) {
            this.isUserAdmin = false;
        }
    },
    toggleModale() {
      this.display = !this.display;
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
  max-width: 300px;
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
.card__actions{
  display: flex;
  justify-content: space-between;
}
.reload{
  max-width: 300px;
  text-align: center;
  margin: 1rem 0;
}
.fab, .fas{
  font-size: 1.3rem;
  margin-right: .5rem;
  cursor: pointer;
}
.fa-trash, .fa-exclamation-circle{
  color: var(--alert);
  font-size: 1rem;
  transition: .3s;
}
.fa-trash:hover{
  transform: scale(1.2);
}
.fa-exclamation-circle:hover{
  transform: scale(1.2);
}
</style>