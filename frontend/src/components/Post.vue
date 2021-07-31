<template>
  <div class="card__container">
    <div class="card">
      <h4>Je recherche</h4>
      <div>
        <multiselect
          v-model="searchValue"
          :options="searchOptions"
          :searchable="false"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Vous recherchez"
        >
        </multiselect>
      </div>
      <h4>Localisation</h4>
      <div>
        <multiselect
          @search-change="getCity"
          v-model="city"
          placeholder="Chercher une ville..."
          selectLabel="Selectionner"
          label="nom"
          track-by="nom"
          :options="cities"
          :loading="loading"
          :close-on-select="true"
          :internal-search="false"
        >
          <template #noOptions>
            La liste est vide
            <i class="fas fa-robot"></i>
          </template>
          <template #noResult>Aucun résultat</template>
        </multiselect>
      </div>
      <h4>Ma profession</h4>
      <div>
        <input
          type="text"
          placeholder="Votre profession"
          required
          minlength="2"
          v-model="job"
          class="inputJob"
        />
      </div>
      <h4>Mon tarif</h4>
      <div>
        <input type="range" max="50" min="8" v-model="price" />
        <span class="input__price">{{ price }}€/h</span>
      </div>
      <h4>Votre offre / demande :</h4>
      <div>
        <textarea
          v-model="post_content"
          placeholder="Décrivez votre proposition et présentez-vous en quelques lignes"
        ></textarea>
      </div>
      <div class="card__button" @click="postOffer()">
        <i class="fab fa-telegram-plane"></i>
        Poster
      </div>
    </div>
  </div>
</template>

<script>
import selectCity from "@/services/selectCity";
import http from "@/services/http";
import Multiselect from "vue-multiselect";
import { diff } from "@/utils/stringUtils";

export default {
  name: "Post",
  components: {
    Multiselect,
  },
  data() {
    return {
      cities: [],
      searchValue: "",
      searchOptions: [
        "Intervenant",
        "Bénéficiaire",
        "Structure Professionnelle",
      ],
      price: "",
      city: {},
      job: "",
      post_content: "",
      valueCity: "",
      loading: false,
      oldCitySearch: "",
    };
  },
  methods: {
    getDiffString(search) {
      const isSearchLengthInferior = this.oldCitySearch.length > search.length;

      if (isSearchLengthInferior) {
        return diff(this.oldCitySearch, search);
      }

      return diff(search, this.oldCitySearch);
    },
    getCity(search) {
      const diffString = this.getDiffString(search);

      if (diffString && diffString.length >= 2) {
        this.oldCitySearch = search;
        this.loading = true;
        const params = {
          fields: "nom,code",
          limit: 15,
          nom: search,
        };

        selectCity()
          .get("/communes", { params })
          .then((response) => response.data)
          .then((cities) => {
            this.cities = cities;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    postOffer() {
      http()
        .post("/post/", {
          search: this.searchValue,
          price: this.price,
          city: this.city.nom,
          job: this.job,
          post_content: this.post_content,
        })
        .then(() => {
          this.$router.push("/offers");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
h4 {
  color: var(--first-color-darker);
  margin-bottom: 0.5rem;
}
.card__container {
  display: flex;
  justify-content: center;
}
.inputJob {
  min-width: 150px;
  width: 97%;
  height: 40px;
  border: 1px rgba(128, 128, 128, 0.623) solid;
  border-radius: 5px;
  padding: 0 0 0 0.5rem;
  color: var(--first-color-darker);
  font-size: 1rem;
}
textarea {
  min-width: 200px;
  width: 97%;
  border-radius: 10px;
  min-height: 90px;
  font-family: "Montserrat";
  font-weight: 600;
  color: var(--first-color-darker);
  padding: 0.5rem 0.4rem;
}
.card {
  width: 500px;
  margin-bottom: 3rem;
}
.card__button {
  background: var(--first-color);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  margin: 1rem 0;
  color: #fff;
  transition: 0.5s;
  display: flex;
  align-items: center;
  text-decoration: none;
  max-width: 150px;
  cursor: pointer;
}
.card__button:hover {
  background: var(--first-color-darker);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.fab {
  font-size: 1.3rem;
  margin-right: 0.5rem;
}

input[type="range"] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  margin-bottom: 1rem;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type="range"]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid var(--first-color-darker);
  height: 36px;
  width: 16px;
  border-radius: 10px;
  background: var(--first-color-darker);
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); /* Add cool effects to your sliders! */
}

/* All the same stuff for Firefox */
input[type="range"]::-moz-range-thumb {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 1px solid var(--first-color-darker);
  height: 16px;
  width: 16px;
  border-radius: 3px;
  background: var(--first-color-darker);
  cursor: pointer;
}

/* All the same stuff for IE */
input[type="range"]::-ms-thumb {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 1px solid var(--first-color-darker);
  height: 16px;
  width: 16px;
  border-radius: 3px;
  background: var(--first-color-darker);
  cursor: pointer;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: var(--first-color);
  border-radius: 10px;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: var(--first-color);
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: var(--first-color);
  border-radius: 10px;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: var(--first-color);
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
input[type="range"]:focus::-ms-fill-lower {
  background: var(--first-color);
}
input[type="range"]::-ms-fill-upper {
  background: var(--first-color);
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
input[type="range"]:focus::-ms-fill-upper {
  background: var(--first-color);
}
.input__price {
  color: var(--first-color-darker);
  font-weight: 600;
}
.inputJob:invalid {
  border: 1px solid red;
}
.inputJob:valid {
  border: 1px solid var(--first-color);
}
</style>
