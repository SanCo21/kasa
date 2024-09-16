import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import bannerImage from '../assets/images/Image_2.png';
 

const About = () => {
  return (
    <div className="container">
      <Banner title="" image={bannerImage} showOverlay={false} />
      <div className="about-collapses">
        <Collapse 
          title= "Fiabilité"
          content={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}
        />
        <Collapse 
          title="Respect"
          content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
        />
        <Collapse 
          title="Service"
          content={<p>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance</p>}
        />
        <Collapse 
          title="Sécurité"
          content={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
        />
      </div>
    </div>
  );
};

export default About;