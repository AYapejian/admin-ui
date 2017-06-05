<template>
    <div class="app-layout">
        <v-layout column align-center>
            <router-view></router-view>
        </v-layout>
    </div>

    <!-- <v-layout column-xs row-sm>
        <v-flex xs12 sm12 md12>
            <v-card>
                <v-card-text>
                    <router-view></router-view>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout> -->
</template>

<script>
export default {
    name: 'SettingsLayout'
}
</script>

<style>
</style>
