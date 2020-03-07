<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Homepage
Route::get('/', 'BarangController@index');

// Show detail product
Route::get('/{id}','BarangController@show');

// post barang
Route::post('/','BarangController@create');

// Update Barang
Route::put('/{id}','BarangController@update');

// delete barang
Route::delete('/{id}','BarangController@destroy');

// Login, Register
Route::prefix('auth')->group(function () {
    Route::post('/', 'Auth\LoginController@login');
    Route::post('/register', 'Auth\RegisterController@register');
//    Route::post('/{id}/editProfile','');
});

// Show product by category
Route::prefix('category')->group(function () {
    Route::get('/{kategori}','BarangController@showCategory');
//    Route::get('/{kategori}/{nama_barang}', 'BarangController@showProductFromCategory');
});

// Show Merchant detail
Route::get('{username}/detail','PenjualController@show');

// Show all Products from Merchant
Route::get('{username}','BarangController@showProductsFromMerchant');