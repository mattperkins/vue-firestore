<template>
   <div id="newUser">
    <h3>{{masthead}}</h3>
   </div>
</template>

<script>
    export default {
        name: 'NewUser',
        data () {
            return {
                masthead : 'New User'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
