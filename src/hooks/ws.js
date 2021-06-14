import { useEffect, useState } from "react";

import { WS } from '../api/ws';
import { useInterval } from "./interval";

export function useWS() {
    const [ws, setWs] = useState(null);
    const [isWs, setIsWs] = useState(null);

    useEffect(() => {
        if (ws) {
            return;
        }
        setWs(WS.getInstance());
    }, [ws]);

    useInterval(() => {
        if (ws && isWs !== ws.isWsReady) {
            setIsWs(ws.isWsReady);
        }
    }, 5)

    return { ws, isWs}
}