<template>
    <div class="container">
        <input v-model="searchingWord" type="text" name="find" placeholder="Find">
        <button @click.prevent="findGym()">search</button>
        <router-link class="back" to="/">back</router-link>
        <ul id="gyms" class="gyms"></ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gyms: [],
            searchingWord: ''
        }
    },
    methods: {
        getData() {
            fetch('https://find-your-gym-default-rtdb.firebaseio.com/gyms.json').then((response) => {
                if (response.ok) {
                    return response.json();
                }
            }).then((data) => {
                const results = []
                for (let i in data) {
                    results.push({
                        gymName: data[i].gymName,
                        city: data[i].city,
                        gymStreet: data[i].gymStreet,
                        mainCoach: data[i].mainCoach,
                        description: data[i].description
                    })
                }
                this.gyms = results
                const gymList = document.getElementById('gyms')

                for(let i = 0; i < this.gyms.length; i++) {
                    const newLi = document.createElement('li')
                    newLi.innerHTML = `<h1>Nazwa: ${this.gyms[i].gymName}<h1><h2>Miasto: ${this.gyms[i].city}, ${this.gyms[i].gymStreet}</h2><h2>Główny trener: ${this.gyms[i].mainCoach}</h2><p>${this.gyms[i].description}</p>`
                    gymList.appendChild(newLi)
                }
                


            })
        },
        findGym() {
            let newArr = []
            for (let i = 0; i < this.gyms.length; i++) {
                if (this.gyms[i].gymName === this.searchingWord) {
                    newArr.push(this.gyms[i])
                }
                if (this.gyms[i].city === this.searchingWord) {
                    newArr.push(this.gyms[i])
                }
                if (this.gyms[i].gymStreet === this.searchingWord) {
                    newArr.push(this.gyms[i])
                }
                if (this.gyms[i].mainCoach === this.searchingWord) {
                    newArr.push(this.gyms[i])
                }
            }
            console.log(newArr)
            // w nowej tablicy znajdują się tylko wyszukane elementy z tablicy gyms teraz muszę usunąć wszystkie elementy li
            // i stworzyc nowe na bazie newArr
        }
    },
    mounted() {
       this.getData(); 
    }
}
</script>

<style scoped>

button {
    margin: 0 auto;
    height: 40px;

}
</style>