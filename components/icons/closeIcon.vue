<template>
  <div class="my-auto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 18.352 18.175"
    >
      <path
        id="Combined_Shape"
        data-name="Combined Shape"
        d="M19.6,22.283,14.85,17.535l-4.742,4.741a1.9,1.9,0,0,1-2.694-2.694l4.742-4.74L7.409,10.094A1.905,1.905,0,1,1,10.1,7.4l4.748,4.748,4.743-4.741A1.9,1.9,0,0,1,22.288,10.1l-4.743,4.742,4.748,4.748A1.905,1.905,0,1,1,19.6,22.283Z"
        transform="translate(-5.675 -5.668)"
        fill="#b8b8cc"
        stroke="#262633"
        stroke-width="2"
        :fill="color"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "closeIcon",
  props: {
    color: String,
    size: Number,
  },
};
</script>
