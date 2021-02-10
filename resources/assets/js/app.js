
require('./bootstrap');

window.Vue = require('vue');

// Ref: https://stackoverflow.com/questions/41983767/vue-template-or-render-function-not-defined-yet-i-am-using-neither
import ChatMessage from './components/ChatMessage.vue';
import UsersTypingStatus from './components/UsersTypingStatus.vue';

Vue.component('chat-message', ChatMessage);
Vue.component('users-typing-status', UsersTypingStatus);

// console.log(Vue.version);

const app = {
    data: {
        chatMessages: [],
        usersTyping: [],
        myMessage: '',
        numberOfUsers: 0,
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
        },
        /**
         * Add user name to the list of users who are typing
         *
         * @param string userName
         * @return void
         */
        addUserTyping(userName) {
            // Add user name to the list of users who are typing
            if (!this.usersTyping.includes(userName)) {
                this.usersTyping.push(userName);
            }
        },
        /**
         * Remove user name from the list of users who are typing
         *
         * @param string userName
         * @return void
         */
        removeUserTyping(userName) {
            if (this.usersTyping.includes(userName)) {
                this.usersTyping = this.usersTyping.filter(userTyping => {
                    return userTyping !== userName;
                });
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
                        'message': e.message,
                        'time': (new Date()).toLocaleTimeString()
                    })
                })
                .listenForWhisper('typing', (e) => {
                    if (e.message.length > 0) {
                        this.addUserTyping(e.userName);
                    } else {
                        this.removeUserTyping(e.userName);
                    }
                });

            Echo.join(`channel-chat`)
                .here((users) => {
                    this.numberOfUsers = users.length;
                })
                .joining((user) => {
                    this.numberOfUsers++;
                })
                .leaving((user) => {
                    this.numberOfUsers--;
                });
        }
    }
};

new Vue(app).$mount('#app');
