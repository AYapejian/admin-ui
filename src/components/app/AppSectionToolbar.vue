<template>
    <v-toolbar class="transparent elevation-0 app-section-toolbar">
        <v-icon v-if="icon">{{ icon }}</v-icon>
        <v-toolbar-title class="title">{{ title }}</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-text-field class="section-search" append-icon="search" label="Search..." hide-details single-line></v-text-field>
        <v-btn icon @click.native.stop="toggleFullscreen">
            <v-icon v-if="!isFullscreenEnabled">fullscreen</v-icon>
            <v-icon v-else>fullscreen_exit</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
import { APP_SET_FULLSCREEN } from '@/store/mutation-types'

export default {
    name:  'AppSectionToolbar',
    props: {
        icon:  String,
        title: String
    },
    computed: {
        isFullscreenEnabled() { return this.$store.state.app.fullscreenEnabled }
    },
    methods: {
        toggleFullscreen() {
            this.$store.commit(APP_SET_FULLSCREEN, {
                isEnabled: !this.isFullscreenEnabled
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.app-section-toolbar
    z-index: 1
.section-search
    max-width: 200px
button
    color: rgba(0,0,0,0.54)
</style>
