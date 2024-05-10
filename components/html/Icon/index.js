import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faArrowRight, faArrowDown, faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons'

const icons = {
    "faAngleLeft": faAngleLeft,
    "faAngleRight": faAngleRight,
    "faAngleDown": faAngleDown,
    "faArrowRight": faArrowRight,
    "faArrowDown": faArrowDown,
    "faXmark": faXmark
};

export default function Icon({ icon }) {
    const matchingIcon = icons[icon];

    return (
        <FontAwesomeIcon icon={matchingIcon} />
    );
}