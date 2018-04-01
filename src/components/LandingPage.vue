<template>
<navBar></navBar>
</template>

<script>
import NavBar from './NavBar';
export default {
  name: 'LandingPage',
  components: {
    'navBar': NavBar
  }, 
  data () {
    return {
      products: []
    }
  }
}
</script>
