<?php


namespace App\Http\Controllers;

use App\Model\Penjual;
use Illuminate\Http\Request;

class PenjualController extends Controller
{
    public function show($username)
    {
        $penjual = Penjual::where('username','LIKE',$username)->get();
        return response()->json($penjual);
    }
}
