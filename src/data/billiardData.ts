export interface TableItem {
  id: string;
  name: string;
  type: 'Tournament' | 'VIP Lounge' | 'Snooker' | 'Regular';
  specs: string;
  cloth: string;
  balls: string;
  hourlyRateDay: number; // in IDR
  hourlyRateNight: number; // in IDR
  status: 'Tersedia' | 'Sedang Main' | 'Dipesan';
  currentPlayers?: string;
  image: string;
  features: string[];
}

export const BILLIARD_TABLES: TableItem[] = [
  {
    id: 'T-01',
    name: 'Meja Rasson OX Tournament Pro 9-ft (Arena 1)',
    type: 'Tournament',
    specs: 'Ukuran resmi 9-Foot Tournament Slate 3-piece 30mm Diamond Honed',
    cloth: 'Iwan Simonis 860 Tournament Blue / Amber Glow',
    balls: 'Super Aramith Pro-Cup TV Edition',
    hourlyRateDay: 60000,
    hourlyRateNight: 85000,
    status: 'Tersedia',
    image: 'https://ik.imagekit.io/iiz37iwr7/vipclassbening4d.png',
    features: ['Lampu Shadowless LED 5000K', 'Bantalan Klem Klem Artemis K55', 'Rak Stik Carbon & Meja Wasit', 'Pocket Drop Leather']
  },
  {
    id: 'T-02',
    name: 'Meja Diamond Pro-Am 9-ft (Arena 2)',
    type: 'Tournament',
    specs: 'Standar kejuaraan WPA 9-Foot One-Piece Slate',
    cloth: 'Iwan Simonis 860 HR Water Resistant',
    balls: 'Aramith Tournament Black Edition',
    hourlyRateDay: 60000,
    hourlyRateNight: 85000,
    status: 'Sedang Main',
    currentPlayers: 'Bambang vs Hendra (Frame 4-3)',
    image: 'https://ik.imagekit.io/iiz37iwr7/vipclassbening4d.png',
    features: ['Pocket Bi-Level Uncut', 'Bantalan Presisi Diamond Ultra', 'Sistem Leveling Digital', 'Pencahayaan Arena Turnamen']
  },
  {
    id: 'VIP-01',
    name: 'VIP Orange Lounge Suite #1',
    type: 'VIP Lounge',
    specs: 'Ruang Privat Kedap Suara + Meja 9-ft Rasson Exclusive',
    cloth: 'Simonis 860 Orange/Electric Felt',
    balls: 'Aramith Tournament Pro Cup Belgia',
    hourlyRateDay: 130000,
    hourlyRateNight: 160000,
    status: 'Tersedia',
    image: 'https://ik.imagekit.io/iiz37iwr7/vipclassbening4d.png',
    features: ['Sofa Mewah Chesterfield', 'Smart TV 65 Inch & PS5', 'Sound System Harman Kardon', 'Dedicated Private Waiter', 'Kulkas Minuman Dingin']
  },
  {
    id: 'VIP-02',
    name: 'Presidential Orange Billiard Salon #2',
    type: 'VIP Lounge',
    specs: 'Ruang Sultan 2 Meja 9-ft + Area Dining & Bar',
    cloth: 'Iwan Simonis 860 Tournament',
    balls: 'Aramith Tournament Black',
    hourlyRateDay: 220000,
    hourlyRateNight: 280000,
    status: 'Tersedia',
    image: 'https://ik.imagekit.io/iiz37iwr7/vipclassbening4d.png',
    features: ['Kapasitas hingga 15 Orang', 'Mini Bar & Barista Pribadi', 'Private Restroom Mewah', 'Mesin Pemoles Bola Otomatis', 'Air Purifier HEPA H13']
  },
  {
    id: 'SNK-01',
    name: 'Meja Snooker Star Tournament 12-ft',
    type: 'Snooker',
    specs: '12-Foot Full-Size Snooker Table Steel Block Cushion',
    cloth: 'Strachan 6811 Tournament 32oz Cloth',
    balls: 'Aramith Tournament Champion 1G Snooker Set',
    hourlyRateDay: 90000,
    hourlyRateNight: 120000,
    status: 'Tersedia',
    image: 'https://ik.imagekit.io/iiz37iwr7/vipclassbening4d.png',
    features: ['Heating Blanket Under Slate', 'Scoreboard Elektronik Snooker', 'Stik Sambung Snooker Ash Wood', 'Rest & Spider Cues Lengkap']
  },
  {
    id: 'REG-01',
    name: 'Meja Regular Slate 8-ft (Meja 05 - 12)',
    type: 'Regular',
    specs: 'Ukuran 8-Foot Batu Marmer Slate Presisi Tebal 25mm',
    cloth: 'Speed Cloth Teflon Coating',
    balls: 'Aramith Premier Belgian Balls',
    hourlyRateDay: 35000,
    hourlyRateNight: 55000,
    status: 'Tersedia',
    image: 'https://ik.imagekit.io/iiz37iwr7/vipclassbening4d.png',
    features: ['Tarif Super Hemat Promo Siang', 'Stik Maple House Cues Siap Pakai', 'Kapur Master USA Original', 'Sirkulasi AC Dingin']
  }
];

export interface TournamentItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  entryFee: string;
  totalPrize: string;
  firstPrize: string;
  format: string;
  quota: string;
  status: 'Open Pendaftaran' | 'Segera Dibuka' | 'Final Bracket';
}

export const TOURNAMENTS: TournamentItem[] = [
  {
    id: 'TRN-1',
    title: 'BENING4D Weekly Handicap 9-Ball Series',
    category: 'Handicap HC 3 - 4 - 5 - 6',
    date: 'Setiap Rabu & Sabtu Malam',
    time: 'Pukul 19:30 WIB - Selesai',
    entryFee: 'Rp 100.000 / Wild Card Rp 50.000',
    totalPrize: 'Rp 6.500.000 + Trophy Juara',
    firstPrize: 'Rp 3.000.000 + Medali Emas',
    format: 'Double Elimination s/d 16 Besar, Single Elimination s/d Final',
    quota: '64 Slot Peserta (Sisa 12 Slot)',
    status: 'Open Pendaftaran'
  },
  {
    id: 'TRN-2',
    title: 'BENING4D Grand Open 10-Ball Master Cup 2026',
    category: 'Open Non-HC (Semua Tingkatan Atlet & Umum)',
    date: '28 - 30 Bulan Ini',
    time: 'Pukul 13:00 WIB - 23:00 WIB',
    entryFee: 'Rp 350.000 (Termasuk Free T-Shirt Pro)',
    totalPrize: 'Rp 35.000.000 + Piala Bergilir',
    firstPrize: 'Rp 15.000.000 + Predator Cue Stick',
    format: 'Race to 7 (Winner Break), WPA Rules Official',
    quota: '128 Slot Peserta Nasional',
    status: 'Open Pendaftaran'
  },
  {
    id: 'TRN-3',
    title: 'BENING4D Rookie & Executive Fun Match',
    category: 'HC 3 Khusus Pemula & Member Lounge',
    date: 'Minggu Sore',
    time: 'Pukul 15:00 WIB - 19:00 WIB',
    entryFee: 'Rp 75.000 (Free Snack & Mocktail)',
    totalPrize: 'Rp 3.000.000 + Voucher Meja',
    firstPrize: 'Rp 1.500.000 + Stik Maple Case',
    format: 'Race to 4, Relaxed & Friendly Bracket',
    quota: '32 Slot Peserta',
    status: 'Segera Dibuka'
  }
];

export interface ProShopItem {
  id: string;
  name: string;
  category: 'Cue Stick' | 'Shaft' | 'Accessories' | 'Case';
  brand: string;
  price: string;
  description: string;
  image: string;
  rating: number;
}

export const PRO_SHOP_ITEMS: ProShopItem[] = [
  {
    id: 'SHOP-1',
    name: 'Predator SP2 Revo Zebrawood 9-Ball Cue',
    category: 'Cue Stick',
    brand: 'Predator USA',
    price: 'Rp 14.850.000',
    description: 'Stik legendaris dengan Carbon Fiber REVO Shaft 12.4mm, akurasi tembakan low-deflection terbaik di dunia.',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=600&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: 'SHOP-2',
    name: 'Cuetec Cynergy 15K Carbon Composite Shaft',
    category: 'Shaft',
    brand: 'Cuetec',
    price: 'Rp 7.200.000',
    description: 'Shaft komposit karbon multi-directional serat militer dengan Sniper tip dan feel natural maple.',
    image: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=600&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 'SHOP-3',
    name: 'Kamui Clear Black Tip (Soft / Medium / Hard)',
    category: 'Accessories',
    brand: 'Kamui Japan',
    price: 'Rp 365.000',
    description: 'Tip kulit babi laminasi berlapis dengan lapisan dasar bening akrilik untuk transfer energi solid.',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: 'SHOP-4',
    name: 'Taom Pyro Chalk Orange Edition (Original Finland)',
    category: 'Accessories',
    brand: 'Taom Chalk',
    price: 'Rp 420.000',
    description: 'Kapur biliar nomor satu bebas debu, tidak mengotori bola dan laken dengan cengkeraman maksimal tanpa miscues.',
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=600&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 'SHOP-5',
    name: 'BENING4D Pro Leather Hard Case 3B4S Orange Neon',
    category: 'Case',
    brand: 'BENING4D Custom',
    price: 'Rp 2.450.000',
    description: 'Tas stik biliar kulit premium muat 3 Butt + 4 Shaft dengan proteksi benturan busa beludru dan resleting YKK.',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=600&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: 'SHOP-6',
    name: 'Predator Second Skin Billiard Glove (Breathable)',
    category: 'Accessories',
    brand: 'Predator',
    price: 'Rp 480.000',
    description: 'Sarung tangan biliar ultra-slick mesh anti-keringat untuk kelancaran gesekan shaft di jemari.',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=600&auto=format&fit=crop',
    rating: 4.9
  }
];

export const FAQS = [
  {
    q: 'Apa saja jenis meja biliar yang tersedia di BENING4D BILLIARD?',
    a: 'BENING4D Billiard menyediakan meja turnamen resmi 9-ft Rasson dan Diamond bersertifikasi WPA, meja VIP Private Room bernuansa oranye mewah, meja Snooker 12-ft, serta meja reguler slate 8-ft dengan laken Iwan Simonis 860 original.'
  },
  {
    q: 'Berapa tarif sewa meja per jam di BENING4D BILLIARD?',
    a: 'Tarif sewa meja reguler mulai dari Rp 35.000/jam (promo siang) hingga Rp 60.000/jam (malam). Meja Tournament Pro Rp 80.000/jam, dan VIP Room eksklusif mulai dari Rp 150.000/jam sudah termasuk fasilitas private audio, sofa lounge, dan personal waiter.'
  },
  {
    q: 'Apakah BENING4D BILLIARD menyediakan stik cue dan aksesoris pro?',
    a: 'Ya, kami menyediakan Pro Shop terlengkap yang menjual stik biliar predator, carbon shaft cuetec, peri, mezz, fury, tip kamui/zan, master chalk, tas stik, serta layanan pasang tip dan refinish shaft presisi.'
  },
  {
    q: 'Kapan jadwal turnamen biliar terbuka diadakan di BENING4D?',
    a: 'Turnamen handicap (HC 3-4-5-6) diadakan setiap hari Rabu dan Sabtu malam dengan total hadiah jutaan rupiah. Kami juga menyelenggarakan Major Open 9-Ball & 10-Ball Championship setiap akhir bulan dengan sertifikasi resmi.'
  },
  {
    q: 'Apakah pemula dapat menyewa jasa pelatih atau sparring partner?',
    a: 'Tentu saja. BENING4D Billiard memiliki instruktur biliar bersertifikasi nasional dan sparring partner berpengalaman untuk kelas teknik dasar, stance, cue action, hingga pola break and run.'
  },
  {
    q: 'Apakah tersedia menu makanan, kopi, dan minuman di BENING4D Lounge?',
    a: 'BENING4D dilengkapi Lounge & Kitchen berstandar cafe premium yang menyajikan aneka sajian lezat, artisan coffee, mocktail segar, finger food, dan camilan sambil menikmati alunan musik santai dan efek visual atmospheric.'
  },
  {
    q: 'Bagaimana prosedur reservasi meja agar tidak perlu antre?',
    a: 'Anda dapat melakukan booking langsung melalui form reservasi online interaktif di website BENING4D ini atau klik tombol WhatsApp hotline 24 jam untuk konfirmasi nomor meja dan jam kedatangan secara instan.'
  },
  {
    q: 'Apakah BENING4D BILLIARD buka 24 jam setiap hari?',
    a: 'Ya, BENING4D Billiard beroperasi 24 jam non-stop setiap hari (Senin - Minggu) dengan sistem pencahayaan LED turnamen bebas bayangan (shadowless 5000K) dan sirkulasi AC dingin filter udara ganda.'
  },
  {
    q: 'Bola biliar apa yang digunakan di setiap meja BENING4D?',
    a: 'Semua meja di BENING4D menggunakan set bola original Aramith Tournament Pro Cup Belgia dan bola seri Black Edition yang dibersihkan serta dipoles secara berkala menggunakan mesin pembersih bola otomatis.'
  },
  {
    q: 'Apakah ada diskon member atau paket langganan bulanan?',
    a: 'Tersedia kartu BENING4D VIP Club Member dengan potongan sewa meja hingga 30%, gratis loker stik pribadi, diskon pro shop 15%, dan free welcome drink di setiap kunjungan.'
  }
];

export const REVIEWS = [
  {
    name: 'Rian Ardiansyah',
    location: 'Jakarta Selatan',
    rating: 5,
    date: 'Kemarin',
    comment: 'Meja Rasson 9-ft di Bening4D Billiard lakennya super mulus Simonis asli! Lampu meja bebas bayangan bikin akurasi pot bola jadi maksimal. Suasana oranye-nya mewah banget!'
  },
  {
    name: 'Kapten Hendra Gunawan',
    location: 'Tangerang',
    rating: 5,
    date: '3 hari lalu',
    comment: 'Turnamen mingguan di BENING4D selalu fair play dan hadiah langsung cair tanpa potongan. Sistem bagan dan handicap-nya rapi banget.'
  },
  {
    name: 'Jessica Nathania',
    location: 'Jakarta Barat',
    rating: 5,
    date: '5 hari lalu',
    comment: 'Tempatnya sangat bersih, AC dingin, dan tidak pengap. Efek visual oranye hangat dengan musik ambient bikin betah main berjam-jam bersama teman kantor.'
  },
  {
    name: 'Donny Pratama, S.Kom.',
    location: 'Bekasi',
    rating: 5,
    date: '1 minggu lalu',
    comment: 'VIP Room-nya juara! Ada smart TV, sofa kulit empuk, dan sound system pribadi. Booking lewat website langsung dapat konfirmasi cepat.'
  },
  {
    name: 'Bambang Triyono',
    location: 'Depok',
    rating: 5,
    date: '1 minggu lalu',
    comment: 'Pro Shop BENING4D lengkap abis, beli stik carbon shaft Cuetec dan pasang tip Kamui Black dikerjakan rapi dalam 15 menit oleh teknisi handal.'
  },
  {
    name: 'Siti Maharani',
    location: 'Jakarta Pusat',
    rating: 5,
    date: '2 minggu lalu',
    comment: 'Menu makanan dan kopinya enak banget, bukan sekadar biliar biasa tapi benar-benar lounge berkelas. Pelayanannya ramah bintang lima.'
  },
  {
    name: 'Fajar Ramadhan',
    location: 'Bogor',
    rating: 5,
    date: '2 minggu lalu',
    comment: 'Sewa meja 24 jam jadi penyelamat waktu pengin latihan larut malam. Bola Aramith Pro Cup selalu kinclong dan pantulan bantalannya konsisten.'
  },
  {
    name: 'Kevin Wijaya',
    location: 'Jakarta Utara',
    rating: 5,
    date: '3 minggu lalu',
    comment: 'Instruktur pelatihnya sabar membimbing perbaikan sudut pot dan teknik draw shot saya. Kemampuan main saya naik pesat setelah 3 sesi latihan privat.'
  },
  {
    name: 'Agus Setiawan',
    location: 'Bandung',
    rating: 5,
    date: '3 minggu lalu',
    comment: 'Harga paket promo siang sangat terjangkau untuk kualitas meja standar internasional. Meja lurus tanpa kemiringan sedikit pun.'
  },
  {
    name: 'Tommy Saputra',
    location: 'Jakarta Timur',
    rating: 5,
    date: '1 bulan lalu',
    comment: 'BENING4D BILLIARD adalah arena biliar terbaik dan paling keren yang pernah saya kunjungi. Komunitasnya ramah dan atmosfernya tak tertandingi!'
  }
];
