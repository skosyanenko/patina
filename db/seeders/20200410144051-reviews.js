'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
          {
              bookId: 300,
              title: 'По сути, мы видим, как этот молодой человек превращается из безбашенного юноши в счастливого семьянина с взрослыми обязанностями.',
              viewType: 0,
              description: '[{"type":"paragraph","data":{"text":"Книга «Сентиментальный Парень» произвела на меня особое впечатление. Она имеет, в принципе, легкоузнаваемую сюжетную линию: парень влюбляется в девушку, чтобы ее добиться становится лучше,но у него появляется соперник."}},{"type":"paragraph","data":{"text":"Я бы хотела выделить несколько моментов, которые понравились мне больше всего."}},{"type":"list","data":{"style":"ordered","items":["Нам замечательно показан быт и жизнь главных героев. Меня впечатлило описание пейзажей и архитектуры зданий.","Очень мило и забавно показаны чувства Блока к Дорин. Любовь действительно может изменить отношение к своей жизни.","Вставка спектакля Ромео и Ждульетта показалась мне особенно милой. История наших героев сравнивается с печальной историей знаменитых влюблённых. Однако первых, ждет счастливый конец."]}},{"type":"paragraph","data":{"text":"В заключение, хотелось бы отметить, что данная книга ценна, как исторический источник литературы Австралии."}}]'
          },
          {
              bookId: 301,
              title: '«Какова доминирующая нота австралийского пейзажа? То, что является доминирующей нотой поэзии Эдгара Аллана По. Странная тоска.»',
              viewType: 0,
              description: '[{"type":"paragraph","data":{"text":"История честного и невиновного Руфуса Дауэс, который вынужден нести несправедливое наказание, заставляет сопереживать герою."}},{"type":"paragraph","data":{"text":"Книга обличает уголовную систему в Австралии в конце 19 века, показывает жестокость и несправедливое отношение людей (например, лейтенанта Мориса Фрера)."}},{"type":"paragraph","data":{"text":"Сюжет, в принципе, интригует:"}},{"type":"list","data":{"style":"ordered","items":["Запутанная линия любви. Я, кстати, не надеялась на соединение Дауэса и Сильвии.","Далее, Когда вещи, наконец, идут своим чередом, когда Руфус помогает Фреру и Виккерсу, он предан Фрером, и ему становится все хуже. Очень жаль главного героя, создается впечатление, что он привлекает неудачу в любой ситуации. Поэтому Для меня, книга показалась довольно жестокой и печальной."]}},{"type":"paragraph","data":{"text":" Больше всего меня заинтересовал конец истории. Книга закончилась спасением, но мне кажутся не менее интересными другие интерпретации. Напрмер, когда Сильвия погибает при кораблекрушении, но ее дочка спасена. Важно также подчеркнуть, что книга основана на реальных событиях и поэтому она несомненно представляет историческую ценность."}},{"type":"paragraph","data":{"text":"Однако, я, к сожалению, не поклонница подобного жанра. Иногда мне казалось, что сцены затянуты, иногда я не улавливала суть происходящего. По правде сказать, я бы дала 2 шанс этой книге, потому что не всегда мы можем с первого раза прочувствовать что-то действительно стоящее."}}]'
          },
          {
              bookId: 302,
              title: 'Просто цветным людям тяжело когда-либо продвигаться вперед, даже когда они пытаются играть по правилам.',
              viewType: 1,
              description: '[{"type":"paragraph","data":{"text":"Книга «Песня кузнеца Джимми» поражает и шокирует. Нет, мне не было стыдно за жесткость Джимми, она вполне ожидаема. Мне было стыдно за отношение людей к нему. "}},{"type":"paragraph","data":{"text":"Итак, на протяжении всей книги я наблюдала за развитием жизни молодого парня. Я чувствовала, как он старался, он действительно делал всю работу качественно и верил в свое будущее. Мужчина даже принял чужого ребенка, так он любил свою «цивилизованную жизнь». И что в он получал в ответ? – жестокость, низкие зарплаты, презрительное обращение. В зрелом и достаточно образованном мужчине кончилось терпение и в порыве ярости он отомстил невинным белым женщинам, в лице которых он видел всех, кто его унижал. Я, конечно, не хочу оправдать его поведение. Но, по мне, другого исхода не могло быть, может быть позже, но подобное случилось бы."}},{"type":"paragraph","data":{"text":"И в этой связи, я хочу заметить, что я не считаю, что он был дикарем в душе и поэтому так поступил. Нет. Скорее здесь стоит поднять вопрос времени и обстановки в Австралии, которая еще не располагала к подобным экспериментам воспитания аборигенов. Люди тогда не понимали толерантность. Интересен также герой Морт- соучастник Джимми. Я заметила, что Морт видел в Джимми «главного». Он следовал его указаниям, не желая сам того. Мне показалось, что для Морта Джимми был, наверное, кумиром, потому что он мог читать, писать и жить среди белых. И тогда у меня возник вопрос. Можно ли было воспитать Джимми и вернуть его в семью, для того, чтобы тот помогал освоить новые знания? Тогда бы не было всего этого ужаса."}},{"type":"paragraph","data":{"text":"Как бы то ни было, развязка книги такова: Джимми был пойман, (разумеется) и приговорен к смертной казне. Что мне кажется совершенно справедливым наказанием за его действия. Однако, мне было искренне жаль."}},{"type":"paragraph","data":{"text":"Каков вывод? Обществу стоит учиться на своих ошибках. Жестокость еще никогда не приносила ничего хорошего! И в истории таких примеров очень много. Книга глубокая, заставляет задуматься над поведением людей, и их человечности."}},{"type":"image","data":{"url":"/uploads/reviewsPictures/reviews-1.jpg"}}]'
          },
          {
              bookId: 303,
              title: '«Почему я пишу? Почему кто-то пишет?» спрашивает подросток Сибилла, которая мечтает о блестящей карьере писателя.',
              viewType: 1,
              description: '[{"type":"paragraph","data":{"text":"Книга «Моя блестящая карьера» очень сильно впечатлила меня. Я люблю подобные произведения. Это мне напомнило одну из моих любимых книг «Унесенные Ветром», где также рассказывалась непростая история самостоятельной девушки."}},{"type":"paragraph","data":{"text":"Во первых, мне очень понравилась атмосфера Австралии в 1897 , которую мастерски удалось передать писателю. Книга наполнена какой-то тонкой, легкой и неуловимой атмосферой летнего дня — прекрасным созерцанием происходящего.&nbsp;"}},{"type":"paragraph","data":{"text":"Во вторых, сюжет книги – уникальный и интригующий. Необычно видеть девушку стойкую и уверенную в своих силах и желаниях. Ведь, действительно, в конце 19 века, никто не мог себе позволить так преданно следовать своему желанию и призванию, кроме как Сибилла Мелвин. Кроме того, Ее история основана на реальных событиях! И этот факт придает данному произведению еще большую ценность."}},{"type":"quote","data":{"text":"Я не могу потерять себя в чужой жизни, когда я еще не жила самостоятельно.","caption":"Майлз Франклин","alignment":"left"}},{"type":"paragraph","data":{"text":"Что касается моего впечатления по поводу сюжетной линии любви Сибиллы и Гарри Бича, то для меня это было одновременно и потрясением и разочарованием. Я до последнего надеялась, что Сибилла сдастся, откроется чувствам и впустит в свою жизнь этого достойного парня. И мне казалась, что он и их любовь не смогут помешать ее карьере. Так как я уверена, что вдвоем всегда двигаться легче. Однако, время в котором мы наблюдаем действие сыграло свою роковую роль. Женщине не следовало беспокоиться о таких мелочах как КАРЬЕРНЫЙ рост. Я знаю, что если бы она вышла замуж за Генри, то скорее всего родила бы детей и занималась их воспитанием и поддержанием домашнего уюта. Таким образом, иного выхода не было. Мы видим, что в финальной сцене Сибилла дописала свой роман и добилась того, чего хотела."}},{"type":"image","data":{"url":"/uploads/reviewsPictures/reviews-2.jpg"}},{"type":"paragraph","data":{"text":"Книга потрясающая, она показывает нам роль женщины и важность ее желаний. Нам следует помнить о том, как сложно раньше было отстоять свою независимость. Таким образом, сегодня, нам стоит гордиться нашими правами и равным обществом без стереотипов. Мы всегда должны помнить, какие уступки и препятствия проходили первые женщины, отстаивающие свое внутреннее я."}}]'
          },
          {
              bookId: 304,
              title: 'Дикая утка, обычная дикая утка, которую подстрелили на охоте и принесли в дом, вдруг становится неким символом общего несчастья в одной семье.',
              viewType: 0,
              description: '[{"type":"paragraph","data":{"text":"Итак, для начала, для меня почти с самых первых сцен приезда Кристиана и школьного учителя Хедвиг стало ясно, что скорее всего именно эти два героя сыграют ключевую роль в развитии сюжета. Так оно и случилось."}},{"type":"paragraph","data":{"text":"Для меня четко выделились линии отношений:"}},{"type":"list","data":{"style":"ordered","items":["Хедвиг и Адам",";Шарлотт и Оливер","Кристиан и Грейс","Генри и Анна"]}},{"type":"paragraph","data":{"text":"Мне сразу бросилось в глаза то, что до приезда Кристиана совместная жизнь каждой из выделенных мной пар казалась (а может быть и была) счастливой. Словно аналогия:&nbsp; жизни жителей маленького городка в Австралии – спокойную, счастливую, умеренную и жизнь гостя из США – непоследовательную, зависимую, суматошную. Интересна мысль о том, как гость из прошлого может кардинально изменить будующее других людей. Однако, Кристиан на протяжении всей книги вызывал только эмоции жалости и жалкости."}},{"type":"paragraph","data":{"text":"Что касается Хедвиг, то девочка оказалась просто жертвой в интригах взрослых. Важно отметить, что у Хедвиг тоже в конце концов влюбленность обернулась драмой. Поэтому, для своего возраста все действия девочки были вполне себе логичными, как по мне. Хорошо, что все хорошо заканчивается и девочка в конце оказалась в больнице, видимо на выздоровлении."}},{"type":"paragraph","data":{"text":"Хочу отметить, что более трагичный конец был бы для меня менее ожидаем. С открытым, скорее счастливым концом не получилось того поучительного финала. А именно:"}},{"type":"list","data":{"style":"ordered","items":["правда всегда становится явью.","за правду иногда приходится платить."]}},{"type":"paragraph","data":{"text":"Тогда бы в умы зрителя пришел вопрос:&nbsp; а стоит ли вообще врать и имеет ли право посторонний человек вмешиваться в жизни других людей?"}}]',
          },
          {
              bookId: 305,
              title: 'Отпустив жесткие ожидания, Джози узнает, что лучшие вещи в жизни могут прийти из самых неожиданных мест.',
              viewType: 0,
              description: '[{"type":"paragraph","data":{"text":"Это произведение показалось мне очень легким и интересным рассказом о девочке-подростке. Повествование ведется от Джози в виде дневника, где девушка рассказывает о своем важном этапе жизни – выпускном классе. Картина начинается с традиционного итальянского праздника «Томатный день», где нам удается узнать о героине. Джозефина переходит в выпускной класс, она хочет поменять свою жизнь, и традиционные привычки ее семьи итальянцев ей надоели. Сюжетная линия кажется предсказуемой. Я догадалась, что будет обязательно мальчик, которого любит Джози, но не может с ним быть, выпускной, отношения с подружками и ссоры со школьными «топ-девочками». Однако, книга оказалась со своими сюрпризами, что мне очень понравилось."}},{"type":"paragraph","data":{"text":"Во-первых, часто в книги описаны посторонние сцены, где Джози представляет себе происходящее. Таким образом нам удается глубже прочувствовать характер девушки и открыть ее смешное подростковое восприятие ситуации."}},{"type":"paragraph","data":{"text":"Далее очень здорово раскрыта жизнь итальянской диаспоры в Сиднее. Описана итальянская речь,&nbsp; привычки и типичное поведение ее семьи-итальянцев."}},{"type":"paragraph","data":{"text":"Что меня действительно потрясло это развязка ее отношений с Джоном. Я была в шоке от его смерти. Однако, в книге мы не видим тяжёлых последствий потери лучшего друга. Жизнь продолжает идти своим чередом. Возможно, этот ход был сделан для того, чтобы противопоставить более легкое мировосприятие жизни подростками, нежели более старшими поколениями."}},{"type":"paragraph","data":{"text":"Также интересна для меня показалась линия воссоединения семьи Джози. Книга заканчивается тем же праздником томатного дня. Но теперь все изменилось. Джози, ее отец, мама вместе, у нее есть парень и подруги тоже. Джози теперь не так уверенно хочет все поменять в своей жизни и она совсем не переживает о своих планах на будущее, а живет сегодняшним днем."}}]'
          },
          {
              bookId: 306,
              title: 'Книга просит читателя встать на место героинь и пройти этот долгий путь - через континент и через многие десятилетия - чтобы увидеть, какова истиная любовь к земле и родственные связи.',
              viewType: 0,
              description: '[{"type":"paragraph","data":{"text":"В книге преобладает атмосфера сплоченности, любви, целеустремленности и инстинкта самосохранения, а не ужаса и страха."}},{"type":"paragraph","data":{"text":"В книге концентрируется внимание на трёх девочках, но мы понимаем, что на их фоне рассказывается беда многих семей. Нам показан целый лагерь детей, которых забрали насильственным путём для благородного воспитания."}},{"type":"paragraph","data":{"text":"Мы также видим на примере одной из воспитанниц, как сложно было убежать и какое жестокое наказание ждало ребенка за это."}},{"type":"paragraph","data":{"text":"Три меленькие девочки, особенно Молли, вызывали у меня чувства уважения. Несмотря на удушающую жару или кровоточащие ноги, они стремятся вернуться домой.&nbsp;"}},{"type":"paragraph","data":{"text":"Прочитав книгу, я чуть было не расплакалась, видя как невинные голодные дети шагают под палящим австралийским солнцем по пути к матерям."}},{"type":"paragraph","data":{"text":"Радует, что были описаны люди, которые помогали девочкам. Значит, не все белые переселенцы относились к девочкам как к каким-то отсталым, были те, кто протягивал руку помощи."}},{"type":"paragraph","data":{"text":"Меня очень впечатлила книга. Так как я историк по первому образованию, то такие произведения мне кажутся необходимыми! Nobody has a future without knowing the past."}}]'
          },
          {
              bookId: 307,
              title: 'Это не история о серфинге; это история о страхе, о том, что выходит за пределы страха, и о том, как стать зависимым от толчка.',
              viewType: 1,
              description: '[{"type":"paragraph","data":{"text":"Книга «Дыхание» для меня кажется «живой книгой». Про жизнь и про потерю, про успех и поражение, про любовь и разочарование, про выбор и безысходность."}},{"type":"delimiter","data":{}},{"type":"paragraph","data":{"text":"Хотелось бы отметить несколько моментов, которые меня впечатлили больше всего."}},{"type":"paragraph","data":{"text":"С первых кадров нам становится понятно, что мальчики – друзья из разных социальных слоев, но парадокс не в этом. Пайклетт, не смотря на свои страхи и воспитание действует совсем нескромно(его отношения с одноклассницей и Евой). Скорее, он был ведомым кем-то, чем решал сам. По мне, только в конце он принял решение самостоятельно. Желание сёрфить ушло на второй план. Хотя Пайклетту свойственно делать все «по порядку». Что касается Луни, он предан своей мечте до конца, его не волнуют посторонние забавы и чувства. Он радуется своим достижениям и готов к новым. Мне иногда казалось, что мальчики должны поменяться ролями."}},{"type":"image","data":{"url":"/uploads/reviewsPictures/reviews-3.jpg"}},{"type":"paragraph","data":{"text":"Перед нами четверо совершенно разных, амбиционных молодых людей. Казалось бы, у каждого из них своя жизнь и свое будущее. Но в книге мы видим как переплетаются судьбы этих четверых. Таким образом каждый из них становится зависимым от другого. Интересно наблюдать за динамикой отношений любовного квадрата, а не привычного треугольника. До последнего я не могла предсказать развязку этого сюжета. Разумеется в конце концов их пути разошлись, но именно этот короткий период жизни, который мы наблюдаем, кардинальным образом изменит их будущее. Мне показалось это фантастическим."}},{"type":"paragraph","data":{"text":"Описание природы! Но не просто потрясающие пейзажи океана и Австралии, но и то, как это сочетается с жизнью и отношениями между главными героями. Мне показалось, что жизнь Евы и Сандо, взросление Пайклетта и Луни, их желания и взаимоотношения можно сравнить с волнами. Вода приходила, они танцевали на ней свой танец и далее волна исчезала. И так по кругу. Каждую ветвь сюжета можно сравнить с этим. Однако, важно, что в конце произведения для каждого из них волна ушла и больше не вернулась."}},{"type":"warning","data":{"title":"","message":"Подводя итог, я уверенна, что перечитав книгу, можно заметить новые детали или заново влюбиться в серфинг и природу Австралии. Мне очень понравилась эта книга и я внесла её в свой топ-лист."}}]'
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
