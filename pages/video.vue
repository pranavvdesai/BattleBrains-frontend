<template>
  <body class="bg-dark-100">
    <section class="h-screen">
      <!-- leftsidebar -->
      <Leftsidebar />
      <div class="flex flex-col">
        <!-- middle -->
        <div class="lg:mx-[20%]">
          <div class="bg-dark-100 h-screen">
            <div class="xl:mx-10 mx-6 bg-dark-100">
              <div class="hidden lg:block">
                <div class="flex justify-between pt-8 pb-4">
                  <div class="flex items-center">
                    <LeftArrowIcon class="mr-2" :size="16" :color="'#9898B3'" />
                    <p class="text-sm text-dark-500 font-josefin">Back</p>
                  </div>
                  <div class="flex items-center">
                    <p class="text-sm text-dark-500 font-josefin">Next</p>
                    <RightArrowIcon
                      class="ml-2"
                      :size="16"
                      :color="'#9898B3'"
                    />
                  </div>
                </div>
              </div>
            </div>
              <div class="lg:hidden">
                <div class="flex justify-between py-6 ">
                  <div class="flex items-center ">
                    <LeftArrowIcon
                      class="mr-2"
                      :size="16"
                      :color="'#fff'"
                    />
                    <p class=" text-base font-bold text-white font-mont">{{title}}</p>
                  </div>
                  <div class="flex items-center">
                    <div @click="toggleModal">
                      <InfoIcon class="mr-4" :size="20" :color="'#B8B8CC'" />
                    </div>
                    <div @click="toggleSidebar">
                      <PaperIcon :size="20" :color="'#B8B8CC'" />
                    </div>
                  </div>
                </div>
              </div>

              <iframe
                class="w-full xl:h-128 lg:h-96 h-80"
                src="https://www.youtube.com/embed/KWxENcTAe1A"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div class="flex justify-between my-4">
                <div class="flex items-center">
                  <h1 class="text-base text-white font-mont font-bold mr-4">
                    BattleBrains
                  </h1>
                  <input type="checkbox" />
                </div>
                <HeartIcon :size="16" :color="'#fff'" />
              </div>

              <p class="text-base text-dark-600 font-josefin w-5/6">
               {{desc}}
              </p>
              <div class="flex flex-wrap my-3">
                <div v-for="(tag,index) in tags">
                <span class="mr-3 text-sm font-josefin" v-bind:class="(index%3==0 && 'text-blue-300') || (index%3==1 && 'text-pink') || (index%3==2 && 'text-yellow')">{{tag}}</span>
                </div>
              </div>
              <p class="text-sm font-josefin text-dark-500">{{posted}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- rightsidebar -->
      <Resources @toggle="toggleSidebar" :position="position" />

      <!-- bottomnav -->
      <div
        :class="{ hidden: hidden }"
        class="fixed bg-dark-300 shadow-lg bottom-0 left-0 w-full lg:hidden"
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
      title : "BattleBrains",
      desc : "  The Web3 Academy with everything for everyone. Discover, Learn and Make friends!",
      posted : "1 month ago",
      tags:['DEFI','NFT','PFP'],
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
