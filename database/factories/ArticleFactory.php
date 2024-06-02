<?php
// database/factories/ArticleFactory.php
namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraph,
            'publication_date' => $this->faker->date,
            'author_id' => \App\Models\Author::factory(),
            'category_id' => \App\Models\Category::factory(),
            'tags' => implode(',', $this->faker->words(5)),
            'image_url' => $this->faker->imageUrl,
            'video_url' => $this->faker->url
        ];
    }
}
