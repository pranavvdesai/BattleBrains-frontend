<template>
  <div class="fixed top-0 togglebar p-3 overflow-auto" :class="`${active ? 'show' : ''}`">
     <div class="flex flex-row justify-between mt-5">
       <div class="inner flex flex-col">
           <h3 class="greeting text-lg"><b>Hi Dev, Good Evening!</b></h3>
           <p class="learn text-sm">Learn Web3,the Fun way</p>
       </div>
       <img class="close" src="@/assets/images/Iconly-Light-Outline-Close Square.svg" alt="close" height="25px" weight="25px" @click="close"/>
     </div>
       <div class="xp_info flex flex-col items-center mt-12">
              <div class="img_border flex justify-center items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbpKeeGDLuC0SW1RvHziiFoQjVKIZo3EoOA&usqp=CAU" alt="profile" class="pr_img" />
              </div>
              <h4 class="name"><b>Novice</b></h4>
              <p class="xp">1400/2000 XPs</p>
          </div>
  </div>
</template>

<script>
  export default{
    props : {
      toggle : {
        type : Function
      },
      active: {
        type : Boolean
      }
    },
    methods:{
       close(){
         this.$emit('toggle');
       }
    }
  }
</script>

<style>
  .togglebar{
      height: 100%;
      width: 80%;
      background-color: #3d3d3d;
      z-index: 10;
      position: fixed;
      left: -80%;
      transition: 0.5s ease-in-out;
  }
  .greeting,.learn{
    color: white;
  }
  .close{
    filter: invert(1);
  }
  .show{
    left: 0%;
  }
</style>