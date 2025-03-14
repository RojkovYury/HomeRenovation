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
    id: 'questionTags_cuhnya_0',
    top: '47%',
    left: '32%',
    room: 'Кухня',
    // title: 'Стена',
    description: 'Стена между входом на кухню и входом в гостиную "картонная", достроенная. На схеме этот кусок ошибочно отображен несущим',
  },
  {
    id: 'questionTags_cuhnya_1',
    top: '21%',
    left: '45%',
    room: 'Кухня',
    description: 'Вывод газовой трубы и канализации',
  },
  {
    id: 'questionTags_cuhnya_2',
    top: '34%',
    left: '2%',
    room: 'Кухня',
    description: 'Окно смотрящее в стену соседнего дома и на небольшой кусок неиспользуемого участка, минимум естественного света.',
  },
  {
    id: 'questionTags_cuhnya_3',
    top: '14%',
    left: '21%',
    room: 'Кухня',
    description: '',
    pics: ['https://sun9-46.userapi.com/impg/TcLzaONDdYrra-pSuRIaZx2Lwhi9F5Zrnt5vFg/PVrK_aP-Fog.jpg?size=1280x1280&quality=95&sign=62686ceec10b92b4745849f9c0afa5a2&type=album',],
  },
  {
    id: 'questionTags_gostinaya_0',
    top: '70%',
    left: '2%',
    room: 'Гостиная',
    description: 'Окно смотрящее в стену соседнего дома и на небольшой кусок неиспользуемого участка, минимум естественного света.',
  },
  {
    id: 'questionTags_dush_0',
    top: '49%',
    left: '80%',
    room: 'Душевая',
    description: 'Вывод канализации и воды с этой стороны',
  },
  {
    id: 'questionTags_coridor_0',
    top: '36%',
    left: '63%',
    room: 'Коридор',
    description: `
      Тут, в дальнейшем, предполагается размещение роботов-пылесосов и прочей обслуживающей техники.\
      </br>
      То есть, ни в гостиной, ни на кухне специальные отделения под пних не нужны.
    `,
    pics: [],
  },
  {
    id: 'questionTags_spalnya_0',
    top: '87%',
    left: '81%',
    room: 'Гостевая спальня',
    description: `
      Окно в спальне, в которое утром жестко бьет Солнце. </br>
    `,
    pics: [],
  },
]

export { questionRoomTags };
export type { questionRoomTag };
