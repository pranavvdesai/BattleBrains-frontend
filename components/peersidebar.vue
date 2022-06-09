<template>
  <div :class="[position]"
    class=" h-screen fixed top-0 lg:right-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-dark-300 lg:w-[20%] w-3/4 z-10 py-4 px-6 transition-all duration-300">
    <div class="flex justify-between items-center lg:justify-center">
      <h1 class="text-center my-6 text-dark-600 text-lg font-bold font-mont">Your Peers</h1>
      <img @click="toggle" src="@/assets/images/close.svg" alt="close" class="w-3 h-3 mt-1 lg:hidden">
    </div>
    <div v-for='data in peerArray' :key='data.username'>
      <div
        class="flex lg:flex-col xl:flex-row mt-2 rounded-xl hover:shadow-lg hover:shadow-dark-200 hover:shadow-[0_0_30px_5px] py-3 px-6 items-center">
        <div class="mr-5 lg:mr-0 xl:mr-5">
          <img class="" src="@/assets/images/peerimg1.svg" alt="" />
          <!-- <img class="" src="data.imgSrc" alt="" /> -->
        </div>
        <div class="text-center">
          <span class="text-dark-700 font-mont font-bold text-md">{{ data.name }}</span>
          <p class="text-dark-500 font-josefin text-md">{{ data.username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peerArray: [
        {
          name: 'Harshal Dave',
          username: '@harshaldave',
          imgSrc: 'https://dummyimage.com/400x400/e8e8e8/565656',
        },
        {
          name: 'Pranav Desai',
          username: '@pranavvdesai',
          imgSrc: 'https://dummyimage.com/400x400/e8e8e8/565656',
        }
      ]
    }
  },
  props: ["position"],
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
};
</script>
