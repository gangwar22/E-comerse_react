// import { faker } from '@faker-js/faker';
import { CartContext} from './cartContext';
import { useContext } from 'react';
import Card from './Card';

function Products() {

    const {shopping:{products}}=useContext(CartContext)

    const cards = products.map((item) => {
        return <Card key={item.id} data={item} />
    })

    return (
        <div className="products">
            {cards}
        </div>
    );
}

export default Products