<script lang="ts">
  import Menu from '$lib/components/Menu/Menu.svelte'
  import DashboardLayout from '$lib/layouts/DashboardLayout/DashboardLayout.svelte'
</script>

<DashboardLayout>
  <span slot="side">
    <Menu
      menus={[
        { label: 'Courses', href: '/_/courses' },
        // { label: 'Enrollments', href: '/_/enrollments' },
      ]} />
  </span>
  <slot />
</DashboardLayout>
