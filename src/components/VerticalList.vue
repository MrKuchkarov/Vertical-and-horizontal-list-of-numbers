<template>
  <div class="vertical-list">
    <HorizontalList v-for="(item, index) in items" :key="index" :data="item" />
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
