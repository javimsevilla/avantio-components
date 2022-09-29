<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    description?: string;
    iconDisabled?: boolean;
    title?: string;
    type?: "info" | "warning" | "error";
  }>(),
  {
    type: "info",
    iconDisabled: false,
  }
);

const infoPanelClass = computed(() => "info-panel--" + props.type);
const iconClass = computed(() => "icon-" + props.type);
const showIcon = computed(() => !props.iconDisabled);
</script>

<template>
  <div :class="infoPanelClass">
    <div v-if="showIcon" class="info-panel__icon">
      <span :class="iconClass"></span>
    </div>
    <div>
      <h2 v-if="title" class="info-panel__title">
        <span>{{ title }}</span>
      </h2>
      <p v-if="description" class="info-panel__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/shared";

.info-panel {
  &--info,
  &--warning,
  &--error {
    padding: 1.4rem;
    border-radius: 4px;
    display: flex;
    flex-flow: row nowrap;
    column-gap: 0.4rem;
  }

  &--info {
    background-color: #f5f5f6;
    [class^="icon-"] {
      color: #b8bbbd;
    }
  }

  &--warning {
    background-color: #fef3de;
    [class^="icon-"] {
      color: #fab82d;
    }
  }

  &--error {
    background-color: #fde6e3;
    [class^="icon-"] {
      color: #ee5e48;
    }
  }

  &__icon {
    font-size: 1.5rem;
  }

  &__title {
    margin: 0;
  }

  &__description {
    margin: 0;
    margin-top: 0.4rem;
  }
}
</style>
