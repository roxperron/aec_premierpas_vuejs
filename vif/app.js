const app = Vue.createApp({
    data(){
        return{
            show: true,
            person:{lastname:"Kamato", firstname:"Tanjiro"},
            age:19,

            characters:[
                {lastname:"Kamato", firstname:"Nezuko", type:"Demon"},
                {lastname:"", firstname:"Tamayo", type:"Demon"},
                {lastname:"Sakonji", firstname:"Urokodaki", type:"Former Hashira"},
                {lastname:"Shinjuro", firstname:"Rengoku", type:"Former Hashira"},
                {lastname:"Kanao", firstname:"Tsuyuri", type:"Demon slayer"},
                {lastname:"Inosuke", firstname:"Hashibira", type:"Demon slayer"},
                {lastname:"Giyu", firstname:"Tomioka", type:"Hashira"},
                {lastname:"Mitsuri", firstname:"Kanroji", type:"Hashira"}
            ]

           
        }
      

    },
    methods:{
        showPerson(){
            this.show = false
        }
    }

})

app.mount("#app")