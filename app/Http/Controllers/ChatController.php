<?php

namespace App\Http\Controllers;

use App\Events\ChatEvent;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('chat');
    }

    public function send(Request $request)
    {
        $user = auth()->user();
        event(new ChatEvent($request->message, $user));
    }

    public function test()
    {
        $user = auth()->user();
        $chatEvent = new ChatEvent('test from larachat '.date("Y-m-d H:i:s"), $user);
        event($chatEvent);
        return 'Sent';
    }
}
