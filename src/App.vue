<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  li {
    color: white;
    list-style: none;
    border: solid 1px white;
    text-align: center;
    margin: 1em 1em;
    font-size: .8em;
  }
  h1 {
    font-weight: bold;
  }
  .container {
    width: 400px;
    height: 800px;
    margin: 0 auto;
    text-align: center;
    background-image: url('assets/bg.jpg');
    background-position: top;
    background-size: cover;
    overflow: scroll;
  }

    .find, .add {
        width: 150px;
        height: 70px;
        border: solid 1px black;
        border-radius: 10px;
        background: black;
        margin: 1em;
        color: white;
        text-decoration: none;
        display: flex;
        justify-content: center;
    }

        input {
        width: 90%;
        height: 50px;
        margin: 1em 0;
        border-radius: 10px;
    }
    textarea {
        width: 90%;
        border-radius: 10px;
    }

    button {
        width: 90%;
        height: 70px;
        border: solid 1px black;
        border-radius: 10px;
        background: black;
        margin: 1em;
        color: white;
        font-size: 1.4em;
    }

    .back {
        color: white;
        text-decoration: none;
        font-size: 2em;
    }

</style>
