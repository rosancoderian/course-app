<script lang="ts">
  import { PUBLIC_PB_BASE_URL } from '$env/static/public'
  import EnrollModal from '../EnrollModal/EnrollModal.svelte'

  export let id = ''
  export let title = ''
  export let image = ''
  export let desc = ''
  export let enrolled = false
  export let mode: 'enroll' | 'view' = 'enroll'

  const imageSrc = `${PUBLIC_PB_BASE_URL}/api/files/courses/${id}/${image}`
  const courseHref = `course/${id}`
</script>

<div class="card w-64 h-72 bg-base-100 border border-base-300 shadow-xl">
  <figure>
    <img class="object-cover h-36" src={imageSrc} alt={title} />
  </figure>
  <div class="card-body p-4">
    <h2 class="card-title link"><a href={courseHref}>{title}</a></h2>
    <p>{desc}</p>
    <div class="card-actions">
      {#if mode === 'enroll' && enrolled}
        <span class="font-bold text-primary mx-auto">EROLLED</span>
      {:else if mode === 'enroll' && !enrolled}
        <EnrollModal courseId={id} title={`Enroll to ${title}`} action={'?/enroll'} />
      {:else if mode === 'view'}
        <a href={`/course/${id}`} class="btn btn-primary w-full">VIEW</a>
      {/if}
    </div>
  </div>
</div>
