<template>
    <div>
        <div
            class="badge badge-pill"
            :class="badgeClass"
        >
            {{ chatMessage.userName }} • {{ chatMessage.time }}:
        </div>
        <div class='pl-2'>{{ chatMessage.message }}</div>
    </div>
</template>

<script>
    export default {
        name: 'ChatMessage',

        props: {
            chatMessage: {
                default: ''
            }
        },

        computed: {
            badgeClass() {
                let userName = document.head.querySelector('meta[name="user-name"]').content;

                return userName == this.chatMessage.userName ? 'badge-primary' : 'badge-success';
            }
        }
    }
</script>
