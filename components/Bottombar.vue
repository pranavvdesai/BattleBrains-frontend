<template>
    <!-- Mobile View -->
  <div class="bottombar justify-around items-center bg-dark-100 fixed bottom-0">
      <NuxtLink to="/home" class="flex p-2">
             <img src="@/assets/images/Iconly-Bold-Home.svg" class="img" height="15px" width="15px"/>
          </NuxtLink>
            <NuxtLink to="/about" class="flex p-2">
             <img src="@/assets/images/Iconly-Bold-Activity.svg" class="img" height="15px" width="15px"/>
          </NuxtLink>
            <NuxtLink to="/" class="flex p-2">
             <img src="@/assets/images/Iconly-Bold-Calendar.svg" class="img" height="15px" width="15px"/>
          </NuxtLink>
            <NuxtLink to="/" class=" flex p-2">
             <img src="@/assets/images/Iconly-Bold-Info Square.svg" class="img" height="15px" width="15px"/>
          </NuxtLink>
  </div>
</template>

<style>
   .bottombar{
    display: none;
  }
    @media(max-width: 1024px){
    .bottombar{
      display: flex;
      width: 100%;
      height: 8vh;
    }
  }
</style>