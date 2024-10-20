import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Syarat dan Ketentuan</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>KETIKA SUDAH EXPIRED TIDAK BISA DI REFUND</li>
          <li>KETIKA SUDAH MEMBELI TIDAK BISA DI REFUND</li>
          <li>Pembayaran harus dilakukan sebelum layanan dimulai</li>
          <li>Kami berhak menolak permintaan yang melanggar hukum atau etika</li>
          <li>Perubahan harga dapat terjadi sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
          <li>Kami tidak bertanggung jawab atas kerugian yang disebabkan oleh penggunaan layanan yang tidak sesuai</li>
          <li>Pelanggan bertanggung jawab penuh atas konten yang digunakan dalam layanan</li>
          <li>Kami berhak menghentikan layanan jika terjadi pelanggaran terhadap syarat dan ketentuan</li>
          <li>Privasi dan keamanan data pelanggan akan dijaga sesuai dengan kebijakan privasi kami</li>
          <li>Dengan menggunakan layanan kami, Anda dianggap telah membaca dan menyetujui semua syarat dan ketentuan ini</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;