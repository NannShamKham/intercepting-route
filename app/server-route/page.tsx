import { ServerSideFunctions } from "../utils/server-utils";
import ImageSlider from "../components/ImageSlider";
export default function ServerRoutePage() {
  console.log("Server Route Page");
  return (
    <div>
      <h1>Server Route</h1>
      <p>{ServerSideFunctions()}</p>
      <ImageSlider />
      
    </div>
  );
}