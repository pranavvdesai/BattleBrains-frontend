<template>
  <div class="mt-[2%]">

    <div class="flex justify-between">
      <div class="flex items-center">
        <img
          class="rounded-full w-7 h-7 mr-2 self-start"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <div class="flex flex-col ml-2">
          <p class="text-sm text-white font-josefin sm:mb-4">
            <span class="font-bold mr-1 font-mont">{{name}}</span>
            <span class="mx-1 xs:text-xs sm:text-base text-blue-100 font-mont">{{uname}}</span>
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
          <p class="text-sm text-dark-600 font-josefin sm:pr-10 xs:pr-3">
            {{comment}}
          </p>

        </div>
        <div class="flex self-start">
          <LikeIcon
            class=""
            :size="16"
            :color="'#B8B8CC'"
          />
          <p class="text-white ml-2">16</p>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex items-center">
        <img
          class="rounded-full w-7 h-7 mr-2 self-start invisible "
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <div v-if="replies.length>0">
      <div v-for="reply in replies">
        <NestedComment
          :name="reply.name"
          :uname="reply.uname"
          :comment="reply.comment"
          :time="reply.time"
          :rname="uname"
        />
      </div>
    </div>
      </div>
    </div>

    
  </div>

</template>

<script>
import NestedComment from "./nestedComment.vue";
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
    replies: {
      type: Array,
    },
  },
  components: {
    NestedComment,
    AddComment,
    LikeIcon,
  },
};
</script>