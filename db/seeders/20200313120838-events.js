'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [
          {
              date: '01.03.2020',
              timeStart: '19:00',
              timeEnd: '22:00',
              title: 'Стоп. Снято. Поэтический спектакль.',
              place: 'Галерея Астор'
          },
          {
              date: '05.03.2020',
              timeStart: '19:30',
              timeEnd: '21:00',
              title: 'Вечер с Солой Моновой. Интерактивный спектакль.',
              place: 'Малая сцена'
          },
          {
              date: '06.03.2020',
              timeStart: '20:00',
              timeEnd: '22:00',
              title: 'Я хотел сказать. Поэтический квартирник.',
              place: 'Циферблат'
          },
          {
              date: '06.03.2020',
              timeStart: '14:00',
              timeEnd: '22:00',
              title: 'Надувательные сны. Выставка.',
              place: 'арт-центр MAKARONKA'
          },
          {
              date: '07.03.2020',
              timeStart: '18:00',
              timeEnd: '21:00',
              title: 'ЛАВ. Спектакль.',
              place: 'Театр 18+'
          },
          {
              date: '07.03.2020',
              timeStart: '17:00',
              timeEnd: '21:00',
              title: 'Лекция «Фрида Кало. «Да здравствует жизнь!»',
              place: 'Галерея VEKARTA'
          },
          {
              date: '08.03.2020',
              timeStart: '20:00',
              timeEnd: '22:00',
              title: '«Фонтан: созерцание». Аудиовизуальный концерт',
              place: '16th LINE. Art gallery'
          },
          {
              date: '13.03.2020',
              timeStart: '19:00',
              timeEnd: '22:00',
              title: '«CIRCUS». Персональная выставка.',
              place: '16th LINE. Art gallery'
          },
          {
              date: '13.03.2020',
              timeStart: '18:30',
              timeEnd: '22:30',
              title: '«Тихий Дон». Спектакль.',
              place: 'Ростовский Театр Драмы им. М. Горького'
          },
          {
              date: '14.03.2020',
              timeStart: '17:00',
              timeEnd: '21:00',
              title: 'Культура России 20-го века.',
              place: 'Ресторан «Охотник»'
          },
          {
              date: '14.03.2020',
              timeStart: '10:00',
              timeEnd: '13:00',
              title: 'Ботаническая иллюстрация.',
              place: 'Циферблат'
          },
          {
              date: '14.03.2020',
              timeStart: '18:00',
              timeEnd: '22:00',
              title: '«Внутрення птица». Выставка.',
              place: 'Серпентарий 18+'
          },
          {
              date: '15.03.2020',
              timeStart: '11:00',
              timeEnd: '13:00',
              title: 'Собаки-якудза. Спектакль.',
              place: 'Ростовский Академический Молодежный Театр'
          },
          {
              date: '18.03.2020',
              timeStart: '19:00',
              timeEnd: '22:00',
              title: 'Про баб или история одного вечера. Спектакль.',
              place: 'Театр 18+'
          },
          {
              date: '19.03.2020',
              timeStart: '19:00',
              timeEnd: '22:00',
              title: 'Скульптура. Лекция.',
              place: 'Шолохов Центр'
          },
          {
              date: '20.03.2020',
              timeStart: '19:00',
              timeEnd: '22:00',
              title: 'Акико. Спектакль.',
              place: 'Театр 18+'
          },
          {
              date: '20.03.2020',
              timeStart: '19:00',
              timeEnd: '21:00',
              title: '«FORTE & PIANO». Вечер фортепианной музыки.',
              place: 'Ростовская государственная Филармония'
          },
          {
              date: '22.03.2020',
              timeStart: '16:00',
              timeEnd: '19:00',
              title: 'Один за всех и все за одного. Концерт виолончельной музыки.',
              place: 'Ростовский государственный музыкальный театр'
          },
          {
              date: '29.03.2020',
              timeStart: '19:00',
              timeEnd: '22:00',
              title: 'Ты куда?/Où?. Спектакль.',
              place: 'Театр 18+'
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Events', null, {});
  }
};