<template>
    <v-navigation-drawer
    persistent
    enable-resize-watcher
    v-model="myIsVisible"
    :mini-variant="myIsMini">

        <v-list class="pa-0">
            <!-- Chevron when mini nav -->
            <v-list-item v-if="myIsMini">
                <v-list-tile @click.native.stop="toggleMini(myIsMini)">
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
                        <v-btn icon light @click.native.stop="toggleMini(myIsMini)">
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
export default {
    name: 'AppNavDrawer',
    data: function () {
        return {
            myIsVisible: this.isVisible,
            myIsMini:    this.isMini,
            navItems:    [
                { title: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
                { title: 'Settings',  path: '/settings',  icon: 'settings' }
            ]
        }
    },
    props: {
        user:      { type: Object,  default: () => ({ name: 'Test User', avatarUrl: 'https://randomuser.me/api/portraits/men/85.jpg' }) },
        isVisible: { type: Boolean, default: true },
        isMini:    { type: Boolean, default: true }
    },
    watch: {
        isVisible: function(val) {
            this.myIsVisible = val
            // FIXME: This hangs the browser tab, endless call cycle between emit/listener, need to fix
            // this.$emit('app_nav_drawer:toggled', val)
        },
        isMini: function(val) {
            this.myIsMini = val
        }
    },
    computed: {
        userAvatar() { return this.user.avatarUrl },
        userName()   { return this.user.name      }
    },
    methods: {
        toggleMini(isMini) {
            this.myIsMini = !isMini
        }
    },
    mounted () {
        this.$emit('navdrawer:mounted')
    }
}
</script>

<style lang="stylus">
@import '../../stylus/_variables'

.router-link-active, .router-link-exact-active i {
    color: $theme.primary;
}
</style>
