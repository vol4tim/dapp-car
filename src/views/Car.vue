<template>
  <Page>
    <section class="section-light section-centered">
      <h2>Car</h2>
      <Form ref="form" :onChange="onChange" :onSubmit="onSubmit" />
      <Approve
        v-if="cost > 0"
        :address="token"
        :cost="cost"
        :onFetch="onAllowance"
      />
      <Order
        ref="order"
        v-if="allowance >= cost && (!demand || demand.status < statuses.RESULT)"
        :submit="submit"
        :onDemand="onDemand"
      />
      <Steps
        v-if="demand"
        :status="demand.status"
        :liability="demand.liability"
      />
    </section>
  </Page>
</template>

<script>
import { mapState } from "vuex";
import Page from "@/components/Page";
import Form from "@/components/Form";
import Approve from "@/components/approve/Main";
import Steps from "@/components/Steps";
import Order from "@/components/Order";
import config from "~config";

export default {
  data() {
    return {
      model: config.ROBONOMICS.model,
      objective: config.ROBONOMICS.objective,
      token: "",
      cost: 0,
      allowance: 0,
      demandId: 0
    };
  },
  components: {
    Page,
    Form,
    Approve,
    Order,
    Steps
  },
  computed: {
    ...mapState("sender", ["statuses"]),
    demand() {
      return this.$store.getters["sender/demandById"](this.demandId);
    }
  },
  created() {
    this.token = this.$robonomics.xrt.address;
    this.$robonomics.onDemand(this.model, msg => {
      console.log("demand", msg);
    });
    // this.$robonomics.onOffer(this.model, msg => {
    //   console.log(msg);
    // });
  },
  methods: {
    submit() {
      this.$refs.form.submit();
    },
    onChange(fields) {
      this.cost = Number(fields.cost.value);
    },
    onSubmit(e, fields) {
      if (!e) {
        const demand = {
          model: this.model,
          objective: this.objective,
          token: this.token,
          cost: Number(fields.cost.value),
          lighthouse: this.$robonomics.lighthouse.address,
          validator: "0x0000000000000000000000000000000000000000",
          validatorFee: 0
        };
        this.$refs.order.order(demand);
      }
    },
    onAllowance({ allowance }) {
      this.allowance = Number(allowance);
    },
    onDemand(demandId) {
      this.demandId = demandId;
    }
  }
};
</script>
