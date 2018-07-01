<template lang="pug">
  div.about-page
    h1 About page.
    p {{oldSaying}}

    div
      Button(@click="changeOldSaying") Change old saying

    div
      router-link(to="/") Index
</template>

<script lang="ts" src="./index.ts"></script>
