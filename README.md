# Chat

Real time chat app.

<p align="center">
  <a href="http://larachat.ivan-lim.com" target="_blank">
    <img src="https://github.com/ijklim/larachat/blob/master/screenshot.jpg" width="970px">
    <br>
    Live Demo
  </a>
  <br><i>For testing use account: <strong>demo@aiwebstudio.com</strong>, password: <strong>demonow</strong></i>
</p>

## Technologies used

* Laravel 5.5
* Vue.js 2.0
* Bootstrap 4
* PHP 7
* Pusher
* Laravel Echo

# Building the app from scratch

## Prerequisites

* PHP, http://www.php.net/downloads.php
* Laravel Installer, https://laravel.com/docs/5.5/installation
* Composer, https://getcomposer.org
* NPM, https://www.npmjs.com
* git, https://git-scm.com

## Create Laravel

Check version of Laravel, ensure it is 5.5 or above

```bash
laravel new 'larachat'
cd larachat
php artisan -V
```

## Switch from Bootstrap 3 to Bootstrap 4

Run build process after switch

```bash
composer require laravelnews/laravel-twbs4
php artisan preset bootstrap4-auth
npm install
npm run dev
```

## Install pusher

This is required to support broadcasting events over Pusher.

```bash
composer require pusher/pusher-php-server "~3.0"
```

To avoid repeating the key and cluster in the `.env` and `resources/assets/js/bootstrap.js`, meta tags *pusher-key* and *pusher-cluster* are created in the master layout file `resources/views/layouts/app.blade.php`.

### Initialize git

```bash
git init
git add .
git commit -m 'Initial commit'
```

### Set up configurations

The following files contain application specific configurations that should be modified or added

* `.env`
  * APP_NAME
  * DB_CONNECTION
  * DB_HOST
  * DB_PORT
  * DB_DATABASE
  * DB_USERNAME
  * DB_PASSWORD
  * PUSHER_APP_ID
  * PUSHER_APP_KEY
  * PUSHER_APP_SECRET
  * PUSHER_APP_CLUSTER
  * BROADCAST_DRIVER=pusher
* `config/app.php`
  * version
  * Enable App\Providers\BroadcastServiceProvider::class

# Deployment on shared hosting

* Copy all files from the `public` folder into `public_html` on the host
* Copy all files except files from `public` into a new folder at the same level as `public_html`, e.g. `larachat`
* Modify the settings in `larachat\.env` to reflect production environment
  * APP_ENV=production
  * APP_DEBUG=false
  * APP_URL
  * DB_CONNECTION
  * DB_HOST
  * DB_PORT
  * DB_DATABASE
  * DB_USERNAME
  * DB_PASSWORD
* Ensure PHP version is set to 7.0 or above