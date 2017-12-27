<?php

Route::get('/', function () {
    return view('chat');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

