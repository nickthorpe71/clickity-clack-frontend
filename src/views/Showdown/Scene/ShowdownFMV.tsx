import React, { useState, useEffect, useContext } from "react";

// types
import { SoundManagerContextType } from "../../../types";

// context
import { SoundManager } from "../../../context/soundManager";

// utils
import { sleep } from "../../../utils";

// assets
import backgroundTint from "../../../assets/images/fmv/background-tint.png";
import bottomLine from "../../../assets/images/fmv/bottom-line.png";
import topLine from "../../../assets/images/fmv/top-line.png";
import bladeMasterCloseUp from "../../../assets/images/fmv/blade-master-close-up.png";
import smilingSamuraiCloseUpLeft from "../../../assets/images/fmv/smiling-samurai-close-up-left.png";

const ShowdownScene = () => {
    const { playSFX } = useContext(SoundManager) as SoundManagerContextType;
    const [portraitTrigger, setPortraitTrigger] = useState(false);
    const [fadeOutTrigger, setFadeOutTrigger] = useState(false);

    useEffect(() => {
        delaySequence();
    }, []);

    const delaySequence = async () => {
        await sleep(600);
        playSFX("fmv");
        await sleep(400);
        setPortraitTrigger(true);
        await sleep(1700);
        setFadeOutTrigger(true);
    };

    return (
        <div
            className={`absolute top-0 left-0 w-screen h-screen ${
                fadeOutTrigger && "animate-fade-out"
            }`}
        >
            <img
                className='absolute top-0 left-0 w-screen h-screen animate-fade-in'
                src={backgroundTint}
                alt='background tint'
            />
            <img
                className='absolute h-2/5 top-0 left-0 w-screen animate-fade-in-down'
                src={topLine}
                alt='top line'
            />
            <img
                className='absolute h-2/5 bottom-0 left-0 w-screen animate-fade-in-up'
                src={bottomLine}
                alt='bottom line'
            />
            {portraitTrigger && (
                <>
                    <img
                        className='absolute h-[28%] bottom-0 right-0 animate-slide-in-right'
                        src={bladeMasterCloseUp}
                        alt='blade master close up'
                    />
                    <img
                        className='absolute h-[28%] top-0 left-0 animate-slide-in-left'
                        src={smilingSamuraiCloseUpLeft}
                        alt='smiling samurai close up'
                    />
                </>
            )}
        </div>
    );
};

export default ShowdownScene;
