<template>
  <specialties :specialties="specialties" />
</template>

<script>
import Specialties from '../components/Specialties'

export default {
  name: 'SpecialtiesView',
  components: {
    'specialties': Specialties
  },
  data () {
    return {
      specialties: [ 'Specialty 1', 'Specialty 2' ]
    }
  }
}
</script>
