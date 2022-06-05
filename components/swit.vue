<template>
  <div
    class="w-10 h-6 flex items-center rounded-full p-1 duration-300 cursor-pointer bg-dark-400"
    :aria-checked="value.toString()"
    @click="toggle"
  >
    <div
      class="bg-blue-100 w-4 h-4 rounded-full shadow-md transform duration-300"
      :class="{ 'translate-x-8': value }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
        this.$emit('input', !this.value)
    }
  }
};
</script>
