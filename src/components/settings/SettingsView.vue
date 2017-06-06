<template>
    <router-view></router-view>
    <!--<v-tabs icons grow light>
        <v-tabs-bar slot="activators">
            <v-tabs-slider></v-tabs-slider>
            <v-tabs-item href="#tab-settings">
                Preferences
            </v-tabs-item>
            <v-tabs-item href="#tab-security">
                Security
            </v-tabs-item>
        </v-tabs-bar>

        <v-tabs-content id="tab-settings">
            <v-card flat class="">
                <settings-preferences-tab></settings-preferences-tab>
            </v-card>
        </v-tabs-content>

        <v-tabs-content id="tab-security">
            <v-card flat>
                <settings-security-tab></settings-security-tab>
            </v-card>
        </v-tabs-content>
    </v-tabs>-->


</template>

<script>
import SettingsPreferencesTab from './components/SettingsPreferencesTab'
import SettingsSecurityTab    from './components/SettingsSecurityTab'

export default {
    name:       'SettingsMainView',
    components: { SettingsPreferencesTab, SettingsSecurityTab },
    data() {
        return {
            text: 'testing'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs__bar, .tabs--icons .tabs__bar {
    height: 60px;
}
</style>
