@extends('layouts.app')

@section('style')
    #chat-window {
        height: 85vh;
    }

    #chat-messages {
        overflow-y: scroll;
    }

    .card-footer > input:focus {
        box-shadow: none;
    }
@endsection

@section('content')
<div id='chat-window' class="card w-100">
    <div class='card-header bg-light'><h2 class='m-0'>Chat Room</h2></div>
    <div id='chat-messages' class='card-body bg-light py-2'>
        <users-typing-status v-bind='{usersTyping}'></users-typing-status>
        <chat-message v-for='(chatMessage, index) in chatMessages' :key='index' v-bind='{chatMessage}'></chat-message>
    </div>
    <div class='card-footer bg-white'>
        <input
            class="form-control border-0 px-0"
            name="chat-message"
            placeholder="Type your message here..."
            type="text"
            v-model="myMessage"
            @keyup.enter="send"
        />
    </div>
</div>

@endsection