<script>
import database from '@/plugins/firebase/database'
import { getDocs, collection, query } from 'firebase/firestore'

export default {
  data: () => ({
    contacts: null,
    loading: false,
  }),
  mounted() {
    this.load()
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
      })
      .finally(() => {
        this.loading = false
      })

    }
  }
}
</script>

<template>
<v-container>

  <h1>Контакты</h1>

  <ul>
    <li v-for="(contact, index) in this.contacts" :key="index">
      {{ contact.data }}
    </li>
  </ul>

</v-container>
</template>
