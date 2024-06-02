<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id('video_id');
            $table->unsignedBigInteger('article_id');
            $table->string('video_url');
            $table->string('caption')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();

            $table->foreign('article_id')->references('article_id')->on('articles')->onDelete('cascade');
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
