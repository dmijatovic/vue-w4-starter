<template>
  <svg 
    :class="cssClass">
    <use :xlink:href="xlink_href"></use>
  </svg>
</template>
<script>
//import svg sprite file location
import { appCfg as cfg } from '../appCfg';
export default {
  props:{
    svgIco:String,
    cssClass:String  
  },
  computed:{
    /**
     * compute xlink based on svg sprite file and icon id
     * note! xlink will add # for id reference in href
     */
    xlink_href (){
      let href = `${ cfg.svg.iconFile }#${ this.svgIco }`;
      return href;
    } 
  }
}
</script>
<style></style>
