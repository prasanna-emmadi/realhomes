import Map from "./Map";
import { getPositionInfo } from "../../utils/propertyUtil";

const PropertiesOnMap = (props) => {
  const { properties } = props;
  const positionInfos = properties.reduce((acc, property) => {
    const positionInfo = getPositionInfo(property);
    if (positionInfo) {
      acc.push(positionInfo);
    }
    return acc;
  }, []);

  return <Map positionInfos={positionInfos} />;
};

export default PropertiesOnMap;
