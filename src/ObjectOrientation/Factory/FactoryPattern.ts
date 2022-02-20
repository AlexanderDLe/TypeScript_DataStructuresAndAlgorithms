import { PlaneFactory } from "./PlaneFactory"

export default () => {
  const planeFactory = new PlaneFactory();
  const boeingPlane1 = PlaneFactory.getPlaneInstance('boeing');
  const boeingPlane2 = PlaneFactory.getPlaneInstance('boeing');
  const airbusPlane1 = PlaneFactory.getPlaneInstance('airbus');

  console.log(boeingPlane1.fly())
  console.log(boeingPlane2.fly());
  console.log(airbusPlane1.fly());
}