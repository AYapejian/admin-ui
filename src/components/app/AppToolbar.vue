<template>
    <v-toolbar fixed light class='app-toolbar'>
        <v-toolbar-side-icon light @click.native.stop="toggleAppNavBar"></v-toolbar-side-icon>
        <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>

        <app-toolbar-menu></app-toolbar-menu>
    </v-toolbar>
</template>

<script>
import AppToolbarMenu from '@/components/app/AppToolbarMenu'
import { APP_NAV_DRAWER_STATE } from '../../store/mutation-types'

export default {
    name:       'AppToolbar',
    components: { AppToolbarMenu },
    data: function () {
        return {}
    },
    methods: {
        toggleAppNavBar() {
            const newState = Object.assign({}, this.navDrawerState, { visible: !this.navDrawerState.visible })
            this.$store.commit(APP_NAV_DRAWER_STATE, newState)
        }
    },
    computed: {
        toolbarTitle ()   { return this.$store.state.app.title  },
        routeMetadata()   { return this.$store.state.route.meta },
        navDrawerState()  { return this.$store.state.app.navDrawerState }
    }
}
</script>

<style lang="stylus">

</style>
