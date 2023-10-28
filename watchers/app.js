const app = Vue.createApp({
  data() {
    return {
      userName: "Tanjiro",
      userType: "Demon Slayer",
    };
  },
  methods: {
    changeUserName() {
      this.userName = prompt("Entez le nom");
    },
  },
  watch:{
    userName:function(newUserName, oldUserName){
    /*     if(newUserName === " "){
            alert("Veuillez entrer un nom")
            this.newUserName = oldUserName
            
        }  */ 
        alert(`Le nom ${oldUserName} a  été remplacé par ${newUserName}`)
           


        
       

    }
  }
});

app.mount("#app");
