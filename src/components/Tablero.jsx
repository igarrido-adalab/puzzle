import { useState } from 'react';

import '../scss/Tablero.scss';

/*
<https://stackoverflow.com/questions/56414667/how-to-crop-a-image-into-several-rectangular-grids-using-imagemagick>
*/

function Tablero() {

  const [tablero, setTablero] = useState(
    [
      null, null, null, 
      null, null, null, 
      null, null, null, 
    ]
    );

  const [ imagenes, setImagenes ] = useState( 
    [
      './images/kitten_0.jpg', './images/kitten_1.jpg', './images/kitten_2.jpg',
      './images/kitten_3.jpg', './images/kitten_4.jpg', './images/kitten_5.jpg',
      './images/kitten_6.jpg', './images/kitten_7.jpg', './images/kitten_8.jpg',
    ]
   );

  const [ piezaSelec, setPiezaSelec ] = useState( '' );

  const handleClickPieza = (event) => {
    setPiezaSelec(event.currentTarget.src);
  };

  const handleClickCasilla = (event) => {
    const posicionCasillaEnElTablero = event.currentTarget.id;

    const tableroClonado = [...tablero];
    tableroClonado[posicionCasillaEnElTablero] = piezaSelec;

    setTablero(tableroClonado);
    setPiezaSelec('');
  }

  return (
    <div className="page">
      <div className="tablero grid">
        {tablero.map((casilla,idx) => casilla === null ? <div key={idx} id={idx} onClick={handleClickCasilla}></div> : <img src={casilla} />)}
      </div>
      <div className="piezas-desordanadas">
        {imagenes.map(pieza => <img key={pieza} className={piezaSelec.endsWith(pieza) && 'active'} src={pieza} alt="" onClick={handleClickPieza} />)}
      </div>
    </div>
    );
}


export default Tablero;