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
    description: '',
    pics: [
      'https://i.pinimg.com/736x/f7/2c/7e/f72c7e569c3997f9ab452a7de3205b6b.jpg',
      'https://i.pinimg.com/736x/ff/a1/e8/ffa1e864869f8e96deb709f0129bfd15.jpg',
    ],
  },
  {
    id: 'accordionTags_1',
    title: 'Плинтус',
    description: '',
    pics: [],
  },
  {
    id: 'accordionTags_2',
    title: 'Напольное покрытие',
    description: `
      Теплые полы по всему этажу, поэтому пол - только плитка. 
      Как они работают на других покрытиях категорически не нравится.
      </br></br>
      По всей площади ровный пол, без порожков, переходов и т.д.

    `,
    pics: [],
  },
  {
    id: 'accordionTags_3',
    title: 'Стены',
    description: '',
    pics: [],
  },
  {
    id: 'accordionTags_4',
    title: 'Окна Подоконики',
    description: `
      Перекрасить окна изнутри в черный цвет.</br>
      Заменить подоконики на те, что будут вровень к стене.</br>
    `,
    pics: [],
  },
  {
    id: 'accordionTags_5',
    title: 'Двери межкомнатные',
    description: 'Три двери в коридоре по правой стороне. <br /> Двери скрытого монтажа. <br /> Возможность рассмотреть варианты ручек, которые не может открыть собака (круглые, полые)',
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
      Теплый свет.</br></br>
      Три сценария освещения: </br>
      - Тусклый - ночной</br>
      - Стандартный</br>
      - Супер яркий</br></br>

      "Ночной" свет самый важный: </br>
      в жизни, на кухне мы пользуемся почти всегда только включенной подсветкой столешницы, 
      даже при готовке вечером. В туалете всегда горит неяркий свет. В самом доме, на лестнице постоянно 
      горят лампы. Даже на улице все дорожки, входная группа подсвечиваются круглосуточно.</br>
      То есть, тот самый как его называют "дежурный" свет, используется нами как постояный.</br>
      Больше подсветок богу подсветок!
      </br></br>
      Так же, нужен "яркий свет", в какой-то степени технический, возможно от одного источника освещения 
      в комнате, возможно холодного тона. Сценарий уборки, рисования и т.п. 

    `,
    pics: [],
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
    id: 'accordionTags_99',
    title: 'Точно НЕТ ',
    description: `
    - Растения. И любые узоры или оформления с изображением растений.
    </br></br>
    - Никаких мелких предметов ниже 0.7 метра, которые могут быть свалены или съедены.
    </br></br>
    - Картины с племенной темой, или в стиле современного искуства. В принципе пока не видел картин в интерере которые мне не хотелось бы сразу же снять. 
    </br></br>
    - Высокий плинтус
    </br></br>

    - Желтые оттенки на полу (обычно под светло дерево):
    </br></br>
      <img src='https://i.pinimg.com/736x/25/ea/c6/25eac60fca91242382349c846f31f6f2.jpg' style="width: 100%; border-radius: 16px; overflow: hidden;" alt="" />
    </br></br>

    - Полы ёлочкой или нестандартная укладка:
    </br></br>
      <img src='https://i.pinimg.com/736x/45/58/9d/45589d002abc02dd984b97ce9dbade32.jpg' style="width: 100%; border-radius: 16px; overflow: hidden;" alt="" />
    </br></br>

    `,
    pics: [],
  },
  
]

export { accordionTags };
export type { accordionTag };
