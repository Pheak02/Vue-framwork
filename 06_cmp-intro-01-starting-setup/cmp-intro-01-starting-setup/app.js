const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "2",
          name: "nobody",
          phone: "01234 4678 5533",
          email: "manuel01@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: ` 
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">
      {{detailsAreVisible? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "1",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
