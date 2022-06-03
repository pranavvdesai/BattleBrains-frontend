<template>

  <body class="bg-dark-100">
    <section class="h-screen">
      <!-- leftsidebar -->
      <Leftprofile />

      <div class="flex flex-col">
        <!-- middle -->
        <div class=" lg:mx-[20%]">
          <div class=" bg-dark-100 h-screen mx-[5%]">
            <div class="lg:hidden">
              <div class="flex justify-between py-6 ">
                <div class="flex items-center ">
                  <LeftArrowIcon
                    class="mr-2"
                    :size="16"
                    :color="'#fff'"
                  />
                  <p class=" text-base font-bold text-white font-mont">BattleBrainz</p>
                </div>
                <div class="flex items-center">
                  <div @click="toggleModal">
                    <InfoIcon
                      :size="20"
                      :color="'#fff'"
                    />
                  </div>
                  <div @click="toggleSidebar">
                    <PaperIcon
                      :size="20"
                      :color="'#fff'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class=" pt-4">
              <!-- banner -->
              <img
                src="@/assets/images/profile1.svg"
                class="w-full"
              />
              <!-- dp -->
              <!-- <img
                  src="@/assets/images/dp3.jpg"
                  class=" w-1/10 rounded-full transform sm:-translate-y-20 sm:ml-[10%] -translate-y-16 ml-[8%] border-dark-100 border-8"
                /> -->

                <!-- <div class=" w-fit absolute  top-[30%] right-[27%] bg-dark-300 p-2 h-fit rounded">
                  <img src="@/assets/images/edit.svg" />
                </div> -->
            </div>

            <!-- dptrial -->
            <div class="flex justify-around  ">
              <div class="  transform -translate-y-20 -translate-x-20 ">
                <img
                  src="@/assets/images/dp3.jpg"
                  class=" lg:w-56 lg:h-56 md:w-48 md:h-48 sm:w-40 sm:h-40 w-32 h-32 rounded-full transform sm:-translate-y-5 sm:ml-[10%] translate-y-1 ml-[30%] border-dark-100 border-8"
                />

              </div>
              <nuxt-link to="/profile/edit">
                <div class=" mt-4 bg-dark-300 p-2 h-fit rounded">
                  <img src="@/assets/images/edit.svg" />
                </div>
              </nuxt-link>

            </div>

            <!-- formsection -->
            <div class="mx-[7%] -mt-[4%]">
              <div class="flex items-center pb-3">
                <h1 class="font-mont text-3xl text-white mr-3">Pranav</h1>
                <p class=" font-josefin text-blue-100">pranav@gmail.com</p>
              </div>
              <div>
                <p class=" text-dark-600">21 | Computational Graphics | Deep Learning | Design and UX | ΨΦ | Building next gen web3 edtech @battlebrains_</p>
              </div>
              <!-- <div class="flex items-center">
                <div class="bg-dark-300 p-2">
                  <img src="@/assets/images/github.svg" />
                </div>
                <div class="bg-dark-300 p-2">
                  <img src="@/assets/images/twitter.svg" />
                </div>
                <div class="bg-dark-300 p-2">
                  <img src="@/assets/images/linkedin.svg" />
                </div>
                <div class="bg-dark-300 p-2">
                  <img src="@/assets/images/discord.svg" />
                </div>
                <div class="bg-dark-300 p-2 h-full">
                  <img src="@/assets/images/behance.svg" class="h-full" />
                </div>
                <div class="bg-dark-300 p-2 h-full">
                  <img src="@/assets/images/medium.svg" />
                </div>
              </div> -->
              <div class="grid grid-cols-3 text-dark-500">
                <div class="col-span-3 py-2 pt-6">
                  Your referral link
                </div>
                <div class="col-span-3">
                  <input
                    type="text"
                    class="bg-dark-300 p-2 rounded w-full"
                    value="https://www.battlebrains.com/invite/pranav"
                  />
                </div>
                <div class="col-span-3 py-2">
                  Metamask
                </div>
                <div class="lg:col-span-2 col-span-3">
                  <input
                    type="text"
                    class="bg-dark-300 p-2 rounded w-full"
                    value="https://www.battlebrains.com/invite/pranav"
                  />
                </div>
                <div class="col-span-1 lg:block hidden">
                  <button class="bg-dark-300 p-2 rounded ml-4">Connect</button>
                </div>
                <div class="col-span-3 py-2">
                  Email
                </div>
                <div class="lg:col-span-2 col-span-3">
                  <input
                    type="email"
                    class="bg-dark-300 p-2 rounded w-full"
                    value="https://www.battlebrains.com/invite/pranav"
                  />
                </div>
                <div class="col-span-1 lg:block hidden">
                  <button class="bg-dark-300 p-2 rounded ml-4">Verified</button>
                </div>
                <div class="col-span-3 py-2">
                  Age group
                </div>
                <div class="lg:col-span-2 col-span-3 pb-6">
                  <input
                    type="email"
                    class="bg-dark-300 p-2 rounded w-full"
                    value="https://www.battlebrains.com/invite/pranav"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- rightsidebar -->
      <Peersidebar
        @toggle="toggleSidebar"
        :class="position"
      />
      <!-- bottomnav -->
      <div
        :class="{hidden : hidden}"
        class="  fixed bg-dark-300 shadow-lg bottom-0 left-0 w-full lg:hidden"
      >
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

export default {
  data() {
    return {
      position: "-right-full",
      hidden: true,
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
    Modalprofile
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