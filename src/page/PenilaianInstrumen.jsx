// src/page/PenilaianInstrumen.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  FileText,
  ExternalLink,
  Award,
  Target,
  TrendingUp,
} from 'lucide-react';

const PenilaianInstrumen = () => {
  // Data Penilaian GP & DPL
  const penilaianData = [
    {
      judul: 'Lampiran 7 - Penilaian Perangkat (GP)',
      tipe: 'PDF - Instrumen Penilaian Penyusunan Perangkat Pembelajaran',
      icon: <FileText size={36} className="text-green-500" />,
      items: [
        { label: 'Asistensi Mengajar', link: 'https://drive.google.com/file/d/1AiIRYo8RfLUveX7rHz4-1fGXxwM_n-hW/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 1', link: 'https://drive.google.com/file/d/16uIbCK_5Q9_olDZY7_Nd_zXE-hyH-qSg/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 2', link: 'https://drive.google.com/file/d/1YmcK6y9CSlrOchC6G708bxwDnVjUVzpI/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 3', link: 'https://drive.google.com/file/d/1YmcK6y9CSlrOchC6G708bxwDnVjUVzpI/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 1', link: 'https://drive.google.com/file/d/1KR0CtKJsCBQyxwNyJWEJxbgKa_xZwKqX/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 2', link: 'https://drive.google.com/file/d/1QOeJ_sp6jnoAXXbCHHyapqejLbk1yZyl/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 3', link: 'https://drive.google.com/file/d/1d7tB1mX09Ys95RnvskFN_kTjxXQUwlrE/view?usp=drive_link' },
        { label: 'Siklus 3 Pertemuan 1', link: 'https://drive.google.com/file/d/1C1HqwOO6gxAAQZrupYdDBahxrnYMQRnr/view?usp=drive_link' },
        { label: 'Siklus 3 Pertemuan 2', link: 'https://drive.google.com/file/d/10m9AU5MiYttqQPxdOcAM_-gNZYjMWIgg/view?usp=drive_link' },
      ],
    },
    {
      judul: 'Lampiran 8 - Penilaian Praktik Mengajar (GP)',
      tipe: 'PDF - Instrumen Penilaian Praktik Mengajar',
      icon: <Target size={36} className="text-emerald-500" />,
      items: [
        { label: 'Siklus 1 Pertemuan 1', link: 'https://drive.google.com/file/d/1yP1y6DFXYHSvpt9ryfbtXW9csuJk2pXz/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 2', link: 'https://drive.google.com/file/d/1C5PAusxTu-NBhoTNVaNPeUr2zZQlKdSm/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 3', link: 'https://drive.google.com/file/d/1C5PAusxTu-NBhoTNVaNPeUr2zZQlKdSm/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 1', link: 'https://drive.google.com/file/d/1qkucgPA96n3CEXffxJPZnV-DjAjweDIe/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 2', link: 'https://drive.google.com/file/d/1GGlO646ayhW0CwkTVfsHcxIPjN_54cDW/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 3', link: 'https://drive.google.com/file/d/1CKUF3UkfXwQDJgGKUxvSSJvK2zgYQYD3/view?usp=drive_link' },
        { label: 'Siklus 3 Pertemuan 1', link: 'https://drive.google.com/file/d/1NJ1JaAjMrpb66qEDVzyDgOnOUt1_jpWo/view?usp=drive_link' },
        { label: 'Siklus 3 Pertemuan 2', link: 'https://drive.google.com/file/d/1ndsjWFE0A4h2u21L9_GQERvJ7rM6PXjh/view?usp=drive_link' },
      ],
    },
    {
      judul: 'Refleksi Pembelajaran',
      tipe: 'Dokumen Refleksi - 3 Siklus',
      icon: <Award size={36} className="text-teal-500" />,
      items: [
        { label: 'Asistensi Mengajar', link: 'https://drive.google.com/file/d/1Kmt2JduWVEVSiPcJxttHuFI09EyondJl/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 1', link: 'https://drive.google.com/file/d/1Eixy7Zc13KcjeU9CXSwNyTwjNVc7dYyq/view?usp=sharing' },
        { label: 'Siklus 1 Pertemuan 2', link: 'https://drive.google.com/file/d/1NbwAcMUSKMug779L4IyxCi843VAr7xbl/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 3', link: 'https://drive.google.com/file/d/13WwX_3O4KpBMEWHVKplHiIWiqGuMlpyy/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 1', link: 'https://drive.google.com/file/d/1hXXsXqV6q5XDmvVbqPYhPoADWVk1y7Ho/view?usp=sharing' },
        { label: 'Siklus 2 Pertemuan 2', link: 'https://drive.google.com/file/d/1HWnHQeabuNF7yrP5v2hg2xRjJw1fAF7Z/view?usp=sharing' },
        { label: 'Siklus 2 Pertemuan 3', link: 'https://drive.google.com/file/d/1GTlDeQ12Ua2A47Prh9a2SXAhLcCc51on/view?usp=sharing' },
        { label: 'Siklus 3 Pertemuan 1', link: 'https://drive.google.com/file/d/1P2gchmDBovZQMtXt9CnzYfgj-8uFqdp_/view?usp=sharing' },
        { label: 'Siklus 3 Pertemuan 2', link: 'https://drive.google.com/file/d/1bjwbbCVMleVNksk_0VovdoeAGCaDSxTu/view?usp=sharing' },
      ],
    },
    {
      judul: 'Lembar Kunjungan Dosen (DPL)',
      tipe: 'PDF - Monitoring & Evaluasi',
      icon: <TrendingUp size={36} className="text-green-600" />,
      items: [
        { label: 'Kunjungan 1', link: 'https://drive.google.com/file/d/1wz9jkKu-xpIKaH0g7h3FxmaZZmscxrrt/view?usp=drive_link' },
        { label: 'Kunjungan 2', link: 'https://drive.google.com/file/d/11lkrdctKHZijRV2uTavUFdspVj03dDqI/view?usp=drive_link' },
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="w-full min-h-screen bg-[#F0F7F0] relative overflow-hidden">
      {/* Header - Hijau */}
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
            Penilaian
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            Rekap Penilaian dari Guru Pamong (GP) dan Dosen Pembimbing Lapangan (DPL) selama 3 Siklus PPL
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#F0F7F0" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L0,100Z" />
          </svg>
        </div>
      </section>

      {/* Konten */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2.5rem] p-8 md:p-10 mb-12 border-l-4 border-green-500"
        >
          <div className="flex items-start gap-4">
            <ClipboardCheck size={32} className="text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Penilaian dari Guru Pamong
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Berikut merupakan hasil penilaian dari Guru Pamong (GP) terkait dengan rancangan pembelajaran 
                yang telah disusun (Lampiran 7) dan praktik mengajar yang dilakukan selama 3 siklus (Lampiran 8). 
                Penilaian ini mencakup aspek penyusunan perangkat pembelajaran dan pelaksanaan praktik mengajar 
                yang telah dievaluasi secara berkala untuk meningkatkan kualitas pembelajaran.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <span className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Lampiran 7: Penilaian Perangkat
                </span>
                <span className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Lampiran 8: Penilaian Praktik Mengajar
                </span>
                <span className="flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                  3 Siklus PPL
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Penilaian Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {penilaianData.map((doc, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="glass-card glass-card-hover rounded-[2.5rem] p-8 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/50 backdrop-blur-md shadow-sm flex-shrink-0">
                  {doc.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-xl mb-1">{doc.judul}</h3>
                  <p className="text-sm text-gray-500 mb-4">{doc.tipe}</p>
                  <ul className="space-y-2.5">
                    {doc.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-green-600 hover:text-green-800 hover:underline transition-colors group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 group-hover:bg-green-600 transition-colors"></span>
                          {item.label}
                          <ExternalLink size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ringkasan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-[2.5rem] p-8 md:p-10 text-center"
        >
          <Target size={36} className="text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Evaluasi & Peningkatan Kualitas
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Penilaian dari Guru Pamong dan Dosen Pembimbing Lapangan menunjukkan peningkatan 
            kompetensi mengajar yang signifikan dari Siklus 1 ke Siklus 3. Setiap siklus menjadi 
            kesempatan untuk merefleksi dan memperbaiki kualitas pembelajaran.
          </p>
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

export default PenilaianInstrumen;