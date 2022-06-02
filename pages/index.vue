<template>
  <section class="page">
    <div class="page_div">

      <div class="khaby_div">
        <div class="py-10 justify-center flex lg:justify-between">
          <img src="@/assets/images/logo-dark_mode.svg" class="w-1/2 h-auto lg:w-1/3" alt="Khaby Image"/>
        </div>
        <img src="@/assets/images/khaby.png" class="khaby_image"/>
      </div>

      <div class="flex-1 flex flex-col justify-center pb-10 lg:py-10 px-1 md:px-10">
        <div class="login h-full">
          <img src="@/assets/images/wagmi.svg" alt="wagmi" class="wagmi">
          <p class="text">Maximising the creative idea in Education to defy gravity and matter in Web3.</p>
          <button class="metamask_login">
            Connect using Metamask
          </button>

          <div class='w-1/2 border-b border-dark-400 text-center justify-self-center mx-auto xs:hidden my-5 md:block' style="height: 15px">
              <span class='bg-dark-200 px-5 text-dark-400 font-mont text-sm'>
                  or
              </span>
          </div>

          <input
            type="email"
            class="email_input"
            placeholder="Enter email"
          />
          <button class="email_login hover:bg-green-700">
            Sign in with Email
          </button>
          <div class="contact mt-16">
          <div class="icons flex space-x-4 justify-center">
            <img src="@/assets/images/discord.png" class="discord" alt="discord">
            <img src="@/assets/images/instagram.png" class="instagram" alt="instagram">
            <img src="@/assets/images/linkedin.png" class="linkedin" alt="linkedin">
            <img src="@/assets/images/twitter.png" class="twitter" alt="twitter">
          </div>
          <div class="cc">BattleBrains &#169; All Rights Reserved.</div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
