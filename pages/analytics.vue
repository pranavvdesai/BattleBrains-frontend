<template>
  <body class="bg-dark-100">
    <section class="h-screen md:flex md:flex-row px-0">
      <!-- sidebar -->
      <div class="sidebar md:w-1/5 bg-dark-300 md:h-screen"></div>
      <!-- main -->
      <div class="main xs:w-full xs:px-4 md:w-4/5 md:py-10 md:px-8 h-screen">
        <!-- upper section -->
        <div
          class="
            upper
            xs:flex xs:flex-col-reverse
            md:mt-0 md:flex-row
            w-full
            mb-12
            mt-8
            md:items-center md:justify-between
          "
        >
          <div class="top-left text-white md:mt-0 xs:mt-12">
            <p class="font-mont text-xl font-extrabold">
              Your current streak is 8 days &#128293;
            </p>
            <span class="font-josefin font-semibold text-dark-500"
              >to the moon...</span
            >
          </div>
          <div
            class="flex flex-row justify-between w-full md:w-auto items-center"
          >
            <div class="topNav">
              <img
                src="@/assets/images/topNav.png"
                alt="topNav"
                class="
                  md:hidden
                  xs:block
                  h-6
                  justify-content-center
                  items-center
                "
              />
            </div>
            <div
              class="
                flex
                justify-content-center
                items-center
                space-x-4
                top-right
              "
            >
              <img
                src="@/assets/images/notificationBell.png"
                alt="notification bell"
                class="h-6 mr-6"
              />
              <div class="profile flex items-center space-x-2">
                <img
                  src="@/assets/images/profile.png"
                  alt="profile"
                  class="h-10"
                />
                <img
                  src="@/assets/images/ArrowDown.png"
                  alt="down arrow"
                  class="md:h-2 md:block xs:hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- progress bar -->
        <div class="progress">
          <div class="w-full bg-white rounded-lg">
            <div class="bg-blue-300 w-3/4 h-1 rounded-lg"></div>
          </div>
          <p class="font-josefin font-semibold text-dark-500 mt-2">
            you are doing great, LFG!!!
          </p>
        </div>
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
    </section>
  </body>
</template>

<script>
import Referral from "../components/Referral.vue";
import Analyticscard from "../components/Analyticscard.vue";

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
    };
  },
  components: { Referral, Analyticscard },
};
</script>

