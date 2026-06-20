// src/page/ArtefakPembelajaran.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  MonitorPlay,
  Gamepad2,
  FileText,
  ExternalLink,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  RefreshCw,
  ClipboardCheck,
} from 'lucide-react';

const ArtefakPembelajaran = () => {
  const [activeTab, setActiveTab] = useState('rpp');

  // Data RPP per siklus
  const rppData = {
    siklus1: [
      { judul: 'RPP Siklus 1 - Pertemuan 1 (7H)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1qIy-R6hTL_9y3_z3C6xGQHobVDMYiOcy/view?usp=drive_link' },
      { judul: 'RPP Siklus 1 - Pertemuan 2 (8F)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1i8ghpCepCDBP0X07PYY19VxmPsDZIjdu/view?usp=drive_link' },
      { judul: 'RPP Siklus 1 - Pertemuan 3 (8E)', mapel: 'Informatika', topik: 'Blockly', link: 'https://drive.google.com/file/d/1FEa6HS5oMhrZpUkXVa4fF4AU_4lKizW4/view?usp=drive_link' },
    ],
    siklus2: [
      { judul: 'RPP Siklus 2 - Pertemuan 1 (7H)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1Mi1Ix6t67QHWY7IzNUAT4yg-dy598BPW/view?usp=drive_link' },
      { judul: 'RPP Siklus 2 - Pertemuan 2 (8F)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1lxa0RDKMNmZ5C2a0KNtYTtKGPPdthfzA/view?usp=drive_link' },
      { judul: 'RPP Siklus 2 - Pertemuan 3 (8E)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1xIK86BqiR3DvQD8qMmUFJywAaNsM1NrB/view?usp=drive_link' },
    ],
    siklus3: [
      { judul: 'RPP Siklus 3 - Pertemuan 1 (8F)', mapel: 'Informatika', topik: 'Blockly', link: 'https://drive.google.com/file/d/1xNg3pJm8aLKGLB3kj_-IjPux2maPP9xY/view?usp=drive_link' },
      { judul: 'RPP Siklus 3 - Pertemuan 2 (8E)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1FFiWCv5H4MZN0m3tTuuen34vMS-aESXG/view?usp=drive_link' },
    ],
  };

  // Data Analisis Artefak - Berdasarkan Refleksi Aktual
  const analisisArtefak = {
    kendala: [
      'Keterbatasan waktu (60 menit) menyebabkan latihan mandiri dan asesmen tertulis tidak selesai pada Siklus 1 Pertemuan 1',
      'Lab komputer tidak tersedia sehingga siswa menggunakan ponsel dengan layar kecil dan koneksi internet tidak merata (Siklus 1 Pertemuan 2 & Siklus 2 Pertemuan 1)',
      'Keterlambatan masuk kelas mengurangi waktu praktik efektif (Siklus 2 Pertemuan 1)',
      'Konsep clone pada Scratch sulit dipahami siswa karena tidak ada pengenalan terpisah (Siklus 3 Pertemuan 2)',
      'Loading Scratch lambat dan akses internet tidak stabil menghambat praktik (Siklus 1 Pertemuan 1 & 2)',
    ],
    teori: [
      'Teori Konstruktivisme - Siswa membangun pengetahuan melalui pengalaman langsung membuat program Scratch dan Blockly',
      'Teori Belajar Bruner - Pembelajaran melalui penemuan (discovery learning) saat siswa bereksplorasi dengan blok kode',
      'Pembelajaran Berdiferensiasi - Menyesuaikan dengan kecepatan belajar siswa (flipbook sebagai scaffolding mandiri)',
      'Model Direct Instruction dengan pendekatan gamifikasi - Terbukti efektif pada Siklus 1 Pertemuan 3 dan Siklus 3 Pertemuan 1',
      'Pendekatan Project-Based Learning (PBL) spiral - Pengembangan proyek bertahap dari game tangkap ke game roket',
      'Pair Programming - Digunakan pada Siklus 1 Pertemuan 2 untuk mengatasi keterbatasan perangkat',
    ],
    faktorKeberhasilan: [
      'Penggunaan flipbook panduan langkah-demi-langkah sangat efektif memandu kemandirian siswa (Siklus 2 Pertemuan 2 & 3)',
      'Media Blockly Games yang berwarna dan bersifat game membuat siswa betah dan partisipasi aktif mencapai 100% (Siklus 1 Pertemuan 3 & Siklus 3 Pertemuan 1)',
      'Pengalaman sebelumnya dengan Blockly Maze memudahkan transisi ke Scratch (Siklus 2 Pertemuan 3)',
      'Pendekatan gamifikasi dengan tantangan level meningkatkan motivasi siswa',
      'Gotong royong dan tutor sebaya terjadi secara alami saat siswa lebih cepat membantu teman',
      'Apersepsi yang mengaitkan pengalaman siswa dengan game dan animasi efektif membangun kesiapan mental',
    ],
    perubahan: [
      'Mengurangi porsi penjelasan di depan kelas dan mengganti dengan video tutorial singkat yang bisa diputar ulang (Siklus 1 Pertemuan 1)',
      'Menerapkan sistem pair programming (berpasangan) untuk mengatasi keterbatasan perangkat (Siklus 1 Pertemuan 2)',
      'Mendesain ulang pembelajaran dengan pendekatan blended offline-online dan lembar kerja bergambar untuk kondisi tanpa lab',
      'Menyiapkan file project Scratch yang bisa dibagikan melalui Bluetooth/Share-it untuk menghindari loading dari web',
      'Mempertahankan flipbook dan mengembangkannya menjadi versi digital interaktif (Siklus 2 Pertemuan 2)',
      'Mengajarkan konsep clone secara terpisah dengan proyek mini sebelum diintegrasikan ke game (Siklus 3 Pertemuan 2)',
      'Mengubah asesmen tertulis menjadi kuis lisan interaktif dan penugasan refleksi di luar jam pelajaran',
      'Menambahkan sesi "debugging challenge" dan "code review" untuk mengasah kemampuan analisis kode',
    ],
  };

  // Media Flipbook (link sudah diperbarui)
  const flipbooks = [
    {
      judul: 'Flipbook - Pengenalan Scratch Dasar',
      deskripsi: 'Media interaktif pengenalan Scratch untuk pemula',
      link: 'https://online.fliphtml5.com/trdjn/Pengenalan-Scartch-Dasar/',
    },
    {
      judul: 'Flipbook - Project Scratch Lanjutan',
      deskripsi: 'Flipbook visual tentang proyek Scratch lebih kompleks',
      link: 'https://online.fliphtml5.com/trdjn/znvw/',
    },
  ];

  // Game Scratch (hasil kerja siswa)
  const scratchGames = [
    {
      judul: 'Game Tangkap',
      deskripsi: 'Game sederhana menangkap objek - dibuat oleh siswa',
      embedUrl: 'https://scratch.mit.edu/projects/1326329704/embed',
      link: 'https://scratch.mit.edu/projects/1326329704',
    },
    {
      judul: 'Game Tembak Meteor',
      deskripsi: 'Game menembak meteor di luar angkasa - dibuat oleh siswa',
      embedUrl: 'https://scratch.mit.edu/projects/1326330920/embed',
      link: 'https://scratch.mit.edu/projects/1326330920',
    },
  ];

  const tabs = [
    { id: 'rpp', label: 'Rencana Pembelajaran', icon: <BookOpen size={18} /> },
    { id: 'media', label: 'Media Flipbook', icon: <MonitorPlay size={18} /> },
    { id: 'hasil', label: 'Hasil Kerja Siswa', icon: <Gamepad2 size={18} /> },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // Render RPP
  const renderRPP = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      {Object.entries(rppData).map(([siklus, rpps]) => (
        <motion.div key={siklus} variants={fadeInUp} className="glass-card rounded-[2rem] p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText size={24} className="text-green-600" />
            {siklus.replace('siklus', 'Siklus ')} ({rpps.length} RPP)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rpps.map((rpp, i) => (
              <div key={i} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/60 hover:shadow-md transition-all">
                <div className="font-semibold text-gray-900">{rpp.judul}</div>
                <div className="text-sm text-gray-600 mt-1">{rpp.mapel} - {rpp.topik}</div>
                <a
                  href={rpp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-600 text-sm mt-3 hover:text-green-800 transition-colors font-medium"
                >
                  Lihat RPP <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render Media Flipbook
  const renderMedia = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {flipbooks.map((item, i) => (
        <motion.div key={i} variants={fadeInUp} className="glass-card rounded-[2rem] p-6">
          <h3 className="text-xl font-bold text-gray-900">{item.judul}</h3>
          <p className="text-gray-600 text-sm mt-2">{item.deskripsi}</p>
          <div className="mt-4 aspect-video bg-gray-100/50 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center border border-white/40">
            <div className="text-gray-400 text-center p-4">
              <MonitorPlay size={48} className="mx-auto mb-2" />
              <span className="text-sm">Pratinjau Flipbook</span>
            </div>
          </div>
          <a
            href={item.link}
            target="_blank"
            className="inline-flex items-center gap-1 text-green-600 mt-4 font-medium hover:text-green-800 transition-colors"
          >
            Buka Flipbook <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render Hasil Kerja Siswa
  const renderHasilSiswa = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {scratchGames.map((game, i) => (
        <motion.div key={i} variants={fadeInUp} className="glass-card rounded-[2rem] p-6">
          <h3 className="text-xl font-bold text-gray-900">{game.judul}</h3>
          <p className="text-gray-600 text-sm mt-2">{game.deskripsi}</p>
          <div className="mt-4 aspect-video bg-gray-100/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/40">
            <iframe src={game.embedUrl} className="w-full h-full" title={game.judul} allowFullScreen></iframe>
          </div>
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-green-600 mt-4 font-medium hover:text-green-800 transition-colors"
          >
            Lihat di Scratch <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="w-full min-h-screen bg-[#F0F7F0] relative overflow-hidden">
      {/* Header Liquid Glass - Hijau */}
      <section className="relative w-full bg-gradient-to-br from-[#059669] via-[#047857] to-[#065F46] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/40 rounded-full mix-blend-overlay filter blur-3xl floating-shape"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/30 rounded-full mix-blend-overlay filter blur-3xl floating-shape-delayed"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-0"></div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white leading-tight tracking-tight"
          >
            Artefak Pembelajaran
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            Rencana Pembelajaran, Media Ajar, dan Hasil Karya Siswa
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#F0F7F0" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L0,100Z" />
          </svg>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Tab Navigation - Rata Tengah */}
        <div className="flex justify-center gap-1 overflow-x-auto pb-3 mb-10 border-b border-gray-200/60">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-green-600 shadow-sm border border-white/60 border-b-white font-semibold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'rpp' && renderRPP()}
            {activeTab === 'media' && renderMedia()}
            {activeTab === 'hasil' && renderHasilSiswa()}
          </motion.div>
        </AnimatePresence>

        {/* Analisis Artefak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <ClipboardCheck size={36} className="text-green-600" />
            Analisis Artefak Pembelajaran
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Analisis produk rencana dan perangkat pembelajaran berdasarkan refleksi praktik selama 3 siklus PPL
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kendala */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-[2rem] p-6 md:p-8 border-l-4 border-red-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={28} className="text-red-500" />
                <h3 className="text-xl font-bold text-gray-900">Kendala</h3>
              </div>
              <ul className="space-y-3">
                {analisisArtefak.kendala.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-400 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Teori Pedagogi */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-[2rem] p-6 md:p-8 border-l-4 border-blue-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb size={28} className="text-blue-500" />
                <h3 className="text-xl font-bold text-gray-900">Teori Pedagogi</h3>
              </div>
              <ul className="space-y-3">
                {analisisArtefak.teori.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Faktor Keberhasilan */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-[2rem] p-6 md:p-8 border-l-4 border-green-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={28} className="text-green-500" />
                <h3 className="text-xl font-bold text-gray-900">Faktor Keberhasilan</h3>
              </div>
              <ul className="space-y-3">
                {analisisArtefak.faktorKeberhasilan.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-400 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Perubahan */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-[2rem] p-6 md:p-8 border-l-4 border-purple-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw size={28} className="text-purple-500" />
                <h3 className="text-xl font-bold text-gray-900">Perubahan yang Dilakukan</h3>
              </div>
              <ul className="space-y-3">
                {analisisArtefak.perubahan.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-400 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900/90 backdrop-blur-md text-gray-300 py-8 text-center text-sm md:text-base mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="opacity-80">
            © 2026 — E-Portfolio PPG Calon Guru - Khoyrur Roykhan | Universitas Lambung Mangkurat | PPL Terbimbing
          </p>
          <p className="mt-1 text-xs opacity-60">Menjadi guru profesional, berawal dari praktik yang bermakna.</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .floating-shape {
          animation: float 8s ease-in-out infinite;
        }
        .floating-shape-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 3s;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }
        .glass-card-hover:hover {
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
};

export default ArtefakPembelajaran;