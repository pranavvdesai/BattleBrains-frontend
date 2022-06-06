<template>
  <body class="bg-dark-100">
    <section class="">
      <Leftsidebar />
      <div class="flex lg:justify-end">
        <div
          class="header flex flex-col mt-3 w-[87%] lg:w-[80%] lg:ml-0 ml-8 sm:ml-10 md:ml-14"
        >
          <div class="lg:hidden">
            <div class="flex justify-between py-6">
              <div class="flex items-center">
                <LeftArrowIcon class="mr-2" :size="16" :color="'#fff'" />
                <p class="text-base font-bold text-white font-mont">
                  Why Web3?
                </p>
              </div>
              <div class="flex items-center">
                <div @click="toggleModal">
                  <InfoIcon class="mr-4" :size="20" :color="'#B8B8CC'" />
                </div>
              </div>
            </div>
          </div>

          <div
            class="text-4xl md:text-5xl lg:text-6xl text-white font-bold lg:mx-10"
          >
            What Is Web 3.0 & Why It Matters?
          </div>
          <div class="flex mt-4 font-medium lg:mx-10">
            <div class="mr-4 text-[#01E3FF]">INTRODUCTION</div>
            <div class="mr-4 text-[#FF01EC]">BLOCKCHAIN</div>
          </div>
          <div class="flex mt-2 text-[#94A3B8] font-medium text-sm lg:mx-10">
            <div class="mr-3">Dec 31, 2019</div>
            <div class="mr-3 font-black">.</div>
            <div class="mr-3">7mins</div>
          </div>
          <div class="text-white mt-6">
            <div class="flex justify-center">
              <img
                class="w-[85%] h-[45%] lg:w-[50%] lg:h-[30%]"
                src="https://imgs.search.brave.com/U4XbX-OnZ650_zYGCFeKLc_-LDbHSGx2GqWxvk6BB5w/rs:fit:772:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/T0xueVFReWtIUnda/YVdxMkZnQ19BSGFF/aiZwaWQ9QXBp"
                alt=""
              />
            </div>
            <div class="text-white mx-2 lg:mx-10 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolores laboriosam accusamus vel, possimus quaerat voluptatem aut
              architecto omnis quasi laborum, quod atque? Eos corrupti facilis
              porro exercitationem ex! Possimus labore fugiat nobis unde,
              veritatis ratione eos expedita qui? Nisi nemo nesciunt pariatur
              molestiae eaque temporibus repellat quae laboriosam, est possimus
              esse delectus voluptas voluptate quisquam ipsum reiciendis cum
              cupiditate voluptatem consequuntur facilis iste aspernatur sunt
              sequi placeat! Porro consectetur expedita nostrum ipsa facere
              dolores eaque enim natus, quam maiores voluptas ratione provident.
              Sed sint expedita ratione repellendus facere repellat eveniet
              rerum perferendis, autem omnis quasi placeat illo quibusdam.
            </div>
          </div>
        </div>
      </div>

      <!-- bottomnav -->
      <div
        :class="{ hidden: hidden }"
        class="fixed bg-dark-300 shadow-lg bottom-0 left-0 w-full lg:hidden"
      >
        <Modal />
      </div>
    </section>
  </body>
</template>

<script>
import { marked } from "marked";
import Leftsidebar from "../components/leftsidebar.vue";
import LeftArrowIcon from "../components/icons/leftArrowIcon.vue";
import InfoIcon from "../components/icons/infoIcon.vue";
import Modal from "../components/modal.vue";

export default {
  data() {
    return {
      markdown: "",
      hidden: true,
    };
  },
  computed: {
    markdownToHTML() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
      });
      return marked(this.markdown);
    },
  },
  methods: {
    toggleModal() {
      this.hidden = !this.hidden;
    },
  },
  components: { Leftsidebar, LeftArrowIcon, InfoIcon, Modal },
};
</script>
