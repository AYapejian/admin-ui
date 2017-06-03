<template>
    <v-layout column align-center>
        <div>
            <img src="/static/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote>
                &#8220;First, solve the problem. Then, write the code.&#8221;

                <footer>
                    <small>
                        <em>&mdash;John Johnson</em>
                    </small>
                </footer>
            </blockquote>
        </div>
    </v-layout>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return { msg: 'Welcome to Your Vue.js App' }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
