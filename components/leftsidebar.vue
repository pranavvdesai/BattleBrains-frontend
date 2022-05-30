<template>
  <div class="h-screen fixed top-0 hidden md:block md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-dark-100 xl:w-80 lg:w-64 md:w-60 z-10 py-4 px-2 transition-all duration-300">
    <div class="xl:mx-5 lg:mx-1">
      <div class="flex mt-4">
        <img
          src="@/assets/images/ArrowLeft.png"
          alt="Left Arrow"
          class="mr-4 w-4 h-4 mt-2"
        >
        <p class=" text-xl text-gray">back</p>
      </div>
      <h1 class="text-white xl:text-3xl lg:text-2xl md:text-xl font-extrabold mt-16 font-mont">
        Why Web3?
      </h1>
      <div class="flex flex-col lg:flex-row mt-4">
        <h2 class="text-blue-normal mr-2 xl:text-lg lg:text-sm font-josefin pb-1 lg:pb-0">INTRODUCTION</h2>
        <h2 class="text-pink xl:text-lg lg:text-sm font-josefin">BLOCKCHAIN</h2>
      </div>
      <p class="mt-8 text-lg text-gray font-josefin">A blockchain is a digitally distributed, decentralized, public ledger that exists across a network...</p>
      <div class="flex items-center">
        <h1 class="text-white mt-6 mb-6 mr-3">2/4 videos</h1>
        <div class="w-1/2 bg-white rounded-lg">
          <div class="bg-blue-normal w-1/2 h-3 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 mb-5 w-full">
      <div class="flex border-2 border-gray mx-8 rounded-md justify-between p-3">
        <p class="text-gray">Test Yourself</p>
        <img
          src="@/assets/images/paper.png"
          alt="Paper"
          class="w-3 h-4 mt-1"
        >
      </div>
    </div>

  </div>
</template>