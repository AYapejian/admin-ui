<template>
    <v-flex sm4 md3>
        <v-card class="metric-widget ma-1 elevation-6" :class="getThresholdClass">
             <v-card-row>
                <v-card-text class="widget-value">
                    <h2 class="display-3">{{myValue}}</h2>
                </v-card-text>
             </v-card-row>
            <v-card-row>
             <v-card-title class="pa-0 pl-2 ma-0">
                <div>{{ title }}</div>
            </v-card-title>
            </v-card-row>
        </v-card>
    </v-flex>
</template>

<script>

export default {
    name: 'MetricWidget',
    data() {
        return { myValue: this.value }
    },
    props: {
        value: { type: Number, default: 48 },
        title: { type: String, default: 'Testing' },

        thresholdHigh: { type: Object, default: () => ({ color: 'red',    value: 80 }) },
        thresholdMed:  { type: Object, default: () => ({ color: 'orange', value: 50 }) },
        thresholdLow:  { type: Object, default: () => ({ color: 'green',  value: 20 }) }
    },
    computed: {
        getThresholdClass() {
            const val = this.myValue;
            if (val >= this.thresholdHigh.value) { return 'threshold-high' }
            else if (val < this.thresholdHigh.value && val >= this.thresholdMed.value) { return 'threshold-med' }
            else { return 'threshold-low' }
        }
    },
    // TODO: Remove me, just for testing
    mounted() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.myValue = this.myValue + 1
            }, Math.floor(Math.random() * (5000 - 1500)) + 1500)
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/_variables.styl'

.metric-widget
    transition: background-color 500ms linear;
    .widget-value
        text-align: center
    &.threshold-high
        background: $theme.error
    &.threshold-med
        background: $theme.warning
    &.threshold-low
        background: $theme.primary

</style>
