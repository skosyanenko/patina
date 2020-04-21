
exports.seed = function(knex) {
  return knex('articles').del()
    .then(function () {
      return knex('articles').insert([
        {
          "viewType": 0,
          "title": "Книга «Ветра зимы» выйдет в 2020 году",
          "description": "<p>Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории.«Ветра зимы» одна их самых ожидаемых книг последних лет. Джордж Мартин все время откладывал выход книги, но на этот раз писатель обещал презентовать книгу в середине 2020 года. Именно в это время в Новой Зеландии пройдет Всемирный конвент научной фантастики.</p><p>Отметим, что на днях авиакомпания  Air New Zealand выложила шуточный ролик, где компания предложила Мартину бесплатное путешествие в Новую Зеланию, где он сможет отдохнуть от популярности и дописать предпоследнюю часть цикла «Песнь Льда и Пламени».</p><p>После этого ролика Джордж Мартин в своем блоге рассказал о предполагаемой дате выхода книги и отметил: «Если у меня не будет на руках «Ветров зимы», то у вас есть мое письменное разрешение заточить меня на Уайт-айленд с видом на это озеро серной кислоты пока я не допишу книгу».</p><p>Фанатам остается ждать долгожданного продолжения еще год. К сожалению, узнать финал всей саги удастся еще не скоро, так как дата выхода последней части «Грезы о весне», как и стадия написания книги, неизвестна.</p>",
        },
        {
          "viewType": 2,
          "title": "Скандальный дневник Биби Истон экранизирует Netflix",
          "description": "<p>Любовный треугольник ляжет в основу нового сериала от Netflix, основанного на личной истории писательницы Биби Истон «44 главы о 4 мужчинах»: в одном пространстве сойдутся сама Биби, её муж Кен и...прошлое. Ради того чтобы разбудить в возлюбленном былую страсть, главная героиня романа решила вести личный дневник, где во всех деталях предстанут четверо главных мужчин ее жизни, отношения с тремя из которых давно окончены. Кену же предстоит прочесть откровения жены от корки до корки.</p><p>Книга Истон была опубликована в США в 2016 году, и практически сразу вошла в топ самых продаваемых товаров на Amazon, а также была удостоена премии After Dark Book Lovers Shortie Award.</p><p>В телеверсии история поиска гармонии и счастья в семье будет называться «Sex/Life» и растянется на восемь серий. Генеральным продюсером киноадаптации романа Истон выступит Стейси Ракейсер.</p>",
        },
        {
          "viewType": 1,
          "title": "Экранизация «Цвета из иных миров» Говарда Лавкрафта выходит в российский прокат",
          "description": "<p>Традиционно переполненной нише хорроров часто не хватает качественного первоисточника. В этом феврале нас ждет сразу несколько экранизаций классических литературных произведений, но в жанре ужасов главное, конечно, переложение «Цвета из иных миров» Говарда Лавкрафта.</p><p>Российская премьера одноименного фильма назначена на 13 февраля, главную роль исполняет Николас Кейдж, а действие из мрачно-атмосферной первой половины XX века перенесено в наши дни. Семья переселяется из шумного города на природу, и все бы хорошо, пока на их двор не падает метеорит, а затем исчезает, оставив лишь маленький кратер и неописуемой красоты сияние. А вскоре обитатели дома осознают, что удивительный цвет и свет — не единственные подарки метеорита. И истинно лавкрафтовский ужас врывается в их жизнь.</p><p>А если у вас сейчас не пошли мурашки по коже от предвкушения, значит, вы пока не поклонник творчества Лавкрафта. Исправить это в короткие сроки и аккурат до премьеры можно, прочитав хотя бы топ-10 его рассказов. Узнаете, кто такой Ктулху, и станете замечать многочисленные отсылки к Лавкрафту в массовой хоррор-культуре. Словом, одни плюсы. Тот самый топ-10 — это сборник «Зов Ктулху», и его издательство «Эксмо» издает в различных форматах. Например, в классических «Библиотека всемирной литературы» и «Всемирная литература» , если вы собираете одну из этих серий, то можете купить новую книгу в любимом оформлении. Есть сборник и в более ярком оформлении, в серии «Классика на пятерочку!», в которую входят классические произведения в сочных и дерзких обложках. И, наконец, ценители союза красоты и утилитарности оценят серию «Белая птица» с красивыми артами на обложке и в компактной форме европокета.</p>"
        },
        {
          "viewType": 3,
          "title": "Netflix запускает сериал по серии комиксов «Ключи Локков»",
          "description": "<p>Все, чего вы боитесь, гораздо ближе, чем кажется — именно эту мысль Netflix попытаются донести до зрителя в своем новом сериале «Замок и ключ», который стартует уже на этой неделе. 7 февраля все любители пощекотать себе нервы смогут насладиться киноадаптацией серии пугающих комиксов Джо Хилла «Ключи Локков».</p><p>В центре сюжета — трое детей Локков, которые в попытке справиться со смертью главы семейства, переезжают в родовое поместье «Дом Ключей». В новом и, казалось бы, давно пустующем доме Локки находят разбросанные повсюду таинственные ключи. Каждый из них не только призван открыть ту или иную дверь в усадьбе, но и способен наделить своего обладателя мистическими и отнюдь не безобидными силами. Пытаясь разгадать тайну гибели своего отца и исследуя силу удивительных артефактов, юные Локки случайно выпускают на волю древнее чудовище. Теперь борьбу с депрессией придется отложить, ради того. Чтобы просто сохранить себе жизнь.</p><p>Джо Хилл сам написал сценарий к одному из эпизодов, а режиссером нового теле-фильма стал Винченцо Натали. Всего в первом сезоне запланировано десять серий.</p>"
        },
        {
          "viewType": 3,
          "title": "Творческая биография Харуки Мураками выйдет в «Эксмо» в феврале",
          "description": "<p>Его произведения переведены более чем на пятьдесят языков мира, а каждая новая книга становится бестселлером еще до того, как попасть в продажу: в начале февраля на книжных прилавках появится роман-интервью с одним из самых оригинальных писателей нашего времени — японцем Харуки Мураками.</p><p>За его плечами — годы, потраченные на поиск самого себя: прежде чем посвятить себя литературе, именитый прозаик работал продавцом в магазине и даже открыл собственный музыкальный бар, однако, страсть к работе с текстом все-таки одержала победу. В книге «Писатель как профессия» Мураками подробно расскажет поклонникам своего творчества о восхождении на литературный олимп, а также, где черпает вдохновение на новые произведения и почему не стоит бояться своего желания писать.</p>"
        },
        {
          "viewType": 4,
          "title": "Международный Букер опубликовал лонг-лист 2020 года",
          "description": "<p>По сообщению, опубликованному на сайте литературной награды, сегодня, 27 февраля, судьи International Booker Prize 2020 объявили «Международную книжную дюжину» — 13 романов, внесенных в длинный список на престижную премию, посвященную лучшим переводным произведениям со всего мира.</p><p>Премия присуждается каждый год за одну книгу, переведенную на английский язык и опубликованную в Великобритании или Ирландии. Награда призвана поощрять больше публикаций и чтения качественной художественной литературы со всего мира и содействовать работе переводчиков. Право участвовать имеют романы и сборники рассказов. Вклад как автора, так и переводчика получает равное признание, а приз в 50 тысяч фунтов стерлингов делится между ними поровну. Каждый включенный в короткий список автор и переводчик получат по 1 тысяче фунтов стерлингов, в результате чего общая стоимость приза составит 62 тысячи фунтов стерлингов.</p><p>В этом году судьи рассмотрели 124 книги.</p>"
        },
        {
          "viewType": 4,
          "title": "«Почта России» приготовила открытки в стиле «чеховского минимализма»",
          "description": "<p>К юбилею русского писателя Антона Чехова «Почта России» запланировала выпуск специальных открыток. А 25 января в музее-заповеднике Антона Чехова «Мелихово» состоится международная юбилейная конференция, которую приурочили к 160-летнему юбилею со дня рождения классика. Гости и участники получат памятные открытки и будут иметь возможность отправить их из «Мелихова» в любую точку мира.</p><p>Как процитировал директора УФПС «Почта России» Московской области Надежду Бабичеву портал «Год литературы»: «Открытки выполнены в стиле великого классика, можно сказать — в стиле чеховского минимализма. Я думаю, это ценный подарок для участников и гостей конференции и отличный способ погрузиться в эпистолярный жанр».</p><p>Напомним, что известный во всем мире автор не менее знаменитых пьес «Чайка», «Вишневый сад», «Дядя Ваня», «Три сестры» Антон Чехов, родился в Таганроге 29 января 1860 года.</p>"
        },
        {
          "viewType": 4,
          "title": "В Санкт-Петербурге откроют тематический парк, посвященный творчеству Пушкина",
          "description": "<p>По сообщению CladNews, «Jora Vision» спроектирует литературный тематический парк Александра Пушкина в России. Он будет называться «Лукоморье» и будет иметь шесть тематических зон в помещении и на открытом воздухе.</p><p>«Jora Vision» разработала генеральный план и концептуальные проекты для нового российского тематического парка, вдохновленные литературными поэмами и стихотворными сказками Александра Пушкина.</p><p>Многие считают Пушкина величайшим русским поэтом и основоположником современной русской литературы. Его сказки, действие которых разворачивается в сказочных землях под названием «Лукоморье», подстегивали детскую фантазию на протяжении сотен лет.</p><p>Теперь компания «Svetoch LLC», расположенная в городе Пушкин, под Санкт-Петербургом, привлекла «Jora Vision» для разработки тематического парка, который воплотит в жизнь истории великого поэта современным, захватывающим и типично русским способом.</p><p>Архитектор проекта в «Jora Vision» Флорис ван Иден рассказала: «Мы начали этот проект год назад с предварительного исследования перед планированием. Это исследование на ранней стадии является доступной новой услугой, которую мы предлагаем нашим клиентам, в которой мы предоставляем выбор достопримечательностей, креативные концепции и базовое планирование парка в сочетании с критическим анализом осуществимости проекта».</p><p>«Jora Vision» заявила, что ее планами предусмотрена внутренняя площадь около 17 тысяч м³, состоящую из трех основных зон — город, гавань и дворец, основанные на сказочных местах, описанных в сказках Пушкина, каждая из которых предлагает впечатления и аттракционы. Кроме того, на открытой территории площадью 2 га появятся еще три зоны: Ярмарка (российский рынок ярмарок), Лебединое озеро и Волшебный сказочный лес.</p><p>Генеральный директор в «Jora Vision» Ян Маартен де Раад подчеркнул: «Нам нравятся уникальные и значимые истории, и мы рады использовать наши навыки для воплощения этих местных историй в жизнь аудитории, которая еще не очень знакома с концепцией тематических парков и захватывающих развлечений».</p><p>Парк будет называться «Лукоморье» и, как ожидается, откроется в Санкт-Петербурге в 2023 году.</p>"
        },
        {
          "viewType": 3,
          "title": "Сьюзен Коллинз пишет приквел к «Голодным играм»",
          "description": "<p>Трилогия-антиутопия Коллинз «The Hunger Games», «Catching Fire» и «Mockingjay» была опубликована издательством «Scholastic» с 2008 по 2010 год, тут же превратившись в бестселлеры и почти 2 года были в списке самых продаваемых книг на территории США. Поэтому неудивительно, что уже в 2012 году вышла экранизация первой книги. Позже вышли еще три фильм с Дженнифер Лоуренс в главной роли. Книги повествуют о Панеме, североамериканской стране с 12 дистриктами, детей из которых отбирают по лотерее для участия в ежегодном смертельном реалити-шоу «Голодные игры».</p><p>Коллинз рассказала: «С этой книгой я хочу открыть истинную природу и сущность, кто мы такие и на что готовы пойти ради выживания. Период восстановления через 10 лет после войны, обычно называемый «темными временами», когда Панем пытается вновь встать на ноги — дает героям благодатную почву для решения этих вопросов и определения их взглядов на человечество». В предыдущих книгах этот период уже упоминался: тогда антиутопичный Панем только образовался и медленно восстанавливался после некоей глобальной катастрофы, потрясшей весь мир. Все 13 дистриктов, недовольные своим положением, восстали против правительства, однако бунт был жестоко подавлен, а дистрикт номер 13, в котором производили ядерное оружие, и вовсе был стерт с лица земли.</p><p>А пока кинокомпания «Lionsgate» уже начала работать над фильмом-приквелом «Голодных игр», который будет основан на готовящемся романе Сюзанны Коллинз. Конечно, ведь кинофраншиза «Голодных игр» принесла своим создателям около $700 миллионов кассовых сборов и десяток побед в престижных премиях, включая MTV Movie Award.</p><p>Как заявил председатель группы «Lionsgate Motion Picture Group» Джо Дрейк изданию Variety: «Будучи гордым домом фильмов «Голодные игры», мы не можем дождаться выхода следующей книги Сюзанны. Мы общались с ней в процессе написания и с нетерпением ждем продолжения тесного сотрудничества с ней в фильме».</p>"
        },
        {
          "viewType": 3,
          "title": "5 главных секретов японского детектива",
          "description": "<p>1. Главное в детективе – загадка. Не герои, не взаимоотношения, не драма, в конце концов – именно загадка. Хонкаку – это интеллектуальная головоломка, все силы читателя должны быть направлены на ее разгадывание.</p><p>2. Культура и быт. В японском детективе обязательно присутствует японская реальность. В произведении будут точно описаны не только сами события, но и фон – архитектура, быт, еда, традиции. Все должно быть по-японски!</p><p>3. Мистика. Этот элемент обязательно вводится в хонкаку. Зачастую японские детективы – это коктейль астрологии, гадания, предсказания судьбы. Чем тоньше вплетена мистика – тем насыщеннее получается вся история.</p><p>4. Сатори. Это совершенно обычное озарение – «Эврика! Я догадался!». Однако японские мастера детектива используют его чаще, чем просто логический ход разгадки. Во многом это базируется на японской философии – необязательно все понимать, но важно прочувствовать.</p><p>5. Игра в детектива. Хонкаку – детектив, который позволяет каждому читателю примерить на себя пальто детектива иди сыщика. Хороший хонкаку написан так, что читатель, сам того не подозревая, превращается в ищейку и идет по следу.</p><p>Удивительный мир японских детективов открылся российским читателям не так давно, однако теперь книги авторов из этой страны входят в рейтинги лучших детективов мира!</p>"
        },
        {
          "viewType": 4,
          "title": "Экоактивистка-школьница из Швеции Грета Тунберг выпустила книгу",
          "description": "<p>Вчера в Соединенных Штатах издательство «Penguin Random House» выпустило в продажу книгу известной на весь мир шведской школьницы Греты Тунберг, которая более года назад обратилась с воззванием к школьникам, а потом и ко всем людям Земли сделать хоть что-то для спасения планеты. Книга называется «No One Is Too Small to Make a Difference» (буквально — «Никто не слишком мал, чтобы что-то изменить») и содержит речи юной экоактивистки, произнесенные во время массовых акций протестов и в ООН.</p><p>В одну из августовских пятниц 2018 года 15-летняя школьница из Швеции Грета Тунберг решила не пойти в школу, а вместо этого выступила за более активную борьбу с глобальным потеплением и призвала школьников выйти к шведскому парламенту на экологическую забастовку, попробовав хоть что-то изменить в действиях мировых правительств в борьбе за экологию планеты. Призыв девочки подхватили школьники в разных европейских городах, а экологическое движение «Пятницы за будущее» стали массовым явлением.</p><p>Все эти действия в конечном итоге вдохновили миллионы людей в более чем 150 странах мира и вызвали глобальное движение за борьбу с климатическим кризисом планеты, заставив тем самым правительства прислушаться к голосу самых юных членов человеческого общества. В конце сентября 16-летняя девочка выступила на саммите ООН по климату, где обвинила мировых лидеров в том, что они, не предпринимая активных мер по защите климата, «украли» у нее «мечты и детство». Выступление экоактивистки вызвало значительный резонанс в мире, заработав ей номинацию Нобелевской премии мира и породив волну мемов, даже став дет-метал-треком.</p><p>В конце прошлого месяца Северный совет присудил девочке премию в сфере защиты экологии, однако 16-летняя экоактивистка, поблагодарив за оказанную честь, от нее отказалась, объяснив, что «климатическому движению больше не нужно премий».</p><p>В своем микроблоге в Instagram она тогда написала: «Мы из тех стран, у которых есть возможность прилагать максимум усилий. И, все же, наши страны, по сути, не делают ничего. Поэтому, пока вы не начнете действовать…, я предпочитаю не принимать Экологическую премию Северного совета». И добавила: «Нам нужно, чтобы политики и люди у власти стали прислушиваться к современной передовой науке».</p><p>Ранее в Instagram, где на нее подписано более 8 миллионов человек, она анонсировала выход своей книги на английском. Позже дополненное собрание речей Греты будет издано на других языках по всему миру. Заработанные с продаж деньги пойдут на благотворительность.</p>"
        },
        {
          "viewType": 4,
          "title": "36 лет назад умер Михаил Шолохов: Как вспоминают писателя сегодня",
          "description": "<p>21 февраля - день смерти лауреата Нобелевской премии, писателя Михаила Шолохова. О том, как вспоминают его в его собственном доме и музее в Вешенской, рассказывает его внук, депутат Государственной Думы Александр Шолохов.</p><p>- Мы вспоминаем эту печальную дату большим количеством самых разных событий, посвященных Михаилу Александровичу. Почти весь коллектив музея идет на возложение цветов, присоединяясь ко всем, кто в этот день обычно приходит на могилу писателя. В Вешенской традиционно проходит торжественный вечер. У музея множество самых разных начинаний и выставочных проектов, возвращающих наше внимание к этому великому имени.</p><p>В семье же мы обычно вспоминаем его каким-нибудь смешным случаем. Потому что он остался в нашей памяти очень жизнерадостным человеком, с огромным чувством юмора, категорически не терпящим кислого и тоскливого настроения. Всегда мог легко прекратить таковое, если оно вдруг у кого-то возникало, и день сразу становился ярким, независимо от погоды.</p><p>Одно из последних наших семейных воспоминаний - о поездке в Казахстан на охоту, обычно 2-3-дневной. Мы вспоминали, как ночевали в степи и вечером играли в карты на фанты, а Михаил Александрович, обычно очень хорошо игравший, в этот раз проиграл.</p><p>Самое актуальное сегодня, я думаю, не только по отношению к Шолохову, но и ко всем великим именам - привлекать внимание к чтению классики. Самыми разными способами, включая интернетовские хайп-технологии.</p><p>Классиков надо читать, потому что в их книгах, совершенно очевидно, есть ответы на подавляющее большинство стоящих перед нами вопросов. Во всем от общечеловеческих ценностей и философских вопросов до политических решений.</p><p>Для нас, как и для многих сегодня, важна начатая двухсуточным непрерывным чтением Льва Толстого. Когда классика звучит из уст известного человека, человек, услышавший хоть две строки, задумается над ними. А еще лучше, если у него возникнет желание самому прочесть дальше.</p>"
        },
        {
          "viewType": 4,
          "title": "Семья Толкина выступила против фильма о жизни писателя",
          "description": "<p>В начале мая на экраны выходит байопик «Толкин», где в главных ролях снялись Николас Холт, известный кинозрителям по фильму «Безумный Макс: Дорога ярости», и Лили Коллинз — в роли жены писателя Эдит Толкин.</p><p>В фильме показаны «годы становления известного автора, поскольку он находит дружбу, мужество и вдохновение среди группы писателей и художников в школе». Режиссером ленты стал Дом Карукоски («Сердце льва»), который обещал показать, как «их братство укрепляется по мере их взросления… до начала Первой мировой войны, которая угрожает разлучить их общение». И все это, по мнению студии «Fox Searchlight», снявшей фильм, вдохновит потом Толкина «написать свои знаменитые романы о Средиземье».</p><p>Автор биографии «Толкин и Великая война» Джон Гарт сказал: «Байопики, как правило, берут значительные лицензии с фактами, и этот не исключение. Одобрение семьи Толкин придаст авторитет любым расхождениям и искажениям. Это было бы плохой историей». И добавил: «Как биограф, я ожидаю, что буду занят исправлением новых заблуждений, связанных с фильмом. Я надеюсь, что любой, кто наслаждается фильмом и интересуется формирующими годами Толкина, получит надежную биографию».</p><p>Семья Толкина бережно охраняет его наследие. В 2009 году его наследники урегулировали многомиллионный иск о гонорарах за фильмы «Властелин колец». В 2011 году поместье подало в суд на роман «Мирквуд: роман о Дж.Р.Р. Толкине», в котором автор был главным героем. Американский автор книги, Стивен Хиллард, позже обратился в окружной суд Техаса за заявлением о том, что он имеет право издателя в соответствии с первой поправкой. Позже дело было урегулировано, когда Хиллард согласился добавить отказ от ответственности: «Это художественное произведение, которое не одобрено и не связано с The JRR Tolkien Estate или ее издателем».</p><p>А в 2012 году поместье также подало в суд на азартные игры с участием персонажей «Властелина колец», заявив, что оно «наносит непоправимый вред наследию и репутации Толкина и ценной доброй воле, созданной его работами».</p><p>Кристофер Толкин, сын автора, прояснил свою антипатию к дальнейшим фильмам, сказав «Le Monde» в 2012 году, что «Толкин стал монстром, пожираемым его собственной популярностью и поглощенным абсурдом нашего времени», и что «коммерциализация имеет цель свести на нет эстетическое и философское воздействие творения».</p><p>Питер Джексон, режиссер фильмов «Хоббит» и «Властелин колец», ранее говорил, что, по его мнению, вряд ли будут сняты другие фильмы, потому что они не могут произойти без сотрудничества со стороны наследников автора. Но в 2017 году поместье продало права на новый телевизионный сериал «Властелин колец» «Amazon» за $250 млн, обойдя «Netflix». Ожидают, что «Amazon» инвестирует до $1 млрд в новую адаптацию, которая будет основана на «ранее не исследованных историях, основанных на оригинальных работах Дж. Р.Р. Толкина», а не только на повествовании, описанном в «Властелине колец».</p>"
        },
        {
          "viewType": 0,
          "title": "Генри Кавилл назвал свои любимые книги из саги о Ведьмаке",
          "description": "<p>По сообщению польского новостного сайта wyborcza.pl, первый сезон долгожданного сериала «Ведьмак» по фэнтезийному циклу книг о Геральте из Ривии польского писателя Анджея Сапковского стартует на Netflix 20 декабря. Отличнейший подарок для поклонников творчества писателя и любителям фэнтези к Рождеству и Новому году! И уже известно, что будет и второй сезон телешоу.</p><p>Когда до выхода телесериала на экраны осталось чуть более месяца его создатели приоткрыли завесу тайны, допустив журналистов на съемочную площадку серии. В результате чего в Сети появилось много изображений процесса съемок, а также журналисты, пользуясь случаем, с пристрастием допросили Генри Кавилла, который играет главного героя сериала — Геральта из Ривии.</p><p>В частности они узнали как британский актер, сыгравший Супермена, решил стать Ведьмаком. Кавилл рассказал: «Я влюбился в эти истории. Это не ваши типичные фэнтезийные истории, в них есть что-то осязаемое. Много раз после чтения или игры я не мог выбросить их из головы. Когда появилась возможность сыграть Геральта, я не мог ее упустить. Когда они объявили о шоу, я не знал, что Лорен (Хиссрих, шоураннер сериала — прим. ред.) будет работать над ним. Каждый день я просил своих агентов что-нибудь выяснить. И тогда у нас состоялась встреча. И я думаю, что все прошло хорошо, раз я сейчас здесь перед вами».</p><p>На вопрос какие книги из цикла Сапковского ему нравятся более всего актер ответил: «А мои любимые книги? «Последнее желание», потому что оно зацепило меня, разбило мое сердце, соединило и снова сломало. И «Владычица Озера», потому что все события ее просто невероятны. В этом есть настоящее волшебство».</p><p>Рассказывая о своем персонаже изданию «Small Screen» Кавилл отметил: «он часто подвергает свою жизнь серьезной опасности, чтобы спасти незнакомого человека от гибели. И в этом есть что-то замечательное». Актер полагает, что за суровой внешностью Геральта бьется «золотое» сердце, но суровые реалии жизни и те испытания, которые выпали на долю героя, заставляют его скрывать свою доброту. Много раз Геральт сталкивался с ненавистью и предрассудками своего народа, поскольку ведьмаков очень многие считают самыми настоящими монстрами. Кавил рассказал: «Вы видите, как Геральт пробирается сквозь эти предрассудки и пытается изменить их. И в то же время, сражаясь против чудовищ и несправедливости, он является оружием огненного гнева».</p><p>Генри Кавилл появится на экранах в роли Геральта из Ривии 20 декабря. А тем временем актер уже объявил о своем возвращении во второй сезон сериала, который появится на Netflix в 2021 году.</p>"
        },
        {
          "viewType": 2,
          "title": "Компания Netflix приглашает зрителей в Нарнию",
          "description": "<p>Американская компания Netflix приобрела права на экранизацию «Хроник Нарнии» Клайва Льюиса. Сюжеты семи книг ирландского писателя будут адаптированы для сериала. Вместе с представителями компании работать над проектом будут продюсер Марк Гордон и исполнительные продюсеры Дуглас Гришем и Винсент Зибер.</p><p>Ранее три части саги были экранизированы режиссером Эндрю Адамсоном. Четвертый фильм, под предварительным названием «Хроники Нарнии: Серебряное Кресло», был анонсирован 1 октября 2013 года, но проект до сих пор находится в разработке, о дате релиза ничего неизвестно.</p><p>«Хроники Нарнии» — цикл из семи фэнтезийных повестей, выходивших с 1950 по 1956 год. Написанные священником, «Хроники...» сочетают в себе христианские и мифологические мотивы.</p>"
        },
        {
          "viewType": 1,
          "title": "Историк обнаружил дом в Лондоне, где Шекспир написал «Ромео и Джульетту»",
          "description": "<p>Согласно новому исследованию театроведа и историка, впервые точно было идентифицировано местоположение лондонского дома Уильяма Шекспира, где драматург написал «Ромео и Джульетту».</p><p>В поисках дома английского драматурга и поэта историк театра Джеффри Марш потратил целое десятилетие, тщательно исследуя архивы и старые документы с перекрестными ссылками на официальные записи, чтобы точно определить, где именно Шекспир жил в 1590-х годах.</p><p>Поиски Марша начались после того, как в 2008 году был обнаружен Театр — елизаветинский театр в «Shoreditch» в Восточном Лондоне. Историку стало интересно, где жил Шекспир, когда его пьесы исполнялись там, что предшествовало «Глобусу» как месту работы драматурга.</p><p>Ранее было установлено, что Шекспир жил в центре Лондона, рядом со станцией Ливерпуль-стрит, в то время известной как приход St. Helens, после того, как он был включен в список налогоплательщиков в 1597/98 году, но точное местоположение так и не было определено.</p><p>По информации Марша, все данные свидетельствуют о том, что Шекспир жил в доме с видом на церковный двор St. Helens, арендуя его у гильдии кожевников. В то время как неправильное написание создавало трудности для расшифровки и интерпретации документов, Марш смог проанализировать записи, которые были «замечательно» сохранены, начиная с 1550-х годов.</p><p>Марш, который также является директором Департамента театра и перформанса Музея Виктории и Альберта, сказал: «Место, где Шекспир жил в Лондоне, дает нам более глубокое понимание вдохновения для его работы и жизни. На протяжении нескольких лет после переезда в Лондон из Стратфорда он жил в одном из самых богатых приходов города, рядом с влиятельными общественными деятелями, состоятельными международными торговцами, общественными врачами и опытными музыкантами».</p><p>Историк добавил, что проживание в таком месте, как Лондон, «улучшило бы статус Шекспира, поскольку он развивал свою карьеру, искал фамильный герб и планировал купить внушительный и дорогой дом в Стратфорде».</p>"
        }
      ]);
    });
};
