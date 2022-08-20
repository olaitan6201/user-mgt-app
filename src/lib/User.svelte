<script>
import { createEventDispatcher } from "svelte";
import { fade, fly } from "svelte/transition";


    export let user;
    export let id
    const { image, name, email } = user;
    const dispatch = createEventDispatcher();
    const removeUser = (id) => {
        dispatch('remove', id)
    }
</script>

{#if user}
<div 
    transition:fly={{duration: 1000, x: 200}}
    class="
        flex m-5 bg-white border p-2 rounded-lg 
        shadow-md hover:shadow-lg cursor-pointer 
        items-center relative
    "
>
    <span 
        on:click={() => removeUser(user.id)}
        class="
            absolute right-0 top-0 -mt-3 rounded-full 
            w-5 h-5 text-center bg-red-300 text-white 
            text-sm hover:bg-red-700
        "
    >X</span>
    <span class="w-10">{id}</span>
    <img src={image} alt={name} class="rounded-full w-10 h-10"/>
    <p class="mx-4 w-20">{name}</p>
    <p class="mx-4 w-20">{email}</p>
</div>
{/if}