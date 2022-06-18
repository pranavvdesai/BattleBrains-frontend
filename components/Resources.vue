<template>
  <div
    :class="[position]"
    class=" h-screen fixed top-0 lg:right-0 overflow-y-auto flex-row flex-nowrap overflow-hidden bg-dark-300 lg:w-1/5 w-5/6 z-10 py-4 px-2 transition-all duration-300"
  >
    <div class="flex items-center justify-between lg:justify-center px-5">
      <h1 class="text-center my-6 text-dark-600 text-lg font-bold font-mont">Reference material [ 5 ]</h1>
      <div @click="toggle" class="lg:hidden">
        <CloseIcon :size="14" :color="'#B8B8CC'"/>
      </div>
    </div>
    <div class="flex justify-center mx-5 mt-2">
      <div class="rounded-xl hover:shadow-[0_0_30px_5px_rgba(0,0,0,1)] hover:shadow-dark-200 bg-dark-300 max-w-sm p-4">
        <a href="#!">
          <img
            class="rounded-t-lg w-full"
            src="@/assets/images/sidebar1.png"
            alt=""
          />
        </a>
        <div class="mt-2">
          <a class="text-blue-100 font-josefin text-md mt-3">https://levyne.com</a>
          <h5 class="text-dark-700 font-mont text-lg font-bold">Card title</h5>
          <p class="text-dark-600 font-josefin text-sm mt-2">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from './icons/closeIcon.vue';
export default {
    props: ["position"],
    methods: {
        toggle() {
            this.$emit("toggle");
        },
    },
    components: { CloseIcon }
};
</script>
