<script type="ts">
  import { PUBLIC_PB_BASE_URL } from '$env/static/public'
  import EnrollModal from '../EnrollModal/EnrollModal.svelte'

  export let id = ''
  export let title = ''
  export let image = ''
  export let desc = ''

  const imageUrl = `${PUBLIC_PB_BASE_URL}/api/files/courses/${id}/${image}`
  const courseUrl = `course/${id}`
  const enrollModalId = `enroll-modal-${id}`
</script>

<div class="card min-h-96 bg-base-100 border border-base-300 shadow-xl">
  <figure>
    <img class="object-cover w-[320px] h-[240px]" src={imageUrl} alt={title} />
  </figure>
  <div class="card-body">
    <h2 class="card-title link"><a href={courseUrl}>{title}</a></h2>
    <p>{desc}</p>
    <div class="card-actions">
      <label for={enrollModalId} class="btn btn-primary w-full"> Enroll </label>
      <EnrollModal id={enrollModalId} title={`Enroll to ${title}`} />
    </div>
  </div>
</div>
