<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import gsap from 'gsap'

    const scrollYPosition = ref(0);
    const divLoc = ref({
        tentang: 0,
        layanan: 0,
        faq: 0,
    })

    const animated = ref({
        tentang: false,
        layanan: false,
        faq: false
    })

    function updateScrollPosition() {
        scrollYPosition.value = window.scrollY;

        if(scrollYPosition.value >= divLoc.value.tentang && animated.value.tentang == false){
            gsap.fromTo(".anim-deck-2-l", 
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    delay: 0.3,
                    // ease: "power3.inOut",
                }
            )

            gsap.fromTo(".anim-deck-2-r", 
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    delay: 0.3
                    // ease: "power3.inOut",
                }
            )

            gsap.fromTo(".anim-deck-2-m", 
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    // ease: "power3.inOut",
                    delay: 1,
                    stagger: 0.2
                }
            )

            animated.value.tentang = true
        }
        else if(scrollYPosition.value >= divLoc.value.layanan && animated.value.layanan == false){
            gsap.fromTo(".anim-deck-3", 
                {
                    y: -100,
                    opacity: 0, 
                },
                {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    // ease: "power3.inOut",
                    stagger: 0.2,
                    delay: 0.5
                }
            )

            gsap.fromTo(".anim-deck-4-1", 
                {
                    x: -100,
                    opacity: 0, 
                },
                {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    // ease: "power3.inOut",
                    stagger: 0.2,
                    delay: 1.5
                }
            )

            gsap.fromTo(".anim-deck-4-2", 
                {
                    x: 100,
                    opacity: 0, 
                },
                {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    // ease: "power3.inOut",
                    stagger: 0.2,
                    delay: 2
                }
            )

            gsap.fromTo(".anim-deck-4-3", 
                {
                    x: -100,
                    opacity: 0, 
                },
                {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    // ease: "power3.inOut",
                    stagger: 0.2,
                    delay: 2.5
                }
            )

            animated.value.layanan = true
        }
        else if(scrollYPosition.value >= divLoc.value.faq && animated.value.faq == false){
            gsap.fromTo(".anim-deck-5", 
                {
                    y: -100,
                    opacity: 0, 
                },
                {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    // ease: "power3.inOut",
                    stagger: 0.2,
                    delay: 1
                }
            )

            animated.value.faq = true
        }
    }

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', updateScrollPosition);
    });

    onMounted(() => {
        gsap.fromTo(".anim-deck-1", 
            {
                y: -100,
                opacity: 0, 
            },
            {
                duration: 1,
                y: 0,
                opacity: 1,
                // ease: "power3.inOut",
                stagger: 0.2
            }
        )
        
        window.addEventListener('scroll', updateScrollPosition);

        divLoc.value.tentang = window.scrollY + document.querySelector('#tentang').getBoundingClientRect().top
        divLoc.value.layanan = window.scrollY + document.querySelector('#layanan').getBoundingClientRect().top
        divLoc.value.faq = window.scrollY + document.querySelector('#faq').getBoundingClientRect().top
    })
</script>

<template>
    <div id="page">

        <!-- Beranda -->
        <div class="flex flex-col items-center justify-center px-20 py-10" id="beranda">
            <h1 class="font-bold text-7xl px-16 py-10 leading-snug text-center anim-deck-1">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-lavender to-lavenderIndigo">Menghubungkan</span> negeri, dari 
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-chromeYellow to-pastelOrange">tangan</span> ke 
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-malibu to-frenchBlue">tangan.</span>
            </h1>
            <p class="font-medium text-gray-500 px-32 text-lg text-center anim-deck-1">Dengan kemajuan teknologi yang begitu pesat, akses ke komoditas juga terus berkembang. Kami menyediakan layanan logistik pengantaran paket yang efisien dan mencapai <span class="font-bold">pedalaman</span> untuk mendukung bisnis anda.</p>

            <div class="mt-8 mb-16 anim-deck-1">
                <button class="bg-lavenderIndigo text-white px-6 py-3 rounded-lg mr-2">Kirim Paket</button>
                <button class="bg-white text-lavenderIndigo px-6 py-3 rounded-lg ml-2">Cek Resi</button>
            </div>

            <img src="@/assets/img/foto1.jpg" class="anim-deck-1">
        </div>

        <!-- Tentang kami -->
        <div class="flex items-center justify-between px-20 py-10 gap-20" id="tentang">
            <div class="w-1/2 anim-deck-2-l">
                <p class="font-medium text-chromeYellow text-lg">Tentang Kami</p>
                <h1 class="font-bold text-5xl leading-snug">
                    Solusi untuk mengirimkan barang anda ke seluruh pedalaman.
                </h1>
            </div>

            <div class="w-1/2 anim-deck-2-r">
                <p class="font-medium text-gray-500 text-lg text-right">Kami menyediakan layanan pengiriman paket yang praktis dan efisien. Hanya dengan beberapa klik, paket Anda akan diantar oleh kurir ke lokasi tujuan, termasuk daerah <span class="font-bold">pedalaman</span>.</p>
            </div>
        </div>

        <div class="flex items-stretch justify-between px-20 py-10 gap-7">
            <div class="w-1/4 bg-astronautBlue p-6 rounded-lg anim-deck-2-m">
                <div class="flex items-center justify-center w-12 h-12 bg-red-200 rounded-md text-red-700 text-2xl">
                    <fa icon="fas fa-arrows-to-dot" size="1x"></fa>
                </div>
                <h1 class="py-5 text-2xl font-semibold">Focus</h1>
                <p class="text-gray-300">Menyelesaikan tugas sesuai prosedur dan memiliki kemampuan serta kemampuan yang baik, sehingga perusahaan mampu bersaing di era ekonomi digital.</p>
            </div>
            <div class="w-1/4 bg-astronautBlue p-6 rounded-lg anim-deck-2-m">
                <div class="flex items-center justify-center w-12 h-12 bg-orange-200 rounded-md text-orange-700 text-2xl">
                    <fa icon="fas fa-person-running" size="1x"></fa>
                </div>
                <h1 class="py-5 text-2xl font-semibold">Active and Creative</h1>
                <p class="text-gray-300">Berpartisipasi dalam setiap kegiatan dan memberikan ide baru untuk perbaikan dan peningkatan kualitas jasa.</p>
            </div>
            <div class="w-1/4 bg-astronautBlue p-6 rounded-lg anim-deck-2-m">
                <div class="flex items-center justify-center w-12 h-12 bg-green-200 rounded-md text-green-700 text-2xl">
                    <fa icon="fas fa-bell-concierge" size="1x"></fa>
                </div>
                <h1 class="py-5 text-2xl font-semibold">Service Excellence</h1>
                <p class="text-gray-300">Seluruh karyawan dan manajemen memberi pelayanan terbaik kepada pihak internal dan eksternal, sehingga konsumen punya ketertarikan hati.</p>
            </div>
            <div class="w-1/4 bg-astronautBlue p-6 rounded-lg anim-deck-2-m">
                <div class="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-md text-blue-700 text-2xl">
                    <fa icon="fas fa-people-group" size="1x"></fa>
                </div>
                <h1 class="py-5 text-2xl font-semibold">Teamwork</h1>
                <p class="text-gray-300">Bekerja sama dengan orang lain / bagian lain secara kooperatif untuk mencapai tujuan bersama.</p>
            </div>
        </div>

        <!-- Layanan Kami -->
        <div class="flex flex-col items-center justify-center px-20 py-16" id="layanan">
            <p class="font-medium text-chromeYellow text-lg anim-deck-3">Layanan Kami</p>
            <h1 class="font-bold text-5xl leading-snug text-center w-2/3 pt-5 anim-deck-3">
                Solusi pengiriman barang anda, di genggaman tangan anda.
            </h1>
            <p class="font-medium text-gray-500 w-2/3 text-lg text-center pt-8 anim-deck-3">Kami menghadirkan jasa pengiriman paket yang mudah dan efektif. Dengan beberapa tombol saja, paket anda akan dikirim oleh kurir ke lokasi yang anda tuju hingga ke <span class="font-bold">pedalaman</span>, dan semua dimulai di genggaman tangan anda.</p>

            <div class="flex items-center justify-center px-10 gap-10 py-20">
                <div class="flex items-center justify-center anim-deck-4-1">
                    <img src="@/assets/img/features/Perhitungan yang Transparan.svg">
                </div>

                <div class="w-1/2 anim-deck-4-1">
                    <h1 class="text-5xl font-semibold pb-7">Biaya yang terjangkau dan transparan</h1>
                    <p class="leading-loose tracking-wide text-gray-500 font-medium">Kami menampilkan dengan detail segala biaya yang digunakan, dan memastikan biaya tersebut terjangkau dan jelas.</p>
                </div>
            </div>

            <div class="flex items-center justify-center px-10 gap-10">
                <div class="w-1/2 anim-deck-4-2">
                    <h1 class="text-5xl font-semibold pb-7">Pantau pengiriman secara real-time.</h1>
                    <p class="leading-loose tracking-wide text-gray-500 font-medium">Pengiriman ditrack dari awal penyerahan paket, hingga paket sampai ke tujuan, secara terus menerus.</p>
                </div>

                <div class="flex items-center justify-center anim-deck-4-2">
                    <img src="@/assets/img/features/Cek Paket.svg">
                </div>
            </div>

            <div class="flex items-center justify-center px-10 gap-5">
                <div class="flex items-center justify-end w-1/2 anim-deck-4-3">
                    <img src="@/assets/img/preview-1.svg" class="w-11/12">
                </div>

                <div class="w-1/2 pr-16 anim-deck-4-3">
                    <h1 class="text-5xl font-semibold pb-7">Terhubung dimanapun.</h1>
                    <p class="leading-loose tracking-wide text-gray-500 font-medium">Anda dapat melacak dan mengatur pengiriman anda dimanapun, termasuk dalam genggaman anda.</p>
                </div>            
            </div>
        </div>

        <!-- FAQ -->
        <div class="flex flex-col items-center justify-center p-20 bg-lavenderIndigo" id="faq">
            <h1 class="font-bold text-7xl px-16 py-10 leading-snug text-center anim-deck-5">
                Punya pertanyaan sekitar Logistika ataupun fiturnya?
            </h1>

            <div class="mt-8 mb-16 anim-deck-5">
                <button class="bg-lavender text-ebony px-6 py-3 rounded-lg mr-2">FAQ</button>
                <button class="bg-white text-lavenderIndigo px-6 py-3 rounded-lg ml-2">Hubungi Kami</button>
            </div>
        </div>
    </div>
    
</template>
