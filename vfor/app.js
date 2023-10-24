const app = Vue.createApp({
  data() {
    return {
      games: ["TOTK", "BOTW", "HORIZON", "HOGWART"],

      gamePrice: {
        name: "TOTK",
        prix: 99.99
      },

     characters: [
        {lastname:"Kamato", firstname: "Tanjiro", present: true },
        {lastname:"Kamato", firstname: "Nezuko", present: true },
        {lastname:"Kanroji", firstname: "Mitsuri", present: false }
    ],
        characterInEpisod:"",
    
    }
  },
  methods:{
    selectCharacter(chars){
        this.characterInEpisod = chars.firstname + " " +chars.lastname
    }
  }
});

app.mount("#app");
