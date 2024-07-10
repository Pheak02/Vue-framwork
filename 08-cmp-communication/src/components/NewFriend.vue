<template>
  <section>
    <header>
      <h1>Add Friend Contacts</h1>
    </header>
    <form @submit.prevent="submitData">
      <input
        type="text"
        v-model="enteredName"
        id="name"
        placeholder="Enter name"
      />
      <input
        type="text"
        v-model="enteredPhone"
        id="name"
        placeholder="Enter phone"
      />
      <input
        type="text"
        v-model="enteredEmail"
        id="name"
        placeholder="Enter email"
      />
      <!-- <select name="favorite" id="fav">
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select> -->
      <button>Add Contact</button>
    </form>
  </section>
</template>
<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
