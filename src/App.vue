<template>
    <v-app dark>
        <app-nav-drawer v-if="requiresAuth"></app-nav-drawer>
        <app-toolbar    v-if="requiresAuth"></app-toolbar>

        <main>
            <v-container fluid>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </main>

         <v-footer class="grey darken-4" v-cloak></v-footer>
    </v-app>
</template>


<script>
import AppNavDrawer from './components/app/AppNavDrawer.vue'
import AppToolbar   from './components/app/AppToolbar.vue'

export default {
    components: { AppNavDrawer, AppToolbar },
    computed:   {
        // Note: Require auth hook here probably is to general for
        // deciding if toolbar/nav bar should be shown
        // Also this should be split out into having login and everything else use
        // different parent routes since that's the only reason this computed property exists
        requiresAuth () {
            return (this.$route.meta.requiresAuth)
        }
    }
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>
