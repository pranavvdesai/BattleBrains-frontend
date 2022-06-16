<template>
  <!-- Mobile View -->
  <div class="lg:hidden xs:flex xs:justify-around xs:items-center bg-dark-100 xs:fixed xs:bottom-0 xs:w-full xs:h-[10vh] bottombar">
    <nuxt-link to="/dashboard" class="flex p-2">
      <homeIcon :color="'#fff'" :size="20" />
    </nuxt-link>
    <nuxt-link to="/dashboard/analytics" class="flex p-2">
      <activityIcon :color="'#9898B3'" :size="20" />
    </nuxt-link>
    <nuxt-link to="/dashboard" class="flex p-2">
      <releaseIcon :color="'#9898B3'" :size="20" />
    </nuxt-link>
    <nuxt-link to="/dashboard/support" class="flex p-2">
      <supportIcon :color="'#9898B3'" :size="20" />
    </nuxt-link>
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
 @media(max-width:1024px){
   .bottombar{
     z-index: 90;
   }
 }
</style>