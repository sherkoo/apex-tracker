<template lang="html">
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>

    <div class="container">
      <div v-if="profileData">
        <div class="row">
          <img :src="profileData.platformInfo.avatarUrl" width="100" alt="">
          <h1>{{ profileData.platformInfo.platformUserId }}</h1>
        </div>

        <hr>
        <br>
        <br>
        <br>

        <div class="row">
          <div class="col">
            <h5>Recent Legend</h5>
            <h2>{{ profileData.metadata.activeLegendName }}</h2>
            <img :src="profileData.segments[1].metadata.imageUrl" alt="">
          </div>

          <div class="col">
            <div v-if="profileData.segments[0].stats.season2Wins">
              <h2>Stats</h2>
              <h3>Season 2 Wins</h3>
              <h3>{{ profileData.segments[0].stats.season2Wins.displayValue }}</h3>
              <h3>{{ profileData.segments[0].stats.season2Wins.percentile }} %</h3>
            </div>
          </div>
        </div>

        <div v-if="profileData.segments[0].stats.damage">
          <h2>Damage Done</h2>
          <h3>{{ profileData.segments[0].stats.damage.percentile }}</h3>
        </div>
        <div v-else>
          zero
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import axios from "axios";

export default {
  name: 'Profile',
  data(){
    return{
      loading: false,
      error: null,
      profileData: null
    }
  },
  async created(){
    this.loading = true;
    try {
      const res = await axios.get(
        `/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`
      );

      this.profileData = res.data.data;
      console.log(this.profileData);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = err.response.data.message;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
