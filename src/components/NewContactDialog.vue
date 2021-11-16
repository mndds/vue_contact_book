<script>
export default {
  props: ['open'],
}
</script>

<template>
  <v-dialog :value="open" @click:outside="$emit('close')">
    <v-card>
      <v-card-title>
        Новый контакт
      </v-card-title>

      <v-card-text>
        Тут будет форма
      </v-card-text>

    </v-card>
  </v-dialog>
</template>
