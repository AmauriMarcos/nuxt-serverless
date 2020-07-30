<template>
    <div class="newsletter">
        <h2>Newsletter</h2>
        <form @submit.prevent='submit'>
            <input type="email" placeholder="Email" v-model="email">
            <button type="submit"></button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: ''
        }
    },
    methods: {
        submit(){
            alert(this.email);
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
        background-color: aqua;
        color: #000;
        outline: none;
        margin-top: 1rem;
    }

    button:hover{
        background-color: rgb(101, 165, 165);
    }
    
</style>