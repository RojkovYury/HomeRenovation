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
    id: 'roomTags_0',
    top: '73.5%',
    left: '50.5%',
    room: 'Коридор',
    title: 'Входная дверь',
    description: 'Нужно ли менять дверь? Домофон wi-fi. Подогрев лестницы',
  },
  {
    id: 'roomTags_1',
    top: '64%',
    left: '41%',
    room: 'Коридор',
    title: 'Шкаф для одежды',
    description: 'Описание',
    pics: ['/images/2/1.jpg', '/images/2/2.jpg', '/images/2/3.jpg', '/images/2/4.jpg', '/images/2/5.jpg'],
  },
  {
    id: 'roomTags_2',
    top: '69%',
    left: '63%',
    room: 'Коридор',
    title: 'Шкаф для мелочи + скамья',
    description: 'Описание',
    pics: [
      'https://i.pinimg.com/736x/49/2a/48/492a48ec35c97cb168cab496ca3d0ef9.jpg',
      'https://i.pinimg.com/736x/04/94/a0/0494a014804553f17ac964cc380115d8.jpg',
    ],
  },
  {
    id: 'roomTags_3',
    top: '48%',
    left: '43%',
    room: 'Коридор',
    description: 'Нужно ли менять дверь? Домофон wi-fi. Подогрев лестницы',
    question: true,
  },
]

export { roomTags };
export type { roomTag };
