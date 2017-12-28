
require('./bootstrap');

window.Vue = require('vue');

Vue.component('chat-message', require('./components/ChatMessage.vue'));

const app = new Vue({
    el: '#app',
    data: {
        chatMessages: [],
        myMessage: '',
        user: 'IvanL'
    },
    watch: {
        chatMessages() {
            // Ensure new message is shown
            // Timeout is required for scrollHeight final value to be calculated by the browser
            setTimeout(() => {
                let el = document.querySelector('#chat-messages')
                el.scrollTop = el.scrollHeight
            }, 100)
        }
    },
    methods: {
        send() {
            if (this.myMessage.length) {
                axios.post('/send', {
                        message: this.myMessage
                    })
                    .then((response) => {
                        // Successful, no further action required
                        // Echo will handle update as pusher will broadcast to sender as well
                    })
                    .catch(error => {
                        console.error(error)
                    });
                this.myMessage = ''
            }
        }
    },
    mounted () {
        // app/Events/ChatEvent.php, channel defined in method broadcastOn()
        Echo.private('channel-chat')
            .listen('.App\\Events\\ChatEvent', (e) => {
                this.chatMessages.push({
                    'userName': e.userName,
                    'message': e.message
                })
            });
    }
});
