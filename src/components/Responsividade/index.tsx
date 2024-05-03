import { Container } from "./style"
import bgMobile from '../../assets/home/background-home-mobile.jpg';
import bgTablet from '../../assets/home/background-home-tablet.jpg';

interface BackgroundImageProps {
    mobile: string;
    tablet: string;
}  

export const Responsividade: React.FC<BackgroundImageProps> = ({mobile, tablet}) => {
   
  return (
    <>
        <Container>
            <img data-mobile={mobile} data-tablet={tablet} alt="" />
        </Container>
    </>
  )
}
