<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div class="container">
          <!-- Brand -->
          <router-link to="/" class="navbar-brand">
            EuAgendei
          </router-link>

          <!-- Collapse -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Links -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <!-- Left -->
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/#about" class="nav-link" target="_blank">Sobre
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank">Contatos</a>
              </li>
            </ul>

            <!-- Right -->
            <ul class="navbar-nav nav-flex-icons">
              <li class="nav-item">
                <a href="https://www.facebook.com/mdbootstrap" class="nav-link" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="nav-item">
                <a href="https://twitter.com/MDBootstrap" class="nav-link" target="_blank">
                  <i class="fa fa-twitter"></i>
              </a>
              </li>
              <li class="nav-item">
                <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="nav-link"
                  target="_blank">
                  <i class="fa fa-instagram mr-2"></i>
                </a>
                </li>
                <li class="nav-item">
                  <router-link to="registrer" class="nav-link border border-light rounded">
                  <i class="fa fa-user mr-2"></i>Cadastrar-se
                  </router-link>
                </li>
            </ul>
          </div>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<script type="text/javascript" src="./assets/js/popper.min.js">
</script>
<script type="text/javascript" src="./assetsjs/bootstrap.min.js">
</script>
<script type="text/javascript" src="./assetsjs/mdb.min.js">
</script>
<script type="text/javascript">
    // Animations initialization
    new WOW().init();
</script>
<script>
export default {
}
</script>
<style>

@import '/assets/css/custom.css';
@import '/assets/css/bootstrap.css';
@import '/assets/css/mdb.min.css';
@import '/assets/css/style.min.css';
@import '/assets/ladding_page/css/mdb.min.css';
@import '/assets/ladding_page/css/style.min.css';
</style>
