<template lang="pug">
  div.about-page
    h1 About page.
    p {{oldSaying}}

    div
      router-link(to="/") Index
</template>

<script lang="ts" src="./about.ts"></script>
