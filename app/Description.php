<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Description extends Model
{
    protected $fillable = [
        'graphic_id',
        'creator',
        'title',
        "date",
        "info",
        "image",
    ];

    
}
