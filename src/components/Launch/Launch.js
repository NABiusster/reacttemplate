import styles from './Launch.module.css'
const Launch = ({launch}) => {
    const {mission_name, launch_year, links} = launch
    return (
        <div className={`${styles.flex} ${styles.bordered}`}>
            <img src={links.mission_patch_small} alt={mission_name}/>
            <div className={`${styles.details} ${styles.flex} ${styles.bordered}`}>
                <div>mission_name:{mission_name}</div>
                <div>launch_year:{launch_year}</div>
            </div>
        </div>
    )
        ;
};

export {Launch};