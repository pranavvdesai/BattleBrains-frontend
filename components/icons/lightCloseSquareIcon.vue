<template>
  <div class="my-auto">
    <svg
      id="Iconly_Light-Outline_Close_Square"
      data-name="Iconly/Light-Outline/Close Square"
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 20 20"
    >
      <g id="Close_Square" data-name="Close Square">
        <path
          id="Combined_Shape"
          data-name="Combined Shape"
          d="M5.665,20C2.276,20,0,17.623,0,14.084V5.916C0,2.377,2.276,0,5.665,0h8.67C17.723,0,20,2.377,20,5.916v8.168C20,17.623,17.723,20,14.333,20ZM1.5,5.916v8.168c0,2.683,1.634,4.416,4.164,4.416h8.669c2.532,0,4.167-1.733,4.167-4.416V5.916c0-2.682-1.635-4.415-4.166-4.415H5.665C3.135,1.5,1.5,3.234,1.5,5.916Zm10.366,7L10,11.051,8.132,12.917a.75.75,0,0,1-1.06-1.06L8.938,9.991,7.07,8.123a.75.75,0,0,1,1.06-1.06L10,8.931l1.866-1.866a.749.749,0,1,1,1.06,1.059L11.058,9.991l1.868,1.869a.75.75,0,1,1-1.06,1.06Z"
          :fill="color"
        />
      </g> 
    </svg>
  </div>
</template>

<script>
export default {
  name: "lightCloseSquareIcon",
  props: {
    color: String,
    size: Number,
  },
};
</script>
