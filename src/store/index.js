import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import sender from "./modules/sender";

Vue.use(Vuex);

const debug = false;

export default new Vuex.Store({
  modules: {
    sender
  },
  strict: true, // debug,
  plugins: debug ? [createLogger()] : []
});
