<template>
    <v-select
            :items="specialties"
    ></v-select>
</template>

<script>
export default {
  name: 'Specialties',
  props: {
    specialties: {}
  }
}
</script>
