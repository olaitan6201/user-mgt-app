<script>
import User from "./User.svelte";
import user1 from "../assets/images/user1.png"
import user2 from "../assets/images/user2.png"
import user3 from "../assets/images/user3.png"
import userHack from "../assets/images/user-hack.png"
import Filter from "./Filter.svelte";
import NewUser from "./NewUser.svelte";

    let users = [
        {
            id: 1,
            image: user1,
            name: "Me",
            email: "Me@mail.com",
            active: true
        },
        {
            id: 2,
            image: user2, 
            name: "Jeni",
            email: "Jeni@mail.com",
            active: false
        },
        {
            id: 3,
            image: user3,
            name: "John",
            email: "John@mail.com",
            active: false
        },
        {
            id: 4,
            image: userHack,
            name: "Hacker",
            email: "Hacker@mail.com",
            active: true
        }
    ]
    
    $: filteredUsers = users;

    const filterUsers = e => {
        const status = e.detail
        if(status === 'all') return filteredUsers = users;
        const active = status === 'active';
        filteredUsers = users.filter((user) => user.active === active);
    }

    const removeUser = e => {
        const id = e.detail

        return users = users.filter(user => user.id !== id)
    }
</script>

<div>
    <h1 class="text-2xl text-center mt-10">List of Users</h1>
    
    <div class="flex justify-between mx-4 items-center">
        <Filter on:filter={filterUsers} />
        <NewUser />
    </div>
    
    {#each filteredUsers as user, i (user.id)}
    <User {user} on:remove={removeUser}/>
    {:else}
    <p>No user found !</p>
    {/each}
</div>


<style></style>