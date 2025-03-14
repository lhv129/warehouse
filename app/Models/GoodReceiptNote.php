<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoodReceiptNote extends Model
{
    use HasFactory;

    // use SoftDeletes;
    // protected $dates = ['deleted_at'];

    protected $fillable = [
        'supplier_id',
        'user_id',
        'payment_method_id',
        'code',
        'total_price',
        'status',
        'created_at',
        'deleted_at'
    ];
}
