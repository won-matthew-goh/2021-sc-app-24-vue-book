<template>
  <section class="wrapper list-wrapper">
    <TableCp :isPager="false" :books="books" />
    <div v-observe="changeVisible" />
  </section>
</template>

<script>
import TableCp from "@/components/common/TableCp";
import { mapGetters } from "vuex";

export default {
  name: "InfiniteCp",
  components: { TableCp },
  data() {
    return {
      page: 1,
      books: [],
      listCnt: 20,
    };
  },
  computed: {
    ...mapGetters(["GET_BOOKS"]),
    lastPage() {
      return this.GET_BOOKS.pager ? this.GET_BOOKS.pager.totalPage : 10000;
    }
  },
  watch: {
    GET_BOOKS: function (v) {
      this.books.push(...v.books);
    },
  },
  created() {
    this.$store.dispatch("ACT_LOADING", true);
    this.$store.dispatch("ACT_BOOKS", {
      page: this.page++,
      listCnt: this.listCnt,
    });
  },
  updated() {
    this.$store.dispatch("ACT_LOADING", false);
  },
  methods: {
    changeVisible(isVisible, entry) {
      console.log(isVisible, entry);
      if (isVisible && this.page <= this.lastPage) {
        this.$store.dispatch("ACT_LOADING", true);
        this.$store.dispatch("ACT_BOOKS", {
          page: this.page++,
          listCnt: this.listCnt,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

