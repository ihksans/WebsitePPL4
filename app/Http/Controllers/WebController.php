<?php

namespace App\Http\Controllers;

class WebController extends Controller{
    
    public function about()
    {
        return view('about');
    }

    public function index()
    {
        return view('welcome');
    }
}

    
