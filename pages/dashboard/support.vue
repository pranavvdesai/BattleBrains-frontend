<template>
  <div class="home_right pb-48 md:pb-72 lg:pb-24 lg:w-[80%] xs:w-full lg:ml-[20%] h-screen bg-dark-200 overflow-y-scroll">
   <Header :headfirst="'Have a suggestion / need assistance / want to contribute?'" :headsecond="'Write to us and we will get back to you in no time!'"/>
    <div
      class="flex flex-col mx-6 lg:w-2/3 my-4 relative xs:top-[10vh]"
    >
      <div class="xs:flex xs:flex-col lg:hidden">
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
  </div>
</template>

<script>
import Togglebar from "@/components/Togglebar.vue";
import Homecards from "@/components/Homecards.vue";
import Header from "@/components/Header.vue";
export default {
  layout: "sideviewLayout",
  components: { Togglebar, Homecards, Header },
};
</script>

<style>
  ::-webkit-scrollbar{
    background-color: #1D1D26;
  }
  @media(max-width: 1024px){
    ::-webkit-scrollbar{
      display: none;
    }
  }
</style>