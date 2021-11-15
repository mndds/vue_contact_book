<script>
export default {
  data: () => ({
    drawer: false,
  }),
}
</script>

<template>
  <v-app>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon v-if="!$vuetify.breakpoint.mdAndUp" @click="drawer = !drawer" />
      <v-app-bar-title>Контакты</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer clipped :permanent="$vuetify.breakpoint.mdAndUp" v-model="drawer" app>
      <v-list nav>
        <v-list-item :to="{name: 'dashboard'}">
          <v-list-item-title>
            Главная
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-btn
        fab
        color="green"
        bottom
        right
        fixed
        large
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>
