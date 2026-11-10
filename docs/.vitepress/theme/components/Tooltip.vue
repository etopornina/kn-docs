<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    position?: 'top' | 'bottom'
    align?: 'center' | 'start' | 'end'
  }>(),
  { position: 'top', align: 'center' }
)
</script>

<template>
  <span
    class="kb-tooltip"
    :class="[`kb-tooltip--${position}`, `kb-tooltip--align-${align}`]"
    tabindex="0"
  >
    <slot />
    <span class="kb-tooltip__bubble" role="tooltip" aria-hidden="true">{{ text }}</span>
  </span>
</template>

<style scoped>
.kb-tooltip {
  position: relative;
  cursor: help;
  text-decoration: underline dotted var(--vp-c-brand-1);
  text-underline-offset: 3px;
  outline: none;
}

.kb-tooltip__bubble {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 8px);
  transform: translate(-50%, 4px);
  z-index: 50;
  width: max-content;
  max-width: 280px;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-elv);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  color: var(--vp-c-text-1);
  font-size: 0.85em;
  font-weight: 400;
  line-height: 1.45;
  text-align: left;
  white-space: normal;
  word-spacing: normal;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
}

.kb-tooltip--bottom .kb-tooltip__bubble {
  top: calc(100% + 8px);
  bottom: auto;
  transform: translate(-50%, -4px);
}

.kb-tooltip--align-start .kb-tooltip__bubble {
  left: 0;
  transform: translateY(4px);
}

.kb-tooltip--align-end .kb-tooltip__bubble {
  left: auto;
  right: 0;
  transform: translateY(4px);
}

.kb-tooltip--bottom.kb-tooltip--align-start .kb-tooltip__bubble,
.kb-tooltip--bottom.kb-tooltip--align-end .kb-tooltip__bubble {
  transform: translateY(-4px);
}

.kb-tooltip__bubble::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--vp-c-border);
}

.kb-tooltip--bottom .kb-tooltip__bubble::before {
  top: auto;
  bottom: 100%;
  border-top-color: transparent;
  border-bottom-color: var(--vp-c-border);
}

.kb-tooltip--align-start .kb-tooltip__bubble::before {
  left: 12px;
  transform: none;
}

.kb-tooltip--align-end .kb-tooltip__bubble::before {
  left: auto;
  right: 12px;
  transform: none;
}

.kb-tooltip:hover .kb-tooltip__bubble,
.kb-tooltip:focus-visible .kb-tooltip__bubble {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}

.kb-tooltip--align-start:hover .kb-tooltip__bubble,
.kb-tooltip--align-start:focus-visible .kb-tooltip__bubble,
.kb-tooltip--align-end:hover .kb-tooltip__bubble,
.kb-tooltip--align-end:focus-visible .kb-tooltip__bubble {
  transform: translateY(0);
}
</style>
