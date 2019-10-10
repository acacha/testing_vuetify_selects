<template>
    <v-select
            :items="specialties"
    ></v-select>
</template>

<script>
export default {
  name: 'Prova',
  props: {
    specialties: {}
  }
}
</script>
