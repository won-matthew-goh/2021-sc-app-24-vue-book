import { apiBook, apiBooks } from "@/api";

const ACT_BOOKS = async ({ commit }, options) => {
  try {
    const { page = 1, listCnt = 5, pagerCnt = 3 } = options;
    const { data } = await apiBooks(page, { listCnt, pagerCnt });
    commit("MUT_BOOKS", data);
  } catch (err) {
    console.log(err);
    commit("MUT_BOOKS", null);
  }
};

const ACT_BOOK = async ({ commit }, idx) => {
  try {
    const { data } = await apiBook(idx);
    commit("MUT_BOOK", data);
  } catch (err) {
    console.log(err);
    commit("MUT_BOOKS", null);
  }
};

const ACT_LOADING = async ({ commit }, toggle) => {
  commit("MUT_LOADING", toggle);
};

export default { ACT_BOOKS, ACT_BOOK, ACT_LOADING };
