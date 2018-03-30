<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data () {
    return  {
      msg: 'i ma here'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.container {
  margin-top: 2%
}
</style>
