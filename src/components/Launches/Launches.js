import {useEffect, useState} from "react";
import {launchService} from "../../services/launchService";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunch] = useState([])
    useEffect(() => {
        launchService.getAll().then(({data}) => {
            const filtered = data.filter(launch=>launch.launch_year !== "2020")
            setLaunch(filtered)
        })
    }, []);
    console.log(launches);
    return (
        <div>
            {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {Launches};