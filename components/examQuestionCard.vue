<template>
  <div
    class="flex flex-col hover:shadow-[0_0_30px_5px_rgba(0,0,0,1)] bg-dark-100 xs:px-6 lg:px-10 py-4 rounded-xl my-6">
    <div class="text-dark-500 font-bold text-base">Question {{ qNo }}</div>
    <div class="text-white text-2xl font-bold my-4">
      {{ question }}
    </div>
    <div class="flex flex-col text-dark-600 text-lg lg:w-[90%]">
      <div v-for='data in optionsArray' :key='data.val'>
        <div class="mb-4">
          <input type="radio" :id="data.val" :value="data.val" class="mr-3" v-model="answer" />
          <label :for="data.val">
            {{ data.option }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: null,
    }
  },
  props: {
    qNo: {
      type: Number,
    },
    isAttempted: {
      type: Boolean
    },
    question: {
      type: String
    },
    optionsArray: {
      type: Array,
      option: {
        type: String
      },
      val: {
        type: Number
      }
    },
    answer: {
      type: Boolean
    }
  },
}
</script>
