<template>
  <div class="horizontal-list">
    <NumberSquare v-for="item in data" :key="item.id" :number="item.value" />
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
