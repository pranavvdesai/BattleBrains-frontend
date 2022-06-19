<template>
  <div class="flex justify-between ml-[1%] mt-[3%]">
    <div class="flex items-center">
      <img
        class="rounded-full sm:w-7 sm:h-7 xs:w-6 xs:h-6 mr-2 self-start"
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <div class="flex flex-col ml-2">
        <p class="text-sm text-white font-josefin sm:mb-4">
          <span class="font-bold xs:mr-2 sm:mr-1 font-mont xs:text-sm sm:text-base">{{name}}</span>
          <span class="sm:mx-1 xs:mr-1 xs:text-xs sm:text-base text-blue-100 font-mont">{{uname}}</span>
          <span class="text-xs text-dark-600 mx-1 hidden sm:inline-flex">{{time}}</span>
          <AddComment
            :size="18"
            :color="'#B8B8CC'"
            class="mx-1 hidden sm:inline-flex"
          />
        </p>
        <p class="text-sm text-white font-josefin sm:hidden mb-4">
          <span class="text-xs text-dark-600 sm:hidden inline-flex">{{time}}</span>
          <AddComment
            :size="18"
            :color="'#B8B8CC'"
            class="mx-1"
          />
        </p>
        <p class="text-sm text-dark-600 font-josefin sm:pr-10 xs:pr-2">
          <a
            class='text-white font-bold'
            href=''
          > {{rname}} </a>
          {{comment}}
        </p>

      </div>
      <div class="flex self-start">
        <LikeIcon
          class=""
          :size="16"
          :color="'#B8B8CC'"
        />
        <p class="text-white sm:ml-2 xs:ml-1 xs:text-xs sm:text-base">16</p>
      </div>
    </div>
  </div>
</template>

<script>
import AddComment from "./icons/addComment.vue";
import LikeIcon from "./icons/likeIcon.vue";

export default {
  props: {
    name: {
      type: String,
    },
    uname: {
      type: String,
    },
    comment: {
      type: String,
    },
    time: {
      type: String,
    },
    rname: {
      type: String,
    },
    replies: {
      type: Array,
    },
  },
  components: { AddComment, LikeIcon },
};
</script>