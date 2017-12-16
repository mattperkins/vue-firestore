<template>
   <div id="dashboard">
    <h3>{{masthead}}</h3>
      
      <ul>
        <li v-for="user in users" :key="user.id">
        
        <router-link :to="{name:'ViewUser', params: {user_id: user.user_id}}">
        
        <div class="chip blue">{{user.position}}</div>
        <div style="font-size: 1.6rem; color:#333;">{{user.name}}</div>
        <div class="chip green">{{user.user_id}}</div>
        </router-link>
        </li>
      </ul>

      <div class="fixed-action-btn">
        <router-link to="/newuser" class="btn-floating btn-large red">
          <i class="fa fa-plus"></i>
        </router-link>
      </div>
      
   </div>
</template>

<script>
  import db from './firebaseInit'
    export default {
        name: 'Dashboard',
        data () {
            return {
              masthead: 'Dashboard',
                users: []
            }
        },
        created () {
          db.collection('users').orderBy('dept').get().then
          (snap => {
            snap.forEach(doc => {
              const data = {
                'id' : doc.id,
                'user_id' : doc.data().user_id,
                'name' : doc.data().name,
                'dept' : doc.data().dept,
                'position' : doc.data().position,
              }
              this.users.push(data)
            })
          })
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

