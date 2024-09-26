<?

use App,Http,Contorllers,AuthController;

//defin the API routes for login, registration, and user management

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('user', [AuthController::class, 'user']);

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::get('/owners', [AdminController::class, 'listOwners']);
    Route::patch('/owners/{id}/approve', [AdminController::class, 'approveOwner']);
    Route::patch('/owners/{id}/disable', [AdminController::class, 'disableOwner']);

    Route::get('/books/pending', [AdminController::class, 'listPendingBooks']);
    Route::patch('/books/{id}/approve', [AdminController::class, 'approveBook']);
    Route::patch('/books/{id}/reject', [AdminController::class, 'rejectBook']);

    Route::get('/stats', [AdminController::class, 'getSystemStats']);
});


