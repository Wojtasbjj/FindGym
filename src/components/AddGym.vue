<template>
    <div class="container">
        <form class="add-form">
            <input v-model="gymName" type="text" name="name" placeholder="Name">
            <input v-model="city" type="text" name="city" placeholder="City">
            <input v-model="gymStreet" type="text" name="street" placeholder="street">
            <input v-model="mainCoach" type="text" name="coach" placeholder="Main Coach">
            <textarea v-model="description" name="desc" placeholder="Description GYM" cols="30" rows="10"></textarea>
            <button @click.prevent="sendData()">ADD</button>
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
            description: ''
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
        }
    }
}
</script>

