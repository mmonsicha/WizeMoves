'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] px-8 py-16 md:px-14 md:py-20">
        {/* Gradient top bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6D28D9] to-[#F59E0B]" />

        {/* Mascot */}
        <div className="flex justify-center mb-6">
          <div className="relative w-52 h-52">
            <Image
              src="/success.png"
              alt="WizeMoves mascot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          ส่งฟอร์มเรียบร้อย!
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-slate-700 leading-relaxed mb-8">
          เราได้รับข้อมูลของคุณแล้ว<br />
          ทีมงานของเราจะรีบทำการติดต่อกลับไป<br />
          เพื่อนัดหมายการให้คำปรึกษากับคุณ!
        </p>

        {/* Back button */}
        <button
          onClick={() => router.push('/')}
          className="px-8 py-3 rounded-full bg-[#8B5CF6] text-white font-bold text-lg hover:opacity-85 transition-opacity"
        >
          กลับไปที่เว็บไซต์
        </button>
      </div>
    </main>
  );
}
