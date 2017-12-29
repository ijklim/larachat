<template>
    <div style="position:absolute;right:20px;">
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
