<template>
  <v-app class="app">
    <headerVue></headerVue>

    <v-main class="indigo lighten-5">
      <energyTable v-bind:energyUse="this.energyUse"> </energyTable>
    </v-main>

    <footerVue></footerVue>
  </v-app>
</template>


<script>
import energyTable from "./components/energyTable";
import "./assets/style/app.scss";
import headerVue from "./components/header.vue";
import footerVue from "./components/footer.vue";

export default {
  name: "App",

  components: {
    energyTable,
    headerVue,
    footerVue,
  },

  data: () => ({
    energyUse: null,
  }),
  async created() {
    await this.$store.dispatch({ type: "loadEnergyUse" });
    this.setEnergyUse();
    // this.energyUse = this.$store.getters.energyUse
    // console.log(this.energyUse)
  },
  methods: {
    setEnergyUse() {
      let energyUse = this.$store.getters.energyUse;
      energyUse = energyUse.records.map((energy) => energy.fields);
      this.energyUse = energyUse;
      // console.log(this.energyUse);
    },
  },
};
</script>
