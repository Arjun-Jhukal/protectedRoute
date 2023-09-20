import { Navigate } from "react-router-dom";
import { useGetLoginUserQuery } from "../services/user";
import { useAppSelector } from "../store/Hooks";
import { Box } from "@mui/material";

interface Props {
  children: JSX.Element;
}
export default function Private(props: Props) {
  const { children } = props;

  const token: string = useAppSelector((state) => state.token.accessToken);

  console.log(token);

  const { data: user, isLoading } = useGetLoginUserQuery(token);

  if (!user && !token) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading || !user) {
    return (
      <Box>
        <p>User Not found</p>
      </Box>
    );
  }

  return (
    <div className="privateRoute">
      <div className="row">
        <div className="col-lg-3 col-1">
          <p>{user.email}</p>
        </div>
        <div className="col-lg-9 col-11">{children}</div>
      </div>
    </div>
  );
}
