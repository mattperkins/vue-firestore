<template>
   <div id="editUser">
    <h3>{{masthead}}</h3>

        <div class="row">
      <form @submit.prevent="updateUser" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="user_id" required>
            
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="dept" required>
            
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required>
            
          </div>
        </div>
        <button type="submit" class="btn green">Submit</button>
        <router-link to="/" class="btn red">Cancel</router-link>
      </form>
    </div>

   </div>
</template>

<script>
import db from './firebaseInit'
    export default {
        name: 'EditUser',
        data () {
            return {
                masthead : 'Edit User',
                user_id: null,
                name: null,
                position: null,
                dept: null
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
          updateUser () {
            db.collection('users').where('user_id', '==', this.$route.params.user_id).get().then(snap => {
              snap.forEach(doc => {
                doc.ref.update({
                  user_id: this.user_id,
                  name: this.name,
                  position: this.position,
                  dept: this.dept
                })
                .then(() => {
                  this.$router.push({
                    name: 'ViewUser', params: {user_id: this.user_id}
                  })
                })
              })
            })
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
