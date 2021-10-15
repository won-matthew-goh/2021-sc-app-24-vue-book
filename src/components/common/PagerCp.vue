<template>
  <ul class="pager-wrap">
    <a :href="`/list/${firstPage}`" class="pager fa fa-step-backward"></a>
    <a :href="`/list/${prevPager}`" class="pager fa fa-backward"></a>
    <a :href="`/list/${prevPage}`" class="pager fa fa-caret-left"></a>
    <a
      v-for="v in pageArr"
      :href="`/list/${v}`"
      :key="v"
      :class="`pager ${page === v ? 'active' : ''}`"
    >
      {{ v }}
    </a>
    <a :href="`/list/${nextPage}`" class="pager fa fa-caret-right"></a>
    <a :href="`/list/${nextPager}`" class="pager fa fa-forward"></a>
    <a :href="`/list/${lastPage}`" class="pager fa fa-step-forward"></a>
  </ul>
</template>

<script>
export default {
  name: "PagerCp",
  props: ["pager"],
  data() {
    return {
      firstPage: 1,
      prevPager: 1,
      prevPage: 1,
      nextPage: 1,
      nextPager: 1,
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
        this.nextPage = v.nextPage;
        this.nextPager = v.nextPager;
        this.lastPage = v.totalPage;
        this.pageArr = [];
        this.page = v.page;
        for (let i = v.startPage; i <= v.endPage; i++) {
          this.pageArr.push(i);
        }
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
    &.active {
      background-color: $grey-color;
      color: $light-color;
    }
  }
}
</style>
