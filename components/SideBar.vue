<template>
  <div>
    <!-- Desktop View -->
    <div class="xs:hidden lg:fixed lg:top-0 lg:flex lg:flex-col lg:items-center lg:w-1/5 lg:h-full lg:bg-dark-300 lg:overflow-y-auto lg:overflow-x-hidden">
      <img
        src="@/assets/images/logo.png"
        class="lg:w-1/2 mt-7"
        alt="logo"
      />
      <div class="flex flex-col w-3/4 my-6 flex-1">
        <nuxt-link to="/dashboard" class="link rounded-lg flex py-4 px-6 bg-dark-300 align-center hover:bg-dark-200">
          <homeIcon :color="'#fff'" :size="22"/>
          <h3 class="ml-3 link_content text-dark-500 font-josefin"><b>Home</b></h3>
        </nuxt-link>
        <nuxt-link to="/dashboard/analytics" class="link rounded-lg flex py-4 px-6 bg-dark-300 mt-4  hover:bg-dark-200">
          <activityIcon :color="'#9898B3'" :size="22"/>

          <h3 class="ml-3 link_content text-dark-500 font-josefin"><b>My Activity</b></h3>
        </nuxt-link>
        <nuxt-link to="/" class="link rounded-lg flex py-4 px-6 bg-dark-300  mt-4  hover:bg-dark-200">
          <releaseIcon :color="'#9898B3'" :size="22"/>

          <h3 class="ml-3 link_content text-dark-500 font-josefin"><b>Release</b></h3>
        </nuxt-link>
        <nuxt-link to="/dashboard/support" class="link rounded-lg flex py-4 px-6 bg-dark-300  mt-4  hover:bg-dark-200">
          <supportIcon :color="'#9898B3'" :size="22"/>

          <h3 class="ml-3 link_content text-dark-500 font-josefin"><b>Support</b></h3>
        </nuxt-link>
      </div>

      <!--Bottom XP div-->
     <div class="w-full flex justify-center lg:px-6 lg:mb-10">
     <div class="flex flex-col items-start mt-24 border border-dark-500 px-4 py-6 rounded-md xs:w-full md:w-3/4 lg:w-full">
        <div class="flex flex-row">
          <h4 class="text-dark-700 font-mont"><b>Novice</b></h4>
          <p class="mx-2 text-dark-600 font-josefin">1400/2000 XPs</p>
        </div>
          <div class="bg-white w-full h-3 items-center rounded-lg mt-2">
                <div
                  class="bg-gradient-to-r from-[#00BCD4] to-[#1e90ff] ... w-3/4 h-3 items-center rounded-lg "
                ></div>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
import homeIcon from "./icons/homeIcon";
import activityIcon from "./icons/activityIcon";
import releaseIcon from "./icons/releaseIcon";
import supportIcon from "./icons/supportIcon";


export default {
  name: "leftsidebar",
  components: {
    homeIcon,
    activityIcon,
    releaseIcon,
    supportIcon
  },
};
</script>


<style>
a.nuxt-link-exact-active{
  background-color: #3A3A4D;
  box-shadow: 0px 0px 10px #1D1D26;
}
a.nuxt-link-exact-active .link_content{
  color: white;
}
@media(max-width: 1024px){
  a.nuxt-link-exact-active{
    background-color: transparent;
  }
}
</style>
