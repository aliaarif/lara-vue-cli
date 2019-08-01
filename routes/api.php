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

Route::get('/mock', function (Request $request) {
	return array(
		'msg' => 'Hello Laracon!'
	);
});

Route::group([

	'middleware' => 'api',
	'prefix' => 'auth'

], function ($router) {

	Route::post('login', 'AuthController@login');
	Route::post('logout', 'AuthController@logout');
	Route::post('refresh', 'AuthController@refresh');
	Route::post('me', 'AuthController@me');

});


Route::group([

	'middleware' => ['web', 'cors'],
	'prefix' => ''

], function ($router) {

	Route::post('home', 'SpaController@home');

});




