<script lang="ts">
  import isAdmin from '$lib/utils/isAdmin'

  export let user: any
</script>

<nav class="navbar bg-base-100 border-b">
  <div class="container mx-auto">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">Courses</a>
    </div>
    <div class="flex-none">
      {#if !user}
        <div class="dropdown dropdown-end">
          <a href="/login" class="btn btn-primary">Login</a>
          <a href="/register" class="btn btn-secondary">Register</a>
        </div>
      {:else}
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full  bg-base-300">
              <img
                src={`https://ui-avatars.com/api/?name=${user.name}`}
                alt="User avatar" />
            </div>
          </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {#if !user.isAdmin}
              <li>
                <a href="#" class="justify-between text-base-300 font-bold text-xs"
                  >User Menu</a>
              </li>
              <!-- <li>
              <a href="/my/profile" class="justify-between">My Profile</a>
            </li> -->
              <li>
                <a href="/my/courses" class="justify-between">My Courses</a>
              </li>
            {/if}

            {#if user.isAdmin}
              <li class="border-t">
                <a href="#" class="justify-between text-base-300 font-bold text-xs"
                  >Admin Menu</a>
              </li>
              <li>
                <a href="/_/courses" class="justify-between">Courses</a>
              </li>
              <!-- <li>
                <a href="/_/enrollments" class="justify-between">Enrollments</a>
              </li> -->
            {/if}

            <li class="border-t">
              <form action="/logout" method="POST">
                <button type="submit" class="w-full text-start">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      {/if}
    </div>
  </div>
</nav>
