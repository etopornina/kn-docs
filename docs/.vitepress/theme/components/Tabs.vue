<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  labels: string[]
}>()

const active = ref(0)
</script>

<template>
  <div class="kb-tabs">
    <div class="kb-tabs__bar" role="tablist">
      <button
        v-for="(label, i) in labels"
        :key="i"
        type="button"
        class="kb-tabs__tab"
        :class="{ 'kb-tabs__tab--active': active === i }"
        role="tab"
        :aria-selected="active === i"
        @click="active = i"
      >
        {{ label }}
      </button>
    </div>
    <div
      v-for="(label, i) in labels"
      :key="i"
      v-show="active === i"
      class="kb-tabs__panel"
      role="tabpanel"
    >
      <slot :name="`tab-${i}`" />
    </div>
  </div>
</template>

<style scoped>
.kb-tabs {
  margin: 16px 0;
}

.kb-tabs__bar {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.kb-tabs__tab {
  padding: 8px 14px;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  background: none;
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.kb-tabs__tab:hover {
  color: var(--vp-c-text-1);
}

.kb-tabs__tab--active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.kb-tabs__panel {
  padding-top: 16px;
}
</style>
