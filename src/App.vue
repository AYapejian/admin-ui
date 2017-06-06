<template>
    <!-- <v-app dark> -->
    <v-app :class="{ fullscreen: isFullscreenEnabled }">
        <!-- TODO: Hide these when fullscreen, along with footer -->
        <app-nav-drawer v-if="requiresAuth"></app-nav-drawer>
        <app-toolbar    v-if="requiresAuth"></app-toolbar>

        <main id="app-main">
            <app-section-toolbar v-if="requiresAuth" :title="routeMeta.title" :icon="routeMeta.icon"></app-section-toolbar>

            <v-container fluid>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </main>

         <v-footer class="grey darken-4 app-footer" v-cloak></v-footer>
    </v-app>
</template>


<script>
import AppNavDrawer from './components/app/AppNavDrawer.vue'
import AppToolbar   from './components/app/AppToolbar.vue'
import AppSectionToolbar from '@/components/app/AppSectionToolbar'

export default {
    components: { AppNavDrawer, AppToolbar, AppSectionToolbar },
    computed:   {
        requiresAuth ()        { return this.$route.meta.requiresAuth },
        routeMeta()            { return this.$store.state.route.meta },
        isFullscreenEnabled()  { return this.$store.state.app.fullscreenEnabled }
    }
}
</script>

<style lang="stylus">
@import './stylus/main'

.fullscreen
    main#app-main
        padding: 0 !important // needed due to padding has an 'important' tag from lib
        margin: 0
    .app-toolbar, .app-nav-drawer, .app-footer
        display: none
</style>
