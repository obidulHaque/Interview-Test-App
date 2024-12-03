import { useEffect } from "react";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/game-board");
  }, []);

  return <></>;
};

export default Register;
