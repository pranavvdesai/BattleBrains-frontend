<template>
  <div class="home_right pb-96 md:pb-36 lg:w-[80%] xs:w-full lg:ml-[20%] bg-dark-200 xs:mb-[7vh] lg:mb-0">
    <Header :headfirst="'Your current streak is 8 days 🔥'" :headsecond="'to the moon...'" />
      <!-- main -->
      <div class="xs:w-full xs:px-4 md:w-4/5 md:py-10 md:px-8 h-screen relative top-[10vh]">
        <div class="text-white lg:hidden">
            <p class="font-mont text-xl font-extrabold">
              Your current streak is 8 days &#128293;
            </p>
            <span class="font-josefin font-semibold text-dark-500"
              >to the moon...</span
            >
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
        <div
          class="
            friends
            xs:flex-col xs:flex
            md:flex-row
            w-full
            p-3
            bg-dark-400
            rounded-xl
            my-6
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
                Refer to invite your friends to Battlebrains.
              </p>
              <span class="text-sm text-dark-500"
                >Everytime someone signs up using your referral, you are
                rewarded with XPs!</span
              >
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
          <div class="grid-element">
            <p class="grid-title text-dark-500 font-josefin">
              Total Time Spent
            </p>
            <p class="grid-value">12 hrs</p>
          </div>
          <div class="grid-element">
            <p class="grid-title">Profile Visits</p>
            <p class="grid-value">365</p>
          </div>
          <div class="grid-element">
            <p class="grid-title">No. of Blogs visited</p>
            <p class="grid-value">8</p>
          </div>
          <div class="grid-element">
            <p class="grid-title">No. of referrals</p>
            <p class="grid-value">8</p>
          </div>
          <div class="grid-element">
            <p class="grid-title">XPs Earned</p>
            <p class="grid-value">2000</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    SideBar,
    Header,
  },
    layout: "sideviewLayout",

}

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