<template>
  <body class="bg-dark-200">
    <div
      class="flex flex-col text-white bg-dark-400 m-5 rounded-lg p-5 text-xl"
    >
      <p class="text-center mb-10 text-3xl">Markdown Previewer</p>
      <div class="flex justify-around">
        <div class="">
          <div>Markdown</div>
          <textarea
            class="rounded-md mt-5 text-dark-200 p-2"
            v-model="markdown"
            cols="30"
            rows="10"
          />
        </div>
        <div class="">
          <div>Preview</div>
          <div class="w-72 h-72 bg-white rounded-md mt-3 text-dark-200">
            {{ markdown }}
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      markdown: "",
    };
  },
};
</script>
