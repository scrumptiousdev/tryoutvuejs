<template>
  <div id="app">
    <ul>
      <li v-for="skill in skills">{{ skill.body }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data() {
    return {
      skills: []
    };
  },
  mounted() {
    axios.get('/src/assets/data.json').then(res => this.skills = res.data);
  }
}
</script>

<style lang="scss">

</style>
