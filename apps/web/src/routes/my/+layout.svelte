<script lang="ts">
  import Menu from '$lib/components/Menu/Menu.svelte'
</script>

<div class="flex w-full h-full">
  <Menu
    menus={[
      { label: 'My Profile', href: '/my/profile' },
      { label: 'My Courses', hre: '/my/courses' },
    ]}
  />
  <div class="border-l border-base-300 px-4 py-2">
    <slot />
  </div>
</div>
