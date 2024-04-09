export interface EnvironmentInterface {
  SERVER_PORT: number;
}

const environment: EnvironmentInterface = {
  SERVER_PORT: parseInt(process.env.SERVER_PORT || "3000", 10),
};

export default environment;
