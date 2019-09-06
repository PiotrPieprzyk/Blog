<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <!-- Tutaj będę rejestrował komponenty Vue -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <!-- NAVBAR -->
        <nav class="navBarOuter">
            <div class="navBarWrapper">
                <router-link to="/">
                    <div class="logoWrapper">
                        <p>
                            OurBlog
                        </p>
                    </div>
                </router-link>
                <div class="buttonWrapper">
                    <div class="loginButton">
                        <div class="responsiveLoginCard">
                            <p>Zaloguj</p>
                        </div>
                    </div>
                    <div class="registerButton">
                        <div class="responsiveRegisterCard">
                            <p>Zarejestruj</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</body>
</html>
<script>
</script>
