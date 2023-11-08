import { Checkbox, Typography } from "@material-tailwind/react";

export function CheckboxWithDescription(props) {

    const { loading } = props;

    return (
        <>
            <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-primary-300">
                Heading
            </Typography>
            <div className="w-fit p-4">
                <Checkbox
                    label={<div className="ml-4">
                        <Typography color="blue-gray" variant="h6" className="font-medium">
                            Remember Me
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            You&apos;ll be able to login without password for 24 hours.
                        </Typography>
                        <div className="infinityBarLoader" />
                    </div>}
                    containerProps={{
                        className: "-mt-5",
                    }}
                    crossOrigin={undefined} />
            </div>
        </>
    );
}


export function SelectTest() {
    return (
        <div className="w-fit p-4">
            <Typography variant="h4" color="blue-gray" className="dark:text-primary-300">
                Pruebas
            </Typography>
            <Typography variant="small" color="blue-gray" className="dark:text-primary-400">
                Seleccione las pruebas a realizar
            </Typography>
            <div className="mt-8">
                <CheckboxWithDescription />
                <CheckboxWithDescription />
                <CheckboxWithDescription />
                <CheckboxWithDescription />
            </div>
        </div>
    )
}