<template>
  <figure class="under-construction">
      <svg-icon
        :svgIco="'icon-home'"
        :cssClass="'under-construction-icon'">
      </svg-icon>
      <figcaption class="under-construction-msg">
        {{ msg }}
      </figcaption>   
    </figure>
</template>

<script>
export default {
  data(){
    return {
      msg: "This page is under construction"
    }
  }
}
</script>

<style lang="scss">
.under-construction{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &-icon{
    width: 50wv;
  }

  &-msg{
    font-size: 4rem;
  }
}
</style>
