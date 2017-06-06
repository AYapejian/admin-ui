<template>
    <div class="dashboard-view">
        <v-layout class="mr-3 ml-3 mb-5" row-sm column child-flex-sm justify-space-between>
            <metric-widget title="First"  :value="18"></metric-widget>
            <metric-widget title="Second" :value="78"></metric-widget>
            <metric-widget title="Third"  :value="48"></metric-widget>
        </v-layout>

        <v-layout row-sm column child-flex-sm>
            <dashboard-widget title="Widget One"></dashboard-widget>
        </v-layout>
    </div>
</template>

<script>
import DashboardWidget from './components/DashboardWidget'
import MetricWidget    from './components/MetricWidget'

const widgets = [
    { name: 'Widget One' },
    { name: 'Widget Two' },
    { name: 'Widget Three' }
]

export default {
    name: 'DashboardHome',
    components: { DashboardWidget, MetricWidget },
    data () {
        return {
            widgets: widgets
        }
    }
}
</script>
