"use client"
import React, { useState, useEffect, useRef } from 'react';
import '../styles/BackgroundMusic.css';

const BackgroundMusic = ({ audioUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Try to play immediately
        const startPlay = () => {
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                    console.log("Autoplay successful!");
                    removeListeners();
                })
                .catch(err => {
                    console.log("Autoplay blocked by browser. Waiting for user interaction...");
                });
        };

        const removeListeners = () => {
            window.removeEventListener('click', startPlay);
            window.removeEventListener('touchstart', startPlay);
            window.removeEventListener('scroll', startPlay);
        };

        // Add listeners only for intentional user interactions (mousemove removed - fires too frequently)
        window.addEventListener('click', startPlay, { passive: true });
        window.addEventListener('touchstart', startPlay, { passive: true });
        window.addEventListener('scroll', startPlay, { once: true, passive: true });

        // Attempt immediate playback
        startPlay();

        return () => {
            removeListeners();
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player-container">
            <audio 
                ref={audioRef} 
                src={audioUrl} 
                loop 
                autoPlay
                preload="auto"
            />
            <button 
                className={`music-toggle ${isPlaying ? 'playing' : ''}`} 
                onClick={togglePlay}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                <div className="visualizer">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <i className={`bx ${isPlaying ? 'bx-pause' : 'bx-play'}`}></i>
            </button>
        </div>
    );
};

export default BackgroundMusic;

