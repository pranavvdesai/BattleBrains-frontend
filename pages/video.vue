<template>

  <body class="bg-dark-200">
    <section class="h-screen">
      <!-- leftsidebar -->
      <Leftsidebar />

      <div class="flex flex-col">

        <!-- middle -->
        <div class="xl:mx-80 lg:mx-64 md:mx-60">
          <div class=" bg-dark-200 text-gray h-screen">

            <div class="xl:mx-20 lg:mx-7 mx-6 bg-dark-200 ">

              <div class="hidden md:block">
                <div class="flex justify-between py-4 ">
                  <div class="flex items-center ">
                    <img
                      src="@/assets/images/ArrowLeft.png"
                      alt="Left Arrow"
                      class="mr-4 w-4 h-4"
                    >
                    <p class=" text-sm text-gray font-josefin">Back</p>
                  </div>
                  <div class="flex items-center">
                    <p class=" text-sm text-gray font-josefin">Next</p>
                    <img
                      src="@/assets/images/ArrowRight.png"
                      alt="Right Arrow"
                      class="ml-4 w-4 h-4"
                    >
                  </div>
                </div>
              </div>

              <div class="md:hidden">
                <div class="flex justify-between py-6 ">
                  <div class="flex items-center ">
                    <img
                      src="@/assets/images/ArrowLeft.png"
                      alt="Left Arrow"
                      class="mr-4 w-4 h-4"
                    >
                    <p class=" text-base font-bold text-white font-mont">BattleBrainz</p>
                  </div>
                  <div class="flex items-center">
                    <img
                      src="@/assets/images/info.png"
                      alt="info"
                      class="ml-4 w-4 h-4"
                      @click="toggleModal"
                    > <img
                      src="@/assets/images/boldpaper.png"
                      alt="paper"
                      class="ml-4 w-4 h-4"
                      @click="toggleSidebar"
                    >
                  </div>
                </div>
              </div>

              <iframe
                class="w-full xl:h-128 lg:h-96 md:h-80 h-80"
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
                <img
                  src="@/assets/images/heart.png"
                  alt="Right Arrow"
                  class="w-4 h-4 "
                >
              </div>

              <p class=" text-base font-josefin">The Web3 Academy with everything for everyone. Discover, Learn and Make friends!</p>
              <div class="flex">
                <span class="mr-2 text-blue-normal">DEFI</span>
                <span class="mr-2 text-pink">NFTs</span>
                <span class="mr-2 text-yellow">PFP</span>
              </div>
              <p class=" text-sm font-mont pb-2">1 month ago</p>
            </div>
          </div>
        </div>
      </div>

      <!-- rightsidebar -->
      <Resources
        @toggle="toggleSidebar"
        :class="position"
      />

      <!-- bottomnav -->
      <div
        :class="{hidden : hidden}"
        class="  fixed bg-dark-600 shadow-lg bottom-0 left-0 w-full md:hidden"
      >
        <Modal />
      </div>

    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      position: "-right-80",
      hidden: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.position = this.position === "-right-80" ? "right-0" : "-right-80";
    },
    toggleModal() {
      this.hidden = !this.hidden;
    },
  },
};
</script>