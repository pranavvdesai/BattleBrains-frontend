<template>
  <body class="bg-dark-200">
    <section class="h-screen" v-if="data">
      <!-- leftsidebar -->
      <Leftsidebar :title="data.title" :description="data.description" :completedVideoCount="2" :totalVideoCount="data.counts.video" />
      <div class="flex flex-col">
        <!-- nav -->
          <div class="relative bg-dark-300 shadow-lg  top-0 left-0 w-full lg:hidden">
          <div class="px-4 pt-4">
            <div class="flex justify-between items-center h-full">
              <div class="flex items-center">
                <LeftArrowIcon :size="16" :color="'#fff'" class="mr-4" />
                <h1 class="text-white text-lg font-extrabold font-mont">
                  {{ data.title }}
                </h1>
              </div>
              <div class="flex items-center">
                <div @click="toggleSidebar">
                  <PaperIcon
                    :size="20"
                    :color="'#fff'"
                  />
                </div>
              </div>
            </div>
          </div>
          <Modal />
        </div>

          <!-- middle -->
          <div class="lg:px-[20%]">
            <div class=" bg-dark-100">
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 xxl:gap-16 px-5 lg:px-10 py-10 xxl:py-10">
                <div v-for="video in data.content.videos" :key="video.id">
                  <Card :videoId="video.id" :title="video.title" :desc="video.description" :posted="'null'" :tags="video.Tags" :isWatched="video.userSpecifics.isCompleted"/>
                </div>
              </div>
            </div>
          </div>

        <!-- rightsidebar -->
        <Resources @toggle="toggleSidebar" :class="position" />
      </div>
    </section>
    <section v-else>
      Loading
    </section>
  </body>
</template>

<script>
import Modal from "@/components/modal.vue";
import Resources from "@/components/Resources.vue";
import Leftsidebar from "@/components/Leftsidebar.vue";
import Card from "@/components/Card.vue";
import PaperIcon from "@/components/icons/paperIcon.vue";
import LeftArrowIcon from "@/components/icons/leftArrowIcon.vue";

export default {
  data() {
    return {
      position: "-right-full",
      data : null
    };
  },
  components: { Modal, Resources, Leftsidebar, Card, PaperIcon, LeftArrowIcon },
  methods: {
    toggleSidebar() {
      this.position =
        this.position === "-right-full" ? "right-0" : "-right-full";
    },
  },
  mounted() {
    const levelNumber = this.$route.params.levelNumber;
    this.$engine.contentService.getSpecificLevel(levelNumber, (data) => {
      this.data = data;
    })
  }
};
</script>
