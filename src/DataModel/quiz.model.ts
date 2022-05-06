import { QuizModelType } from '../types/quiz.types';

export const QuizModel: QuizModelType[] = [
  {
    quizName: 'html',
    quizCategory: 'easy',
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1650704923/P5ZYmONNF6pgwbBx-zqQWdWnpgQH0S-RGmDRUHpy8CSeaLHLdIFlFiP6hpCAbp192A_ujxeog.png',
    quizId: '71850543-9797-4093-bc63-1e6b26df5d26',
    points: 5,
    questions: [
      {
        question: 'Which of the following is used to create Web Pages ?',
        point: 5,
        options: [
          {
            value: 'C++',
            isRight: false,
          },
          {
            value: 'JAVA',
            isRight: false,
          },
          {
            value: 'HTML',
            isRight: true,
          },
          {
            value: 'C#',
            isRight: false,
          },
        ],
      },
      {
        question: 'HTML tags are used to describe document _______.',
        point: 5,
        options: [
          {
            value: 'definition',
            isRight: false,
          },
          {
            value: 'content',
            isRight: false,
          },
          {
            value: 'language',
            isRight: false,
          },
          {
            value: 'model',
            isRight: true,
          },
        ],
      },
      {
        question: 'HTML program is saved using ______ extension.',
        point: 5,
        options: [
          {
            value: '.htmn',
            isRight: false,
          },
          {
            value: '.html',
            isRight: true,
          },
          {
            value: '.htnl',
            isRight: false,
          },
          {
            value: '.js',
            isRight: false,
          },
        ],
      },
      {
        question: 'HTML is a programming language - TRUE or FALSE',
        point: 5,
        options: [
          {
            value: 'TRUE',
            isRight: false,
          },
          {
            value: 'FALSE',
            isRight: true,
          },
        ],
      },
      {
        question: 'HTML program can be read and rendered by _______.',
        point: 5,
        options: [
          {
            value: 'Compiler',
            isRight: false,
          },
          {
            value: 'Server',
            isRight: false,
          },
          {
            value: 'Web Browser',
            isRight: true,
          },
          {
            value: 'Interpreter',
            isRight: false,
          },
        ],
      },
    ],
  },
  {
    quizName: 'css',
    quizCategory: 'easy',
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1650706085/CSS-new-features-2021_bc1lgw.png',
    quizId: '85c493d3-04c1-43c1-827f-e6b9286b14e3',
    points: 5,
    questions: [
      {
        question: 'How can you created rounded corners using CSS3?',
        point: 5,
        options: [
          {
            value: 'border[round]: 30px;',
            isRight: false,
          },
          {
            value: 'corner-effect: round;',
            isRight: false,
          },
          {
            value: 'border-radius: 30px;',
            isRight: true,
          },
          {
            value: 'alpha-effect: round-corner;',
            isRight: false,
          },
        ],
      },
      {
        question: 'How do you add shadow to elements in CSS3?',
        point: 5,
        options: [
          {
            value: 'box-shadow: 10px 10px 5px grey;',
            isRight: true,
          },
          {
            value: 'shadow-right: 10px shadow-bottom: 10px;',
            isRight: false,
          },
          {
            value: 'shadow-color: grey;',
            isRight: false,
          },
          {
            value: 'alpha-effect[shadow]: 10px 10px 5px grey;',
            isRight: false,
          },
        ],
      },
      {
        question: 'How to you modify a border image using CSS3?',
        point: 5,
        options: [
          {
            value: 'border: url(image.png);',
            isRight: true,
          },
          {
            value: 'border-variable: image url(image.png);',
            isRight: false,
          },
          {
            value: 'border-image: url(border.png) 30 30 round;',
            isRight: false,
          },
          {
            value: 'None',
            isRight: false,
          },
        ],
      },
      {
        question: 'What does the a stand for in RGBa?',
        point: 5,
        options: [
          {
            value: 'alpha',
            isRight: true,
          },
          {
            value: 'aqua',
            isRight: false,
          },
          {
            value: 'Apple',
            isRight: false,
          },
          {
            value: 'about',
            isRight: false,
          },
        ],
      },
      {
        question:
          '____________ property specifies an image to use as the background of an element',
        point: 5,
        options: [
          {
            value: 'backg-img',
            isRight: false,
          },
          {
            value: 'backg-image',
            isRight: false,
          },
          {
            value: 'background-img',
            isRight: false,
          },
          {
            value: 'background-image',
            isRight: true,
          },
        ],
      },
    ],
  },
  {
    quizName: 'js',
    quizCategory: 'medium',
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1650705300/javascript_iptnxg.png',
    quizId: 'a846973f-2f31-4988-b958-0073df2d2f58',
    points: 10,
    questions: [
      {
        question: "<script>document.write( typeof( '1' + 2) ); </script>",
        point: 10,
        options: [
          {
            value: 'boolean',
            isRight: false,
          },
          {
            value: 'string',
            isRight: true,
          },
          {
            value: 'number',
            isRight: false,
          },
          {
            value: 'None of the above',
            isRight: false,
          },
        ],
      },
      {
        question:
          '<script>let ans = 6 / "3";document.write ( typeof ans );< /script>',
        point: 10,
        options: [
          {
            value: 'None of the above',
            isRight: false,
          },
          {
            value: 'number',
            isRight: true,
          },
          {
            value: 'integer',
            isRight: false,
          },
          {
            value: 'string',
            isRight: false,
          },
        ],
      },
      {
        question: '<p id="demo">May the code be with you.</p>',
        point: 10,
        options: [
          {
            value: 'document.getElementById("demo").innerHTML = "Hola!";',
            isRight: true,
          },
          {
            value: 'document.getElement("p").innerHTML = "Hola!";',
            isRight: false,
          },
          {
            value: '#demo.innerHTML = "Hola!";',
            isRight: false,
          },
          {
            value: 'document.getElementByName("p").innerHTML = "Hola!";',
            isRight: false,
          },
        ],
      },
      {
        question:
          'What is the correct precedence of the operator in javascript',
        point: 10,
        options: [
          {
            value: '() [] . ++',
            isRight: true,
          },
          {
            value: '++ . [] ()',
            isRight: false,
          },
          {
            value: '. ++ [] ()',
            isRight: false,
          },
          {
            value: '() ++ . [',
            isRight: false,
          },
        ],
      },
      {
        question:
          'What will be the output of the following code snippet let gfg = ”GeeksforGeeks” console.log(gfg.charAt(4))',
        point: 10,
        options: [
          {
            value: 'G',
            isRight: false,
          },
          {
            value: 'e',
            isRight: false,
          },
          {
            value: 'k',
            isRight: false,
          },
          {
            value: 's',
            isRight: true,
          },
        ],
      },
    ],
  },
  {
    quizName: 'react',
    quizCategory: 'medium',
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1651742575/Ekran-Resmi-2019-11-18-18.08.13_gsxjzh.png',
    quizId: 'a846973f-2f31-4988-b92323-0073df2d2f58',
    points: 10,
    questions: [
      {
        question: 'We can use REACT for server side rendering. - TRUE or FALSE',
        point: 10,
        options: [
          {
            value: 'TRUE',
            isRight: true,
          },
          {
            value: 'FALSE',
            isRight: false,
          },
        ],
      },
      {
        question: 'We can use hooks in class components - TRUE or FALSE',
        point: 10,
        options: [
          {
            value: 'TRUE',
            isRight: false,
          },
          {
            value: 'FALSE',
            isRight: true,
          },
        ],
      },
      {
        question: 'which is not true',
        point: 10,
        options: [
          {
            value: 'Prop drilling is better than context api";',
            isRight: true,
          },
          {
            value: 'Context api is used to maintain states globally";',
            isRight: false,
          },
          {
            value: 'For one or two level we can use prop drilling.',
            isRight: false,
          },
          {
            value: 'We can use two or more contexts in a react application',
            isRight: false,
          },
        ],
      },
      {
        question: 'The flow of the react hooks in functional components - ',
        point: 10,
        options: [
          {
            value:
              'mount - set new state - rerender - useEffect clean up - useEffect - unmount - useEffect clean up',
            isRight: true,
          },
          {
            value:
              'mount - rerender - set new state - useEffect clean up - useEffect - unmount - useEffect clean up ',

            isRight: false,
          },
          {
            value:
              'mount - set state - rerender  - useEffect - useEffect clean up - unmount - useEffect clean up',

            isRight: false,
          },
          {
            value:
              'mount - set state - rerender - useEffect clean up - useEffect - useEffect clean up - unmount',

            isRight: false,
          },
        ],
      },
      {
        question: 'useRef rerenders react component - TRUE or FALSE',
        point: 10,
        options: [
          {
            value: 'TRUE',
            isRight: false,
          },
          {
            value: 'FALSE',
            isRight: true,
          },
        ],
      },
    ],
  },
  {
    quizName: 'dsa',
    quizCategory: 'hard',
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1651744200/images_gwjaim.jpg',
    quizId: 'a846973f-2f31-4988-b95232sa-0073df2d2f58',
    points: 15,
    questions: [
      {
        question: 'Which one of the below mentioned is linear data structure',
        point: 15,
        options: [
          {
            value: 'Queue',
            isRight: false,
          },
          {
            value: 'Stack',
            isRight: false,
          },
          {
            value: 'Array',
            isRight: false,
          },
          {
            value: 'All of the above',
            isRight: true,
          },
        ],
      },
      {
        question: 'Which of the following has search effeciency of Ο(1) −',
        point: 15,
        options: [
          {
            value: 'Tree',
            isRight: false,
          },
          {
            value: 'Heap',
            isRight: false,
          },
          {
            value: 'Hash Table',
            isRight: true,
          },
          {
            value: 'Linked List',
            isRight: false,
          },
        ],
      },
      {
        question: 'Linked list search complexity is',
        point: 15,
        options: [
          {
            value: 'O(1)',
            isRight: false,
          },
          {
            value: 'O(n)',
            isRight: true,
          },
          {
            value: 'O(logn)',
            isRight: false,
          },
          {
            value: 'O(loglogn)',
            isRight: false,
          },
        ],
      },
      {
        question: 'The complexity of merge sort algorithm is',
        point: 15,
        options: [
          {
            value: 'O(n)',
            isRight: false,
          },
          {
            value: 'O(log n)',
            isRight: false,
          },
          {
            value: 'O(n2)',

            isRight: false,
          },
          {
            value: 'O(n log n)',

            isRight: true,
          },
        ],
      },
      {
        question: 'Value of the postfix expression 6 3 2 4 + – * is',
        point: 15,
        options: [
          {
            value: '-12',
            isRight: false,
          },
          {
            value: '-10',
            isRight: false,
          },
          {
            value: '18',
            isRight: false,
          },
          {
            value: '-18',
            isRight: true,
          },
        ],
      },
    ],
  },
];
