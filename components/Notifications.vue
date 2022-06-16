<template>
  <div class="flex justify-between flex:1 mb-12">
    <img
      src="@/assets/images/notifications.png"
      class="w-16 h-16"
      alt="notifications"
    />
    <div class="flex-col h-auto xs:space-y-1 lg:space-y-4 w-full ml-6 xs:ml-3">
      <div class="flex-col">
        <span class="text-lg font-mont text-dark-700 tracking-wide">
          <b>{{ title }}</b>
        </span>
        <span class="text-sm font-josefin text-dark-500 xs:mx-1 lg:mx-8">{{
          time
        }}</span>
      </div>
      <p class="text-sm font-josefin text-dark-500">
        {{ description }} {{ description }}
      </p>
    </div>
    <button
      class="
        hidden
        lg:block
        my-4
        h-8
        w-1/6
        text-white
        bg-dark-200
        rounded-lg
        text-md
        font-josefin
        hover:border-blue-100 hover:border
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
