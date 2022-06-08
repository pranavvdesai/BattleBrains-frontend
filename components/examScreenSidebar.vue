<template>
  <div
    class="h-screen fixed top-0 hidden lg:block lg:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-dark-300 lg:w-[21%] w-1/4 z-10 py-4 lg:px-4 xl:px-8 2xl:px-12 transition-all duration-300"
  >
      <div class="flex mt-4 align-middle">
        <leftArrowIcon :color="'#9898B3'" :size="14" />
        <p class="ml-5 text-sm text-dark-500">back</p>
      </div>
      <h1
        class="text-white xl:text-3xl lg:text-2xl md:text-xl font-extrabold mt-10 font-mont"
      >
        Why Web3?
      </h1>
      <div class="flex flex-col lg:flex-row mt-4">
        <h2 class="text-blue-300 mr-2 text-sm font-josefin pb-1 lg:pb-0">
          INTRODUCTION
        </h2>
        <h2 class="text-pink text-sm font-josefin">BLOCKCHAIN</h2>
      </div>

      <div
        class="grid grid-cols-4 text-white mt-5 text-center place-items-center gap-4"
      >
        <span class="h-12 w-12 py-3 bg-dark-100 border-2 border-[#1e90ff]">
          1
        </span>
        <span class="h-12 w-12 py-3 bg-dark-100 border-2 border-[#1e90ff]">
          2
        </span>
        <span class="h-12 w-12 py-3 bg-dark-100 border-2 border-[#1e90ff]">
          3
        </span>
        <span class="h-12 w-12 py-3 bg-dark-100"> 4 </span>
        <span class="h-12 w-12 py-3 bg-dark-100"> 5 </span>
        <span class="h-12 w-12 py-3 bg-dark-100"> 6 </span>
        <span class="h-12 w-12 py-3 bg-dark-100"> 7 </span>
      </div>
  </div>
</template>

<script>
import leftArrowIcon from "./icons/leftArrowIcon";

export default {
  name: "leftsidebar",
  components: {
    leftArrowIcon,
  },
};
</script>
