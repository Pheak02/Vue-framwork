const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // console.dir('this.$ref.userText');
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdatee()");
  },
  update() {
    console.log("update()");
  },
  beforeMount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmount()");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount();
}, 3000);
