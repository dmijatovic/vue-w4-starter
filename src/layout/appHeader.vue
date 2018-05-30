<template>
  <header class="app-header">
    <h1>This is app header</h1>    
    <nav class="main-menu">
      <ul>
        <router-link v-for="item in mnuItems"
          :to="item.path" 
          tag="li" class="menu-item" active-class="active"
          :key="item.path" exact>
          <i :class="item.faIco"></i> {{item.label}}
        </router-link>
      </ul>
      
    </nav>
  </header>
</template>

<script>
import { routes } from '../routes';
export default {
  /*
  data(){
    return {
      mnuItems: routes.map( item => item.mnuItem)
    }
  }*/
  computed:{
    mnuItems(){
      let menu = [];
      routes.map((item)=>{
        if(item.mnuItem){
          menu.push({
            path: item.path,
            ...item.mnuItem
          });
        }
      })
      return menu;
    }
  }
}
</script>

<style lang="scss">
//import variables 
@import '../styles/variables';

.app-header{
  display: flex;
  align-items:  center;
  justify-content: space-between;
  padding: $space-sm $space-xl;
  background-color: $header-bg-color;
  border-bottom: 1px solid $accent-color;
  box-shadow: $box-shadow-xs;
  h1{
    color: $dark-grey;
  }
}
</style>
