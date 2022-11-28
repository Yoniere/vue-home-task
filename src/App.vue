<template>
  <v-app class="app">
    <headerVue></headerVue>
    <energyPageVue></energyPageVue>
    <footerVue></footerVue>
  </v-app>
</template>


<script>
import "./assets/style/app.scss";
import energyPageVue from "./pages/energy-Page.vue";
import footerVue from "./components/footer.vue";
import headerVue from "./components/header.vue";

export default {
  name: "App",

  components: {
    footerVue,
    energyPageVue,
    headerVue,
  },
};
</script>
