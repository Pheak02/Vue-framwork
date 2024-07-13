<template>
  <div id="app">
    <h1>Assignment Sec8</h1>
    <user-data></user-data>
    <active-user></active-user>
  </div>
</template>
<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  name: "App",
};
</script>


