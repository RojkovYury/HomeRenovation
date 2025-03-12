interface accordionTag {
  id: string;
  top: string;
  left: string;
  room: string;
  title: string;
  description?: string;
  pics?: string[];
}

const accordionTags = [
  {
    id: 'accordionTags_0',
    title: 'Цветовые схемы',
    description: `
      Играясь с бежевым и коричневым - главное не уйти в желтый, вариации оранжевого приемлимы.
    `,
    pics: [
      'https://i.pinimg.com/736x/f7/2c/7e/f72c7e569c3997f9ab452a7de3205b6b.jpg',
      'https://i.pinimg.com/736x/ff/a1/e8/ffa1e864869f8e96deb709f0129bfd15.jpg',
      'https://i.pinimg.com/736x/8e/7a/5a/8e7a5a41991b9a8b0db7866dcb2f8731.jpg',
      'https://i.pinimg.com/736x/ae/62/e8/ae62e8bfaccda6b776bd9f77ea1d21c8.jpg',
    ],
  },
  {
    id: 'accordionTags_1',
    title: 'Плинтус',
    description: `
      Минималистичный, минимально возможный высоты и без "лепнины".
      </br></br>
      И мы конечно без ума от теневого плинтуса, с эффектом паращей стены,
      но я технически не представляю на сколько это может быть сложно и как ударит по бюджету
      (наращивание стены? штрабление ста метров? У нас же из ниоткуда не появится зазор)
      </br></br>
      Так как у нас только одна стена с тремя дверьми в ряд, есть мысль сделать его только по этой стене,
      попав в зазор между дверьми. Но делать это вот так, для одной стены - наверное, не очень.
    `,
    pics: [
      'https://i.pinimg.com/736x/76/f4/66/76f4661c5c672aa1fc571ef933b08f91.jpg',
      'https://i.pinimg.com/736x/d1/a6/00/d1a6005bf4bee527f0aa5e9c78fc5bf4.jpg',
      'https://i.pinimg.com/736x/30/1c/06/301c06319678a95d8ab1306ba5851b18.jpg',
      'https://i.pinimg.com/736x/b6/3c/88/b63c8893d7007b518706b2657bc1a19b.jpg',
    ],
  },
  {
    id: 'accordionTags_2',
    title: 'Напольное покрытие',
    description: `
      Теплые полы по всему этажу, поэтому пол - плитка.
      </br></br>
      Плитка исключительно широкоформатная, без сложных рисунков.
      </br></br>
      По всей площади ровный пол, без порожков, переходов и т.д.
      </br></br>
      По всей площади одинаковое покрытие, чтобы избежать стыков.
      </br>
      Во всяком случае, это точно касается прихожей с гостиной и кухней, между ними нет дверей,
      соответственно не должно быть лишних "переходов".
      </br></br>
      Не нравится, когда плитка имитирует дерево, но имеет выраженный блеск,
      мне кажется это напрочь сбивает всё ощущение естественности.
      </br>
      Ну и в принципе, глянцевый пол - не очень.
      </br></br>
      Безумно понравилась широкоформатная плитка серого цвета, под камень/бетон.</br>
      Но я не нашел вменяемый рендер гостинной с таким покрытием. Возможно, у этого есть причина :)
    `,
    pics: [
      'https://i.pinimg.com/736x/2c/35/cb/2c35cbfd15180a8d92381bc33a5b4065.jpg',
      'https://i.pinimg.com/736x/cd/b0/92/cdb092ee2dfc89bbe37399521c83c5c6.jpg',
      'https://i.pinimg.com/736x/07/2a/1f/072a1fb5cde86466a8f19aba509cdecd.jpg',
      'https://i.pinimg.com/736x/44/02/27/440227e456cfce1b87567e385f8b620e.jpg',
      'https://i.pinimg.com/736x/96/67/67/96676711a4f7359ad52e8e9576975eda.jpg',
    ],
  },
  {
    id: 'accordionTags_3',
    title: 'Стены',
    description: `
      Интересны природые варианты.
      </br></br>
      Бетон, декаративная штукатурка, и всё это приправленное деревянными вставками - приветствуется.
    `,
    pics: [
      'https://i.pinimg.com/736x/3e/00/82/3e0082cd06fac3c5a42da2ee2273b046.jpg',
      'https://i.pinimg.com/736x/ee/6a/5a/ee6a5a1fb0fb02c11aca113a44f0aa82.jpg',
      'https://i.pinimg.com/736x/8a/bf/a9/8abfa902db2d10dd99a01e1b48211926.jpg',
      'https://i.pinimg.com/736x/8a/60/0d/8a600dcd2f2d92de316bd331d644f457.jpg',
    ],
  },
  {
    id: 'accordionTags_4',
    title: 'Окна Подоконики',
    description: `
      Перекрасить окна изнутри в черный цвет.
      </br>
      Заменить подоконики на те, что будут вровень к стене.
      </br>
      Откосы с подокоником так же в черный, либо в цвет по дизайну, но не белый.
      </br></br>
      Розетки для гирлянд
    `,
    pics: [
      'https://i.pinimg.com/736x/bc/db/6d/bcdb6dcd31fb5fb15da780e1a4559a5b.jpg',
      'https://i.pinimg.com/736x/a9/bb/3f/a9bb3f697f85086efa82166eac4a20df.jpg',
      'https://i.pinimg.com/736x/9d/44/e6/9d44e624130e43c0ffd77dde62a30086.jpg',
      'https://i.pinimg.com/736x/1f/ab/7e/1fab7e77f4658b148460c33479a3888f.jpg',
      'https://i.pinimg.com/736x/c4/cf/8a/c4cf8a334cb258304b9318a82e603df6.jpg',
    ],
  },
  {
    id: 'accordionTags_5',
    title: 'Двери межкомнатные',
    description: `
      Три двери в коридоре по правой стороне. 
      <br /> 
      Двери скрытого монтажа. 
      <br /> 
      Возможность рассмотреть варианты ручек, которые не может открыть собака (круглые, полые)
    `,
    pics: [
      'https://i.pinimg.com/736x/c2/82/5a/c2825ae3aed09d5ad92ed25c3ee1cd17.jpg',
      'https://i.pinimg.com/736x/c1/bd/e9/c1bde9122ad428938bc2b9a09efc0fda.jpg',
      'https://i.pinimg.com/736x/42/b9/2b/42b92b80d59aeef8f1727c6a1c7624b0.jpg',
    ],
  },
  {
    id: 'accordionTags_6',
    title: 'Освещение ',
    description: `
      Теплый свет.
      </br></br>
      Три сценария освещения: 
      </br>
      - Тусклый - ночной
      </br>
      - Стандартный
      </br>
      - Супер яркий
      </br></br>

      "Ночной" свет самый важный: 
      </br>
      в жизни, на кухне мы пользуемся почти всегда только включенной подсветкой столешницы, 
      даже при готовке вечером. В туалете всегда горит неяркий свет. В самом доме, на лестнице постоянно 
      горят лампы. Даже на улице все дорожки, входная группа подсвечиваются круглосуточно.
      </br>
      То есть, тот самый как его называют "дежурный" свет, используется нами как постояный.
      </br>
      Больше подсветок богу подсветок!
      </br></br>
      Так же, нужен "яркий свет", в какой-то степени технический, возможно от одного источника освещения 
      в комнате, возможно холодного тона. Сценарий уборки, рисования и т.п.
      </br></br>
      Нравится освещение вмонтированные в сетну.
      </br></br>
      Мне не очень нравится современная мода на висящие люстры сложной геометрической формы.
      </br></br>
    `,
    pics: [
      'https://i.pinimg.com/736x/1f/83/2b/1f832b36db2628c73e161ba9d7113ae7.jpg',
      'https://i.pinimg.com/736x/25/90/65/259065872023b044c0c98a9e74bd6be4.jpg',
      'https://i.pinimg.com/736x/3f/54/52/3f54521cc79f9168bb1f817b864d912c.jpg',
      'https://i.pinimg.com/736x/e0/7a/09/e07a09972366b5b4ec90e4d98ce16b61.jpg',
      'https://i.pinimg.com/736x/7a/4d/b3/7a4db3dfdf96c0a1634add7b6d815212.jpg',
      'https://i.pinimg.com/736x/d9/33/78/d9337857f37b8095214591051ce8f7c9.jpg',
      'https://i.pinimg.com/736x/ea/fd/6d/eafd6d2a4b88a9425923de4ff46fbd80.jpg',
    ],
  },
  {
    id: 'accordionTags_7',
    title: 'Радиаторы ',
    description: `
      Радиаторов нет нигде.
    `,
    pics: [],
  },
  {
    id: 'accordionTags_8',
    title: 'Кондиционирование ',
    description: `
      Достаточно холодный этаж даже в самый жаркий летний день и по сути не нуждается 
      в каком-то усложненном охлаждении.
      </br>
      За исключением гостевой спальни, в которое жарит устреннее солнце.
      </br></br>
      Нужны две системы, одна небольшая на спальню,
      </br>
      и вторая в гостиную комнату, без излишней мощности.
      </br></br>
      Точно не белого цвета. Отдаем и красим корпус, покупаем сразу черный/серый если дизайн позволяет,
      либо прячем.
    `,
    pics: [
      'https://i.pinimg.com/736x/56/fa/30/56fa30c05e9b433b7298af6f6fd32ad8.jpg',
      'https://i.pinimg.com/736x/c6/81/3a/c6813a5259adc3c32279ea131a791afa.jpg',
      'https://i.pinimg.com/736x/4a/ec/f7/4aecf7a45a03dc3ac6641d29b28e0138.jpg',
      'https://i.pinimg.com/736x/d0/ec/0c/d0ec0c3984aa6112bfe7b9a9337f0074.jpg',
      'https://i.pinimg.com/736x/5b/91/45/5b9145e4d38b7fc87fdf8725a8a776cc.jpg',
      'https://i.pinimg.com/736x/4d/bf/e8/4dbfe8e4cb0c5c2c38aed50eb683673d.jpg',
    ],
  },
  {
    id: 'accordionTags_9',
    title: 'Растения',
    description: `
      Просматривая картинки проектов, вижу обилие живых цветов, на подоконниках, кухне, журнальншом столе,
      тв тумбочке, в козинах, горшках, вазочках.
      </br>
      Это не наш вариант.
      </br></br>
      Все же, интересно одно растение на весь дизайн, но большое. Возможно дерево.
      </br></br>
      Но это всё как вариант.
    `,
    pics: [
      'https://i.pinimg.com/736x/49/98/53/49985363a6d9ea5c351fd23593f6452d.jpg',
      'https://i.pinimg.com/736x/30/5f/bf/305fbf96ff580a7b43e6e06fc23cf96c.jpg',
      'https://i.pinimg.com/736x/82/56/fb/8256fb6f3c9055f1c5fc571bab742209.jpg',
    ],
  },
  {
    id: 'accordionTags_99',
    title: 'Точно НЕТ ',
    description: `
    - Любые узоры или оформления с изображением растений.
    </br></br>
    - Никаких мелких предметов ниже 0.7 метра, которые могут быть свалены или съедены.
    </br></br>
    - Картины с племенной темой, или в стиле современного искуства.
    В принципе пока не видел картин в интерере которые мне не хотелось бы сразу же снять. 
    </br></br>
    - Высокий плинтус
    </br></br>

    - Желтые оттенки на полу (обычно под светлое дерево):
    </br></br>
      <img src='https://i.pinimg.com/736x/25/ea/c6/25eac60fca91242382349c846f31f6f2.jpg' style="width: 100%; border-radius: 16px; overflow: hidden;" alt="" />
    </br></br>

    - Полы ёлочкой или нестандартная укладка:
    </br></br>
      <img src='https://i.pinimg.com/736x/45/58/9d/45589d002abc02dd984b97ce9dbade32.jpg' style="width: 100%; border-radius: 16px; overflow: hidden;" alt="" />
    </br></br>

    - Не нравятся модные свисающий "на веревочках" лампы сложной геометрической формы
    </br></br>
      <img src='https://i.pinimg.com/736x/0b/24/44/0b24445cdcfd528dc32bc0df6c5e2a86.jpg' style="width: 100%; border-radius: 16px; overflow: hidden;" alt="" />
    </br></br>

    - Еще один модный тренд - декоративные деревянные панели с узорами.
    </br>
    Либо рейки, либо сплошное что-то, а эти нет.
    </br></br>
      <img src='https://i.pinimg.com/736x/49/a6/80/49a6801ce91574150c94ca370555b55d.jpg' style="width: 100%; border-radius: 16px; overflow: hidden;" alt="" />
      </br></br>
      <img src='https://i.pinimg.com/736x/c0/27/d3/c027d3a9e941a66b081359da2b2f0180.jpg' style="width: 100%; border-radius: 16px; overflow: hidden;" alt="" />
      </br></br>
      <img src='https://i.pinimg.com/736x/c4/db/e9/c4dbe9204d7970c99ff5a184a8ecb068.jpg' style="width: 100%; border-radius: 16px; overflow: hidden;" alt="" />
    </br></br>
    `,
    pics: [],
  },
  
]

export { accordionTags };
export type { accordionTag };
