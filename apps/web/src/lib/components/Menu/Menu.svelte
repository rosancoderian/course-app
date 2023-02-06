<script lang="ts">
  import { page } from '$app/stores'

  // TODO typing
  export let menus: any[] = []
</script>

<ul class="menu bg-base-100 w-56">
  {#each menus as menu}
    <li class={$page.url.pathname === menu.href ? 'bordered' : ''}>
      <a href={menu?.hreft}>{menu?.label}</a>
    </li>
  {/each}
</ul>
