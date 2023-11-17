<script setup>
</script>

<template>

    <!-- Beranda -->
    <div class="flex flex-col items-center justify-center px-20 py-10">
        <h1 class="font-bold text-7xl px-16 py-10 leading-snug text-center">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-lavender to-lavenderIndigo">Menghubungkan</span> negeri, dari 
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-chromeYellow to-pastelOrange">tangan</span> ke 
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-malibu to-frenchBlue">tangan.</span>
        </h1>
        <p class="font-medium text-gray-500 px-32 text-lg text-center">Dengan kemajuan teknologi yang begitu pesat, akses ke komoditas juga terus berkembang. Kami menyediakan layanan logistik pengantaran paket yang efisien dan mencapai pedalaman untuk mendukung bisnis anda.</p>

        <div class="mt-8 mb-16">
            <button class="bg-lavenderIndigo text-white px-6 py-3 rounded-lg mr-2">Kirim Paket</button>
            <button class="bg-white text-lavenderIndigo px-6 py-3 rounded-lg ml-2">Cek Resi</button>
        </div>

        <img src="@/assets/img/foto1.jpg">
    </div>

    <!-- Tentang kami -->
    <div class="flex items-center justify-between px-20 py-10 gap-20">
        <div class="w-1/2">
            <p class="font-medium text-chromeYellow text-lg">Tentang Kami</p>
            <h1 class="font-bold text-5xl leading-snug">
                Solusi untuk mengirimkan barang anda ke seluruh pelosok.
            </h1>
        </div>

        <div class="w-1/2">
            <p class="font-medium text-gray-500 text-lg text-right">Kami menyediakan layanan pengiriman paket yang praktis dan efisien. Hanya dengan beberapa klik, paket Anda akan diantar oleh kurir ke lokasi tujuan, termasuk daerah terpencil.</p>
        </div>
    </div>

    <div class="flex items-stretch justify-between px-20 py-10 gap-7">
        <div class="w-1/4 bg-astronautBlue p-6 rounded-lg">
            <div class="flex items-center justify-center w-12 h-12 bg-red-200 rounded-md text-red-700 text-2xl">
                <fa icon="fas fa-arrows-to-dot" size="1x"></fa>
            </div>
            <h1 class="py-5 text-2xl font-semibold">Focus</h1>
            <p class="text-gray-300">Menyelesaikan tugas sesuai prosedur dan memiliki kemampuan serta kemampuan yang baik, sehingga perusahaan mampu bersaing di era ekonomi digital.</p>
        </div>
        <div class="w-1/4 bg-astronautBlue p-6 rounded-lg">
            <div class="flex items-center justify-center w-12 h-12 bg-orange-200 rounded-md text-orange-700 text-2xl">
                <fa icon="fas fa-person-running" size="1x"></fa>
            </div>
            <h1 class="py-5 text-2xl font-semibold">Active and Creative</h1>
            <p class="text-gray-300">Berpartisipasi dalam setiap kegiatan dan memberikan ide baru untuk perbaikan dan peningkatan kualitas jasa.</p>
        </div>
        <div class="w-1/4 bg-astronautBlue p-6 rounded-lg">
            <div class="flex items-center justify-center w-12 h-12 bg-green-200 rounded-md text-green-700 text-2xl">
                <fa icon="fas fa-bell-concierge" size="1x"></fa>
            </div>
            <h1 class="py-5 text-2xl font-semibold">Service Excellence</h1>
            <p class="text-gray-300">Seluruh karyawan dan manajemen memberi pelayanan terbaik kepada pihak internal dan eksternal, sehingga konsumen punya ketertarikan hati.</p>
        </div>
        <div class="w-1/4 bg-astronautBlue p-6 rounded-lg">
            <div class="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-md text-blue-700 text-2xl">
                <fa icon="fas fa-people-group" size="1x"></fa>
            </div>
            <h1 class="py-5 text-2xl font-semibold">Teamwork</h1>
            <p class="text-gray-300">Bekerja sama dengan orang lain / bagian lain secara kooperatif untuk mencapai tujuan bersama.</p>
        </div>
    </div>

    <!-- Layanan Kami -->
    <div class="flex flex-col items-center justify-center px-20 py-16">
        <p class="font-medium text-chromeYellow text-lg">Layanan Kami</p>
        <h1 class="font-bold text-5xl leading-snug text-center w-2/3 pt-5">
            Solusi pengiriman barang anda, di genggaman tangan anda.
        </h1>
        <p class="font-medium text-gray-500 w-2/3 text-lg text-center pt-8">Kami menghadirkan jasa pengiriman paket yang mudah dan efektif. Dengan beberapa tombol saja, paket anda akan dikirim oleh kurir ke lokasi yang anda tuju hingga ke pelosok, dan semua dimulai di genggaman tangan anda.</p>

        <div class="flex items-center justify-between px-10 gap-10 py-20">
            <div class="flex items-center justify-center w-1/2">
                <img src="@/assets/img/features/Perhitungan yang Transparan.svg">
            </div>

            <div class="w-1/2">
                <h1 class="text-5xl font-semibold pb-7">Biaya yang terjangkau dan transparan</h1>
                <p class="leading-loose tracking-wide">Kami menampilkan dengan detail segala biaya yang digunakan, dan memastikan biaya tersebut terjangkau dan jelas.</p>
            </div>
        </div>

        <div class="flex items-center justify-between px-10 gap-10">
            <div class="w-1/2">
                <h1 class="text-5xl font-semibold pb-7">Pantau pengiriman secara real-time.</h1>
                <p class="leading-loose tracking-wide">Pengiriman ditrack dari awal penyerahan paket, hingga paket sampai ke tujuan, secara terus menerus.</p>
            </div>

            <div class="flex items-center justify-center w-1/2">
                <img src="@/assets/img/features/Cek Paket.svg">
            </div>
        </div>

        <div class="flex items-center justify-between px-10 gap-10">
            <div class="flex items-center justify-center w-1/2">
                <img src="@/assets/img/preview-1.svg">
            </div>

            <div class="w-1/2">
                <h1 class="text-5xl font-semibold pb-7">Terhubung dimanapun.</h1>
                <p class="leading-loose tracking-wide">Anda dapat melacak dan mengatur pengiriman anda dimanapun, termasuk dalam genggaman anda.</p>
            </div>            
        </div>
    </div>

    <!-- FAQ -->
    <div class="flex flex-col items-center justify-center p-20 bg-lavenderIndigo">
        <h1 class="font-bold text-7xl px-16 py-10 leading-snug text-center">
            Punya pertanyaan sekitar Logistika ataupun fiturnya?
        </h1>

        <div class="mt-8 mb-16">
            <button class="bg-lavender text-ebony px-6 py-3 rounded-lg mr-2">FAQ</button>
            <button class="bg-white text-lavenderIndigo px-6 py-3 rounded-lg ml-2">Hubungi Kami</button>
        </div>
    </div>
</template>
