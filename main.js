const { createApp } = Vue;

createApp({
data() {
    return {
        email: "",
        emails: []
    }   
},

methods: {
    richiestaEmail() {
        for (let i = 0; i < 10; i++) {

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
            this.email = result.data.response;
            this.emails.push(this.email);
            });
        
        }
    }
},

mounted() {

    this.richiestaEmail();

}

}).mount('#app')