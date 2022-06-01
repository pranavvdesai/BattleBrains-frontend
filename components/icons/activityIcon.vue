<template>
  <div class="my-auto">
    <svg
      id="Iconly_Light-Outline_Activity"
      data-name="Iconly/Light-Outline/Activity"
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 20.64 20.703"
    >
      <g id="Activity" transform="translate(0 0)">
        <path
          id="Combined_Shape"
          data-name="Combined Shape"
          d="M5.629,20.7C2.262,20.7,0,18.338,0,14.819V6.737C0,3.211,2.262.842,5.629.842H12.9a.75.75,0,0,1,0,1.5H5.629C3.121,2.342,1.5,4.066,1.5,6.737v8.082c0,2.7,1.581,4.385,4.128,4.385h8.6c2.508,0,4.129-1.721,4.129-4.385V7.779a.75.75,0,0,1,1.5,0v7.04c0,3.52-2.262,5.884-5.63,5.884Zm-.869-6.854A.751.751,0,0,1,4.622,12.8L7.616,8.906a.746.746,0,0,1,.5-.286.735.735,0,0,1,.557.155l2.82,2.215,2.468-3.183a.75.75,0,1,1,1.185.918L12.217,12.5a.751.751,0,0,1-1.057.131L8.342,10.421,5.811,13.71a.751.751,0,0,1-1.052.139ZM15.3,2.672a2.672,2.672,0,1,1,2.672,2.673A2.675,2.675,0,0,1,15.3,2.672Zm1.5,0A1.172,1.172,0,1,0,17.968,1.5,1.174,1.174,0,0,0,16.8,2.672Z"
          transform="translate(0 0)"
          :fill="color"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "activityIcon",
  props: {
    color: String,
    size: Number,
  },
};
</script>
