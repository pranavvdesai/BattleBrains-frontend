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
            <span class="font-bold mr-1">{{name}}</span>
            <span class="mx-1 xs:text-xs sm:text-base">{{uname}}</span>
            <span class="text-xs text-gray-500 mx-1 hidden sm:inline-flex">{{time}}</span>
            <AddComment
              :size="18"
              :color="'#B8B8CC'"
              class="mx-1"
            />
          </p>
          <p class="text-sm text-white font-josefin sm:hidden mb-4">
            <span class="text-xs text-gray-500 sm:hidden inline-flex">{{time}}</span>
          </p>
          <p class="text-sm text-dark-600 font-josefin sm:pr-10 xs:pr-3">
            {{comment}}
          </p>

        </div>
        <div class="flex self-start">
          <p class=" text-yellow">Like</p>
          <p class="text-white ml-2">16</p>
        </div>
      </div>
    </div>
    <div v-if="replies.length>0">
      <div v-for="reply in replies">
        <NestedComment
          :name="reply.name"
          :uname="reply.uname"
          :comment="reply.comment"
          :time="reply.time"
        />
      </div>
    </div>
  </div>

</template>

<script>
import NestedComment from "./nestedComment.vue";
import AddComment from "./icons/addComment.vue";

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
  },
};
</script>