// ─────────────────────────────────────────────────────────────
// Bu dosya, sitenin tüm içeriğini tek yerden yönetmen için var.
// Kendi bilgilerini, projelerini, becerilerini buradan güncelle.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ege Rıdvan",
  surname: "Tokmak",
  role: "Security Researcher & Software Developer",
  roles: [
    "Security Researcher",
    "Software Developer",
    "Network Analyst",
    "IoT Meraklısı",
  ],
  greeting: "Merhaba, ben",
  bio: "Ben Ege Rıdvan Tokmak. Siber güvenlik, ağ güvenliği ve yazılım geliştirme alanlarına ilgi duyuyorum. Python ile yazılım geliştiriyor, ağlar hakkında öğreniyor ve elektronik projeler üretiyorum. Kendimi geliştirmeyi ve yeni şeyler öğrenmeyi seviyorum.",
  shortBio:
    "Siber güvenlik, ağ güvenliği ve yazılım geliştirme alanlarında projeler üretiyor, yeni teknolojiler öğreniyor ve kendimi sürekli geliştiriyorum.",
  age: 16,
  location: "Tekirdağ, Türkiye",
  education: "Mimar Sinan Anadolu Lisesi",
  interests: ["Siber Güvenlik", "Networking", "Yazılım", "Elektronik"],
  email: "ege@example.com",
  cvUrl: "/cv/Ege-Ridvan-Tokmak-CV.pdf",
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    instagram: "https://instagram.com/",
  },
};

export const stats = [
  { icon: "terminal", value: "10+", label: "Proje" },
  { icon: "trophy", value: "1", label: "İl Birinciliği" },
  { icon: "badge", value: "5+", label: "Sertifika" },
  { icon: "code", value: "3+", label: "Yıl Deneyim" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "bytesniff",
    title: "ByteSniff",
    description: "Ağ trafiğini analiz etmek için geliştirdiğim paket dinleme ve analiz aracı.",
    longDescription:
      "ByteSniff, ağ üzerinde akan paketleri gerçek zamanlı yakalayıp analiz eden, Python ve Scapy ile geliştirilmiş masaüstü bir uygulamadır. PyQt5 arayüzü sayesinde protokol dağılımı, kaynak/hedef IP istatistikleri ve şüpheli trafik desenleri kolayca izlenebilir.",
    tags: ["Python", "Scapy", "PyQt5"],
    image: "bytesniff",
    github: "https://github.com/",
    featured: true,
  },
  {
    slug: "network-security-sentinel",
    title: "Network Security Sentinel",
    description: "Ağ taraması, paket analizi ve güvenlik kontrolleri yapan masaüstü uygulaması.",
    longDescription:
      "Network Security Sentinel, yerel ağdaki cihazları tarayan, açık portları tespit eden ve temel güvenlik zafiyetlerini raporlayan bir güvenlik izleme aracıdır. Nmap entegrasyonu ile hızlı ve güvenilir tarama sonuçları sunar.",
    tags: ["Python", "PyQt5", "Nmap"],
    image: "sentinel",
    github: "https://github.com/",
    featured: true,
  },
  {
    slug: "nrf-box",
    title: "NRF Box",
    description: "Kablosuz haberleşme ve uzaktan kontrol için geliştirdiğim bir sistem.",
    longDescription:
      "NRF Box, NRF24L01 modülü kullanarak düşük gecikmeli kablosuz haberleşme sağlayan, ESP32 tabanlı bir uzaktan kontrol sistemidir. IoT cihazlarını merkezi bir noktadan yönetmek için tasarlandı.",
    tags: ["ESP32", "NRF24", "IoT"],
    image: "nrfbox",
    github: "https://github.com/",
  },
  {
    slug: "hava-kalite-monitoru",
    title: "Hava Kalite Monitörü",
    description: "Ortam hava kalitesini ölçen ve verileri grafiksel olarak gösteren cihaz.",
    longDescription:
      "ESP32 ve çeşitli hava kalitesi sensörleri kullanılarak geliştirilen bu cihaz, sıcaklık, nem ve hava kirliliği verilerini toplayarak canlı bir web arayüzünde grafiksel olarak sunar.",
    tags: ["ESP32", "Sensors", "IoT"],
    image: "airquality",
  },
];

export type Skill = {
  name: string;
  icon: string;
  level?: number;
};

export const skills: Skill[] = [
  { name: "Python", icon: "python", level: 90 },
  { name: "Linux", icon: "linux", level: 85 },
  { name: "Networking", icon: "networking", level: 80 },
  { name: "Wireshark", icon: "wireshark", level: 75 },
  { name: "Nmap", icon: "nmap", level: 80 },
  { name: "Git", icon: "git", level: 85 },
  { name: "ESP32", icon: "esp32", level: 70 },
  { name: "C/C++", icon: "cpp", level: 65 },
];

export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: "award" | "certificate";
  /**
   * Sertifikanın PDF veya görsel dosyasının yolu.
   * Dosyayı `public/certificates/` klasörüne koy, buraya yolunu yaz.
   * Örnek: "/certificates/ag-guvenligi.pdf"
   */
  fileUrl?: string;
  /**
   * Bu sertifika/başarı kapsamında öğrenilen konular ya da yapılan çalışmalar.
   * Kartta "Neler Öğrenildi" bilgi kutusu olarak listelenir.
   */
  topics?: string[];
};

export const achievements: Achievement[] = [
  {
    title: "İl Birinciliği",
    issuer: "Türkiye'nin Teknoloji Yarışması",
    date: "2025",
    description:
      "Siber güvenlik ve gömülü sistemler kategorisinde geliştirdiğim proje ile il birinciliği elde ettim.",
    type: "award",
  },

  {
    title: "Harezmi Teknoloji Yarışması",
    issuer: "Harezmi Eğitim Modeli Sergisi",
    date: "2025",
    description: "Harezmi_airsense proje sunumu.",
    type: "award",
  },
  {
    title: "BSH Maker Lab",
    issuer: "Sertifika Programı",
    date: "",
    description: "",
    type: "certificate",
    fileUrl: "/certificates/bsh-maker-lab.pdf",
    topics: [],
  },

  {
    title: "Web Sızma Testi Eğitimi",
    issuer: "Sertifika Programı",
    date: "",
    description: "",
    type: "certificate",
    fileUrl: "/certificates/web-sizma-testi-egitimi.pdf",
    topics: [],
  },
  {
    title: "Etik Hacker Olma Kursu 2",
    issuer: "Sertifika Programı",
    date: "",
    description: "",
    type: "certificate",
    fileUrl: "/certificates/etik-hacker-olma-kursu-2.pdf",
    topics: [],
  },
  {
    title: "Etik Hacker Olma Kursu",
    issuer: "Sertifika Programı",
    date: "26.03.2024",
    description: "Sızma testi temelleri, ağ keşfi ve güvenlik açığı tarama teknikleri.",
    type: "certificate",
    fileUrl: "/certificates/etik_hacker_olma_kursu.jpg",
    topics: [
      "VPN ve DNS Yapılandırması",
      "Dark Web ve Gizlilik Kavramları",
      "Kali Linux Kullanımı",
      "Kablosuz Ağ Saldırıları ve Alınacak Önlemler",
      "Ortadaki Adam (MITM) Saldırıları ve Önlemleri",
      "Ekran Görüntüsü Ele Geçirme Teknikleri",
      "BeEF (Browser Exploitation Framework) Kullanımı",
      "Sahte Web Sitesi ile Sosyal Mühendislik Saldırıları",
      "Ubuntu Üzerinde Apache Sunucu Kurulumu",
      "Sosyal Medya Hesap Güvenliği",
      "Wireshark ile Ağ Trafiği Analizi",
      "Metasploit Framework Kullanımı",
      "Maltego ile Açık Kaynak İstihbarat (OSINT)",
      "Sosyal Mühendislik Teknikleri",
      "Shodan ile Cihaz ve Sistem Keşfi",
      "Truva Atları (Trojan) ve Çalışma Mantığı",
      "Meterpreter ile Uzaktan Erişim",
      "Web Sitesi Sızma Testleri ve Güvenlik Önlemleri",
      "SQL Temelleri",
      "SQL Injection (SQL Aşılama) Saldırıları",
      "XSS (Cross-Site Scripting) Açıkları",
      "Ağ (Network) Teorisi",
      "OSI Referans Modeli",
      "Ngrok ile Tunneling Servisleri",
      "Hashcat ile Hash Kırma",
      "Parola ve Hash Kırma Teknikleri",
      "Prompt Enjeksiyonu ve ChatGPT Güvenliği",
      "Yapay Zekâ (ChatGPT) Destekli Sızma Testi Yöntemleri",
    ],
  },
  {
    title: "100 Günde Python ile Yazılım Geliştirme Kampı",
    issuer: "Sertifika Programı",
    date: "2024",
    description: "Python programlama dili ile masaüstü ve otomasyon uygulamaları geliştirme.",
    type: "certificate",
    fileUrl: "/certificates/python-ile-yazilim-gelistirme.pdf",
    topics: [
      "Python Söz Dizimi ve Veri Yapıları",
      "Nesne Yönelimli Programlama (OOP)",
      "PyCharm, VS Code, Jupyter Notebook",
      "Requests ile HTTP İstekleri ve API Kullanımı",
      "Django ile Web Uygulaması Geliştirme",
      "HTML5 & CSS3",
      "Numpy ile Dizi ve Sayısal İşlemler",
      "Pandas ile Veri Analizi",
      "Matplotlib ile Veri Görselleştirme",
      "Git & GitHub, Versiyon Kontrolü",
      "Yazılım Proje Yönetimi",
      "Sunucuya Deploy (Canlıya Alma)",
      "Selenium ile Web Otomasyonu",
      "Threading (Çoklu İş Parçacığı)",
      "Tkinter ve Turtle ile GUI Geliştirme",
      "Terminal ve Komut Satırı Kullanımı",
      "Debugging ve ChatGPT ile Hata Ayıklama",
      "Cursor ile Yapay Zeka Destekli Kodlama",
      "İleri Seviye Python: Generator & Decorator",
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ag-guvenligine-giris",
    title: "Ağ Güvenliğine Giriş: Nereden Başlamalı?",
    excerpt:
      "Ağ güvenliği alanına yeni başlayanlar için temel kavramlar, araçlar ve öğrenme yol haritası.",
    date: "2026-05-12",
    readTime: "6 dk",
    tags: ["Siber Güvenlik", "Networking"],
  },
  {
    slug: "bytesniff-gelistirme-sureci",
    title: "ByteSniff'i Geliştirirken Öğrendiklerim",
    excerpt:
      "Scapy ile paket yakalama, PyQt5 ile arayüz tasarımı ve karşılaştığım zorluklar üzerine notlar.",
    date: "2026-03-02",
    readTime: "8 dk",
    tags: ["Python", "Proje"],
  },
  {
    slug: "esp32-ile-ilk-adimlar",
    title: "ESP32 ile IoT Projelerine İlk Adımlar",
    excerpt:
      "ESP32 geliştirme kartı ile basit bir sensör projesi nasıl kurulur, hangi kütüphaneler işine yarar?",
    date: "2025-11-20",
    readTime: "5 dk",
    tags: ["ESP32", "IoT"],
  },
];

export const navLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#projeler", label: "Projeler" },
  { href: "#basarilar", label: "Başarılar" },
  { href: "#blog", label: "Blog" },
  { href: "#iletisim", label: "İletişim" },
];
