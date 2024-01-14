import Ticket from "@mui/icons-material/LocalActivity";

export const UserWithPoints = ({ user }) => (
  <div className="header-user">
    {user.user_name}
    <div className="ticket-with-value">
      {user.points || 0} <Ticket />
    </div>
  </div>
);
