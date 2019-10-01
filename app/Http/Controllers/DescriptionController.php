<?php

namespace App\Http\Controllers;

use App\Graphic;
use App\Description;
use Illuminate\Http\Request;

class DescriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($graphic_id)
    {
       $description = Graphic::find($graphic_id)->description;
        return $description;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$graphic_id)
    {
        $graphic = Description::where('graphic_id', $graphic_id)->first();
        $graphic->title = $request->title? $request->title:null;
        $graphic->creator = $request->creator? $request->creator:null;
        $graphic->date = $request->date? $request->date:null;
        $graphic->info = $request->info? $request->info:null;
        $graphic->image = $request->image? $request->image:null;

        $graphic->save();
        return $request;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($graphic_id)
    {
        $graphic = Description::where('graphic_id', $graphic_id)->first();
        if($graphic==""){
            $description = Description::create([
                'graphic_id' => $graphic_id,
                'title' => null,
                'creator' => null,
                'date' => null,
                'info'=>null,
                'image'=>null
                ]);
        }
    
       
        return $graphic;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
