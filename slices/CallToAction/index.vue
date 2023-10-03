<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CallToActionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="max-w-4xl mx-auto md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50 shadow-xl">
      <PrismicText
        :field="slice.primary.heading"
        class="mb-2 heading heading--sm"
        wrapper="h2"
      />
      <PrismicRichText
        :field="slice.primary.body"
        class="text-center text-slate-600 mb-8"
      />
      <PrismicLink
        :field="slice.primary.button_link"
        class="button"
      >
        {{ slice.primary.button_text }}
      </PrismicLink>
    </div>
  </Bounded>
</template>
