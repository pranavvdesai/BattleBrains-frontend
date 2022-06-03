<template class="">
  <div class="home_right">
    <supportHeader />

    <div
      class="flex flex-col pt-16 md:pt-20 lg:pt-20 xl:pt-20 mx-6 lg:w-2/3 my-4"
    >
      <div class="flex flex-col lg:hidden">
        <h3 class="text-xl text-dark-700 tracking-wide my-2">
          <b>Have a suggestion / need assistance / want to contribute?</b>
        </h3>
        <p class="text-sm font-josefin text-dark-500">
          Write to us and we'll get back to you in no time!
        </p>
      </div>

      <input
        class="rounded-lg bg-dark-400 px-5 py-3 text-white my-3 mx-3"
        placeholder="SUBJECT"
      />
      <textarea
        class="rounded-lg bg-dark-400 px-5 py-3 h-40 text-white resize-none my-3 mx-3"
        placeholder="DESCRIPTION"
      />
      <div
        class="bg-gradient-to-r from-[#2196F3] to-[#00BCD4] text-white rounded-lg py-3 text-center font-medium w-44 sm:w-56 cursor-pointer my-3 mx-3"
      >
        Submit
      </div>
    </div>
    <Bottombar />
  </div>
</template>

<script>
import Bottombar from "../components/Bottombar.vue";
import Togglebar from "../components/Togglebar.vue";
import Homecards from "../components/Homecards.vue";
import supportHeader from "../components/supportHeader.vue";
export default {
  layout: "sideviewLayout",
  components: { Bottombar, Togglebar, Homecards, supportHeader },
};
</script>

<style>
.home_right {
  position: relative;
  margin-left: 20%;
  width: 80%;
  height: 100vh;
  background-color: #1d1d26;
}
.home_cards {
  position: relative;
  top: 10vh;
}
@media (max-width: 1024px) {
  .home_right {
    width: 100%;
    margin-left: 0%;
  }
  .home_cards {
    top: 17vh;
  }
}
</style>
