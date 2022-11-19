<template>
  <v-app dark>
    <Navbar/>
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>