<template>
  <section>
    <section v-if="energyUse" class="pl-4 pr-4">
      <filterTable @setFilter="setFilter">dd</filterTable>
      <v-data-table
        class="pl-1 pr-1 indigo lighten-5"
        :headers="headers"
        :items="energyUse"
        :search="search"
        :items-per-page="7"
        :loading-text="'$vuetify.dataIterator.loadingText'"
      >
      </v-data-table>
    </section>

    <section class="loading" v-else>Loading...</section>
  </section>
</template>

<script>
import filterTable from "./filterTable.vue";
export default {
  name: "energyTable",
  props: ["energyUse"],
  components: {
    filterTable,
  },
  data: () => ({
    headers: [
      { text: "Year", value: "year" },
      { text: "Item", value: "item" },
      { text: "Element", value: "element" },
      { text: "Value", value: "value" },
      { text: "Unit", value: "unit" },
      { text: "Area Code", value: "area_code" },
      { text: "Area", value: "area" },
    ],
    search: "",
  }),
  async created() {
  },
  methods: {
    setFilter(search) {
      this.search = search;
    },
  },
};
</script>
