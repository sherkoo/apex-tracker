<template lang="html">
  <header>
    <router-link :to="{ name: 'home', params: {} }"><img :src="image" width="500"></router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      image: require('@/assets/apex-logo.png')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
