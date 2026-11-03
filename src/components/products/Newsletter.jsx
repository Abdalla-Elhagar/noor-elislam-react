import { useState } from 'react'
import { useToast } from '../../context/ToastContext'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const { showToast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    showToast('تم التحقق من البريد. يلزم ربط خدمة الاشتراكات لحفظه.')
    setEmail('')
  }

  return (
    <section className="bg-gradient-to-br from-[#b88a20] to-gold-dark py-10 text-white">
      <div className="container-x grid items-center gap-5 lg:grid-cols-[7fr_5fr]">
        <div>
          <h2 className="mb-2.5 text-2xl font-extrabold">خليك دايمًا على اطلاع</h2>
          <p className="text-[13px] leading-[1.9] text-[#fff7e3]">
            اشترك ببريدك الإلكتروني لتصلك آخر المنتجات والعروض الجديدة.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex max-w-[440px] flex-col gap-2 sm:flex-row lg:w-full">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="البريد الإلكتروني"
            aria-label="البريد الإلكتروني"
            className="min-w-0 flex-1 rounded-[10px] border-0 p-3 text-[13px] text-ink outline-none"
          />
          <button type="submit" className="rounded-[10px] bg-white px-[18px] py-2.5 font-extrabold text-gold-dark transition hover:bg-gold-light">
            اشترك الآن
          </button>
        </form>
      </div>
    </section>
  )
}
