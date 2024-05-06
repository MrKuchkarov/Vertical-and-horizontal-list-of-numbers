<template>
  <div class="horizontal-list">
    <NumberSquare v-for="(item, index) in data" :key="index" :number="item" />
  </div>
</template>

<script>


import NumberSquare from "@/components/NumberSquare.vue";

export default {
  props: {
    data: Array
  },
  components: {
    NumberSquare
  }
}
</script>
