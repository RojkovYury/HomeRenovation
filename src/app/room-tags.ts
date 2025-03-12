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
      Рассматриваем вариант смены входной двери под новый стиль. 
      </br>
      Должно быть сочетание коричневого кирпича снаружи и интерьера внутри. 
      </br>
      Ручка внутри не должна открываться собаками.
      </br></br>
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
    pics: [
      'https://i.pinimg.com/736x/82/56/fb/8256fb6f3c9055f1c5fc571bab742209.jpg',
      'https://i.pinimg.com/736x/51/74/ac/5174ac23e5714fa2701fc11192ae9ac8.jpg',
      'https://i.pinimg.com/736x/b2/17/f8/b217f88dbc1e72fba83b498cf0091ce4.jpg',
      'https://i.pinimg.com/736x/52/55/e3/5255e3360a44dee21ecbdced03e837ba.jpg',
      'https://i.pinimg.com/736x/89/87/4e/89874ec75943910d229752e69685e08a.jpg',
      'https://i.pinimg.com/736x/11/49/6f/11496f07414b8d8af71efda0a7440f6e.jpg',
      'https://i.pinimg.com/736x/51/cc/59/51cc5936bf656b00256d3af6aa7fc51d.jpg',
      'https://i.pinimg.com/736x/0b/4d/35/0b4d359b63c1f1bfe2058aabd6e55bfb.jpg',
    ],
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
    description: `
      У нас небольшой, неотделанный камин в классическом стиле.
      </br>
      С одной стороны, его форме не нравится, они не вписывается в концепцию.
      С другой - портить её тоже не хочется.
      </br>
      Что если изменить ему форму, но при это не разрушать изначальную кирпичную кладку?
      </br>
      Просто её "спрятать".
      </br></br>
      Ниша под дрова снизу неудобная, практически не используется, плюс её надо закрывать от собак.
    `,
    pics: [
      'https://i.pinimg.com/736x/18/c6/49/18c64913f56ef8a018e6345096a5156b.jpg',
      'https://i.pinimg.com/736x/ae/89/37/ae8937c111e4712ad89ef3bc9146e981.jpg',
      'https://i.pinimg.com/736x/b0/d6/48/b0d648de4d538e80ca2bd90b36d9dd44.jpg',
      'https://i.pinimg.com/736x/6f/2e/ea/6f2eeafceec07e9429871dadd131729f.jpg',
      'https://i.pinimg.com/736x/12/66/25/1266256fc23db43de4b751daf437da05.jpg',
    ],
  },
  {
    id: 'roomTags_gostinaya_1',
    top: '48%',
    left: '18%',
    room: 'Гостиная',
    title: 'Дрова',
    description: 'Можно разместить рядом с камином "стойку" для дров. В самом камине она маленькая и неудобная. Плюс, ниша должна быть без доступа для собак (они грызут деревяшки)',
    pics: [
      'https://i.pinimg.com/736x/18/bf/76/18bf7695915e4a1c1725a4d29441830d.jpg',
    ],
  },
  {
    id: 'roomTags_gostinaya_2',
    top: '70%',
    left: '34%',
    room: 'Гостиная',
    title: 'Стена под ТВ',
    description: `
      У нас две стены под телевизор, в гостевой спальне и гостиной, и каждую надо выделить на фоне остальных стен.
      </br>
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
      Объеденить окно и дверь в одну прозрачную большую дверь.
      </br>
      Выпускать собак на улицу и летом носить продукты из кухни через маленькую дверь крайне не удобно. 
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
    id: 'roomTags_cuhnya_1',
    top: '32%',
    left: '8%',
    room: 'Кухня',
    title: 'Левая сторона',
    description: `
      Как вариант стол/барная стойка совмещенный с островом.
      </br></br>
      Небольшая зона для собак с поилкой.
      </br></br>
      Вдоль стены (напротив камина) холодильник для напитков.
      </br>
      Сейчас есть мини холодильник на кухне, им активно пользуемся, и места не хватате.
      Бутылки с алкоголем различной формы, газированные напитки, соки.
      </br>
      Так же скапливается много подарочных бутылок вина и шампанского.
    `,
    pics: [
      'https://i.pinimg.com/736x/32/fc/43/32fc434cb52cb52851cedd832725d23f.jpg',
      'https://i.pinimg.com/736x/26/92/4a/26924af1d63ee811f87e37c447e82f81.jpg',
    ],
  },
  {
    id: 'roomTags_cuhnya_2',
    top: '43%',
    left: '38%',
    room: 'Кухня',
    title: 'Шкаф стена',
    description: `
      Очень нравится идея "завернуть" шкаф с полками по стене.
      </br>
      А "достроенную" часть стены надо убирать.
    `,
    pics: [
      'https://i.pinimg.com/736x/2c/85/25/2c8525b6a3b03a3381b447e7dc6591f0.jpg',
      'https://i.pinimg.com/736x/d3/ca/e1/d3cae13fe10021381f56127f59a876f9.jpg',
      'https://i.pinimg.com/736x/ca/80/f1/ca80f17c91fc5fefa2388477291b53a5.jpg',
      'https://i.pinimg.com/736x/f5/a3/0f/f5a30f952afe7bb3ba358073cfb564ac.jpg',
      'https://i.pinimg.com/736x/dd/bb/cb/ddbbcb1b6b0b6a298c97ecb171036247.jpg',
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
    id: 'roomTags_cuhnya_2',
    top: '43%',
    left: '38%',
    room: 'Кухня',
    title: 'Шкаф стена',
    description: `
      Очень нравится идея "завернуть" шкаф с полками по стене.</br>
      А "достроенную" часть стены надо убирать.
    `,
    pics: [
      'https://i.pinimg.com/736x/2c/85/25/2c8525b6a3b03a3381b447e7dc6591f0.jpg',
      'https://i.pinimg.com/736x/d3/ca/e1/d3cae13fe10021381f56127f59a876f9.jpg',
      'https://i.pinimg.com/736x/ca/80/f1/ca80f17c91fc5fefa2388477291b53a5.jpg',
      'https://i.pinimg.com/736x/f5/a3/0f/f5a30f952afe7bb3ba358073cfb564ac.jpg',
      'https://i.pinimg.com/736x/dd/bb/cb/ddbbcb1b6b0b6a298c97ecb171036247.jpg',
    ],
  },
  {
    id: 'roomTags_cuhnya_3',
    top: '34%',
    left: '44%',
    room: 'Кухня',
    title: 'Зона готовки',
    description: `
      Прямая столешница.
      </br></br>
      Две комфорки? Я просто не могу представить ситуацию, когда может понадобится сразу больше двух одновременно,
      с учетом микроволновки, электрочайника и плиты от того же электричества.
      </br></br>
      Мы не самого большого роста, надо уточнять высоту столешницы.
      </br></br>
      Встраивамая техника.
    `,
    pics: [
      'https://i.pinimg.com/736x/44/ff/ad/44ffad43d4f37a0b6799657ca65ca0ab.jpg',
      'https://i.pinimg.com/736x/ce/9f/4a/ce9f4ae7b14e7481791a73ddab725940.jpg',
      'https://i.pinimg.com/736x/2f/55/58/2f55583a26ca07c9822f81e97c0a9d51.jpg',
      'https://i.pinimg.com/736x/69/25/21/6925212d35da3fe51ede9c0dabe4645c.jpg',
    ],
  },
  {
    id: 'roomTags_cuhnya_4',
    top: '23%',
    left: '42%',
    room: 'Кухня',
    title: 'Шкаф стена 2',
    description: `
      Безумно нравится концепция, когда шкаф идет по стене и в него "впадает" столешница.
      </br>
      На рендере духовой шкаф видимо наполовину торчит на улице.
    `,
    pics: [
      'https://i.pinimg.com/736x/09/1e/80/091e800cc1a401bced0c182a116a7ddf.jpg',
    ],
  },
  {
    id: 'roomTags_spalnya_0',
    top: '61%',
    left: '81%',
    room: 'Гостевая спальня',
    title: 'Шкаф',
    description: `
      Шкаф во всю стену, возможно с каим-то акцентом в виде стеклянной вертикальной полки
    `,
    pics: [
      'https://i.pinimg.com/736x/69/e6/07/69e607a01fba078baf744f7909e14a31.jpg',
      'https://i.pinimg.com/736x/54/27/b3/5427b3fee1274b1511f230ab2ecbaeb7.jpg',
      'https://i.pinimg.com/736x/c9/26/a3/c926a3ac440f7199fdd752f0eb50e43b.jpg',
      'https://i.pinimg.com/736x/31/92/23/319223080bc202953649c069e8162024.jpg',
      'https://i.pinimg.com/736x/7a/c4/31/7ac431752647c8dd201697b17a30feb1.jpg',
    ],
  },
  {
    id: 'roomTags_spalnya_1',
    top: '71%',
    left: '89%',
    room: 'Гостевая спальня',
    title: 'Кровать',
    description: `
      Нужна максимально большая кровать.
      </br>
      То, что ногами к выходу - вообще пофиг
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
      Если в гостиной уйти оформлением ТВ зоны в камень, здесь можно отделать её деревянными рейками.
    `,
    pics: [
      'https://i.pinimg.com/736x/7e/80/8d/7e808dbc28c6ba01a747dd79704c5b88.jpg',
      'https://i.pinimg.com/736x/84/18/29/841829406982590efe0ad74170eefee6.jpg',
      'https://i.pinimg.com/736x/2c/db/62/2cdb626f2e72c59191e24ddac8f83b47.jpg',
      'https://i.pinimg.com/736x/7b/df/ef/7bdfef7d08970dccaa1a761ac73b619a.jpg',
      'https://i.pinimg.com/736x/af/62/b1/af62b159ec86f57f755666938080afa1.jpg',
    ],
  },
  {
    id: 'roomTags_spalnya_3',
    top: '82%',
    left: '73%',
    room: 'Гостевая спальня',
    title: 'Стол',
    description: `
      К ТВ-зоне примыкает дамский стол с зеркалом.
      </br>
      Очень круто выглядит, когда панель (шкафчик) от ТВ на равзных уровнях со столом.
    `,
    pics: [
      'https://i.pinimg.com/736x/3e/e4/c2/3ee4c20e3a25c689cbd372104abe7110.jpg',
      'https://i.pinimg.com/736x/e5/65/f6/e565f69f9ad5fa1a3f34d07ffd4de9c5.jpg',
      'https://i.pinimg.com/736x/25/c5/01/25c501c9ba38ea1b122977d30ba467d5.jpg',
      'https://i.pinimg.com/736x/32/38/65/32386562d7ebe8e3e5e7364b18c6714b.jpg',
      'https://i.pinimg.com/736x/02/e7/eb/02e7eb2fc0409a4df6e096b632e3511f.jpg',
      'https://i.pinimg.com/736x/e9/93/40/e993400f93f7524d5287e17ec06c1395.jpg',
    ],
  },
  {
    id: 'roomTags_dush_0',
    top: '49%',
    left: '77%',
    room: 'Душевая',
    title: 'Раковина',
    description: `
      Хотим раковину из камня. Даже пускай это уже совсем не модно.
      </br>
    `,
    pics: [
      'https://i.pinimg.com/736x/6b/bd/bc/6bbdbc13ec95b1f7e09e950c9cd5c495.jpg',
      'https://i.pinimg.com/736x/05/25/25/052525d52c614ef45b1a5888568a1e22.jpg',
      'https://i.pinimg.com/736x/55/04/6c/55046c868b6323aeb7318568acef38e8.jpg',
      'https://i.pinimg.com/736x/90/d9/4b/90d94b82067e8ef2277dd2f3063d30ff.jpg',
      'https://i.pinimg.com/736x/9d/bb/ca/9dbbcae22a73a09dc44aa885d2fcd500.jpg',
      'https://i.pinimg.com/736x/a6/ef/e5/a6efe55d6d64261452eb432c6f8f33b8.jpg',
    ],
  },
  {
    id: 'roomTags_dush_1',
    top: '49%',
    left: '82%',
    room: 'Душевая',
    title: 'Унитаз',
    description: `
      Очень интересует скрытый монтаж туалетной бумаги, ёршика и небольшого мусорного ведра.
      </br>
      Ведро не требует дополнительной вентиляции, канализация позволяет смывать бумагу.
      </br>
      Сейчас в душевой стоит инсталяция, то есть стены хватает под плоский бачок.
      </br>
      Не белый унитаз.
    `,
    pics: [
      'https://i.pinimg.com/736x/2e/d1/44/2ed1449ae61f87de2202aadf42603f91.jpg',
      'https://i.pinimg.com/736x/2d/0c/9f/2d0c9fab4484b7252fefc05b3b582244.jpg',
      'https://i.pinimg.com/736x/5a/bd/97/5abd97472ccac68537223ad889accb3e.jpg',
      'https://i.pinimg.com/736x/75/5c/14/755c1411fa6b13c225b693a38afa599e.jpg',
      'https://i.pinimg.com/736x/cd/be/1d/cdbe1d135d4aaee7e5c0a60993e01aa2.jpg',
      'https://i.pinimg.com/736x/82/93/68/82936803238f6d3d6720d3be760100e1.jpg',
    ],
  },
  {
    id: 'roomTags_dush_2',
    top: '53%',
    left: '89%',
    room: 'Душевая',
    title: 'Душ',
    description: `
      Место в самом душе, куда можно сесть.
      </br>
    `,
    pics: [
      'https://i.pinimg.com/736x/4a/84/3d/4a843d90cb34cd95aa51dee484eebadc.jpg',
      'https://i.pinimg.com/736x/12/82/c4/1282c42b496c68e34ad7a555f89c8843.jpg',
      'https://i.pinimg.com/736x/30/43/d2/3043d25bad50f3dcbc7ae7dc52cf9449.jpg',
      'https://i.pinimg.com/736x/5e/39/07/5e3907617543ec010341baa76df902e4.jpg',
      'https://i.pinimg.com/736x/0f/dd/16/0fdd16950911f237bba97d7a09e3a974.jpg',
    ],
  },
]

export { roomTags };
export type { roomTag };
