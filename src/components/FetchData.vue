<template>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(todo, i) in todos">
        <v-col
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="items.img"
                height="150px"
              >
                <v-card-title class="title white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left pl-5">User Id {{ todo.userId }}</p>

                    <div>
                      <p class="ma-0 body-1 font-weight-bold font-italic text-left pl-5">
                        Id {{ todo.id }}
                      </p>
                      <p class="caption font-weight-medium font-italic text-left px-5">
                        {{ todo.title }}
                      </p>
                    </div>

                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'FetchData',

    data: () => ({
      // results: [],
      items:{
        img: 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg',
      },
      transparent: 'rgba(255, 255, 255, 0)',
    }),
    created() {
      axios.get('https://jsonplaceholder.typicode.com/todos/').then(response => {
        this.$store.commit("updateData", response.data);
      })
    },
    computed: {
      todos() {
        return this.$store.getters.todos;
      }
    },
  }
</script>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}
.v-card .on-hover{
  cursor: pointer;
}
.v-card:not(.on-hover) {
  opacity: 0.6;  
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
