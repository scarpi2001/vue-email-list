const { createApp } = Vue;

createApp({
data() {
    return {
        email: ""
    }   
},
methods: {

    richiestaEmail() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
            console.log(result.data);
        });
    }
}

}).mount('#app')