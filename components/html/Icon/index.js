import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const icons = {
    "faAngleLeft": faAngleLeft,
    "faAngleRight": faAngleRight,
    "faArrowRight": faArrowRight,
};

export default function Icon({ icon }) {
    const matchingIcon = icons[icon];

    return (
        <FontAwesomeIcon icon={matchingIcon} />
    );
}