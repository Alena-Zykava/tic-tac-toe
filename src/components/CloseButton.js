
import { useWS } from "../hooks/ws";

const CloseButton = () => {
    const {ws, isWs} = useWS();

    const handleClick = () => {
        ws?.close();
    };

    return <button onClick={handleClick} disabled={!isWs}>Close</button>
}

export default CloseButton;