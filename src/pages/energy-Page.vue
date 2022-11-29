<template>
    <v-main class="indigo lighten-5">
      <headerVue></headerVue>
      <energyTable v-bind:energyUse="this.getEnergyUse"> </energyTable>
      <footerVue class="footer"></footerVue>
    </v-main>
</template>

<script>
import energyTable from "../components/energyTable.vue";
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
export default {
  name: "energyPage",
  components: {
    energyTable,
    headerVue,
    footerVue
  },
  data: () => ({
    energyUse: null,
  }),
   created() {
     this.$store.dispatch({ type: "loadEnergyUse" });
  },
  methods: {
  },
  computed: {
    getEnergyUse() {
      return this.$store.getters.energyUse;
    },
  },
};
</script>

<style>
</style>