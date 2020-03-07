<?php


namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Barang extends Model {
    protected $table = 'barang';
    protected $fillable = ['id','id_penjual',
        'nama_barang','kategori','deskripsi','harga','foto',
    ];
}
