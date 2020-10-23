import image from './assets/image.png'
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  ColumnsBlock,
} from './classes/Block'

export const model = [
  new TitleBlock('Конструктор на JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#green',
      'text-align': 'center',
      padding: '1.5rem',
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Картинка',
  }),
  new TextBlock(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, architecto.',
    {
      styles: {
        background: 'linear-gradient(to right, #f2994a, #f2c94c)',
        'font-weight': 'bold',
        padding: '1rem',
      },
    }
  ),
  new ColumnsBlock(
    [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, architecto.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, architecto.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, architecto.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, architecto.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, architecto.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, architecto.',
    ],
    {
      styles: {
        background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
        color: '#fff',
        'font-weight': 'bold',
        padding: '2rem',
      },
    }
  ),
]
