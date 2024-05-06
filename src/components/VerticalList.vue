<template>
  <div class="vertical-list">
    <HorizontalList v-for="item in items" :key="item.id" :data="item" />
  </div>
</template>

<script>
import HorizontalList from "@/components/HorizontalList.vue";

export default {
  props: {
    items: Array
  },
  components: {
    HorizontalList
  }
}
</script>
