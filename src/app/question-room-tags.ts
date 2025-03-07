interface questionRoomTag {
  id: string;
  top: string;
  left: string;
  room: string;
  title: string;
  description: string;
  pics?: string[];
}

const questionRoomTags = [
  {
    id: 'questionTags_0',
    top: '52%',
    left: '11%',
    room: 'Гостиная',
    title: 'Камин',
    description: 'Тестовый Тег',
  },
]

export { questionRoomTags };
export type { questionRoomTag };
