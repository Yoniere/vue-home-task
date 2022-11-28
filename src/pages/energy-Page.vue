<template>
  <v-main class="indigo lighten-5">
    <energyTable v-bind:energyUse="this.getEnergyUse"> </energyTable>
  </v-main>
</template>

<script>
import energyTable from "../components/energyTable.vue";

export default {
  name: "energyPage",
  components: {
    energyTable,
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