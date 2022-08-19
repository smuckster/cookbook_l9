<?php

namespace App\Http\Classes;

class Navigation {
    public static function getNavigationItems() {
        return [
            [
                'name' => 'Browse Recipes',
                'uri' => '/recipes',
                'classes' => '',
            ],
            [
                'name' => 'New Recipe',
                'uri' => '/recipes/create',
                'classes' => 'bg-rose-500 hover:bg-rose-600 rounded-full text-white font-bold px-3 py-2',
            ],
        ];
    }
}
