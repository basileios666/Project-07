<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Appointment::join('users', 'users.id', '=', 'appointments.user_id')
        ->get(['appointments.*', 'users.username']);


        // return Appointment::join('users', 'users.id', '=', 'appointments.user_id')
        // ->get(['appointments.*', 'users.*']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'firstname', //reminder to change the values after fetching user info
            'lastname',
            'phonenumber',
            'email',
            'age',
            'message',
            'time',
            'allergy1',
            'allergy2',
            'allergy3',
            'services',
            'user_id'
            ]);
            return Appointment::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Appointment::find($id);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $UpAppointment=new Appointment();
        $UpAppointment->dateTime=$request->updateTime;
        $UpAppointment->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       return Appointment::destroy($id);
    }
}
