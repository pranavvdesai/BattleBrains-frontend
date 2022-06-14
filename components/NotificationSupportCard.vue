<template>
  <div class="flex justify-center mb-5">
    <div
      class="
        rounded-xl
        hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.3)]
        bg-dark-300
        max-w-sm
        p-2
      "
    >
      <div>
        <p class="text-sm text-dark-500 mb-1">request #{{ id }}</p>
        <h2 class="text-white text-lg font-bold font-mont mb-1">{{ title }}</h2>
        <p class="text-dark-600 text-sm my-1 font-josefin mb-4">
          {{ desc }}
        </p>
        <button
          class="w-1/4 rounded-lg text-white"
          v-bind:class="{
            'bg-blue-300': open,
            'bg-dark-500': !open,
          }"
        >
          {{ open ? "open" : "closed" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationSupportCard",
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    open: {
      type: Boolean,
    },
  },
};
</script>
