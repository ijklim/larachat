<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Pusher Key, for bootstrap.js consumption -->
    <meta name="pusher-key" content="{{ env('PUSHER_APP_KEY') }}">
    <meta name="pusher-cluster" content="{{ env('PUSHER_APP_CLUSTER') }}">
    <meta name="user-name" content="{{ optional(auth()->user())->name }}">

    <title>{{ config('app.name') }} v{{ config('app.version') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <style>
        body {
            margin-top: 70px;
        }
        
        input[type=submit]:hover,
        button:hover {
            cursor: pointer;
        }
        
        @yield('style')
    </style>
</head>
<body>
    <div id='app' class='container'>
        @include('layouts.nav')
        <div class='row'>
            @yield('content')
        </div>
        @include('layouts.footer')
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script>
        @yield('javascript')
    </script>
</body>
</html>
