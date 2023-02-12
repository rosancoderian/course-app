<script lang="ts">
  import NProgress from 'nprogress'
  import { navigating } from '$app/stores'
  import Nav from '$lib/components/Nav/Nav.svelte'
  import './styles.scss'
  import 'nprogress/nprogress.css'

  // TODO typing
  export let data: any

  NProgress.configure({
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
  })

  $: {
    if ($navigating) {
      NProgress.start()
    }
    if (!$navigating) {
      NProgress.done()
    }
  }
</script>

<div class="min-h-full">
  <Nav user={data.user} />
  <div class="py-10">
    <div class="container mx-auto px-2 sm:px-6 lg:px-8">
      <slot />
    </div>
  </div>
</div>
