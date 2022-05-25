<template>
  <div class="p-4">
    <div class=" flex justify-between items-center h-full">
      <div class="flex items-center">
        <img
          src="@/assets/images/ArrowLeft.png"
          alt="Left Arrow"
          class="mr-4 w-4 h-4 mt-2"
        >
        <h1 class="text-white text-lg font-extrabold font-mont">
          Why Web3?
        </h1>
      </div>
      <div class="flex items-center">
        <img
          @click="toggle"
          src="@/assets/images/paper.png"
          alt="Paper"
          class="w-3 h-4 mt-1"
        >
      </div>
    </div>
    <div class="flex mt-7">
      <h2 class="text-blue-normal mr-2 text-sm font-josefin">INTRODUCTION</h2>
      <h2 class="text-pink text-sm font-josefin">BLOCKCHAIN</h2>
    </div>
    <p class="mt-1 text-base text-gray font-josefin">A blockchain is a digitally distributed, decentralized, public ledger that exists across a network...</p>
    <div class="flex">
      <h1 class="text-white mt-2">2/4 videos</h1>
      <div class="bg-white">
        <div class=" bg-blue-400 w-1/2">

        </div>
      </div>
    </div>
    <div class="flex items-center my-2">
      <img
        src="@/assets/images/boldtime.png"
        alt="Paper"
        class=" mr-2 "
      >
      <p class="text-white font-josefin">66 mins</p>
    </div>
    <div class="flex items-center my-2">
      <img
        src="@/assets/images/boldpaper.png"
        alt="Paper"
        class="w-3 h-4 mr-2 "
      >
      <p class="text-white font-josefin">5 references</p>
    </div>
    <button class="text-white font-josefin border-2 border-blue-border px-3 py-1 rounded-md mt-1 ">Begginers</button>
  </div>

</template>

<script>
export default {
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
};
</script>