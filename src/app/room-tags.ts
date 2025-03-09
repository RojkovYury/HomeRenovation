interface roomTag {
  id: string;
  top: string;
  left: string;
  room: string;
  title?: string;
  description: string;
  pics?: string[];
}

const roomTags = [
  {
    id: 'roomTags_coridor_0',
    top: '73.5%',
    left: '50.5%',
    room: 'Коридор',
    title: 'Входная дверь',
    description: '',
  },
  {
    id: 'roomTags_coridor_1',
    top: '70%',
    left: '41%',
    room: 'Коридор',
    title: 'Шкаф для одежды',
    description: '',
    pics: [],
  },
  {
    id: 'roomTags_coridor_2',
    top: '69%',
    left: '63%',
    room: 'Коридор',
    title: 'Шкаф для мелочи + скамья',
    description: '',
    pics: [],
  },
  {
    id: 'roomTags_gostinaya_0',
    top: '70%',
    left: '2%',
    room: 'Гостиная',
    title: 'Невостребованное окно',
    description: 'Окно смотрящее в стену соседнего дома и на небольшой кусок неиспользуемого участка, минимум естественного света.',
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
      'https://sun9-46.userapi.com/impg/TcLzaONDdYrra-pSuRIaZx2Lwhi9F5Zrnt5vFg/PVrK_aP-Fog.jpg?size=1280x1280&quality=95&sign=62686ceec10b92b4745849f9c0afa5a2&type=album',
    ],
  },
]

export { roomTags };
export type { roomTag };
