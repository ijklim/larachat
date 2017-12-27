@extends('layouts.app')

@section('style')
    #chat-window {
        height: 90vh;
    }

    .card-footer > input:focus {
        box-shadow: none;
    }
@endsection

@section('content')
<div id='chat-window' class="card w-100">
    <div class='card-header bg-info'><h2 class='m-0'>Chat Room</h2></div>
    <div class='card-body bg-light'>
    </div>
    <div class='card-footer bg-white'>
        <input type="text" name="chat-message" class="form-control border-0 px-0" placeholder="Type your message here..." />
    </div>
</div>

@endsection