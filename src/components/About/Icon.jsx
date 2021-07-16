 
import clip from '../../img/clip2.png';
import clip3 from '../../img/clip3.png';
import clip4 from '../../img/clip4.png';
import clip5 from '../../img/clip5.png';
import clip6 from '../../img/clip6.png';
import clip7 from '../../img/clip7.png';
import clip8 from '../../img/clip8.png';
import clip9 from '../../img/clip9.png';
import clip10 from '../../img/clip10.png';
import clip11 from '../../img/clip11.png';
import clip12 from '../../img/clip12.png';
import clip13 from '../../img/clip13.png';
import { Row,Col } from 'reactstrap';
import React  from 'react'; 
function Icon() {
  return (
    <div>
<Row>
        <Col><img className="clip" src={clip} alt="about" /></Col>
        <Col><img className="clip" src={clip3} alt="about" /></Col>
        <Col><img className="clip" src={clip4} alt="about" /></Col>
        <Col><img className="clip" src={clip5} alt="about" /></Col>
        <Col><img className="clip" src={clip6} alt="about" /></Col>
        <Col><img className="clip" src={clip7} alt="about" /></Col>
        <Col><img className="clip" src={clip8} alt="about" /></Col>
        <Col><img className="clip" src={clip9} alt="about" /></Col>
        <Col><img className="clip" src={clip10} alt="about" /></Col>
        <Col><img className="clip" src={clip11} alt="about" /></Col>
        <Col><img className="clip" src={clip12} alt="about" /></Col>
        <Col><img className="clip" src={clip13} alt="about" /></Col>
</Row>
   </div>
  );
}
export default Icon;