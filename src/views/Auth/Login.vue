<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
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
      signInWithEmailAndPassword(auth, this.form.email, this.form.password)
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error.message)
            this.error = error
          })
    }
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>

    <v-text-field label="Email" v-model="form.email"/>

    <v-text-field type="password" label="Пароль" v-model="form.password"/>

    <v-btn @click="login" color="blue" dark>
      Войти
    </v-btn>

  </div>
</template>
