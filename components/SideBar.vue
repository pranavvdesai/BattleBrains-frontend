<template>
  <div>
    <!-- Desktop View -->
    <div class="fixed top-0 flex flex-col items-center w-1/5 h-full bg-dark-300">
      <img
        src="@/assets/images/logo.png"
        class="lg:w-1/2 mt-7"
        alt="logo"
      />
      <div class="flex flex-col w-3/4 my-9 flex-1">
        <NuxtLink to="/home" class="link rounded-lg flex py-4 px-6 align-center">
          <homeIcon :color="'#fff'" :size="22"/>
          <h3 class="ml-3 link_content font-josefin"><b>Home</b></h3>
        </NuxtLink>
        <NuxtLink to="/about" class="link rounded-lg flex py-4 px-6 mt-4">
          <activityIcon :color="'#9898B3'" :size="22"/>

          <h3 class="ml-3 link_content font-josefin"><b>My Activity</b></h3>
        </NuxtLink>
        <NuxtLink to="/" class="link rounded-lg flex py-4 px-6  mt-4">
          <releaseIcon :color="'#9898B3'" :size="22"/>

          <h3 class="ml-3 link_content font-josefin"><b>Release</b></h3>
        </NuxtLink>
        <NuxtLink to="/" class="link rounded-lg flex py-4 px-6  mt-4">
          <supportIcon :color="'#9898B3'" :size="22"/>

          <h3 class="ml-3 link_content font-josefin"><b>Support</b></h3>
        </NuxtLink>
      </div>
      
      <!--Bottom XP div-->
      <div class="xp_info flex flex-col items-start mb-12 border-2 border-white px-4 py-6 rounded-md mx-5">
        <div class="flex flex-row">
          <h4 class="name mr-2"><b>Novice</b></h4>
          <p class="xp mx-1">1400/2000 XPs</p>
        </div>
          <div class="bg-white w-full h-3 items-center rounded-lg mt-2 ">
                <div
                  class="bg-gradient-to-r from-[#00BCD4] to-[#1e90ff] ... w-3/4 h-3 items-center rounded-lg "
                ></div>
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
.link{
  background-color: #262633;
}
.link_content{
  color: #9898B3;
}
.link:hover{
  background-color: #1D1D26;
}
a.nuxt-link-exact-active{
  background-color: #3A3A4D;
  box-shadow: 0px 0px 10px #1D1D26;
}

a.nuxt-link-exact-active .link_content{
  color: white;
}

a.nuxt-link-exact-active .link:hover{
  background-color: #262633;
}

.name,.xp{
  color: white;
}
@media(max-width: 1024px){
  .leftbar{
    display: none;
  }
  a.nuxt-link-exact-active{
    background-color: transparent;
  }
}
</style>
