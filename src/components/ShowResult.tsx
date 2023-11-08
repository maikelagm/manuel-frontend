import { Typography } from "@material-tailwind/react"


import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function DefaultAccordion() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <>
            <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </>
    );
}

function Puntuacion() {
    return (
        <div className=" w-40 h-40 ring-4 ring-primary-400 flex flex-col justify-center items-center rounded-full">
            <Typography variant="h1">
                0.75
            </Typography>
        </div>
    )
}
const ShowResult = () => {
    return (
        <div className="w-fit p-4">
            <Typography variant="h4" color="blue-gray" className="dark:text-primary-300">
                Resultados
            </Typography>
            <Typography variant="small" color="blue-gray" className="dark:text-primary-400">
                Puntuación y vulnerabilidades detectadas
            </Typography>
            <div className="mt-8 space-y-4">
                <Puntuacion />

                <DefaultAccordion />
            </div>
        </div>
    )
}

export default ShowResult