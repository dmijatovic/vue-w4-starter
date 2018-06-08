<template>
<section class="app-body">
  <div>
    <!--<h1>Home page</h1>-->
    <under-construction></under-construction>
  </div>
  <app-loader
    :type="''">
  </app-loader>
</section>
</template>

<script>
export default {

}
</script>
<style lang="scss">
.app-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.app-loader{
  display: block;
}
</style>
