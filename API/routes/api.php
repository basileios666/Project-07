<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\AppointmentController;


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
//***********User routes ********************************/
Route::post('adduser',[UserController::class,'store']);
Route::get('getallusers',[UserController::class,'index']);
Route::get('getuser/{id}',[UserController::class,'show']);
Route::post('updateuser/{id}',[UserController::class,'update']);
Route::get('destroyUser/{id}',[UserController::class,'destroy']);
//***********User routes ********************************/


//**********************************Comments routes *************************

Route::post('addcomment',[CommentController::class,'store']);   //***********
Route::get('getsinglecomment/{id}',[CommentController::class,'show']);//*****
Route::get('destroycomment/{id}',[CommentController::class,'destroy']);//****
Route::get('getallcomments',[CommentController::class,'create']);//**********

//*******************************Comments routes ****************************



//*******************************Appointment routes***************************
Route::post('addappointment',[AppointmentController::class,'store']);   //***********
Route::get('getsingleappointment/{id}',[AppointmentController::class,'show']);//*****
Route::get('destroyappointment/{id}',[AppointmentController::class,'destroy']);//****
Route::get('getallappointments',[AppointmentController::class,'create']);//**********

//*******************************Appointment routes***************************






Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
