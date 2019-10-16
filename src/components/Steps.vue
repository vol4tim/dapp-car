<template>
  <section v-if="status >= 2">
    <div class="form-item d-table" :class="{disabled: status < 2}">
      <div class="d-table--cell align-vertical">
        <div
          class="m-r-15"
          :class="{'i-check': status >= 4, 'green': status >= 4, 'loader-ring': status == 2 || status == 3, 'i-stop': status < 2}"
        ></div>
      </div>
      <div class="d-table--cell align-vertical">Message broadcast</div>
    </div>
    <div class="form-item d-table" :class="{disabled: status < 4}">
      <div class="d-table--cell align-vertical">
        <div
          class="m-r-15"
          :class="{'i-check': status >= 4, 'green': status >= 4, 'i-stop': status < 4}"
        ></div>
      </div>
      <div class="d-table--cell align-vertical">Service responded to demand</div>
    </div>
    <div class="form-item d-table" :class="{disabled: status < 4}">
      <div class="d-table--cell align-vertical">
        <div
          class="m-r-15"
          :class="{'i-check': status >= 6, 'green': status >= 6, 'loader-ring': status == 4 || status == 5, 'i-stop': status < 4}"
        ></div>
      </div>
      <div class="d-table--cell align-vertical">
        A smart contract has been created, we are waiting for the robot to execute the service.
        <a
          v-if="status >= 6"
          :href="liability | urlExplorer"
          target="_blank"
        >View contact.</a>
      </div>
    </div>
    <div class="form-item d-table" :class="{disabled: status < 6}">
      <div class="d-table--cell align-vertical">
        <div
          class="m-r-15"
          :class="{'i-check': status == 8, 'green': status == 8, 'loader-ring': status == 6 || status == 7, 'i-stop': status < 6}"
        ></div>
      </div>
      <div class="d-table--cell align-vertical">Smart contract is executed!</div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["status", "liability"]
};
</script>
