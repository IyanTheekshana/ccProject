const app = Vue.createApp({
  data() {
    return {
      username: "",
      code: "",
      month: "",
      year: "",
      cvc: "",
    };
  },
  methods: {
    codeSpliter() {
      return this.code != 0
        ? this.code
            .match(/.{1,4}/g)
            .join(" ")
            .slice(0, 20)
        : "1234 56789 9123 0000";
    },
  },
});

app.mount("#app");
