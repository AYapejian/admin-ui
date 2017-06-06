<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex sm12 md12>
                <v-card>
                    <v-app top-toolbar id="example-9-1">
                        <v-toolbar>
                             <v-toolbar-title class="white--text">Update Profile</v-toolbar-title>
                        </v-toolbar>
                        <main>
                            <v-container fluid class="px-3">
                                <v-layout row wrap>
                                    <v-flex xs12 md6>
                                        <v-text-field label="First Name" counter v-model="profile.name.first"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <v-text-field label="Last Name" counter v-model="profile.name.last"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field label="Email Address" v-model="profile.email"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <img class="avatar" :src="profile.avatarUrl"></img>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <v-text-field label="Avatar URL" v-model="profile.avatarUrl"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </main>
                    </v-app>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
// TODO: Put debounce on as a Vue mixin so it's available globally
const debounce = require('debounce');
import { mapGetters } from 'vuex'
import { UPDATE_USER } from '../../store/mutation-types'

export default {
    name:       'SettingsPreferencesView',
    data() {
        return {
            profile: JSON.parse(JSON.stringify(this.$store.state.user.profile))
        }
    },
    watch: {
        profile: {
            handler: debounce(function(newVal, oldVal) {
                    this.$store.commit(UPDATE_USER, newVal)
                }, 200),
            deep: true
        }
    },
    methods: {
        userProfile() {
            return this.$store.state.user.profile
        }
    },
    computed: {

        // userProfile() {
        //     const up = JSON.parse(JSON.stringify(this.$store.state.user.profile))
        //     debugger
        //     return up
        // }
        // userProfileModel: {
        //    get() { return this.userProfile },
        //     set(val) {
        //         debugger
        //         this.$store.commit(UPDATE_USER, val)
        //     }
        // },
        // ...mapGetters(['userProfile']),
    }
}
</script>

<style scoped lang="stylus">
.avatar
    height: 200px
    width: 200px
</style>
