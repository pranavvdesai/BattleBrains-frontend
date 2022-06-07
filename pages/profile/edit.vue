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
          <div class="relative mx-5 mt-[5%] mb-[20%]">
            <img src="@/assets/images/profile1.svg" class="w-full" />
            <div class="absolute -mt-[12%] ml-10 w-[25%]">
              <div class="border-dark-100 flex rounded-full border-4">
                <img src="@/assets/images/dp3.png" class="flex rounded-full" />
                <div class="self-center absolute px-auto flex w-full px-4">
                  <label for="avatar-input" class="bg-dark-300 p-2 rounded-lg mx-auto">
                    <img src="@/assets/images/edit.svg" width="16" height="16" />
                  </label>
                </div>
              </div>
              <input id="avatar-input" type="file" style="display: none;" />
            </div>
            <label for="avatar-input" class="bg-dark-300 self-center absolute top-[7%] right-[2%] rounded-lg p-2">
              <img src="@/assets/images/edit.svg" width="16" height="16" />
            </label>
            <input id="avatar-input" type="file" style="display: none;" />
          </div>



          <!-- formcontent -->
          <div class="lg:mx-14 md:mx-14 sm:m-5 m-5 font-josefin">
            <!-- <form class="font-josefin"> -->
            <div class="grid grid-cols-4 gap-5 text-dark-500">
              <div class="col-span-4  ">
                Username
                <input type="text" v-model="username" class="bg-dark-300 p-2 rounded-lg w-full font-mont text-sm my-2"
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