# Lucrei 

Frontend application for Lucrei 

>Lucrei is a web application that provides an easy and intuitive method of organizing small business finance.
The demo is running on [Demo](https://paineldecontrole.herokuapp.com/)

## Technologies
The project was developed using Vue.js as a frontend, which consumes an API made with Ruby On Rails.
The project template was based on AdminLTE, a free dashboard template that can be found at:

[AdminLTE Free TEmplate](https://github.com/ColorlibHQ/AdminLTE)

The frontend is organized into Vue components, where we find the template, page script and style in the following structure:

```j
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        section: 'Head'
      }
    },
    methods: {
      logout () {
        this.$store.commit('SET_USER', null)
        this.$store.commit('SET_TOKEN', null)
        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
        }
       this.$router.push('/login')
      }
    }
  }
</script>

<style>
  .app {
    background-color: #123456
  }
</style>
```

## Dependencies
* AdminLTE - [Online Documentation](https://adminlte.io/docs/2.4/installation)
* BootStrap 3 - [Online Documentation](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
* Vue.js - [Online Documentation](https://vuejs.org/v2/guide/)
* Axios - [Online Documentation](https://github.com/axios/axios)
* Vue-Router - [Online Documentation](https://router.vuejs.org/)
* Vuex - [Online Documentation](https://vuex.vuejs.org/guide/)

## Usage

```bash
$ npm install
$ npm run build
$ npm run dev
```
## Deploy on Heroku

* make the application a git repository and commit the project

```bash
$ git init
$ git add .
$ git commit -m "init" 
```
* Log in to heroku
```bash
$ heroku login
```
* Create a heroku app and commit your changes
```bash
$ heroku create lucrei-app
$ git commit -m "new changes”
```
* Push the code
```bash
$ git push heroku master 
```