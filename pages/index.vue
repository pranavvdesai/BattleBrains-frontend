<template>
  <section class="page">
    <div class="page_div">

      <div class="khaby_div">
        <div class="py-10 justify-center flex lg:justify-between">
          <img src="@/assets/images/logo-dark_mode.svg" class="w-1/2 h-auto lg:w-1/3" alt="Khaby Image"/>
        </div>
        <img src="@/assets/images/khaby.png" class="khaby_image"/>
      </div>

      <div class="flex-1 flex justify-center mb-10 lg:my-10">
        <div class="login">
          <img src="@/assets/images/wagmi.svg" alt="wagmi" class="wagmi">
          <p class="text">Maximising the creative idea in Education to defy gravity and matter in Web3.</p>
          <button class="metamask_login">
            Connect using Metamask
          </button>

          <div class='w-1/2 border-b border-dark-400 text-center justify-self-center mx-auto' style="height: 20px">
              <span class='bg-dark-200 px-5 text-dark-400 font-mont'>
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
        </div>
      </div>
    </div>
  </section>
</template>
