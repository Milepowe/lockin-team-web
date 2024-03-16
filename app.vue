<script setup lang="ts">
import './assets/css/main.css'
import link from './assets/scripts/link'
import Dark_Mode from './assets/ui /Dark_Mode.vue';
</script>

<template>
  <div class="absolute top-1 left-1/2  transform -translate-x-1/2">
    <div class="card w-100 bg-base-100 shadow-xl p-4 m-4">
      <figure>
        <img
          src="https://media1.tenor.com/m/sQOx-qvdkQUAAAAC/malevolent-kitchen-malevolent-shrine.gif"
          alt="cooking"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Work in progress!</h2>
        <p>
          this project is still in work in project but it's a website for the lock in group which
          has as it's members
        </p>
      </div>

    <div class="flex items-center justify-center">
      <div class="flex flex-row p-1">
        <div class="avatar p-1 m-1 cursor-pointer hover:bg-sky-700" @click="link('https://www.github.com/Kermir')"> <!-- ramker -->
          <div class="w-24 rounded outline outline-black-100">
            <img src="https://avatars.githubusercontent.com/u/136987349?v=4" />
            <h1 class="absolute p-1/2">Ramker</h1>
          </div>
        </div>
        <div class="avatar p-1 m-1 cursor-pointer hover:bg-sky-700" @click="link('https://www.github.com/BeBebole')"> <!-- bel -->
          <div class="w-24 rounded outline">
            <img src="https://avatars.githubusercontent.com/u/79281901?v=4" />
            <h1 class="absolute p-1/2">Bel</h1>
          </div>
        </div>
        <div class="avatar p-1 m-1 cursor-pointer hover:bg-sky-700" @click="link('https://www.github.com/Madidev1')"> <!-- Maiden-->
          <div class="w-24 rounded outline">
            <img
              src="https://cdn.discordapp.com/avatars/774348568886116362/3eba9fb14e9fd4d3f22bf01c9ad6ca6d.webp?size=1024&format=webp&width=0&height=256"
            />
            <h1 class="absolute p-1/2">Maiden</h1>
          </div>
        </div>
        <div class="avatar p-1 m-1 cursor-pointer hover:bg-sky-700" @click="link('https://www.github.com/Milepowe')"> <!-- Milepowe -->
          <div class="w-24 rounded outline">
            <img src="https://avatars.githubusercontent.com/u/90985551?v=4" />
            <h1 class="absolute p-1/2">Milepower</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Dark_Mode/>
</template>
