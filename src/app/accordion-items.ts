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
    pics: [],
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
    description: '',
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
    description: '',
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
    description: '',
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
