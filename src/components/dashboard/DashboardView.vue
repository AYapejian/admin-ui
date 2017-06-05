<template>
    <div class="dashboard-view">
        <dashboard-widget title="Widget One"></dashboard-widget>
    </div>
</template>

<script>
import DashboardWidget from './components/DashboardWidget'

const widgets = [
    { name: 'Widget One' },
    { name: 'Widget Two' },
    { name: 'Widget Three' }
]

export default {
    name: 'DashboardHome',
    components: { DashboardWidget },
    data () {
        return {
            widgets: widgets
        }
    }
}
</script>

<style scoped>
</style>
