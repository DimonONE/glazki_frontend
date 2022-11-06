import React, { useEffect, useState } from "react";
import "../css/admin.scss";

interface IProps {
    item: number | null;
    type: string;
}

interface State {
    audio: any;
    setAudio: any;
    setButtonName: any;
    buttonName: string;
}

let a: any;
const FileComponent: React.FC<IProps> = (props) => {
    const [state, setState] = useState<State>({
        audio: null,
        setAudio: null,
        setButtonName: null,
        buttonName: "Play"
    });

    useEffect(() => {
        (async function () {
            if (a) {
                a.pause();
                a = null;
                state.setButtonName("Play");
            }
            if (state.audio) {
                a = new Audio(state.audio);
                a.onended = () => {
                    state.setButtonName("Play");
                };
            }
        })();
    }, [state.audio]);

    const handleClick = () => {
        if (state.buttonName === "Play") {
            a.play();
            state.setButtonName("Pause");
        } else {
            a.pause();
            state.setButtonName("Play");
        }
    };

    const addFile = (e: any) => {
        if (e.target.files[0]) {
            // state.setAudio(URL.createObjectURL(e.target.files[0]));
            setState((prev) => ({
                ...prev,
                audio: URL.createObjectURL(e.target.files[0])
            }));
        }
    };

    return (
        <div className="flex">
            <button onClick={handleClick}>{state.buttonName}</button>
            <input type="file" onChange={addFile} />
        </div>
    );
};

export default FileComponent;
