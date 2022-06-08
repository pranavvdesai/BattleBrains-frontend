<template>
  <div
    class="h-screen fixed top-0 hidden lg:block lg:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-dark-300 lg:w-[20%] w-1/4 z-10 py-4 px-4 transition-all duration-300">
    <div class="">
      <div class="flex mt-4 align-middle">
        <leftArrowIcon :color="'#9898B3'" :size="14" />
        <p class="ml-5 text-sm text-dark-500 font-josefin">back</p>
      </div>
      <h1 class="text-white xl:text-3xl lg:text-2xl md:text-xl font-extrabold mt-10 font-mont">Why Web3?</h1>
      <div class="flex flex-col lg:flex-row mt-4 font-josefin text-sm">
        <h2 class="text-blue-300 mr-2 pb-1 lg:pb-0">INTRODUCTION</h2>
        <h2 class="text-pink">BLOCKCHAIN</h2>
      </div>
      <p class="mt-8 text-md text-light-300 font-josefin">
        A blockchain is a digitally distributed, decentralized, public ledger
        that exists across a network...
      </p>
      <div class="flex items-center">
        <h1 class="text-white my-6 mr-3 font-josefin">2/4 videos</h1>
        <div class="w-1/2 bg-white rounded-lg">
          <div class="bg-gradient-to-r from-blue-100 to-blue-300 w-1/2 h-3 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 mb-10 w-4/5 self-center ml-3">
      <div class="flex border border-dark-500 rounded-md justify-between p-4">
        <p class="text-light-300 font-mont text-base">Test Yourself</p>
        <PaperIcon :size="16" :color="'#9898B3'" />
      </div>
    </div>
  </div>
</template>

<script>
import leftArrowIcon from "./icons/leftArrowIcon";
import PaperIcon from "./icons/paperIcon";

export default {
  name: "leftsidebar",
  components: {
    leftArrowIcon,
    PaperIcon,
  },
};
</script>
