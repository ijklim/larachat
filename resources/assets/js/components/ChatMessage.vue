<template>
    <div>
        <div class='badge badge-pill badge-success'>{{ chatMessage.user }}:</div>
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
        }
    }
</script>
