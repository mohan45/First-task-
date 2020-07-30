<template>
  <v-app>
    <v-app-bar
      app
      class="color"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/logo.jpeg"
          transition="scale-transition"
          width="40"
        />
        <div class="heading">FetchData</div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <FetchData/>
    </v-main>
  </v-app>
</template>

<script>
import FetchData from './components/FetchData';

export default {
  name: 'App',

  components: {
    FetchData,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
.color{
  background: #9958AE;
}
.heading {
  color:#9958AE;
  font-size: 24px;
  font-weight:bold;
}
</style>