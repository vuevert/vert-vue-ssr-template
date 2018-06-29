<template lang="pug">
  div.index-page
    h1 Greeting from {{pageName}}!
    p You can checkout these page too:
    ul
      li
        router-link(to="/about") About
</template>

<script lang="ts" src="./index.ts"></script>
