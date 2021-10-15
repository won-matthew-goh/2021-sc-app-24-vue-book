<template>
  <section class="wrapper list-wrapper">
    <TableCp />
  </section>
</template>

<script>
import TableCp from "../common/TableCp.vue";

export default {
  name: "PaginationCp",
  components: { TableCp },
  created() {
    this.$store.dispatch("ACT_BOOKS", 1);
    this.$store.dispatch("ACT_LOADING", true);
  },
};
</script>

<style lang="scss" scoped></style>
