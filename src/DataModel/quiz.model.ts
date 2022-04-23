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
        point: 5,
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
        point: 5,
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
        point: 5,
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
        point: 5,
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
        point: 5,
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
];
