<template>
    <div class="container">
        <form class="add-form">
            <input v-model="gymName" type="text" name="name" placeholder="Name">
            <input v-model="city" type="text" name="city" placeholder="City">
            <input v-model="gymStreet" type="text" name="street" placeholder="street">
            <input v-model="mainCoach" type="text" name="coach" placeholder="Main Coach">
            <textarea v-model="description" name="desc" placeholder="Description GYM" cols="30" rows="10"></textarea>
            <button @click.prevent="sendData()">ADD</button>
            <router-link class="back" to="/">back</router-link>
            <h2 v-if="addedSuccess">Gym Added Sucesfully</h2>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gymName: '',
            city: '',
            gymStreet: '',
            mainCoach: '',
            description: '',
            addedSuccess: false
        }
    },
    methods: {
        sendData() {
            fetch('https://find-your-gym-default-rtdb.firebaseio.com/gyms.json', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    gymName: this.gymName,
                    city: this.city,
                    gymStreet: this.gymStreet,
                    mainCoach: this.mainCoach,
                    description: this.description
                })
            })
            this.gymName = '';
            this.city = '';
            this.gymStreet = '';
            this.mainCoach = '';
            this.description = '';
            this.addedSuccess = true;
        }
    }
}
</script>

<style scoped>

    h2 {
        color: white;
        background: green;
        border: solid 1px green;
        border-radius: 10px;
        margin: 0 auto;
        width: 90%;
        margin-top: 1em;
    }
</style>

