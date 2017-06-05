<template>
    <v-card class="mb-5">
        <v-card-row class="secondary darken-1">
            <v-card-title>
                <span class="white--text">Dashboard Widget</span>

                <v-spacer></v-spacer>

                <div>
                    <v-menu class="dashboard-widget" bottom left origin="top right">
                        <v-btn icon="icon" slot="activator" class="white--text">
                            <v-icon>more_vert</v-icon>
                        </v-btn>

                        <v-list>
                            <v-list-item>
                                <v-list-tile>
                                    <v-list-tile-title>Collapse</v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                            <v-list-item>
                                <v-list-tile>
                                    <v-list-tile-title>Remove Card</v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-card-title>
        </v-card-row>

        <v-card-text>
            <v-card-row height="75px">
                <v-icon class="mr-5" dark>settings</v-icon>
                <div>
                    <div>Desktop Widget</div><strong>Content</strong>
                </div>
            </v-card-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-row actions>
            <v-btn flat class="darken-1">Go to Widget Section</v-btn>
        </v-card-row>
    </v-card>
</template>

<script>
export default {
    name: 'DashboardWidget',
    props: {
        title: String
    },
    data () {
        return {}
    }
}
</script>

<style scoped lang="stylus">
// .dashboard-widget
//     border:1px solid black
</style>
