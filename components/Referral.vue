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
        <p class="text-lg font-semibold font-mont text-white">
          {{ title }}
        </p>
        <span class="text-md text-dark-600 font-josefin">{{ description }}</span>
      </div>
    </div>
    <button
      class="
        md:mt-0
        xs:mt-12 xs:w-1/3
        h-14
        md:w-1/5
        rounded-lg
        text-white font-bold font-mont text-center text-lg
        bg-gradient-to-r from-blue-100 to-blue-200
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
