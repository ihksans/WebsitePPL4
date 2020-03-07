<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', '')->name('welcome');

Route::get('/', function () {
    return view('welcome');
}); 

Auth::routes();

Route::get('/home', 'WebController@index')->name('home');

// Route::get('/about', 'WebController@about')->name('about');

Route::get('/about', function () {
    return view('about');
})->name('about'); 