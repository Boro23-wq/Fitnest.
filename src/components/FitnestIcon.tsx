import { useTheme } from 'next-themes';
import React from 'react';

export const FitnestIcon = ({ w, h }) => {
    const { theme, setTheme } = useTheme();
    return (
        <svg
            width={w ? w : '100'}
            height={h ? h : '100'}
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                width="250"
                height="250"
                rx="50"
                fill={theme === 'dark' ? 'white' : 'black'}
            />
            <path
                d="M100.66 84.7031C101.22 83.5826 102.104 82.6561 103.197 82.0439C104.289 81.4317 105.541 81.162 106.789 81.2698C108.037 81.3776 109.224 81.8579 110.195 82.6484C111.167 83.4389 111.879 84.5032 112.238 85.7031L126.457 133.109L138.176 109.703C138.695 108.665 139.493 107.792 140.48 107.182C141.467 106.572 142.605 106.249 143.766 106.249C144.926 106.249 146.064 106.572 147.051 107.182C148.038 107.792 148.836 108.665 149.355 109.703L160.113 131.25H197.91C203.538 119.648 206.393 106.898 206.25 94.0039C206.004 69.7422 186.539 50 162.859 50C144.074 50 131.609 61.5391 125 69.9219C118.406 61.5273 105.926 50 87.1406 50C63.4609 50 43.9961 69.7422 43.75 94.0039C43.649 102.382 44.8253 110.726 47.2383 118.75H83.6367L100.66 84.7031Z"
                fill={theme === 'dark' ? 'black' : 'white'}
            />
            <path
                d="M150.66 140.297L143.75 126.477L130.59 152.797C130.071 153.835 129.273 154.707 128.285 155.317C127.298 155.927 126.16 156.25 125 156.25C124.826 156.25 124.646 156.242 124.461 156.227C123.21 156.123 122.019 155.645 121.044 154.855C120.068 154.065 119.353 152.999 118.992 151.797L104.773 104.391L93.0547 127.797C92.5381 128.829 91.7456 129.699 90.7651 130.308C89.7846 130.918 88.6545 131.244 87.5 131.25H52.0898C55.7357 138.878 60.5885 146.385 66.6484 153.773C73.9805 162.711 87.2734 177 117.973 197.84C120.043 199.259 122.494 200.018 125.004 200.018C127.514 200.018 129.965 199.259 132.035 197.84C162.734 177 176.027 162.711 183.359 153.773C186 150.559 188.477 147.214 190.781 143.75H156.25C155.09 143.75 153.952 143.427 152.965 142.817C151.977 142.207 151.179 141.335 150.66 140.297Z"
                fill={theme === 'dark' ? 'black' : 'white'}
            />
            <path
                d="M206.25 131.25H197.91C195.832 135.58 193.45 139.757 190.781 143.75H206.25C207.908 143.75 209.497 143.092 210.669 141.919C211.842 140.747 212.5 139.158 212.5 137.5C212.5 135.842 211.842 134.253 210.669 133.081C209.497 131.908 207.908 131.25 206.25 131.25Z"
                fill={theme === 'dark' ? 'black' : 'white'}
            />
            <path
                d="M43.75 118.75C42.0924 118.75 40.5027 119.408 39.3306 120.581C38.1585 121.753 37.5 123.342 37.5 125C37.5 126.658 38.1585 128.247 39.3306 129.419C40.5027 130.592 42.0924 131.25 43.75 131.25H52.0898C50.157 127.213 48.5351 123.034 47.2383 118.75H43.75Z"
                fill={theme === 'dark' ? 'black' : 'white'}
            />
        </svg>
    );
};
