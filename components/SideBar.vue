<template>
<div>
    <!-- Desktop View -->
  <div class="fixed top-0 flex flex-col items-center w-1/5 h-full bg-dark-300">
          <img src="@/assets/images/logo-dark_mode.svg" class="lg:w-1/2 mt-7" alt="logo"/>
          <div class="flex flex-col w-3/4 my-9">
              <NuxtLink to="/home" class="link rounded-lg flex py-4 px-6">
                 <img src="@/assets/images/Iconly-Bold-Home.svg" class="img" height="15px" width="15px"/>
                 <h3 class="ml-3 link_content font-josefin"><b>Home</b></h3>
              </NuxtLink>
                <NuxtLink to="/about" class="link rounded-lg flex py-4 px-6 mt-4">
                 <img src="@/assets/images/Iconly-Bold-Activity.svg" class="img"  height="15px" width="15px"/>
                 <h3 class="ml-3 link_content font-josefin"><b>My Activity</b></h3>
              </NuxtLink>
                <NuxtLink to="/" class="link rounded-lg  flex py-4 px-6 mt-4">
                 <img src="@/assets/images/Iconly-Bold-Calendar.svg" class="img" height="15px" width="15px"/>
                 <h3 class="ml-3 link_content font-josefin"><b>Release</b></h3>
              </NuxtLink>
                <NuxtLink to="/" class="link rounded-lg  flex py-4 px-6 mt-4">
                 <img src="@/assets/images/Iconly-Bold-Info Square.svg" class="img" height="15px" width="15px"/>
                 <h3 class="ml-3 link_content font-josefin"><b>Support</b></h3>
              </NuxtLink>
          </div>
          <div class="xp_info flex flex-col items-center mt-12">
              <div class="img_border flex justify-center items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbpKeeGDLuC0SW1RvHziiFoQjVKIZo3EoOA&usqp=CAU" alt="profile" class="pr_img" />
              </div>
              <h4 class="name"><b>Novice</b></h4>
              <p class="xp">1400/2000 XPs</p>
          </div>
  </div>
</div>
</template>

<style>
   .link{
       background-color: #262633;
   }
    .link_content{
       color: #9898B3;
   }
    .img{
        filter: invert(0.5);
    }
   .link:hover{
       background-color: #1D1D26;
   }
   a.nuxt-link-exact-active{
     background-color: #3A3A4D;
     box-shadow: 0px 0px 10px #1D1D26;
    }
    a.nuxt-link-exact-active .link_content{
       color: white;
   }
   a.nuxt-link-exact-active .img{
       filter: invert(1);
   }

    .pr_img{
        height: 85%;
        width: 85%;
        border-radius: 50%;
    }
    .img_border{
        border-right: 3px solid dodgerblue;
        border-bottom: 3px solid dodgerblue;
        height: 155px;
        width: 155px;
        border-radius: 50%;
    }
    .name,.xp{
        margin-top: 3px;
        color: white;
    }
   @media(max-width: 1024px){
       .leftbar{
          display: none;
       }
        a.nuxt-link-exact-active{
     background-color: transparent;
    }
   }
</style>
