import notificationButton from '../../assets/img/notification-icon.svg';
import './styles.css';
function NotificationButton() {
    return (
        <div className="dsmeta-red-btn-container">
            <div className="dsmeta-red-btn">
                <img src={notificationButton} alt="Notificar" />
            </div>
        </div>
    );
}

export default NotificationButton;