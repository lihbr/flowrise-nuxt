<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextWithImageSlice>([
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
    <div
      class="grid gap-8 md:grid-cols-2 place-items-center"
    >
      <PrismicImage
        :field="slice.primary.image"
        class="rounded-lg"
        :class="{
          'md:order-2': slice.variation === 'imageRight'
        }"
      />
      <div>
        <PrismicText
          :field="slice.primary.heading"
          class="mb-2 heading heading--lg"
          wrapper="h2"
        />
        <PrismicRichText
          :field="slice.primary.body"
          class="text-2xl font-body text-slate-600 max-w-md leading-10"
        />
      </div>
    </div>
  </Bounded>
</template>
