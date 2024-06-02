<?php

// database/seeders/DatabaseSeeder.php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;
use App\Models\Author;
use App\Models\Category;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        Author::factory()->count(1000)->create();
        Category::factory()->count(100)->create();
        User::factory()->count(200)->create();
        Article::factory()->count(1000)->create();
    }
}


