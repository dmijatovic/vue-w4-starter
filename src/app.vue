<template>
  <section class="app-page">    
    <app-header></app-header>

    <h1>It works!</h1>
    
    <router-view></router-view>
    
    <app-footer></app-footer>
  </section>  
</template>

<script>
import appHeader from './layout/appHeader.vue';
import appFooter from './layout/appFooter.vue';

export default {
  components:{
    'app-header': appHeader,
    'app-footer': appFooter 
  }
}
</script>

<style lang="scss" scoped>

//@import './styles/app';
//@import './app';

</style>
