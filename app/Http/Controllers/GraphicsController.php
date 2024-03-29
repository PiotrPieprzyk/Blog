<?php

namespace App\Http\Controllers;

use App\User;
use App\Graphic;
use DB;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GraphicsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($user_id)
    {
        if($user_id==0){
            $images = DB::table("graphics")->get();
        }
        else{
            $images = User::find($user_id)->graphics;
        }
       
        return $images;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'id'=> 'required',
            'file' => 'bail|required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $path = Storage::putFile('/public/graphicNew', new File($request->file), 'public');
        // $graphic_file_name = str_replace($upload_path . '/', "");
        Graphic::create([
            'user_id' => $request->id,
            'path' => str_replace('public/graphicNew/', '', $path),
        ]);

        return str_replace('public/graphicNew/', '', $path);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Graphic $graphic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Graphic $graphic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $file_name = Graphic::where('id', $id)->get()[0]->path;
        $file_path = 'public/graphicNew/'.$file_name;
        Storage::delete($file_path);
        Graphic::where('id', $id)->delete();
        return $file_path;
    }
}
