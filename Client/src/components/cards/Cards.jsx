import Card from '../card/Card.jsx';
import "../cards/Cards.css";

export default function Cards(props) {
   const { characters, onClose } = props;

   return (
      <div className='Cards'>
         {characters?.map(ele => (
            <Card
               id={ele.id}
               key={ele.id}
               name={ele.name}
               status={ele.status}
               species={ele.species}
               gender={ele.gender}
               origin={ele.origin.name}
               image={ele.image}
               onClose={onClose}
            />
         ))}
      </div>
   );
}