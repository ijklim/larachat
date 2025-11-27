<?php

use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;

// The constructor in controller can enforce authentication before accessing webpage
Route::get('/', [ChatController::class, 'index']);
Route::post('/send', [ChatController::class, 'send']);

Auth::routes();
