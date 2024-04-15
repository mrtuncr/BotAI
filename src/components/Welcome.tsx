import nutribot from "../assets/nutribot.jpg" 

export const Welcome: React.FC = () => (
  <div className="flex flex-col items-center bg-white border-gray-300 border-2 rounded-lg px-8 py-5 my-5 mr-20 w-full">
    <img className="rounded-lg" src={nutribot} alt="" height={200} width={200} />
    <h1 className="text-2xl font-bold mb-2">Merhaba, Ben Yapay zeka ile eğitilmiş bir diyetisyen robotuyum. </h1>
    <p>
      Sağlıklı yaşam için gerekli, ihtiyaca yönelik diyet programlarını, beslenme önerilerini hazırlayabilir ve bunlara yönelik tüm sorularına cevap verebilirim. 
    </p>
    <p>
     Aşağıdaki bazı hazır sorularla başlayabiliriz.
    </p>
  </div>
);
