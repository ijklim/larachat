
require('./bootstrap');

window.Vue = require('vue');

Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('users-typing-status', require('./components/UsersTypingStatus.vue'));

const app = new Vue({
    el: '#app',
    data: {
        chatMessages: [],
        usersTyping: [],
        myMessage: '',
        userName: ''
    },
    watch: {
        chatMessages() {
            // Ensure new message is shown
            // Timeout is required for scrollHeight final value to be calculated by the browser
            setTimeout(() => {
                let el = document.querySelector('#chat-messages')
                el.scrollTop = el.scrollHeight
            }, 100)
        },
        myMessage() {
            Echo.private('channel-chat')
                .whisper('typing', {
                    userName: this.userName,
                    message: this.myMessage
                });
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
        // Get user name if available
        this.userName = document.head.querySelector('meta[name="user-name"]').content;
        
        if (this.userName.length) {
            // Do not initialize Echo listen if user is not logged in
            // app/Events/ChatEvent.php, channel defined in method broadcastOn()
            Echo.private('channel-chat')
                .listen('.App\\Events\\ChatEvent', (e) => {
                    this.chatMessages.push({
                        'userName': e.userName,
                        'message': e.message
                    })
                })
                .listenForWhisper('typing', (e) => {
                    if (e.message.length > 0) {
                        if (!this.usersTyping.includes(e.userName)) {
                            // Add user name to the list of users who are typing
                            this.usersTyping.push(e.userName);
                        }
                    } else {
                        // Remove user name from list of users who are typing
                        this.usersTyping = this.usersTyping.filter(userName => {
                            return userName !== e.userName;
                        });
                    }
                });
        }
    }
});
