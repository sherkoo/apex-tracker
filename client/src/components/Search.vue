<template lang="html">
  <section>
    <h1>Track Player Stats</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select id="platform" name="platform" v-model="platform">
          <option value="psn">Playstation</option>
          <option value="xbl">XBOX Live</option>
          <option value="Origin">Origin</option>
        </select>
        <br>
        <br>
        <input v-model="gamertag" id="gamertag" type="text" name="text" placeholder="origin id, xbox live name">
        <input type="submit" value="submit">
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data(){
    return{
      platform: "psn",
      gamertag: ""
    }
  },
  beforeCreate(){
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit(){
      if(!this.gamertag){
        console.log('gamertag not found');
      } else {
        // console.log('redirect');
        this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
      }
    }
  }
}
</script>

<style scoped>
</style>
