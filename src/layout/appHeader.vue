<template>
  <header class="app-header container">    
    <div class="app-header-left">
      <img class="app-logo"
        :src="appLogo" alt="app logo" />

      <div class="app-title">
        <h1>{{ appTitle }}</h1>    
        <h4>{{ appSubtitle }}</h4>    
      </div>    
    </div>    
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
import { appCfg } from '../appCfg';
export default {
  
  data(){
    return {
      appTitle: appCfg.appTitle,
      appSubtitle: appCfg.appSubtitle,
      appLogo: appCfg.appLogo
    }
  },
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
@import './appHeader'
</style>
