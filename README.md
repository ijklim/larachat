# Chat

Real-time chat application with modern Laravel and Vue.js stack.

<p align="center">
  <a href="http://larachat.ivan-lim.com" target="_blank">
    <img
      src="https://github.com/ijklim/larachat/blob/main/screenshot.jpg"
      width="970px"
      alt="Site Screenshot"
    >
    <br>
    Live Demo
  </a>
</p>

## Technologies Used

* **Laravel 12** - Modern PHP framework
* **Vue.js 3.5+** - Progressive JavaScript framework
* **Bootstrap 5** - Responsive UI framework
* **PHP 8.2+** - Latest PHP version
* **Pusher** - Real-time messaging service
* **Laravel Echo** - Real-time event broadcasting
* **pnpm** - Fast, disk space efficient package manager

## Installation

### Prerequisites
- PHP 8.2 or higher
- Composer
- pnpm (or npm)
- Node.js 16+

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone git@github.com:ijklim/larachat.git
   cd larachat
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install JavaScript dependencies**
   ```bash
   pnpm install
   ```

4. **Configure environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Build frontend assets**
   ```bash
   pnpm run prod    # Production
   pnpm run dev     # Development
   pnpm run watch   # Watch mode
   ```

6. **Run database migrations**
   ```bash
   php artisan migrate
   ```

7. **Start development server**
   ```bash
   php artisan serve
   ```

## Configuration

The following environment variables in `.env` should be configured:

### Application Settings
- `APP_ENV` - Environment (local, production)
- `APP_DEBUG` - Debug mode (true/false)
- `APP_URL` - Application URL

### Database
- `DB_CONNECTION` - Database driver (mysql, pgsql, etc.)
- `DB_HOST` - Database host
- `DB_PORT` - Database port
- `DB_DATABASE` - Database name
- `DB_USERNAME` - Database username
- `DB_PASSWORD` - Database password

### Real-time Broadcasting
- `BROADCAST_DRIVER=pusher` - Broadcasting driver
- `PUSHER_APP_ID` - Pusher application ID
- `PUSHER_APP_KEY` - Pusher application key
- `PUSHER_APP_SECRET` - Pusher application secret
- `PUSHER_APP_CLUSTER` - Pusher cluster region

## Deployment on Shared Hosting

This project uses GitHub Actions for automatic deployment to shared hosting servers.

### Prerequisites for SSH Deployment

1. **Generate SSH Keys** (if not already done)
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add SSH Keys to Hosting Control Panel**
   - Copy content of your public key file (e.g., `id_ed25519.pub`)
   - Add it to your hosting provider's control panel (e.g., cPanel > SSH Access > Manage SSH Keys)

3. **Configure GitHub Secrets**
   - Go to Repository Settings > Secrets and variables > Actions
   - Add the following secrets:
     - `SSH_HOST`: Your server hostname or IP address
     - `SSH_USERNAME`: Your SSH username
     - `SSH_KEY`: Your complete private SSH key content (including headers like `-----BEGIN PRIVATE KEY-----`)
     - `SSH_PORT`: SSH port (usually 22)

### Automatic Deployment with GitHub Actions

The repository includes `.github/workflows/ssh-deploy.yml` which automatically:

- Triggers on push to `main` branch
- Pulls latest code from GitHub
- Installs PHP dependencies via Composer
- Installs/updates pnpm packages
- Builds frontend assets for production
- Runs Laravel optimizations
- Executes database migrations
- Clears application caches

**Deployment process:**
1. Push changes to `main` branch
2. GitHub Actions workflow automatically triggers
3. Code is deployed to your server

### Manual Deployment Steps (if needed)

If you prefer manual deployment to shared hosting:

1. **Prepare directories**
   - Copy all files from `public/` into `public_html/`
   - Copy all files except `public/`, `node_modules/`, `vendor/`, and `tests/` into a folder at the same level as `public_html/` (e.g., `larachat/`)

2. **Update index.php**
   - Modify both `require` paths in `public_html/index.php`:
     ```php
     require __DIR__.'/../larachat/vendor/autoload.php';
     $app = require_once __DIR__.'/../larachat/bootstrap/app.php';
     ```

3. **Environment Configuration**
   - Update `larachat/.env` for production:
     ```
     APP_ENV=production
     APP_DEBUG=false
     APP_URL=https://your-domain.com
     BROADCAST_DRIVER=pusher
     ```

4. **Install Dependencies**
   ```bash
   cd ~/larachat
   php composer.phar install --no-dev --optimize-autoloader
   pnpm install --frozen-lockfile
   pnpm run prod
   ```

5. **Run Database & Cache Operations**
   ```bash
   php artisan migrate --force
   php artisan optimize
   php artisan cache:clear
   ```

6. **Set Permissions**
   ```bash
   chmod -R 775 storage bootstrap/cache
   ```

## Development

### Available npm/pnpm Commands

```bash
pnpm dev          # Development build with watch mode
pnpm watch        # Watch for file changes
pnpm watch-poll   # Watch with polling (for VMs/Docker)
pnpm hot          # Hot module replacement
pnpm prod         # Production build
```

### Project Structure

```
├── app/                 # Application code
├── resources/
│   ├── assets/         # Vue components and SCSS
│   └── views/          # Blade templates
├── routes/             # Route definitions
├── config/             # Configuration files
├── database/           # Migrations and factories
├── public/             # Public assets
└── bootstrap/          # Bootstrap files
```

## License

MIT
