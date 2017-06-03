<template>
    <v-app dark>
        <app-nav-drawer
            v-if="notLoginPage"
            :is-visible="drawer"
            @app_nav_drawer:toggled="drawer = !drawer"></app-nav-drawer>

        <v-toolbar fixed light v-if="notLoginPage">
            <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{ app.title }}</v-toolbar-title>
        </v-toolbar>
        <main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </main>
         <v-footer class="grey darken-4"></v-footer>
    </v-app>
</template>


<script>
import { mapState } from 'vuex'
import AppNavDrawer from './components/app/AppNavDrawer.vue'

export default {
    components: { AppNavDrawer },
    computed:   {
        ...mapState(['app']),

        // True for all routes except 'Login', used to hide certain elements
        // Could also use the app state of isAuthenticated, might be better ways
        // using nesting but Vuetify app structures requires element structure that makes
        // this difficult
        notLoginPage () {
            return (this.$route.name !== 'Login')
        }
    },
    data () {
        return {
            drawer: false,
            items:  [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' }
            ],
            mini:  false,
            right: null
        }
    },
    methods: {
        setDrawer(data) {
            console.log('App Nav Drawer Event: ', data)
        }
    }
}
</script>

<style lang="stylus">
    @import './stylus/main'
</style>
