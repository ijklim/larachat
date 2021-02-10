# Chat

Real time chat app.

<p align="center">
  <a href="http://larachat.ivan-lim.com" target="_blank">
    <img src="https://github.com/ijklim/larachat/blob/master/screenshot.jpg" width="970px">
    <br>
    Live Demo
  </a>
  <br><i>For testing use account: <strong>demo@ivan-lim.com</strong>, password: <strong>demonow</strong></i>
</p>

## Technologies used

* Laravel 6.20.12
* Vue.js 2.0
* Bootstrap 4
* PHP 7
* Pusher
* Laravel Echo

# Installation

Run `composer install`
Run `yarn run production`


# Set up configurations

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
* Copy all files except files from `public`, `node_modules`, and `tests` into a new folder at the same level as `public_html`, e.g. `larachat`
* Change both `require` paths in `public_html\index.php` to point to the location above, e.g. `require __DIR__.'/../larachat/vendor/autoload.php';` and `$app = require_once __DIR__.'/../larachat/bootstrap/app.php';`
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
