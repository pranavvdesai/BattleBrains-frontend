<template>
  <div class="home_right pb-96 md:pb-36 lg:w-[80%] xs:w-full lg:ml-[20%] bg-dark-200 xs:mb-[7vh] lg:mb-0 overflow-y-scroll">
    <Header :headfirst="'Your current streak is 8 days 🔥'" :headsecond="'to the moon...'" />
      <!-- main -->
      <div class="xs:w-full xs:px-4 md:w-4/5 md:py-10 md:px-8 h-screen relative top-[75px]">
        <div class="text-white lg:hidden">
            <p class="font-mont text-xl font-extrabold">
              Your current streak is 8 days &#128293;
            </p>
            <span class="font-josefin font-semibold text-dark-500"
              >to the moon...</span
            >
          </div>
      <!-- progress bar -->
      <Progressbar :text="progress.text" :percentage="progress.percentage" />
      <!-- referral -->
      <Referral :title="referral.title" :description="referral.description" />
      <!-- grids -->
      <div
        class="
          grid
          xs:w-full xs:grid-cols-2
          md:grid-cols-3
          gap-10
          md:w-5/6
          mb-12
        "
      >
        <Analyticscard
          v-for="data in gridData"
          :key="data.title"
          :title="data.title"
          :value="data.value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import Header from "@/components/Header.vue";
import Referral from "@/components/Referral.vue";
import Analyticscard from "@/components/Analyticscard.vue";
import Progressbar from "@/components/Progressbar.vue";

export default {
  data() {
    return {
      referral: {
        title: "Refer to invite your friends to Battlebrains.",
        description:
          "Everytime someone signs up using your referral, you are rewarded with XPs!",
      },
      gridData: [
        {
          title: "Total Time Spent",
          value: "12 hrs",
        },
        {
          title: "Profile Visits",
          value: "365",
        },
        {
          title: "No. of Blogs visited",
          value: "8",
        },
        {
          title: "No. of referrals",
          value: "8",
        },
        {
          title: "XPs Earned",
          value: "2000",
        },
      ],
      progress: {
        text: "you are doing great, LFG!!!",
        percentage: 75,
      },
    };
  },
  components: {
    Referral,
    Analyticscard,
    Progressbar,
    SideBar,
    Header,
  },
  layout: "sideviewLayout",
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
