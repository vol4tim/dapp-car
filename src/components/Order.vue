<template>
  <button
    class="container-full btn-big"
    :disabled="
      demand &&
        demand.status != statuses.EMPTY &&
        demand.status != statuses.RESULT
    "
    @click="submit"
  >
    {{ $t("offsettingcommon.order") }}
  </button>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["submit", "onDemand"],
  data() {
    return {
      id: 0
    };
  },
  computed: {
    ...mapState("sender", ["statuses"]),
    demand() {
      return this.$store.getters["sender/demandById"](this.id);
    }
  },
  methods: {
    order(msg) {
      this.$robonomics.web3.eth.getBlock("latest", (e, r) => {
        if (e) {
          return;
        }
        const demand = {
          ...msg,
          deadline: r.number + 1000
        };
        this.$store
          .dispatch("sender/send", { demand, timeout: false })
          .then(id => {
            this.id = id;
            this.onDemand(this.id);
          });
      });
    }
  }
};
</script>
