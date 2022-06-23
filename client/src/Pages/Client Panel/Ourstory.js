import Nav from '../../components/Client Panel/Nav'
import Sec1 from '../../components/Client Panel/Ourstory/Section 1/Sec1'

import Sec3 from '../../components/Client Panel/Ourstory/Section 3/Sec3'
import Sec4 from '../../components/Client Panel/Ourstory/Section 4/Sec4'
import Sec5 from '../../components/Client Panel/Ourstory/Section 5/Sec5'

import Footer from '../../components/Client Panel/Footer'
import Team from '../../components/Client Panel/Ourstory/Section n/Team'


export default function Ourstory() {
  return (
    <div>
      <Nav />
      <Sec1 />
      <Sec3/>
      <Sec4 />
      <Team/>
      <Sec5/>
      <Footer />
    </div>
  );
}