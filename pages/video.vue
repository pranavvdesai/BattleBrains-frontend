<template>

  <body class="bg-dark-100">
    <section class="h-screen">
      <!-- leftsidebar -->
      <Leftsidebar />

      <div class="flex flex-col">

        <!-- middle -->
        <div class=" lg:mx-[22%] ">
          <div class=" bg-dark-100 text-light-300 h-screen">

            <div class="xl:mx-20 lg:mx-7 mx-6 bg-dark-100 ">

              <div class="hidden lg:block">
                <div class="flex justify-between py-4 ">
                  <div class="flex items-center ">
                    <LeftArrowIcon class="mr-2" :size="16" :color="'#fff'" />
                    <p class=" text-sm text-light-300 font-josefin">Back</p>
                  </div>
                  <div class="flex items-center">
                    <p class=" text-sm text-light-300 font-josefin">Next</p>
                    <RightArrowIcon class="ml-2" :size="16" :color="'#fff'" />
                  </div>
                </div>
              </div>

              <div class="lg:hidden">
                <div class="flex justify-between py-6 ">
                  <div class="flex items-center ">
                    <LeftArrowIcon class="mr-2" :size="16" :color="'#fff'" />
                    <p class=" text-base font-bold text-white font-mont">BattleBrainz</p>
                  </div>
                  <div class="flex items-center">
                    <div @click="toggleModal">
                      <InfoIcon :size="20" :color="'#fff'" />
                    </div>
                    <div @click="toggleSidebar">
                      <PaperIcon :size="20" :color="'#fff'" />
                    </div>
                  </div>
                </div>
              </div>

              <iframe
                class="w-full xl:h-128 lg:h-96 h-80"
                src="https://www.youtube.com/embed/gPyyoQN3dbA"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div class="flex justify-between my-4">
                <div class="flex items-center">
                  <h1 class=" text-base text-white font-mont font-bold mr-4">BattleBrains</h1>
                  <input type="checkbox" />
                </div>
                <HeartIcon :size="20" :color="'#fff'" />
              </div>

              <p class=" text-base font-josefin">The Web3 Academy with everything for everyone. Discover, Learn and Make friends!</p>
              <div class="flex">
                <span class="mr-2 text-blue-300">DEFI</span>
                <span class="mr-2 text-pink">NFTs</span>
                <span class="mr-2 text-yellow">PFP</span>
              </div>
              <p class="text-sm font-mont pb-2">1 month ago</p>
            </div>
          </div>
        </div>
      </div>

      <!-- rightsidebar -->
      <Resources
        @toggle="toggleSidebar"
        :position="position"
      />

      <!-- bottomnav -->
      <div
        :class="{hidden : hidden}"
        class="  fixed bg-dark-300 shadow-lg bottom-0 left-0 w-full lg:hidden"
      >
        <Modal />
      </div>
    </section>
  </body>
</template>

<script>
import Modal from "../components/modal.vue";
import Resources from "../components/Resources.vue";
import Leftsidebar from "../components/Leftsidebar.vue";
import LeftArrowIcon from "../components/icons/leftArrowIcon.vue";
import HeartIcon from "../components/icons/heartIcon.vue";
import RightArrowIcon from "../components/icons/rightArrowIcon.vue";
import PaperIcon from "../components/icons/paperIcon.vue";
import InfoIcon from "../components/icons/infoIcon.vue";

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
    LeftArrowIcon,
    HeartIcon,
    RightArrowIcon,
    PaperIcon,
    InfoIcon,
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
