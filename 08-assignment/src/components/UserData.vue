<template>
  <form @submit.prevent="submitUserData">
    <div>
      <label for="name">Name: </label>
      <input v-model="enterName"
      type="text" name="name" id="name" placeholder="Enter Name" />
    </div>
    <div>
      <label for="age">Age:</label>
      <input v-model="enterAge" type="text" name="age" id="age" placeholder="Enter Age" />
    </div>
    <button @click="$emit('submit-data')">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    age: {
      type: String,
    },
  },
  data() {
    return {
      enterName: "",
      enterAge: "",
    };
  },
  emit: ["submit-data"],
  methods: {
    submitUserData() {},
  },
};
</script>