<template>
  <section class="wrapper list-wrapper">
    <TableCp :books="GET_BOOKS.books" />
    <PagerCp :pager="GET_BOOKS.pager" />
  </section>
</template>

<script>
import TableCp from "@/components/common/TableCp.vue";
import PagerCp from "@/components/common/PagerCp.vue";
import { mapGetters } from "vuex";

export default {
  name: "PaginationCp",
  components: { TableCp, PagerCp },
  computed: {
    ...mapGetters(["GET_BOOKS", "GET_PAGE"]),
  },
  created() {
    this.$store.dispatch("ACT_LOADING", true);
    this.$store.dispatch("ACT_BOOKS", { page: this.GET_PAGE });
  },
  updated() {
    this.$store.dispatch("ACT_LOADING", false);
  },
};
</script>

<style lang="scss" scoped></style>
