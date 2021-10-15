<template>
  <section class="wrapper list-wrapper">
    <TableCp />
  </section>
</template>

<script>
import TableCp from "./TableCp.vue";

export default {
  name: "PaginationCp",
  components: { TableCp },
  created() {
    console.log(this);
    this.$store.dispatch("ACT_BOOKS");
  },
};
</script>

<style lang="scss" scoped></style>
