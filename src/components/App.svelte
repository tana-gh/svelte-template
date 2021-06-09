<script lang="ts">
import { Router }   from 'svelte-router-spa'
import Layout       from './Layout.svelte'
import IndexPage    from './IndexPage.svelte'
import HelloPage    from './HelloPage.svelte'
import NotFoundPage from './NotFoundPage.svelte'

const routes = [
    {
        name: '/',
        component: IndexPage,
        layout: Layout
    },
    {
        name: '/hello',
        component: HelloPage,
        layout: Layout,
        nestedRoutes: [
            {
                name: '/hello/:name',
                component: HelloPage,
                layout: Layout
            }
        ]
    },
    {
        name: '404',
        path: '404',
        component: NotFoundPage,
        layout: Layout
    }
]
</script>

<Router {routes}/>

<style lang="scss">
</style>
