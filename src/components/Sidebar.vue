<template>
  <RSidebar :isLanguage="false" :isTheme="false">
    <template v-slot:icon>
      <router-link to="/">
        <RIcon light="assets/i/logo-dapp.svg" dark="assets/i/logo-dapp.svg" />
      </router-link>
    </template>
    <RItem bottom icon="i-info">
      <section>
        <p>info</p>
      </section>
    </RItem>
  </RSidebar>
</template>
