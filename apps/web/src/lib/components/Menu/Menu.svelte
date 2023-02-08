<script lang="ts">
  import { page } from '$app/stores'

  // TODO typing
  export let menus: any[]
</script>

<ul class="menu bg-base-100 min-w-40">
  <slot name="menuBefore" />
  {#each menus as menu}
    <li class={$page.url.pathname.includes(menu.href) ? 'bordered' : ''}>
      <a href={menu?.href} class="truncate">{menu?.label}</a>
    </li>
  {/each}
  <slot name="menuAfter" />
</ul>
