<template>
  <div class="my-auto">
    <svg id="Iconly_Light-Outline_Search" data-name="Iconly/Light-Outline/Search" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 20.265 20.722">
      <g id="Search" transform="translate(0 0)">
        <path id="Combined_Shape" data-name="Combined Shape" d="M18.985,20.5l-3.169-3.16a9.755,9.755,0,1,1,1.1-1.026l3.132,3.124a.75.75,0,0,1-1.06,1.062ZM1.5,9.738A8.238,8.238,0,1,0,9.739,1.5,8.247,8.247,0,0,0,1.5,9.738Z" transform="translate(0 0)" :fill="color"/>
      </g>
    </svg>

  </div>
</template>

<script>
export default {
  name: "searchIcon",
  props: {
    color: String,
    size: Number,
  },
};
</script>
