<template>
  <div
    class="
      friends
      xs:flex-col xs:flex
      md:flex-row
      w-full
      p-3
      bg-dark-400
      rounded-xl
      my-12
      md:items-center md:justify-between
    "
  >
    <div class="left md:items-center flex md:space-x-8 xs:space-x-4">
      <div
        class="
          cont
          rounded-lg
          md:h-14
          bg-light-700
          md:w-14
          xs:h-14 xs:w-20
          flex
          justify-center
          items-center
        "
      >
        <img src="@/assets/images/friends.png" alt="friends" />
      </div>
      <div class="refer">
        <p class="text-lg font-semibold text-white">
          {{ title }}
        </p>
        <span class="text-sm text-dark-500">{{ description }}</span>
      </div>
    </div>
    <button
      class="
        md:mt-0
        xs:mt-12 xs:w-1/3
        text-center text-lg
        h-14
        md:w-1/5
        rounded-lg
        bg-blue-200
        border-solid
        text-white
        font-bold
        border-dark-500
        bg-gradient-to-r
        from-blue-100
        to-blue-200
        hover:bg-green-700
      "
    >
      refer
    </button>
  </div>
</template>

<script>
export default {
  name: "Referral",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>