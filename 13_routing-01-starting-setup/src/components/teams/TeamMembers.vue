<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';
//route: which provide acessibility to some attribute
export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  created() {
    console.log(this.$route.path);
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query);
  },
  methods: {
    loadTeamMembers(teamId) {
      console.log(this.$route.path); //teams/t1
      //$route: hold latest info about latest route
      // const teamId = route.params.teamId; //use the same path as in route -/teams/:teamId
      // console.log(teamId)
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member); //filter only member that has this id
        selectedMembers.push(selectedUser); //cus local constant, no need to use this
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  watch: {
    teamId(newId) {
      //watch for prop changes
      this.loadTeamMembers(newId);
    }, //to load the team member also when route change
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>