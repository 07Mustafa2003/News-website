<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CorsMiddleware;


use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthorController;






Route::middleware([CorsMiddleware::class])->group(function () {

    Route::get('/', function () {
        return view('app');
    });




Route::apiResource('articles', ArticleController::class);
Route::apiResource('authors', AuthorController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('comments', CommentController::class);
Route::apiResource('users', UserController::class);




Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);





});







// // routes/web.php

// use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\HomeController;
// use App\Http\Controllers\ArticleController;
// use App\Http\Controllers\AuthController;
// use App\Http\Controllers\DashboardController;
// use App\Http\Controllers\CategoryController;
// use App\Http\Controllers\AuthorController;

// Route::get('/', [HomeController::class, 'index'])->name('home');
// Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('article.show');

// // Authentication Routes
// Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
// Route::post('/login', [AuthController::class, 'login']);
// Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('register');
// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// // Dashboard Routes
// Route::middleware('auth')->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
//     Route::resource('/dashboard/articles', ArticleController::class)->except(['show']);
//     Route::resource('/dashboard/categories', CategoryController::class)->except(['show']);
//     Route::resource('/dashboard/authors', AuthorController::class)->except(['show']);
// });




