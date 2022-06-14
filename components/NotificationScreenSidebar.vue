<template>
  <div
    class="
      h-screen
      fixed
      top-0
      hidden
      lg:block lg:left-0
      overflow-y-auto
      flex-row flex-nowrap
      overflow-hidden
      shadow-3xl
      bg-dark-300
      lg:w-[20%]
      w-1/4
      z-10
      py-4
      lg:px-4
      xl:px-8
      2xl:px-12
      transition-all
      duration-300
    "
  >
    <div class="flex mt-4 align-middle">
      <leftArrowIcon :color="'#9898B3'" :size="14" />
      <p class="ml-5 text-sm text-dark-500">back</p>
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
import leftArrowIcon from "./icons/leftArrowIcon";
import NotificationSupportCard from "./NotificationSupportCard.vue";
export default {
  name: "NotificationScreenSidebar",
  props: {
    supportArray: {
      type: Array,
    },
  },
  components: {
    NotificationSupportCard,
    leftArrowIcon,
  },
  data() {
    return {
      support: this.supportArray,
    };
  },
};
</script>
