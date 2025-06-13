import { v4 as uuidv4 } from 'uuid';
import SIH from '../images/sih.png';
import Rogitihaas from '../images/rogitihaas.png';
import Fiserv from '../images/fiserv.jpg'
import SamparkPlasma from '../images/sampark-plasma.jpg';
import PBES from '../images/pbes.png';
import CBA from '../images/cba.png';
import OMR from '../images/omr.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Feature based AI Transaction Routing System',
    desc:
      'Developed a real-time transaction routing application that intelligently analyzes various transaction attributes to route payments',
    img: Fiserv,
  },
  {
    id: uuidv4(),
    name: 'AI-Powered Chatbot for Batch Monitoring, Merchant Information, and  Settlement Status',
    desc:
      'Developed an AI chatbot with 3 distinct profiles',
    img: Fiserv,
  },
  {
    id: uuidv4(),
    name: 'RogItihaas',
    desc:
      'Creating an online centralized health system to completely transform the way we manage healthcare in India and make India\'s all रोग an इतिहास',
    img: Rogitihaas,
    link: 'https://github.com/shahhilag4/RogItihaas',
  },
  {
    id: uuidv4(),
    name: 'Sampark Plasma',
    desc:
      'An application to bridge the gap between the donors and patient built during the onset of COVID-19.Impacted 50 patients across India.',
    img: SamparkPlasma,
    link: 'https://github.com/shahhilag4/Sampark_Plasma',
  },
  {
    id: uuidv4(),
    name: 'Proctored Examination System',
    desc:
      'A web app to proctor online examinations and provide a safe and fair enviornment.',
    img: PBES,
    link:'https://github.com/shahhilag4/Proctored_Based_Exam_System',
  },
  {
    id: uuidv4(),
    name: 'Centralized Loan System',
    desc:
      'An application to make the loan application system more fast and transparent by centrally managing the application process.',
    img: CBA,
    link:"https://github.com/shahhilag4/Centralized_Loan_System",
  },
  {
    id: uuidv4(),
    name: "OMR Scanner",
    desc:
      'OMR Scanner is a mobile/desktop application with the aim of easing the OMR evaluation process by directly uploading the OMR images into the system to automatically evaluate the tests.',
    img: OMR,
    link:'https://github.com/shahhilag4/OMR',
  },
  {
    id: uuidv4(),
    name: 'AIYOJAN',
    desc:
      'AIYOJAN is a centralized academic calendar system to manage the college and university activities.',
    img: SIH,
    link:'https://github.com/shahhilag4/SIH22_AIYOJAN',
  },
];

export default projects;
