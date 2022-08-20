<script>
import { createEventDispatcher } from "svelte";

import Modal from "./Modal.svelte";
let showModal = false;

const dispatch = createEventDispatcher();

const handleModalTrigger = () => showModal = !showModal

const newUser = {
    name: '',
    email: '',
    active: null
};

let user = newUser;

$: disableSubmit = !user.name || !user.email


const createUser = () => {
    handleModalTrigger();
    dispatch('create', user);
    user.name = '';
    user.email = '';
    user.active = null
}
</script>

<div class="mt-4">
    <button 
        on:click={handleModalTrigger}
        class="px-2 py-1 bg-purple-800 text-white rounded cursor-pointer"
    >New User</button>

    {#if showModal}
    <Modal on:close={handleModalTrigger} on:submit={createUser}>
        <h1 class="text-2xl text-center">Create New User</h1>

        <div class="form-body">
            <div class="py-1 px-2 my-4">
                <label for="">Name</label>
                <input type="text" bind:value={user.name} class="px-2 py-1 w-full rounded border"/>
            </div>
            <div class="py-1 px-2 my-4">
                <label for="">Email</label>
                <input type="text" bind:value={user.email} class="px-2 py-1 w-full rounded border"/>
            </div>
            <div class="py-1 px-2 my-4 flex justify-between">
                <label for="">Active:</label>
                <div class="flex">
                    <label for="true">Yes</label>
                    <input 
                        type="radio" name="active" on:change={() => user.active = true} id="true"
                        class="px-2 py-1 w-full rounded border mx-5"
                    />
                    <label for="false">No</label>
                    <input 
                        type="radio" name="active" on:change={() => user.active = false} id="false"
                        class="px-2 py-1 w-full rounded border mx-5"
                    />
                </div>
            </div>
        </div>

        <button 
            slot="right-button" 
            class="px-2 py-1 bg-blue-400 text-white rounded"
            type="submit"
            disabled={disableSubmit}
        >Create</button>
    </Modal>
    {/if}
</div>


<style>
    button:disabled{
        cursor: not-allowed;
    }
</style>