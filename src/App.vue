<template>
  <div id="app">
    <VerticalList :items="verticalData" />
  </div>
</template>

<script>

import {generateVerticalData} from "@/components/dataGenerator";
import VerticalList from "@/components/VerticalList.vue";


export default {
  name: 'App',
  components: {
    VerticalList
  },
  data() {
    return {
      verticalData: generateVerticalData()
    }
  }
}
</script>