<script>
import database from '@/plugins/firebase/database'
import {doc, setDoc} from 'firebase/firestore'
import { encode } from 'js-base64'

export default {
  props: ['open'],
  data: () => ({
    loading: false,
    form: {
      name: '',
      phone: ''
    }
  }),
  methods: {
    create() {
      const id = this.$store.state.auth.user.uid

      if (!id) {
        return
      }

      this.loading = true

      const ref = doc(database, `users/${id}/contacts`, encode(this.form.name + Date.now()))
      setDoc(ref, this.form)
          .then(() => {
            this.$root.$emit('contacts:created')
            this.$emit('close')
          })
          .finally(() => this.loading = false)

    }
  }
}
</script>

<template>
  <v-dialog :value="open" @click:outside="$emit('close')">
    <v-card :loading="loading">
      <v-card-title>
        Новый контакт
      </v-card-title>

      <v-card-text>

        <v-text-field v-model="form.name" label="Имя"/>
        <v-text-field v-model="form.phone" label="Телефон"/>

        <v-btn :disabled="loading" @click="create">
          Добавить контакт
        </v-btn>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>
