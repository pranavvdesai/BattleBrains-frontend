<template>
  <div class="my-auto">
    <svg
      id="Iconly_Light-Outline_Info_Square"
      data-name="Iconly/Light-Outline/Info Square"
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 20 20"
    >
      <g id="Info_Square" data-name="Info Square" transform="translate(0)">
        <path
          id="Combined_Shape"
          data-name="Combined Shape"
          d="M5.664,20C2.276,20,0,17.623,0,14.084V5.916C0,2.377,2.276,0,5.664,0h8.671C17.723,0,20,2.377,20,5.916v8.168C20,17.623,17.722,20,14.332,20ZM1.5,5.916v8.168c0,2.683,1.634,4.416,4.163,4.416h8.668c2.533,0,4.169-1.733,4.169-4.416V5.916c0-2.682-1.635-4.415-4.166-4.415H5.664C3.135,1.5,1.5,3.234,1.5,5.916ZM9.244,14V10a.75.75,0,0,1,1.5,0v4a.75.75,0,0,1-1.5,0Zm-.25-7.8a1,1,0,0,1,1-1H10a1,1,0,1,1-1.005,1Z"
          transform="translate(0)"
          :fill="color"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "supportIcon",
  props: {
    color: String,
    size: Number,
  },
};
</script>
