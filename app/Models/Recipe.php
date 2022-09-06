<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Recipe extends Model
{
    use HasFactory;
    use Sluggable;

    public function user() {
        return $this->hasOne(User::class);
    }

    public function sluggable(): array {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
