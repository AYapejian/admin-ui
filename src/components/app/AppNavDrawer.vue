<template>
    <v-navigation-drawer
    class='app-nav-drawer'
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

        <v-list dense>
            <template v-for="item in navItems">
                <!-- If navItem item has subitems -->
                <v-list-group v-if="item.items" :group="item.group">
                    <v-list-tile slot="item" ripple>
                        <v-list-tile-action>
                            <v-icon light>{{ item.action }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.title }}
                            </v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-icon light>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>

                    <!-- Subitems -->
                    <v-list-item v-for="subItem in item.items" :key="subItem">
                        <v-list-tile
                            :href="subItem.href"
                            :router="!subItem.target"
                            :disabled="subItem.disabled"
                            :target="subItem.target"
                            ripple>

                            <v-list-tile-content>
                                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action v-if="subItem.action">
                                <v-icon light class="success--text">{{ subItem.action }}</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-item>
                </v-list-group>

                <!-- If navItem item is subheader or divider -->
                <v-subheader v-else-if="item.header" light> {{ item.header }} </v-subheader>
                <v-divider v-else-if="item.divider"></v-divider>

                <!-- If navItem item does not have subitems -->
                <v-list-item v-else>
                    <v-list-tile :href="item.href" router ripple :disabled="item.disabled">
                        <v-list-tile-action>
                            <v-icon light>{{ item.action }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action v-if="item.subAction">
                            <v-icon light class="success--text">{{ item.subAction }}</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-item>
            </template>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
import { APP_NAV_DRAWER_STATE } from '../../store/mutation-types'

const navItems = [
    { header: 'Sections' },
    {
        title:  'Dashboard',
        action: 'dashboard',
        group:  'dashboard',
        href:   '/dashboard'
    },
    { divider: true },
    {
        title:  'Settings',
        action: 'settings',
        group:  '/settings',
        href:   '/settings'
        // TODO: Figure out using main page link above along with subitem links below
        // currently supports either href in above OR below
        // items:  [
        //     { href: '/settings/preferences', title: 'Preferences' },
        //     { href: '/settings/security',    title: 'Security'    }
        // ]
    }
]

export default {
    name: 'AppNavDrawer',
    data: function () {
        return {
            navItems: navItems
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

.vuetify
    .router-link-active
        display: flex
        align-items: center

.list__tile__avatar img
    border-radius: 0 !important

</style>
