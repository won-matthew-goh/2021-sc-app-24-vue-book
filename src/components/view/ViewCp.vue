<template>
  <section class="wrapper view-wrapper">
    <h3 class="title">도서 상세 내용</h3>
    <InfoTxt :title="`제목`" :content="GET_BOOK.title" :styled="styled" />
    <InfoTxt :title="`저자`" :content="GET_BOOK.writer" :styled="styled" />
    <InfoTxt :title="`발행일`" :content="GET_BOOK.createdAt" :styled="styled" />
    <InfoTxt :title="`상태`" :content="GET_BOOK.status" :styled="styled" />
    <InfoTxt :title="`내용`" :content="GET_BOOK.content" :styled="styled" />
    <InfoImg
      :title="`표지`"
      :content="VUE_APP_EXPRESS + '/' + GET_BOOK.cover"
      :styled="styled"
      v-show="GET_BOOK.cover"
    />
    <div v-if="GET_BOOK.isImg">
      <InfoImg
        :title="`첨부파일`"
        :content="VUE_APP_EXPRESS + '/' + GET_BOOK.upfile"
        :styled="styled"
      />
    </div>
    <div v-else>
      <InfoTxt
        :title="`첨부파일`"
        :content="GET_BOOK.upfile"
        :styled="styled"
      />
    </div>
  </section>
</template>

<script>
const { VUE_APP_EXPRESS } = process.env;
import { mapGetters } from "vuex";
import InfoTxt from "../common/InfoTxtCp.vue"
import InfoImg from "../../components/common/InfoImgCp.vue"

export default {
  name: "ViewCp",
  components: { InfoTxt, InfoImg },
  data() {
    return {
      styled: { padding: "1em" },
      idx: null,
    };
  },
  computed: {
    ...mapGetters(["GET_BOOK"]),
  },
  created() {
    this.idx = this.$route.params.idx;
    this.$store.dispatch("ACT_BOOK", this.idx);
  },
};
</script>

<style lang="scss" scoped></style>
