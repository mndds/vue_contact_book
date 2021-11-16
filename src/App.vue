<script>
export default {
  data: () => ({
    drawer: false,
    loading: false,
  }),
  mounted() {
    this.$root.$on('loading', (value) => {
      this.loading = value
    })
  }
}
</script>

<template>
  <v-app>

    <div v-if="$store.getters['auth/check']">
      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon v-if="!$vuetify.breakpoint.mdAndUp" @click="drawer = !drawer" />
        <v-app-bar-title>Контакты</v-app-bar-title>

        <v-spacer />

        <div>
          {{ $store.state.auth.user.email }}
        </div>
      </v-app-bar>

      <v-navigation-drawer clipped :permanent="$vuetify.breakpoint.mdAndUp" v-model="drawer" app>
        <v-list nav>

          <v-list-item exact :to="{name: 'dashboard'}">
            <v-list-item-title>
              Главная
            </v-list-item-title>
          </v-list-item>

          <v-list-item :to="{name: 'contacts.list'}">
            <v-list-item-title>
              Контакты
            </v-list-item-title>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-btn
          fab
          color="green"
          dark
          bottom
          right
          fixed
          large
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <v-main>
      <router-view />
    </v-main>

    <v-dialog persistent :value="loading">
      <v-card :loading="true">
        <v-card-title>
          Загрузка.
        </v-card-title>
        <v-card-text>
          Пожалуйста подождите.
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-app>
</template>
