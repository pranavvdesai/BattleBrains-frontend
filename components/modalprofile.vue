<template>
  <div class="px-4 pb-4">
    <div class="xl:mx-5 lg:mx-1">

      <div class="flex text-light-400 mt-4 justify-between items-center py-3">
        <p>Receive Newsletter</p>
        <Swit v-model="toggleValue1" />
      </div>
      <div class="flex text-light-400 py-2 items-center justify-between py-3">
        <p>Push Notifications</p>
        <Swit v-model="toggleValue2" />
      </div>
      <div class="flex text-light-400 items-center justify-between mb-5 py-3">
        <p>Public Profile</p>
        <Swit v-model="toggleValue3" />

      </div>
      <div class="flex border border-dark-500 mx-8 rounded-md justify-between p-3">
        <p class="text-light-300 font-mont">Logout</p>
        <img
          src="@/assets/images/logout.svg"
          alt="Paper"
          class="w-3 h-4 mt-1"
        >
      </div>
    </div>

  </div>
</template>

<script>
import BoldPaperIcon from "./icons/boldPaperIcon.vue";
import BoldTimeCircleIcon from "./icons/boldTimeCircleIcon.vue";
import Swit from "./swit.vue";
export default {
  data() {
    return {
      toggleValue1: false,
      toggleValue2: false,
      toggleValue3: false,
    };
  },
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
  components: { BoldPaperIcon, BoldTimeCircleIcon, Swit },
};
</script>
