<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class appointment extends Model
{
    protected $fillable = [
            'firstname', 
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
    ];
    use HasFactory;
}
