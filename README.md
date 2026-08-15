# Ege Rıdvan Tokmak — Kişisel Portföy Sitesi

Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion ile hazırlanmış, tam mobil uyumlu,
dark/light temalı kişisel portföy & blog sitesi.

## Özellikler

- 🎨 Modern, terminal/siber-güvenlik temalı tasarım (mor-menekşe aksan rengi)
- 📱 Uçtan uca responsive (mobil, tablet, masaüstü)
- 🌗 Dark / Light mode (tercih `localStorage`'da saklanır, sayfa yenilense de kaybolmaz)
- 👤 Hakkımda bölümü
- 💻 Projeler bölümü (ByteSniff, Network Security Sentinel, NRF Box, Hava Kalite Monitörü)
- 🏆 Başarılar & sertifikalar zaman çizelgesi
- 🛠️ Yetenekler bölümü (Python, Linux, Networking, ESP32, C/C++ vb. ilerleme çubuklarıyla)
- 📄 CV indirme butonu
- 🔗 GitHub, LinkedIn, Instagram, e-posta bağlantıları
- ✍️ Blog önizleme bölümü
- 📬 İletişim formu (EmailJS / Resend entegrasyonuna hazır)
- ✨ Sayfa açılış animasyonu (terminal boot ekranı), scroll progress bar, scroll-reveal
  animasyonları, hover mikro-etkileşimleri, smooth scrolling

## Teknolojiler

| Katman    | Teknoloji                                           |
| --------- | ---------------------------------------------------- |
| Frontend  | Next.js 16 (App Router), TypeScript                  |
| Stil      | Tailwind CSS v4                                      |
| Animasyon | Framer Motion                                        |
| İkonlar   | Lucide Icons + React Icons                           |
| Font      | Google Fonts — Inter, Space Grotesk, JetBrains Mono  |
| Deploy    | Vercel (ücretsiz)                                    |

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

## İçeriği Kendine Göre Düzenleme

Tüm site içeriği **tek bir dosyadan** yönetiliyor: `src/data/portfolio.ts`

Bu dosyada şunları değiştirebilirsin:

- `profile` → isim, unvan, biyografi, yaş, konum, eğitim, sosyal medya linkleri, e-posta
- `stats` → üst kısımdaki 4 istatistik kartı
- `projects` → proje kartları (başlık, açıklama, etiketler, GitHub linki)
- `skills` → yetenek ikonları ve seviye yüzdeleri
- `achievements` → ödül/sertifika zaman çizelgesi
- `blogPosts` → blog önizleme kartları
- `navLinks` → üst menüdeki bağlantılar

### CV dosyanı ekleme

`public/cv/` klasörüne PDF dosyanı `Ege-Ridvan-Tokmak-CV.pdf` adıyla koy
(veya `src/data/portfolio.ts` içindeki `cvUrl` değerini kendi dosya adına göre güncelle).

### Kendi fotoğrafını ekleme

Şu anda hero ve proje kartlarında zarif bir baş harf/ikon + gradient arka plan kullanılıyor.
Gerçek bir fotoğraf koymak istersen:

1. Fotoğrafı `public/images/profile.jpg` olarak ekle.
2. `src/components/Hero.tsx` içinde placeholder `<span>` bloğunu Next.js `<Image />`
   bileşeniyle değiştir:

```tsx
import Image from "next/image";
// ...
<Image src="/images/profile.jpg" alt="Ege Rıdvan Tokmak" fill className="object-cover" />
```

Proje görselleri için de aynı mantıkla `public/images/projects/` altına görselleri koyup
`src/components/Projects.tsx` içindeki gradient+ikon bloğunu `<Image />` ile değiştirebilirsin.

### İletişim formunu gerçek e-posta gönderimine bağlama

`src/components/Contact.tsx` içindeki `handleSubmit` fonksiyonunda bir `TODO` yorumu var.
İki kolay seçenek:

**EmailJS ile:**
```bash
npm install @emailjs/browser
```
```tsx
import emailjs from "@emailjs/browser";
await emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", e.currentTarget, "PUBLIC_KEY");
```

**Resend ile (API route üzerinden):** `src/app/api/contact/route.ts` altında bir sunucu
tarafı endpoint oluşturup formdan `fetch("/api/contact", { method: "POST", ... })` ile
çağırman yeterli.

## Vercel'e Deploy Etme

1. Projeyi bir GitHub reposuna yükle.
2. [vercel.com](https://vercel.com) üzerinden GitHub hesabınla giriş yap.
3. "Add New Project" → reponu seç → "Deploy" butonuna bas.
4. Next.js otomatik algılanır, ekstra ayar gerekmez.

Alternatif olarak Vercel CLI ile:

```bash
npm install -g vercel
vercel
```

## Klasör Yapısı

```
src/
  app/
    layout.tsx          → Fontlar, metadata, tema flash-önleme scripti
    page.tsx            → Tüm bölümleri birleştiren ana sayfa
    globals.css         → Tasarım tokenları (renkler, tipografi), dark/light değişkenleri
  components/
    Navbar.tsx           → Responsive navigasyon + tema anahtarı
    Loader.tsx           → Açılış animasyonu (terminal boot ekranı)
    ScrollProgress.tsx   → Üstteki scroll ilerleme çubuğu
    Hero.tsx             → Ana giriş bölümü (typewriter efektli)
    Stats.tsx            → İstatistik kartları
    About.tsx            → Hakkımda bölümü
    Projects.tsx         → Proje kartları
    Skills.tsx           → Yetenek ikon grid'i
    Achievements.tsx     → Başarılar zaman çizelgesi
    Blog.tsx             → Blog önizleme kartları
    Contact.tsx          → İletişim formu
    Footer.tsx           → Alt bilgi
  data/
    portfolio.ts         → 🔑 Tüm site içeriği burada
  lib/
    useTheme.ts           → Dark/light mode hook'u
```

## Notlar

- Bu sandbox ortamında Google Fonts'a ağ erişimi kısıtlı olduğu için `next build` burada
  test edilirken fontlar geçici olarak devre dışı bırakılıp doğrulandı; gerçek internet
  erişimi olan makinende / Vercel'de fontlar sorunsuz yüklenecektir.
- Erişilebilirlik için `prefers-reduced-motion` tercihi olan kullanıcılarda animasyonlar
  otomatik olarak kısaltılır.
