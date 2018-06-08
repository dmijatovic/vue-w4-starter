<template>
<!--
  CSS loaders based on 
  https://github.com/ConnorAtherton/loaders.css
  demo: https://connoratherton.com/loaders

  appLoader is registered as global component in the main file
  use <app-loader :type="cssClass"></app-loader>
-->
<div class="app-loader">
  <!-- ALL TYPES within app-loader div -->
  <div v-if="type.toLowerCase()=='ball-pulse'" 
    class="ball-pulse">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-grid-pulse'"
    class="ball-grid-pulse">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-clip-rotate'"
    class="ball-clip-rotate">
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-clip-rotate-pulse'"
    class="ball-clip-rotate-pulse">
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='square-spin'"
    class="square-spin">
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-clip-rotate-multiple'"
    class="ball-clip-rotate-multiple">
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-pulse-rise'"
    class="ball-pulse-rise">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-rotate'"
    class="ball-rotate">
    <div></div>
  </div>
  
  <div v-else-if="type.toLowerCase()=='cube-transition'"
    class="cube-transition">
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-zig-zag'"
    class="ball-zig-zag">
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-triangle-path'"
    class="ball-triangle-path">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-scale'"
    class="ball-scale">
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='line-scale'"
    class="line-scale">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-scale-multiple'"
    class="ball-scale-multiple">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-pulse-sync'"
    class="ball-pulse-sync">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-beat'"
    class="ball-beat">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div v-else-if="type.toLowerCase()=='ball-spin-fade-loader'" 
    class="ball-spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

  <div v-else-if="type.toLowerCase()=='line-spin-fade-loader'" 
    class="line-spin-fade-loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <!-- deafult IS PACKMEN -->
  <div v-else class="pacman">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

</div>
</template>
<script>
export default {
  props:{
    type:String
  }
}
</script>
<style lang="scss">
@import '../styles/loaders';
</style>
