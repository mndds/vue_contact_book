<script>
import auth from '@/plugins/firebase/auth'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    register() {
      this.$root.$emit('loading', true)

      createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
          .finally(() => {
            this.$root.$emit('loading', false)
          })

    }
  }
}
</script>

<template>
  <v-container>
    <h1>Новый аккаунт</h1>

    <v-text-field v-model="form.email" label="Email"/>
    <v-text-field v-model="form.password" type="password" label="Пароль"/>

    <v-btn color="blue" dark @click="register">
      Создать аккаунт
    </v-btn>

  </v-container>
</template>
