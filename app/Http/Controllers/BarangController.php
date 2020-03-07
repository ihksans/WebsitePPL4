<?php


namespace App\Http\Controllers;

use App\Model\Barang;
use App\Model\Penjual;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class BarangController extends Controller
{
    // Show All Barang data
    public function index() {
        $barang = Barang::paginate(2);
        return $barang;
    }

    // Post New Barang
    public function create(Request $request) {
        $barang = new Barang;
        $barang->id_penjual = $request->id_penjual; // should delete it later (?)
        $barang->nama_barang = $request->nama_barang;
        $barang->kategori = $request->kategori;
        $barang->deskripsi= $request->deskripsi;
        $barang->harga= $request->harga;

        $photo = $request->file('foto');
        $imagename = time().'.'.$photo.getClientOriginalExtension(); 
    
        // $destinationPath_thumb = storage_path('images/thumbnail_images');
        // $thumb_img = Image::make($photo->getRealPath())->resize(100, 100);
        // $thumb_img->save($destinationPath_thumb.'/'.$imagename,80);
    
        // $destinationPath_medium = storage_path('images/medium_images');
        // $medium_img = Image::make($photo->getRealPath())->resize(500, 500);
        // $medium_img->save($destinationPath_medium.'/'.$imagename,80);
    
        // $destinationPath_original = storage_path('images/original_images');
        // $photo->move($destinationPath_original, $imagename);

        $barang->save();
        return response()->json($barang);
       // return Barang::create($request->all());
    }

    // Show detail barang
    public function show($id)
    {
        $barang = Barang::find($id);
        return response()->json($barang);
    }

    public function update(Request $request, $id)
    {
        $barang= Barang::find($id);

        $barang->nama_barang = $request->input('nama_barang');
        $barang->kategori = $request->input('kategori');
        $barang->deskripsi = $request->input('deskripsi');
        $barang->harga = $request->input('harga');
        $barang->foto = $request->input('foto');
        $barang->save();
        return response()->json($barang);
    }

    public function destroy($id)
    {
        $barang = Barang::find($id);
        $barang->delete();
        return response()->json('barang removed successfully');
    }

    // Show Barang sort by category
    public function showCategory($kategori)
    {
        $barang = Barang::where('kategori','LIKE','%'.$kategori.'%')->get();
        return response()->json($barang);
    }

//    public function showProductFromCategory($kategori,$nama_barang)
//    {
//        $find = $barang = Barang::where('kategori','LIKE','%'.$kategori.'%')->get();
//
//        if ($find) {
//            $barang = Barang::where('nama_barang','LIKE','%'.$nama_barang.'%')->get();
//
//            if ($barang) {
//                return response()->json($barang);
//            } else {
//                $res['status'] = false;
//                $res['message'] = 'Barang Not found';
//                return response($res, 404);
//            }
//
//        } else {
//            $res['status'] = false;
//            $res['message'] = 'Not found';
//            return response($res, 404);
//        }
//
//    }

    public function showProductsFromMerchant($username)
    {
        $id_penjual = Penjual::where('username',$username)->pluck('id_penjual');

        if($id_penjual) {
            $barang = Barang::where('id_penjual',$id_penjual)->get();
            return response()->json($barang);
        } else {
            $res['status'] = false;
            $res['message'] = 'User not found';
            return response($res, 404);
        }

    }
}
