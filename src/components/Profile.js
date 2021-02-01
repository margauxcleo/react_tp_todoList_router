import { useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import { toast } from "react-toastify";
toast.configure();

const Profile = (props) => {
    const { username } = useParams();

    const handleClick = (event) => {
        event.preventDefault();
        toast.success("Vous avez bien déclenché une notification");
    }

    return  (
        <Jumbotron>
            <h1>Mon profil</h1>
            <h2>{username ? `Bienvenue utilisateur ${username}` : `Connectez-vous.`}</h2>
            <p>
                <Button variant="success" onClick={handleClick}>Déclencher une notif</Button>
            </p>
        </Jumbotron>
    );
};

export default Profile;