<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
  // database/migrations/xxxx_xx_xx_create_articles_table.php
  public function up()
  {
      Schema::create('articles', function (Blueprint $table) {
          $table->id('article_id');
          $table->string('title');
          $table->text('content');
          $table->date('publication_date');
          $table->unsignedBigInteger('author_id');
          $table->unsignedBigInteger('category_id');
          $table->string('tags');
          $table->string('image_url')->nullable();
          $table->string('video_url')->nullable();
          $table->timestamps();

          $table->foreign('author_id')->references('author_id')->on('authors')->onDelete('cascade');
          $table->foreign('category_id')->references('category_id')->on('categories')->onDelete('cascade');
      });
  }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
