interface roomTag {
  id: string;
  top: string;
  left: string;
  room: string;
  title?: string;
  description: string;
  pics?: string[];
  links?: string[];
}

const roomTags = [
  {
    id: 'roomTags_coridor_0',
    top: '73.5%',
    left: '50.5%',
    room: 'Коридор',
    title: 'Входная дверь',
    description: `
      Рассматриваем вариант смены входной двери под новый стиль. </br>
      Должно быть сочетание коричневого кирпича снаружи и интерьера внутри. </br>
      Ручка внутри не должна открываться собаками.</br></br>
    `,
    pics: [
      'https://tula.zsdoor.ru/upload/resizer2/1/cb1/cb1c7c19f39e50c1ee99db4901e259c0.jpg',
    ],
    links: ['https://tula.zsdoor.ru/catalog/elitnye-dveri/elitnaya-dver-4.html'],
  },
  {
    id: 'roomTags_coridor_1',
    top: '70%',
    left: '41%',
    room: 'Коридор',
    title: 'Шкаф для одежды',
    description: `
      Шкаф не используется для хранения всей массы одежды, только текущая сезонная плюс что-то накинуть для гостей на вечер.
      </br>
      Необходимы отделения для шапок/перчаток и принадлежностей для выгула собак.
      </br></br>
      Очень нравится такая компоновка:
    `,
    pics: ['https://i.pinimg.com/736x/82/56/fb/8256fb6f3c9055f1c5fc571bab742209.jpg'],
  },
  {
    id: 'roomTags_coridor_2',
    top: '69%',
    left: '63%',
    room: 'Коридор',
    title: 'Отделение для мелочи + скамья',
    description: 'В этот угол поставить небольшое отделение для мелочовки и второе место для обувания, перпендикулярно друг другу',
    pics: [
      'https://i.pinimg.com/736x/79/48/e8/7948e864270ac4dc5bdae3f7ff3579b7.jpg',
      'https://i.pinimg.com/736x/b8/7d/da/b87ddad1273dd928efbaa6d1fa8ff254.jpg',
    ],
  },
  {
    id: 'roomTags_gostinaya_0',
    top: '52%',
    left: '9%',
    room: 'Гостиная',
    title: 'Камин',
    description: '',
  },
  {
    id: 'roomTags_gostinaya_1',
    top: '48%',
    left: '18%',
    room: 'Гостиная',
    title: 'Дрова',
    description: 'Можно разместить рядом с камином "стойку" для дров. В самом камине она маленькая и неудобная. Плюс, ниша должна быть без доступа для собак (они грызут деревяшки)',
    pics: ['https://i.pinimg.com/736x/18/bf/76/18bf7695915e4a1c1725a4d29441830d.jpg'],
  },
  {
    id: 'roomTags_gostinaya_2',
    top: '70%',
    left: '34%',
    room: 'Гостиная',
    title: 'Стена под ТВ',
    description: `
      У нас две стены под телевизор, в гостевой спальне и гостиной, и каждую надо выделить на фоне остальных стен. </br>
      Интересны варианты имитации камня.
    `,
    pics: [
      'https://i.pinimg.com/736x/0b/e5/30/0be5301e139df93890ae2c32bbf80806.jpg',
      'https://i.pinimg.com/736x/73/05/1f/73051f2543843ad5be7821c34eda6101.jpg',
      'https://i.pinimg.com/736x/cf/15/9d/cf159d3de8425a54682e880bb8425ef0.jpg',
      'https://i.pinimg.com/736x/62/e6/33/62e633df1b7c529cc485b1687859268f.jpg',
      'https://i.pinimg.com/736x/d0/fb/ea/d0fbeaa1aba5160e3602e01622b0aaff.jpg',
      'https://i.pinimg.com/736x/1f/6d/94/1f6d94cc13b3a017a5792fd77257aa12.jpg',
      'https://i.pinimg.com/736x/2f/76/66/2f76662fad5f2b275eb608e200a91e03.jpg',
    ],
  },
  {
    id: 'roomTags_cuhnya_0',
    top: '18%',
    left: '21%',
    room: 'Кухня',
    title: 'Дверь на улицу',
    description: `
      </br>
    `,
    pics: [
      'https://i.pinimg.com/736x/20/af/1b/20af1be477429cfad6af4d652396f8c4.jpg',
      'https://i.pinimg.com/736x/3b/de/0b/3bde0b557df7e453a948164c58067561.jpg',
      'https://i.pinimg.com/736x/9a/36/21/9a362172f79b49ed10d97b5e214c7305.jpg',
      'https://i.pinimg.com/736x/1b/67/80/1b6780d4dc84e2418ff7b5957026a382.jpg',
      'https://i.pinimg.com/736x/4c/ed/6f/4ced6f9ddce9faa1485dcc1a3a9c9108.jpg',
      'https://i.pinimg.com/736x/62/a5/69/62a569a5e88021b677e8caf2d2e3d49e.jpg',
      'https://i.pinimg.com/736x/30/43/d4/3043d4e19196da5098a1b707bc8aa725.jpg',
      'https://i.pinimg.com/736x/2c/88/bd/2c88bd8086ecfab2d37cc8fe129e8f03.jpg',
      'https://i.pinimg.com/736x/ae/01/b0/ae01b0dbf247b48f8b64e560c4258491.jpg',
    ],
  },
  {
    id: 'roomTags_spalnya_0',
    top: '61%',
    left: '81%',
    room: 'Гостевая спальня',
    title: 'Шкаф',
    description: `
      </br>
    `,
    pics: [

    ],
  },
  {
    id: 'roomTags_spalnya_1',
    top: '71%',
    left: '89%',
    room: 'Гостевая спальня',
    title: 'Кровать',
    description: `
      Ногами к выходу - вообще пофиг
      </br>
    `,
    pics: [

    ],
  },
  {
    id: 'roomTags_spalnya_2',
    top: '71%',
    left: '71%',
    room: 'Гостевая спальня',
    title: 'ТВ зона',
    description: `
      </br>
    `,
    pics: [

    ],
  },
  {
    id: 'roomTags_spalnya_3',
    top: '82%',
    left: '81%',
    room: 'Гостевая спальня',
    title: 'Стол',
    description: `
      Стол должен совмещать рабочее пространство под ноутбук и дамский уголок.
      </br>
      (по сути два посадочных места).
    `,
    pics: [

    ],
  },
]

export { roomTags };
export type { roomTag };
