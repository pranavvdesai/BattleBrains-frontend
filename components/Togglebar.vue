<template>
  <div
    class="fixed top-0 togglebar p-3 overflow-auto z-10"
    :class="`${active ? 'show' : ''}`"
  >
    <div @click="close">
      <LightCloseSquareIcon :size="25" :color="'#fff'" />
    </div>
    <div class="flex flex-row justify-between align-top mt-5">
      <div class="inner flex flex-row">
        <h3>👋</h3>
        <div class="inner flex flex-col ml-2">
          <h3 class="text-md text-dark-700 font-mont">
            <b>Hi Dev, Good Evening!</b>
          </h3>
          <p class="text-xs text-dark-500 font-josefin">
            Learn Web3, the Fun way
          </p>
        </div>
      </div>
    </div>
    <div class="xp_info flex flex-col items-center mt-12">
      <div class="img_border flex justify-center items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbpKeeGDLuC0SW1RvHziiFoQjVKIZo3EoOA&usqp=CAU"
          alt="profile"
          class="pr_img"
        />
      </div>
      <h4 class="font-bold text-md font-mont text-dark-700 mt-6">
        <b>Novice</b>
      </h4>
      <p class="font-josefin text-sm text-dark-600 mt-1">1400/2000 XPs</p>
    </div>
  </div>
</template>

<script>
import LightCloseSquareIcon from "./icons/lightCloseSquareIcon.vue";

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
  components: { LightCloseSquareIcon },
};
</script>

<style>
.togglebar {
  height: 100%;
  width: 80%;
  background-color: #262633;
  box-shadow: 5px 0px 15px #14141a;
  z-index: 10;
  position: fixed;
  left: -90%;
  transition: 0.5s ease-in-out;
}

.close {
  filter: invert(1);
}
.show {
  left: 0%;
}
</style>
