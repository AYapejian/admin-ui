<template>
    <v-app dark>
        <!-- TODO: This is weird, we set the initial value to this parents 'drawer' property and can change this
        value to hide, however when the drawer within the below component is hidden from within that child
        we have to also listen to event and update our own property... need to see if v-model fixes this? -->
        <app-nav-drawer
            :is-visible="drawer"
            @app_nav_drawer:toggled="drawer = !drawer"></app-nav-drawer>

        <v-toolbar fixed light>
            <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Toolbar</v-toolbar-title>
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
import AppNavDrawer from './components/app/AppNavDrawer.vue';

export default {
    components: { AppNavDrawer },
    data () {
        return {
            drawer: false,
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' }
            ],
            mini: false,
            right: null
        };
    },
    methods: {
        setDrawer(data) {
            console.log('App Nav Drawer Event: ', data);
        }
    }
}
</script>

<style lang="stylus">
    @import './stylus/main'
</style>
