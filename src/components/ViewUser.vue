<template>
   <div id="viewUser">
   <h3>{{masthead}}</h3>
      <ul>
        <li style="font-size: 1.6rem; color:#333;">
          {{name}}
        </li>
        <li style="font-size: 1.6rem; color:#333;">
          {{position}}
        </li>
        <li style="font-size: 1.6rem; color:#333;">
          {{dept}}
        </li>
        <li style="font-size: 1.6rem; color:#333;">
          {{user_id}}
        </li>
      </ul>    
      <router-link to="/" class="btn black">Home</router-link>
      <button @click="deleteUser" class="btn red">Delete</button>

      <div class="fixed-action-btn">
        <router-link :to="{name: 'EditUser', params: {user_id: user_id}}" class="btn-floating btn-large red">
          <i class="fa fa-pencil"></i>
        </router-link>
      </div>

   </div>
</template>

<script>
  import db from './firebaseInit'
    export default {
        name: 'ViewUser',
        data () {
            return {
                masthead: 'User',
                user_id: null,
                name: null,
                dept: null,
                position: null
            }
        },
        beforeRouteEnter: (to, from, next) =>{
          db.collection('users').where('user_id', '==', to.params.user_id).get().then(snap => {
            snap.forEach(doc => {
              next(vm => {
                vm.user_id = doc.data().user_id
                vm.name = doc.data().name
                vm.dept = doc.data().dept
                vm.position = doc.data().position
              })
            })
          })
        },
        watch: {
          '$route': 'fetchData'
        },
        methods: {
          fetchData () {
            db.collection('users').where('user_id', '==', this.$route.params.user_id).get().then(snap => {
              snap.forEach(doc => {
                this.user_id = doc.data().user_id
                this.position = doc.data().position
                this.dept = doc.data().dept
                this.name = doc.data().name
              })
            })
          },
          deleteUser () {
            if(confirm('Are you sure?')) {
              db.collection('users').where('user_id', '==', this.$route.params.user_id).get().then(snap => {
              snap.forEach(doc => {
                doc.ref.delete()
                this.$router.push('/')
              })
            })
            }
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
