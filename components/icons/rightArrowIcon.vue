<template>
  <div class="my-auto">
    <svg
      id="Iconly_Light-Outline_Arrow_-_Right"
      data-name="Iconly/Light-Outline/Arrow - Right"
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size - 3"
      viewBox="0 0 16.5 13.549"
    >
      <g
        id="Arrow_-_Right"
        data-name="Arrow - Right"
        transform="translate(0 13.549) rotate(-90)"
      >
        <path
          id="Combined_Shape"
          data-name="Combined Shape"
          d="M6.462,16.432a.75.75,0,0,1-.223-.157L.219,10.229A.75.75,0,0,1,1.2,9.1l.084.073,4.743,4.762V.75a.75.75,0,0,1,1.493-.1l.007.1V13.934l4.743-4.763a.75.75,0,0,1,1.135.974l-.072.085-6.025,6.05a.749.749,0,0,1-.844.152Z"
          transform="translate(0)"
          :fill="color"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "rightArrowIcon",
  props: {
    color: String,
    size: Number,
  },
};
</script>
