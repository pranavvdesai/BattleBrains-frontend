<template>
  <div
    :class="[ position ]"
    class=" h-screen fixed top-0 md:right-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-dark-300 lg:w-[22%] md:w-1/4 w-3/4 z-10 py-4 px-6 transition-all duration-300"
  >
    <div class="flex justify-between items-center md:justify-center">
      <h1 class="text-center my-6 text-light-300 text-xl font-mont">Reference material [5]</h1>
      <img
        @click="toggle"
        src="@/assets/images/close.svg"
        alt="close"
        class="w-3 h-3 mt-1 md:hidden"
      >
    </div>
    <div class="flex justify-center mx-5 mt-2">
      <div class="rounded-lg shadow-lg bg-white max-w-sm p-1">
        <a href="#!">
          <img
            class="rounded-t-lg w-full"
            src="@/assets/images/sidebar1.png"
            alt=""
          />
        </a>
        <div class="p-2">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p class="text-gray-700 text-base mb-2">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["position"],
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
};
</script>