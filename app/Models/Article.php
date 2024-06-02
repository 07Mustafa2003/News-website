<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'content',
        'publication_date',
        'author_id',
        'category_id',
        'tags',
        'image_url',
        'video_url'
    ];
}
