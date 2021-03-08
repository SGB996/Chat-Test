<template>
  <div class="search-bar">
    <input v-model="searchText"
      type="text"
      class="form-control"
      id="searchBar"
      placeholder="Search chat..."
      @change="search"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    search() {
      this.$store.dispatch('searchChat', this.searchText)
    }
  },
};
</script>

<style>
</style>