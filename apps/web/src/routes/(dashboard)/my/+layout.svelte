<script lang="ts">
  import Menu from '$lib/components/Menu/Menu.svelte'
  import DashboardLayout from '$lib/layouts/DashboardLayout/DashboardLayout.svelte'
</script>

<DashboardLayout>
  <span slot="side">
    <Menu menus={[{ label: 'My Courses', href: '/my/courses' }]} />
  </span>
  <slot />
</DashboardLayout>
