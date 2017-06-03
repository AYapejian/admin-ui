<template>
    <v-navigation-drawer temporary v-model="myIsVisible" :mini-variant="myIsMini" dark>

        <v-list class="pa-0">
            <v-list-item v-if="myIsMini">
                <v-list-tile @click.native.stop="toggleMini(myIsMini)">
                    <v-list-tile-action>
                        <v-icon light>chevron_right</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list-item>

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

        <v-list class="pt-0" dense>
            <v-divider light></v-divider>

            <v-list-item v-for="item in navItems" :key="item">
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon light>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'AppNavDrawer',
    data: function () {
        return {
            myIsVisible: this.isVisible,
            myIsMini:    this.isMini
        };
    },
    props: {
        user:       { type: Object,  default: () => ({ name: 'Test User', avatarUrl: 'https://randomuser.me/api/portraits/men/85.jpg' }) },
        navItems:   { type: Array,   default: () => [{ icon: 'home', title:          'Home' }] },
        isVisible:  { type: Boolean, default: true },
        isMini:     { type: Boolean, default: true }
    },
    watch: {
        // Emit to parent when nav drawer is opened / closed
        // myIsVisible: function(val, oldVal) {

        //     this.$emit('app_nav_drawer:toggled', val);
        // },
        // Watch the parent components passed in props for changes
        isVisible: function(val) {
            this.myIsVisible = val;
        },
        isMini: function(val) {
            this.myIsMini = val;
        }
    },
    computed: {
        userAvatar() { return this.user.avatarUrl; },
        userName()   { return this.user.name;      }
    },
    methods: {
        toggleMini(isMini) {
            this.myIsMini = !isMini;
        }
    },
    mounted () {
        this.$emit('navdrawer:mounted');
    },
}
</script>

<style scoped>
</style>
