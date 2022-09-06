<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\User;
use Illuminate\Support\Str;

class RecipesController extends Controller
{
    public function index() {
        return Inertia::render('Recipes/Index', [
            'recipes' => Recipe::all()
        ]);
    }

    public function create() {
        return Inertia::render('Recipes/Create');
    }

    public function store(Request $request) {
        // $validated = $request->validate([
        //     'title' => 'required',
        //     'ingredients' => 'required|json',
        //     'steps' => 'required|json'
        // ]);

        // Process recipe picture.
        if ($request->hasFile('picture')) {
            $picturePath = $request->picture->store('public/images');
        }

        $recipe = new Recipe();
        $recipe->name = $request->name;
        $recipe->description = $request->description;
        $recipe->yield = $request->yield;
        $recipe->time = $request->time;
        $recipe->ingredients = json_encode($request->ingredients);
        $recipe->steps = json_encode($request->steps);
        $recipe->notes = json_encode($request->notes);
        $recipe->picture = isset($picturePath) ? $picturePath : '';
        $recipe->user_id = 1;

        // dd($recipe);
        $recipe->save();

        return redirect("/recipes/{$recipe->slug}");
    }

    public function show(Recipe $recipe) {
        return Inertia::render('Recipes/Show', [
            'recipe' => $recipe
        ]);
    }
}
