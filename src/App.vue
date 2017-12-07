<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">


        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link :to="{name: 'Home'}" class="navbar-item" href="https://bulma.io">
              <img src="./assets/rc-fc.png">
            </router-link>
            <router-link :to="{name: 'Home'}" class="navbar-item"> Algemene Informatie </router-link>
            <router-link :to="{name: 'Checklist'}" class="navbar-item"> Planning/Checklist </router-link>
            <router-link :to="{name: 'Stagekaarten'}" class="navbar-item"> Stagekaarten </router-link>
            <router-link :to="{name: 'Downloads'}" class="navbar-item"> Downloads </router-link>
          </div>
        </div>

        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    <div class="container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>

  nav.navbar {
    margin-bottom: 20px;
  }

  .navbar-item {
    font-weight: bold;
  }

  .container {

  }

  .router-link-exact-active {
    color: #e2000f !important;
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
