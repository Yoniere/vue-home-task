<template>
  <section>
    <v-text-field
      v-model="search"
      @change="setFilter()"
      class="filter pl-0 pr-0 mt-4 rounded-1"
      dense
      filled
      label="Search"
    >
    </v-text-field>
  </section>
</template>


<script>
export default {
  name: "filterTable",
  data: () => ({
    search: "",
  }),
  methods: {
    setFilter() {
      this.$emit("setFilter", this.search);
    },
  },
};
</script>

<style>
</style>