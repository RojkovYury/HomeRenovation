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
    description: `
      <b>Сценарий:</b></br>
      - Необходимо два места для обувания.
      </br>
      - Шкаф не используется для хранения всей массы одежды, только текущая сезонная
      плюс что-то накинуть для гостей на вечер.
      </br>
      - Потребности куда-то ставить покупки при заходе в дом отсуствует.
      </br>
      - Не уверен на счет открытой вешалки для курток: они здорово смотрятся на рендерах, с этими шляпами и 
      деловыми пиджаками, но по факту это будут какие-нибудь пуховики зимой и садовые куртки летом.
      Лучше всё это скрыть.
      </br>
      - Будет wi-fi домофон, и наверное, я бы его прописал где-то между кухней и гостиной,
      продулировав на второй этаж, чтобы лишний раз не тащиться в грязную зону.
      </br>
      - На уличной лестнице есть подогрев ступенек, управление выведено слева от входной двери. 
      </br></br>
      Коллекция принтов отражающая общую концепцию, гамму и настрой помещения:
    `,
    pics: [
      'https://i.pinimg.com/736x/a0/8d/b0/a08db09c70d7e52346207b82e0387e7a.jpg',
      'https://i.pinimg.com/736x/de/47/ab/de47ab16d3396c242922340a528dd2ea.jpg',
      'https://i.pinimg.com/736x/a1/f3/41/a1f3410046976fde2711f7b705d77c99.jpg',
      'https://i.pinimg.com/736x/da/95/69/da9569de3a09a10a59c3c8183c298032.jpg',
      'https://i.pinimg.com/736x/c1/ec/14/c1ec140d77607950eaa16f84f1a6f474.jpg',
      'https://i.pinimg.com/736x/93/10/96/931096251f8c6fb91b1c43c08ea58325.jpg',
      'https://i.pinimg.com/736x/7e/65/8c/7e658c220e00e7cb657c3db31b121cc1.jpg',
    ],
  },
  {
    id: 'generalRoomTags_1',
    top: '68%',
    left: '19%',
    room: 'Гостиная',
    description: `
      С гостиной нет четкого понимания по расстановке. Но пожив много лет в исходном виде,
      пришли к таким сценариям:
      </br>
      - За 6 лет только два раза собирались посидеть вокруг камина как в каком-нибудь фильме.
      По сути, это декаративный элемент, он обязательно разжигается при какой-нибудь тусовке дома,
      но не является центром мероприятия.
      </br>



      </br></br>
      Коллекция принтов отражающая общую концепцию, гамму и настрой помещения
    `,
    pics: [
      'https://i.pinimg.com/736x/6e/31/72/6e3172cd2b0e8f003856f379f4948d06.jpg',
      'https://i.pinimg.com/736x/01/54/35/015435ee7c6a582b6eb96fb28addc983.jpg',
      'https://i.pinimg.com/736x/99/4f/4e/994f4e7563a8ba54648a340ed2541a50.jpg',
      'https://i.pinimg.com/736x/49/61/63/4961634763ca374221befdca9cb86084.jpg',
      'https://i.pinimg.com/736x/7e/80/8d/7e808dbc28c6ba01a747dd79704c5b88.jpg',
      'https://i.pinimg.com/736x/25/cd/f8/25cdf86d72b374803e831c1b42386ad3.jpg',
    ],
  },
  {
    id: 'generalRoomTags_2',
    top: '32%',
    left: '25%',
    room: 'Кухня',
    description: `
      Наверное, самая непонятная комната по планировке:</br></br>
      Мы мало готовим. Можно было бы сказать, что пройдет время и готовки станет с каждым годом всё больше,
      но по факту, с каждым таким годом мы как раз сокращаем время проведенное "за плитой". </br>
      То есть, готовить не любим и всячески пытаемся этого избегать.
      Все мероприятий дома - только фуршет на заказ. За весь 2024 год пользовались плитой раз шесть от силы.
      </br></br>
      А вторая проблема уже с левым флангом комнаты: </br>
      Принимать пищу предпочитаем в гостиной, там светлое окно и ТВ.
      Мероприятия с друзьями проходят там же. </br>
      Целесобразность полноценного обеденного стола под большим вопросом.</br>
      Городить вторую ТВ зону не хочется, а сценарий, что кто-то готовит, а другой(ие) сидит за барной стойкой то же сомнителен.
      </br></br>
      Чисто визуально привлекают острова совмещенные со столом: </br>
      вроде как недоостров, к которому не подойти со всех сторон,
      и недостол, за который можно усадить только половину предпологаемого народа,
      как раз, то что нам нужно.</br>
      Но подвох в частой беготне к уличной двери (собаки, сад летом).</br>
      Нужно смотреть по размерам.
      </br></br>
      Коллекция принтов отражающая общую концепцию, гамму и настрой помещения:
    `,
    pics: [
      'https://i.pinimg.com/736x/ce/6a/b3/ce6ab3dd38497eee66de4ea8b9e928d3.jpg',
      'https://i.pinimg.com/736x/09/1e/80/091e800cc1a401bced0c182a116a7ddf.jpg',
      'https://i.pinimg.com/736x/88/a7/ab/88a7abe6523d184abcd051cd939d85d4.jpg',
      'https://i.pinimg.com/736x/32/fc/43/32fc434cb52cb52851cedd832725d23f.jpg',
      'https://i.pinimg.com/736x/47/8b/da/478bda9141f94152673b277c1d43142a.jpg',
      'https://i.pinimg.com/736x/51/ea/7f/51ea7f015c2b159e9d84c55d8406f2cf.jpg',
      'https://i.pinimg.com/736x/24/ec/2f/24ec2fa6b1f765cccec5aa7b7c36c097.jpg',
      'https://sun9-68.userapi.com/impg/D390BN-m4DgnXPijXhNUDAvfzfVhQcUOycOCKw/dTbgXEU0URU.jpg?size=1080x810&quality=95&sign=52e04e988ccf2783e6af99a0fcf7856d&type=album',
      'https://sun9-10.userapi.com/impg/LTj9TaYaNG2g-T-L1bRje-5zuALyAhY5p0isIA/psx8r-cvUDU.jpg?size=736x900&quality=95&sign=37847d710677975baae32ce17a600ff8&type=album',
    ],
  },
  {
    id: 'generalRoomTags_3',
    top: '69%',
    left: '79%',
    room: 'Гостевая спальня',
    description: `
      - В прикроватные тумбочки вмонтировать кучу розеток.
      </br>
      - Нужно зеркало в полный рост, возможно в правом нижнем углу.
      </br></br>
      Коллекция принтов отражающая общую концепцию, гамму и настрой помещения
    `,
    pics: [
      'https://i.pinimg.com/736x/35/10/c4/3510c4ee1cda3bf2ba6ea1545a0e6b31.jpg',
      'https://i.pinimg.com/736x/8d/1a/19/8d1a194355a0e112ecdc3499c1ddbf11.jpg',
      'https://i.pinimg.com/736x/be/59/9c/be599c7c066cdf4ec9806810ed18d1ec.jpg',
      'https://i.pinimg.com/736x/da/fb/00/dafb00e40d8c50d3478848f3fb562512.jpg',
      'https://i.pinimg.com/736x/fc/ec/9a/fcec9a7530efd175032713d6799fc533.jpg',
      'https://i.pinimg.com/736x/a6/1f/08/a61f089eea2c0a0e3749c415ea4057fa.jpg',
      'https://i.pinimg.com/736x/02/6f/da/026fda385c078ab0e80009d7fdbcc28c.jpg',
      'https://i.pinimg.com/736x/75/11/c9/7511c95aa8ec01ce63f6741ba9196d8c.jpg',
      'https://i.pinimg.com/736x/c9/4d/94/c94d94468a4433329b6d189a25ed3318.jpg',
      'https://i.pinimg.com/736x/1e/b6/1a/1eb61a3b00a7b7f2c61f0218e356e4ba.jpg',
    ],
  },
  {
    id: 'generalRoomTags_4',
    top: '51.3%',
    left: '77.5%',
    room: 'Душевая',
    description: `
      Нравятся душевые в очень темных тонах.
      В комнате нет техники (стиральные машины и прочее), нет бытовой химии, и здесь не нужен склад текстиля.</br>
      С другой стороны, продолжительное время эта комната будет использоваться как основное и единственное место для душа,
      соответственно нужен небольшой шкаф для бутылочек, маленькой техники (фен и прочее), бритв и т.д..</br>
      Полотенцесушитель под вопросом. 
      </br>
      Придумать нишу куда можно подключить и спрятать колонку (саундбар)
      </br></br>
      Коллекция принтов отражающая общую концепцию, гамму и настрой помещения
    `,
    pics: [
      'https://i.pinimg.com/736x/b1/a4/89/b1a48992d88fd899684d68ec3681563b.jpg',
      'https://sun9-53.userapi.com/impg/E6ZTIyW_TcruU1SKkJdfBblGwk5Zr-1rUDUuDA/Hhk8uFuNfe0.jpg?size=1024x1024&quality=95&sign=c6325fbb703408eb194484cb8d9a55b8&type=album',
      'https://sun9-44.userapi.com/impg/he0b5nJ4IB9TNMLvhVcY21hS5NE9GUn8lRL15Q/a1_NgMSUcO4.jpg?size=720x964&quality=95&sign=12a8371dc7360544c47b8b1712217a7d&type=album',
      'https://sun9-4.userapi.com/impg/SbbcLP_LGaWuaCdzubpM1zyx2VvS6jc57bKqcQ/ULWWDl7D3Vs.jpg?size=735x1030&quality=95&sign=288cd53a1affb522f457843a037d3800&type=album',
      'https://sun9-12.userapi.com/impg/1yja-w5dz67u2hZhI9EkyiOpwSPOFr_jAYuxgw/gxCnK8E4Kxs.jpg?size=608x1080&quality=95&sign=d79077018ef382164721a013ba090c81&type=album',
      'https://i.pinimg.com/736x/9a/65/ae/9a65aebb035b9b30fcdb200a73750447.jpg',
      'https://i.pinimg.com/736x/a3/3b/c1/a33bc19e00a7e9c6eccba2ae918c32e1.jpg',
    ],
  },
]

export { generalRoomTags }; 
export type { generalRoomTag };
