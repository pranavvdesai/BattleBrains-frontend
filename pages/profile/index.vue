<template>

  <body class="bg-dark-100">
    <section class="h-screen">
      <!-- leftsidebar -->
      <Leftprofile />

        <!-- middle -->
        <div class="lg:mx-[20%] bg-dark-100 h-screen flex flex-col">

          <!-- mobilenav -->
          <div class="lg:hidden mx-[5%] flex justify-between py-6">
            <div class="flex items-center">
              <LeftArrowIcon class="mr-2" :size="16" :color="'#fff'" />
              <p class=" text-base font-bold text-white font-mont">BattleBrainz</p>
            </div>
            <div class="flex items-center">
              <div @click="toggleModal">
                <SettingIcon class="mr-4" :size="16" :color="'#B8B8CC'" />
              </div>
              <div @click="toggleSidebar">
                <UserIcon :size="16" :color="'#B8B8CC'" />
              </div>
            </div>
          </div>

          <!-- banner -->
          <div class="relative mx-5 mt-[5%] mb-[15%]">
            <img src="@/assets/images/profile1.svg" class="w-full" />
            <div class="absolute -mt-[12%] flex w-full justify-between px-10">
              <img src="@/assets/images/dp3.png" class="border-dark-100 w-[25%] rounded-full border-4" />
              <nuxt-link to="/profile/edit">
                <div class="bg-dark-300 absolute bottom-0 right-10 mt-4 rounded-lg p-2">
                  <img src="@/assets/images/edit.svg" width="16" height="16" />
                </div>
              </nuxt-link>
            </div>
          </div>



          <!-- formsection -->
          <div class="lg:mx-20 mx-10">
            <div class="flex items-center pb-1">
              <h1 class="font-mont text-2xl text-white mr-3 font-extrabold">Pranav</h1>
              <p class=" font-josefin text-blue-100 lg:text-lg md:text-lg sm:text-base text-base">
                pranav@gmail.com</p>
            </div>
            <div>
              <p class="text-dark-600 lg:text-base md:text-base sm:text-sm text-sm font-josefin">21 | Computational
                Graphics |
                Deep
                Learning | Design and UX
                | ???? | Building next
                gen web3 edtech @battlebrains_</p>
            </div>

            <!-- Social links -->
            <div class="flex items-stretch mt-5">
              <a href="https://battlebrains.xyz" target="_blank" class="bg-dark-300 p-2 mr-2 rounded-lg">
                <img src="@/assets/images/github.svg" class="w-5 h-5" />
              </a>
              <a href="https://battlebrains.xyz" target="_blank" class="bg-dark-300 p-2 mr-2 rounded-lg">
                <img src="@/assets/images/twitter.svg" class="w-5 h-5" />
              </a>
              <a href="https://battlebrains.xyz" target="_blank" class="bg-dark-300 p-2 mr-2 rounded-lg">
                <img src="@/assets/images/linkedin.svg" class="w-5 h-5" />
              </a>
              <a href="https://battlebrains.xyz" target="_blank" class="bg-dark-300 p-2 mr-2 rounded-lg">
                <img src="@/assets/images/discord.svg" class="w-5 h-5" />
              </a>
              <a href="https://battlebrains.xyz" target="_blank" class="bg-dark-300 p-2 mr-2 rounded-lg">
                <img src="@/assets/images/behance.svg" class="w-5 h-5" />
              </a>
              <a href="https://battlebrains.xyz" target="_blank" class="bg-dark-300 p-2 rounded-lg">
                <img src="@/assets/images/medium.svg" class="w-5 h-5" />
              </a>
            </div>

            <!-- Text fields -->
            <div class="grid grid-cols-3 text-dark-500 font-josefin">
              <div class="col-span-3 py-2 pt-6">
                Your referral link
              </div>
              <input class="lg:col-span-2 col-span-3 bg-dark-300 p-2 rounded-md w-full font-mont text-sm text-blue-100"
                v-on:focus="$event.target.select()" ref="clone" readonly :value="text" />
              <button @click="copy"
                class="col-span-1 lg:block hidden bg-dark-300 p-2 rounded ml-4 font-josefin text-sm font-bold w-20">Copy</button>

              <div class="col-span-3 py-2">
                Metamask
              </div>
              <input type="text" disabled
                class="lg:col-span-2 col-span-3 bg-dark-300 p-2 rounded-md w-full font-mont text-sm"
                v-model="metamask" />
              <button
                class="col-span-1 lg:block hidden bg-dark-300 p-2 rounded ml-4 font-josefin text-sm font-bold w-20">Connect</button>

              <div class="col-span-3 py-2">
                Email
              </div>
              <input type="email" class="lg:col-span-2 col-span-3 bg-dark-300 p-2 rounded-lg w-full font-mont text-sm"
                v-model="email" />
              <button
                class="col-span-1 lg:block hidden bg-dark-300 p-2 rounded ml-4 font-josefin text-sm font-bold w-20">Verified</button>

              <div class="col-span-3 py-2">
                Age group
              </div>
              <!-- <input type="email" class="lg:col-span-2 col-span-3 mb-6 bg-dark-300 p-2 rounded w-full font-mont text-sm" -->
              <!-- value="https://www.battlebrains.com/invite/pranav" /> -->
              <select name="" id="" v-model="age"
                class="lg:col-span-2 col-span-3 mb-6 bg-dark-300 p-2 rounded-lg w-full font-mont text-sm">
                <option value="">18-25</option>
                <option value="">25-35</option>
                <option value="">35-45</option>
                <option value="">45-55</option>
                <option value="">55-65</option>
                <option value="">65+</option>
              </select>
            </div>
          </div>
        </div>

      <!-- rightsidebar -->
      <Peersidebar @toggle="toggleSidebar" :class="position" />
      <!-- bottomnav -->
      <div :class="{ hidden: hidden }" class="  fixed bg-dark-300 shadow-lg bottom-0 left-0 w-full lg:hidden">
        <Modalprofile />
      </div>

    </section>
  </body>
</template>

<script>
import Modal from "../../components/modal.vue";
import Resources from "../../components/Resources.vue";
import Leftsidebar from "../../components/Leftsidebar.vue";
import Card from "../../components/Card.vue";
import Leftprofile from "../../components/leftprofile.vue";
import Peersidebar from "../../components/peersidebar.vue";
import LeftArrowIcon from "../../components/icons/leftArrowIcon.vue";
import PaperIcon from "../../components/icons/paperIcon.vue";
import InfoIcon from "../../components/icons/infoIcon.vue";
import Modalprofile from "../../components/modalprofile.vue";
import UserIcon from "../../components/icons/userIcon.vue";
import SettingIcon from "../../components/icons/settingIcon.vue";

export default {
  data() {
    return {
      position: "-right-full",
      hidden: true,
      // refLink: "https://battlebrains.xyz/register?ref=pranav",
      text: 'https://battlebrains.xyz/register?ref=pranav',
      metamask: "0xLoremIpsum",
      email: "",
      age: "",
    };
  },
  components: {
    Modal,
    Resources,
    Leftsidebar,
    Card,
    Leftprofile,
    Peersidebar,
    LeftArrowIcon,
    PaperIcon,
    InfoIcon,
    Modalprofile,
    UserIcon,
    SettingIcon,
  },
  methods: {
    toggleSidebar() {
      this.position =
        this.position === "-right-full" ? "right-0" : "-right-full";
    },
    toggleModal() {
      this.hidden = !this.hidden;
    },
    copy() {
      this.$refs.clone.focus();
      document.execCommand('copy');
    }
  },
};
</script>
