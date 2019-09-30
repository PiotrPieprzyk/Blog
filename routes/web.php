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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/graphics/{user_id}', 'GraphicsController@index')->name('getGraphic');
Route::post('/graphics', 'GraphicsController@store')->name('postGraphic');
Route::delete('/graphics/{id}', 'GraphicsController@destroy')->name('destroyGraphic');


Route::get('/graphics/description/{graphic_id}', 'DescriptionController@index')->name('getDescription');