<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Show the landing dashboard page for the site.
     */
    public function show() {
        return Inertia::render('Home', []);
    }
}
