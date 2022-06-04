<template>
  <div
    class="fixed top-0 togglebar p-3 overflow-auto"
    :class="`${active ? 'show' : ''}`"
  >
  <div @click="close" class="close">
      <LightCloseSquareIcon :size="25" :color="'#fff'" />
    </div>
    <div class="flex flex-row justify-between align-top mt-5">
      <div class="inner flex flex-row">
        <h3>👋</h3>
        <div class="inner flex flex-col ml-2">
          <h3 class="text-md text-dark-700 font-mont"><b>Hi Dev, Good Evening!</b></h3>
          <p class="text-xs text-dark-500 font-josefin">Learn Web3, the Fun way</p>
        </div>
      </div>
    </div>
    <!--Bottom XP div-->
     <div class="xp_info flex flex-col items-start mt-24 border-2 border-white px-4 py-6 rounded-md mx-5">
        <div class="flex flex-row">
          <h4 class="name mr-2"><b>Novice</b></h4>
          <p class="xp mx-1">1400/2000 XPs</p>
        </div>
          <div class="bg-white w-full h-3 items-center rounded-lg mt-2">
                <div
                  class="bg-gradient-to-r from-[#00BCD4] to-[#1e90ff] ... w-3/4 h-3 items-center rounded-lg "
                ></div>
          </div>
      </div>
  </div>
</template>

<script>
import LightCloseSquareIcon from './icons/lightCloseSquareIcon.vue';

export default {

  props: {
    toggle: {
      type: Function,
    },
    active: {
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("toggle");
    },
  },
  components : {
    LightCloseSquareIcon
  }
};
</script>

<style>
.togglebar {
  height: 100%;
  width: 80%;
  background-color: #262633;
  box-shadow: 5px 0px 15px #14141A;
  position: fixed;
  left: -90%;
  transition: 0.5s ease-in-out;
  z-index: 100;
}
.show {
  left: 0%;
}
.close{
  left: 91%;
  top: 1%;
  position: relative;
}
</style>
