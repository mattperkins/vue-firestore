<template>
   <div id="newUser">
    
    <h3>{{masthead}}</h3>

    <div class="row">
      <form @submit.prevent="saveUser" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="user_id" required>
            <label>User ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label>Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="dept" required>
            <label>Dept</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required>
            <label>Position</label>
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
        name: 'NewUser',
        data () {
            return {
                masthead : 'New User',
                user_id: null,
                name: null,
                position: null,
                dept: null
            }
        },
        methods: {
          saveUser () {
            db.collection('users').add({
              user_id: this.user_id,
              name: this.name,
              position: this.position,
              dept: this.dept
            })
            .then(docRef => this.$router.push('/'))
            .catch(error => console.log(err))
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
