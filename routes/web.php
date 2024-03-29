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

// graphics
Route::get('/graphics/{user_id}', 'GraphicsController@index')->name('getGraphic');
Route::post('/graphics', 'GraphicsController@store')->name('postGraphic');
Route::delete('/graphics/{id}', 'GraphicsController@destroy')->name('destroyGraphic');

// graphics descriptions
Route::get('/graphics/description/{graphic_id}', 'DescriptionController@index')->name('getDescription');
Route::post('/graphics/description/{graphic_id}', 'DescriptionController@store')->name('getDescription');
Route::patch('/graphics/description/{graphic_id}', 'DescriptionController@edit')->name('getDescription');

// game maps
Route::get('maps/{name}', 'MapController@index');
Route::post('maps/save', 'MapController@save');
