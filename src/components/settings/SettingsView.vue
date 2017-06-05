<template>
    <!-- <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-toolbar class="transparent elevation-0">
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Settings</v-toolbar-title>
                </v-toolbar>

                <v-list two-line subheader>
                    <v-subheader>Hangout notifications</v-subheader>
          <v-list-item>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="notifications"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Notifications</v-list-tile-title>
                    <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="sound"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Sound</v-list-tile-title>
                <v-list-tile-sub-title>Hangouts message</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="video"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Video sounds</v-list-tile-title>
                <v-list-tile-sub-title>Hangouts vidoe call</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="invites"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Invites</v-list-tile-title>
                <v-list-tile-sub-title>Notify when receiving invites</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
    </v-layout> -->


    <v-tabs icons grow light>
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
    </v-tabs>


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
