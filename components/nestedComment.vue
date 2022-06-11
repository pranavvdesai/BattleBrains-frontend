<template>
  <div class="flex justify-between ml-[5%] mt-[3%]">
    <div class="flex items-center">
      <img
        class="rounded-full w-7 h-7 mr-2 self-start"
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <div class="flex flex-col ml-2">
        <p class="text-sm text-white font-josefin sm:mb-4">
          <span class="font-bold mr-1">Battle Brains</span>
          <span class="mx-1 xs:text-xs sm:text-base">@Battlebrainz</span>
          <span class="text-xs text-gray-500 mx-1 hidden sm:inline-flex">1 month ago</span>
          <AddComment
            :size="18"
            :color="'#B8B8CC'"
            class="mx-1"
          />
        </p>
        <p class="text-sm text-white font-josefin sm:hidden mb-4">
          <span class="text-xs text-gray-500 sm:hidden inline-flex">1 month ago</span>
        </p>
        <p class="text-sm text-dark-600 font-josefin sm:pr-10 xs:pr-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ut nemo debitis recusandae dolor doloremque, facilis natus placeat quisquam sit unde eos nostrum ullam reprehenderit! Labore necessitatibus soluta voluptatum iusto, dignissimos dolorum. Nesciunt eaque voluptas temporibus quisquam corrupti saepe dignissimos, sequi tempora itaque provident nulla rerum non, neque recusandae! Voluptates.
        </p>

      </div>
      <div class="flex self-start">
        <p class=" text-yellow">Like</p>
        <p class="text-white ml-2">16</p>
      </div>
    </div>
  </div>
</template>

<script>
import AddComment from "./icons/addComment.vue";
export default {
  components: { AddComment },
};
</script>