import { PrivateRoutes } from "../../../routes/DOMRoutes"

function LayoutAdmin({routes}){
    return (
       <PrivateRoutes routes={routes} />
    )
}

export default LayoutAdmin