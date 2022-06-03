<template>
  <section class="bg-dark-200 h-screen">
    <Leftsidebar />
    <div class="flex justify-end">
      <div class="header flex flex-col mr-10 mt-3 w-3/4 lg:w-[80%]">
        <div class="text-2xl md:text-4xl lg:text-5xl text-white font-bold">
          What Is Web 3.0 & Why It Matters
        </div>
        <div class="flex mt-4 font-medium">
          <div class="mr-4 text-[#01E3FF]">INTRODUCTION</div>
          <div class="mr-4 text-[#FF01EC]">BLOCKCHAIN</div>
        </div>
        <div class="flex mt-2 text-[#94A3B8] font-medium text-sm">
          <div class="mr-3">Dec 31, 2019</div>
          <div class="mr-3 font-black">.</div>
          <div class="mr-3">7mins</div>
        </div>
        <div class="text-white mt-6">
          <div class="flex justify-center">
            <img
              class="w-3/5 h-1/3"
              src="https://imgs.search.brave.com/U4XbX-OnZ650_zYGCFeKLc_-LDbHSGx2GqWxvk6BB5w/rs:fit:772:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/T0xueVFReWtIUnda/YVdxMkZnQ19BSGFF/aiZwaWQ9QXBp"
              alt=""
            />
          </div>
          <div class="text-white mt-4">
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
            Sed sint expedita ratione repellendus facere repellat eveniet rerum
            perferendis, autem omnis quasi placeat illo quibusdam.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { marked } from "marked";
import Leftsidebar from "../components/leftsidebar.vue";

export default {
  data() {
    return {
      markdown: "",
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
  components: { Leftsidebar },
};
</script>
