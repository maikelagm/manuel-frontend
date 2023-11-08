import { Outlet } from "react-router-dom"
import { StepperWithIcon } from "../components/Stepper"

const EvalPage = () => {

    return (
        <div className="absolute top-16 left-0 right-0 mx-auto w-fit flex flex-col items-center">
            <StepperWithIcon />
            <div className="flex w-fit">
                <Outlet />
            </div>
        </div>
    )
}

export default EvalPage