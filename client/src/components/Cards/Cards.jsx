import Card from '../Card/Card';
import { CardsContainer } from './styledComponents';

export default function Cards({characters, onClose}) {
   // const key = props.characters;

   // console.log({characters});
   return (<CardsContainer >
      {characters.map(({id, name, status, species, gender, image, origin}) => {
       return <Card 
       key={id}
       id={id}
       name={name}
       status= {status} 
       species={species} 
       gender={gender}
       image={image}
       origin={origin.name}
       onClose={onClose}
       />
      })}
   </CardsContainer >);  
}
