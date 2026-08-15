Sertifikalarının PDF (veya resim) dosyalarını bu klasöre koy.

Örnek:
  ag-guvenligi-temelleri.pdf
  python-ile-yazilim-gelistirme.pdf
  etik-hacker-adaylari-egitimi.pdf

Dosya adları src/data/portfolio.ts içindeki her sertifikanın
"fileUrl" alanıyla eşleşmeli. Örneğin:

  fileUrl: "/certificates/ag-guvenligi-temelleri.pdf"

demek, bu klasöre "ag-guvenligi-temelleri.pdf" adıyla dosya koyman gerektiği anlamına gelir.

PDF yerine resim (.jpg, .png) de kullanabilirsin, fileUrl'i ona göre güncelle.
