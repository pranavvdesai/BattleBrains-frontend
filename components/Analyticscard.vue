<template>
  <div class="grid-element bg-dark-300">
    <p class="grid-title">{{ title }}</p>
    <p class="grid-value">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "Analyticscard",
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>
