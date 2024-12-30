import "./haberler.less";
// Haberleri üretmek için aşağıdaki data kullanılacak. Önce inceleyin sonra 94. satıra geçin.
// OPSİYONEL: Kendinizi maceracı hissediyorsanız, bu verileri farklı bir modülden dışa aktarmaya çalışın ve buraya aktarın.
// ES6 Modülleri ile ilgili bilgi için bakabilirsiniz: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    baslik: "Workintech Teknoloji üretecek gençler yetiştiriyor",
    tarih: "11 Kasım 2022",
    ilkParagraf: `Yazılım ön bilgisi olmayan üniversitelileri 6 ayda dünyanın en iyi şirketlerine girecek seviyede yetiştiren Workintech, 3 yılda 5 bin yazılımcıyı sektöre kazandıracak. Öğrenciler kurs ücretini işe yerleşince ödeyecek.`,

    ikinciParagraf: `Gençlere 6 ay boyunca sabah 9 akşam 6 saatleri arasında eğitim veren Workintech, bu programla gençleri işe girecek seviyeye getiriyor. Eğitim boyunca üniversiteliler öğretim ücreti ödemiyor, işe yerleşince ödemeye başlıyor. Eğer çocuk 12 ay içerisinde bir iş bulamazsa da kurs ücreti alınmıyor. Bir bilgisayar ve internet vasıtasıyla her yerden çalışabilen yazılımcılar, yurtiçinde yaşayıp, dövizle yurtdışına da iş yapabiliyor.`,

    ucuncuParagraf: `Türkiye'de yeni mezun bir yazılımcı 15 bin ila 30 bin TL arasında maaş alıyor. Bu iş kolunda deneyim kazandıkça maaşlar katlanıyor. Tuğrul Türkkan'ın verdiği bilgiye göre şu anda en fazla yazılımcıya ihtiyacı olan sektör bankacılık. Finans sektörü yazılımcıları ortalama 22 ila 25 bin TL arasında maaşlara işe alıyor. Daha sonra telekom, e-ticaret ve oyun sektörü geliyor. Kursu bitiren gençlerin iş bulmalarına da yardımcı olduklarını ifade eden Tuğrul Türkkan: "Biz bu çocuklar kursu bitirir bitirmez, iş ortaklarımıza tavsiye ediyoruz. Gençlere mülakatlara nasıl girecekleri, nasıl iş arayacakları hatta nasıl maaş pazarlığı yapacaklarına kadar her konuda eğitim veriyoruz" diye konuştu.`,
  },
  {
    baslik: "Bosch, çok daha verimli 800V motorların üretimine başladı!",
    tarih: "10 Ekim 2023",
    ilkParagraf: `Alman teknoloji devi Bosch, yeni nesil elektrik motor ve inverter üretimine başladığını duyurdu. Silikon karbür çiplerin kullanımı sayesinde eski nesil 400V çözümlere kıyasla verimliliği ciddi şekilde artıran firma, belki de bir sonraki nesil Togg'lara bu motoru tedarik edecek.`,

    ikinciParagraf: `Motorun içerisinde yeni bir bakır sargı tasarımj kullandığını ve bu sayede güç yoğunluğunu %35 artırarak aynı beygir gücü ve torka daha hafif motorla ulaşabildiğini söyleyen Bosch, inverter tarafında ise ısınma kaynaklı kayıpları %50 düşürüp verimliliği neredeyse %99 seviyesine çıkarmış.`,

    ucuncuParagraf: `Elektrikli araçlarda 800V mimariye geçişin kaçınılmaz olduğu aşikar. Daha hafif motor, inverter ve yüksek voltaj kablolaması ile araç ağırlığını düşüren 800V mimari, güç elektroniği tarafında verimliliği artırarak menzile çok büyük katkı sağlıyor. Üstelik DC şarj hızının da 400 kW üstüne çıkmasını mümkün kılıyor.`,
  },
  {
    baslik: "Apple Vision Pro, insanların akıl sağlığını tedavi edecek",
    tarih: "9 Kasım 2022",
    ilkParagraf: `Apple, karma gerçeklik gözlüğü Vision Pro ile insanların akıl hastalıklarını iyileştirmeyi hedefliyor. Sensör ve kameralar yardımıyla kullanıcıların yüz ifadelerini, hislerini ve duygularını ölçeceği, kullanıcıların depresyon ve anksiyetelerini tedavi edebileceği kaydedildi.`,

    ikinciParagraf: `Bu teknolojinin aynı zamanda ağırlıktaki değişiklikleri, göz bebeği genişlemesini ölçebileceği ve potansiyel olarak Parkinson hastalığının belirtilerini tespit etmek için bir araç olarak kullanıcıların hareketlerini değerlendirebileceği bildiriliyor. Vision Pro'nun bu koşulları tedavi etmek için kullanıcıların stres, depresyon veya anksiyetesini hafifletmeyi amaçlayan dahili bir ekranda görüntüler ve sesler gösterebileceği belirtildi. Kulaklık bir eğlence cihazı olarak tasarlanmış olsa da, ruhsal hastalıkları ele almak için potansiyel kullanımı Apple'ın ruh sağlığı alanındaki ilk girişimi değil.
    Teknoloji devi Haziran ayında Sağlık uygulamasında ruh sağlığı özelliklerini tanıtarak iPhone, iPad ve Apple Watch kullanıcılarının fiziksel aktivitelerinin yanı sıra ruh hallerini takip etmelerine ve ruh sağlıklarını izlemelerine olanak sağladı.`,

    ucuncuParagraf: `Hastalık Kontrol ve Önleme Merkezlerine göre, ABD'de her beş kişiden biri ruhsal hastalıklarla mücadele ediyor. Yaklaşık her 25 ABD'li yetişkinden biri bipolar bozukluk, majör depresyon veya şizofreni gibi ciddi akıl hastalıklarıyla mücadele etmektedir.`,
  },
  {
    baslik: "Adobe, 20 milyar dolarlık Figma satın alımından vazgeçti",
    tarih: "18 Kasım 2023",
    ilkParagraf: `Adobe, Figma'yı 20 milyar dolara satın alma planından, şirketlerin İngiltere ve Avrupa Birliği düzenleyicilerinden onay almak için net bir yol olmadığını tespit etmelerinin ardından vazgeçtiğini açıkladı. Adobe, işbirliğine dayalı tasarım platformu Figma'ya daha önce kararlaştırılan 1 milyar dolarlık fesih bedelini ödeyecek.`,

    ikinciParagraf: `Kasım ayında, Birleşik Krallık Rekabet ve Piyasalar Kurumu (CMA) ve Avrupa Komisyonu, önerilen satın almanın rekabet üzerindeki etkisine ilişkin endişelerini dile getirmişti. CMA geçici bulgularında birleşmenin iki ana rakip arasındaki “rekabeti ortadan kaldıracağını" söylemişti. Komisyon, anlaşmayı engellemeyi ya da Adobe'nin Figma'nın temel ürünü Figma Design'ı Adobe XD ile birlikte satmasını talep etmeyi düşündüğünü belirtmişti.`,

    ucuncuParagraf: `Bugün ise Adobe, CMA'ya herhangi bir potansiyel çözüm yolu sunamayacağını beyan etti. Bir Adobe sözcüsü Bloomberg'e verdiği demeçte, "Hiçbir gerçekçi çözümün CMA'nın sürdürdüğü endişeleri karşılamayacağı ortada" dedi. Avrupa Komisyonu’da bu birleşmenin rekabeti azaltabileceğini söyemiş ve birleşme konusunda nihai kararını 5 Şubat'a kadar vereceğini açıklamıştı. Adobe, Avrupalı düzenleyicileri yatıştırmak için olası çözümler sunmaya istekli olduğunu belirtmişti, ancak görünen o ki artık durum böyle değil. Adobe Yönetim Kurulu Başkanı ve CEO'su Shantanu Narayen yaptığı açıklamada, “Adobe ve Figma düzenleyici bulgulara kesinlikle katılmıyor, ancak bağımsız olarak ilerlemenin kendi çıkarlarımıza en uygun yol olduğuna inanıyoruz” dedi`,
  },
];

/*
  Adım 1: Haber oluşturmak için 'haberYapici' adında bir bileşen(component) oluşturun.
  Bileşeniniz, argümanı haberleri içeren dizi olarak alan bir fonksiyon olacak,
  ve aşağıdaki gibi görünen bir DOM düğümü döndürecek:

  <div class="article">
    <h2>{haber başlığı}</h2>
    <p class="tarih">{haber tarihi}</p>

    {üç ayrı paragraf elementi}

    <span class="expandButton">+</span>
  </div>

  Adım 2: Hala `haberYapici` içindeyiz, span.expandButton 'a bir click event dinleyici ekleyin.
  Bu dinleyici div.article öğesine 'article-open' class'ını ekleyip/çıkaracak (toogle).

  Adım 3: Fonksiyonunuzdan bir öğe döndürmeyi unutmayın.

  Adım 4: Fonksiyonunuzun dışında, tüm datayı döngüye sokun(loop). Bir div.article öğesi oluşturmak ve bunu div.articles içindeki DOM'a eklemek için
  her yinelemede oluşturduğunuz bileşeninizi kullanacaksınız(bknz. index.html).

  Adım 5: Veri dizisine yeni haber nesnesi eklemeyi deneyin. Diğer verilerle aynı yapıda olmasına dikkat edin.
  Eklediğiniz yeni haberi görmek için sayfayı yenileyin.
*/

const haberYapici = function (news) {
  // Create new element
  const newsItem = document.createElement("div");
  // Add classname to new element
  newsItem.classList.add("article");

  const h2Header = document.createElement("h2");
  h2Header.textContent = news.baslik;

  const pDate = document.createElement("p");
  pDate.textContent = news.tarih;

  const pElement1 = document.createElement("p");
  pElement1.textContent = news.ilkParagraf;
  const pElement2 = document.createElement("p");
  pElement2.textContent = news.ikinciParagraf;
  const pElement3 = document.createElement("p");
  pElement3.textContent = news.ucuncuParagraf;

  const spanButton = document.createElement("span");
  spanButton.classList.add("expandButton");
  spanButton.textContent = "+";

  // Attach created elements to parentElement
  newsItem.append(h2Header, pDate, pElement1, pElement2, pElement3, spanButton);

  spanButton.addEventListener("click", (e) => {
    newsItem.classList.toggle("article-open");
  });

  return newsItem;
};

const articles = document.querySelector(".articles");

data.forEach((i) => {
  articles.append(haberYapici(i));
});
