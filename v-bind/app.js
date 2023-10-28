const app = Vue.createApp({
  data() {
    return {
      image: "",
      texte: "",
      character: {
        firstName: "Tanjiro",
        lastName: "Kamaro",
        isDemonSlayer: true,
      },
      characterClass: {
        textePresent: true,
        texteMembre: false,
      },
    };
  },
  methods: {
    getFirstImg() {
      this.image =
        "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      this.texte = "Image Halloween 1";
    },

    getSecondImg() {
      this.image =
        "https://images.unsplash.com/photo-1572860177022-8fda92a90c95?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      this.texte = "Image Halloween 2";
    },
  },
});

app.mount("#app");
