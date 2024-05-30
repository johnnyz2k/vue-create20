<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="showFunction">Click me to show function</button>
  </div>
</template>
<script>
  export default {
    name:"about",
    methods:{
      showFunction(){
        alert("You clicked me.")
        this.$api.get('linkToServer')
      }
    }
  }
</script>
