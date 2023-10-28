const app = Vue.createApp({
  data() {
    return {
      characterName: "Link",
      characterRace: "Hylian",
      add: "",
      demon:{
        name: "Nezoku", type:"demon", present: true, age: 13, membre:true
      }
    };
  },
  methods: {
    changeCharName() {
      this.characterName = "Mipha";
    },

    changeCharRace() {
      this.characterRace = "Zora";
    },
    addSum(){
        let nb1 = prompt("Entrez nb1")
        let nb2 = prompt("Entrez nb2")
        let a = parseInt(nb1)
        let b = parseInt(nb2)
        this.add = a + " + " + b + " = " + (a+b)
    },
    action(e, texte){
        console.log(e.target.id + "-" + texte)
    }
  },
});

app.mount("#app");
