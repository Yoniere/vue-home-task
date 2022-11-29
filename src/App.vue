<template>
  <v-app class="app">
    <energyPageVue></energyPageVue>
  </v-app>
</template>


<script>
import "./assets/style/app.scss";
import energyPageVue from "./pages/energy-Page.vue";
import footerVue from "./components/footer.vue";

export default {
  name: "App",

  components: {
    footerVue,
    energyPageVue,
  },
};
</script>
