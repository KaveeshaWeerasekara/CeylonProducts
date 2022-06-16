import Nav from '../../components/Client Panel/Nav'
import Sec1 from '../../components/Client Panel/Home/Section 1/Sec1'
import Sec2 from '../../components/Client Panel/Home/Section 2/Sec2'
import Sec3Grid from '../../components/Client Panel/Home/Section 3/Sec3Grid'
import Sec4 from '../../components/Client Panel/Home/Section 4/Sec4'
import Sec5 from '../../components/Client Panel/Home/Section 5/Sec5'
import ImageGrid from '../../components/Client Panel/Home/Section 6/ImageGrid'
import Footer from '../../components/Client Panel/Footer'

export default function Home() {
  return (
    <div>
      <Nav />
      <Sec1 />
      <Sec2 />
      <Sec3Grid />
      <Sec4 />
      <Sec5 />
      <ImageGrid />
      <Footer />
    </div>
  );
}
