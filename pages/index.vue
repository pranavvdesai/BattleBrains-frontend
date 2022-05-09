<template>
    <section class="h-screen bg-dark-100">
        <div class="flex w-full justify-start p-5">
            <div class="w-1/6 px-5 py-2">
                <img src="@/assets/images/logo-dark_mode.svg" alt="Battlebrains Logo">
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-full md:w-1/2 sm:pb-0 p-20 md:p-32">
                <img src="@/assets/images/khaby.png" alt="Khaby Image">
            </div>
            <div class="w-1/2 m-8 p-32 -translate-x-8 rounded-3xl bg-dark-200">
                <img src="@/assets/images/wagmi.svg" alt="We All Gonna Make It!" class="w-1/2 h-auto mx-auto justify-self-center self-center">
                <p class="text-center mt-5 mb-10 w-full text-dark-500 font-mont text-sm justify-self-center self-center">Maximising the creative idea in Education to defy gravity and matter in Web3.</p>
                <button class="bb-button flex items-center">
                    <img src="@/assets/images/metamask-logo.svg" class="h-8 w-8 mr-2"/> <span>Connect using Metamask</span>
                </button>

                <div class='w-1/2 border-b border-dark-400 text-center justify-self-center mx-auto' style="height: 20px">
                    <span class='bg-dark-200 px-5 text-dark-400 font-mont -translate-y-16'>
                        or
                    </span>
                </div>

                <input type="email" class="bb-input placeholder:text-center" placeholder="Email"/>
                <button class="bb-button-blue hover:bg-green-700">
                    Sign in with Email
                </button>
            </div>
        </div>
    </section>
</template>