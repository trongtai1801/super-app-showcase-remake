const getContainersURL = ({appName, version, platform}) => {
  return `http://localhost:3000/${appName}?platform=${platform}&version=${version}`;
};

export default getContainersURL;