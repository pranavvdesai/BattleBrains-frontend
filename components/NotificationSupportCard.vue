<template>
  <div class="flex justify-center mb-5">
    <div
      class="
        rounded-xl
        hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.3)]
        bg-dark-300
        max-w-sm
        p-4
      "
    >
      <div>
        <p class="text-md text-dark-500 mb-1">request #{{ id }}</p>
        <h2 class="text-white text-lg font-bold font-mont mb-1">{{ title }}</h2>
        <p class="text-dark-600 text-md my-2 font-josefin mb-4">
          {{ desc }}
        </p>
        <div
          class="w-2/5 px-2 py-1 rounded-md text-white text-center"
          v-bind:class="{
            'bg-blue-300': open,
            'bg-dark-400': !open,
          }"
        >
          {{ open ? "open" : "closed" }}
        </div>
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
