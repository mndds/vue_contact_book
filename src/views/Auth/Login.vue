<script>
import {signInWithEmailAndPassword} from 'firebase/auth'
import auth from '@/plugins/firebase/auth'

export default {
  data: () => ({
    form: {
      email: 'hello@world.com',
      password: 'password',
    },
    error: null,
  }),
  methods: {
    login() {
      this.$root.$emit('loading', true)

      signInWithEmailAndPassword(auth, this.form.email, this.form.password)
          .finally(() => {
            this.$root.$emit('loading', false)
          })
    }
  }
}
</script>

<template>
  <v-container>
    <h1>Login</h1>

    <v-text-field label="Email" v-model="form.email"/>

    <v-text-field type="password" label="Пароль" v-model="form.password"/>

    <v-btn @click="login" color="blue" dark>
      Войти
    </v-btn>

    <v-btn :to="{name: 'auth.register'}" text color="secondary" class="ml-3">
      Нет аккаунта?
    </v-btn>

  </v-container>
</template>
