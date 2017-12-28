<template>
    <div>
        <div class='badge badge-pill badge-success'>{{ message.user }}:</div>
        <div class='pl-2'>{{ message.body }}</div>
    </div>
</template>

<script>
    export default {
        name: 'ChatMessage',

        props: {
            message: {
                default: ''
            }
        }
    }
</script>
