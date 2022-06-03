<template>
  <div
    :class="[ position ]"
    class=" h-screen fixed top-0 lg:right-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-dark-300 lg:w-[20%] md:w-1/4 w-3/4 z-10 py-4 px-6 transition-all duration-300"
  >
    <div class="flex justify-between items-center lg:justify-center">
      <h1 class="text-center my-6 text-light-300 text-xl font-mont">Your Peers</h1>
      <img
        @click="toggle"
        src="@/assets/images/close.svg"
        alt="close"
        class="w-3 h-3 mt-1 lg:hidden"
      >
    </div>
    <div class="flex justify-between mx-5 mt-2 rounded-lg shadow-lg max-w-sm p-1 px-2 items-center">
      <div class="">
        <img
          class=""
          src="@/assets/images/peerimg1.svg"
          alt=""
        />

      </div>
      <div class="p-2">
        <!-- <h5 class="text-gray-900 font-medium mb-2">Card title</h5> -->
        <span class="text-white">Pranav Desai</span>
          <p>@pranavvdesai</p>
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