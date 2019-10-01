<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Graphic extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'path'
    ];

    public function description()
    {
        return $this->hasOne('App\Description');
    }
}
