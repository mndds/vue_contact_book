<script>
import database from '@/plugins/firebase/database'
import { getDocs, collection, query } from 'firebase/firestore'

export default {
  data: () => ({
    contacts: null,
    loading: false,
    search: '',
    headers: [
      {
        text: 'Имя',
        value: 'name',
      },
      {
        text: 'Телефон',
        value: 'phone'
      }
    ]
  }),
  mounted() {
    this.load()

    this.$root.$on('contacts:created', this.load)
  },
  computed: {
    userId() {
      const user = this.$store.state.auth.user

      if (!user) {
        return null
      }

      return user.uid
    },
    collection() {
      const path = `users/${this.userId}/contacts`
      return collection(database, path)
    },
    normalized() {

      if (!this.contacts) {
        return null
      }

      return this.contacts.map(c => c.data())
    }
  },
  methods: {
    load() {
      if (!this.userId) {
        return
      }

      this.loading = true

      const q = query(this.collection)

      getDocs(q).then(res => {
        this.contacts = res.docs
        console.log(this.contacts)
      })
      .finally(() => {
        this.loading = false
      })

    },
    filterItems(value, search) {
      return value.toString().toLowerCase().indexOf(search.toString().toLowerCase()) !== -1
    }
  }
}
</script>

<template>
<v-container>

  <h1>Контакты</h1>

  <v-data-table
      :custom-filter="filterItems"
      :search="search"
      :loading="loading"
      :headers="headers"
      :items="normalized || []"
  >
    <template #top>
      <v-text-field v-model="search" label="Поиск" />
    </template>

  </v-data-table>

</v-container>
</template>
