<template>
  <div
    :class="[position]"
    class="h-screen fixed top-0 lg:right-0 overflow-y-auto flex-row flex-nowrap overflow-hidden bg-dark-300 lg:w-1/5 w-5/6 z-10 py-4 px-2 transition-all duration-300 lg:hidden"
  >
    <div class="flex items-center justify-end" @click="toggle">
      <CloseIcon
        class="w-4 h-4 mt-1 lg:hidden"
        :color="'rgb(184 ,184 ,204)'"
        :size="18"
      />
    </div>
    <div
      class="grid grid-cols-4 text-white mt-20 text-center place-items-center w-[85%] mx-auto"
    >
      <span class="py-2 mr-3 mb-4 w-12 bg-dark-100 border-2 border-[#1e90ff]">
        1
      </span>
      <span class="py-2 mr-3 mb-4 w-12 bg-dark-100 border-2 border-[#1e90ff]">
        2
      </span>
      <span class="py-2 mr-3 mb-4 w-12 bg-dark-100 border-2 border-[#1e90ff]">
        3
      </span>
      <span class="py-2 mr-3 mb-4 w-12 bg-dark-100 border-2"> 4 </span>
      <span class="py-2 mr-3 mb-4 w-12 bg-dark-100 border-2"> 5 </span>
      <span class="py-2 mr-3 mb-4 w-12 bg-dark-100 border-2"> 6 </span>
      <span class="py-2 mr-3 mb-4 w-12 bg-dark-100 border-2"> 7 </span>
    </div>
  </div>
</template>

<script>
import CloseIcon from "./icons/closeIcon.vue";
export default {
  props: ["position"],
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
  components: { CloseIcon },
};
</script>
