'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Authors', [{
                name: 'Пауло Коэльо',
                birth: '01.01.1947',
                picture: '/uploads/authorImage/PauloCoelho.png'
            },
            {
                name: 'Илья Ильф',
                birth: '01.01.1897',
                death: '01.01.1937',
                picture: '/uploads/authorImage/IlfPetrov.png'
            },
            {
                name: 'Евгений Петров',
                birth: '01.01.1903',
                death: '01.01.1942',
                picture: '/uploads/authorImage/IlfPetrov.png'
            },
            {
                name: 'Джордж Оруэлл',
                birth: '01.01.1903',
                death: '01.01.1950',
                picture: '/uploads/authorImage/GeorgeOrwell.png'
            },
            {
                name: 'Рэй Брэдбери',
                birth: '01.01.1920',
                death: '01.01.2012',
                picture: '/uploads/authorImage/RayBradbury.png'
            },
            {
                name: 'Лина Мур',
                birth: '01.01.1990',
                picture: '/uploads/authorImage/LinaMoore.png'
            },
            {
                name: 'Дуглас Адамс',
                birth: '01.01.1952',
                death: '01.01.2001',
                picture: '/uploads/authorImage/DouglasAdams.png'
            },
            {
                name: 'Вальтер Скотт',
                birth: '01.01.1771',
                death: '01.01.1832',
                picture: '/uploads/authorImage/WalterScott.png'
            },
            {
                name: 'Курбан Саид',
                birth: '01.01.1887',
                death: '01.01.1943',
                picture: '/uploads/authorImage/KurbanSaid.png'
            },
            {
                name: 'Льюис Кэрролл',
                birth: '01.01.1832',
                death: '01.01.1898',
                picture: '/uploads/authorImage/LewisCarroll.png'
            },
            {
                name: 'Жоржи Амаду',
                birth: '01.01.1912',
                death: '01.01.2001',
                picture: '/uploads/authorImage/GeorgesAmadou.png'
            },
            {
                name: 'Джеймс Роллинс',
                birth: '01.01.1961',
                picture: '/uploads/authorImage/JamesRollins.png'
            },
            {
                name: 'Майкл Ондатже',
                birth: '01.01.1943',
                picture: '/uploads/authorImage/MaiklOndatje.png'
            },
            {
                name: 'Лев Толстой',
                birth: '01.01.1862',
                death: '01.01.1910',
                picture: '/uploads/authorImage/LevTolstoy.png'
            },
            {
                name: 'Айн Рэнд',
                birth: '01.01.1905',
                death: '01.01.1982',
                picture: '/uploads/authorImage/AynRand.png'
            },
            {
                name: 'Стивен Кинг',
                birth: '01.01.1947',
                picture: '/uploads/authorImage/StephenKing.png'
            },
            {
                name: 'Дина Рубина',
                birth: '01.01.1953',
                picture: '/uploads/authorImage/DinaRubina.png'
            },
            {
                name: 'Гавриил Троепольский',
                birth: '01.01.1905',
                death: '01.01.1995',
                picture: '/uploads/authorImage/GabrielTroepolsky.png'
            },
            {
                name: 'Джек Лондон',
                birth: '01.01.1876',
                death: '01.01.1916',
                picture: '/uploads/authorImage/JackLondon.png'
            },
            {
                name: 'Джанет Фитч',
                birth: '01.01.1955',
                picture: '/uploads/authorImage/JanetFitch.png'
            },
            {
                name: 'Артур Дойль',
                birth: '01.01.1859',
                death: '01.01.1930',
                picture: '/uploads/authorImage/ArturDoyl.png'
            },
            {
                name: 'Чингиз Айтматов',
                birth: '01.01.1928',
                death: '01.01.2008',
                picture: '/uploads/authorImage/ChingizAitmatov.png'
            },
            {
                name: 'Данте Алигьери',
                birth: '01.01.1265',
                death: '01.01.1321',
                picture: '/uploads/authorImage/DanteAlighieri.png'
            },
            {
                name: 'Курт Воннегут',
                birth: '01.01.1922',
                death: '01.01.2007',
                picture: '/uploads/authorImage/KurtVonnegut.png'
            },
            {
                name: 'Чак Паланик',
                birth: '01.01.1962',
                picture: '/uploads/authorImage/ChuckPalahniuk.png'
            },
            {
                name: 'Уильям Моэм',
                birth: '01.01.1874',
                death: '01.01.1965',
                picture: '/uploads/authorImage/SomersetMaugham.png'
            },
            {
                name: 'Сэмюэл Беккет',
                birth: '01.01.1906',
                death: '01.01.1989',
                picture: '/uploads/authorImage/SamuelBeckett.png'
            },
            {
                name: 'Хуан Галан',
                birth: '01.01.1948',
                picture: '/uploads/authorImage/JuanGalan.png'
            },
            {
                name: 'Фрэнсис Фицджеральд',
                birth: '01.01.1896',
                death: '01.01.1940',
                picture: '/uploads/authorImage/FrancisFitzgerald.png'
            },
            {
                name: 'Аркадий Вайнер',
                birth: '01.01.1931',
                death: '01.01.2005',
                picture: '/uploads/authorImage/brothersWeiner.png'
            },
            {
                name: 'Георгий Вайнер',
                birth: '01.01.1938',
                death: '01.01.2009',
                picture: '/uploads/authorImage/brothersWeiner.png'
            },
            {
                name: 'Джон Толкин',
                birth: '01.01.1892',
                death: '01.01.1973',
                picture: '/uploads/authorImage/JohnTolkien.png'
            },
            {
                name: 'Чарлз Дахигг',
                birth: '01.01.1974',
                picture: '/uploads/authorImage/CharlesDahigg.png'
            },
            {
                name: 'Эрих Ремарк',
                birth: '01.01.1898',
                death: '01.01.1970',
                picture: '/uploads/authorImage/ErichRemarque.png'
            },
            {
                name: 'Александр Волков',
                birth: '01.01.1891',
                death: '01.01.1977',
                picture: '/uploads/authorImage/AlexanderVolkov.png'
            },
            {
                name: 'Джен Синсеро',
                birth: '01.01.1965',
                picture: '/uploads/authorImage/JenCincero.png'
            },
            {
                name: 'Фредрик Бакман',
                birth: '01.01.1981',
                picture: '/uploads/authorImage/FredrickBuckman.png'
            },
            {
                name: 'Янн Мартел',
                birth: '01.01.1963',
                picture: '/uploads/authorImage/YannMartel.png'
            },
            {
                name: 'Оливер Сакс',
                birth: '01.01.1933',
                death: '01.01.2015',
                picture: '/uploads/authorImage/OliverSachs.png'
            },
            {
                name: 'Алекс Гарленд',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/AlexGarland.png'
            },
            {
                name: 'Джоан Роулинг',
                birth: '01.01.1965',
                picture: '/uploads/authorImage/JoanneRowling.png'
            },
            {
                name: 'Алексей Иванов',
                birth: '01.01.1969',
                picture: '/uploads/authorImage/AlekseyIvanov.png'
            },
            {
                name: 'Михаил Лермонтов',
                birth: '01.01.1814',
                death: '01.01.1841',
                picture: '/uploads/authorImage/MikhailLermontov.png'
            },
            {
                name: 'Елена Бочоришвили',
                birth: '01.01.1966',
                picture: '/uploads/authorImage/ElenaBochorishvili.png'
            },
            {
                name: 'Джейн Остин',
                birth: '01.01.1775',
                death: '01.01.1817',
                picture: '/uploads/authorImage/JaneAusten.png'
            },
            {
                name: 'Вальтер Мёрс',
                birth: '01.01.1957',
                picture: '/uploads/authorImage/WalterMoers.png'
            },
            {
                name: 'Ферит Памук',
                birth: '01.01.1974',
                picture: '/uploads/authorImage/FeritPamuk.png'
            },
            {
                name: 'Александр Дюма',
                birth: '01.01.1802',
                death: '01.01.1870',
                picture: '/uploads/authorImage/AlexandrDuma.png'
            },
            {
                name: 'Эмили Бронте',
                birth: '01.01.1818',
                death: '01.01.1848',
                picture: '/uploads/authorImage/EmilyBronte.png'
            },
            {
                name: 'О. Генри',
                birth: '01.01.1862',
                death: '01.01.1910',
                picture: '/uploads/authorImage/OHenry.png'
            },
            {
                name: 'Самуил Маршак',
                birth: '01.01.1887',
                death: '01.01.1964',
                picture: '/uploads/authorImage/SamuelMarshak.png'
            },
            {
                name: 'Джоджо Мойес',
                birth: '01.01.1969',
                picture: '/uploads/authorImage/JojoMoyes.png'
            },
            {
                name: 'Виктор Гюго',
                birth: '01.01.1802',
                death: '01.01.1885',
                picture: '/uploads/authorImage/VictorHugo.png'
            },
            {
                name: 'Лорен Оливер',
                birth: '01.01.1982',
                picture: '/uploads/authorImage/LorenOliver.png'
            },
            {
                name: 'Герман Гессе',
                birth: '01.01.1877',
                death: '01.01.1962',
                picture: '/uploads/authorImage/HermannHesse.png'
            },
            {
                name: 'Агата Кристи',
                birth: '01.01.1890',
                death: '01.01.1976',
                picture: '/uploads/authorImage/AgathaChristie.png'
            },
            {
                name: 'Жуль Верн',
                birth: '01.01.1828',
                death: '01.01.1905',
                picture: '/uploads/authorImage/JulesVerne.png'
            },
            {
                name: 'Шарлотта Бронте',
                birth: '01.01.1816',
                death: '01.01.1855',
                picture: '/uploads/authorImage/CharlotteBronte.png'
            },
            {
                name: 'Владимир Короткевич',
                birth: '01.01.1930',
                death: '01.01.1984',
                picture: '/uploads/authorImage/VladimirKorotkevich.png'
            },
            {
                name: 'Борис Пастернак',
                birth: '01.01.1890',
                death: '01.01.1960',
                picture: '/uploads/authorImage/BorisPasternak.png'
            },
            {
                name: 'Альберт Швейцер',
                birth: '01.01.1875',
                death: '01.01.1965',
                picture: '/uploads/authorImage/AlbertSchweitzer.png'
            },
            {
                name: 'Чеслав Милош',
                birth: '01.01.1911',
                death: '01.01.2004',
                picture: '/uploads/authorImage/CheslavMilos.png'
            },
            {
                name: 'Пол Боулз',
                birth: '01.01.1910',
                death: '01.01.1999',
                picture: '/uploads/authorImage/PaulBowles.png'
            },
            {
                name: 'Марина Москвина',
                birth: '01.01.1954',
                picture: '/uploads/authorImage/MarinaMoskvina.png'
            },
            {
                name: 'Даниэль Пейдж',
                birth: '01.01.1986',
                picture: '/uploads/authorImage/DanielPage.png'
            },
            {
                name: 'Джеймс Джойс',
                birth: '01.01.1882',
                death: '01.01.1941',
                picture: '/uploads/authorImage/JamesJoyce.png'
            },
            {
                name: 'Александр Пушкин',
                birth: '01.01.1799',
                death: '01.01.1837',
                picture: '/uploads/authorImage/AlexanderPushkin.png'
            },
            {
                name: 'Сара Джио',
                birth: '01.01.1978',
                picture: '/uploads/authorImage/SarahGio.png'
            },
            {
                name: 'Джоанн Харрис',
                birth: '01.01.1964',
                picture: '/uploads/authorImage/JoanneHarris.png'
            },
            {
                name: 'Фэнни Флэгг',
                birth: '01.01.1944',
                picture: '/uploads/authorImage/FannyFlagg.png'
            },
            {
                name: 'Джон Фаулз',
                birth: '01.01.1926',
                death: '01.01.2005',
                picture: '/uploads/authorImage/JohnFowles.png'
            },
            {
                name: 'Гюнтер Грасс',
                birth: '01.01.1927',
                death: '01.01.2015',
                picture: '/uploads/authorImage/GunterGrass.png'
            },
            {
                name: 'Даниель Дефо',
                birth: '01.01.1660',
                death: '01.01.1731',
                picture: '/uploads/authorImage/DanielDefoe.png'
            },
            {
                name: 'Майю Лассила',
                birth: '01.01.1868',
                death: '01.01.1918',
                picture: '/uploads/authorImage/MayuLassila.png'
            },
            {
                name: 'Энтони Бёрджесс',
                birth: '01.01.1917',
                death: '01.01.1993',
                picture: '/uploads/authorImage/AnthonyBurgess.png'
            },
            {
                name: 'Борис Васильев',
                birth: '01.01.1924',
                death: '01.01.2013',
                picture: '/uploads/authorImage/BorisVasiliev.png'
            },
            {
                name: 'Ишмаэль Бих',
                birth: '01.01.1980',
                picture: '/uploads/authorImage/IshmaelBih.png'
            },
            {
                name: 'Франц Кафка',
                birth: '01.01.1883',
                death: '01.01.1924',
                picture: '/uploads/authorImage/FranzKafka.png'
            },
            {
                name: 'Арчибалд Кронин',
                birth: '01.01.1896',
                death: '01.01.1981',
                picture: '/uploads/authorImage/ArchibaldCronin.png'
            },
            {
                name: 'Джаннетт Уоллс',
                birth: '01.01.1960',
                picture: '/uploads/authorImage/JannettWall.png'
            },
            {
                name: 'Дмитрий Правдин',
                birth: '01.01.1975',
                picture: '/uploads/authorImage/DmitryPravdin.png'
            },
            {
                name: 'Беатрикс Маннель',
                birth: '01.01.1961',
                picture: '/uploads/authorImage/BeatrixMannel.png'
            },
            {
                name: 'Василий Аксёнов',
                birth: '01.01.1932',
                death: '01.01.2009',
                picture: '/uploads/authorImage/VasilyAksyonov.png'
            },
            {
                name: 'Фридрих Дюрренматт',
                birth: '01.01.1921',
                death: '01.01.1990',
                picture: '/uploads/authorImage/FriedrichDurrenmatt.png'
            },
            {
                name: 'Джон Стейнбек',
                birth: '01.01.1902',
                death: '01.01.1968',
                picture: '/uploads/authorImage/JohnErns.png'
            },
            {
                name: 'Алексей Толстой',
                birth: '01.01.1883',
                death: '01.01.1945',
                picture: '/uploads/authorImage/AlexeyTolstoy.png'
            },
            {
                name: 'Джордж Мартин',
                birth: '01.01.1948',
                picture: '/uploads/authorImage/GeorgeMartin.png'
            },
            {
                name: 'Сильвия Назар',
                birth: '01.01.1947',
                picture: '/uploads/authorImage/SylviaNazar.png'
            },
            {
                name: 'Симона Элькелес',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/SimoneElkeles.png'
            },
            {
                name: 'Фёдор Достоевский',
                birth: '01.01.1821',
                death: '01.01.1881',
                picture: '/uploads/authorImage/FedorDostoevsky.png'
            },
            {
                name: 'Эрих Фромм',
                birth: '01.01.1900',
                death: '01.01.1980',
                picture: '/uploads/authorImage/ErichFromm.png'
            },
            {
                name: 'Бернар Вербер',
                birth: '01.01.1961',
                picture: '/uploads/authorImage/BernardWerber.png'
            },
            {
                name: 'Ханс Андерсен',
                birth: '01.01.1805',
                death: '01.01.1875',
                picture: '/uploads/authorImage/HansAndersen.png'
            },
            {
                name: 'Умберто Эко',
                birth: '01.01.1932',
                death: '01.01.2016',
                picture: '/uploads/authorImage/UmbertoEco.png'
            },
            {
                name: 'Иэн Макьюэн',
                birth: '01.01.1948',
                picture: '/uploads/authorImage/IanMcEwan.png'
            },
            {
                name: 'Харуки Мураками',
                birth: '01.01.1949',
                picture: '/uploads/authorImage/HarukiMurakami.png'
            },
            {
                name: 'Николай Островский',
                birth: '01.01.1904',
                death: '01.01.1936',
                picture: '/uploads/authorImage/NikolaiOstrovsky.png'
            },
            {
                name: 'Владимир Набоков',
                birth: '01.01.1899',
                death: '01.01.1977',
                picture: '/uploads/authorImage/VladimirNabokov.png'
            },
            {
                name: 'Джеймс Кервуд',
                birth: '01.01.1878',
                death: '01.01.1927',
                picture: '/uploads/authorImage/JamesCurwood.png'
            },
            {
                name: 'Осне Сейерстад',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/OsneSayerstad.png'
            },
            {
                name: 'Маркус Зусак',
                birth: '01.01.1975',
                picture: '/uploads/authorImage/MarcusZusak.png'
            },
            {
                name: 'Кейт Мортон',
                birth: '01.01.1976',
                picture: '/uploads/authorImage/KateMorton.png'
            },
            {
                name: 'Дэн Браун',
                birth: '01.01.1964',
                picture: '/uploads/authorImage/DanBrown.png'
            },
            {
                name: 'Василий Аксенов',
                birth: '01.01.1932',
                death: '01.01.2009',
                picture: '/uploads/authorImage/VasilyAksenov.png'
            },
            {
                name: 'Грэм Грин',
                birth: '01.01.1904',
                death: '01.01.1991',
                picture: '/uploads/authorImage/GrahamGreen.png'
            },
            {
                name: 'Артуро Реверте',
                birth: '01.01.1951',
                picture: '/uploads/authorImage/ArturoGutierrez.png'
            },
            {
                name: 'Кэтрин Скоулс',
                birth: '01.01.1959',
                picture: '/uploads/authorImage/KatherineScholes.png'
            },
            {
                name: 'Решат Гюнтекин',
                birth: '01.01.1889',
                death: '01.01.1956',
                picture: '/uploads/authorImage/ReshatGyuntekin.png'
            },
            {
                name: 'Андрей Платонов',
                birth: '01.01.1899',
                death: '01.01.1951',
                picture: '/uploads/authorImage/AndreyPlatonov.png'
            },
            {
                name: 'Фредерик Стендаль',
                birth: '01.01.1783',
                death: '01.01.1842',
                picture: '/uploads/authorImage/FrederickStendhal.png'
            },
            {
                name: 'Марио Пьюзо',
                birth: '01.01.1920',
                death: '01.01.1999',
                picture: '/uploads/authorImage/MarioPyuzo.png'
            },
            {
                name: 'Робин Слоун',
                birth: '01.01.1979',
                picture: '/uploads/authorImage/RobinSloan.png'
            },
            {
                name: 'Махбод Сераджи',
                birth: '01.01.1956',
                picture: '/uploads/authorImage/MahbodSeraji.png'
            },
            {
                name: 'Антонио Ларрета',
                birth: '01.01.1922',
                death: '01.01.2015',
                picture: '/uploads/authorImage/AntonioLarreta.png'
            },
            {
                name: 'Ричард Матесон',
                birth: '01.01.1926',
                death: '01.01.2013',
                picture: '/uploads/authorImage/RichardMatheson.png'
            },
            {
                name: 'Эмир Кустурица',
                birth: '01.01.1954',
                picture: '/uploads/authorImage/EmirKusturica.png'
            },
            {
                name: 'Татьяна Толстая',
                birth: '01.01.1951',
                picture: '/uploads/authorImage/TatyanaTolstaya.png'
            },
            {
                name: 'Макс Фрай',
                birth: '01.01.1965',
                picture: '/uploads/authorImage/MaxFray.png'
            },
            {
                name: 'Фредерик Бегбедер',
                birth: '01.01.1965',
                picture: '/uploads/authorImage/FrederickBegbeder.png'
            },
            {
                name: 'Наринэ Абгарян',
                birth: '01.01.1975',
                picture: '/uploads/authorImage/NarineAbgaryan.png'
            },
            {
                name: 'Мари Кондо',
                birth: '01.01.1984',
                picture: '/uploads/authorImage/MarieCondo.png'
            },
            {
                name: 'Антуан де Сент-Экзюпери',
                birth: '01.01.1900',
                death: '01.01.1944',
                picture: '/uploads/authorImage/AntoineDeSaintExupery.png'
            },
            {
                name: 'Астрид Линдгрен',
                birth: '01.01.1907',
                death: '01.01.2002',
                picture: '/uploads/authorImage/AstridLindgren.png'
            },
            {
                name: 'Джон ван де Рюит',
                birth: '01.01.1975',
                picture: '/uploads/authorImage/JohnVanDeRuit.png'
            },
            {
                name: 'Энди Вейер',
                birth: '01.01.1972',
                picture: '/uploads/authorImage/AndyWeyer.png'
            },
            {
                name: 'Йозеф Рот',
                birth: '01.01.1894',
                death: '01.01.1939',
                picture: '/uploads/authorImage/JosephRoth.png'
            },
            {
                name: 'Михаил Булгаков',
                birth: '01.01.1891',
                death: '01.01.1940',
                picture: '/uploads/authorImage/MichaelBulgakov.png'
            },
            {
                name: 'Владимир Медведев',
                birth: '01.01.1974',
                picture: '/uploads/authorImage/VladimirMedvedev.png'
            },
            {
                name: 'Дэниел Мейсон',
                birth: '01.01.1976',
                picture: '/uploads/authorImage/MasonPhilip.png'
            },
            {
                name: 'Артур Голден',
                birth: '01.01.1956',
                picture: '/uploads/authorImage/ArthurGolden.png'
            },
            {
                name: 'Джжин Сэссон',
                birth: '01.01.1947',
                picture: '/uploads/authorImage/GeneSesson.png'
            },
            {
                name: 'Николай Гоголь',
                birth: '01.01.1809',
                death: '01.01.1852',
                picture: '/uploads/authorImage/NikolayGogol.png'
            },
            {
                name: 'Джон Ирвинг',
                birth: '01.01.1942',
                picture: '/uploads/authorImage/JohnIrving.png'
            },
            {
                name: 'Герман Мелвилл',
                birth: '01.01.1819',
                death: '01.01.1891',
                picture: '/uploads/authorImage/HermanMelville.png'
            },
            {
                name: 'Томас Харрис',
                birth: '01.01.1940',
                picture: '/uploads/authorImage/ThomasHarris.png'
            },
            {
                name: 'Торнтон Уайлдер',
                birth: '01.01.1897',
                death: '01.01.1975',
                picture: '/uploads/authorImage/ThorntonWilder.png'
            },
            {
                name: 'Джеральд Даррелл',
                birth: '01.01.1925',
                death: '01.01.1995',
                picture: '/uploads/authorImage/GeraldDarrell.png'
            },
            {
                name: 'Евгений Замятин',
                birth: '01.01.1884',
                death: '01.01.1937',
                picture: '/uploads/authorImage/EvgenyZamyatin.png'
            },
            {
                name: 'Ирвин Уэлш',
                birth: '01.01.1958',
                picture: '/uploads/authorImage/IrwinWelch.png'
            },
            {
                name: 'Кен Кизи',
                birth: '01.01.1935',
                death: '01.01.2001',
                picture: '/uploads/authorImage/KenKesey.png'
            },
            {
                name: 'Джэром Сэлинджер',
                birth: '01.01.1919',
                death: '01.01.2010',
                picture: '/uploads/authorImage/JeromeSalinger.png'
            },
            {
                name: 'Кадзуо Исигуро',
                birth: '01.01.1954',
                picture: '/uploads/authorImage/KazuoIshiguro.png'
            },
            {
                name: 'Карен Хорни',
                birth: '01.01.1885',
                death: '01.01.1952',
                picture: '/uploads/authorImage/KarenHorney.png'
            },
            {
                name: 'Милан Кундера',
                birth: '01.01.1929',
                picture: '/uploads/authorImage/MilanKundera.png'
            },
            {
                name: 'Сефани Цвейг',
                birth: '01.01.1932',
                death: '01.01.2014',
                picture: '/uploads/authorImage/SephanyZweig.png'
            },
            {
                name: 'Нил Гейман',
                birth: '01.01.1960',
                picture: '/uploads/authorImage/NeilGaiman.png'
            },
            {
                name: 'Дениз Вудз',
                birth: '01.01.1958',
                picture: '/uploads/authorImage/DeniseWoods.png'
            },
            {
                name: 'Олдос Хаксли',
                birth: '01.01.1894',
                death: '01.01.1963',
                picture: '/uploads/authorImage/AldousHuxley.png'
            },
            {
                name: 'Дэвид Митчелл',
                birth: '01.01.1969',
                picture: '/uploads/authorImage/DavidMitchell.png'
            },
            {
                name: 'Этель Войнич',
                birth: '01.01.1864',
                death: '01.01.1960',
                picture: '/uploads/authorImage/EthelVoynich.png'
            },
            {
                name: 'Януш Вишневский',
                birth: '01.01.1954',
                picture: '/uploads/authorImage/JanuszWisniewski.png'
            },
            {
                name: 'Даниил Гранин',
                birth: '01.01.1919',
                death: '01.01.2017',
                picture: '/uploads/authorImage/DaniilGranin.png'
            },
            {
                name: 'Томас Мартинес',
                birth: '01.01.1934',
                death: '01.01.2010',
                picture: '/uploads/authorImage/ThomasMartinez.png'
            },
            {
                name: 'Мелисса Алберт',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/MelissaAlbert.png'
            },
            {
                name: 'Иэн Бэнкс',
                birth: '01.01.1954',
                death: '01.01.2013',
                picture: '/uploads/authorImage/IanBanks.png'
            },
            {
                name: 'Эрнест Хемингуэй',
                birth: '01.01.1899',
                death: '01.01.1961',
                picture: '/uploads/authorImage/ErnestHemingway.png'
            },
            {
                name: 'Оноре де Бальзак',
                birth: '01.01.1799',
                death: '01.01.1829',
                picture: '/uploads/authorImage/HonoreDeBalzac.png'
            },
            {
                name: 'Иван Тургенев',
                birth: '01.01.1818',
                death: '01.01.1883',
                picture: '/uploads/authorImage/IvanTurgenev.png'
            },
            {
                name: 'Зигмунд Фрейд',
                birth: '01.01.1856',
                death: '01.01.1939',
                picture: '/uploads/authorImage/SigmundFreud.png'
            },
            {
                name: 'Альберт Пиньоль',
                birth: '01.01.1965',
                picture: '/uploads/authorImage/AlbertPignolle.png'
            },
            {
                name: 'Анне-Катарина Вестли',
                birth: '01.01.1920',
                death: '01.01.2008',
                picture: '/uploads/authorImage/AnneKatarinaWestley.png'
            },
            {
                name: 'Патрик Зюскинд',
                birth: '01.01.1949',
                picture: '/uploads/authorImage/PatrickSuskind.png'
            },
            {
                name: 'Антон Макаренко',
                birth: '01.01.1888',
                death: '01.01.1939',
                picture: '/uploads/authorImage/AntonMakarenko.png'
            },
            {
                name: 'Борис Виан',
                birth: '01.01.1920',
                death: '01.01.1959',
                picture: '/uploads/authorImage/BorisVian.png'
            },
            {
                name: 'Аркадий Стругацкий',
                birth: '01.01.1925',
                death: '01.01.1991',
                picture: '/uploads/authorImage/brothersStrugatsky.png'
            },
            {
                name: 'Борис Стругацкий',
                birth: '01.01.1933',
                death: '01.01.2012',
                picture: '/uploads/authorImage/brothersStrugatsky.png'
            },
            {
                name: 'Хосе Лопес',
                birth: '01.01.1920',
                death: '01.01.2004',
                picture: '/uploads/authorImage/JoseLopez.png'
            },
            {
                name: 'Джеймс Барри',
                birth: '01.01.1860',
                death: '01.01.1937',
                picture: '/uploads/authorImage/JamesBarry.png'
            },
            {
                name: 'Кнут Гамсун',
                birth: '01.01.1859',
                death: '01.01.1952',
                picture: '/uploads/authorImage/KnutHamsun.png'
            },
            {
                name: 'Алекс Гарленд',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/AlexGarland.png'
            },
            {
                name: 'Уильям Голдинг',
                birth: '01.01.1911',
                death: '01.01.1933',
                picture: '/uploads/authorImage/WilliamGolding.png'
            },
            {
                name: 'Борис Полевой',
                birth: '01.01.1908',
                death: '01.01.1981',
                picture: '/uploads/authorImage/BorisPolevoy.png'
            },
            {
                name: 'Элеанор Портер',
                birth: '01.01.1868',
                death: '01.01.1920',
                picture: '/uploads/authorImage/EleanorPorter.png'
            },
            {
                name: 'Чимаманда Адичи',
                birth: '01.01.1977',
                picture: '/uploads/authorImage/ChimamandaAdichi.png'
            },
            {
                name: 'Джозеф Хеллер',
                birth: '01.01.1923',
                death: '01.01.1999',
                picture: '/uploads/authorImage/JosephHeller.png'
            },
            {
                name: 'Оскар Уайльд',
                birth: '01.01.1854',
                death: '01.01.1900',
                picture: '/uploads/authorImage/OscarWilde.png'
            },
            {
                name: 'Жиль Фоден',
                birth: '01.01.1967',
                picture: '/uploads/authorImage/GillesFoden.png'
            },
            {
                name: 'Альбер Камю',
                birth: '01.01.1913',
                death: '01.01.1960',
                picture: '/uploads/authorImage/AlberCamus.png'
            },
            {
                name: 'Джеральд Бром',
                birth: '01.01.1965',
                picture: '/uploads/authorImage/GeraldBrom.png'
            },
            {
                name: 'Колин Маккалоу',
                birth: '01.01.1937',
                death: '01.01.2015',
                picture: '/uploads/authorImage/ColinMcCullough.png'
            },
            {
                name: 'Кристофер Прист',
                birth: '01.01.1943',
                picture: '/uploads/authorImage/ChristopherPriest.png'
            },
            {
                name: 'Марк Твен',
                birth: '01.01.1835',
                death: '01.01.1910',
                picture: '/uploads/authorImage/MarkTwain.png'
            },
            {
                name: 'Кэтрин Стокетт',
                birth: '01.01.1969',
                picture: '/uploads/authorImage/KatherineStockett.png'
            },
            {
                name: 'Эдуард Лимонов',
                birth: '01.01.1943',
                picture: '/uploads/authorImage/EduardLimonov.png'
            },
            {
                name: 'Карл Юнг',
                birth: '01.01.1875',
                death: '01.01.1961',
                picture: '/uploads/authorImage/CarlJung.png'
            },
            {
                name: 'Эдвард Форстер',
                birth: '01.01.1879',
                death: '01.01.1970',
                picture: '/uploads/authorImage/EdwardForster.png'
            },
            {
                name: 'Джонатан Свифт',
                birth: '01.01.1667',
                death: '01.01.1745',
                picture: '/uploads/authorImage/JonathanSwift.png'
            },
            {
                name: 'Мигель Сильва',
                birth: '01.01.1908',
                death: '01.01.1985',
                picture: '/uploads/authorImage/MiguelSilva.png'
            },
            {
                name: 'Гэри Чепмен',
                birth: '01.01.1938',
                picture: '/uploads/authorImage/GaryChapman.png'
            },
            {
                name: 'Константин Паустовский',
                birth: '01.01.1892',
                death: '01.01.1968',
                picture: '/uploads/authorImage/KonstantinPaustovsky.png'
            },
            {
                name: 'Валентин Пикуль',
                birth: '01.01.1928',
                death: '01.01.1990',
                picture: '/uploads/authorImage/ValentinPikul.png'
            },
            {
                name: 'Хьюберт Селби',
                birth: '01.01.1928',
                death: '01.01.2004',
                picture: '/uploads/authorImage/HubertSelby.png'
            },
            {
                name: 'Холли Борн',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/HollyBourne.png'
            },
            {
                name: 'Бора Чосич',
                birth: '01.01.1932',
                picture: '/uploads/authorImage/BoraOсosic.png'
            },
            {
                name: 'Хантер Томпсон',
                birth: '01.01.1937',
                death: '01.01.2005',
                picture: '/uploads/authorImage/HunterThompson.png'
            },
            {
                name: 'Владимир Кунин',
                birth: '01.01.1927',
                death: '01.01.2011',
                picture: '/uploads/authorImage/VladimirKunin.png'
            },
            {
                name: 'Анджей Сапковский',
                birth: '01.01.1948',
                picture: '/uploads/authorImage/AndrzejSapkowski.png'
            },
            {
                name: 'Джеймс Клавелл',
                birth: '01.01.1921',
                death: '01.01.1994',
                picture: '/uploads/authorImage/JamesClavell.png'
            },
            {
                name: 'Рафик Шами',
                birth: '01.01.1946.',
                picture: '/uploads/authorImage/RafikShami.png'
            },
            {
                name: 'Стивен Кови',
                birth: '01.01.1932',
                death: '01.01.2012',
                picture: '/uploads/authorImage/StephenCovey.png'
            },
            {
                name: 'Дмитрий Медведев',
                birth: '01.01.1898',
                death: '01.01.1954',
                picture: '/uploads/authorImage/DmitryMedvedev.png'
            },
            {
                name: 'Александр Грин',
                birth: '01.01.1880',
                death: '01.01.1932',
                picture: '/uploads/authorImage/AlexanderGreen.png'
            },
            {
                name: 'Питер Хёг',
                birth: '01.01.1957',
                picture: '/uploads/authorImage/PeterHog.png'
            },
            {
                name: 'Борис Акунин',
                birth: '01.01.1956',
                picture: '/uploads/authorImage/BorisAkunin.png'
            },
            {
                name: 'Станислав Лем',
                birth: '01.01.1921',
                death: '01.01.2006',
                picture: '/uploads/authorImage/StanislavLem.png'
            },
            {
                name: 'Томас Кенилли',
                birth: '01.01.1935',
                picture: '/uploads/authorImage/ThomasKenilli.png'
            },
            {
                name: 'Луис Сепульведа',
                birth: '01.01.1949',
                picture: '/uploads/authorImage/LuisSepulveda.png'
            },
            {
                name: 'Габриэль Маркес',
                birth: '01.01.1927',
                death: '01.01.2014',
                picture: '/uploads/authorImage/GabrielMarquez.png'
            },
            {
                name: 'Амин Маалуф',
                birth: '01.01.1949',
                picture: '/uploads/authorImage/AminMaaluf.png'
            },
            {
                name: 'Олесь Бузина',
                birth: '01.01.1969',
                death: '01.01.2015',
                picture: '/uploads/authorImage/OlesBuzina.png'
            },
            {
                name: 'Морис Сендак',
                birth: '01.01.1928',
                death: '01.01.2012',
                picture: '/uploads/authorImage/MauriceSendak.png'
            },
            {
                name: 'Нагиб Махфуз',
                birth: '01.01.1911',
                death: '01.01.2006',
                picture: '/uploads/authorImage/NagibMahfouz.png'
            },
            {
                name: 'Грег Мортенсон',
                birth: '01.01.1957',
                picture: '/uploads/authorImage/GregMortenson.png'
            },
            {
                name: 'Диана Сеттерфилд',
                birth: '01.01.1964',
                picture: '/uploads/authorImage/DianaSetterfield.png'
            },
            {
                name: 'Дженнифер Броуди',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/JenniferBrody.png'
            },
            {
                name: 'Филип Дик',
                birth: '01.01.1928',
                death: '01.01.1982',
                picture: '/uploads/authorImage/PhilipDick.png'
            },
            {
                name: 'Нелл Харпер Ли',
                birth: '01.01.1926',
                death: '01.01.2016',
                picture: '/uploads/authorImage/NellHarperLee.png'
            },
            {
                name: 'Сидни Шелдон',
                birth: '01.01.1917',
                death: '01.01.2007',
                picture: '/uploads/authorImage/SydneySheldon.png'
            },
            {
                name: 'Джеймс Джойс',
                birth: '01.01.1882',
                death: '01.01.1941',
                picture: '/uploads/authorImage/JamesJoyce.png'
            },
            {
                name: 'Маргарет Митчелл',
                birth: '01.01.1900',
                death: '01.01.1949',
                picture: '/uploads/authorImage/MargaretMitchell.png'
            },
            {
                name: 'Иоганн Гёте',
                birth: '01.01.1749',
                death: '01.01.1832',
                picture: '/uploads/authorImage/JohannGoethe.png'
            },
            {
                name: 'Ричард Флэнаган',
                birth: '01.01.1961',
                picture: '/uploads/authorImage/RichardFlanagan.png'
            },
            {
                name: 'Уинстон Грум',
                birth: '01.01.1943',
                picture: '/uploads/authorImage/WinstonGroom.png'
            },
            {
                name: 'Юрий Домбровский',
                birth: '01.01.1909',
                death: '01.01.1978',
                picture: '/uploads/authorImage/YuriDombrovsky.png'
            },
            {
                name: 'Роджер Желязны',
                birth: '01.01.1937',
                death: '01.01.1995',
                picture: '/uploads/authorImage/RogerZhelyazny.png'
            },
            {
                name: 'Ричард Бах',
                birth: '01.01.1936',
                picture: '/uploads/authorImage/RichardBach.png'
            },
            {
                name: 'Виктор Пелевин',
                birth: '01.01.1962',
                picture: '/uploads/authorImage/VictorPelevin.png'
            },
            {
                name: 'Роальд Даль',
                birth: '01.01.1916',
                death: '01.01.1990',
                picture: '/uploads/authorImage/RoaldDahl.png'
            },
            {
                name: 'Корнелия Функе',
                birth: '01.01.1958',
                picture: '/uploads/authorImage/CorneliaFunke.png'
            },
            {
                name: 'Бернхард Шлинк',
                birth: '01.01.1944',
                picture: '/uploads/authorImage/BernhardSchlink.png'
            },
            {
                name: 'Сельма Лагерлёф',
                birth: '01.01.1858',
                death: '01.01.1940',
                picture: '/uploads/authorImage/SelmaLagerlof.png'
            },
            {
                name: 'Мам Сомали',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/MomSomalia.png'
            },
            {
                name: 'Исаак Башевис-Зингер',
                birth: '01.01.1902',
                death: '01.01.1991',
                picture: '/uploads/authorImage/IsaacBashevisSinger.png'
            },
            {
                name: 'Уильям Фолкнер',
                birth: '01.01.1897',
                death: '01.01.1962',
                picture: '/uploads/authorImage/WilliamFaulkner.png'
            },
            {
                name: 'Донна Тартт',
                birth: '01.01.1963',
                picture: '/uploads/authorImage/DonnaTartt.png'
            },
            {
                name: 'Богумил Грабал',
                birth: '01.01.1914',
                death: '01.01.1997',
                picture: '/uploads/authorImage/BohumilGrabal.png'
            },
            {
                name: 'Дана Шварц',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/RayBradbury.png'
            },
            {
                name: 'Элейн Каннингем',
                birth: '01.01.1957',
                picture: '/uploads/authorImage/Kanningeim.png'
            },
            {
                name: 'Анна Гавальда',
                birth: '01.01.1970',
                picture: '/uploads/authorImage/AnnaGavalda.png'
            },
            {
                name: 'Марк Леви',
                birth: '01.01.1961',
                picture: '/uploads/authorImage/MarkLevi.png'
            },
            {
                name: 'Борис Носик',
                birth: '01.01.1931',
                death: '01.01.2015',
                picture: '/uploads/authorImage/BorisNosik.png'
            },
            {
                name: 'Кларенс Деннис',
                birth: '01.01.1876',
                death: '01.01.1938',
                picture: '/uploads/authorImage/CDennis.png'
            },
            {
                name: 'Кларк Маркес',
                birth: '01.01.1846',
                death: '01.01.1881',
                picture: '/uploads/authorImage/MarcusClarke.png'
            },
            {
                name: 'Томас Кенилли',
                birth: '01.01.1935',
                picture: '/uploads/authorImage/ThomasKeneally.png'
            },
            {
                name: 'Майлз Франклин',
                birth: '01.01.1879',
                death: '01.01.1954',
                picture: '/uploads/authorImage/MilesFranklin.png'
            },
            {
                name: 'Генрик Ибсен',
                birth: '01.01.1928',
                death: '01.01.1906',
                picture: '/uploads/authorImage/HenrikIbsen.png'
            },
            {
                name: 'Мелина Марчетта',
                birth: '01.01.1965',
                picture: '/uploads/authorImage/MelinaMarchetta.png'
            },
            {
                name: 'Дорис Пилкингтон',
                birth: '01.01.1937',
                death: '01.01.2014',
                picture: '/uploads/authorImage/DorisPilkington.png'
            },
            {
                name: 'Тим Уинтон',
                birth: '01.01.1960',
                picture: '/uploads/authorImage/TimWinton.png'
            }
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Authors', null, {});
    }
};