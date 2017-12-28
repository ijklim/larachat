<?php

// The constructor in controller can enforce authentication before accessing webpage
Route::get('/', 'ChatController@index');
Route::get('/test', 'ChatController@test');

Auth::routes();
