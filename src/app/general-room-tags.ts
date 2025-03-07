interface generalRoomTag {
  id: string;
  top: string;
  left: string;
  room: string;
  description: string;
  pics?: string[];
}

const generalRoomTags = [
  {
    id: 'generalRoomTags_0',
    top: '59%',
    left: '51%',
    room: 'Коридор',
    description: 'Коллекция принтов отражающая общую концепцию, гамму и настрой помещения',
  },
  {
    id: 'generalRoomTags_1',
    top: '68%',
    left: '20%',
    room: 'Гостинная',
    description: 'Коллекция принтов отражающая общую концепцию, гамму и настрой помещения',
  },
  {
    id: 'generalRoomTags_2',
    top: '32%',
    left: '25%',
    room: 'Кухня',
    description: 'Коллекция принтов отражающая общую концепцию, гамму и настрой помещения',
    pics: [
      'https://i.pinimg.com/736x/ce/6a/b3/ce6ab3dd38497eee66de4ea8b9e928d3.jpg',
      'https://i.pinimg.com/736x/09/1e/80/091e800cc1a401bced0c182a116a7ddf.jpg',
      'https://i.pinimg.com/736x/88/a7/ab/88a7abe6523d184abcd051cd939d85d4.jpg',
      'https://i.pinimg.com/736x/32/fc/43/32fc434cb52cb52851cedd832725d23f.jpg',
      'https://sun9-68.userapi.com/impg/D390BN-m4DgnXPijXhNUDAvfzfVhQcUOycOCKw/dTbgXEU0URU.jpg?size=1080x810&quality=95&sign=52e04e988ccf2783e6af99a0fcf7856d&type=album',
      'https://sun9-10.userapi.com/impg/LTj9TaYaNG2g-T-L1bRje-5zuALyAhY5p0isIA/psx8r-cvUDU.jpg?size=736x900&quality=95&sign=37847d710677975baae32ce17a600ff8&type=album',
    ],
  },
  {
    id: 'generalRoomTags_3',
    top: '69%',
    left: '77.5%',
    room: 'Гостевая спальня',
    description: 'Коллекция принтов отражающая общую концепцию, гамму и настрой помещения',
  },
  {
    id: 'generalRoomTags_4',
    top: '51.3%',
    left: '77.5%',
    room: 'Душевая',
    description: 'Коллекция принтов отражающая общую концепцию, гамму и настрой помещения',
    pics: [
      'https://sun9-53.userapi.com/impg/E6ZTIyW_TcruU1SKkJdfBblGwk5Zr-1rUDUuDA/Hhk8uFuNfe0.jpg?size=1024x1024&quality=95&sign=c6325fbb703408eb194484cb8d9a55b8&type=album',
      'https://sun9-44.userapi.com/impg/he0b5nJ4IB9TNMLvhVcY21hS5NE9GUn8lRL15Q/a1_NgMSUcO4.jpg?size=720x964&quality=95&sign=12a8371dc7360544c47b8b1712217a7d&type=album',
      'https://sun9-4.userapi.com/impg/SbbcLP_LGaWuaCdzubpM1zyx2VvS6jc57bKqcQ/ULWWDl7D3Vs.jpg?size=735x1030&quality=95&sign=288cd53a1affb522f457843a037d3800&type=album',
      'https://sun9-12.userapi.com/impg/1yja-w5dz67u2hZhI9EkyiOpwSPOFr_jAYuxgw/gxCnK8E4Kxs.jpg?size=608x1080&quality=95&sign=d79077018ef382164721a013ba090c81&type=album',
    ],
  },
]

export { generalRoomTags }; 
export type { generalRoomTag };
