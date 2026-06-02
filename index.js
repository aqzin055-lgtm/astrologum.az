const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Frontend-dən gələn JSON datalarını oxuya bilmək üçün
app.use(express.json());

// CORS Təhlükəsizlik tənzimləməsi (Frontend-in bu backend-ə bağlana bilməsi üçün)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
});

// Ana yoxlama marşrutu (Serverin işlədiyini görmək üçün brauzerdə açılacaq)
app.get('/', (req, res) => {
    res.send('AstroCosmos Professional Backend API is running... 🌌');
});

// 🔮 DOĞUM XƏRİTƏSİ HESABLAMA API-Sİ
app.post('/api/natal-chart', (req, res) => {
    const { name, date, time } = req.body;

    if (!date || !time) {
        return res.status(400).json({ error: "Tarih ve saat alanları zorunludur." });
    }

    // Mühəndislik alqoritmi: Daxil edilən aya görə bürclərin və planetlərin riyazi təyini
    const birthMonth = new Date(date).getMonth() + 1; // 1 - 12 arası ay
    let sunSign = "Koç / Qoç";
    let moonSign = "Aslan / Şir";
    let risingSign = "Terazi / Tərəzi";
    let readingText = "";

    // Sadələşdirilmiş kosmik hesablama alqoritmi matrixi
    if (birthMonth === 1 || birthMonth === 2) {
        sunSign = "Oğlak / Oğlaq";
        moonSign = "Balık / Balıq";
        risingSign = "Akrep / Əqrəb";
        readingText = "Doğum anınızda Satürnün güçlü konumu size muazzam bir sorumluluk duygusu ve sarsılmaz bir irade veriyor. Hayatınızın ilerleyen dönemlerinde finansal istikrarı yakalayacaksınız.";
    } else if (birthMonth === 3 || birthMonth === 4) {
        sunSign = "Koç / Qoç";
        moonSign = "İkizler / Əkizlər";
        risingSign = "Yay / Oxatan";
        readingText = "Marsın ateşli enerjisi ruhunuza liderlik ve cesaret üflüyor. Girişimci ruhunuz sayesinde kendi işinizin patronu olma potansiyeliniz son derece yüksek.";
    } else if (birthMonth === 5 || birthMonth === 6) {
        sunSign = "İkizler / Əkizlər";
        moonSign = "Başak / Qız";
        risingSign = "Kova / Dolça";
        readingText = "Merkürün zihinsel hızı sizi tam bir bilgi avcısı yapıyor. İletişim, teknoloji ve sosyal mühendislik alanlarında önümüzdeki günlerde büyük kapılar açılabilir.";
    } else {
        sunSign = "Akrep / Əqrəb";
        moonSign = "Boğa / Buğa";
        risingSign = "Aslan / Şir";
        readingText = "Plütonun dönüştürücü gücü hayatınızda krizleri fırsata çevirmeyi öğretiyor. Küllerinizden doğma yeteneğiniz sayesinde asla pes etmeyen bir karaktere sahipsiniz.";
    }

    // Frontend-ə göndəriləcək professional cavab paketi
    res.json({
        success: true,
        sun: sunSign,
        moon: moonSign,
        rising: risingSign,
        reading: readingText,
        calculatedAt: new Date().toISOString()
    });
});

// Serveri işə salmaq
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});