import { Skeleton } from "@mui/material";
import HeroesSection from "../HeroesSection/HeroesSection";

export default function HeroSkeleton(){
    return(
        <Skeleton variant='rectangular'>
            <HeroesSection />
        </Skeleton>
    )
}