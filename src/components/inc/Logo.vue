<template>
  <h1 class="logo">
    <router-link to="/">
      <i class="fa fa-book" />
      Vue 도서관리시스템
      <small>v 0.1</small>
    </router-link>
  </h1>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
h1.logo {
  font-size: 1em;
  margin-bottom: 0;
  @include flex;
  i {
    margin-right: 0.25em;
  }
  a {
    @include flex($v: center);
    padding: 0.75em;
  }
}
</style>
