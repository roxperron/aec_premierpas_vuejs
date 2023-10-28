const app = Vue.createApp({
    data(){
        return{
           nb1:0,
           nb2:0
        }
      

    },
    methods:{
        getNb1(){
            let a = prompt("Entrez nb1")
            this.nb1 = parseInt(a)
        },
        getNb2(){
            let b = prompt("Entrez nb2")
            this.nb2 = parseInt(b)
        }
    },
    computed:{
        addition(){
            return this.nb1 + this.nb2
        }

    }

})

app.mount("#app")