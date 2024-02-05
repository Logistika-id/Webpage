<script setup>
</script>

<template>
    <div class="flex flex-col md:flex-row justify-center md:justify-between items-center px-5 md:px-20 py-10">
        <div class="w-2/4 md:w-1/3">
            <img src="@/assets/img/logo-dm.png" class="w-full md:w-2/5">
        </div>
        <div class="w-full md:w-1/3 flex items-center justify-center px-5 py-5 md:py-0 md:px-2 font-medium gap-5 md:text-lg">
            <a class="text-center text-[12px] md:text-lg">Beranda</a>
            <a class="text-center text-[12px] md:text-lg">Tentang Kami</a>
            <a class="text-center text-[12px] md:text-lg">Layanan Kami</a>
        </div>
        <div class="hidden md:flex w-full md:w-1/3 md:justify-end">
            <button class="bg-lavenderIndigo text-white px-6 py-3 rounded-lg">Kirim Paket</button>
        </div>
    </div>
</template>