<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Book;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // List all owners
    public function listOwners() {
        $owners = User::role('owner')->get();
        return response()->json($owners);
    }

    // Approve owner
    public function approveOwner($id) {
        $owner = User::find($id);
        $owner->status = 'approved';
        $owner->save();
        return response()->json(['message' => 'Owner approved successfully.']);
    }

    // Disable owner
    public function disableOwner($id) {
        $owner = User::find($id);
        $owner->status = 'disabled';
        $owner->save();
        return response()->json(['message' => 'Owner disabled successfully.']);
    }

    // List books pending approval
    public function listPendingBooks() {
        $books = Book::where('status', 'pending')->get();
        return response()->json($books);
    }

    // Approve a book
    public function approveBook($id) {
        $book = Book::find($id);
        $book->status = 'approved';
        $book->save();
        return response()->json(['message' => 'Book approved successfully.']);
    }

    // Reject a book
    public function rejectBook($id) {
        $book = Book::find($id);
        $book->status = 'rejected';
        $book->save();
        return response()->json(['message' => 'Book rejected.']);
    }

    // Get system statistics
    public function getSystemStats() {
        $stats = [
            'total_books' => Book::count(),
            'total_owners' => User::role('owner')->count(),
            'books_by_category' => Book::select('category', DB::raw('count(*) as total'))->groupBy('category')->get(),
        ];
        return response()->json($stats);
    }
}
