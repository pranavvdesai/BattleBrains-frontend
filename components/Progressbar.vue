<template>
  <div class="progress">
    <div class="w-full bg-white rounded-lg">
      <div
        class="bg-blue-300 h-1 rounded-lg"
        :style="{ width: percentage + '%' }"
      ></div>
    </div>
    <p class="font-josefin font-semibold text-dark-500 mt-2">
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  name: "Progressbar",
  props: {
    text: {
      type: String,
    },
    percentage: {
      type: Number,
      default: 0,
    },
  },
};
</script>
