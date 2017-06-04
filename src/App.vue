<template>
    <v-app dark>
        <app-nav-drawer v-if="notLoginPage"></app-nav-drawer>
        <app-toolbar    v-if="notLoginPage"></app-toolbar>

        <main>
            <v-container fluid>
                <transition name="slide">
                    <router-view></router-view>
                </transition>
            </v-container>
        </main>
         <v-footer class="grey darken-4"></v-footer>
    </v-app>
</template>


<script>
import AppNavDrawer from './components/app/AppNavDrawer.vue'
import AppToolbar   from './components/app/AppToolbar.vue'

export default {
    components: { AppNavDrawer, AppToolbar },
    computed:   {
        notLoginPage () { return (this.$route.name !== 'Login') }
    }
}
</script>

<style lang="stylus">
    @import './stylus/main'
</style>
