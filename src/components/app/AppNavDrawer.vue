<template>
    <v-navigation-drawer
    persistent
    enable-resize-watcher
    v-model="appNavDrawerVisible"
    :mini-variant="appNavDrawerMini">

        <v-list class="pa-0">
            <!-- Chevron when mini nav -->
            <v-list-item v-if="appNavDrawerMini">
                <v-list-tile @click.native.stop="appNavDrawerMini = !appNavDrawerMini">
                    <v-list-tile-action>
                        <v-icon light>chevron_right</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list-item>

            <!-- User Avatar  -->
            <v-list-item>
                <v-list-tile avatar tag="div">
                    <v-list-tile-avatar>
                        <img :src="userAvatar" />
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{userName}}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon light @click.native.stop="appNavDrawerMini = !appNavDrawerMini">
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list-item>
        </v-list>

        <!-- Nav Items -->
        <v-list class="pt-0" dense>
            <v-divider light></v-divider>

            <router-link tag="v-list-item"
            v-for="item in navItems" :key="item"
            :to="item.path">
                <v-list-tile>
                    <v-list-tile-action class="nav-icon">
                        <v-icon light>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </router-link>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
import { APP_NAV_DRAWER_STATE } from '../../store/mutation-types'

export default {
    name: 'AppNavDrawer',
    data: function () {
        return {
            navItems: [
                { title: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
                { title: 'Settings',  path: '/settings',  icon: 'settings' }
            ]
        }
    },
    computed: {
        appNavDrawerVisible: {
            get() {
                return this.navDrawerState.visible
            },
            set(val) {
                const newState = Object.assign({}, this.navDrawerState, { visible: val })
                this.$store.commit(APP_NAV_DRAWER_STATE, newState)
            }
        },
        appNavDrawerMini: {
            get() {
                return this.navDrawerState.mini
            },
            set(val) {
                const newState = Object.assign({}, this.navDrawerState, { mini: val })
                this.$store.commit(APP_NAV_DRAWER_STATE, newState)
            }
        },
        navDrawerState() { return this.$store.state.app.navDrawerState },
        userAvatar()     { return this.$store.state.user.avatarUrl     },
        userName()       { return this.$store.state.user.name          }
    }
}
</script>

<style lang="stylus">
@import '../../stylus/_variables'

.router-link-active, .router-link-exact-active i {
    color: $theme.primary;
}
</style>
