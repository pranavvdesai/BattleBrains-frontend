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

            <!-- banner -->
            <div class=" pt-4">
              <img
                src="@/assets/images/profile1.svg"
                class="w-full"
              />
            </div>

            <!-- dp -->
            <div class="flex justify-around  ">
              <div class="  transform -translate-y-20 -translate-x-20 ">
                <img
                  src="@/assets/images/dp3.jpg"
                  class=" lg:w-56 lg:h-56 md:w-48 md:h-48 sm:w-40 sm:h-40 w-32 h-32 rounded-full transform sm:-translate-y-5 sm:ml-[10%] translate-y-1 ml-[30%] border-dark-100 border-8"
                />
              </div>
              <div class=" mt-4 p-2 h-fit rounded">
                <img src="" />
              </div>
            </div>

            <!-- formcontent -->
            <div class="mx-[7%] -mt-[4%]">
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
              <div class="grid grid-cols-4 gap-5 text-dark-500">
                <div class="col-span-4  ">
                  <div class="py-2">Username</div>

                  <input
                    type="text"
                    class="bg-dark-300 p-2 rounded w-full"
                    value="https://www.battlebrains.com/invite/pranav"
                  />
                </div>
                <div class="col-span-4  ">
                  <div class="py-2">Name</div>

                  <input
                    type="text"
                    class="bg-dark-300 p-2 rounded w-full"
                    value="https://www.battlebrains.com/invite/pranav"
                  />
                </div>
                <div class="col-span-4  ">
                  <div class="py-2">Email</div>

                  <input
                    type="email"
                    class="bg-dark-300 p-2 rounded w-full"
                    value="https://www.battlebrains.com/invite/pranav"
                  />
                </div>
                <div class="col-span-4  ">
                  <div class="py-2">Description</div>

                  <textarea
                    class="bg-dark-300 p-2 rounded w-full"
                    value="https://www.battlebrains.com/invite/pranav"
                  />
                </div>
                <div class="lg:col-span-2 col-span-4 pt-4">
                  <div class=" py-2">
                    Github
                  </div>
                  <div class="">
                    <input
                      type="text"
                      class="bg-dark-300 p-2 rounded w-full"
                      value="https://www.battlebrains.com/invite/pranav"
                    />
                  </div>
                </div>
                <div class="lg:col-span-2 col-span-4 pt-4">
                  <div class=" py-2">
                    Twitter
                  </div>
                  <div class="">
                    <input
                      type="text"
                      class="bg-dark-300 p-2 rounded w-full"
                      value="https://www.battlebrains.com/invite/pranav"
                    />
                  </div>
                </div>
                <div class="lg:col-span-2 col-span-4 pt-4">
                  <div class=" py-2">
                    Linkedin
                  </div>
                  <div class="">
                    <input
                      type="text"
                      class="bg-dark-300 p-2 rounded w-full"
                      value="https://www.battlebrains.com/invite/pranav"
                    />
                  </div>
                </div>
                <div class="lg:col-span-2 col-span-4 pt-4">
                  <div class=" py-2">
                    Discord
                  </div>
                  <div class="">
                    <input
                      type="text"
                      class="bg-dark-300 p-2 rounded w-full"
                      value="https://www.battlebrains.com/invite/pranav"
                    />
                  </div>
                </div>
                <div class="lg:col-span-2 col-span-4 pt-4">
                  <div class=" py-2">
                    Behance
                  </div>
                  <div class="">
                    <input
                      type="text"
                      class="bg-dark-300 p-2 rounded w-full"
                      value="https://www.battlebrains.com/invite/pranav"
                    />
                  </div>
                </div>
                <div class="lg:col-span-2 col-span-4 pt-4">
                  <div class=" py-2">
                    Medium
                  </div>
                  <div class="">
                    <input
                      type="text"
                      class="bg-dark-300 p-2 rounded w-full"
                      value="https://www.battlebrains.com/invite/pranav"
                    />
                  </div>
                </div>

                <div class="col-span-4 py-2">
                  <div class="py-2">Age group</div>

                  <select
                    name=""
                    id=""
                    class="bg-dark-300 p-2 rounded w-full"
                  >
                    <option value="">18-25</option>
                    <option value="">25-35</option>
                    <option value="">35-45</option>
                    <option value="">45-55</option>
                    <option value="">55-65</option>
                    <option value="">65+</option>
                  </select>
                </div>
                <div class="col-span-4 py-2">
                  <div class="py-2">Country</div>

                  <select
                    name=""
                    id=""
                    class="bg-dark-300 p-2 rounded w-full"
                  >
                    <option value="">India</option>
                    <option value="">India</option>
                    <option value="">India</option>
                    <option value="">India</option>
                    <option value="">India</option>
                    <option value="">India</option>
                  </select>
                </div>
                <button class="p-2 bg-blue-100 text-white rounded-xl mb-4 sm:col-span-1 col-span-2 mt-2">Save</button>

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
    Modalprofile,
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