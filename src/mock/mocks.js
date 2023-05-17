import {getRandomArrayElement, getRandomNumber} from '../utils/common.js';

const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 1,
        'title': 'Выбрать радиостанцию',
        'price': 120
      },
      {
        'id': 2,
        'title': 'Заказать Uber',
        'price': 20
      },
      {
        'id': 3,
        'title': 'Некурящий водитель',
        'price': 5
      },
      {
        'id': 4,
        'title': 'Детское кресло',
        'price': 5
      },
    ]
  },

  {
    'type': 'bus',
    'offers': [
      {
        'id': 1,
        'title': 'Выбрать радиоостанцию',
        'price': 120
      },
      {
        'id': 2,
        'title': 'Место у окна',
        'price': 20
      },
      {
        'id': 3,
        'title': 'Откидывающееся сиденье',
        'price': 20
      }
    ]
  },

  {
    'type': 'flight',
    'offers': [
      {
        'id': 1,
        'title': 'Добавить багаж',
        'price': 30
      },
      {
        'id': 2,
        'title': 'Бизнес-класс',
        'price': 100
      },
      {
        'id': 3,
        'title': 'Веганский обед',
        'price': 15
      },
      {
        'id': 4,
        'title': 'Выбрать место',
        'price': 5
      },
      {
        'id': 5,
        'title': 'Такси у трапа',
        'price': 40
      },
    ]
  },

  {
    'type': 'train',
    'offers': [{
      'id': 1,
      'title': 'Выбрать радиостанцию',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Нижняя полка',
      'price': 20
    }]
  },

  {
    'type': 'ship',
    'offers': []
  },

  {
    'type': 'drive',
    'offers': [{
      'id': 1,
      'title': 'Некурящий водитель',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Кондиционер в салоне',
      'price': 20
    }]
  },

  {
    'type': 'check-in',
    'offers': [{
      'id': 1,
      'title': 'Дополнительная уборка',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Раннее заселение',
      'price': 20
    }]
  },

  {
    'type': 'sightseeing',
    'offers': [{
      'id': 1,
      'title': 'Вход без очереди',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Персональный гид',
      'price': 20
    },
    {
      'id': 3,
      'title': 'Ланч включен',
      'price': 20
    }
    ]
  },

  {
    'type': 'restaurant',
    'offers': [{
      'id': 1,
      'title': 'Столик у окна',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Персональный официант',
      'price': 20
    }]
  },
];

const mockDestinations = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1,10)}`,
        description: 'Sed blandit, eros vel aliquam faucibus'
      }
    ]
  },
  {
    id: 2,
    description: 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    name: 'Geneve',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1,10)}`,
        description: 'Sed blandit, eros vel aliquam faucibus'
      }
    ]
  },
  {
    id: 3,
    description: 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1,10)}`,
        description: 'Sed blandit, eros vel aliquam faucibus'
      }
    ]
  }
];

const mockPoints = [
  {
    id: 0,
    type: 'taxi',
    offers: [1, 2],
    basePrice: 500,
    dateFrom: '2023-01-11T03:30:56.845Z',
    dateTo: '2023-02-12T05:00:13.375Z',
    isFavorite: true
  },
  {
    id: 1,
    type: 'bus',
    offers: [1, 3],
    basePrice: 40,
    dateFrom: '2023-09-11T03:30:56.845Z',
    dateTo: '2023-09-12T04:00:13.375Z',
    isFavorite: true
  },
  {
    id: 2,
    type: 'train',
    offers: [1, 2],
    basePrice: 200,
    dateFrom: '2023-10-11T03:30:56.845Z',
    dateTo: '2023-10-12T06:00:13.375Z',
    isFavorite: true
  },
  {
    id: 3,
    type: 'ship',
    offers: [1, 2],
    basePrice: 80,
    dateFrom: '2023-05-10T03:30:56.845Z',
    dateTo: '2023-05-17T04:00:13.375Z',
    isFavorite: true
  },
  {
    id: 4,
    type: 'drive',
    offers: [1, 2],
    basePrice: 90,
    dateFrom: '2023-07-11T03:30:56.845Z',
    dateTo: '2023-07-12T07:00:13.375Z',
    isFavorite: true
  },
  {
    id: 5,
    type: 'flight',
    offers: [1, 2, 3],
    basePrice: 150,
    dateFrom: '2023-03-11T03:30:56.845Z',
    dateTo: '2023-03-12T03:45:13.375Z',
    isFavorite: true
  },
  {
    id: 6,
    type: 'check-in',
    offers: [1, 2],
    basePrice: 150,
    dateFrom: '2023-02-11T03:30:56.845Z',
    dateTo: '2023-02-12T05:30:13.375Z',
    isFavorite: false
  },
  {
    id: 7,
    type: 'sightseeing',
    offers: [1, 2],
    basePrice: 100,
    dateFrom: '2023-05-11T03:30:56.845Z',
    dateTo: '2023-05-21T07:00:13.375Z',
    isFavorite: false
  },
  {
    id: 8,
    type: 'restaurant',
    offers: [1, 2],
    basePrice: 100,
    dateFrom: '2023-05-10T03:30:56.845Z',
    dateTo: '2023-05-20T04:15:13.375Z',
    isFavorite: false
  }
];

const getRandomPoint = () => (getRandomArrayElement(mockPoints));

export { mockPoints, mockDestinations, mockOffers, getRandomPoint};

