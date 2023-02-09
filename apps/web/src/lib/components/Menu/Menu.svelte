<script lang="ts">
  import { page } from '$app/stores'
  import classNames from 'classnames'

  // TODO typing
  export let menus: any[]
  export let style = ''
</script>

<ul class={classNames([`menu bg-base-100 min-w-40`, { [style]: !!style }])}>
  <slot name="menuBefore" />
  {#each menus as menu}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li
      class={classNames([
        { bordered: $page.url.pathname.includes(menu.href) || menu.active },
      ])}
      on:click={menu?.onClick ?? (() => null)}>
      <a href={menu?.href ?? '#'} class="truncate">{menu?.label}</a>
    </li>
  {/each}
  <slot name="menuAfter" />
</ul>
