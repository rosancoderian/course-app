<script lang="ts">
  import Menu from '$lib/components/Menu/Menu.svelte'
</script>

<div class="flex w-full h-full">
  <Menu
    menus={[
      // { label: 'My Profile', href: '/my/profile' },
      { label: 'My Courses', href: '/my/courses' },
    ]} />
  <div class="w-full border-l border-base-300 pl-8">
    <slot />
  </div>
</div>
