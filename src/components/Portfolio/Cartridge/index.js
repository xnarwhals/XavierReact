import "./index.scss"; // respective component style file 
import { useDrag } from 'react-dnd';

const Cartridge = ({cartridgeData}) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "CARTRIDGE",
        item: cartridgeData,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={dragRef}
            style={{
                opacity: isDragging ? 0 : 1,
                cursor: "move",
            }}
            className="cartridge"
        >
            <img src={cartridgeData.image} alt={cartridgeData.id} style={{ width: "125px" }} />
        </div>
    
    )
}

export default Cartridge;
