<template>
    <div class="newsletter">
        <h2>Newsletter</h2>
        <form @submit.prevent='submit'>
            <input type="email" placeholder="Email" v-model="email">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
 
    data(){
        return{
            email: ''
        }
    },
    methods: {
        submit(){
            axios.post("https://musing-bose-cef445.netlify.app/.netlify/functions/index", {email: this.email},
                { headers : {
                    "Content-Type": "application/json"
                }}
            ).then((res) =>{
                console.log(res.status)
            }).catch(error => {console.log(error)})
        }
    }
}
</script>

<style scoped>
    h2{
        font-size: 1.5rem;
        margin-bottom: 2rem;

    }
    .newsletter{
        height: 95vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3% 15%;
    }

    input{
        padding: .5rem 1rem;
        border: none;
        border: 1px solid #ccc;
        text-indent: 16px;
        width: 100%;
        outline: none;
    }
    button{
        padding: .5rem 1rem;
        text-transform: uppercase;
        background-color: rgb(126, 122, 179);
        color: #000;
        outline: none;
        margin-top: 1rem;
    }

    button:hover{
        background-color: rgb(75, 66, 124);
    }
    
</style>