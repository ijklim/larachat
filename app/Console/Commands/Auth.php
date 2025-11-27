<?php
// Last Modified: 2/3/21

// To invoke: php artisan command:auth
Artisan::command('command:auth', function () {
    $result = Auth::check();
    $this->info('check: ' . $result);

    $result = Auth::user();
    $this->info('user: ' . $result);
})->describe('Available Auth methods');
