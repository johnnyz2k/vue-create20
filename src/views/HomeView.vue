<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is my first vue project</h1>
    <HomePart></HomePart>
    <h2>This is the home page that can modified randomly </h2>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import HomePart from "@/components/HomePart.vue";
export default {
  components:{
    HomePart
  }


}

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>
