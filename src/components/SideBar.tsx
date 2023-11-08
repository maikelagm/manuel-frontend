import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    BeakerIcon,
    RectangleStackIcon
} from "@heroicons/react/24/solid";

import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../context/auth";

export function Sidebar() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: React.SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };

    const { Logout } = useAuth();
    const navigate = useNavigate();

    return (
        <Card className="h-[calc(100vh-2rem)] m-4 max-w-[20rem] p-4 shadow-xl dark:bg-neutral-900 dark:text-neutral-50 shadow-blue-gray-900/5">
            <Link to="/">
                <Logo />
            </Link>
            <List>
                <ListItem onClick={() => navigate("/eval/connect")}>
                    <ListItemPrefix>
                        <BeakerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Evaluar Base de Datos
                </ListItem>

                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <RectangleStackIcon className="w-5 h-5" />
                            </ListItemPrefix>
                            <Typography className="mr-auto font-normal">
                                Historial
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                PostgreSQL
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                MySQL
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <hr className="my-2 border-blue-gray-50" />

            </List>
            <div className="flex-1 flex flex-col-reverse">
                <List >
                    <ListItem onClick={() => navigate("/profile")}>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Perfil
                    </ListItem>
                    <ListItem onClick={() => navigate("/settings")}>
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Ajustes
                    </ListItem>
                    <ListItem
                        onClick={() => Logout()}>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Cerrar sesión
                    </ListItem>
                </List>
            </div>
        </Card>
    );
}

export default Sidebar;