import React, {FC} from 'react';
import { Cell } from '../models/Cell';
import {findAllByDisplayValue} from "@testing-library/react";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell,selected,click}) => { //FC- functional component
    return ( //join()- чтобы два класса объединить в одну строку
        <div className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
             onClick={() => click(cell)}
             style={{background: cell.available && cell.figure ? 'green' : ''}}>


            {cell.figure?.logo && <img src={cell.figure.logo}/>}
            {cell.available && !cell.figure && <div className={"available"}></div>}
        </div>
    );
};

export default CellComponent;