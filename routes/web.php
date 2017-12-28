<?php

Route::get('/', 'ChatController@index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

