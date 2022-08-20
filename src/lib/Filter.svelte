<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const filter = e => {
        dispatch('filter', e.target.value)
    }
</script>

<div class="mt-4">
    <label for="user-filter">Filter User</label>
    <select 
        name="user-filter" id="user-filter" 
        class="border rounded-lg px-4 py-2 ml-4"
        on:change={filter}
    >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
    </select>
</div>