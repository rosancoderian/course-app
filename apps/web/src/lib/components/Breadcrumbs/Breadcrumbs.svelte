<script lang="ts">
  export let items: { label: string; href?: string }[] = []
</script>

<div class="text-sm breadcrumbs">
  <ul>
    {#each items as item}
      <li>
        {#if item.href}
          <a href={item.href}>{item.label}</a>
        {:else}
          {item.label}
        {/if}
      </li>
    {/each}
  </ul>
</div>
