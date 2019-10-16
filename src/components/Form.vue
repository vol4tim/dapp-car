<template>
  <form>
    <section>
      <div class="form-item form-line-label" :class="{disabled: isDisabled}">
        <label for="inputdata-cost">
          Cost *
          <span v-if="form.fields.cost.error" class="input-msg">Check if data correct, please.</span>
        </label>
        <input
          :disabled="isDisabled"
          v-model="form.fields.cost.value"
          class="container-full"
          :class="{ error: form.fields.cost.error }"
          type="text"
          required
        />
      </div>
    </section>
  </form>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function
    },
    onChange: {
      type: Function
    },
    isDisabled: {
      default: false
    }
  },
  data() {
    return {
      form: {
        fields: {
          cost: {
            value: "0",
            rules: ["require"],
            error: false
          }
        },
        error: false
      }
    };
  },
  created() {
    this.onChange(this.form.fields);
  },
  updated() {
    this.onChange(this.form.fields);
  },
  methods: {
    validate() {
      this.form.error = false;
      for (let field in this.form.fields) {
        this.form.fields[field].error = false;
        this.form.fields[field].rules.forEach(rule => {
          if (rule === "require" && !this.form.fields[field].value) {
            this.form.fields[field].error = true;
            this.form.error = true;
          }
        });
      }
      return !this.form.error;
    },
    submit() {
      this.validate();
      if (this.onSubmit) {
        this.onSubmit(this.form.error, this.form.fields);
      }
    }
  }
};
</script>
