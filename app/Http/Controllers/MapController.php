<?php

namespace App\Http\Controllers;

use App\Map;
use Illuminate\Http\Request;

class MapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($name)
    {
        if (Map::where('map_name', $name)->first()) {
            $map = Map::where('map_name', $name)->first();

        } else {
            $map = null;
        }
        return $map;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Map::create([
            'map_name' => $request->name,
            'navigation' => $request->navigation,
            'descriptions' => $request->descriptions,
        ]);
        return $request;
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function save(Request $request)
    {
        if (Map::where('map_name', $request->name)->first()) {
            $map = Map::where('map_name', $request->name)->first();
            $map->map_name = $request->name;
            $map->navigation = $request->navigation;
            $map->descriptions = $request->descriptions;
        } else {
            Map::create([
                'map_name' => $request->name,
                'navigation' => $request->navigation,
                'descriptions' => $request->descriptions,
            ]);
        }

        $map->save();
        return $map;
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
