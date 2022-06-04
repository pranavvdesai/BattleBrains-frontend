<template>
  <div class="px-6 pb-6">
    <div class="flex mt-5">
      <h2 class="text-blue-300 mr-2 text-sm font-josefin">INTRODUCTION</h2>
      <h2 class="text-pink text-sm font-josefin">BLOCKCHAIN</h2>
    </div>
    <p class="mt-3 text-md text-dark-600 font-josefin">A blockchain is a digitally distributed, decentralized, public ledger that exists across a network...</p>
    <div class="flex items-center mt-3">
      <h1 class="text-dark-700 font-josefin mr-3">2/4 videos</h1>
      <div class="w-1/2 bg-white rounded-lg">
        <div class="bg-blue-300 w-1/2 h-3 rounded-lg"></div>
      </div>
    </div>
    <div class="flex items-center mt-3">
      <BoldTimeCircleIcon :size="16" :color="'#fff'" class="mr-2" />
      <p class="text-white font-josefin">66 mins</p>
    </div>
    <div class="flex items-center my-3">
      <BoldPaperIcon :size="16" :color="'#fff'" class="mr-2" />
      <p class="text-dark-700 font-josefin">5 references</p>
    </div>
    <button class="text-dark-700 font-josefin border-2 border-blue-100 px-3 py-1 rounded-md mt-1 ">Beginners</button>
  </div>
</template>

<script>
import BoldPaperIcon from "./icons/boldPaperIcon.vue";
import BoldTimeCircleIcon from "./icons/boldTimeCircleIcon.vue";
export default {
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
  components: { BoldPaperIcon, BoldTimeCircleIcon },
};
</script>
