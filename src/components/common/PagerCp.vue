<template>
  <ul class="pager-wrap">
    <li @click="changePage" :data-page="firstPage" class="pager">
      <i class="fa fa-step-backward"></i>
    </li>
    <li @click="changePage" :data-page="prevPager" class="pager">
      <i class="fa fa-backward"></i>
    </li>
    <li @click="changePage" :data-page="prevPage" class="pager">
      <i class="fa fa-caret-left"></i>
    </li>
    <li
      v-for="v in pageArr"
      :data-page="v"
      :key="v"
      :class="`pager ${page === v ? 'active' : ''}`"
      @click="changePage"
    >
      {{ v }}
    </li>
    <li @click="changePage" :data-page="nextPage" class="pager">
      <i class="fa fa-caret-right"></i>
    </li>
    <li @click="changePage" :data-page="nextPager" class="pager">
      <i class="fa fa-forward"></i>
    </li>
    <li @click="changePage" :data-page="lastPage" class="pager">
      <i class="fa fa-step-forward"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PagerCp",
  props: ["pager"],
  data() {
    return {
      prevPager: 1,
      prevPage: 1,
      nextPager: 1,
      nextPage: 1,
      firstPage: 1,
      lastPage: 1,
      pageArr: [],
      page: 1,
    };
  },
  watch: {
    pager: function (v) {
      if (v) {
        this.prevPager = v.prevPager;
        this.prevPage = v.prevPage;
        this.nextPager = v.nextPager;
        this.nextPage = v.nextPage;
        this.lastPage = v.totalPage;
        this.page = v.page;
        this.pageArr = [];
        for (let i = v.startPage; i <= v.endPage; i++) {
          this.pageArr.push(i);
        }
      }
    },
  },
  methods: {
    changePage(e) {
      const page = e.currentTarget.dataset["page"];
      this.$store.dispatch("ACT_PAGE", page);
      if (this.page != page) {
        this.$store.dispatch("ACT_LOADING", true);
        this.$store.dispatch("ACT_BOOKS", { page });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pager-wrap {
  margin: 2em auto;
  @include flex($h: center);
  .pager {
    padding: 0.525em 0.725em;
    /* border: 1px solid $grey-color; */
    margin-right: -1px;
    color: $grey-color;
    cursor: pointer;
    &.active {
      background-color: $grey-color;
      color: $light-color;
    }
  }
}
</style>
