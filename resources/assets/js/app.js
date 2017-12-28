
require('./bootstrap');

window.Vue = require('vue');

Vue.component('chat-message', require('./components/ChatMessage.vue'));

const app = new Vue({
    el: '#app',
    data: {
        messages: [],
        myMessage: ''
    },
    watch: {
        messages() {
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
                this.messages.push({
                    'user': 'Ivan',
                    'body': this.myMessage
                })
                this.myMessage = ''
            }
        }
    }
});
