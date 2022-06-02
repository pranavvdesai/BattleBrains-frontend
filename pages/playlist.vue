<template>
  <body class="bg-dark-200">
    <section class="h-screen">
      <div class="">
        <!-- leftsidebar -->
        <Leftsidebar />

        <div class="flex flex-col">
          <!-- nav -->
          <div
            class="relative bg-dark-600 shadow-lg fixed top-0 left-0 w-full md:hidden"
          >
            <div class="px-4 pt-4">
              <div class="flex justify-between items-center h-full">
                <div class="flex items-center">
                  <LeftArrowIcon :size="20" :color="'#fff'" class="mr-4" />
                  <h1 class="text-white text-lg font-extrabold font-mont">
                    Why Web3?
                  </h1>
                </div>
                <div class="flex items-center">
                  <PaperIcon
                    :size="20"
                    :color="'#fff'"
                    @click="toggleSidebar"
                  />
                </div>
              </div>
            </div>
            <!-- <Modal @toggle="toggleSidebar" /> -->
            <Modal />
          </div>

          <!-- middle -->
          <div class="xl:mx-80 lg:mx-64 md:mx-60">
            <div class="bg-dark-200">
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 p-10">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>

        <!-- rightsidebar -->
        <Resources @toggle="toggleSidebar" :class="position" />
      </div>
    </section>
  </body>
</template>

<script>
import Modal from "../components/modal.vue";
import Resources from "../components/Resources.vue";
import Leftsidebar from "../components/Leftsidebar.vue";
import Card from "../components/Card.vue";
import PaperIcon from "../components/icons/paperIcon.vue";
import LeftArrowIcon from "../components/icons/leftArrowIcon.vue";

export default {
  data() {
    return {
      position: "-right-80",
    };
  },
  components: { Modal, Resources, Leftsidebar, Card, PaperIcon, LeftArrowIcon },
  methods: {
    toggleSidebar() {
      this.position = this.position === "-right-80" ? "right-0" : "-right-80";
    },
  },
};
</script>
