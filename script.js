// logic for profile card 
function toggleMenu(){
    let menu=document.getElementById("profileMenu");
    if(menu.style.display=="block"){
        menu.style.display="none";
    }
    else{
        menu.style.display="block";
    }
}

// logic for play pause
let myAudio=document.getElementById("masterAudio");
let playIcon=document.getElementById("playIcon");
let pauseIcon=document.getElementById("pauseIcon");

function togglePlay(){
    if(myAudio.paused){
        myAudio.play();
        playIcon.style.display="none";
        pauseIcon.style.display="block";
        console.log("Gaana Chalu Hogya!")
    }
    else{
        myAudio.pause();
        playIcon.style.display="block";
        pauseIcon.style.display="none";
        console.log("Ganna Ruk Gaya!")
    }
}

// playlist Setup
let songIndex=0;
let songs=[
    {
        // 0
    songName:"dil chahta hai",
    filepath:"./songs-mp3/Dil Chahta Hai [Full Song] Dil Chahta Hai.mp3",
    coverpath:"./songs/dil-chahta-hai.jpg",
    lyrics:`Dil Chahta Hai
    Dil Chahta Hai

    Dil Chahta Hai
    Kabhi Na Beete, Chamkeele Din

    Dil Chahta Hai
    Hum Na Rahein Kabhi
    Yaaron Ke Bin

    Din Din Bhar Ho, Pyaari Baatein
    Jhoome Shaame, Gaaye Raatein

    Masti Mein Rahe
    Dooba Dooba Hamesha Samaa
    Humko Raahon Mein
    Yunhi Milti Rahein, Khushiyaan

    Dil Chahta Hai
    Kabhi Na Beete, Chamkeele Din

    Dil Chahta Hai
    Hum Na Rahein Kabhi
    Yaaron Ke Bin

    Jagmagaate Hain, Jhilmilaate Hain
    Apne Raaste
    Yeh Khushi Rahe, Roshni Rahe Apne Waaste
    Jagmagaate Hain, Jhilmilaate Hain
    Apne Raaste
    Yeh Khushi Rahe, Roshni Rahe Apne Waaste


    Jahaan Ruke Hum, Jahaan Bhi Jaayein
    Jo Hum Chaahein, Woh Hum Paayein
    Masti Mein Rahe
    Dooba Dooba Hamesha Samaa
    Humko Raahon Mein
    Yunhi Milti Rahein, Khushiyaan
    Dil Chahta Hai
    ♩ ♪ ♫ ♬ Music ♬ ♫ ♪ ♩
    Dil Chahta Hai
    ♩ ♪ ♫ ♬ Music ♬ ♫ ♪ ♩
    Dil Chahta Hai
    ♩ ♪ ♫ ♬ Music ♬ ♫ ♪ ♩
    Dil Chahta Hai
    ♩ ♪ ♫ ♬ Music ♬ ♫ ♪ ♩
    Kaisa Ajab Yeh Safar Hai
    Socho To Har Ek Hi Bekhabar Hai
    Usko Jaana Kidhar Hai
    Jo Waqt Aaye, Jaane Kya Dikhaaye

    Dil Chahta Hai
    Kabhi Na Beete, Chamkeele Din

    Dil Chahta Hai
    Hum Na Rahein Kabhi
    Yaaron Ke Bin


    Din Din Bhar Ho, Pyaari Baatein
    Jhoome Shaame, Gaaye Raatein

    Masti Mein Rahe
    Dooba Dooba Hamesha Samaa
    Humko Raahon Mein
    Yunhi Milti Rahein, Khushiyaan

    Dil Chahta Hai
    Kabhi Na Beete, Chamkeele Din

    Dil Chahta Hai
    Hum Na Rahein Kabhi
    Yaaron Ke Bin`
    },
    {
        // 1
    songName:"tere hawale",
    filepath:"./songs-mp3/Tere Hawaale (Full Video) Laal Singh Chaddha  Aamir,Kareena  Arijit,Shilpa  Pritam,Amitabh,Advait.mp3",
    coverpath:"./songs/Tere-Hawale.png",
    lyrics:`Mainu chadheya ishq mein rang tera
Ik ho gaya ang mera ang tera
Rabb milleya jadd milleya
Maahi mainu sang tera

Na hoke bhi kareeb tu
Humesha paas tha
Ke 100 janam bhi dekhta
Main tera raasta

Na hoke bhi kareeb tu
Humesha paas tha
Ke 100 janam bhi dekhti
Main tera raasta

Jo bhi hai sab mera
Tere hawaale kar diya
Jism ka har ruaan
Tere hawaale kar diya

Jo bhi hai sab mera
Tere hawale kar diya
Jism ka har ruaan
Tere hawale kar diya

Dekha zamaana saara bharam hai
Ishq ibadat ishq karam hai
Mera thikaana teri hi dehleez hai

Ho main hoon deewarein
Chhatt hai pia tu
Rab ki mujhe nemat hai pia tu
Mere liye tu barqat ka taaveez hai

Zara kabhi meri nazar se
Khud ko dekh bhi
Hai chand mein bhi daag par
Na tujhme ek bhi

Khud pe haq mera
Tere hawaale kar diya
Jism ka har ruaan
Tere hawaale kar diya

Jo bhi hai sab mera
Tere hawale kar diya
Jism ka har ruaan
Tere hawale kar diya

Mainu chadheya ishq mein rang tera
Ik ho gaya ang mera ang tera
Rabb milleya jadd milleya
    Maahi mainu sang tera`
    },
    {
        // 2
    songName:"wo ladki hai kahan",
    filepath:"./songs-mp3/Wo Ladki Hai Kahan - Trending Version (Lyrics)  Dil Chahta Hai  Saif Ali Khan, Sonali Kulkarni.mp3",
    coverpath:"./songs/Vo-Ladki-Hai-Kahan.png",
    lyrics:`Jisse dhoondta hoon main, har kahin
Jo kabhi mili, mujhe, hai nahin
Mujhe jiske, pyaar par, ho yakeen
Woh ladki hai kahaaan

Jisse sirf mujhse hi, pyaar ho
Jo yeh kehne ko bhi, taiyyaar ho
Suno tum hi mere, dildaar ho
Woh ladki hai kahaaan

Jo tumhaare khwaabon mein, hain basi
Woh haseen, murti, pyaar ki
Milegi, tumhe kabhi, na kabhi
Zara dekho, yahan, wahan
Chalo dhoondte hain, hum tum, kahin
Woh pari, woh hoor, woh naazneen,
Jisse, dekho to kaho, tum wahi
Arey yeh to, hai yahaaan


Jaane kyoon,
khayaal aaya mujhe
Ke woh ladki kahin,
tum to nahinnnn
Tum mein hain,
woh saari khubiyaan
Tha jinko dhoondta
main har kahinnnn

Tumhe dhoka, lagta hai, ho gaya
Mujhe hai, samajh liya, jaane kya
Na main, hoon pari, na main, apsara
Karo tum na yeh, ghumaannn


Jisse dhoondta hoon main, har kahin
Jo kabhi mili, mujhe, hai nahin
Mujhe jiske pyaar par, ho yakeen
Woh ladki hai kahaaan

(MUSIC)


Maan lo,
agar main yeh kahoon
Ke mere khwaabon mein
tum hi to hoooooo
Jaan lo,
mera armaan hai
Ke mere saath hi
ab tum rahoooo

Mujhe, tumne kya yeh, samjhaa, diya
Mere, dil ko jaise, dhadka, diya
Mere tan.badan ko, pigh.la diya
Woh sunaaii, daas.taan


Jisse dhoondta hoon main, har kahin
Jo kabhi mili mujhe, hai nahin,
Mujhe jiske pyaar par, ho yakeen

Woh ladki hai kahaaan

Woh ladki hai, yahaaan

Woh ladki hai kahaan

Woh ladki hai yahaan

Woh ladki hai kahaan

Woh ladki hai yahaan

Woh ladki hai.ii, kahaannn

Woh ladki hai, yahaan`
    },
    {
        // 3
    songName:"lut le gaya",
    filepath:"./songs-mp3/Dhurandhar  Lutt Le Gaya - Lyrical  Ranveer Singh, Akshaye Khanna, Shashwat Sachdev, Simran C.mp3",
    coverpath:"./songs/Lut-Le-Gaya.png",
    lyrics:`Aaja ve aaja
(Aaja-aaja-aaja-aaja)
Aaja ve aaja
(Aaja-aaja-aaja-aaja)

Haay sajan… haay sajan…
Haay sajan… haay sajan…
Aaja ve aaja
Haay sajan… haay sajan…

Aaja ve aaja, seene laa ja
Haay sajan mainu lutt le gaya, haay
Haay sajan mainu lutt le gaya

Pyaase labban de, rog mukka ja
Haay sajan mainu lutt le gaya, haay
Haay sajan mainu lutt le gaya

Haay sajan meri akhan taras di
Har ima mera toot beh gaya
Mainu lutt le gaya

Ho mainu lutt le gaya
Ho mainu lutt le gaya
Ho mainu lutt le gaya

Aaja ve aaja (Ja..ja..ja..)
Ho mainu lutt le gaya
Aaja ve aaja (Ja..ja..ja..)
Haay sajan
Ho mainu lutt le gaya

Aaja ve aaja (Ja..ja..ja..)
Aaja ve aaja (Ja..ja..ja..)
(Haay sajan… haay sajan…)
Aaja ve aaja (Ja..ja..ja..)
Aaja ve aaja (Ja..ja..ja..)

Takk di akhiyan aje na thakiyan
Naina vich nasha vass gaya
Rajj ke peeva tainu sajna
Raataan vich na rass gaya, haay

Vass na jaavaan, vich main seh laan
Mainu oh khich fer ghutt lai gaya
Haay sajan meri akhan taras di
Har ima mera toot beh gaya

Mainu lutt le gaya
Ho mainu lutt le gaya
Ho mainu lutt le gaya
Ho mainu lutt le gaya

Aaja ve aaja, aaja ve aaja
Aaja ve aaja, aaja ve aaja
(Haay sajan… haay sajan…)
(Ja..ja..ja.. haay sajan…)`
    },
    {
        // 4
    songName:"vaari jawan",
    filepath:"./songs-mp3/VAARI JAAVAN (Full Video) Dhurandhar The Revenge Ranveer Singh Shashwat Sachdev,Jyoti N,Jasmine S.mp3",
    coverpath:"./songs/Vaari-Jawan.png",
    lyrics:`Pachchi pindaan da sardar mera yaar ni
Jitt ke main ohnu ajj dill gayi aan haar ni
Ishq-e-majaazi da taaj sir te paa liya
Sohna-sunakkha enna jaan devan vaar ni
Pachchi pindaan da sardar mera yaar ni
Jitt ke main ohnu ajj dill gayi aan haar ni
Ishq-e-majaazi da taaj sir te paa liya
Jad vi bulaave sohna daudi main aavan

Ni main vaari jaavan mera sohna ae yaar
Ni main vaari jaavan ve main dill gayi aan haar
Ni main vaari jaavan mera sohna hathyaar
O ni main vaari jaavan ni main vaari vaari

He’s so sweet can’t feel my face
When i met him it feels like sin
Your majesty come be my grace
And mercy on my inner self

Ni main vaari jaavan mera sohna ae yaar
Ni main vaari jaavan ve main dill gayi aan haar
Ni main vaari jaavan mera sohna hathyaar
O ni main vaari jaavan ni main vaari vaari

Vaili de kisse dekho hoye mashhoor ve
Vairi vi vekh hoye majboor ve
Bandekhane de raundan de gehne main paavan
Jo bulaave sohna te main daudi aavan

Ni main vaari jaavan mera sohna ae yaar
Ni main vaari jaavan ve main dill gayi aan haar
Ni main vaari jaavan mera sohna hathyaar
O ni main vaari jaavan ni main vaari vaari`
    },
    {
        // 5
    songName:"ishq jalakar",
    filepath:"./songs-mp3/ishq-jalakar.mp3",
    coverpath:"./songs/Ishq-Jalakar.png",
    lyrics:`Dhoop toot ke, kaanch ki tarah
Chubh gayi to kya, ab dekha jaye naa
Aandhiyan kayi, dil mein hai mere
Chubh gayi toh kya, ab dekha jayega

Dil hai toota.. mera
Main ishq jala kar aa gaya
Dil hai toota.. mera
Main ishq jala kar aa gaya

Ni sa ga re sa ni sa 
Ga ma pa ma pa ga ma 
Re sa ni sa ga re sa ni sa 

Aasmaan mein udaan hai
Dhadkan dhadkan suroor mein
Dil hai toota
Ni sa ga re sa ni sa 
Ga ma pa ma pa ga ma 
Re sa ni sa ga re sa ni sa 
Hai Junoon mein sukoon
Ab ye dil ye dil fitoor mein
Dil hai toota
Ni sa ga re sa ni sa 
Ga ma pa ma pa ga ma 
Re sa ni sa ga re sa ni sa 
Aandhi ban ke aaya hoon
Mera hausla bhi aiyash hai

Na toh karvaan ki talaash hai
Na toh karvaan ki talaash hai
Na toh humsafar ki talaash hai
Na toh karvaan ki talaash hai

(Dil hai toota..)

Aadhi baatein aankhein bole
(Sa re ga pa ma ni sa)
Aadhi baatein aankhein bole
Baaki aadhi khamoshi keh de
Humzubaan ki talaash hai

Na toh karvaan ki talaash hai
Na toh karvaan ki talaash hai
Na toh humsafar ki talaash hai
Mera shauq tera deedaar hai
Yehi umr bhar ki talaash hai

Mere hum kadam hai ye zameen
Mere hum kadam hai ye zameen
Mere hum kadam hai ye zameen
Mere haath mein aakaash hai

Na toh karvaan ki talaash hai
Na toh karvaan ki talaash hai
Na toh humsafar ki talaash hai
Na toh karvaan ki talaash hai

Dil hai toota.. mera
Main ishq jala kar aa gaya

Ni sa ga re sa ni sa ga ma pa 
Ma pa ga ma re sa ni sa ga re sa ni sa

Na toh kaarvan ki talaash hai

Ni sa ga re sa ni sa ga ma pa 
Ma pa ga ma re sa ni sa ga re sa ni sa

Na toh humsafar ki talaash hai`
    },
    {
        // 6
    songName:"udd jaa kaale kaava",
    filepath:"./songs-mp3/udja kale kauwan .mp3",
    coverpath:"./songs/Udd-Jaa-Kaale-Kaava.png",
    lyrics:`dja Kale Kawa
Tere Muh Vich Khand Pawan
Le Ja Tu Sandesha Mera
Main Sadke Jawan

Baaghon Mein Phir Jhule Pad Gaye
Pak Gayi Mithhiyan Ambiyaan
Ye Chhoti Si Zindagi Te
Rata Lambiyan-Lambiyan

Oo Ghar Aaja Pardeshi
Ki Tere Meri Ek Zindadi
Oo Ghar Aaja Pardeshi
Ki Tere Meri Ek Zindadi.

Kitni Dard Bhari Hai
Teri Meri Prem Kahani
Ho Kitni Dard Bhari Hai
Teri Meri Prem Kahani

Saat Samundar Jitna Apni
Aankhon Mein Hai Paani
Main Dil Se, Dil Mujhse Karta

Hai Jab Teri Baatein
Saawan Aane Se Pahle
Ho Jati Hai Barsatein

Oo Ghar Aaja Pardeshi
Ki Tere Meri Ek Zindadi
Oo Ghar Aaja Pardeshi
Ki Tere Meri Ek Zindadi

Parvat Kitne Unche
Kitne Gehre Hote Hai
Parvat Kitne Unche
Kitne Gehre Hote Hai

Kuch Mat Pucho Pyaar Pe
Kitne Pehre Hote Hai
Ishq Mwin Jane Kya Ho Jata

Hai Ye Rab Hi Jaane
Tod Ke Sari Deewarein
Mil Jate Hai Deewane

Oo Le Ja Mujhe Pardeshi
Ki Teri Meri Ek Zindadi
Oo Le Ja Mujhe Pardeshi

Ki Teri Meri Ek Zindadi
Haan Oo Le Ja Mujhe Pardeshi
Ki Teri Meri Ek Zindadi`
    },
    {
        // 7
    songName:"jitni dafa",
    filepath:"./songs-mp3/jitni dafa.mp3",
    coverpath:"./songs/Jitni-Dafa.png",
    lyrics:`Jitni dafa dekhun tumhe
Dhadke zoron se
Aisa toh kabhi hota nahi
Milke ghairon se (x2)

Door jaana nahi
Tumko hai kasam
Khudse zyada tumhe
Chaahatein hain sanam

Door jaana nahi
Mujhse aye sanam
Khudse zyada tumhe
Chaahatein hain sanam

Dil mein jo bhi hai
Tera hi toh hai
Chaahe jo maang lo
Roka kisne hai

Qatl agar karna ho, karna dheere se
Uff bhi nahi niklegi mere hothon se

Door jaana nahi
Tumko hai kasam
Khudse zyada tumhe
Chaahatein hain sanam

Door jaana nahi
Mujhse aye sanam
Khudse zyada tumhe
Chaahatein hain sanam`
    },
    {
        // 8
    songName:"gehra hua",
    filepath:"./songs-mp3/Gehra-hua.mp3",
    coverpath:"./songs/Gehra-Hua.png",
    lyrics:`Tu agar meri, yeh hawayein teri
Tu agar meri, saari raahein teri
Tu agar meri, main hoon tera
Tu agar meri, yeh ujaale tere
Tu agar meri, dil hawale tere
Tu agar meri, main hoon tera

Betaab-sa mohabbat ka tu inqalaab hai
Mera jahaan teri baahon mein khwaab, khwaab hai

Gehra hua, gehra hua
Rang aashiqui gehra hua
Gehra hua, gehra hua
Dariya dua gehra hua
Tera hua

Tu agar meri, yeh hawayein teri
Tu agar meri, saari raahein teri
Tu agar meri, main hoon tera

Palkein jhapakta hai aasmaan
Laakhon farishton ki hai tu jaan
Woh poochhte hain Rehti kahaan?
Meri baahon mein rehti, unko bata

Palkein jhapakta hai aasmaan
Usne bhi tujh-sa dekha kahaan
Hai raunakien wahan, tu hai jahaan
Meri baahon mein rehna, yahi hai dua

Tu agar meri, hai fasaana tera
Tu agar meri, toh zamaana tera
Tu agar meri, main hoon tera

Betaab-sa mohabbat ka tu inqalaab hai
Mera jahaan teri baahon mein khwaab, khwaab hai

Gehra hua, gehra hua
Rang aashiqui gehra hua
Tera hua

Tu agar meri, yeh hawayein teri
Tu agar meri, saari raahein teri
Tu agar meri, main hoon tera

Teri mohabbat mein jalna bhi hai
Aur tujhse bachke hi chalna bhi hai
Kuch rang apna badalna bhi hai
Maine dhalna tere rang mein hai sada

Tu chaand hai ek dhadakta hua
Chori se mujhko hi takta hua
Seene se lag ke chamakta hua
Meri jannat ka rasta, tu hi tu hua

Tu agar meri, yeh hawayein teri
Tu agar meri, saari raahein teri
Tu agar meri, main hoon tera

Betaab-sa mohabbat ka tu inqalaab hai
Mera jahaan teri baahon mein khwaab, khwaab hai

Gehra hua, gehra hua
Rang aashiqui gehra hua
Gehra hua, gehra hua
Dariya dua gehra hua`
    },
    {
        // 9
    songName:"tu jo mila",
    filepath:"./songs-mp3/Tu-Jo-MIla.mp3",
    coverpath:"./songs/Tu-Jo-Mila.png",
    lyrics:`Aashiyaana mera saath tere hai na
Dhoondte teri gali mujhko ghar mila
Aab-o-daana mera haath tere hai na
Dhoondte tera Khuda mujhko Rab mila
Tu jo mila lo ho gaya main qaabil
Tu jo mila to ho gaya sab haasil haan!
Mushqil sahi aasaan hui manzil
Kyunki Tu.. Dhad.kan.. Main Dil…

Rooth jaana tera
Maan jaana mera
Dhoondhte teri hansi
Mill gayi khushi
Raah hoon main teri
Rooh hai tu meri
Dhoondhte tere nishaan
Mill gayi khudi
Tu jo mila lo ho gaya main qaabil
Tu jo mila to ho gaya sab haasil haan!
Mushqil sahi aasaan hui manzil
Kyunki Tu.. Dhadkan.. Main Dil…
O…

Tu jo mila lo ho gaya main qaabil
Tu jo mila to ho gaya sab haasil.. haan!
Tu jo mila aasaan hui mushqil
Kyunki Tu Dhadkan.. Main Dil…`
    },
    {
        // 10
    songName:"aari aari",
    filepath:"./songs-mp3/Aari-Aari.mp3",
    coverpath:"./songs/Aari-Aari.png",
    lyrics:`Ghir ghir baddal barsange
Jad teer milan do raawan de
Ghir ghir baddal barsange
Hun badle rukh hawawan de
Aayi, akhan te aayi meri sardari
Aari aari aari, aari aari aari 
Ve teri meri ek jindaddi
Laigi lutt jind saari ve teri meri 
Aari aari aari

O mere dil di baazi agge
Koi dard bada na, koi dard bada na lagge
Saari duniyadaari thagge
Meri jaan tere ton vaari

Aari aari aari, aari aari aari 
Ve teri meri ek jindaddi 
Laigi lutt jind saari ve teri meri 
Aari aari aari

Yeah, my father raised me a winner
I would kill for my people, it don't make me a sinner
From the coast to the plains, everybody know the name
I'm coming for 'em, we got bills to maintain

Bi*ch, you got an ego, shouldn't fu*k with me though
I make all that money like I'm runnin a casino
G-code, know I got the power in my genome
Cut the bluff, can you stand up? What's between those?

I put pen to the paper like they were crushing on each other
I make a deputy bend to me, I make a cop a buttler
Craziest turn the laziest problem to a product, hustler
Probably profit 'cause I was popped up a prophet, word to mother
Word to mother, two hands on their neck like I was churning butter
So hot headed, if I go to sleep, I'll probably burn the covers
Burn the covers, if the covers burn, I gotta turn the mattress
Token the first pick, you under the pic like a wordy caption

Vaari varsi khattan gaya si 
Khatt ke liyanda patasa
Vaari vaari varsi khattan gaya si 
Khatt ke liyanda patasa

Ho mittran nu maar gaya 
Maar gaya ve tera haasa
Mittran nu maar gaya 
Maar gaya ve tera haasa

Khair khabar main teri le leni, sohne yaar ve
Preet parakhta tera jagg bairi hoya mera
Jaane tu hi bas jaane meri dildaari

Aari aari aari, aari aari aari 
Ve teri meri ek jindaddi 
Laigi lutt jind saari ve teri meri 
Aari aari aari

Ho mere dil di baazi agge
Koi dard bada na koi dard bada na lagge
Saari duniyadaari thagge
Meri jaan tere ton vaari

Aari aari aari, aari aari aari 
Ve teri meri ek jindaddi 
Laigi lutt jind saari ve teri meri 
Aari aari aari`
    },
    {
        // 11
    songName:"not guilty",
    filepath:"./songs-mp3/Not-Guilty.mp3",
    coverpath:"./songs/Not-Guilty.png",
    lyrics:``
    },
    {
        // 12
    songName:"jhol",
    filepath:"./songs-mp3/Jhol.mp3",
    coverpath:"./songs/Jhol.png",
    lyrics:`Kyun tainu main dikhawan
Dilon rus gayi aan chhaavaan
Teri yaadaan ch bikhra main, duniya sajavan

Sun ve main kithe jaavaan
Hun rus gayi aan raawaan
Main te dasiya si, khabaan ich takiya si
Le hun din vi nai chadeya

Te dil ich tu mere man ich tu
Jadon vi nai hondi paas
Te tadapdi ae rooh
Te rove tu kareeb sohni, haali na tu ja
Tu hi hai mera naseeb
Kadi vi na jaavein door

Assi laa dite jene vi tu mangdi ae taare
Meri jaan kadi vi na darin mere pyaare
Dil ich tu meri hasrat ae tu
Asi tere utte marde ne, sande nai kyon

Hun te roz tainu chaande jaande
Tere husn ute marde assi roz
Ki kariye sajna bol?

Tere hi jhol utte nachde saare
Tere pyaar ich kariye ki hun bol?
Sajna kiya aawaan kol?

Kihnu puchha main ehsaas kithe rakhde ne, 
Galla talde, te naal kyon, hassde ne
Chhadd ditti main umeedan saari duniya ton
Ewein lokaan diyaan gallaan ich phasde ne

Nai main nai boldi aan jhooth, mere te tera ae saroor
Tere utte likhhan gaane sone jachde ne
Dilan di yaari saadi, ve dilan da naya ae kasoor
Naal rehna si zaroor, saade te iraade

Mera koi aur nahi ae dass ditta duniya nu
Jadon vi aave apne naal laave khushiyaan nu
Jadon vi door jaave, jaan saadi kad jaave
Sajna ae tere kol wasna ae chaave

Muskura ke le liti ae saadi zimmedaari
Nai main nai kiti kadi vi tere ton badgumaani
Tu mera yaar si, dil aasman paar si
Ae do dilan da pyaar si oh
Pyaar na si kaaghazi par

Meri khwaahish ae tu meri hasrat tu
Asi tere utte marde ne mande nai kyon

Hun te roz tainu chaande jaande
Tere husn ute marde asi roz
Ki kariye sajna bol

Tere hi jhol ute nachde saare
Tere pyaar ich kariye ki
Hun bol, sajna kiya aavaan kol

Tere te main vaari jaavaan
Tere gun gaavaan main
Tere bin jee lagda nai ae
Bas tainu chaavaan main
Hun raawaan mod

Hun te roz tainu chaande jaande
Tere husn ute marde asi roz
Ki kariye sajna bol?

Tere hi jhol ute nachde saare
Tere pyaar ich kariye ki hun bol?
Sajna kiya aavaan kol?`
    },
    {
        // 13
    songName:"sapna jahan",
    filepath:"./songs-mp3/sapna-jahan.mp3",
    coverpath:"./songs/Sapna-Jahan.png",
    lyrics:`Sapna jahan dastak na de
Chaukhat thi woh aankhein meri
Baaton se thi tadaad mein
Khamoshiyan zyaada meri
Jabse pade tere kadam
Chalne lagi duniya meri

Mere dil mein jagah Khuda ki khaali thi
Dekha wahan pe aaj tera chehra hai
Main bhatakta huaa sa ek baadal hoon
Jo tere aasmaan pe aake thehra hai

Tu rooh hai toh main kaaya banu
Taa-umr main tera saaya banu
Keh de toh ban jaaun bairaag main
Kehde toh main teri maaya banu
Tu saaz hai, main ragini
Tu raat hai, main chandni

Mere dil mein jagah Khuda ki khali thi
Dekha wahan pe aaj tera chehra hai
Main bhatakta huaa sa ek baadal hoon
Jo tere aasmaan pe aake thehra hai

Hum pe sitaaron ka ehsaan ho
Poora, adhoora har armaan ho
Ek dusre se jo baandhe humein
Baahon mein nanhi si ik jaan ho
Aabaad ho chota sa ghar
Lag na sake kisi ke nazar

Mere dil mein jagah Khuda ki khaali thi
Dekha wahan pe aaj tera chehra hai
Main bhatakta huaa sa ek badal hoon
Jo tere aasmaan pe aake thehra hai`
    },
    {
        // 14
    songName:"tu kisi rail si",
    filepath:"./songs-mp3/Rail Si -Masan.mp3",
    coverpath:"./songs/Masan.png",
    lyrics:`Tu kisi rail si guzarti hai
Tu kisi rail si guzarti hai
Main kisi pull sa.. thartharata hoon
Tu bhale ratti bhar na sunti hai
Main tera naam budbudata hoon
Kisi lambe safar ki raaton mein
Tujhe alaav sa jalaata hoon
Tu kisi rail si guzarti hai
Main kisi pull sa.. thartharata hoon

Kaath ke taale hai
Aankh pe daale hai
Unmein isharon ki chabiyaan laga (x2)

Raat jo baaqi hain
Shaam se taaki hain
Neeyat mein thodi…
Neeyat mein thodi kharabiyaan lagaa
Kharabiyaan lagaa

Main hoon paani ke bulbule jaisa
Tujhe sochun toh phoot jaata hoon

Tu kisi rail si guzarti hai
Main kisi pull sa.. thartharata hoon (x2)

Thartharata hoon…
Thartharata hoon…`
    },
    {
        // 15
    songName:"baareshein",
    filepath:"./songs-mp3/Baareshein.mp3",
    coverpath:"./songs/Baarishein.png",
    lyrics:`Haule se, dheeme se
Mujhko baahon mein bhar lo na tum
Narm si sanson mai
Mujhko aahon mai bhar lo na tum

Sun zara, mere paas aa
Ab baithe hain hum bhi yahan
Dil ke darmiyaan
Baarishein hain, baarishein hain
Teri hi baaton pe maine saja li hai duniya yahan
Dil ke darmiyaan
Baarishein hain, baarishein

Ab tu aati hai, bulati hai
Bistar se yoon girati hai
Ke soun mai baahon mein bus teri
Haan, jab baarishein barasti hain
Pagal jaise thirakti hain
Tum jaisi ho bus waisi hi raho

Ab tere bina yahan meri saansein
Jaise bina nindiya ki raatein hain toh
Aur tu hi mere dil ki raza hai
Tere bina dil bhi khafa hai toh
Teri aankhon ka kajal na faile ab kabhi bhi
Tujhe itna pyaar doon, haan
Teri khushiyon ki khatir yeh duniya main meri
Ek pal mein waar doon main

Ab bikhri teri ye zulfon se aankhein teri jab dikhti hain
Dikhta hai mujhe woh aasmaan
Ki kholun pankh main mere, ud jaaun main, kho jaaun main
Iss aasmaan main patangon ki tarha, haan`
    },
    {
        // 16
    songName:"ishqa ve",
    filepath:"./songs-mp3/Ishqa-Ve.mp3",
    coverpath:"./songs/Ishqa-Ve.png",
    lyrics:`Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu
Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu
Takkde Aan Jihnu Oh Takkda Nai Saanu
Takkde Aan Jihnu Oh Takkda Nai Saanu

Phirde Aan Jihnu Khayaalan Ch Sambhi
Phirde Aan Jihnu Khayaalan Ch Sambhi
Nazran De Vich Vi Oh Rakhda Nai Saanu

Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu
Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu
Takkde Aan Jihnu Oh Takkda Nai Saanu
Takkde Aan Jihnu Oh Takkda Nai Saanu

Hunda Ae Sajjan Jo Saahan Ton Zyada
Hunda Ae Sajjan Jo Saahan Ton Zyada
Mangde Aan Jihnu Duaavan Ton Zyada
Mangde Aan Jihnu Duaavan Ton Zyada

Manzil Nai Pher Othe Raahvan Ton Zyada
Manzil Nai Pher Othe Raahvan Ton Zyada
Raahan Ch Diggeyan Nu Chakkda Nai Saanu

Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu
Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu
Takkde Aan Jihnu Oh Takkda Nai Saanu
Takkde Aan Jihnu Oh Takkda Nai Saanu

Dil Di Je Tainu Sunaava Nai Sunda
Dil Di Je Tainu Sunaava Nai Sunda

Hauke Nai Sunda Tu Haavan Nai Sunda
Hauke Nai Sunda Tu Haavan Nai Sunda

Sajjan Layi Kariyaan Duaavan Sunda
Sajjan Layi Kariyaan Duaavan Sunda
Te Apna Banaake Vi Rakhda Nai Saanu

Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu
Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu
Takkde Aan Jihnu Oh Takkda Nai Saanu
Takkde Aan Jihnu Oh Takkda Nai Saanu

Momin Na Chhadde Tu Hindu Na Chhadde
Momin Na Chhadde Tu Hindu Na Chhadde
Langheya Ae Dharmaan Te Zaataan Ton Agge
Langheya Ae Dharmaan Te Zaataan Ton Agge

Ranjhe Banaye Te Majnu Ne Thagge
Ranjhe Banaye Te Majnu Ne Thagge
Lagda Tu Saade Vi Vassda Nai Saanu

Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu
Ishqa Ve Chhaddeya Tu Kakh Da Nai Saanu`
    },
    {
        // 17
    songName:"nit khair",
    filepath:"./songs-mp3/Nit-Khair.mp3",
    coverpath:"./songs/Nit-Khair.png",
    lyrics:`(Nit khair manga
Nit khair manga
Nit khair manga sohneya main teri
Duaa na koi…)

Akh meri hass deve jadon tenu takk da
Jaan ton vi zyada tu paas mainu lagda

Mere khali hathon ko hai tohfa tu Rab da
Tera jaise hor koi ho hi nahi sakda

Mere sajdon ko saathi
Ik tera dar kaafi
Khuda na koi mainu hor mangda

Nit khair manga…
Oh nit khair manga sohneya main teri
Duaa na koi hor mangda
Duaa na koi hor mangda
Nit khair manga sohneya main teri
Duaa na koi hor mangda
Duaa na koi hor mangda

Bikhra hua tha kaanch ke jaisa
Chhu liya tune toh main sanwar gaya
Aa…

Umar mein usko ginta nahi main
Tere bina jo waqt guzar gaya
Jachta nahi hai rang hor koi mainu
Jabse main yaara tere rang rangda…

Nit khair manga…
Nit khair manga sohneya main teri
Duaa na koi hor mangda
Duaa na koi hor mangda
Nit khair manga sohneya main teri
Duaa na koi…
Duaa na koi hor mangda

NiSa ReSa Re NiSa Re…
NiSa ReGa Re SaRe NiSa Re…

O re diljaniya jind meri tujhse
Tere sahaare saans hai meri
Baadal jaisa pyaar hai tera
Saagar jaisi pyaas hai meri
Chadh gayi mainu tere ishq di faqeeri
Teri galliyon mein mera dil lagda

Nit khair manga…
Nit khair manga sohneya main teri
Duaa na koi hor mangda
Duaa na koi hor mangda
Nit khair manga sohneya main teri
Duaa na koi…
Duaa na koi hor mangda
Aa.....`
    },
    {
        // 18
    songName:"jhoom",
    filepath:"./songs-mp3/jhoom.mp3",
    coverpath:"./songs/Jhoom.png",
    lyrics:`O ho.. ho..
Oh miyaan.. Oh miyaan..
O ho ho
Maine tujhe dekha hanste huve gaalon me
Bezar khayalo me, husn ke hawaalo me
Soni ke baalon me, morni ki chaalo me
Matti ke pyaalo me, peetal ke thaalo me

Jitni tu milti jaaye, utni lage thodi thodi
Jab bhi tu le angdai aake mere ori

Toh dil jhoom jhoom chale
Jhoom jhoom chale soneya soneya
Dil jhoom jhoom chale
Jhoom jhoom chale soneya soneya

Bachpan ke saawan beete
Ladakpan ki beeti dhaara
Jab mud ke dekha peeche
To chhoota jeevan saara
Phir bhi teri aas pakad ke
Har ek din guzara hai
Teri ek nazar pe meri
Saans ka sahara hai
Tum se binti karat hoon
Dil todo na humaara

Do matvaare naina hamaare
Teri hi raah takat hain pyaare
Man ki mere preet bujha re
Tan ki mere sej sajaa re
Sochat kya re, hum to haare
Baar baar har daar daar
Har dagar karun tera intezaar aa…

Ke dil jhoom jhoom chale
Jhoom jhoom chale soneya, soneya
Dil jhoom jhoom chale
Jhoom jhoom chale soneya, soneya

ho ho ho.. maine tujhe dekha
Subaho ke ujaalo me
Nadiya me naalo me
Lamho me saalon me
Pyaar karne waalo me
Junoon me jiyaalo me
Ishq ke malaalo me
Zinda misaalo me
Jitni tu milti jaaye
Utni lage thodi thodi
Zindagi ki dori maine piya sang jodi

Ke dil jhoom jhoom chale
Jhoom jhoom chale soneya, soneya
Dil jhoom jhoom chale
Jhoom jhoom chale soneya, soneya

Dil jhoom jhoom chale, jhoom jhoom chale
jhoom jhoom chale, jhoom jhoom
Dil jhoom jhoom chale
Jhoom jhoom chale soneya, soneya

Dil jhoom jhoom…`
    },
    {
        // 19
    songName:"mere nishan",
    filepath:"./songs-mp3/Mere Nishan.mp3",
    coverpath:"./songs/Mere-Nishan.png",
    lyrics:`Vow…Vow..Vow... Vo
Nara.. Naa.. NAaaa.
Naaaa..Naaa.. Na
Na Ra Na Ra Ne Na Ra Na
Na Ra Na Ra Na Nana
Nara Nara Nara Nara
Nara Ne...

Jhuki Teri Palkon Mein
Mil Jaaye Mujhe Panaah
Palke Gire Aasu Bhari
Reh Jaaye Mere Nishaan


Tute Dil Ki Mat Kar
Tu Fikar Mere Hamnawa
Pyaar Du Tujhko Is Kadar
Reh Jaaye Mere Nishaan


Mere Nishaan..Mere Nishaan
Mere Nishaan..Mere Nishaan
Mere Nishaan..Mere Nishaan

Mere Nishaan..

(Music....)


Ghakh Me Mil Jau Me
Jaise Ke Ek Lamha
Aa Lag Ja Sine Se
Ban Ja Mere Rehnuma

Dekhta Hu Sapne Tere
Sun Le Meri Jaane Jaan
Khwab Ye Sach Ho Jaaye
Agar Khuda Ho Meherbaa


Mere Nishaan..Mere Nishaan
Mere Nishaan..Mere Nishaan..aan
Mere Nishaan..Mere Nishaan
Mere Nishaan…aan
Mere Nishaan

Na Ra Na Ra Ne Na Ra Na
Na Ra Na Ra Na Nana
Nara Nara Nara Nara
Nara Ne...


Sajda Me Tere Sar Jhukta Bas
Chahat Ki Hai Ye Dastan
Ruth Gaya Mere Rab Jo Mujhse
To Mita De Vo Mere Nishaan

Mere Nishaan..Mere Nishaan..
Mere Nishaan..Mere Nishaan..
Mere Nishaan..Mere Nishaan..
Mere Nishaan..haaannn

Mere Nishaan..aaan

Mere Nishaan..Mere Nishaan..aaan
Mere Nishaan..Nishaan Nishaan
Mere Nishaan..Nishaan Nishaan
Mere Nishaan..Nishaan Nishaan
Mere Nishaan..`
    },
    {
        // 20
    songName:"alag aasmaan",
    filepath:"./songs-mp3/Anuv Jain - ALAG AASMAAN (a song on the ukulele).mp3",
    coverpath:"./songs/Alag-Aasmaan.png",
    lyrics:`Nayi nahi hain, yeh baatein wahi
Phir iss mod par hum mile hain
Na jaane ab milenge hum kabhi
Toh ruk jaao ek pal yahaan pe
Yeh narm chaadron ki silwatein
Tujhe abhi bula rahi hain
"Na jaao door inse, " yeh kahein
Yeh sukoon kahaan pe hai haasil?
Dil ko mere yeh hai pata
Ki meelon ka yeh faasla hai
Alag aasmaan bhi hai toh kya?
Yeh dil na maane
Yeh gaadiyon ki aisi daud sa
Tera bhi dil daudta hai
Haan, jaa rahe ho door tum toh kya?
Main hi toh dil ka musafir
Toh ek baar phir tu hans ke zara
Dekh le meri in aankhon mein
Main qaid kar loon har woh pal tera
Teri yeh baatein jo hain
Toh aur kya hain yeh baatein, bata?
Kyun ab din bhi dhalta nahi yeh na ho toh?
Tum ude jaa rahe yeh aasmaan mein
Khidkiyon se dekh tu pahaadon ko
Yoon chhote se lage
Hain kitne bade jo hon saamne
Door jo hain khade
Unhein bhi yeh humari zindagi
Yoon titliyon si chhoti-chhoti si lage
Hai kitni badi nahi jaante
Khaali ghar tera
Yeh chaabiyon ki goonj aise
Tujhe dara rahi, tu darna nahi
Main hoon yahin par
Ab alag aasmaan hai
Aur hai zameen bhi kuch alag si
Par miloge jab kabhi toh dekhna tabhi
Main kuch alag nahi`
    },
    {
        //21
    songName:"rootha kyun",
    filepath:"./songs-mp3/Rootha Kyun Full Song  1920 LONDON  Sharman Joshi, Meera Chopra  Shaarib, Toshi  Mohit Chauhan.mp3",
    coverpath:"./songs/Rootha-Kyun.png",
    lyrics:`Rootha kyun mujhse itna khafaa na hona itna tu
Saansein bhi tere bina main na loon
Jaane kyun bewajah

O ho... ehne de
Teri mohabbaton mein rehne de
Tere khwabon mein mujhe behne de
Aisa hone de tu zara

Main to tere sab ki subah hoon na
Hathon ki lakiron mein likha hoon na 
Main to tere sab ki subah hoon na
Hathon ki lakiron mein likha hoon na

Rehta hai mere honthon pe tere hontho ka nishan
Hota hai tanha raato mein tere hone ka gumaan
Mujhe mehsoos hua hai aisa laga hai
Tumne chhua hai na

Main to tere sab ki subah hoon na
Hathon ki lakiron mein likha hoon na 
Main to tere sab ki subah hoon na
Hathon ki lakiron mein likha hoon na

Hmm... ho...

Laazmi hai, jaise saanson ke liye laazi hai hawa
Waise hi mere liye jaroori hai hona tera
Tere mere pyaar ka rista sadiyon rahega
Sadiyon raha hai na

Main to tere sab ki subah hoon na
Hathon ki lakiron mein likhi hoon na
Main to tere sab ki subah hoon na
Hathon ki lakiron mein likhi hoon na
`
    },
    {
        //22
    songName:"arz kiya hai",
    filepath:"./songs-mp3/Anuv Jain X Lost Stories - Arz Kiya Hai (Official Video)  Coke Studio Bharat.mp3",
    coverpath:"./songs/Arz-Kiya-Hai.png",
    lyrics:`Kayar jo the, vo shayar bane
Ab kya kya karein ye ishq mein
Na kehte the kuch jo, lage khoj mein
Kya lafz chune?

Naye aashiq ye, ishq mein tere hain faiz bane
Arz kiya hai
Humne bhi likha kuch tere baare mein

Aise tu lage ki gulaab hai
Aur aise tu lage ki gulaab hai
Aur aise tu lage ki gulaab hai
Baghon mein dil ke
Khilke in fizaaon mein chhaye ho haaye

Aur vaise hum to tere hi gulaam hain
Aur vaise hum to tere hi gulaam hain
Baadshah dil ke, teri baazi mein
Jo tu chahe to…

Doobe dilon ki kya nau banu?
Main khud tar paaoon na aankhon mein
Shayar ki fitrat mein hi doobna
Main kya hi ladu toofanon se

Ishq mein tere hain faiz bane
Arz kiya hai
Humne bhi likha kuch tere baare mein

Haathon ko sambhaale mere haathon mein
Kaise haathon ko sambhaale mere haathon mein?
Jab tak neend na aaye in lakeeron mein
Baatein hon…

Haan…

Sabne to sab keh diya hai
Kya hi kahoon jo abhi bhi ankaha hai?
Main haay…

Na Mirza, na Mir
Na maahir, na zaahir
Karoon kuch naya main?
Haay… par…

Jo bhi likha hai, jiya hai
Haan jiya hai

Aise, aise, aise, kaise, vaise, jaise
Jaise main padhun mere dil mein jo
Meri aankhen bhi padhein teri aankhon ko

Kya ye mehfil mein baithe?
Ya uthe daud jaane ko? haaye

Teri aankhon mein taarifon ki talaash hai
Meri mehfil tere jaane se veeraan hai
Main bas shayar bana hoon
Sirf tu sunne aaye to…

Shayad shayar bana hoon
Sirf tu sunne aaye to`
    },
    {
        //23
    songName:"maand",
    filepath:"./songs-mp3/Bayaan, Hasan Raheem, Rovalio - Maand (Lyrics).mp3",
    coverpath:"./songs/Maand.jpg",
    lyrics:`Mile toh tum kabhi nahi
Meri hasrat kyun bhadkaai be-wajah?
Ke tum bina jiye agar
Hua kaise naa ye jeena raaigan?


Dariya mere dil ka, ye behta naa
Dukhi dil ki sada, kuch ye kehta naa
Iski khaamoshi ki tu wajah hai naa
Dil se tang aa gaya, yahi saza hai naa

"Ulfaton mein nahi koi paimana"
Mere apnon ka mujhse ye kehna tha
Surmayi teri aankhon mein beh jaana
Kya pata, tere gham mein hi rehna tha

Mmm, rehna tha


Kyun yun sehte-sehte dil ko
gham khaa chuka, meri jaan?
Kyun yun rehte-rehte
dikhe naa koi disha?
Kyun yun sehte-sehte dil ko
gham khaa chuka, meri jaan?
Kyun yun rehte-rehte
dikhe naa koi disha?


Jo tu ne nahi toh aisa main chehra
ke jiski khoobsurti maand padi ho
Aisa main darya, jo behna naa chaahe
Jo tu ne nahi toh aisa main chehra
ke jiski khoobsurti maand padi ho
Aisa main darya, jo behna naa chaahe

Dariya mere dil ka, ye behta naa
Dukhi dil ki sada, kuch ye kehta naa
Iski khaamoshi ki tu wajah hai naa
Dil se tang aa gaya, yahi saza hai naa

"Ulfaton mein nahi koi paimana"
Mere apnon ka mujhse ye kehna tha
Surmayi teri aankhon mein beh jaana
Kya pata, tere gham mein hi rehna tha


Kya pata, tere gham mein hi rehna tha
Aisa main dariya, jo behna naa chaahe`
    },
    {
        //24
    songName:"by my side",
    filepath:"./songs-mp3/AP Dhillon & Shinda Kahlon - By My Side (Official Audio).mp3",
    coverpath:"./songs/By-My-Side.png",
    lyrics:`Jado jagah har saver
Tee sova har rat
Menu har saah nal ave teri yaad
Din change lagde
Te change ne halat
Jado kole tu hove

Tenu lava dekh
Ki Dhup barsaat
Hor sab chad bas tera manga saath
Ee dil vi ee tera te mere jazbaat
Bas kole tu h

Teri tasveer nu dekha me rauz
Par eh te adat purani meri
Supne cho aja nikal samne
Karde jo poori jubani meri
Tere ne zindagi dekhi he jo
Ik te eh soch niani meri
Tere te shuru he tere te khatam
He te bas eni kahani meri

Na murhna aa me
Ne chune tere raah
Ni tenu Shaid sun k eh lagu afwaah
Ni Pyar hi ee vada mera pyar he nafa
Ni bus kole tu hove

Jado jagah har saver
Tee sova har rat
Menu har saah nal ave teri yaad
Din change lagde
Te change ne halat
Jado kole tu hove

Tenu lava dekh
Ki Dhup barsaat
Hor sab chad bas tera manga saath
Ee dil vi ee tera te mere jazbaat
Bas kole tu h

Pal pal vi lagde ne bete jo saal
Bin tere aukha ee langda sma
Bukh na lage na lagdi piyas
Loki ne milde me karda mna
Gallan ne karnia tere nal me
Reha me chup eh hoiya jama
Tera na hona na hunda ee seh
Bin tere jina na chava lamha

Akha kara band
Te sundi awaz
Gal meri man thorha kar le lihaz
Je Aan kite cherhe mere dil vale saaz
Bas tu hi tu hove

Jado jagah har saver
Tee sova har rat
Menu har saah nal ave teri yaad
Din change lagde
Te change ne halat
Jado kole tu hove

Tenu lava dekh
Ki Dhup barsaat
Hor sab chad bas tera manga saath
Ee dil vi ee tera te mere jazbaat
Bas kole tu h`
    },
    {
        //25
    songName:"chal tere ishq mein",
    filepath:"./songs-mp3/Chal Tere Ishq Mein (Female)- Gadar 2 _Utkarsh Sharma,Simratt Kaur _Vishal M,Mithoon,Neeti,Sayeed (1).mp3",
    coverpath:"./songs/Chal-Tere-Ishq-Me.png",
    lyrics:``
    },
    {
        //26
    songName:"jale2",
    filepath:"./songs-mp3/Jale 2 (Official Video) _ Sapna Choudhary,Aman Jaji,Sahil Sandhu _ Shiva _ New Haryanvi Song 2023.mp3",
    coverpath:"./songs/Jale2.png",

    lyrics:`Main tanne su pyari, tu pyaara mera
    Main teri giri, tu chhuara mera
    Main tanne su pyari, tu pyaara mera
    Main teri giri, tu chhuara mera

    Jee to mera issa kare
    Haye janu kache ne khaa lyu tane

    Haye re tu chhati ke laage rahiye
    Tabeej bana lyu tane
    Haan chhati ke laage rahiye
    Tabeej bana lyu tane

    Main kaangne mein haari thi pehlya piya
    Jitungi jaroor pyaar aale khel mein
    Ho tu bhi andy lagge chhail mere sang mein
    Main bhi laagu gacch, sun tere gail me

    Ho banake kajal jale
    Aakhya mein sajaa lyu tane

    Haye re tu chhati ke laage rahiye
    Tabeej bana lyu tane
    Haan chhati ke laage rahiye
    Tabeej bana lyu tane

    Bohta ke kaaljya mein laage aag si
    Ya teri meri jodi unique se kati
    2 jism, ek jaan se hum dono re
    Manne teri baat piya theek se kati

    Mukesh jaji mere balma
    Aaja gal te main laa lyu tane

    Haye re tu chhati ke laage rahiye
    Tabeej bana lyu tane
    Haan chhati ke laage rahiye
    Tabeej bana lyu tane`,
    },
    {
        //27
    songName:"hue bechain",
    filepath:"./songs-mp3/Hue Bechain _ Ek Haseena Thi Ek Deewana Tha _ Music - Nadeem, Palak Muchhal _ Yasser Desai.mp3",
    coverpath:"./songs/Hue-Bechain.png",
    lyrics:`Ahmmm… Hmmm...

Hue Bechain Pehli Baar
Humne Raaz Ye Jana
Mohabbat Mein Koi Aashiq
Kyu Ban Jata Hai Deewana

Agar Ikrar Ho Jaye
Kisi Se Pyar Ho Jaye
Bada Mushkil Hota Hai
Dil Ko Samjhana


Hue Bechain Pehli Baar
Humne Raaz Ye Jana
Mohabbat Mein Koi Aashiq
Kyu Ban Jata Hai Deewana


~~ MuSiC ~~
Upload By @MuSiC_VeeR_SHiN
==============


Tassabur Ke Hasee Lamhe
Tera Ehsaas Karte Hai
Tera Jab Zikr Aata Hai
To Milne Ko Tadapte Hai

Humara Haal Na Pucho
Ye Duniya Bhool Baithe Hai
Chale Aao Tumhare Bin
Na Marte Hai Na Jeete Hai


Suno Achha Nahi Hota
Kisiko Aise Tadpana
Mohabbat Mein Koi Aashiq
Kyu Ban Jata Hai Deewana

Agar Ye Pyar Ho Jaye
Kisipe Dil Ye Aajaye
Bada Mushkil Hota Hai
Dil Ko Samjhana

Hue Bechain Pehli Baar
Humne Raaz Ye Jana…`
    },
];

// fetching HTML button to js

let loopBtn=document.getElementById("loopBtn");
//coverpath
let masterCover=document.getElementById("masterCover");

// Next button logic

function toggleNext(){
    songIndex=(songIndex+1)%songs.length;

    myAudio.src=songs[songIndex].filepath;
    masterCover.src=songs[songIndex].coverpath;
    myAudio.play();

    updateLyricsDisplay();

    playIcon.style.display="none";
    pauseIcon.style.display="block";
}

// Prev button logic

function togglePrev(){
    songIndex=(songIndex-1+songs.length)%songs.length;

    myAudio.src=songs[songIndex].filepath;
    masterCover.src=songs[songIndex].coverpath;
    myAudio.play();

    playIcon.style.display="none";
    pauseIcon.style.display="block";
}
// looping song  logic

let loopPath=loopBtn.querySelector("path");
function toggleLoop(){
    if(myAudio.loop){
        myAudio.loop=false;
        loopPath.style.color="white";
        console.log("Loop Stopped!");
    }
    else{
        myAudio.loop=true;
        loopPath.style.color="#1ed760";
        console.log("Loop Initiated");
    }
}

// to auto play next song
myAudio.addEventListener('ended', toggleNext);

// time function
function formatTime(seconds){
    let min=Math.floor(seconds/60);
    let sec=Math.floor(seconds%60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}:${sec}`;
}

let progressBar=document.getElementById("progressBar");
let currentTimeEl=document.getElementById("currentTime");
let totalTimeEl=document.getElementById("totalTime");

myAudio.addEventListener('timeupdate',()=>{
    let progress=parseInt((myAudio.currentTime/myAudio.duration)*100);
    progressBar.value=progress;
    currentTimeEl.innerText=formatTime(myAudio.currentTime);
});

myAudio.addEventListener('loadedmetadata',()=>{
    totalTimeEl.innerText=formatTime(myAudio.duration);
});

progressBar.addEventListener('change',()=>{
    myAudio.currentTime=(progressBar.value*myAudio.duration)/100;
});

// volume slider

let volumeSlider=document.getElementById("volumeSlider");

volumeSlider.addEventListener('input',()=>{
    myAudio.volume=volumeSlider.value/100;
});

// making card clickable 
function playSongFromCard(index){
    songIndex=index;

    myAudio.src=songs[songIndex].filepath;
    masterCover.src=songs[songIndex].coverpath;

    myAudio.play();

    updateLyricsDisplay();
    playIcon.style.display="none";
    pauseIcon.style.display="block";
}

//making searchBar operational

// let searchStatus=document.querySelectorAll(".song-card",".quick-access-card");
let searchBar=document.getElementById("searchBar");

if(!searchBar){
    console.error("Error:search bar HTML me nhi mila ");
}
else{
searchBar.addEventListener('keydown',(e)=>{
    console.log("key dabayi gayi:",e.key);
    if(e.key ==='Enter'){
        e.preventDefault();
        let query=searchBar.value.toLowerCase().trim();

        console.log("dhoondh rahe hain",query);
        if(query==="") return ;

        let foundIndex=songs.findIndex((song)=>{
            let nameToCheck=song.songName?song.songName.toLowerCase():song.filepath.toLowerCase();
            return nameToCheck.includes(query);
        });

        console.log("ganna is index pe mila hai:",foundIndex);
        if(foundIndex!==-1){
            songIndex=foundIndex;

            myAudio.src=songs[songIndex].filepath;
            masterCover.src=songs[songIndex].coverpath;

            console.log("audio ko play hone ka command mila");

            myAudio.play().then(()=>{
                console.log("ganna mast chal rha hai");
            }).catch((err)=>{
                console.error("browser ne ganna block krdiya:",err);
            });

            playIcon.style.display="none";
            pauseIcon.style.display="block";

            // searchStatus.style.display="none";
            searchBar.value="";
            console.log("Ganna mil gaya aur chal rha hai:");
        }
        else{
            alert("aree bhai ye gana nhi hai");
        }
    }
});
}

// speaker mute button

let muteBtn=document.getElementById("muteBtn");
let lastVolume=1;
let isMuted=false;

muteBtn.addEventListener('click',()=>{
    if(!isMuted){
        lastVolume=myAudio.volume;
        myAudio.volume=0;
        volumeSlider.value=0;
        isMuted=true;

        muteBtn.style.opacity="0.5";
    }
    else{
        myAudio.volume=lastVolume;
        volumeSlider.value=lastVolume*100;
        isMuted=false;

        muteBtn.style.opacity="1";
    }
});

// queue and lyrics function

const micBtn=document.getElementById("micBtn");
const queueBtn=document.getElementById("queueBtn");
const lyricsPanel=document.getElementById("lyricsPanel");
const queuePanel=document.getElementById("queuePanel");

micBtn.addEventListener("click",()=>{
    lyricsPanel.classList.toggle("show");
    queuePanel.classList.remove("show");

    micBtn.classList.toggle("active-btn");
    queueBtn.classList.remove("active-btn");
});

queueBtn.addEventListener("click",()=>{
    queuePanel.classList.toggle("show");
    lyricsPanel.classList.remove("show");

    micBtn.classList.remove("active-btn");
    queueBtn.classList.toggle("active-btn");
});

// function for lyrics 
const lyricsContent=document.getElementById("lyricsContent");

function updateLyricsDisplay(){
    let currentSongLyrics=songs[songIndex].lyrics;

    if(currentSongLyrics){
        lyricsContent.innerText=currentSongLyrics;
    }
    else{
        lyricsContent.innerText="Is gaane ke lyrics abhi add nhi hue hai!🎶";
    }
}


