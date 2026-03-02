<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'

const cards =Array.from({ length: 4 }, () => ref<HTMLElement | null>(null))

cards.forEach(card => {
  useMotion(card, {
    initial: {
      y: 0,
      scale: 1,
      boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
    },
    hover: {
      y: -10,
      scale: 1.04,
      boxShadow: '0 25px 40px rgba(0,0,0,0.4)',
    },
  })
})

</script>

<template>

    <section class="S2">
    <div>
      <h1 class="flex-1 text-center text-2xl font-bold mt-8">C1 BOT</h1>
    </div>

    <div class="left absolute left-8 -translate-y-1/2">
      
    </div>

    <div class="right absolute right-32 -translate-y-1/2">
      
    </div>

    <div class="max-w-4xl mt-8 pb-8">
        <div class="grid grid-cols-2 gap-32">

            <div class="bg-slate-800 p-4 rounded-2xl hover:scale-105 hover:-rotate-1 transition-transform duration-300 ">
                <img src="/src/assets/Right.png" alt="Right" class="max-h-80 object-contain">
                <h1 class="flex justify-center text-2xl mt-4">Right View</h1>
            </div>

            <div class="bg-slate-800 p-4 rounded-2xl hover:scale-105 hover:rotate-1 transition-transform duration-300">
                <img src="/src/assets/Left.png" alt="Left" class="max-h-80 object-contain">
                <h1 class="flex justify-center text-2xl mt-4">Left View</h1>
            </div>

            <div class="bg-slate-800 p-4 rounded-2xl hover:scale-105 hover:-rotate-1 transition-transform duration-300">
                <img src="/src/assets/Back.png" alt="Back" class="max-h-80 object-contain">
                <h1 class="flex justify-center text-2xl mt-4">Back View</h1>
            </div>

            <div class="bg-slate-800 p-4 rounded-2xl hover:scale-105 hover:rotate-1 transition-transform duration-300">
                <img src="/src/assets/Up.png" alt="Up" class="max-h-80 object-contain">
                <h1 class="flex justify-center text-2xl mt-4">Up View</h1>
            </div>

        </div>
    </div>

    <div>
      
    </div>

  </section>
</template>

<style>
.S2
{
    color: white;
    place-items: center;
    height: 300px;
}
</style>