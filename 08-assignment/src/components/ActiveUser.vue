<template>
  <div>
    <active-user :name="user.name" :age="user.age"> </active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: "",
      },
    };
  },
};
</script>

