<script type="ts">
  import { PUBLIC_PB_BASE_URL } from '$env/static/public'

  export let id = ''
  export let title = ''
  export let image = ''
  export let desc = ''

  const imageUrl = `${PUBLIC_PB_BASE_URL}/api/files/courses/${id}/${image}`
</script>

<div class="card w-96 h-96 bg-base-100 border border-base-300 shadow-xl">
  <figure><img class="object-cover" src={imageUrl} alt={title} /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{desc}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Enroll</button>
    </div>
  </div>
</div>
