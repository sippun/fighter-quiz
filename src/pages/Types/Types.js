import './Types.css';
import { Link } from 'react-router-dom';
import { getDetails } from './details';

export default function About() {
  const details = getDetails();

  return (
    <>
      <br/><br/><br/><br/>
      <div className="types-container">
        <Link to="/types/prototype">EMTJ - Itachi Uchiha</Link>
        <p>{details[1].name}-{details[1].description}</p>
        <p>EMRJ - Kyojuro Rengoku, Tsunade, Gaara</p>
        <p>EMRS - Hinata Hyuga</p>
        <p>EPTJ - Kaneki Ken</p>
        <p>EPTS - Ippo Makunouchi</p>
        <p>EPRJ - Takemichi Hanagaki, Eren Yeager?, Nezuko Kamado?</p>
        <p>EPRS - Rock Lee, Might Guy, Luffy, Saitama, Sakura Haruno</p>
        <p>IMTJ - Shikamaru Nara, Ochaco Uraraka</p>
        <p>IMTS - Kakashi Hatake, Shinobu Kocho, Armin</p>
        <p>IMRJ - Tanjiro Kamado, Ichigo Kurosaki, Usagi Tsukino/Sailor Moon?, FSN Saber?</p>
        <p>IMRS - Shigeo Kageyama (Mob), Zenitsu Agatsuma, Sasuke Uchiha</p>
        <p>IPTJ - Izuku Midoriya, Mikasa Ackerman?, Motoko Kusanagi?</p>
        <p>IPTS - Aoi Todo</p>
        <p>IPRJ - Yuji Itadori, Whitebeard?</p>
        <p>IPRS - Naruto Uzumaki, Katsuki Bakugo</p>
      </div>
    </>
  );
}
