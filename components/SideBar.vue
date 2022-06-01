<template>
  <div>
    <!-- Desktop View -->
    <div class="fixed top-0 flex flex-col items-center leftbar">
      <img
        src="@/assets/images/logo-dark_mode.svg"
        class="lg:w-1/2 mt-7"
        alt="logo"
      />
      <div class="flex flex-col w-1/2 mt-9 mb-9">
        <NuxtLink to="/home" class="link flex p-2">
          <img
            src="@/assets/images/Iconly-Bold-Home.svg"
            class="img"
            height="15px"
            width="15px"
          />
          <h3 class="ml-3 link_content"><b>Home</b></h3>
        </NuxtLink>
        <NuxtLink to="/about" class="link flex p-2 mt-3">
          <img
            src="@/assets/images/Iconly-Bold-Activity.svg"
            class="img"
            height="15px"
            width="15px"
          />
          <h3 class="ml-3 link_content"><b>My Activity</b></h3>
        </NuxtLink>
        <NuxtLink to="/" class="link flex p-2 mt-3">
          <img
            src="@/assets/images/Iconly-Bold-Calendar.svg"
            class="img"
            height="15px"
            width="15px"
          />
          <h3 class="ml-3 link_content"><b>Release</b></h3>
        </NuxtLink>
        <NuxtLink to="/" class="link flex p-2 mt-3">
          <img
            src="@/assets/images/Iconly-Bold-Info Square.svg"
            class="img"
            height="15px"
            width="15px"
          />
          <h3 class="ml-3 link_content"><b>Support</b></h3>
        </NuxtLink>
      </div>
      <div class="xp_info flex flex-col items-center mt-12">
        <div class="img_border flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbpKeeGDLuC0SW1RvHziiFoQjVKIZo3EoOA&usqp=CAU"
            alt="profile"
            class="pr_img"
          />
        </div>
        <h4 class="name"><b>Novice</b></h4>
        <p class="xp">1400/2000 XPs</p>
      </div>
    </div>
  </div>
</template>

<style>
.leftbar {
  width: 20%;
  background-color: #3d3d3d;
  height: 100%;
}
.link {
  background-color: #3d3d3d;
  border-radius: 5px;
}
.link_content {
  color: grey;
}
.img {
  filter: invert(0.5);
}
.link:hover {
  background-color: #8395a7;
}
.link:hover .link_content {
  color: white;
}
.link:hover .img {
  filter: invert(1);
}
a.nuxt-link-exact-active {
  background-color: #8395a7;
}
a.nuxt-link-exact-active .link_content {
  color: white;
}
a.nuxt-link-exact-active .img {
  filter: invert(1);
}

.pr_img {
  height: 95%;
  width: 95%;
  border-radius: 50%;
}
.img_border {
  border-right: 3px solid dodgerblue;
  border-bottom: 3px solid dodgerblue;
  height: 175px;
  width: 175px;
  border-radius: 50%;
}
.name,
.xp {
  margin-top: 3px;
  color: white;
}
@media (max-width: 1024px) {
  .leftbar {
    display: none;
  }
  a.nuxt-link-exact-active {
    background-color: transparent;
  }
}
</style>
