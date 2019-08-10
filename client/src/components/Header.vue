<template lang="html">
  <header>
    <router-link :to="{ name: 'home', params: {} }"><img :src="image"></router-link>
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
