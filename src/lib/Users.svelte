<script>
import User from "./User.svelte";
import Filter from "./Filter.svelte";
import NewUser from "./NewUser.svelte";
import { createUser, removeUser, users } from '../store'
import { tweened } from 'svelte/motion'
import { cubicIn } from "svelte/easing";
import { onMount } from "svelte";
    
    $: filteredUsers = $users;
    $: progress = tweened(0, {
        duration: 1000,
        easing: cubicIn
    })
    
    const filterUsers = e => {
        const status = e.detail
        if(status === 'all') filteredUsers = $users;
        else {
            const active = status === 'active';
            filteredUsers = $users.filter((user) => user.active === active);
        }
        progress.set(filteredUsers.length);
    }

    onMount(()=>{
        progress.set($users.length);
    })
</script>

<div>
    <h1 class="text-2xl text-center mt-10">List of Users</h1>

    <div class="flex justify-between mx-4 items-center">
        <Filter on:filter={filterUsers} />
        <NewUser on:create={createUser} />
        <progress max={$users.length} min="0" value={$progress} class="w-500 mx-4"></progress>
    </div>

    
    {#each filteredUsers as user, i (user.id)}
    <User {user} id={i+1} on:remove={removeUser}/>
    {:else}
    <p>No user found !</p>
    {/each}
</div>


<style></style>