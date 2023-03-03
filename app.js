const app = Vue.createApp({
  data() {
    return {
      username: "",
      code: "",
      month: "",
      year: "",
      cvc: "",
      isInvalid: false,
    };
  },
  methods: {
    codeNumber() {
      return this.code != 0
        ? this.code
            .match(/.{1,4}/g)
            .join(" ")
            .slice(0, 20)
        : "0000 0000 0000 0000";
    },
    userName() {
      return this.username ? this.username : "Jane Appleseed";
    },
    setMonth() {
      return this.month ? this.month : "09";
    },
    setYear() {
      return this.year ? this.year : "00";
    },
    checkValidity() {
      if (
        this.username === "" ||
        this.code === "" ||
        this.month === "" ||
        this.year === "" ||
        this.cvc === ""
      ) {
        this.isInvalid = true;
      }

      setTimeout(() => {
        this.isInvalid = false;
      }, 3000);
    },
  },
});

app.mount("#app");
