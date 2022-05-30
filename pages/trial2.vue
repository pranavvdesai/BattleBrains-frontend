<template>
  <div class="height-screen">
    <div
      id="left-sidebar"
      class="bg-black"
    > left-sidebar </div>
    <div
      id="right-sidebar"
      class="bg-black"
    > right-sidebar </div>
    <div
      id="content"
      class=" h-full overflow-auto"
    >
      <div class="flex flex-col">
        <!-- nav -->
        <div class="relative bg-dark-600 shadow-lg  fixed top-0 left-0 w-full md:hidden">
          <div class="px-4 pt-4">
            <div class=" flex justify-between items-center h-full">
              <div class="flex items-center">
                <img
                  src="@/assets/images/ArrowLeft.svg"
                  alt="Left Arrow"
                  class="mr-4 w-4 h-4"
                >
                <h1 class="text-white text-lg font-extrabold font-mont">
                  Why Web3?
                </h1>
              </div>
              <div class="flex items-center">
                <img
                  @click="toggleSidebar"
                  src="@/assets/images/paper.svg"
                  alt="Paper"
                  class="w-3 h-4 "
                >
              </div>
            </div>
          </div>
          <!-- <Modal @toggle="toggleSidebar" /> -->
          <Modal />
        </div>

        <!-- middle -->
        <div class="">
          <div class=" bg-dark-200">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 p-10">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
body {
  margin: 0;
  padding: 0 20% 0 20%;
}
div#left-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
}
div#right-sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
}
@media screen {
  body > div#left-sidebar {
    position: fixed;
  }
  body > div#right-sidebar {
    position: fixed;
  }
}
* html body {
  overflow: hidden;
}
* html div#content {
  height: 100%;
  overflow: auto;
}
html,
body,
#__nuxt,
#__layout,
div#content {
  height: 100% !important;
  width: 100% !important;
}
</style>