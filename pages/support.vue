<template>
  <div class="home_right pb-48 md:pb-72 lg:pb-24">
   <Header :headfirst="'Have a suggestion / need assistance / want to contribute?'" :headsecond="'Write to us and we will get back to you in no time!'"/>
    <div
      class="flex flex-col pt-16 md:pt-20 lg:pt-20 xl:pt-20 mx-6 lg:w-2/3 my-4"
    >
      <div class="flex flex-col support_head">
        <h3 class="text-lg text-white tracking-wide my-2">
          <b>Have a suggestion / need assistance / want to contribute?</b>
        </h3>
        <p class="text-md font-josefin text-dark-600">
          Write to us and we will get back to you in no time!
        </p>
      </div>
      <input
        class="rounded-lg bg-dark-400 px-5 py-3 text-white mb-2 mt-5"
        placeholder="SUBJECT"
      />
      <textarea
        class="rounded-lg bg-dark-400 px-5 py-3 h-40 text-white resize-none my-2"
        placeholder="DESCRIPTION"
      />
      <div
        class="bg-gradient-to-r from-[#2196F3] to-[#00BCD4] text-white rounded-lg py-3 text-center font-bold w-44 sm:w-56 cursor-pointer my-2"
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
import Header from "../components/Header.vue";
export default {
  layout: "sideviewLayout",
  components: { Bottombar, Togglebar, Homecards, Header },
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
.support_head{
  display: none;
}
 ::-webkit-scrollbar{
    background-color: #1D1D26;
  }

@media (max-width: 1024px) {
  .home_right {
    width: 100%;
    margin-left: 0%;
  }
  .support_head{
    display: block;
  }
}
</style>
