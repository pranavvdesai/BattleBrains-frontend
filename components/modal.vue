<template>
  <div class="px-4 pb-4">
    <div class="flex mt-5">
      <h2 class="text-blue-normal mr-2 text-sm font-josefin">INTRODUCTION</h2>
      <h2 class="text-pink text-sm font-josefin">BLOCKCHAIN</h2>
    </div>
    <p class="mt-1 text-base text-gray font-josefin">
      A blockchain is a digitally distributed, decentralized, public ledger that
      exists across a network...
    </p>
    <div class="flex items-center mt-2">
      <h1 class="text-white mr-3">2/4 videos</h1>
      <div class="w-1/2 bg-white rounded-lg">
        <div class="bg-blue-normal w-1/2 h-3 rounded-lg"></div>
      </div>
    </div>
    <div class="flex items-center my-2">
      <BoldTimeCircleIcon :size="20" :color="'#fff'" class="mr-2" />
      <p class="text-white font-josefin">66 mins</p>
    </div>
    <div class="flex items-center my-2">
      <BoldPaperIcon :size="20" :color="'#fff'" class="mr-2" />
      <p class="text-white font-josefin">5 references</p>
    </div>
    <button
      class="text-white font-josefin border-2 border-blue-border px-3 py-1 rounded-md mt-1"
    >
      Begginers
    </button>
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
