<template>
    <div class="co">
        <ul id="gyms" class="gyms"></ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gyms: [],
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
                console.log(gymList)

                for(let i = 0; i < this.gyms.length; i++) {
                    const newLi = document.createElement('li')
                    newLi.innerHTML = `<h1>Nazwa: ${this.gyms[i].gymName}<h1><h2>Miasto: ${this.gyms[i].city}, ${this.gyms[i].gymStreet}</h2><h2>Miasto: ${this.gyms[i].mainCoach}</h2><p>${this.gyms[i].description}</p>`
                    // newLi.innerHTML = this.gyms[i].gymName
                    console.log(newLi)
                    gymList.appendChild(newLi)
                }
                


            })
        }
    },
    mounted() {
       this.getData(); 
    }
}
</script>