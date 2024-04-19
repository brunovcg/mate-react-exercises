/*

Implemente a tabela combinando os DB de Countries e Products

- Implementar um filtro global para Description, Name (product)
- Implementar um filtro atraves de botões para as countries
    - Estado Inicial deve ser ALL,
    - Quando Clico num country, aquele country deve ser adicionado ao filtro (&&)
    - Quando Click num butão que já está selecionado, esse deve soltar esse filtro
    - O Botão que estiver filtrando deve ficar verde (Selected)
    - Os 2 filtros devem trabalhar juntos (GLobal e Country)
*/

import COUNTRIES from './db/countries.json';
import PRODUCTS from './db/products.json';
import './styles.css';

export default function CombinedDBFilters() {
  return (
    <div className="many-filters">
      <div className="filters">
        <input name="global-filter" placeholder="Global Filter" />
        <div className="buttons">
          <button>All</button>
          <button className="selected">Country1</button>
          <button>Country2</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Header1</th>
            <th>Header2</th>
            <th>Header2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data Row1 Column1</td>
            <td>Data Row1 Column2</td>
            <td>Data Row1 Column3</td>
          </tr>
          <tr>
            <td>Data Row2 Column1</td>
            <td>Data Row2 Column2</td>
            <td>Data Row2 Column3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

