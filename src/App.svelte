<script>
import { Router, Route, Link } from "svelte-navigator";
import HomePage from "./pages/HomePage.svelte";
import UsersPage from "./pages/UsersPage.svelte";
</script>

<main>

  <Router>
    <nav class="p-4 bg-blue-800 text-white">
      <Link class="mx-4 cursor-pointer hover:underline" to="/">Home</Link>
      <Link class="mx-4 cursor-pointer hover:underline" to="/users">Users</Link>
    </nav>

    <div>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/users">
        <UsersPage />
      </Route>
    </div>
  </Router>

</main>

<style>
</style>
