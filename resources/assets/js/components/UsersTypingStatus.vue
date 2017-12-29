<template>
    <div style="position:absolute;right:25px;bottom:70px;color:red;font-size:0.8rem;">
        <div v-for='(user, index) in usersTyping' :key='index'>{{ user }} is typing...</div>
    </div>
</template>

<script>
    export default {
        name: 'UsersTypingStatus',

        props: {
            usersTyping: {
                default: []
            }
        }
    }
</script>
