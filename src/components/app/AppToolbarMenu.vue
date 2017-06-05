<template>
    <v-toolbar-items>

        <!--<v-toolbar-item>Home</v-toolbar-item>
        <v-toolbar-item>Contact</v-toolbar-item>-->

        <!--<v-icon light v-badge="{ value: 6 }" class="error--after">mail</v-icon>-->

        <v-menu bottom left offset-y origin="top" transition="v-slide-y-transition">
            <div slot="activator">
                <div v-badge="{ value: userAlertsCount, left: false }" class="error--after"></div>
                    <v-btn icon light>
                        <v-icon>mail</v-icon>
                    </v-btn>
                </div>
            </div>

            <!-- TODO: This all needs to be cleaned up -->
            <v-list two-line subheader>
                <!-- High Priority -->
                <v-subheader>High Priority</v-subheader>
                <v-list-item v-for="alert in alertsByPriority.high" v-bind:key="alert.title">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <v-icon :class="[alert.priority]">notifications_active</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ alert.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ alert.description }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon ripple @click.native.stop="removeAlert(alert)" >
                                <v-icon class="grey--text text--lighten-1">close</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-item>

                <!-- Med Priority -->
                <v-subheader>Med Priority</v-subheader>
                <v-list-item v-for="alert in alertsByPriority.med" v-bind:key="alert.title">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <v-icon :class="[alert.priority]">notifications</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ alert.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ alert.description }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon ripple @click.native.stop="removeAlert(alert)" >
                                <v-icon class="grey--text text--lighten-1">close</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-item>

                <!-- Low Priority -->
                <v-subheader>Low Priority</v-subheader>
                <v-list-item v-for="alert in alertsByPriority.low" v-bind:key="alert.title">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <v-icon :class="[alert.priority]">notifications_none</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ alert.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ alert.description }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon ripple @click.native.stop="removeAlert(alert)" >
                                <v-icon class="grey--text text--lighten-1">close</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar-items>
</template>

<script>
import { mapGetters } from 'vuex'
import { USER_REMOVE_ALERT } from '@/store/mutation-types'

export default {
    name:       'AppToolbarMenu',
    methods: {
        removeAlert(alert) {
            this.$store.commit(USER_REMOVE_ALERT, alert)
        }
    },
    computed: {
        ...mapGetters(['userAlerts', 'userAlertsCount']),
        alertsByPriority() {
            return Object.entries(this.userAlerts).reduce((acc, [alertId, alert]) => {
                // TODO: Need to change the state model to be easier to work with here
                alert.alertId = alertId
                if (alert.priority === 'high') {
                    acc.high.push(alert)
                } else if(alert.priority === 'med') {
                    acc.med.push(alert)
                } else {
                    acc.low.push(alert)
                }
                return acc
            }, { high: [], med: [], low: [] })
        }
    }
}
</script>

<style lang="stylus" scoped>
.badge
    top: 12px
    right 22px
</style>
