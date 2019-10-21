<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Map extends Model
{
    protected $fillable = [
        'id',
        'map_name',
        'navigation',
        'descriptions',
    ];
}
