<?php

use Illuminate\Support\Facades\Route;

Route::view('/{path?}', 'app')->where('path', '.*');

Route::get('/', function () {
    return view('welcome');
});
