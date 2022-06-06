<template>

  <body class="bg-dark-100">
    <section class="h-screen">
      <!-- leftsidebar -->
      <Leftprofile />

      <div class="flex flex-col">

        <!-- middle -->
        <div class=" lg:mx-[20%] bg-dark-100 h-screen">

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
          <div class="relative lg:pt-6 pt-2 lg:mx-10 md:mx-10 sm:mx-5 mx-5 mb-[10%]">
            <img src="@/assets/images/profile1.svg" class="w-full" />
            <div class="bg-dark-300 p-2 rounded-lg absolute top-[15%] right-4">
              <label for="banner-input">
                <img src="@/assets/images/edit.svg" class="w-5 h-5" />
              </label>
              <input id="banner-input" type="file" style="display: none;" />
            </div>

            <div class="absolute bg-gray-50 top-[65%] flex ml-14">
              <img src="@/assets/images/dp3.png"
                class="rounded-full w-[30%] border-dark-100 lg:border-8 md:border-6 border-4" />
              <div class="bg-dark-300 p-2 rounded-lg absolute ml-[12%] self-center">
                <label for="avatar-input">
                  <img src="@/assets/images/edit.svg" class="w-5 h-5" />
                </label>
                <input id="avatar-input" type="file" style="display: none;" />
              </div>
            </div>

          </div>

          <!-- formcontent -->
          <div class="lg:mx-14 md:mx-14 sm:m-5 m-5 font-josefin">
            <!-- <form class="font-josefin"> -->
            <div class="grid grid-cols-4 gap-5 text-dark-500">
              <div class="col-span-4  ">
                Username
                <input type="text" v-model="username" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  value="https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="col-span-4">
                Name
                <input type="text" v-model="name" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  value="https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="col-span-4">
                Email
                <input type="email" v-model="email" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  value="https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="col-span-4">
                Description
                <textarea rows="3" v-model="description" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  placeholder="Eg: https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="lg:col-span-2 col-span-4">
                Github
                <input type="text" v-model="github" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  value="https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="lg:col-span-2 col-span-4">
                Twitter
                <input type="text" v-model="twitter" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  value="https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="lg:col-span-2 col-span-4">
                Linkedin
                <input type="text" v-model="linkedin" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  value="https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="lg:col-span-2 col-span-4">
                Discord
                <input type="text" v-model="discord" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  value="https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="lg:col-span-2 col-span-4">
                Behance
                <input type="text" v-model="behance" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  value="https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="lg:col-span-2 col-span-4">
                Medium
                <input type="text" v-model="medium" class="bg-dark-300 p-2 rounded w-full font-mont text-sm my-2"
                  value="https://www.battlebrains.com/invite/pranav" />
              </div>

              <div class="col-span-4 py-2">
                <div class="pb-2">Age group</div>
                <select name="" id="" v-model="age" class="bg-dark-300 p-2 rounded w-full font-mont text-sm">
                  <option value="">18-25</option>
                  <option value="">25-35</option>
                  <option value="">35-45</option>
                  <option value="">45-55</option>
                  <option value="">55-65</option>
                  <option value="">65+</option>
                </select>
              </div>

              <div class="col-span-4 py-2">
                <div class="pb-2">Country</div>
                <select name="" id="" v-model="country" class="bg-dark-300 p-2 rounded w-full font-mont text-sm">
                  <option value="">India</option>
                  <option value="">India</option>
                  <option value="">India</option>
                  <option value="">India</option>
                  <option value="">India</option>
                  <option value="">India</option>
                </select>
              </div>
              <button tpye="submit"
                class="p-2 bg-blue-100 text-white rounded-xl mb-4 sm:col-span-1 col-span-2 mt-2 font-josefin font-bold">Save</button>
            </div>
            <!-- </form> -->

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
import SettingIcon from "../../components/icons/settingIcon.vue";
import UserIcon from "../../components/icons/userIcon.vue";

export default {
  data() {
    return {
      position: "-right-full",
      hidden: true,
      username: "",
      name: "",
      email: "",
      description: "",
      github: "",
      twitter: "",
      linkedin: "",
      discord: "",
      behance: "",
      medium: "",
      age: "",
      country: "",
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
    SettingIcon,
    UserIcon,
  },
  methods: {
    toggleSidebar() {
      this.position =
        this.position === "-right-full" ? "right-0" : "-right-full";
    },
    toggleModal() {
      this.hidden = !this.hidden;
    },
  },
};
</script>