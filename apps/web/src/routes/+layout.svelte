<script lang="ts">
  import Nav from '$lib/components/Nav/Nav.svelte'
  import './styles.scss'

  // TODO typing
  export let data: any
</script>

<div class="min-h-full">
  <Nav isLoggedIn={data.user} />
  <div class="py-10">
    <div class="container mx-auto sm:px-6 lg:px-8">
      <slot />
    </div>
  </div>
</div>
