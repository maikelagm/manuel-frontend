

import { FC } from 'react';
import { Typography } from '@material-tailwind/react';
import { variant } from '@material-tailwind/react/types/components/typography';

interface Typography {
    variant: variant;
    text: string;
}

interface LogoProps {
    width?: number;
    height?: number;
    text?: boolean;
    typography?: {
        primary: Typography;
        secondary: Typography;
    };
}
export type { Typography };

const Logo: FC<LogoProps> = ({
    width = 56,
    height = 56,
    text = true,
    typography = {
        primary: {
            variant: "h5",
            text: "SQLSecureEval"
        },
        secondary: {
            variant: "small",
            text: "UCI"
        }
    }
}) => {
    return (
        <div className="flex space-x-2 mb-2 p-4">
            <svg width={width} height={height} viewBox="0 0 56.079 59">
                <g id="Grupo_6" data-name="Grupo 6" transform="translate(-1 6)">
                    <g id="Grupo_4" data-name="Grupo 4">
                        <g id="Grupo_1" data-name="Grupo 1">
                            <path
                                id="Trazado_2"
                                data-name="Trazado 2"
                                d="M25,41C11.745,41,1,37.194,1,32.5V45h.045C1.776,49.461,12.219,53,25,53s23.224-3.539,23.955-8H49V32.5C49,37.194,38.255,41,25,41Z"
                                fill="#070b0d"
                            />
                            <path id="Trazado_3" data-name="Trazado 3" d="M1,32v.5a3.108,3.108,0,0,1,.045-.5Z" fill="#38454f" />
                            <path id="Trazado_4" data-name="Trazado 4" d="M48.955,32a3.109,3.109,0,0,1,.045.5V32Z" fill="#38454f" />
                        </g>
                        <g id="Grupo_2" data-name="Grupo 2" transform="translate(0 -3)">
                            <path
                                id="Trazado_5"
                                data-name="Trazado 5"
                                d="M25,29C11.745,29,1,25.194,1,20.5V33h.045C1.776,37.461,12.219,41,25,41s23.224-3.539,23.955-8H49V20.5C49,25.194,38.255,29,25,29Z"
                                fill="#2a4251"
                            />
                            <path id="Trazado_6" data-name="Trazado 6" d="M1,20v.5a3.108,3.108,0,0,1,.045-.5Z" fill="#2a4251" />
                            <path id="Trazado_7" data-name="Trazado 7" d="M48.955,20a3.109,3.109,0,0,1,.045.5V20Z" fill="#2a4251" />
                        </g>
                        <ellipse
                            id="Elipse_1"
                            data-name="Elipse 1"
                            cx="24"
                            cy="8.5"
                            rx="24"
                            ry="8.5"
                            transform="translate(1 -6)"
                            fill="#78a2ba"
                        />
                        <g id="Grupo_3" data-name="Grupo 3" transform="translate(0 -6)">
                            <path
                                id="Trazado_8"
                                data-name="Trazado 8"
                                d="M25,17C11.745,17,1,13.194,1,8.5V21h.045C1.776,25.461,12.219,29,25,29s23.224-3.539,23.955-8H49V8.5C49,13.194,38.255,17,25,17Z"
                                fill="#3e6379"
                            />
                            <path id="Trazado_9" data-name="Trazado 9" d="M1,8v.5A3.108,3.108,0,0,1,1.045,8Z" fill="#3e6379" />
                            <path id="Trazado_10" data-name="Trazado 10" d="M48.955,8A3.109,3.109,0,0,1,49,8.5V8Z" fill="#3e6379" />
                        </g>
                    </g>
                    <g id="Grupo_5" data-name="Grupo 5" transform="translate(5 -1.012)">
                        <path
                            id="secondary"
                            d="M13.38,12.84l7.263-1.816a1.816,1.816,0,0,1,.872,0l7.263,1.816a1.816,1.816,0,0,1,1.38,1.816c0,8.915-1.271,13.618-8.461,16.232a1.816,1.816,0,0,1-1.235,0C13.271,28.273,12,23.57,12,14.655A1.816,1.816,0,0,1,13.38,12.84Z"
                            transform="translate(21.921 23.017)"
                            fill="#fff"
                        />
                        <path
                            id="secondary-2"
                            data-name="secondary"
                            d="M13.139,12.513l6-1.5a1.5,1.5,0,0,1,.719,0l6,1.5a1.5,1.5,0,0,1,1.139,1.5c0,7.359-1.049,11.241-6.985,13.4a1.5,1.5,0,0,1-1.019,0C13.049,25.254,12,21.372,12,14.012A1.5,1.5,0,0,1,13.139,12.513Z"
                            transform="translate(23.506 24.764)"
                            fill="#2ca9bc"
                        />
                    </g>
                </g>
            </svg>
            {text && (
                <div>
                    <Typography className='text-primary-500 dark:text-primary-200' variant={typography.primary.variant} >{typography.primary.text}</Typography>
                    <Typography className="text-neutral-500" variant={typography.secondary.variant} >{typography.secondary.text}</Typography>
                </div>
            )}
        </div>
    );
};

export default Logo;
