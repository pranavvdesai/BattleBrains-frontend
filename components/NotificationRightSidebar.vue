<template>
  <div
    :class="[position]"
    class="
      h-screen
      fixed
      top-0
      overflow-y-auto
      flex-row flex-nowrap
      overflow-hidden
      bg-dark-300
      lg:w-1/5
      w-5/6
      z-10
      py-4
      px-4
      lg:px-2
      transition-all
      duration-300
      lg:hidden
    "
  >
    <div class="flex items-center justify-end" @click="toggle">
      <CloseIcon
        class="mr-3 mt-4 lg:hidden"
        :color="'rgb(184 ,184 ,204)'"
        :size="16"
      />
    </div>
    <h1 class="text-dark-500 md:text-base mt-10 font-mont mb-4">
      Your Support Requests
    </h1>
    <NotificationSupportCard
      v-for="data in support"
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :desc="data.desc"
      :open="data.open"
    />
  </div>
</template>

<script>
import CloseIcon from "./icons/closeIcon.vue";
import NotificationSupportCard from "./NotificationSupportCard.vue";
export default {
  props: {
    supportArray: {
      type: Array,
    },
    position: {
      type: String,
    },
  },
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
  data() {
    return {
      support: this.supportArray,
    };
  },
  components: { CloseIcon, NotificationSupportCard },
};
</script>
