<template lang="html">
  <header>
    <img :src="image">
  </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      image: require('@/assets/logo.png')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
