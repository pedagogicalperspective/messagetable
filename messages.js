/**
 * ODÜSOBİAD — Editoryal Mesaj Bankası
 * IIFE data modülü  •  v2.0  •  2026
 * Kullanım: <script src="messages.js"></script>  → window.ODUSOBIAD_MESSAGES
 */
(function (global) {
  'use strict';

  var ODUSOBIAD_MESSAGES = {

    version: '2.0',

    journal: {
      name:    'Ordu Üniversitesi Sosyal Bilimler Araştırmaları Dergisi',
      abbr:    'ODÜSOBİAD',
      issn:    '1309-9302',
      editor:  'Erhan YAYLAK',
      email:   'odudergi@gmail.com',
      url:     'https://dergipark.org.tr/tr/pub/odusobiad'
    },

    roles: [
      { id: 'eic',    color: '#1B4F8A', icon: '👑', label: { en: 'Editor-in-Chief',   tr: 'Baş Editör'         } },
      { id: 'se',     color: '#1A6B44', icon: '📋', label: { en: 'Section Editor',     tr: 'Alan Editörü'       } },
      { id: 'stat',   color: '#5A2A88', icon: '📊', label: { en: 'Statistics Editor',  tr: 'İstatistik Editörü' } },
      { id: 'lang',   color: '#944010', icon: '✍️', label: { en: 'Language Editor',    tr: 'Dil Editörü'        } },
      { id: 'layout', color: '#155C72', icon: '🎨', label: { en: 'Layout Editor',      tr: 'Mizanpaj Editörü'   } },
      { id: 'sec',    color: '#4A3000', icon: '📌', label: { en: 'Secretary',           tr: 'Sekreter'           } }
    ],

    stages: [
      { id: 'submission',   label: { en: 'Submission',       tr: 'Başvuru'          } },
      { id: 'desk',         label: { en: 'Desk Review',      tr: 'Ön Değerlendirme' } },
      { id: 'integrity',    label: { en: 'Integrity Check',  tr: 'Bütünlük Kontrolü'} },
      { id: 'review',       label: { en: 'Peer Review',      tr: 'Hakemlik'         } },
      { id: 'revision',     label: { en: 'Revision',         tr: 'Revizyon'         } },
      { id: 'decision',     label: { en: 'Decision',         tr: 'Karar'            } },
      { id: 'proofreading', label: { en: 'Proofreading',     tr: 'Son Okuma'        } },
      { id: 'production',   label: { en: 'Production',       tr: 'Yayım'            } },
      { id: 'postpub',      label: { en: 'Post-Publication', tr: 'Yayım Sonrası'    } },
      { id: 'other',        label: { en: 'Other',            tr: 'Diğer'            } }
    ],

    /*
      Her mesaj: { id, role, stage, cope?, scopus?,
                   title:{en,tr}, subject:{en,tr}, body:{en,tr} }
    */
    messages: [

      /* ═══════════════════════════════════════════════
         A — SİSTEM MESAJLARI / SYSTEM MESSAGES (se)
      ═══════════════════════════════════════════════ */

      {
        id: 'A1a', role: 'se', stage: 'desk',
        title: {
          en: 'Editorial Evaluation Result — Standard',
          tr: 'Editoryal Değerlendirme Sonucu — Standart'
        },
        subject: {
          en: 'Editorial Evaluation Result — ODÜSOBİAD [No: {ID}]',
          tr: 'Editoryal Değerlendirme Sonucu — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

The preliminary editorial evaluation of "{TITLE}" (Manuscript No: {ID}) has been completed.

The Editorial Evaluation Report and Decision Letter have been uploaded to the Process Files section of your manuscript page on DergiPark. Please review these documents and make all required revisions accordingly.

Please upload your revised manuscript and Response Letter within {X} days via the system. Failure to submit within this period will result in automatic withdrawal of your application. Extension requests must be submitted in writing in advance.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com
https://dergipark.org.tr/tr/pub/odusobiad`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Makale No: {ID}) ön editoryal değerlendirmesi tamamlanmıştır.

Editoryal Değerlendirme Raporu ve Karar Mektubu, DergiPark'taki makale sayfanızın Süreç Dosyaları bölümüne eklenmiştir. Lütfen söz konusu belgeleri inceleyerek talep edilen düzeltmeleri gerçekleştiriniz.

Revize makalenizi ve Yanıt Mektubunu (Response Letter) {X} gün içinde sistem üzerinden yüklemenizi rica ederiz. Bu süre içinde yükleme yapılmaması hâlinde başvurunuz iptal edilmiş sayılacaktır; ek süre taleplerinizi önceden yazılı olarak iletiniz.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com
https://dergipark.org.tr/tr/pub/odusobiad`
        }
      },

      {
        id: 'A1b', role: 'se', stage: 'desk',
        title: {
          en: 'Editorial Evaluation Result — Short',
          tr: 'Editoryal Değerlendirme Sonucu — Kısa'
        },
        subject: {
          en: 'Editorial Evaluation Result — ODÜSOBİAD [No: {ID}]',
          tr: 'Editoryal Değerlendirme Sonucu — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

The editorial evaluation of "{TITLE}" (No: {ID}) has been completed. Please make the necessary revisions per the Process Files documents and upload your revised manuscript within {X} days.

Sincerely,
ODÜSOBİAD Editorial Office
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (No: {ID}) editoryal değerlendirmesi tamamlanmıştır. Süreç Dosyaları bölümündeki belgeler doğrultusunda düzeltmeleri yaparak revize makalenizi {X} gün içinde sisteme yükleyiniz.

Saygılarımızla,
ODÜSOBİAD Editörlüğü
odudergi@gmail.com`
        }
      },

      {
        id: 'A2a', role: 'se', stage: 'revision',
        title: {
          en: 'Post-Review Revision Request — Standard',
          tr: 'Hakem Sonrası Revizyon Talebi — Standart'
        },
        subject: {
          en: 'Revision Request Following Peer Review — ODÜSOBİAD [No: {ID}]',
          tr: 'Hakem Değerlendirmesi Sonrası Revizyon Talebi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Peer review of "{TITLE}" (No: {ID}) has been completed. Reviewer reports and the Decision Letter have been uploaded to the Process Files section on DergiPark.

Please address the reviewers' comments and upload your revised manuscript together with a Response Letter within {X} days.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (No: {ID}) hakem değerlendirmesi tamamlanmıştır. Hakem raporları ve Karar Mektubu DergiPark'taki Süreç Dosyaları bölümüne eklenmiştir.

Hakem önerilerini dikkate alarak gerekli düzenlemeleri yapmanızı, revize makale dosyası ile Yanıt Mektubunu (Response Letter) birlikte {X} gün içinde sisteme yüklemenizi rica ederiz.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'A2b', role: 'se', stage: 'revision',
        title: {
          en: 'Post-Review Revision Request — Short',
          tr: 'Hakem Sonrası Revizyon Talebi — Kısa'
        },
        subject: {
          en: 'Revision Request — ODÜSOBİAD [No: {ID}]',
          tr: 'Revizyon Talebi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author, please address the reviewers' comments and upload your revised manuscript and Response Letter separately via the system. Best regards.

ODÜSOBİAD Editorial Office
odudergi@gmail.com`,
          tr: `Sayın yazar, hakem önerilerini dikkate alarak gerekli düzeltmeleri yapıp makale dosyası ve Yanıt Mektubunu ayrı ayrı sisteme yükleyiniz. İyi çalışmalar dileriz.

ODÜSOBİAD Editörlüğü
odudergi@gmail.com`
        }
      },

      {
        id: 'A3a', role: 'lang', stage: 'proofreading',
        title: {
          en: 'Proofreading Request — Comprehensive',
          tr: 'Son Okuma (Proofreading) Talebi — Kapsamlı'
        },
        subject: {
          en: 'Proofreading Required Before Publication — ODÜSOBİAD [No: {ID}]',
          tr: 'Yayım Öncesi Son Okuma (Proofreading) Talebi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Please download the current version of your manuscript and make the following updates in accordance with the journal template:

• Author details and ORCID links
• Thesis/conference origin note if applicable
• Conflict of interest and acknowledgements
• In-text citations and references (APA 7)
• Abstract, title and metadata (EN–TR order)

Additionally, please arrange an English proofreading from an independent institution and upload the QR-coded certificate and the tracked-changes file together with your revised manuscript.

Note: The journal is not responsible for author-related errors identified after publication.

Sincerely,
ODÜSOBİAD Language Editor
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

Makalenizin güncel versiyonunu indirip güncel makale şablonuna uygun olacak şekilde aşağıdaki düzenlemeleri yapmanızı rica ederiz:

• Yazar kişisel bilgileri ve ORCID bağlantıları
• Tezden/bildiriden üretilmişse ilgili bilgi
• Çıkar çatışması ve teşekkür ifadesi
• Metin içi atıflar ve kaynakça (APA 7)
• Özet, başlık ve üst veriler (İngilizce–Türkçe sıralamasına dikkat)

Ayrıca bağımsız bir kurumdan karekodlu proofreading sertifikası ile değişikliklerin izlendiği dosyayı revize makaleyle birlikte sisteme yüklemenizi bekliyoruz.

Not: Sayı yayımlandıktan sonra fark edilen yazar kaynaklı hatalardan dergimiz sorumlu değildir.

Saygılarımızla,
ODÜSOBİAD Dil Editörü
odudergi@gmail.com`
        }
      },

      {
        id: 'A3b', role: 'lang', stage: 'proofreading',
        title: {
          en: 'Proofreading — Track Changes Required',
          tr: 'Son Okuma — Değişiklikleri İzle Versiyonu'
        },
        subject: {
          en: 'Track Changes Version Required — ODÜSOBİAD [No: {ID}]',
          tr: 'Değişiklikleri İzle Versiyonu Talebi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Please upload the version of your proofread manuscript with "Track Changes" enabled so that all corrections are visible in the document.

ODÜSOBİAD Language Editor
odudergi@gmail.com`,
          tr: `Sayın yazar,

Proofreading yapılan makale dosyanızın "değişiklikleri izle" özelliği açık olan ve yapılan düzeltmelerin görülebildiği versiyonunu sisteme yüklemeniz gerekmektedir.

ODÜSOBİAD Dil Editörü
odudergi@gmail.com`
        }
      },

      {
        id: 'A4', role: 'se', stage: 'revision',
        title: {
          en: 'Reference List File Request',
          tr: 'Kaynakça Dosyası Talebi'
        },
        subject: {
          en: 'APA 7 Reference List Required — ODÜSOBİAD [No: {ID}]',
          tr: 'APA 7 Kaynakça Dosyası Talebi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Please send your updated APA 7 reference list as a separate Word document (one blank line between entries), including your manuscript ID, to odudergi@gmail.com. Disregard this message if you have already sent it.

Sincerely,
ODÜSOBİAD Editorial Office
odudergi@gmail.com`,
          tr: `Sayın yazar,

Makalenizin güncel kaynakçasını APA 7'ye uygun olarak, aralarında birer satır boşluk bırakarak ayrı bir Word dosyası hâlinde makale ID numarasını da yazarak odudergi@gmail.com adresine iletmenizi rica ederiz. Kaynakçayı daha önce gönderdiyseniz bu mesajı dikkate almayınız.

Saygılarımızla,
ODÜSOBİAD Editörlüğü
odudergi@gmail.com`
        }
      },

      {
        id: 'A5', role: 'layout', stage: 'revision',
        title: {
          en: 'Updated Manuscript Template Request',
          tr: 'Güncel Makale Şablonu Talebi'
        },
        subject: {
          en: 'Please Resubmit Using the Updated Template — ODÜSOBİAD [No: {ID}]',
          tr: 'Güncel Şablon ile Yeniden Yükleme Talebi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

The journal's manuscript template has been updated. Please reformat your manuscript according to the new template, complete a final proofread, and resubmit via the system.

Sincerely,
ODÜSOBİAD Layout Editor
odudergi@gmail.com`,
          tr: `Sayın yazar,

Dergimizin makale şablonu güncellenmiştir. Makalenizin güncel hâlini yeni şablona göre uyarlayıp son okumanızı da yaparak sisteme yükleyiniz.

Saygılarımızla,
ODÜSOBİAD Mizanpaj Editörü
odudergi@gmail.com`
        }
      },

      {
        id: 'A6', role: 'lang', stage: 'revision',
        title: {
          en: 'English Publication Policy Notice',
          tr: 'İngilizce Yayım Politikası Bilgilendirmesi'
        },
        subject: {
          en: 'English Publication Policy — Action Required — ODÜSOBİAD [No: {ID}]',
          tr: 'İngilizce Yayım Politikası Bilgilendirmesi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Pursuant to the decision of the Institute Board, manuscripts uploaded after 05.01.2024 will be published in English, or bilingually (English and Turkish), starting from the March 2025 issue.

Please translate your manuscript into English, arrange proofreading, and upload the tracked-changes Word file and the proofreading certificate via the system.

Best regards,
ODÜSOBİAD Language Editor
odudergi@gmail.com`,
          tr: `Sayın yazar,

Enstitü yönetim kurulu kararı gereği 05.01.2024 tarihinden sonra yüklenen makaleler 2025 yılı Mart sayısından itibaren İngilizce veya hem İngilizce hem Türkçe yayımlanacaktır.

Makalenizi İngilizceye çevirip proofreading yaptırdıktan sonra "değişiklikleri izle" açık Word dosyasını ve proofreading belgesini sisteme yüklemeniz gerekmektedir.

İyi çalışmalar dileriz.
ODÜSOBİAD Dil Editörü
odudergi@gmail.com`
        }
      },

      {
        id: 'A7', role: 'lang', stage: 'proofreading',
        title: {
          en: 'Academic Editing Request',
          tr: 'Akademik Redaksiyon Talebi'
        },
        subject: {
          en: 'Academic Editing Required — ODÜSOBİAD [No: {ID}]',
          tr: 'Akademik Redaksiyon Talebi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author(s),

Manuscripts accepted for the publication process must undergo academic editing by an independent organization. The scope includes: correcting structural issues, spelling and punctuation, reformatting in-text citations and references to APA 7, and adapting tables/figures/visuals to journal standards. For English manuscripts, proofreading and a QR-coded certificate are mandatory.

ODÜSOBİAD Language Editor
odudergi@gmail.com`,
          tr: `Değerli yazar(lar),

Yayın sürecine alınacak çalışmaların bağımsız editing kuruluşlarına akademik redaksiyon yaptırılması gerekmektedir. Kapsam: anlatım bozukluklarının giderilmesi, yazım ve noktalama düzeltmeleri, metin içi atıf ve kaynakçanın APA 7'ye uygun hâle getirilmesi, tablo/grafik/görsellerin dergi kurallarına uyarlanması. Çalışma İngilizce ise proofreading ve karekodlu sertifika zorunludur.

ODÜSOBİAD Dil Editörü
odudergi@gmail.com`
        }
      },

      /* ═══════════════════════════════════════════════
         B — KARAR CEVAPLARI / DECISION (eic)
      ═══════════════════════════════════════════════ */

      {
        id: 'B1', role: 'eic', stage: 'decision',
        title: {
          en: 'Conditional Acceptance',
          tr: 'Koşullu Kabul'
        },
        subject: {
          en: 'Conditional Acceptance — ODÜSOBİAD [No: {ID}]',
          tr: 'Koşullu Kabul — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Your manuscript "{TITLE}" (No: {ID}) has been accepted subject to the revisions recommended by the reviewers. Please upload the revised file and your Response Letter to the system.

Best regards,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" başlıklı makaleniz (No: {ID}), hakem önerilerini dikkate alarak gerekli düzeltmeleri yapmanız koşuluyla kabul edilmiştir. Revize dosyayı ve Yanıt Mektubunu sisteme yüklemenizi rica ederiz.

İyi çalışmalar dileriz.
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'B2a', role: 'eic', stage: 'decision',
        title: {
          en: 'Rejection — Revision Timeout',
          tr: 'Ret — Zamanaşımı'
        },
        subject: {
          en: 'Manuscript Rejected — Deadline Missed — ODÜSOBİAD [No: {ID}]',
          tr: 'Makale Reddedildi — Süre Aşımı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Your manuscript "{TITLE}" (No: {ID}) has been rejected as the required revisions were not submitted within the specified timeframe. Thank you and best regards.

Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" başlıklı makaleniz (No: {ID}), düzeltmelerin belirlenen süre içinde sisteme yüklenmemesi nedeniyle reddedilmiştir.

Teşekkür eder, iyi çalışmalar dileriz.
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'B2b', role: 'eic', stage: 'decision',
        cope: true,
        title: {
          en: 'Rejection — High Similarity Rate',
          tr: 'Ret — Yüksek Benzerlik Oranı'
        },
        subject: {
          en: 'Manuscript Rejected — Similarity Threshold Exceeded — ODÜSOBİAD [No: {ID}]',
          tr: 'Makale Reddedildi — Yüksek Benzerlik Oranı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Your manuscript "{TITLE}" (No: {ID}) was rejected as its similarity rate exceeds our journal's threshold. We would be happy to consider your future submissions.

Best regards,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Değerli yazar,

"{BAŞLIK}" başlıklı makalenizin (No: {ID}) benzerlik oranı dergimizin belirlediği sınırın üzerinde olduğu için reddedilmiştir. Diğer çalışmalarınızı değerlendirmeyi isteriz.

İyi çalışmalar dileriz.
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'B2c', role: 'eic', stage: 'decision',
        title: {
          en: 'Rejection — Based on Reviewer Reports',
          tr: 'Ret — Hakem Raporları Doğrultusunda'
        },
        subject: {
          en: 'Manuscript Rejected Following Peer Review — ODÜSOBİAD [No: {ID}]',
          tr: 'Hakem Raporları Doğrultusunda Ret — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Following review of the peer review reports and editorial decision, your manuscript "{TITLE}" (No: {ID}) has been rejected. We thank you for your interest in ODÜSOBİAD and wish you success in your future research.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar,

Hakem raporları ve editör kararı incelendikten sonra "{BAŞLIK}" başlıklı makalenizin (No: {ID}) reddedilmesine karar verilmiştir. ODÜSOBİAD'a gösterdiğiniz ilgi için teşekkür eder, gelecekteki çalışmalarınızda başarılar dileriz.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'B2d', role: 'eic', stage: 'decision',
        title: {
          en: 'Rejection with Decision Letter',
          tr: 'Ret — Karar Mektubu ile Birlikte'
        },
        subject: {
          en: 'Editorial Decision: Rejection — Decision Letter Attached — ODÜSOBİAD [No: {ID}]',
          tr: 'Editör Kararı: Red — Karar Mektubu Eklendi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Your manuscript "{TITLE}" (No: {ID}) has been reviewed by the editorial board and found not suitable for our journal. The Decision Letter with rejection reasons has been uploaded to the Process Files section on DergiPark.

Best regards,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" başlıklı makaleniz (No: {ID}) editör kurulu tarafından incelenmiş ve dergimizde değerlendirilmesine uygun bulunmamıştır. Ret gerekçelerinin yer aldığı Karar Mektubu DergiPark'taki Süreç Dosyaları bölümüne eklenmiştir.

İyi çalışmalar dileriz.
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      /* ═══════════════════════════════════════════════
         C — BİLGİLENDİRME / INFORMATION (sec)
      ═══════════════════════════════════════════════ */

      {
        id: 'C1', role: 'sec', stage: 'other',
        title: {
          en: 'Publication Delay Explanation',
          tr: 'Yayımlanmama Süreci Açıklaması'
        },
        subject: {
          en: 'Regarding Your Publication Timeline — ODÜSOBİAD [No: {ID}]',
          tr: 'Yayım Sürecinize İlişkin Bilgilendirme — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

As you are aware, the evaluation and finalization processes for each manuscript proceed at different rates due to various factors. Manuscripts that complete the process are prepared for publication in order of submission date. We thank you for your understanding and best regards.

ODÜSOBİAD Editorial Office
odudergi@gmail.com`,
          tr: `Sayın yazar,

Bildiğiniz üzere her makalenin değerlendirme ve sonuçlandırma süreci farklı insan faktörü nedeniyle maalesef aynı anda ilerleyememektedir. Süreci tamamlanan makaleler, gönderim tarihi esas alınarak yayıma hazır hâle getirilmektedir.

Anlayışınız için teşekkür eder, iyi çalışmalar dileriz.
ODÜSOBİAD Editörlüğü
odudergi@gmail.com`
        }
      },

      {
        id: 'C2a', role: 'se', stage: 'review',
        title: {
          en: 'Reviewer Suggestion Request — Standard',
          tr: 'Hakem Önerisi Talebi — Standart'
        },
        subject: {
          en: 'Reviewer Suggestion Request — ODÜSOBİAD [No: {ID}]',
          tr: 'Hakem Önerisi Talebi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear colleague,

Could you suggest at least 2 reviewers who could provide a detailed and timely review for your manuscript? Name, institution, and email address would be sufficient.

Best regards,
ODÜSOBİAD Editorial Office
odudergi@gmail.com`,
          tr: `Değerli hocam,

Makaleniz için ayrıntılı ve hızlı hakemlik yapabilecek en az 2 hakem önerebilir misiniz? Ad soyad, kurum ve e-posta adresi yeterli olacaktır.

İyi çalışmalar dileriz.
ODÜSOBİAD Editörlüğü
odudergi@gmail.com`
        }
      },

      {
        id: 'C2b', role: 'se', stage: 'review',
        title: {
          en: 'Reviewer Suggestion Request — Special Issue',
          tr: 'Hakem Önerisi Talebi — Özel Sayı'
        },
        subject: {
          en: 'Reviewer Suggestion — Special Issue — ODÜSOBİAD [No: {ID}]',
          tr: 'Hakem Önerisi Talebi — Özel Sayı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear colleague,

We would appreciate your suggestion of at least 2 qualified reviewers for your special issue submission. Please reply with their name, institution, and email address.

Best regards,
ODÜSOBİAD Editorial Office
odudergi@gmail.com`,
          tr: `Değerli hocam,

Özel sayı için gönderdiğiniz makaleyi değerlendirmesi için nitelikli en az 2 kişi önerirseniz memnun oluruz. Ad soyad, kurum ve e-posta bilgilerini bu mesaja yanıt olarak gönderebilirsiniz.

ODÜSOBİAD Editörlüğü
odudergi@gmail.com`
        }
      },

      {
        id: 'C3', role: 'sec', stage: 'submission',
        title: {
          en: 'Special Issue — Reupload Required',
          tr: 'Özel Sayı — Makale Yeniden Yükleme'
        },
        subject: {
          en: 'Action Required: Reupload for Special Issue — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Özel Sayı İçin Yeniden Yükleme — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Please re-upload your manuscript to the system and remember to select the special issue option. (System closing: {DATE} at {TIME})

ODÜSOBİAD Editorial Office
odudergi@gmail.com`,
          tr: `Değerli yazar,

Makalenizi sisteme tekrar yüklemeniz gerekmektedir. Yüklerken lütfen özel sayı seçeneğini seçmeyi unutmayınız. (Sistem kapanış tarihi: {TARİH} saat {SAAT})

ODÜSOBİAD Editörlüğü
odudergi@gmail.com`
        }
      },

      /* ═══════════════════════════════════════════════
         D — SCOPUS KRİTERLERİ (eic / sec)
      ═══════════════════════════════════════════════ */

      {
        id: 'D1', role: 'eic', stage: 'desk',
        scopus: true,
        title: {
          en: 'SCOPUS — English Abstract/Title Quality Warning',
          tr: 'SCOPUS — İngilizce Özet/Başlık Kalite Uyarısı'
        },
        subject: {
          en: 'Action Required: English Abstract Quality (SCOPUS) — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: İngilizce Özet Kalitesi (SCOPUS) — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

SCOPUS indexing requirements mandate that the English title and abstract of your manuscript meet academic English standards. Our preliminary review has identified language quality issues in the English sections of "{TITLE}" (No: {ID}).

Please have your English title and abstract proofread by an independent institution and upload the verifiable QR-coded certificate via the system.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar,

SCOPUS indeks gereksinimleri kapsamında makalenizin İngilizce başlığının ve özetinin akademik İngilizce standartlarını karşılaması zorunludur. "{BAŞLIK}" (No: {ID}) başlıklı makalenizin İngilizce bölümlerinde dil kalitesini etkileyen ifadeler tespit edilmiştir.

İngilizce başlık ve özetinizi bağımsız bir kuruma proofreading yaptırarak doğrulanabilir karekodlu sertifikayı sisteme yüklemenizi rica ederiz.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'D2', role: 'sec', stage: 'desk',
        scopus: true,
        title: {
          en: 'SCOPUS — Missing Author Affiliation',
          tr: 'SCOPUS — Yazar Afiliasyonu Eksikliği'
        },
        subject: {
          en: 'Action Required: Author Affiliation Missing (SCOPUS) — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Afiliasyon Eksikliği (SCOPUS) — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

SCOPUS requires full name, institutional affiliation, and country for all authors in metadata. This information appears missing for {AUTHOR} in "{TITLE}" (No: {ID}). Please update both the manuscript and the DergiPark metadata form.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın yazar,

SCOPUS gereksinimleri doğrultusunda tüm yazarların tam adı, kurumu ve ülke bilgisinin makale üst verisinde yer alması zorunludur. "{BAŞLIK}" (No: {ID}) başlıklı makalenizde {YAZAR} için bu bilgiler eksik görünmektedir. Lütfen makaleyi ve DergiPark üst veri formunu güncelleyiniz.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      {
        id: 'D3', role: 'sec', stage: 'desk',
        scopus: true,
        title: {
          en: 'SCOPUS — Missing DOI / Metadata Inconsistency',
          tr: 'SCOPUS — DOI Eksikliği / Metadata Tutarsızlığı'
        },
        subject: {
          en: 'Action Required: DOI & Metadata Check (SCOPUS) — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: DOI ve Metadata Kontrolü (SCOPUS) — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

DOI information is missing from references where available, and/or DergiPark metadata fields appear inconsistent with the manuscript "{TITLE}" (No: {ID}). This is critical for international indexing. Please complete DOI information and update metadata fields.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" (No: {ID}) başlıklı makalenizde kaynakçadaki mevcut kaynakların DOI bilgileri eklenmemiş ve/veya DergiPark üst veri alanları makale dosyasıyla tutarsız görünmektedir. Uluslararası dizinleme için bu bilgilerin eksiksiz ve tutarlı olması kritik önem taşımaktadır. Lütfen DOI bilgilerini tamamlayınız ve üst veri alanlarını güncelleyiniz.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      {
        id: 'D4', role: 'sec', stage: 'desk',
        cope: true, scopus: true,
        title: {
          en: 'SCOPUS/COPE — AI Use Disclosure Required',
          tr: 'SCOPUS/COPE — YZ Kullanım Beyanı Talebi'
        },
        subject: {
          en: 'Action Required: AI Use Disclosure (SCOPUS/COPE 2024) — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: YZ Kullanım Beyanı (SCOPUS/COPE 2024) — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Per SCOPUS and COPE 2024 requirements, if any AI tools were used in any part of your manuscript "{TITLE}" (No: {ID}), this must be explicitly disclosed in the Methods or Acknowledgements section.

If no AI tools were used, please add the statement: "No AI tools were used in this study."

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın yazar,

SCOPUS ve COPE 2024 gereksinimleri doğrultusunda "{BAŞLIK}" (No: {ID}) başlıklı makalenizin herhangi bir bölümünde yapay zeka araçları kullanıldıysa bu kullanımın Yöntem veya Teşekkür bölümünde açıkça beyan edilmesi gerekmektedir.

Yapay zeka kullanılmadıysa lütfen şu beyanı ekleyiniz: "Bu çalışmada yapay zeka aracı kullanılmamıştır."

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      {
        id: 'D5', role: 'se', stage: 'revision',
        scopus: true,
        title: {
          en: 'SCOPUS — International Scope / Citation Notice',
          tr: 'SCOPUS — Uluslararası Kapsam / Atıf Uyarısı'
        },
        subject: {
          en: 'Recommendation: Strengthen International Literature (SCOPUS) — ODÜSOBİAD [No: {ID}]',
          tr: 'Öneri: Uluslararası Literatür Güçlendirme (SCOPUS) — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Connection to international literature is a key SCOPUS evaluation criterion. We recommend strengthening the literature review of "{TITLE}" (No: {ID}) with recent international sources (last 5 years) and completing DOI information for all applicable references.

Sincerely,
ODÜSOBİAD Editorial Office
odudergi@gmail.com`,
          tr: `Sayın yazar,

SCOPUS değerlendirme kriterleri arasında çalışmanın uluslararası literatürle bağlantısı önemli bir yer tutmaktadır. "{BAŞLIK}" (No: {ID}) başlıklı makalenizin literatür taramasını güncel uluslararası kaynaklarla (son 5 yıl) güçlendirmenizi ve kaynakçanızdaki DOI bilgilerini tamamlamanızı tavsiye ederiz.

Saygılarımızla,
ODÜSOBİAD Editörlüğü
odudergi@gmail.com`
        }
      },

      /* ═══════════════════════════════════════════════
         E — COPE ETİK / COPE ETHICS (eic)
      ═══════════════════════════════════════════════ */

      {
        id: 'E1', role: 'eic', stage: 'integrity',
        cope: true,
        title: {
          en: 'Plagiarism / High Similarity Investigation',
          tr: 'İntihal / Yüksek Benzerlik Soruşturması'
        },
        subject: {
          en: 'COPE Investigation: High Similarity Rate — ODÜSOBİAD [No: {ID}]',
          tr: 'COPE Soruşturması: Yüksek Benzerlik Oranı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

A similarity check of "{TITLE}" (No: {ID}) has revealed a concerning level of similarity (%{RATE}).

An investigation has been initiated per COPE guidelines. Within {X} days, please upload:
• A written explanation regarding the source of similarity
• Supporting documents affirming originality (if any)

Failure to respond will result in rejection, and your institution will be informed if necessary.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" (No: {ID}) başlıklı makalenizde benzerlik taraması sonucunda kaygı verici düzeyde benzerlik (%{ORAN}) tespit edilmiştir.

COPE yönergelerine uygun olarak soruşturma başlatılmış olup {X} gün içinde aşağıdaki bilgileri sisteme yüklemenizi bekliyoruz:
• Benzerlik kaynağına ilişkin yazılı açıklamanız
• Özgünlüğü destekleyen belgeler (varsa)

Belirtilen süre içinde yanıt gelmemesi hâlinde makale reddedilecek ve gerektiğinde kurumunuz bilgilendirilecektir.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'E2', role: 'eic', stage: 'integrity',
        cope: true,
        title: {
          en: 'Duplicate Submission Notification',
          tr: 'Çift Gönderim Tespiti Bildirimi'
        },
        subject: {
          en: 'COPE Investigation: Duplicate Submission — ODÜSOBİAD [No: {ID}]',
          tr: 'COPE Soruşturması: Çift Gönderim — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

It has been detected that "{TITLE}" (No: {ID}) is also under review at another journal or has been published elsewhere.

Simultaneous multiple submission is prohibited per our policy and constitutes a COPE ethics violation. Failure to provide a written explanation within {X} days will result in rejection and notification to relevant parties.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" (No: {ID}) başlıklı makalenizin başka bir dergide de değerlendirmede olduğu veya yayımlandığı tespit edilmiştir.

Dergimizin gönderim politikası uyarınca eş zamanlı çoklu gönderim kabul edilmemekte olup COPE yönergelerine göre bu durum yayın etiği ihlali teşkil etmektedir. {X} gün içinde yazılı açıklama yapmamanız hâlinde makaleniz reddedilecek ve gerekli mercilere bildirim yapılacaktır.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'E3', role: 'eic', stage: 'integrity',
        cope: true,
        title: {
          en: 'Authorship Dispute Notice',
          tr: 'Yazarlık İtirazı Bildirimi'
        },
        subject: {
          en: 'COPE Investigation: Authorship Dispute — ODÜSOBİAD [No: {ID}]',
          tr: 'COPE Soruşturması: Yazarlık İtirazı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author(s),

An authorship dispute has been received for "{TITLE}" (No: {ID}). Our journal is investigating per COPE guidelines; however, resolution is the responsibility of the parties involved.

Within {X} days, a written agreement signed by all authors must be uploaded, or a written explanation provided.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı makale için yazarlık konusunda bir itiraz alınmıştır. COPE yönergelerine uygun olarak dergimiz bu konuyu soruşturmaktadır; ancak yazarlar arasındaki anlaşmazlıkların çözümü taraflara aittir.

{X} gün içinde tüm yazarların imzaladığı yazılı bir mutabakat belgesi sisteme yüklenmeli ya da duruma ilişkin açıklama yapılmalıdır.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'E4', role: 'eic', stage: 'integrity',
        cope: true,
        title: {
          en: 'Data / Image Manipulation Suspicion',
          tr: 'Veri / Görsel Manipülasyonu Şüphesi'
        },
        subject: {
          en: 'COPE Investigation: Data/Image Integrity Concern — ODÜSOBİAD [No: {ID}]',
          tr: 'COPE Soruşturması: Veri/Görsel Bütünlüğü Endişesi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Concerns have been identified in "{TITLE}" (No: {ID}) regarding {ISSUE} (data inconsistency / image manipulation / table errors). An investigation per COPE guidelines has been initiated. Please upload raw data and/or original image files within {X} days.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" (No: {ID}) başlıklı makalenizde {SORUN} (veri tutarsızlığı / görsel manipülasyonu / tablo hatası) konusunda kaygılar tespit edilmiştir. COPE yönergeleri çerçevesinde soruşturma başlatılmış olup {X} gün içinde ham verilerinizi ve/veya orijinal görsel dosyalarınızı sisteme yüklemenizi talep ediyoruz.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'E5', role: 'eic', stage: 'postpub',
        cope: true,
        title: {
          en: 'Article Retraction Notice',
          tr: 'Makale Geri Çekme (Retraksiyon) Bildirimi'
        },
        subject: {
          en: 'COPE: Retraction Procedure Initiated — ODÜSOBİAD [No: {ID}]',
          tr: 'COPE: Retraksiyon Prosedürü Başlatıldı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author(s),

Serious ethical concerns have been raised for the published manuscript "{TITLE}" (No: {ID}). The Editorial Board has initiated retraction procedures per COPE guidelines.

If you do not submit a written objection within {X} days, the retraction will be completed and a retraction note will be added to the journal archive.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı yayımlanmış makalenize ilişkin ciddi etik kaygılar gündeme gelmiştir. Editörler Kurulu, COPE yönergeleri doğrultusunda makale geri çekme (retraction) prosedürünü başlatmıştır.

{X} gün içinde yazılı itirazınızı iletmemeniz hâlinde geri çekme işlemi tamamlanacak ve dergi arşivine retraksiyon notu eklenecektir.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'E6', role: 'eic', stage: 'postpub',
        cope: true,
        title: {
          en: 'Expression of Concern',
          tr: 'Endişe İfadesi (Expression of Concern)'
        },
        subject: {
          en: 'COPE: Expression of Concern — ODÜSOBİAD [No: {ID}]',
          tr: 'COPE: Endişe İfadesi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author(s),

An "Expression of Concern" note will be temporarily added to the published manuscript "{TITLE}" (No: {ID}) to inform readers during an ongoing investigation. This note will be removed or updated upon completion of the investigation.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı yayımlanmış makaleniz hakkında devam eden soruşturma kapsamında okuyucuları bilgilendirmek amacıyla makalenin yanına geçici bir "Endişe İfadesi" (Expression of Concern) notu eklenecektir. Bu not soruşturma tamamlandıktan sonra kaldırılacak veya güncellenecektir.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      /* ═══════════════════════════════════════════════
         F — SÜREÇ & YAYIM / PRODUCTION (se / layout / eic)
      ═══════════════════════════════════════════════ */

      {
        id: 'F1', role: 'se', stage: 'review',
        title: {
          en: 'Reviewer Invitation',
          tr: 'Hakem Daveti'
        },
        subject: {
          en: 'Reviewer Invitation — ODÜSOBİAD [No: {ID}]',
          tr: 'Hakem Daveti — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear {REVIEWER},

We would like to invite you to review the manuscript titled "{TITLE}" (No: {ID}). The review period is {X} days. Upon acceptance, the manuscript file will be made available via the DergiPark system.

Please confirm your availability within {X} days.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın {HAKEM},

"{BAŞLIK}" (No: {ID}) başlıklı makale için hakem olarak görüş bildirmenizi rica etmek istiyoruz. Değerlendirme süremiz {X} gündür. Daveti kabul etmeniz hâlinde makale dosyası DergiPark sistemi üzerinden iletilecektir.

Lütfen {X} gün içinde uygunluğunuzu bildirin.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'F2', role: 'se', stage: 'review',
        title: {
          en: 'Reviewer Reminder',
          tr: 'Hakem Değerlendirme Hatırlatması'
        },
        subject: {
          en: 'Reminder: Review Deadline Approaching — ODÜSOBİAD [No: {ID}]',
          tr: 'Hatırlatma: Hakem Değerlendirme Son Tarihi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear {REVIEWER},

The deadline for your review of "{TITLE}" (No: {ID}) is {DATE}. If you are unable to complete the review on time, please inform us in advance as an alternative reviewer may need to be assigned.

Sincerely,
ODÜSOBİAD Editorial Office
odudergi@gmail.com`,
          tr: `Sayın {HAKEM},

"{BAŞLIK}" (No: {ID}) başlıklı makale için hakem değerlendirmenizin son tarihi {TARİH} olarak belirlenmiştir. Değerlendirmenizi tamamlayamıyorsanız lütfen önceden bilgi veriniz; alternatif hakem atanması gerekebilir.

Saygılarımızla,
ODÜSOBİAD Editörlüğü
odudergi@gmail.com`
        }
      },

      {
        id: 'F3', role: 'layout', stage: 'production',
        title: {
          en: 'Issue Assignment Notice',
          tr: 'Sayıya Atama Bildirimi'
        },
        subject: {
          en: 'Your Manuscript Has Been Assigned to an Issue — ODÜSOBİAD [No: {ID}]',
          tr: 'Makaleniz Sayıya Atandı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Your manuscript "{TITLE}" (No: {ID}) has been assigned to the Vol. {VOL}, No. {NO}, {YEAR} issue. You will be notified for galley proof approval once typesetting is complete.

Sincerely,
ODÜSOBİAD Layout Editor
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" başlıklı makaleniz (No: {ID}) {CİLT}. Cilt, {SAYI}. Sayı, {YIL} sayısına atanmıştır. Dizgi süreci tamamlandığında galley proof (baskı kanıtı) onayı için tekrar bilgilendirileceksiniz.

Saygılarımızla,
ODÜSOBİAD Mizanpaj Editörü
odudergi@gmail.com`
        }
      },

      {
        id: 'F4', role: 'layout', stage: 'proofreading',
        title: {
          en: 'Galley Proof Approval Request',
          tr: 'Dizgi Kanıtı (Galley Proof) Onay Talebi'
        },
        subject: {
          en: 'Action Required: Galley Proof Approval — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Galley Proof Onayı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

The galley proof of "{TITLE}" (No: {ID}) has been uploaded to the Process Files section on DergiPark. Please review the file and confirm approval or submit correction notes within {X} days.

Note: Only typesetting errors can be corrected at this stage; content changes are not permitted.

Sincerely,
ODÜSOBİAD Layout Editor
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" (No: {ID}) başlıklı makalenizin dizgi kanıtı (galley proof) DergiPark'taki Süreç Dosyaları bölümüne eklenmiştir. Lütfen dosyayı inceleyerek {X} gün içinde onay vermenizi veya düzeltme notlarınızı iletmenizi rica ederiz.

Not: Bu aşamada yalnızca dizgi kaynaklı hatalar düzeltilebilir; içerik değişikliği yapılamamaktadır.

Saygılarımızla,
ODÜSOBİAD Mizanpaj Editörü
odudergi@gmail.com`
        }
      },

      {
        id: 'F5', role: 'eic', stage: 'production',
        title: {
          en: 'Publication Congratulations',
          tr: 'Makale Yayım Tebriği'
        },
        subject: {
          en: 'Your Article Has Been Published — ODÜSOBİAD [No: {ID}]',
          tr: 'Makaleniz Yayımlandı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

We are pleased to inform you that "{TITLE}" (No: {ID}) has been published in Vol. {VOL}, No. {NO}, {YEAR}.

Access link: {DOI}

Thank you for your contribution and best wishes for your future work.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com
https://dergipark.org.tr/tr/pub/odusobiad`,
          tr: `Sayın yazar,

"{BAŞLIK}" (No: {ID}) başlıklı makalenizin {CİLT}. Cilt, {SAYI}. Sayı, {YIL} sayımızda yayımlandığını bildirmekten mutluluk duyarız.

Erişim bağlantısı: {DOI}

Katkınız için teşekkür eder, gelecekteki çalışmalarınızda başarılar dileriz.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com
https://dergipark.org.tr/tr/pub/odusobiad`
        }
      },

      {
        id: 'F6', role: 'eic', stage: 'other',
        title: {
          en: 'Withdrawal Request Response',
          tr: 'Geri Çekme Talebi Yanıtı'
        },
        subject: {
          en: 'Withdrawal Request Response — ODÜSOBİAD [No: {ID}]',
          tr: 'Geri Çekme Talebi Yanıtı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear author,

Your withdrawal request for "{TITLE}" (No: {ID}) has been [accepted / rejected].

[If accepted: The manuscript has been withdrawn from the system.]
[If rejected: As the manuscript is currently under review, your request cannot be processed at this stage.]

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın yazar,

"{BAŞLIK}" (No: {ID}) başlıklı makalenizin geri çekme talebi [kabul edilmiştir / reddedilmiştir].

[Kabul: Makale sistem üzerinden işlemden kaldırılmıştır.]
[Red: Makale değerlendirme aşamasında olduğundan geri çekme talebiniz bu aşamada işleme alınamamaktadır.]

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      }

      /* ═══════════════════════════════════════════════
         SEC — HAZIRLIK GEREKSİNİMLERİ
         Submission Preparation Requirements
      ═══════════════════════════════════════════════ */

      {
        id: 'SEC-P01', role: 'sec', stage: 'submission',
        title: {
          en: 'Manuscript Template Formatting Required',
          tr: 'Makale Şablonuna Göre Düzenleme Talebi'
        },
        subject: {
          en: 'Action Required: Please Reformat Using Journal Template — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Lütfen Dergi Şablonunu Kullanınız — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Your manuscript "{TITLE}" (No: {ID}) has been received; however, it does not conform to the ODÜSOBİAD manuscript template.

Please download the current template from the journal's DergiPark page and reformat your manuscript in full accordance with it, paying particular attention to:

• Font type and size (title, abstract, body, headings, references)
• Page margins and line spacing
• Heading hierarchy and numbering
• Table and figure formatting standards
• APA 7 in-text citation format
• Reference list formatting

Please upload the reformatted file via the system within {X} days.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com
https://dergipark.org.tr/tr/pub/odusobiad`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı makaleniz alınmış; ancak ODÜSOBİAD makale şablonuna uygun olmadığı görülmüştür.

Lütfen dergimizin DergiPark sayfasından güncel şablonu indirerek makalenizi aşağıdaki hususlara özellikle dikkat ederek şablon doğrultusunda düzenleyiniz:

• Yazı tipi ve punto (başlık, özet, metin, başlıklar, kaynakça)
• Sayfa kenar boşlukları ve satır aralığı
• Başlık hiyerarşisi ve numaralandırma
• Tablo ve şekil biçimlendirme standartları
• APA 7 metin içi atıf biçimi
• Kaynakça düzeni

Düzenlenmiş dosyayı {X} gün içinde sistem üzerinden yükleyiniz.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com
https://dergipark.org.tr/tr/pub/odusobiad`
        }
      },

      {
        id: 'SEC-P02', role: 'sec', stage: 'desk',
        title: {
          en: 'Manuscript Anonymisation Required',
          tr: 'Makale Anonimleştirme (Kör Hakemlik) Talebi'
        },
        subject: {
          en: 'Action Required: Anonymise Your Manuscript — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Makaleyi Anonimleştiriniz — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

ODÜSOBİAD operates a double-blind peer review process. Your manuscript "{TITLE}" (No: {ID}) contains author-identifying information that must be removed from the main manuscript file before it can be sent for review.

Please ensure the following are removed or anonymised in the manuscript body:

• Author name(s), institutional affiliations, and contact details
• Self-citations that clearly identify the author(s) (e.g. "In our previous study [X]…" → replace with "In a previous study [X]…")
• Acknowledgements, funding statements, or grant numbers that reveal identity
• File properties/metadata (check via File → Properties in Word)

Author details should appear ONLY in the Title Page file (submitted separately).

Please upload the anonymised manuscript within {X} days.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

ODÜSOBİAD çift kör hakemlik sürecini uygulamaktadır. "{BAŞLIK}" (No: {ID}) başlıklı makalenizin ana dosyasında yazarı tanımlamaya olanak tanıyan bilgiler bulunmaktadır; bu bilgilerin hakeme gönderilmeden önce kaldırılması gerekmektedir.

Lütfen makale metninde aşağıdakilerin kaldırıldığından veya anonimleştirildiğinden emin olunuz:

• Yazar adı/adları, kurum bilgisi ve iletişim bilgileri
• Yazarı açıkça tanımlayan öz-atıflar (ör. "Önceki çalışmamızda [X]…" → "Önceki bir çalışmada [X]…" olarak değiştiriniz)
• Kimliği açığa çıkaran teşekkür ifadeleri, finansman beyanları veya proje numaraları
• Word dosyasının üst veri/özellikler bölümündeki yazar bilgileri (Dosya → Özellikler)

Yazar bilgileri YALNIZCA ayrı dosya olarak yüklenen Başlık Sayfasında yer almalıdır.

Anonimleştirilmiş makaleyi {X} gün içinde sisteme yükleyiniz.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      {
        id: 'SEC-P03', role: 'sec', stage: 'submission',
        title: {
          en: 'Title Page Missing or Incomplete',
          tr: 'Başlık Sayfası Eksik veya Yetersiz'
        },
        subject: {
          en: 'Action Required: Title Page Required — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Başlık Sayfası Gerekmektedir — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

A separate Title Page file has not been uploaded for your manuscript "{TITLE}" (No: {ID}), or the uploaded file is incomplete.

The Title Page must be submitted as a separate Word file and include the following:

□ Full manuscript title (Turkish and English)
□ All author names (in order of contribution)
□ Institutional affiliations (department, faculty/institute, university, country)
□ ORCID iD for each author (register free at orcid.org)
□ Corresponding author details (name, e-mail, postal address)
□ Short running title (max. 50 characters)
□ Word count (excluding abstract and references)
□ Statement if derived from a thesis or conference paper
□ Acknowledgements (if any)
□ Funding statement (or "No funding received")
□ Conflict of interest statement

Please upload the completed Title Page as a separate file within {X} days.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı makaleniz için ayrı bir Başlık Sayfası yüklenmemiş veya yüklenen dosya eksik görünmektedir.

Başlık Sayfasının ayrı bir Word dosyası olarak yüklenmesi ve aşağıdakileri içermesi gerekmektedir:

□ Makalenin tam başlığı (Türkçe ve İngilizce)
□ Tüm yazar adları (katkı sırasına göre)
□ Kurum bilgileri (bölüm, fakülte/enstitü, üniversite, ülke)
□ Her yazar için ORCID iD (orcid.org adresinden ücretsiz kayıt)
□ Sorumlu yazar iletişim bilgileri (ad, e-posta, posta adresi)
□ Kısa başlık (en fazla 50 karakter)
□ Kelime sayısı (özet ve kaynakça hariç)
□ Tezden veya bildiriden üretilmişse ilgili beyan
□ Teşekkür ifadesi (varsa)
□ Finansman beyanı (veya "Herhangi bir finansman alınmamıştır")
□ Çıkar çatışması beyanı

Eksiksiz doldurulmuş Başlık Sayfasını {X} gün içinde ayrı bir dosya olarak yükleyiniz.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      {
        id: 'SEC-P04', role: 'sec', stage: 'submission',
        cope: true,
        title: {
          en: 'Conflict of Interest Form Required',
          tr: 'Çıkar Çatışması Beyan Formu Talebi'
        },
        subject: {
          en: 'Action Required: Conflict of Interest Declaration — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Çıkar Çatışması Beyanı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

In accordance with COPE guidelines and ODÜSOBİAD editorial policy, all authors are required to submit a Conflict of Interest Declaration for manuscript "{TITLE}" (No: {ID}).

Please complete and upload the Conflict of Interest form, addressing the following:

□ Financial interests: employment, consultancies, honoraria, stock ownership, patents, paid expert testimony
□ Non-financial interests: personal relationships, academic competition, intellectual beliefs that may have influenced the study
□ Funding: all funding sources (grants, institutional, corporate, private) and their role in the study

If there is no conflict of interest, please explicitly state:
"The author(s) declare no conflict of interest."

The form must be signed by all authors and uploaded as a separate file within {X} days.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

COPE yönergeleri ve ODÜSOBİAD editöryal politikası gereğince, "{BAŞLIK}" (No: {ID}) başlıklı makale için tüm yazarların Çıkar Çatışması Beyanı sunması zorunludur.

Lütfen aşağıdaki konuları ele alan Çıkar Çatışması formunu doldurup yükleyiniz:

□ Mali çıkarlar: istihdam, danışmanlık, honoraryum, hisse senedi sahipliği, patentler, ücretli uzman ifadesi
□ Mali olmayan çıkarlar: kişisel ilişkiler, akademik rekabet, çalışmayı etkilemiş olabilecek entelektüel inançlar
□ Finansman: tüm finansman kaynakları (hibe, kurumsal, özel) ve bunların çalışmadaki rolü

Çıkar çatışması yoksa lütfen açıkça belirtiniz:
"Yazarlar herhangi bir çıkar çatışması bulunmadığını beyan eder."

Form tüm yazarlar tarafından imzalanarak {X} gün içinde ayrı bir dosya olarak yüklenmelidir.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      {
        id: 'SEC-P05', role: 'sec', stage: 'submission',
        cope: true,
        title: {
          en: 'Author Disclaimer / Submission Declaration Required',
          tr: 'Feragatname / Gönderi Beyanı Talebi'
        },
        subject: {
          en: 'Action Required: Author Submission Declaration — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Yazar Gönderi Beyanı — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Please complete and upload the Author Submission Declaration (Disclaimer) for manuscript "{TITLE}" (No: {ID}).

By signing this declaration, all authors confirm that:

1. The manuscript is the authors' own original work.
2. The manuscript has not been previously published and is not under consideration elsewhere.
3. All authors have approved the submitted version.
4. Author contributions are accurately stated.
5. All sources of data and materials are properly acknowledged.
6. The research was conducted in accordance with ethical principles.
7. Publication rights are transferred to ODÜSOBİAD upon acceptance.

The declaration must be signed by the corresponding author and uploaded within {X} days.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı makale için Yazar Feragatnamesi/Gönderi Beyanını doldurarak yüklemenizi talep ederiz.

Bu beyanı imzalayan tüm yazarlar şunları onaylamış sayılır:

1. Makale yazarlara özgün olup kendi çalışmalarıdır.
2. Makale daha önce yayımlanmamış ve başka bir dergide değerlendirmede değildir.
3. Tüm yazarlar gönderilen versiyonu onaylamıştır.
4. Yazar katkıları doğru biçimde beyan edilmiştir.
5. Tüm veri ve materyal kaynakları eksiksiz olarak belirtilmiştir.
6. Araştırma etik ilkeler çerçevesinde yürütülmüştür.
7. Kabul hâlinde yayın hakları ODÜSOBİAD'a devredilmektedir.

Beyan, sorumlu yazar tarafından imzalanarak {X} gün içinde yüklenmelidir.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      {
        id: 'SEC-P06', role: 'sec', stage: 'desk',
        cope: true,
        title: {
          en: 'Ethics Committee Approval Required',
          tr: 'Etik Kurul İzin/Onay Belgesi Talebi'
        },
        subject: {
          en: 'Action Required: Ethics Committee Approval Document — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Etik Kurul İzin/Onay Belgesi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Based on our initial review of "{TITLE}" (No: {ID}), the study appears to involve human participants, personal data, animals, or sensitive material, and therefore requires Ethics Committee approval in accordance with ODÜSOBİAD editorial policy and COPE guidelines.

Please upload the following within {X} days:

□ Ethics Committee approval document (institution name, committee name, decision number, date)
□ Confirmation that the ethics approval number is stated in the manuscript's Method section

If ethics approval was not required, please submit a written statement explaining why (e.g. the study uses secondary/public data, historical records, fully anonymised data), citing the relevant regulation or institutional policy.

Note: Manuscripts without ethics documentation will not proceed to peer review.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı makalenizin ön incelemesinde, çalışmanın insan katılımcıları, kişisel veriler, hayvanlar veya hassas materyal içerdiği anlaşılmaktadır. ODÜSOBİAD editöryal politikası ve COPE yönergeleri gereğince Etik Kurul onayı zorunludur.

Lütfen {X} gün içinde aşağıdakileri yükleyiniz:

□ Etik Kurul izin/onay belgesi (kurum adı, kurul adı, karar numarası, tarih)
□ Etik kurul onay numarasının makale Yöntem bölümünde belirtildiğinin onayı

Etik kurul onayına gerek duyulmadıysa lütfen gerekçeyi açıklayan yazılı bir beyan (ör. çalışma ikincil/kamusal veri, tarihi kayıt veya tam anonimleştirilmiş veri kullanmaktadır) ilgili yönetmelik veya kurumsal politikaya atıfta bulunarak sununuz.

Not: Etik belgesi bulunmayan makaleler hakemlik aşamasına alınmayacaktır.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      {
        id: 'SEC-P07', role: 'sec', stage: 'submission',
        title: {
          en: 'Missing / Incomplete Supplementary Documents',
          tr: 'Eksik / Yetersiz Ek Belgeler'
        },
        subject: {
          en: 'Action Required: Missing Submission Documents — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Eksik Gönderi Belgeleri — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

The following required documents are missing or incomplete for manuscript "{TITLE}" (No: {ID}):

□ Anonymised manuscript file
□ Title Page (separate file)
□ Conflict of Interest Declaration
□ Author Submission Declaration (Disclaimer)
□ Ethics Committee Approval Document
□ Proofreading Certificate (for English manuscripts)
□ Other: ___________________________

Please upload all missing documents as separate files via the DergiPark system within {X} days. Submissions that remain incomplete after this period will be withdrawn.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı makaleniz için aşağıdaki zorunlu belgeler eksik veya yetersiz bulunmaktadır:

□ Anonimleştirilmiş makale dosyası
□ Başlık Sayfası (ayrı dosya)
□ Çıkar Çatışması Beyanı
□ Yazar Feragatnamesi / Gönderi Beyanı
□ Etik Kurul İzin/Onay Belgesi
□ Proofreading Sertifikası (İngilizce makaleler için)
□ Diğer: ___________________________

Eksik belgelerin tamamını ayrı dosyalar hâlinde DergiPark sistemi üzerinden {X} gün içinde yükleyiniz. Bu süre sonunda eksikliği tamamlanmayan başvurular geri çekilmiş sayılacaktır.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      {
        id: 'SEC-P08', role: 'sec', stage: 'submission',
        cope: true, scopus: true,
        title: {
          en: 'ORCID iD & Open Science Compliance Check',
          tr: 'ORCID iD & Açık Bilim Uyumluluk Kontrolü'
        },
        subject: {
          en: 'Action Required: ORCID & Open Science Compliance — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: ORCID ve Açık Bilim Uyumluluğu — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

As part of our compliance with SCOPUS and COPE open science standards, we require the following information for manuscript "{TITLE}" (No: {ID}):

1. ORCID iD — All authors must provide a verified ORCID iD.
   □ All authors have ORCID iDs on the Title Page.
   □ Missing ORCID for: _______________ (register free at orcid.org)

2. Funding Statement (required even if no funding):
   □ "This research received no specific grant from any funding agency."
   □ Funded by: _______________ (Grant No.: _______________)

3. Data Availability Statement:
   □ Data available on reasonable request
   □ Data in a public repository: _______________
   □ No new data generated

4. AI Use Disclosure:
   □ No AI tools were used.
   □ AI tool used: _______________ for _______________

Please update the manuscript and Title Page accordingly and resubmit within {X} days.

Sincerely,
ODÜSOBİAD Editorial Secretary
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

SCOPUS ve COPE açık bilim standartlarıyla uyum kapsamında, "{BAŞLIK}" (No: {ID}) başlıklı makale için aşağıdaki bilgilere ihtiyaç duyulmaktadır:

1. ORCID iD — Tüm yazarların doğrulanmış ORCID iD'si zorunludur.
   □ Tüm yazarların ORCID iD'leri Başlık Sayfasında mevcuttur.
   □ ORCID eksik: _______________ (orcid.org adresinden ücretsiz kayıt)

2. Finansman Beyanı (fon alınmamış olsa bile zorunludur):
   □ "Bu araştırma herhangi bir kurum/kuruluştan özel hibe almamıştır."
   □ Fon kaynağı: _______________ (Hibe No.: _______________)

3. Veri Erişilebilirliği Beyanı:
   □ Veriler makul talep üzerine sağlanabilir
   □ Veriler açık veri deposunda: _______________
   □ Yeni veri üretilmemiştir

4. YZ Kullanım Beyanı:
   □ Yapay zeka aracı kullanılmamıştır.
   □ Kullanılan YZ aracı: _______________ amaçlı _______________

Makale ve Başlık Sayfasını buna göre güncelleyerek {X} gün içinde yeniden yükleyiniz.

Saygılarımızla,
ODÜSOBİAD Sekreter
odudergi@gmail.com`
        }
      },

      /* ═══════════════════════════════════════════════
         EIC — KARAR & BELGE MESAJLARl
         Editorial Reports, Letters & Forms
      ═══════════════════════════════════════════════ */

      {
        id: 'EIC-D01', role: 'eic', stage: 'desk',
        title: {
          en: 'Editorial Evaluation Report — Uploaded',
          tr: 'Editoryal Değerlendirme Raporu — Yüklendi Bildirimi'
        },
        subject: {
          en: 'Editorial Evaluation Report Available — ODÜSOBİAD [No: {ID}]',
          tr: 'Editoryal Değerlendirme Raporu Yüklendi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

The Editorial Evaluation Report for your manuscript "{TITLE}" (No: {ID}) has been completed and uploaded to the Process Files section of your manuscript page on DergiPark.

The report details the editorial assessment of your manuscript against the following criteria:
• Journal scope and thematic fit
• Abstract (Turkish & English) completeness and quality
• Structural compliance with journal template
• APA 7 reference formatting
• Academic language quality
• Originality and contribution assessment
• Ethics statement and required declarations

Please review the report carefully together with the Decision Letter and prepare your revision accordingly.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı makaleniz için hazırlanan Editoryal Değerlendirme Raporu tamamlanmış ve DergiPark'taki makale sayfanızın Süreç Dosyaları bölümüne yüklenmiştir.

Rapor, makalenizin aşağıdaki kriterlere göre editoryal değerlendirmesini kapsamaktadır:
• Dergi kapsamı ve tematik uyum
• Özet (Türkçe & İngilizce) eksiksizliği ve kalitesi
• Dergi şablonuna yapısal uyum
• APA 7 kaynakça formatı
• Akademik dil kalitesi
• Özgünlük ve katkı değerlendirmesi
• Etik beyan ve zorunlu belgeler

Lütfen raporu Karar Mektubuyla birlikte dikkatlice inceleyerek revizyon çalışmalarınızı hazırlayınız.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'EIC-D02', role: 'eic', stage: 'desk',
        title: {
          en: 'Editorial Decision Letter — Uploaded',
          tr: 'Editoryal Değerlendirme Karar Mektubu — Yüklendi'
        },
        subject: {
          en: 'Decision Letter Available — ODÜSOBİAD [No: {ID}]',
          tr: 'Karar Mektubu Yüklendi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

The Editorial Decision Letter for your manuscript "{TITLE}" (No: {ID}) has been uploaded to the Process Files section on DergiPark.

The Decision Letter outlines:
• The editorial decision (Revise & Resubmit / Reject)
• Mandatory revision items that must be addressed before peer review
• Recommended revision items (advisory)
• Deadline for resubmission: {DATE}

You are required to address all mandatory items in full. Please also prepare a Response Letter (point-by-point) explaining how each revision request has been addressed, with reference to page and line numbers in the revised manuscript.

Please upload the following together:
1. Revised manuscript (anonymised)
2. Response Letter to the Editor

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı makalenizin Editoryal Değerlendirme Karar Mektubu DergiPark'taki Süreç Dosyaları bölümüne yüklenmiştir.

Karar Mektubu şunları içermektedir:
• Editöryal karar (Revizyon & Yeniden Gönderi / Red)
• Hakemliğe alınmadan önce giderilmesi zorunlu revizyon maddeleri
• Tavsiye niteliğindeki revizyon maddeleri
• Yeniden gönderim son tarihi: {TARİH}

Zorunlu revizyon maddelerinin tamamının karşılanması gerekmektedir. Lütfen her bir revizyon talebine nasıl yanıt verildiğini belirten, revize makaledeki sayfa ve satır numaralarına atıfta bulunan madde madde bir Editöre Yanıt Mektubu da hazırlayınız.

Lütfen aşağıdakileri birlikte yükleyiniz:
1. Revize makale (anonimleştirilmiş)
2. Editöre Yanıt Mektubu

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'EIC-D03', role: 'eic', stage: 'revision',
        title: {
          en: 'Response Letter to the Editor — Template & Guidelines',
          tr: 'Editöre Yanıt Mektubu — Şablon ve Yönergeler'
        },
        subject: {
          en: 'Response Letter Guidelines — ODÜSOBİAD [No: {ID}]',
          tr: 'Editöre Yanıt Mektubu Yönergesi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

When submitting your revision for "{TITLE}" (No: {ID}), please include a Response Letter to the Editor structured as follows:

─────────────────────────────────────────
RESPONSE LETTER TO THE EDITOR
Manuscript No: {ID}
Title: {TITLE}
─────────────────────────────────────────

Dear Editor-in-Chief,

We sincerely thank the editorial team and reviewers for their time and constructive comments. We have carefully addressed all editorial and reviewer requests. Below is our point-by-point response.

EDITORIAL REQUESTS

Item 1: [Quote the editor's request verbatim]
Response: [Explain what was done]
Location in revised manuscript: Page X, Line Y

Item 2: [Continue for each item…]

─────────────────────────────────────────
Please also upload the revised manuscript with Track Changes enabled so that all revisions are visible.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) için revize gönderiminizde aşağıda belirtilen yapıda bir Editöre Yanıt Mektubu eklemenizi talep ederiz:

─────────────────────────────────────────
EDİTÖRE YANIT MEKTUBU
Makale No: {ID}
Başlık: {BAŞLIK}
─────────────────────────────────────────

Sayın Baş Editör,

Editöryal ekibe ve hakemlere ayırdıkları zaman ve yapıcı yorumları için içtenlikle teşekkür ederiz. Tüm editöryal ve hakem taleplerini özenle ele aldık. Madde madde yanıtlarımız aşağıda sunulmuştur.

EDİTÖR TALEPLERİ

Madde 1: [Editör talebini aynen aktarınız]
Yanıt: [Yapılanı açıklayınız]
Revize makaledeki konum: Sayfa X, Satır Y

Madde 2: [Her madde için devam ediniz…]

─────────────────────────────────────────
Lütfen revize makaleyi de "değişiklikleri izle" özelliği açık olarak yükleyiniz; böylece tüm düzeltmeler görünür olacaktır.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'EIC-D04', role: 'eic', stage: 'revision',
        title: {
          en: 'Response to Reviewers Form — Template & Guidelines',
          tr: 'Hakemlere Yanıt Formu — Şablon ve Yönergeler'
        },
        subject: {
          en: 'Reviewer Response Form Guidelines — ODÜSOBİAD [No: {ID}]',
          tr: 'Hakemlere Yanıt Formu Yönergesi — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Together with your revised manuscript "{TITLE}" (No: {ID}), please submit a Response to Reviewers document structured as follows:

─────────────────────────────────────────
RESPONSE TO REVIEWERS
Manuscript No: {ID}
─────────────────────────────────────────

REVIEWER 1

Comment 1.1: [Copy reviewer comment verbatim]
Response: [Your detailed response]
Revision made: Yes / No / Partially
Location: Page X, Line Y — [Brief quote of revised text]

Comment 1.2: [Continue…]

─────────────────────────────────────────
REVIEWER 2

Comment 2.1: [Copy reviewer comment verbatim]
Response: [Your detailed response]
Revision made: Yes / No / Partially
Location: Page X, Line Y

─────────────────────────────────────────

Important notes:
• Every reviewer comment must be addressed individually — no comment may be left unanswered.
• If you disagree with a comment, explain your reasoning politely and with supporting evidence.
• Reference the exact page and line numbers in the revised manuscript for every change.
• Upload the revised manuscript with Track Changes enabled alongside this form.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) için revize makalenizle birlikte aşağıdaki yapıda bir Hakemlere Yanıt Formu sunmanızı talep ederiz:

─────────────────────────────────────────
HAKEMLERE YANIT FORMU
Makale No: {ID}
─────────────────────────────────────────

HAKEM 1

Yorum 1.1: [Hakem yorumunu aynen aktarınız]
Yanıt: [Ayrıntılı yanıtınız]
Düzeltme yapıldı mı: Evet / Hayır / Kısmen
Konum: Sayfa X, Satır Y — [Revize metnin kısa alıntısı]

Yorum 1.2: [Devam ediniz…]

─────────────────────────────────────────
HAKEM 2

Yorum 2.1: [Hakem yorumunu aynen aktarınız]
Yanıt: [Ayrıntılı yanıtınız]
Düzeltme yapıldı mı: Evet / Hayır / Kısmen
Konum: Sayfa X, Satır Y

─────────────────────────────────────────

Önemli notlar:
• Her hakem yorumuna ayrı ayrı yanıt verilmelidir; hiçbir yorum yanıtsız bırakılmamalıdır.
• Bir yoruma katılmıyorsanız gerekçenizi kibarca ve kanıt göstererek açıklayınız.
• Her değişiklik için revize makaledeki tam sayfa ve satır numaralarını belirtiniz.
• Bu formla birlikte revize makaleyi "değişiklikleri izle" özelliği açık olarak yükleyiniz.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'EIC-D05', role: 'eic', stage: 'proofreading',
        scopus: true,
        title: {
          en: 'QR-Coded Proofreading Certificate Required',
          tr: 'Karekodlu Proofreading Sertifikası Talebi'
        },
        subject: {
          en: 'Action Required: Independent Proofreading Certificate — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Bağımsız Karekodlu Proofreading Sertifikası — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

As part of ODÜSOBİAD's quality assurance process and SCOPUS indexing requirements, your manuscript "{TITLE}" (No: {ID}) must be professionally proofread by an independent institution before it can proceed to final production.

Requirements for the proofreading certificate:

□ Issued by an independent, professionally accredited proofreading/editing institution (not a colleague, friend, or AI tool)
□ Must include a verifiable QR code or URL that confirms the certificate's authenticity
□ Must clearly state: manuscript title, author name(s), date of service, and scope of service (language/grammar/APA)
□ Institution name, contact information, and authorised signature must be present

Please upload the following within {X} days:
1. QR-coded proofreading certificate (PDF)
2. Proofread manuscript with Track Changes enabled

Note: Certificates that cannot be independently verified via QR code will not be accepted.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

ODÜSOBİAD kalite güvencesi sürecinin ve SCOPUS indeksleme gereksinimlerinin bir parçası olarak, "{BAŞLIK}" (No: {ID}) başlıklı makalenizin nihai yayım aşamasına geçmeden önce bağımsız bir kurum tarafından mesleki proofreading yaptırılması zorunludur.

Proofreading sertifikasında aranan özellikler:

□ Bağımsız, mesleki akreditasyona sahip bir proofreading/düzenleme kurumu tarafından düzenlenmiş olması (meslektaş, tanıdık veya yapay zeka aracı kabul edilmemektedir)
□ Sertifikanın özgünlüğünü doğrulayan geçerli bir karekod veya URL içermesi
□ Makale başlığı, yazar adı/adları, hizmet tarihi ve hizmet kapsamı (dil/dilbilgisi/APA) bilgileri açıkça belirtilmiş olmalıdır
□ Kurum adı, iletişim bilgileri ve yetkili imzası bulunmalıdır

Lütfen {X} gün içinde aşağıdakileri yükleyiniz:
1. Karekodlu proofreading sertifikası (PDF)
2. Değişikliklerin izlenebildiği proofreading versiyonu (Track Changes açık)

Not: Karekod üzerinden bağımsız olarak doğrulanamayan sertifikalar kabul edilmeyecektir.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'EIC-D06', role: 'eic', stage: 'proofreading',
        title: {
          en: 'Track Changes Proofreading Version Required',
          tr: 'Değişikliklerin İzlenebildiği Proofreading Versiyonu Talebi'
        },
        subject: {
          en: 'Action Required: Track Changes Version of Proofread Manuscript — ODÜSOBİAD [No: {ID}]',
          tr: 'İşlem Gerekli: Değişiklikleri İzle Versiyonu — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

For manuscript "{TITLE}" (No: {ID}), we have received the proofreading certificate; however, the Track Changes version of the proofread manuscript has not been uploaded or is missing.

The Track Changes version is mandatory because it allows the editorial team to verify exactly which corrections were made during proofreading.

How to enable Track Changes:
• Microsoft Word: Review tab → Track Changes → Track Changes (toggle on)
• Ensure all corrections from the proofreader are visible (insertions, deletions, formatting changes)
• Do NOT accept all changes before uploading — the document must show all marked changes

Please upload the Track Changes version of the proofread manuscript within {X} days.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı makaleniz için proofreading sertifikası alınmış; ancak makalenin değişikliklerin izlenebildiği (Track Changes) versiyonu yüklenmemiş ya da eksik görünmektedir.

"Değişiklikleri izle" versiyonu zorunludur; zira editöryal ekibin proofreading sırasında yapılan düzeltmelerin tam olarak neler olduğunu doğrulaması bu sayede mümkün olmaktadır.

"Değişiklikleri izle" özelliğini etkinleştirme:
• Microsoft Word: Gözden Geçir sekmesi → Değişiklikleri İzle → Değişiklikleri İzle (açık konuma getirin)
• Proofreader tarafından yapılan tüm düzeltmelerin görünür olduğundan emin olun (eklemeler, silmeler, biçimlendirme değişiklikleri)
• Yüklemeden önce tüm değişiklikleri KABUL ETMEYİNİZ — belgede tüm işaretli değişiklikler görünür olmalıdır

Değişikliklerin izlenebildiği proofreading versiyonunu {X} gün içinde yükleyiniz.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      },

      {
        id: 'EIC-D07', role: 'eic', stage: 'revision',
        title: {
          en: 'Revised Manuscript — Submission Confirmation',
          tr: 'Revize Makale — Gönderi Onayı'
        },
        subject: {
          en: 'Revised Manuscript Received — Under Review — ODÜSOBİAD [No: {ID}]',
          tr: 'Revize Makale Alındı — İnceleme Aşamasında — ODÜSOBİAD [No: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We confirm receipt of your revised manuscript "{TITLE}" (No: {ID}) along with your Response Letter / Response to Reviewers.

Your submission is now under editorial review. We will inform you of the next steps in due course.

If any additional documents are required, we will contact you separately.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
ODÜSOBİAD
odudergi@gmail.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" (No: {ID}) başlıklı revize makalenizin Yanıt Mektubunuz / Hakemlere Yanıt Formunuzla birlikte alındığını teyid ederiz.

Gönderiniz şu anda editöryal inceleme aşamasındadır. Sonraki adımlar hakkında zamanında bilgilendirileceksiniz.

Herhangi bir ek belgeye ihtiyaç duyulması hâlinde sizinle ayrıca iletişime geçilecektir.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
ODÜSOBİAD
odudergi@gmail.com`
        }
      }

    ] /* end messages */

  }; /* end ODUSOBIAD_MESSAGES */

  global.ODUSOBIAD_MESSAGES = ODUSOBIAD_MESSAGES;

})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
