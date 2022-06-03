<template>
  <svg
    id="Iconly_Bold_Info_Circle"
    data-name="Iconly/Bold/Info Circle"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
  >
    <g id="Info_Circle" data-name="Info Circle" transform="translate(0 0)">
      <path
        id="Info_Circle-2"
        data-name="Info Circle"
        d="M10,20a10,10,0,1,1,7.074-2.929A10.011,10.011,0,0,1,10,20Zm0-7.069a.871.871,0,0,0-.87.869.875.875,0,1,0,.87-.869Zm0-7.6a.892.892,0,0,0-.88.88v4.42a.875.875,0,0,0,1.751,0V6.21A.876.876,0,0,0,10,5.33Z"
        :fill="color"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "infoIcon",
  props: {
    color: String,
    size: Number,
  },
};
</script>
