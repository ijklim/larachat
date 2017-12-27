# Chat

Real time chat app.

## Technologies used

* Laravel 5.5
* Vue.js 2.0
* Bootstrap 4

# Building the app from scratch

## Prerequisites

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
* `config/app.php`
  * version