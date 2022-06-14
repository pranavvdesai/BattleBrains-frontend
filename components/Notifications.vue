<template>
  <div class="flex justify-between flex:1 ml-4 mb-12">
    <img
      src="@/assets/images/notifications.png"
      class="h-16 w-16"
      alt="notifications"
    />
    <div class="relative w-full ml-8">
      <div class="flex-col absolute top-0">
        <span class="text-lg font-mont text-dark-700 tracking-wide">
          <b>{{ title }}</b>
        </span>
        <span class="text-sm font-josefin text-dark-500 xs:mx-3 lg:mx-6">{{
          time
        }}</span>
      </div>
      <p class="text-sm font-josefin text-dark-500 absolute bottom-0">
        {{ description }}
      </p>
    </div>
    <button
      class="
        hidden
        lg:block
        my-4
        w-1/6
        h-8
        text-white
        border-solid
        bg-dark-200
        rounded-lg
        text-sm
        border-blue-100 border-2
        font-josefin
      "
    >
      visit
    </button>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  props: {
    title: {
      type: String,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>