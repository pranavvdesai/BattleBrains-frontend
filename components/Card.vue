<template>
  <div class="flex justify-center">
    <nuxt-link :to="'/videos/'+videoId">
      <div class="rounded-xl hover:shadow-[0_0_30px_5px_rgba(0,0,0,1)] hover:shadow-black bg-dark-100 max-w-sm p-6">
        <img
          class="rounded-t-lg w-full h-44"
          src="@/assets/images/card1.png"
          alt=""
        />
        <div class="mt-3">
          <h5 class="text-white text-lg font-bold font-mont">{{title}}</h5>
          <p class="text-dark-600 text-sm my-1 font-josefin">
          {{desc}}
          </p>
          <div class="flex flex-wrap my-2">
            <div v-for="tag in tags" :key="tag.id">
              <h1 class="mr-2 font-josefin" v-bind:class="(index%3==0 && 'text-blue-300') || (index%3==1 && 'text-pink') || (index%3==2 && 'text-yellow')">{{tag.display}}</h1>
            </div>
          </div>
          <div class="flex mt-3 justify-between">
            <p class="text-dark-500 text-sm font-josefin">{{posted}}</p>
            <input
              type="checkbox"
              class="mt-2"
              v-model="isWatched"
            />
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default{
    props:{
      videoId: {
        type: String
      },
      title : {
        type: String
      },
      desc : {
        type : String
      },
      posted : {
        type : String
      },
      tags:{
        type: Array
      },
      isWatched: {
        type: Boolean
      }
    }
  }
</script>
