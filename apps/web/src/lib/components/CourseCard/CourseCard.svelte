<script type="ts">
  import { applyAction } from '$app/forms'
  import { PUBLIC_PB_BASE_URL } from '$env/static/public'
  import EnrollModal from '../EnrollModal/EnrollModal.svelte'

  export let id = ''
  export let title = ''
  export let image = ''
  export let desc = ''
  export let enrolled = false

  const imageSrc = `${PUBLIC_PB_BASE_URL}/api/files/courses/${id}/${image}`
  const courseHref = `course/${id}`
</script>

<div class="card w-80 h-96 bg-base-100 border border-base-300 shadow-xl">
  <figure>
    <img class="object-cover h-[240px]" src={imageSrc} alt={title} />
  </figure>
  <div class="card-body">
    <h2 class="card-title link"><a href={courseHref}>{title}</a></h2>
    <p>{desc}</p>
    <div class="card-actions">
      {#if enrolled}
        <span class="font-bold text-primary mx-auto">EROLLED</span>
      {:else}
        <EnrollModal courseId={id} title={`Enroll to ${title}`} action={'?/enroll'} />
      {/if}
    </div>
  </div>
</div>
