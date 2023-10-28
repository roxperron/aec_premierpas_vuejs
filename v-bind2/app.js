const app = Vue.createApp({
  data() {
    return {
      character: {
        firstName: "Tanjiro",
        lastName: "Kamaro",
        present: true,
        membre: true,
        age: 13
      },
    }
  },
  computed: {
    characterClass() {
      return {
        textePresent: this.character.present,
        texteMembre: this.character.membre,
        texteAge: this.character.age >= 13
      };
    },
  },
});

app.mount("#app");
